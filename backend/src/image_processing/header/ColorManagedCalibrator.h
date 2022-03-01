#ifndef BEYOND_RGB_BACKEND_COLORMANAGEDCALIBRATOR_H
#define BEYOND_RGB_BACKEND_COLORMANAGEDCALIBRATOR_H

#include <opencv2/core/optim.hpp>
#include <opencv2/opencv.hpp>
#include <lcms2.h>
#include <math.h>

#include "ImageUtil/ColorTarget.hpp"
#include "utils/csv_parser.hpp"
#include "ImgProcessingComponent.h"
#include "reference_data/ref_data_defines.hpp"
#include "reference_data/ref_data.hpp"
#include "utils/color_convertions.hpp"
#include "reference_data/white_points.hpp"

// typedef std::function<double(cv::Mat)> MinDeltaE_function;

class ColorManagedCalibrator : public ImgProcessingComponent{
/**
 * @brief Class to manage ColorManagedCalibration of images
 * It takes the 2 art images after they have bee through preprocessing
 * Optimizes some transfromation matracies then uses those matraceis to convert
 * the 6 channels from the art images to a color managed rgb image 
 */

public:
    enum ColorSpace{
        Adobe_RGB_1998, ProPhoto, sRGB, Wide_Gamut_RGB
    }; 

    ~ColorManagedCalibrator();
    void execute(CallBackFunction func, btrgb::ArtObject* images) override;
    void my_callback(std::string str);

    /**
     * @brief Helper function for displaying a matrix to stdout
     * 
     * @param matrix the matrix to be displayed
     * @param name the name of the matrix that will be displyed along with values
     */
    void display_matrix(cv::Mat* matrix, std::string name);

private:
    cv::Mat optimization_input;// Contains M and offset values in a 1D matrix
    cv::Mat M;// 2D Croping of optimazation_input if values are changed in either the other will be changed
    cv::Mat offest;// Croping of optimization_input if values are changed in either the other will be changed
    
    cv::Mat deltaE_values; // Container for holding the resulting deltaE values for each color patch
    cv::Mat color_patch_avgs;
    RefData* ref_data;

    ColorSpace color_space;
    
    double stp;
    int mid;

    /**
     * @brief Get the Matrix for converting xyz to rgb for the given color space
     * 
     * @param color_space the ColorSpace that identifies which convertion matrix to retrive
     * @return cv::Mat 
     */
    cv::Mat rgb_convertions_matrix(ColorManagedCalibrator::ColorSpace color_space=ColorManagedCalibrator::ColorSpace::ProPhoto);
    
    
    float clip_pixel(float px_value);

    /**
     * @brief Get the gamma adjustment value for the given ColorSpace
     * Defaults to ProPhoto value
     * 
     * @param color_space the ColorSpace that identifies the gamma addjustment to get
     * @return float 
     */
    float gamma(ColorManagedCalibrator::ColorSpace color_space=ColorManagedCalibrator::ColorSpace::ProPhoto);

    /**
     * @brief Applys a gamma to correct brightness
     * 
     * @param px_value the pixel value to apply gamma to
     * @param color_space the color space that defines the gamma value
     * defaults to ProPhoto
     * @return float the gamma corrected pixel value
     */
    float apply_gamma(float px_value, ColorManagedCalibrator::ColorSpace color_space=ColorManagedCalibrator::ColorSpace::ProPhoto);
    
    /**
     * @brief Initialize the optimization InputArray(optimization_input), M, and offset
     * The MinProblemSolver needs the InputArray to be a 1d Matrix but we need to optimiz both M and offset
     * This function creates optimization_input and fills it with initial starting values for both M and offset
     * It then creates a formatted cropping for M and offsets that point to the values in the InputArray 
     * 
     *  optimization_input is a 1d Matrix in the form
     *      m_1,1, m_1,2, ..., m_1,6, ..., m_3,6, offset_1, offset_2, ..., offset_6
     *  
     *  M is a 2d Matrix in the form
     *      m_1,1, m_1,2, ..., m_1,6
     *      m_2,1, m_2,2, ..., m_2,6
     *      m_3,1, m_3,2, ..., m_3,6
     * 
     *  Offset is a  1d Matrix in the form
     *      offset_1, offset_2, ..., offset_6
     * 
     * 
     */
    void build_input_matrix();

    // /**
    //  * @brief Create a ColorTarget object for the given image
    //  * 
    //  * TODO this does not belong here and it should be refactored
    //  * so that ArtObject creates and holds the ColorTarget. Doing so now
    //  * would break some other things that are not available so it will need to be
    //  * refactored once they are all merged
    //  * 
    //  * @param images The ArtObject the contains the target info
    //  * @param im the image containing the color target
    //  * @return ColorTarget 
    //  */
    // ColorTarget get_target(btrgb::ArtObject* images, btrgb::Image* im);
    
    /**
     * @brief Initialize a MxN matrix to hold the average pixel values for each color patch where 
     * M is the number of channels
     * N is the number of Color Patches 
     * 
     *   color_patch_avg is a 2d Matrix in the form 
     *   (cp_avg is the average pixel value from the color target in the actual image)
     *       cp_avg_chan1_patch_1, cp_avg_chan1_patch_2, ..., cp_avg_chan1_patch_k
     *       cp_avg_chan2_patch_1, cp_avg_chan2_patch_2, ..., cp_avg_chan2_patch_k
     *       ...                 , ...                 , ..., ...
     *       cp_avg_chan6_patch_1, cp_avg_chan6_patch_2, ..., cp_avg_chan6_patch_k 
     * @param targets an array of color targets
     * @param target_count the number of color targets
     * @param channel_count the number of channels (M) this Matrix will hold
     */
    void build_target_avg_matrix(ColorTarget targets[], int target_count, int channel_count);
    
    /**
     * @brief Runs the MinProblemSolver to optimize M and offsets for a minimal deltaE
     * This requires that build_input_matrix has been called to set up the InputArray, M, and offsets
     * as well as build_target_avg_matrix, and initialization of deltaE_values
     * 
     * When Optimization is complete all results for M, offset, and deltaE_values
     * will already be held in those data structurs 
     */
    void find_optimization();
    
    /**
     * @brief Uses the optimized M and offsets to convert the 6 channels
     * from art1 and art2 into a color managed RGB image
     * 
     * @param images the art object containing art1 and art2
     */
    void update_image(btrgb::ArtObject* images);

    
};

/////////////////////////////////////////////////////////////////////////////////
//                                DeltaE Function                             //
////////////////////////////////////////////////////////////////////////////////

class DeltaEFunction: public cv::MinProblemSolver::Function{
/**
 * @brief Helper class that defines the function used for optimizing M and offset to minimize deltaE
 * deltaE is the difference in color between what we have(from cp_avgs) and what we are expecting(from RefData)
 * 
 * An instance of this class gets passed to the MinProblemSolver which calls calc during optimization
 * 
 * NOTE: all member variables used in optimization are passed by referenc on construction.
 * This means that the creator of this class already has the results for M, offset, and delE_values
 * at the time that optimization complets
 * 
 */

public: 
    DeltaEFunction(cv::Mat* opt_in, cv::Mat* cp_avgs, cv::Mat* offeset, cv::Mat* M, RefData* ref_data, cv::Mat* delE_values);
    int getDims() const;
    /**
     * @brief The function that the MinProblemSolver calls during optimization
     * 
     * @param x input values that the solver will modify during optimization
     * @return double the deltaE computed using the current input
     */
    double calc(const double* x)const;

    /**
     * @brief Get the itteration count object
     * 
     * @return int 
     */
    int get_itteration_count(){ return this->itteration_count; }
private:
    static int itteration_count;// Keeps track of how many itteration the optimization completes
    cv::Mat* opt_in;
    cv::Mat* offeset;
    cv::Mat* M;
    cv::Mat* color_patch_avgs = nullptr;
    cv::Mat* delE_values;
    RefData* ref_data = nullptr;
};


#endif //BEYOND_RGB_BACKEND_COLORMANAGEDCALIBRATOR_H
