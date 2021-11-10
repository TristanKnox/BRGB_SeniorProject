import{w as se,S as R,i as N,s as j,e as g,a as d,b as C,g as A,t as z,n as I,c as W,d as L,f as u,h as F,j as ae,k as ie,l as re,m as x,o as S,p as oe,q as G,r as V,I as ce,u as B,v as w,x as M,y as D,z as O,A as ue,B as de,C as Se,D as Ce,M as Ge,E as Ve,F as q,G as qe,H as Ke,J as fe,K as me,L as ge,N as pe,O as _e,P as Q,Q as ve,R as Y,T as ee,U as Ue,V as te,W as xe,X as Xe,Y as le,Z as Ze,_ as Je,$ as Qe,a0 as Ye,a1 as et}from"./vendor.8c341de5.js";const tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};tt();const T=se(0),he=se(0),ke=se(null);function ze(i){let e,t=i[1],l,n,s,a=Pe(i);return{c(){e=g("main"),a.c(),d(e,"class","bg-gray-100 dark:bg-gray-800 svelte-wziicc")},m(r,c){C(r,e,c),a.m(e,null),s=!0},p(r,c){c&2&&j(t,t=r[1])?(A(),z(a,1,1,I),W(),a=Pe(r),a.c(),S(a),a.m(e,null)):a.p(r,c)},i(r){s||(S(a),ae(()=>{n&&n.end(1),l=ie(e,V,{duration:350,delay:350}),l.start()}),s=!0)},o(r){z(a),l&&l.invalidate(),n=re(e,V,{duration:350}),s=!1},d(r){r&&x(e),a.d(r),r&&n&&n.end()}}}function Pe(i){let e,t,l=i[0][i[1]].text+"",n,s,a,r;return{c(){e=g("nav"),t=g("h1"),n=L(l),d(t,"class","text-gray-900 dark:text-white svelte-wziicc"),d(e,"class","svelte-wziicc")},m(c,o){C(c,e,o),u(e,t),u(t,n),r=!0},p(c,o){(!r||o&3)&&l!==(l=c[0][c[1]].text+"")&&F(n,l)},i(c){r||(ae(()=>{a&&a.end(1),s=ie(e,V,{duration:350,delay:350}),s.start()}),r=!0)},o(c){s&&s.invalidate(),a=re(e,V,{duration:350}),r=!1},d(c){c&&x(e),c&&a&&a.end()}}}function lt(i){let e,t,l=i[1]!=="Home"&&ze(i);return{c(){l&&l.c(),e=oe()},m(n,s){l&&l.m(n,s),C(n,e,s),t=!0},p(n,[s]){n[1]!=="Home"?l?(l.p(n,s),s&2&&S(l,1)):(l=ze(n),l.c(),S(l,1),l.m(e.parentNode,e)):l&&(A(),z(l,1,1,()=>{l=null}),W())},i(n){t||(S(l),t=!0)},o(n){z(l),t=!1},d(n){l&&l.d(n),n&&x(e)}}}function nt(i,e,t){let l;G(i,T,s=>t(1,l=s));let{routes:n}=e;return i.$$set=s=>{"routes"in s&&t(0,n=s.routes)},[n,l]}class st extends R{constructor(e){super();N(this,e,nt,lt,j,{routes:0})}}function Ie(i,e,t){const l=i.slice();return l[6]=e[t],l[8]=t,l}function je(i){let e,t,l,n,s,a=i[6][1].text+"",r,c,o,m,f,v;l=new ce({props:{data:i[6][1].icon,scale:"1.5"}});function _(){return i[5](i[6])}return{c(){e=g("button"),t=g("div"),B(l.$$.fragment),n=w(),s=g("span"),r=L(a),c=w(),d(t,"class","item-icon svelte-10bpcfr"),d(s,"class","item-text svelte-10bpcfr"),d(e,"class","item dark:text-gray-50 text-gray-800 dark:hover:text-gray-50 svelte-10bpcfr"),e.disabled=o=i[2]!=="RGB"&i[2]!=="SpecOverlay"&i[2]!=="Reports"&i[2]!=="SpecPicker"?!i[6][1].default:!1},m(p,y){C(p,e,y),u(e,t),M(l,t,null),u(e,n),u(e,s),u(s,r),u(e,c),m=!0,f||(v=D(e,"click",_),f=!0)},p(p,y){i=p;const $={};y&1&&($.data=i[6][1].icon),l.$set($),(!m||y&1)&&a!==(a=i[6][1].text+"")&&F(r,a),(!m||y&5&&o!==(o=i[2]!=="RGB"&i[2]!=="SpecOverlay"&i[2]!=="Reports"&i[2]!=="SpecPicker"?!i[6][1].default:!1))&&(e.disabled=o)},i(p){m||(S(l.$$.fragment,p),m=!0)},o(p){z(l.$$.fragment,p),m=!1},d(p){p&&x(e),O(l),f=!1,v()}}}function Be(i){let e,t,l=i[6][1].isShown&&je(i);return{c(){l&&l.c(),e=oe()},m(n,s){l&&l.m(n,s),C(n,e,s),t=!0},p(n,s){n[6][1].isShown?l?(l.p(n,s),s&1&&S(l,1)):(l=je(n),l.c(),S(l,1),l.m(e.parentNode,e)):l&&(A(),z(l,1,1,()=>{l=null}),W())},i(n){t||(S(l),t=!0)},o(n){z(l),t=!1},d(n){l&&l.d(n),n&&x(e)}}}function at(i){let e,t,l,n,s,a,r,c,o;s=new ce({props:{data:i[1],scale:"2.5"}});let m=Object.keys(i[0]).map(i[4]),f=[];for(let _=0;_<m.length;_+=1)f[_]=Be(Ie(i,m,_));const v=_=>z(f[_],1,1,()=>{f[_]=null});return{c(){e=g("main"),t=g("ul"),l=g("logo"),n=g("div"),B(s.$$.fragment),a=w(),r=g("span"),r.textContent="Beyond RGB",c=w();for(let _=0;_<f.length;_+=1)f[_].c();d(n,"class","logo-icon svelte-10bpcfr"),d(r,"class","logo-text svelte-10bpcfr"),d(l,"class","svelte-10bpcfr"),d(t,"class","list svelte-10bpcfr"),d(e,"class","dark:bg-gray-900 bg-gray-300 dark:text-white text-gray-800 svelte-10bpcfr")},m(_,p){C(_,e,p),u(e,t),u(t,l),u(l,n),M(s,n,null),u(l,a),u(l,r),u(t,c);for(let y=0;y<f.length;y+=1)f[y].m(t,null);o=!0},p(_,[p]){const y={};if(p&2&&(y.data=_[1]),s.$set(y),p&13){m=Object.keys(_[0]).map(_[4]);let $;for($=0;$<m.length;$+=1){const b=Ie(_,m,$);f[$]?(f[$].p(b,p),S(f[$],1)):(f[$]=Be(b),f[$].c(),S(f[$],1),f[$].m(t,null))}for(A(),$=m.length;$<f.length;$+=1)v($);W()}},i(_){if(!o){S(s.$$.fragment,_);for(let p=0;p<m.length;p+=1)S(f[p]);o=!0}},o(_){z(s.$$.fragment,_),f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)z(f[p]);o=!1},d(_){_&&x(e),O(s),ue(f,_)}}}function it(i,e,t){let l;G(i,T,o=>t(2,l=o));let{routes:n}=e,{icon:s}=e;function a(o){o[0]==="Settings"?(console.log("Settings to Settings",o[1]),ke.set(o[1].component)):T.set(o[0])}const r=o=>[o,n[o]],c=o=>a(o);return i.$$set=o=>{"routes"in o&&t(0,n=o.routes),"icon"in o&&t(1,s=o.icon)},[n,s,l,a,r,c]}class rt extends R{constructor(e){super();N(this,e,it,at,j,{routes:0,icon:1})}}function ot(i){let e,t,l,n,s,a,r,c,o,m;return{c(){e=g("div"),t=g("label"),l=g("p"),n=L(i[1]),s=w(),a=g("input"),r=w(),c=g("span"),d(l,"class","svelte-1k2ykp3"),d(a,"type","checkbox"),d(a,"class","peer svelte-1k2ykp3"),d(c,"class","dark:after:bg-gray-300 after:bg-white dark:peer-checked:bg-green-800 peer-checked:bg-green-400 ring-gray-200 dark:ring-gray-500 svelte-1k2ykp3"),d(t,"class","group hover:bg-green-200 dark:hover:bg-gray-900/50 svelte-1k2ykp3"),d(e,"class","bg-gray-100 dark:bg-gray-600 dark:text-white svelte-1k2ykp3")},m(f,v){C(f,e,v),u(e,t),u(t,l),u(l,n),u(t,s),u(t,a),a.checked=i[0],u(t,r),u(t,c),o||(m=D(a,"change",i[2]),o=!0)},p(f,[v]){v&2&&F(n,f[1]),v&1&&(a.checked=f[0])},i:I,o:I,d(f){f&&x(e),o=!1,m()}}}function ct(i,e,t){let{label:l="Placeholder..."}=e,{checked:n=!1}=e;function s(){n=this.checked,t(0,n)}return i.$$set=a=>{"label"in a&&t(1,l=a.label),"checked"in a&&t(0,n=a.checked)},[n,l,s]}class ye extends R{constructor(e){super();N(this,e,ct,ot,j,{label:1,checked:0})}}function ut(i){let e,t,l,n,s,a,r;function c(m){i[1](m)}let o={label:"Dark Mode"};return i[0]!==void 0&&(o.checked=i[0]),s=new ye({props:o}),de.push(()=>Se(s,"checked",c)),{c(){e=g("main"),t=g("h1"),t.textContent="App Settings",l=w(),n=g("div"),B(s.$$.fragment),d(n,"class","svelte-1fblrwr"),d(e,"class","svelte-1fblrwr")},m(m,f){C(m,e,f),u(e,t),u(e,l),u(e,n),M(s,n,null),r=!0},p(m,[f]){const v={};!a&&f&1&&(a=!0,v.checked=m[0],Ce(()=>a=!1)),s.$set(v)},i(m){r||(S(s.$$.fragment,m),r=!0)},o(m){z(s.$$.fragment,m),r=!1},d(m){m&&x(e),O(s)}}}function dt(i,e,t){let l;G(i,he,s=>t(0,l=s));function n(s){l=s,he.set(l)}return[l,n]}class ft extends R{constructor(e){super();N(this,e,dt,ut,j,{})}}function Me(i){let e,t,l,n,s;var a=i[0];function r(c){return{}}return a&&(t=new a(r())),{c(){e=g("div"),t&&B(t.$$.fragment),d(e,"class","page dark:bg-gray-700 bg-gray-50 svelte-1udnvu8")},m(c,o){C(c,e,o),t&&M(t,e,null),s=!0},p(c,o){if(a!==(a=c[0])){if(t){A();const m=t;z(m.$$.fragment,1,0,()=>{O(m,1)}),W()}a?(t=new a(r()),B(t.$$.fragment),S(t.$$.fragment,1),M(t,e,null)):t=null}},i(c){s||(t&&S(t.$$.fragment,c),ae(()=>{n&&n.end(1),l=ie(e,V,{duration:350,delay:350}),l.start()}),s=!0)},o(c){t&&z(t.$$.fragment,c),l&&l.invalidate(),n=re(e,V,{duration:350}),s=!1},d(c){c&&x(e),t&&O(t),c&&n&&n.end()}}}function mt(i){let e=i[0],t,l,n=Me(i);return{c(){n.c(),t=oe()},m(s,a){n.m(s,a),C(s,t,a),l=!0},p(s,a){a&1&&j(e,e=s[0])?(A(),z(n,1,1,I),W(),n=Me(s),n.c(),S(n),n.m(t.parentNode,t)):n.p(s,a)},i(s){l||(S(n),l=!0)},o(s){z(n),l=!1},d(s){s&&x(t),n.d(s)}}}function gt(i){let e,t;return e=new Ge({props:{show:i[1],$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){B(e.$$.fragment)},m(l,n){M(e,l,n),t=!0},p(l,[n]){const s={};n&2&&(s.show=l[1]),n&33&&(s.$$scope={dirty:n,ctx:l}),e.$set(s)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function pt(i,e,t){let l;G(i,ke,a=>t(1,l=a));let{selectedPage:n}=e,{pageName:s}=e;return i.$$set=a=>{"selectedPage"in a&&t(0,n=a.selectedPage),"pageName"in a&&t(2,s=a.pageName)},i.$$.update=()=>{i.$$.dirty&2&&console.log(l)},[n,l,s]}class _t extends R{constructor(e){super();N(this,e,pt,gt,j,{selectedPage:0,pageName:2})}}function vt(i){let e,t,l,n,s,a,r,c,o,m,f,v,_,p,y,$;return o=new ce({props:{data:Ve,scale:"2"}}),{c(){e=g("main"),t=g("div"),l=g("h2"),l.textContent="Welcome to",n=w(),s=g("h1"),s.textContent="Beyond RGB",a=w(),r=g("h3"),r.textContent="Get started below",c=w(),B(o.$$.fragment),m=w(),f=g("button"),f.innerHTML=`Proccess
    <span class="svelte-161zyuu">Process a new Spectral Image</span>`,v=w(),_=g("button"),_.innerHTML=`View
    <span class="svelte-161zyuu">View already processed Image</span>`,d(l,"class","svelte-161zyuu"),d(s,"class","svelte-161zyuu"),d(r,"class","svelte-161zyuu"),d(t,"class","dark:text-gray-500 svelte-161zyuu"),d(f,"class","dark:bg-gray-700 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white svelte-161zyuu"),d(_,"class","dark:bg-gray-700 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white svelte-161zyuu"),d(e,"class","svelte-161zyuu")},m(b,k){C(b,e,k),u(e,t),u(t,l),u(t,n),u(t,s),u(t,a),u(t,r),u(t,c),M(o,t,null),u(e,m),u(e,f),u(e,v),u(e,_),p=!0,y||($=[D(f,"click",i[0]),D(_,"click",i[1])],y=!0)},p:I,i(b){p||(S(o.$$.fragment,b),p=!0)},o(b){z(o.$$.fragment,b),p=!1},d(b){b&&x(e),O(o),y=!1,q($)}}}function ht(i){return[()=>T.set("Preprocessing"),()=>T.set("SpecOverlay")]}class kt extends R{constructor(e){super();N(this,e,ht,vt,j,{})}}function yt(i){let e,t,l;return{c(){e=g("main"),t=g("div"),l=g("canvas"),d(l,"class","svelte-1klp74z"),d(t,"id","image-canvas"),d(t,"class","svelte-1klp74z"),d(e,"class","dark:ring-gray-600 svelte-1klp74z")},m(n,s){C(n,e,s),u(e,t),u(t,l),i[1](l)},p:I,i:I,o:I,d(n){n&&x(e),i[1](null)}}}function bt(i,e,t){let l;qe(()=>{let s=l.getContext("2d"),a=new Image;a.src="placeholder.jpg",a.onload=function(){s.canvas.width=a.width,s.canvas.height=a.height,s.canvas.addEventListener("click",()=>{console.log("click")},!1),s.drawImage(a,0,0,a.width,a.height,0,0,a.width,a.height),Ke(l,{bounds:!0,boundsPadding:1,minZoom:1})}});function n(s){de[s?"unshift":"push"](()=>{l=s,t(0,l)})}return[l,n]}class X extends R{constructor(e){super();N(this,e,bt,yt,j,{})}}function $t(i){let e,t,l,n,s,a,r,c,o,m,f,v,_;return l=new X({}),{c(){e=g("main"),t=g("div"),B(l.$$.fragment),n=w(),s=g("div"),a=g("div"),r=L(`View Options\r
      `),c=g("p"),c.textContent="[WIP]",o=w(),m=g("p"),m.textContent="<- Use the mouse wheel to zoom and click & drag to pan",f=w(),v=g("div"),v.innerHTML=`Metadata
      <ul class="text-black dark:text-gray-50 svelte-13kt474"><li>Dimensions: 5184 x 3456</li> 
        <li>Size: 20.9 MB</li> 
        <li>Camera: EOS 60D</li> 
        <li>ISO: 100</li> 
        <li>F-stop: f/10</li> 
        <li>Exposure: 1/4 sec.</li> 
        <li>Focal length: 41mm</li></ul>`,d(t,"id","image"),d(t,"class","svelte-13kt474"),d(a,"class","box dark:bg-gray-800 bg-gray-100 text-black dark:text-gray-200 ring-1 ring-gray-300 dark:ring-gray-900 svelte-13kt474"),d(a,"id","view-options"),d(v,"class","box dark:bg-gray-800 bg-gray-100 text-black dark:text-gray-200 ring-1 ring-gray-300 dark:ring-gray-900 svelte-13kt474"),d(v,"id","metadata"),d(s,"id","side"),d(s,"class","svelte-13kt474"),d(e,"class","svelte-13kt474")},m(p,y){C(p,e,y),u(e,t),M(l,t,null),u(e,n),u(e,s),u(s,a),u(a,r),u(a,c),u(a,o),u(a,m),u(s,f),u(s,v),_=!0},p:I,i(p){_||(S(l.$$.fragment,p),_=!0)},o(p){z(l.$$.fragment,p),_=!1},d(p){p&&x(e),O(l)}}}class wt extends R{constructor(e){super();N(this,e,null,$t,j,{})}}function St(i,e,t){const l=i.slice();return l[0]=e[t],l}function Ct(i){let e,t;return e=new ye({props:{label:`Channel ${i[0]}`}}),{c(){B(e.$$.fragment)},m(l,n){M(e,l,n),t=!0},p:I,i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){O(e,l)}}}function xt(i){let e,t,l,n,s,a,r,c;l=new X({}),a=new ye({props:{label:"Truecolor"}});let o=[1,2,3,4,5,6,7,8,9,10],m=[];for(let f=0;f<10;f+=1)m[f]=Ct(St(i,o,f));return{c(){e=g("main"),t=g("div"),B(l.$$.fragment),n=w(),s=g("div"),B(a.$$.fragment),r=w();for(let f=0;f<10;f+=1)m[f].c();d(t,"id","image"),d(t,"class","svelte-1uhjjk3"),d(s,"id","side"),d(s,"class","svelte-1uhjjk3"),d(e,"class","svelte-1uhjjk3")},m(f,v){C(f,e,v),u(e,t),M(l,t,null),u(e,n),u(e,s),M(a,s,null),u(s,r);for(let _=0;_<10;_+=1)m[_].m(s,null);c=!0},p:I,i(f){if(!c){S(l.$$.fragment,f),S(a.$$.fragment,f);for(let v=0;v<10;v+=1)S(m[v]);c=!0}},o(f){z(l.$$.fragment,f),z(a.$$.fragment,f),m=m.filter(Boolean);for(let v=0;v<10;v+=1)z(m[v]);c=!1},d(f){f&&x(e),O(l),O(a),ue(m,f)}}}class zt extends R{constructor(e){super();N(this,e,null,xt,j,{})}}function Oe(i,e,t){const l=i.slice();return l[3]=e[t],l}function De(i,e){let t,l=e[3].name+"",n,s,a,r=I;return{key:i,first:null,c(){t=g("card"),n=L(l),s=w(),d(t,"class","dark:bg-gray-600 svelte-1u7rock"),this.first=t},m(c,o){C(c,t,o),u(t,n),u(t,s)},p(c,o){e=c,o&1&&l!==(l=e[3].name+"")&&F(n,l)},r(){a=t.getBoundingClientRect()},f(){fe(t),r()},a(){r(),r=me(t,a,ge,{duration:be})},d(c){c&&x(t)}}}function Pt(i){let e,t,l=[],n=new Map,s,a,r,c=i[0];const o=m=>m[3].id;for(let m=0;m<c.length;m+=1){let f=Oe(i,c,m),v=o(f);n.set(v,l[m]=De(v,f))}return{c(){e=g("main"),t=g("section");for(let m=0;m<l.length;m+=1)l[m].c();d(t,"class","svelte-1u7rock"),d(e,"class","dark:bg-blue-700/25 svelte-1u7rock")},m(m,f){C(m,e,f),u(e,t);for(let v=0;v<l.length;v+=1)l[v].m(t,null);a||(r=[pe(s=_e.call(null,t,{items:i[0],flipDurationMs:be})),D(t,"consider",i[1]),D(t,"finalize",i[2])],a=!0)},p(m,[f]){if(f&1){c=m[0];for(let v=0;v<l.length;v+=1)l[v].r();l=Q(l,f,o,1,m,c,n,t,ve,De,null,Oe);for(let v=0;v<l.length;v+=1)l[v].a()}s&&Y(s.update)&&f&1&&s.update.call(null,{items:m[0],flipDurationMs:be})},i:I,o:I,d(m){m&&x(e);for(let f=0;f<l.length;f+=1)l[f].d();a=!1,q(r)}}}const be=200;function It(i,e,t){let{items:l}=e;function n(a){t(0,l=a.detail.items)}function s(a){t(0,l=a.detail.items)}return i.$$set=a=>{"items"in a&&t(0,l=a.items)},[l,n,s]}class jt extends R{constructor(e){super();N(this,e,It,Pt,j,{items:0})}}function Re(i,e,t){const l=i.slice();return l[10]=e[t],l}function Ne(i,e,t){const l=i.slice();return l[13]=e[t],l}function Le(i,e,t){const l=i.slice();return l[16]=e[t],l}function He(i,e){let t,l=e[16].name+"",n,s,a=I;return{key:i,first:null,c(){t=g("card"),n=L(l),d(t,"class",""+(ee(e[1].length>1?"selected":"")+" svelte-j8cag6")),d(t,"style",""),this.first=t},m(r,c){C(r,t,c),u(t,n)},p(r,c){e=r,c&1&&l!==(l=e[16].name+"")&&F(n,l)},r(){s=t.getBoundingClientRect()},f(){fe(t),a()},a(){a(),a=me(t,s,ge,{duration:K})},d(r){r&&x(t)}}}function Ee(i,e){let t,l=e[13].name+"",n,s,a,r=[],c=new Map,o,m,f,v,_,p=e[13].items;const y=k=>k[16].id;for(let k=0;k<p.length;k+=1){let h=Le(e,p,k),P=y(h);c.set(P,r[k]=He(P,h))}function $(...k){return e[8](e[10],e[13],...k)}function b(...k){return e[9](e[10],e[13],...k)}return{key:i,first:null,c(){t=g("span"),n=L(l),s=w(),a=g("itemBox");for(let k=0;k<r.length;k+=1)r[k].c();o=w(),d(t,"class","svelte-j8cag6"),d(a,"class",m=""+(ee("strict")+" svelte-j8cag6")),this.first=t},m(k,h){C(k,t,h),u(t,n),C(k,s,h),C(k,a,h);for(let P=0;P<r.length;P+=1)r[P].m(a,null);u(a,o),v||(_=[pe(f=_e.call(null,a,{items:e[13].items,flipDurationMs:K})),D(a,"consider",$),D(a,"finalize",b)],v=!0)},p(k,h){if(e=k,h&1&&l!==(l=e[13].name+"")&&F(n,l),h&3){p=e[13].items;for(let P=0;P<r.length;P+=1)r[P].r();r=Q(r,h,y,1,e,p,c,a,ve,He,o,Le);for(let P=0;P<r.length;P+=1)r[P].a()}f&&Y(f.update)&&h&1&&f.update.call(null,{items:e[13].items,flipDurationMs:K})},d(k){k&&x(t),k&&x(s),k&&x(a);for(let h=0;h<r.length;h+=1)r[h].d();v=!1,q(_)}}}function Te(i,e){let t,l,n=e[10].name+"",s,a,r,c,o,m=[],f=new Map,v,_,p=I,y,$,b=e[10].fields;const k=h=>h[13].name;for(let h=0;h<b.length;h+=1){let P=Ne(e,b,h),E=k(P);f.set(E,m[h]=Ee(E,P))}return{key:i,first:null,c(){t=g("div"),l=g("h1"),s=L(n),a=w(),r=g("button"),r.textContent="X",c=w(),o=g("item");for(let h=0;h<m.length;h+=1)m[h].c();v=w(),d(r,"id","removeBtn"),d(r,"class","dark:hover:bg-red-400/50 svelte-j8cag6"),d(o,"class","svelte-j8cag6"),d(t,"class","column dark:bg-blue-700/25 bg-blue-200 svelte-j8cag6"),this.first=t},m(h,P){C(h,t,P),u(t,l),u(l,s),u(t,a),u(t,r),u(t,c),u(t,o);for(let E=0;E<m.length;E+=1)m[E].m(o,null);u(t,v),y||($=D(r,"click",function(){Y(e[6](e[10].id))&&e[6](e[10].id).apply(this,arguments)}),y=!0)},p(h,P){e=h,P&1&&n!==(n=e[10].name+"")&&F(s,n),P&51&&(b=e[10].fields,m=Q(m,P,k,1,e,b,f,o,Ue,Ee,null,Ne))},r(){_=t.getBoundingClientRect()},f(){fe(t),p()},a(){p(),p=me(t,_,ge,{duration:K*2})},d(h){h&&x(t);for(let P=0;P<m.length;P+=1)m[P].d();y=!1,$()}}}function Bt(i){let e,t,l,n,s,a,r,c,o=[],m=new Map,f,v,_,p;l=new jt({props:{items:i[1]}});let y=i[0];const $=b=>b[10].id;for(let b=0;b<y.length;b+=1){let k=Re(i,y,b),h=$(k);m.set(h,o[b]=Te(h,k))}return{c(){e=g("main"),t=g("div"),B(l.$$.fragment),n=w(),s=g("div"),a=g("button"),a.textContent="+",r=w(),c=g("section");for(let b=0;b<o.length;b+=1)o[b].c();d(t,"id","heap"),d(t,"class","svelte-j8cag6"),d(a,"id","addBtn"),d(a,"class","dark:hover:bg-green-400/50 svelte-j8cag6"),d(c,"class","svelte-j8cag6"),d(s,"id","cols"),d(s,"class","svelte-j8cag6"),d(e,"class","svelte-j8cag6")},m(b,k){C(b,e,k),u(e,t),M(l,t,null),u(e,n),u(e,s),u(s,a),u(s,r),u(s,c);for(let h=0;h<o.length;h+=1)o[h].m(c,null);v=!0,_||(p=[D(a,"click",i[7]),pe(f=_e.call(null,c,{items:i[0],flipDurationMs:K,type:"col"})),D(c,"consider",i[2]),D(c,"finalize",i[3])],_=!0)},p(b,[k]){if(k&115){y=b[0];for(let h=0;h<o.length;h+=1)o[h].r();o=Q(o,k,$,1,b,y,m,c,ve,Te,null,Re);for(let h=0;h<o.length;h+=1)o[h].a()}f&&Y(f.update)&&k&1&&f.update.call(null,{items:b[0],flipDurationMs:K,type:"col"})},i(b){v||(S(l.$$.fragment,b),v=!0)},o(b){z(l.$$.fragment,b),v=!1},d(b){b&&x(e),O(l);for(let k=0;k<o.length;k+=1)o[k].d();_=!1,q(p)}}}const K=150;function Mt(i,e,t){let l=[{id:1,name:"item1"},{id:2,name:"item2"},{id:3,name:"item3"},{id:4,name:"item4"},{id:5,name:"item5"},{id:6,name:"item6"},{id:7,name:"item7"},{id:8,name:"item8"},{id:9,name:"item9"},{id:10,name:"item10"},{id:11,name:"item11"},{id:12,name:"item12"},{id:13,name:"item13"},{id:14,name:"item14"},{id:15,name:"item15"},{id:16,name:"item16"}],n=[{id:20,name:"Art 1",fields:[{name:"Image",items:[]},{name:"Whitefield",items:[]},{name:"Darkfield",items:[]}]},{id:21,name:"Art 2",fields:[{name:"Image",items:[]},{name:"Whitefield",items:[]},{name:"Darkfield",items:[]}]},{id:22,name:"Art 3",fields:[{name:"Image",items:[]},{name:"Whitefield",items:[]},{name:"Darkfield",items:[]}]}];function s(_){console.log(_.detail),t(0,n=_.detail.items)}function a(_){t(0,n=_.detail.items)}function r(_,p,y){const $=n.findIndex(k=>k.id===_),b=n[$].fields.findIndex(k=>k.name===p);t(0,n[$].fields[b].items=y.detail.items,n),t(0,n=[...n])}function c(_,p,y){const $=n.findIndex(k=>k.id===_),b=n[$].fields.findIndex(k=>k.name===p);t(0,n[$].fields[b].items=y.detail.items,n),t(0,n=[...n])}function o(_){const p=n.findIndex(y=>y.id===_);n.splice(p,1),console.log(n),t(0,n=[...n])}function m(){t(0,n=[...n,{id:Date.now(),name:`Art ${n.length+1}`,fields:[{name:"Image",items:[]},{name:"Whitefield",items:[]},{name:"Darkfield",items:[]}]}])}return[n,l,s,a,r,c,o,m,(_,p,y)=>r(_.id,p.name,y),(_,p,y)=>c(_.id,p.name,y)]}class Ot extends R{constructor(e){super();N(this,e,Mt,Bt,j,{})}}function Dt(i){let e,t,l;return{c(){e=g("input"),d(e,"type","file"),d(e,"accept","*"),e.multiple=!0,d(e,"class","svelte-itah40")},m(n,s){C(n,e,s),t||(l=D(e,"change",i[3]),t=!0)},p:I,d(n){n&&x(e),t=!1,l()}}}function Rt(i){let e;return{c(){e=g("input"),d(e,"id","ctrl"),d(e,"type","file"),e.multiple=!0,d(e,"webkitdirectory",""),d(e,"class","svelte-itah40")},m(t,l){C(t,e,l)},p:I,d(t){t&&x(e)}}}function Nt(i){let e,t,l,n;function s(c,o){return c[0]?Rt:Dt}let a=s(i),r=a(i);return{c(){e=g("main"),t=g("span"),l=L(i[1]),n=w(),r.c(),d(t,"class","selector-text svelte-itah40"),d(e,"class"," svelte-itah40")},m(c,o){C(c,e,o),u(e,t),u(t,l),u(e,n),r.m(e,null)},p(c,[o]){o&2&&F(l,c[1]),a===(a=s(c))&&r?r.p(c,o):(r.d(1),r=a(c),r&&(r.c(),r.m(e,null)))},i:I,o:I,d(c){c&&x(e),r.d()}}}function Lt(i,e,t){let{directory:l=!1}=e,{title:n=""}=e,s;function a(){s=this.files,t(2,s)}return i.$$set=r=>{"directory"in r&&t(0,l=r.directory),"title"in r&&t(1,n=r.title)},[l,n,s,a]}class Fe extends R{constructor(e){super();N(this,e,Lt,Nt,j,{directory:0,title:1})}}function Ht(i){let e,t,l,n,s,a,r,c,o,m,f,v,_,p,y,$,b,k;return l=new Fe({props:{title:"Select Files:"}}),s=new Fe({props:{title:"Export Destination:",directory:!0}}),o=new Ot({}),{c(){e=g("main"),t=g("div"),B(l.$$.fragment),n=w(),B(s.$$.fragment),a=w(),r=g("div"),c=L(`Specify File Roles:\r
      `),B(o.$$.fragment),m=w(),f=g("br"),v=w(),_=g("div"),_.textContent="Advanced: [WIP]",p=w(),y=g("button"),y.textContent="Next",d(y,"class","next svelte-1pedr7g"),d(t,"class","settings"),d(e,"class","dark:text-white svelte-1pedr7g")},m(h,P){C(h,e,P),u(e,t),M(l,t,null),u(t,n),M(s,t,null),u(t,a),u(t,r),u(r,c),M(o,r,null),u(t,m),u(t,f),u(t,v),u(t,_),u(t,p),u(t,y),$=!0,b||(k=D(y,"click",i[0]),b=!0)},p:I,i(h){$||(S(l.$$.fragment,h),S(s.$$.fragment,h),S(o.$$.fragment,h),$=!0)},o(h){z(l.$$.fragment,h),z(s.$$.fragment,h),z(o.$$.fragment,h),$=!1},d(h){h&&x(e),O(l),O(s),O(o),b=!1,k()}}}function Et(i){let e;const t=()=>T.set("ColorTarget");return console.log(e),[t]}class Tt extends R{constructor(e){super();N(this,e,Et,Ht,j,{})}}function Ft(i){let e,t,l,n,s,a,r,c,o,m,f,v,_,p,y,$,b,k,h,P,E,$e,U,Z,ne,we;return l=new X({}),{c(){e=g("main"),t=g("div"),B(l.$$.fragment),n=w(),s=g("div"),a=g("div"),r=L(`Settings\r
      `),c=g("div"),o=g("div"),m=L(`Color Target\r
          `),f=g("div"),v=g("lable"),v.textContent="Rows:",_=w(),p=g("input"),y=w(),$=g("div"),b=g("lable"),b.textContent="Columns:",k=w(),h=g("input"),P=w(),E=g("button"),E.textContent="+",$e=w(),U=g("button"),U.textContent="Confirm ->",d(t,"id","image"),d(t,"class","svelte-1ys5ey6"),d(v,"class","row-lable svelte-1ys5ey6"),d(p,"placeholder","Placeholder..."),d(p,"class","svelte-1ys5ey6"),d(f,"class","input-group svelte-1ys5ey6"),d(b,"class","row-lable svelte-1ys5ey6"),d(h,"placeholder","Placeholder..."),d(h,"class","svelte-1ys5ey6"),d($,"class","input-group svelte-1ys5ey6"),d(o,"class","color-target svelte-1ys5ey6"),d(c,"class","box svelte-1ys5ey6"),d(E,"class","add svelte-1ys5ey6"),d(a,"class","settings svelte-1ys5ey6"),d(U,"class","next svelte-1ys5ey6"),d(s,"class","side svelte-1ys5ey6"),d(e,"class","svelte-1ys5ey6")},m(H,J){C(H,e,J),u(e,t),M(l,t,null),u(e,n),u(e,s),u(s,a),u(a,r),u(a,c),u(c,o),u(o,m),u(o,f),u(f,v),u(f,_),u(f,p),te(p,i[0]),u(o,y),u(o,$),u($,b),u($,k),u($,h),te(h,i[0]),u(a,P),u(a,E),u(s,$e),u(s,U),Z=!0,ne||(we=[D(p,"input",i[1]),D(h,"input",i[2]),D(U,"click",i[3])],ne=!0)},p(H,[J]){J&1&&p.value!==H[0]&&te(p,H[0]),J&1&&h.value!==H[0]&&te(h,H[0])},i(H){Z||(S(l.$$.fragment,H),Z=!0)},o(H){z(l.$$.fragment,H),Z=!1},d(H){H&&x(e),O(l),ne=!1,q(we)}}}function At(i,e,t){let l="";function n(){l=this.value,t(0,l)}function s(){l=this.value,t(0,l)}return[l,n,s,()=>T.set("Process")]}class Wt extends R{constructor(e){super();N(this,e,At,Ft,j,{})}}function Ae(i,e,t){const l=i.slice();return l[1]=e[t],l[3]=t,l}function We(i){let e,t,l=i[1].title+"",n,s;return{c(){e=g("div"),t=g("span"),n=L(l),d(t,"class","svelte-1j15yfz"),d(e,"id","step"),d(e,"class",s=""+(ee(i[1].status)+" svelte-1j15yfz"))},m(a,r){C(a,e,r),u(e,t),u(t,n)},p(a,r){r&1&&l!==(l=a[1].title+"")&&F(n,l),r&1&&s!==(s=""+(ee(a[1].status)+" svelte-1j15yfz"))&&d(e,"class",s)},d(a){a&&x(e)}}}function Gt(i){let e,t=i[0],l=[];for(let n=0;n<t.length;n+=1)l[n]=We(Ae(i,t,n));return{c(){e=g("main");for(let n=0;n<l.length;n+=1)l[n].c();d(e,"class","svelte-1j15yfz")},m(n,s){C(n,e,s);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(n,[s]){if(s&1){t=n[0];let a;for(a=0;a<t.length;a+=1){const r=Ae(n,t,a);l[a]?l[a].p(r,s):(l[a]=We(r),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},i:I,o:I,d(n){n&&x(e),ue(l,n)}}}function Vt(i,e,t){let{steps:l=[]}=e;return i.$$set=n=>{"steps"in n&&t(0,l=n.steps)},i.$$.update=()=>{i.$$.dirty&1&&console.log(l)},[l]}class qt extends R{constructor(e){super();N(this,e,Vt,Gt,j,{steps:0})}}function Kt(i){let e,t,l,n,s,a,r,c;return{c(){e=g("main"),t=g("button"),t.textContent="View",l=w(),n=g("button"),n.textContent="Open File Location",s=w(),a=g("button"),a.textContent="Exit",d(t,"class","dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:hover:ring svelte-17l6ci3"),d(n,"class","dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:hover:ring svelte-17l6ci3"),d(a,"class","dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:hover:ring svelte-17l6ci3"),d(e,"class","dark:bg-gray-600 svelte-17l6ci3")},m(o,m){C(o,e,m),u(e,t),u(e,l),u(e,n),u(e,s),u(e,a),r||(c=[D(t,"click",i[1]),D(n,"click",i[2]),D(a,"click",i[3])],r=!0)},p:I,i:I,o:I,d(o){o&&x(e),r=!1,q(c)}}}function Ut(i){const{close:e}=xe("simple-modal");function t(a){ke.set(null),e(),T.set(a)}return[t,()=>t("SpecOverlay"),()=>t("SpecOverlay"),()=>t("SpecOverlay")]}class Xt extends R{constructor(e){super();N(this,e,Ut,Kt,j,{})}}function Zt(i){let e,t,l,n,s,a,r,c,o,m,f;l=new X({});function v(p){i[3](p)}let _={};return i[1]!==void 0&&(_.steps=i[1]),r=new qt({props:_}),de.push(()=>Se(r,"steps",v)),{c(){e=g("main"),t=g("div"),B(l.$$.fragment),n=w(),s=g("button"),s.textContent="[Next]",a=w(),B(r.$$.fragment),d(t,"id","image"),d(t,"class","svelte-369xty"),d(s,"class","bg-blue-500 rounded-md px-2 py-1"),d(e,"class","svelte-369xty")},m(p,y){C(p,e,y),u(e,t),M(l,t,null),u(e,n),u(e,s),u(e,a),M(r,e,null),o=!0,m||(f=D(s,"click",i[2]),m=!0)},p(p,[y]){const $={};!c&&y&2&&(c=!0,$.steps=p[1],Ce(()=>c=!1)),r.$set($)},i(p){o||(S(l.$$.fragment,p),S(r.$$.fragment,p),o=!0)},o(p){z(l.$$.fragment,p),z(r.$$.fragment,p),o=!1},d(p){p&&x(e),O(l),O(r),m=!1,f()}}}function Jt(i,e,t){let l=[{title:"Preprocess",status:"pending"},{title:"Process",status:"pending"},{title:"Export",status:"pending"}],n=0;const{open:s}=xe("simple-modal"),a=()=>{s(Xt,{},{closeButton:!1})},r=()=>t(1,l[t(0,n++,n)].status="success",l);function c(o){l=o,t(1,l)}return i.$$.update=()=>{i.$$.dirty&1&&n===3&&a()},[n,l,r,c]}class Qt extends R{constructor(e){super();N(this,e,Jt,Zt,j,{})}}function Yt(i){let e;return{c(){e=g("main"),e.textContent="Reports"},m(t,l){C(t,e,l)},p:I,i:I,o:I,d(t){t&&x(e)}}}class el extends R{constructor(e){super();N(this,e,null,Yt,j,{})}}function tl(i){let e,t,l,n,s,a,r,c,o;return n=new X({}),{c(){e=g("main"),t=g("div"),l=g("div"),B(n.$$.fragment),s=w(),a=g("div"),a.innerHTML=`<div class="box dark:bg-gray-800 bg-gray-100 text-black dark:text-gray-200 ring-1 ring-gray-300 dark:ring-gray-900 svelte-1s417dz" id="brush">Brush Size <p>[WIP]</p></div> 
      <div class="box dark:bg-gray-800 bg-gray-100 text-black dark:text-gray-200 ring-1 ring-gray-300 dark:ring-gray-900 svelte-1s417dz" id="refl-spec">Reflectance Spectrum
        <p>[WIP]</p></div> 
      <div class="box dark:bg-gray-800 bg-gray-100 text-black dark:text-gray-200 ring-1 ring-gray-300 dark:ring-gray-900 svelte-1s417dz" id="compare">Compare Estimated and Reference
        <p>[WIP]</p></div>`,r=w(),c=g("div"),c.textContent="Chart",d(l,"id","image"),d(l,"class","svelte-1s417dz"),d(a,"id","side"),d(a,"class","svelte-1s417dz"),d(t,"class","flex w-full justify-center h-full"),d(c,"id","chart"),d(c,"class","svelte-1s417dz"),d(e,"class","svelte-1s417dz")},m(m,f){C(m,e,f),u(e,t),u(t,l),M(n,l,null),u(t,s),u(t,a),u(e,r),u(e,c),o=!0},p:I,i(m){o||(S(n.$$.fragment,m),o=!0)},o(m){z(n.$$.fragment,m),o=!1},d(m){m&&x(e),O(n)}}}class ll extends R{constructor(e){super();N(this,e,null,tl,j,{})}}function nl(i){let e,t,l,n,s,a,r,c;return l=new st({props:{routes:i[2]}}),s=new rt({props:{icon:Xe,routes:i[2]}}),r=new _t({props:{selectedPage:i[1].component,pageName:i[1].text}}),{c(){e=g("main"),t=g("div"),B(l.$$.fragment),n=w(),B(s.$$.fragment),a=w(),B(r.$$.fragment),d(t,"class","app"),d(e,"class",i[0])},m(o,m){C(o,e,m),u(e,t),M(l,t,null),u(t,n),M(s,t,null),u(t,a),M(r,t,null),c=!0},p(o,[m]){const f={};m&2&&(f.selectedPage=o[1].component),m&2&&(f.pageName=o[1].text),r.$set(f),(!c||m&1)&&d(e,"class",o[0])},i(o){c||(S(l.$$.fragment,o),S(s.$$.fragment,o),S(r.$$.fragment,o),c=!0)},o(o){z(l.$$.fragment,o),z(s.$$.fragment,o),z(r.$$.fragment,o),c=!1},d(o){o&&x(e),O(l),O(s),O(r)}}}function sl(i,e,t){let l,n,s;G(i,he,c=>t(3,n=c)),G(i,T,c=>t(4,s=c));const a={Home:{text:"Home",component:kt,icon:le,isShown:!0,default:!0},RGB:{text:"Color Managed RGB Image",component:wt,icon:Ze,isShown:!0},SpecOverlay:{text:"Spectral Overlay",component:zt,icon:Je,isShown:!0},Reports:{text:"Reports",component:el,icon:Qe,isShown:!0},SpecPicker:{text:"Spectral Picker",component:ll,icon:Ye,isShown:!0},Settings:{text:"Settings",component:ft,icon:et,isShown:!0,default:!0},Preprocessing:{text:"Preprocessing",component:Tt,icon:le,isShown:!1},ColorTarget:{text:"Color Target",component:Wt,icon:le,isShown:!1},Process:{text:"Process",component:Qt,icon:le,isShown:!1}};T.set("Home");let r="";return i.$$.update=()=>{i.$$.dirty&16&&t(1,l=a[s]),i.$$.dirty&8&&t(0,r=n?"dark":""),i.$$.dirty&1&&console.log(r),i.$$.dirty&1&&(r!==""?(document.documentElement.classList.add(r),document.body.classList.add(r)):(document.documentElement.classList.remove("dark"),document.body.classList.remove("dark")))},[r,l,a,n,s]}class al extends R{constructor(e){super();N(this,e,sl,nl,j,{})}}new al({target:document.body});
