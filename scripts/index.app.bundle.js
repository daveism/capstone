!function(e){function t(t){for(var a,o,s=t[0],n=t[1],i=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(T,o)&&T[o]&&d.push(T[o][0]),T[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(B&&B(t);d.length;)d.shift()();return M.push.apply(M,i||[]),r()}function r(){for(var e,t=0;t<M.length;t++){for(var r=M[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==T[s]&&(a=!1)}a&&(M.splice(t--,1),e=R(R.s=r[0]))}return e}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!v[e]||!w[e])return;for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(h[r]=t[r]);0==--y&&0===x&&N()}(e,t),a&&a(e,t)};var o,s=!0,n="0ff7f8a5d761a5335905",i={},c=[],d=[];function l(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)r._acceptedDependencies[e[a]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[t]=e[t],p("ready");break;case"ready":I(t);break;case"prepare":case"check":case"dispose":case"apply":(b=b||[]).push(t)}},check:E,apply:O,status:function(e){if(!e)return u;m.push(e)},addStatusHandler:function(e){m.push(e)},removeStatusHandler:function(e){var t=m.indexOf(e);t>=0&&m.splice(t,1)},data:i[t]};return o=void 0,r}var m=[],u="idle";function p(e){u=e;for(var t=0;t<m.length;t++)m[t].call(null,e)}var g,h,f,b,y=0,x=0,_={},w={},v={};function k(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return s=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var a=new XMLHttpRequest,o=R.p+""+n+".hot-update.json";a.open("GET",o,!0),a.timeout=t,a.send(null)}catch(e){return r(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===a.status)e();else if(200!==a.status&&304!==a.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(a.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return p(D()?"ready":"idle"),null;w={},_={},v=e.c,f=e.h,p("prepare");var t=new Promise((function(e,t){g={resolve:e,reject:t}}));for(var r in h={},T)j(r);return"prepare"===u&&0===x&&0===y&&N(),t}));var t}function j(e){v[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+n+".hot-update.js",document.head.appendChild(t)}(e)):_[e]=!0}function N(){p("ready");var e=g;if(g=null,e)if(s)Promise.resolve().then((function(){return O(s)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&t.push(k(r));e.resolve(t)}}function O(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function t(r){var a,s,d,l,m;function u(e){for(var t=[e],r={},a=t.map((function(e){return{chain:[e],id:e}}));a.length>0;){var o=a.pop(),s=o.id,n=o.chain;if((l=S[s])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:n,moduleId:s};if(l.hot._main)return{type:"unaccepted",chain:n,moduleId:s};for(var i=0;i<l.parents.length;i++){var c=l.parents[i],d=S[c];if(d){if(d.hot._declinedDependencies[s])return{type:"declined",chain:n.concat([c]),moduleId:s,parentId:c};-1===t.indexOf(c)&&(d.hot._acceptedDependencies[s]?(r[c]||(r[c]=[]),g(r[c],[s])):(delete r[c],t.push(c),a.push({chain:n.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r];-1===e.indexOf(a)&&e.push(a)}}D();var y={},x=[],_={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var j;m=k(E),j=h[E]?u(m):{type:"disposed",moduleId:E};var N=!1,O=!1,I=!1,M="";switch(j.chain&&(M="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(N=new Error("Aborted because of self decline: "+j.moduleId+M));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(N=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+M));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(N=new Error("Aborted because "+m+" is not accepted"+M));break;case"accepted":r.onAccepted&&r.onAccepted(j),O=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),I=!0;break;default:throw new Error("Unexception type "+j.type)}if(N)return p("abort"),Promise.reject(N);if(O)for(m in _[m]=h[m],g(x,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,m)&&(y[m]||(y[m]=[]),g(y[m],j.outdatedDependencies[m]));I&&(g(x,[j.moduleId]),_[m]=w)}var C,A=[];for(s=0;s<x.length;s++)m=x[s],S[m]&&S[m].hot._selfAccepted&&_[m]!==w&&!S[m].hot._selfInvalidated&&A.push({module:m,parents:S[m].parents.slice(),errorHandler:S[m].hot._selfAccepted});p("dispose"),Object.keys(v).forEach((function(e){!1===v[e]&&function(e){delete T[e]}(e)}));var H,B,P=x.slice();for(;P.length>0;)if(m=P.pop(),l=S[m]){var L={},G=l.hot._disposeHandlers;for(d=0;d<G.length;d++)(a=G[d])(L);for(i[m]=L,l.hot.active=!1,delete S[m],delete y[m],d=0;d<l.children.length;d++){var Y=S[l.children[d]];Y&&((C=Y.parents.indexOf(m))>=0&&Y.parents.splice(C,1))}}for(m in y)if(Object.prototype.hasOwnProperty.call(y,m)&&(l=S[m]))for(B=y[m],d=0;d<B.length;d++)H=B[d],(C=l.children.indexOf(H))>=0&&l.children.splice(C,1);p("apply"),void 0!==f&&(n=f,f=void 0);for(m in h=void 0,_)Object.prototype.hasOwnProperty.call(_,m)&&(e[m]=_[m]);var z=null;for(m in y)if(Object.prototype.hasOwnProperty.call(y,m)&&(l=S[m])){B=y[m];var q=[];for(s=0;s<B.length;s++)if(H=B[s],a=l.hot._acceptedDependencies[H]){if(-1!==q.indexOf(a))continue;q.push(a)}for(s=0;s<q.length;s++){a=q[s];try{a(B)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:m,dependencyId:B[s],error:e}),r.ignoreErrored||z||(z=e)}}}for(s=0;s<A.length;s++){var U=A[s];m=U.module,c=U.parents,o=m;try{R(m)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:m,error:t,originalError:e}),r.ignoreErrored||z||(z=t),z||(z=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:m,error:e}),r.ignoreErrored||z||(z=e)}}if(z)return p("fail"),Promise.reject(z);if(b)return t(r).then((function(e){return x.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(x)}))}(t=t||{})}function D(){if(b)return h||(h={}),b.forEach(I),b=void 0,!0}function I(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var S={},T={0:0},M=[];function R(t){if(S[t])return S[t].exports;var r=S[t]={i:t,l:!1,exports:{},hot:l(t),parents:(d=c,c=[],d),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=S[e];if(!t)return R;var r=function(r){return t.hot.active?(S[r]?-1===S[r].parents.indexOf(e)&&S[r].parents.push(e):(c=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),R(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var s in R)Object.prototype.hasOwnProperty.call(R,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(r,s,a(s));return r.e=function(e){return"ready"===u&&p("prepare"),x++,R.e(e).then(t,(function(e){throw t(),e}));function t(){x--,"prepare"===u&&(_[e]||j(e),0===x&&0===y&&N())}},r.t=function(e,t){return 1&t&&(e=r(e)),R.t(e,-2&t)},r}(t)),r.l=!0,r.exports}R.m=e,R.c=S,R.d=function(e,t,r){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(R.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)R.d(r,a,function(t){return e[t]}.bind(null,a));return r},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="",R.h=function(){return n};var C=window.webpackJsonp=window.webpackJsonp||[],A=C.push.bind(C);C.push=t,C=C.slice();for(var H=0;H<C.length;H++)t(C[H]);var B=A;M.push([350,1]),r()}({345:function(e,t,r){"use strict";var a=r(346)(e.i,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},350:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),s=r(19),n=r.n(s),i=(r(157),r(14),r(370)),c=r(372),d=r(373),l=r(375),m=r(374),u=function(){return["distractor-random-all-distractor-color-mixed-basemap-none","distractor-random-high-distractor-color-mixed-basemap-none","distractor-random-med-distractor-color-mixed-basemap-none","distractor-random-low-distractor-color-mixed-basemap-none","distractor-random-high-distractor-color-mixed-basemap-streets","distractor-random-med-distractor-color-mixed-basemap-streets","distractor-random-low-distractor-color-mixed-basemap-streets","distractor-random-high-distractor-color-mixed-basemap-dark","distractor-random-med-distractor-color-mixed-basemap-dark","distractor-random-low-distractor-color-mixed-basemap-dark","distractor-random-high-distractor-color-mixed-basemap-imagery","distractor-random-med-distractor-color-mixed-basemap-imagery","distractor-random-low-distractor-color-mixed-basemap-imagery","distractor-random-all-distractor-color-matches_target-basemap-none","distractor-random-high-distractor-color-matches_target-basemap-none","distractor-random-med-distractor-color-matches_target-basemap-none","distractor-random-low-distractor-color-matches_target-basemap-none","distractor-random-high-distractor-color-matches_target-basemap-streets","distractor-random-med-distractor-color-matches_target-basemap-streets","distractor-random-low-distractor-color-matches_target-basemap-streets","distractor-random-high-distractor-color-matches_target-basemap-dark","distractor-random-med-distractor-color-matches_target-basemap-dark","distractor-random-low-distractor-color-matches_target-basemap-dark","distractor-random-high-distractor-color-matches_target-basemap-imagery","distractor-random-med-distractor-color-matches_target-basemap-imagery","distractor-random-low-distractor-color-matches_target-basemap-imagery","distractor-random-all-distractor-color-red-basemap-none","distractor-random-high-distractor-color-red-basemap-none","distractor-random-med-distractor-color-red-basemap-none","distractor-random-low-distractor-color-red-basemap-none","distractor-random-high-distractor-color-red-basemap-streets","distractor-random-med-distractor-color-red-basemap-streets","distractor-random-low-distractor-color-red-basemap-streets","distractor-random-high-distractor-color-red-basemap-dark","distractor-random-med-distractor-color-red-basemap-dark","distractor-random-low-distractor-color-red-basemap-dark","distractor-random-high-distractor-color-red-basemap-imagery","distractor-random-med-distractor-color-red-basemap-imagery","distractor-random-low-distractor-color-red-basemap-imagery","distractor-random-all-distractor-color-blue-basemap-none","distractor-random-high-distractor-color-blue-basemap-none","distractor-random-med-distractor-color-blue-basemap-none","distractor-random-low-distractor-color-blue-basemap-none","distractor-random-high-distractor-color-blue-basemap-streets","distractor-random-med-distractor-color-blue-basemap-streets","distractor-random-low-distractor-color-blue-basemap-streets","distractor-random-high-distractor-color-blue-basemap-dark","distractor-random-med-distractor-color-blue-basemap-dark","distractor-random-low-distractor-color-blue-basemap-dark","distractor-random-high-distractor-color-blue-basemap-imagery","distractor-random-med-distractor-color-blue-basemap-imagery","distractor-random-low-distractor-color-blue-basemap-imagery","no-distractor-basemap-none","no-distractor-basemap-streets","no-distractor-basemap-dark","no-distractor-basemap-imagery"]},p=function(){return["distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-none","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-none","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-none","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-none","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-none","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-none","distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-streets","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-streets","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-streets","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-streets","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-streets","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-streets","distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-dark","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-dark","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-dark","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-dark","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-dark","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-dark","distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-imagery","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-none","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-none","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-none","distractor-clustered--large_rough-distractor-color-matches_target-basemap-none","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-none","distractor-clustered-small_rough-distractor-color-matches_target-basemap-none","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-streets","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-streets","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-streets","distractor-clustered--large_rough-distractor-color-matches_target-basemap-streets","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-streets","distractor-clustered-small_rough-distractor-color-matches_target-basemap-streets","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-dark","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-dark","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-dark","distractor-clustered--large_rough-distractor-color-matches_target-basemap-dark","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-dark","distractor-clustered-small_rough-distractor-color-matches_target-basemap-dark","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-imagery","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-imagery","distractor-clustered--large_rough-distractor-color-matches_target-basemap-imagery","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-imagery","distractor-clustered-small_rough-distractor-color-matches_target-basemap-imagery","distractor-clustered-large_smooth-distractor-color-red-basemap-none","distractor-clustered-medium_smooth-distractor-color-red-basemap-none","distractor-clustered-small_smooth-distractor-color-red-basemap-none","distractor-clustered--large_rough-distractor-color-red-basemap-none","distractor-clustered-medium_rough-distractor-color-red-basemap-none","distractor-clustered-small_rough-distractor-color-red-basemap-none","distractor-clustered-large_smooth-distractor-color-red-basemap-streets","distractor-clustered-medium_smooth-distractor-color-red-basemap-streets","distractor-clustered-small_smooth-distractor-color-red-basemap-streets","distractor-clustered--large_rough-distractor-color-red-basemap-streets","distractor-clustered-medium_rough-distractor-color-red-basemap-streets","distractor-clustered-small_rough-distractor-color-red-basemap-streets","distractor-clustered-large_smooth-distractor-color-red-basemap-dark","distractor-clustered-medium_smooth-distractor-color-red-basemap-dark","distractor-clustered-small_smooth-distractor-color-red-basemap-dark","distractor-clustered--large_rough-distractor-color-red-basemap-dark","distractor-clustered-medium_rough-distractor-color-red-basemap-dark","distractor-clustered-small_rough-distractor-color-red-basemap-dark","distractor-clustered-large_smooth-distractor-color-red-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-red-basemap-imagery","distractor-clustered-small_smooth-distractor-color-red-basemap-imagery","distractor-clustered--large_rough-distractor-color-red-basemap-imagery","distractor-clustered-medium_rough-distractor-color-red-basemap-imagery","distractor-clustered-small_rough-distractor-color-red-basemap-imagery","distractor-clustered-large_smooth-distractor-color-blue-basemap-none","distractor-clustered-medium_smooth-distractor-color-blue-basemap-none","distractor-clustered-small_smooth-distractor-color-blue-basemap-none","distractor-clustered--large_rough-distractor-color-blue-basemap-none","distractor-clustered-medium_rough-distractor-color-blue-basemap-none","distractor-clustered-small_rough-distractor-color-blue-basemap-none","distractor-clustered-large_smooth-distractor-color-blue-basemap-streets","distractor-clustered-medium_smooth-distractor-color-blue-basemap-streets","distractor-clustered-small_smooth-distractor-color-blue-basemap-streets","distractor-clustered--large_rough-distractor-color-blue-basemap-streets","distractor-clustered-medium_rough-distractor-color-blue-basemap-streets","distractor-clustered-small_rough-distractor-color-blue-basemap-streets","distractor-clustered-large_smooth-distractor-color-blue-basemap-dark","distractor-clustered-medium_smooth-distractor-color-blue-basemap-dark","distractor-clustered-small_smooth-distractor-color-blue-basemap-dark","distractor-clustered--large_rough-distractor-color-blue-basemap-dark","distractor-clustered-medium_rough-distractor-color-blue-basemap-dark","distractor-clustered-small_rough-distractor-color-blue-basemap-dark","distractor-clustered-large_smooth-distractor-color-blue-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-blue-basemap-imagery","distractor-clustered-small_smooth-distractor-color-blue-basemap-imagery","distractor-clustered--large_rough-distractor-color-blue-basemap-imagery","distractor-clustered-medium_rough-distractor-color-blue-basemap-imagery","distractor-clustered-small_rough-distractor-color-blue-basemap-imagery"]};r(345);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,o=!1,s=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){o=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw s}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b="src/images/target-01.png",y=Object(i.a)((function(e){var t,r,a;return{root:f({padding:e.spacing(2),backgroundColor:"#ffffff",color:"#000000",maxWidth:"1024px",maxHeight:"650px",borderRadius:"4px"},e.breakpoints.down("sm"),{maxWidth:"360px",maxHeight:"800px",padding:e.spacing(0)}),mainTitle:{height:"".concat(60,"px")},buttonsDirecton:f({width:"296px",height:"".concat(50,"px"),fontSize:"1.5rem",fontWeight:"normal",marginTop:e.spacing(0),marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("sm"),{display:window.screen.height<700?"none":"inline",alignItems:"center",justifyContent:"center",marginBottom:e.spacing(1),width:"320px"}),buttonsYesNo:f({width:"100%",height:"".concat(50,"px"),fontSize:"1.5rem",fontWeight:"bold"},e.breakpoints.down("sm"),{fontSize:".85rem"}),searchMapsArea:{margin:e.spacing(0)},buttonsYesNoArea:{margin:e.spacing(0)},buttonYesBox:{marginLeft:e.spacing(2)},buttonNoBox:{marginRight:e.spacing(2)},sideMapsHolder:{height:"100%"},searchMapsGrid:f({height:"100%"},e.breakpoints.down("sm"),{height:"unset",order:5,padding:e.spacing(.5)}),searchMapGrid:f({display:"flex"},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2)}),searchMapHolder:f({height:"500px",width:"633px",marginLeft:e.spacing(0),marginRight:e.spacing(0)},e.breakpoints.down("sm"),{height:"198px",width:"253px"}),targetMapHolder:f({backgroundColor:"#EDEDED",height:"220px",marginLeft:e.spacing(0),marginRight:e.spacing(0)},e.breakpoints.down("sm"),{height:"135px",width:"253px",maxWidth:"253px"}),statGridLeft:f({paddingLeft:e.spacing(2),height:"145px"},e.breakpoints.down("sm"),{order:2,height:"121px",display:window.screen.height<700?"none":"flex"}),statGridRight:f({paddingRight:e.spacing(2),height:"145px"},e.breakpoints.down("sm"),{order:2,height:"121px",display:window.screen.height<700?"none":"flex"}),statTitle:f({height:"75px",display:"flex",alignItems:"flex-end"},e.breakpoints.down("sm"),{order:1,display:"none"}),targetTitle:f({height:"60px"},e.breakpoints.down("sm"),{order:3,paddingLeft:e.spacing(2),height:"40px"}),targetMapGrid:f({display:"flex"},e.breakpoints.down("sm"),{order:4,paddingLeft:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"}),searchMapsTitle:f({},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),height:"45px"}),statBoxLeft:f({height:"145px",borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},e.breakpoints.down("sm"),{height:"121px"}),statBoxRight:f({height:"145px",borderTopRightRadius:"4px",borderBottomRightRadius:"4px"},e.breakpoints.down("sm"),{height:"121px"}),targetMapImg:f({width:"280px",height:"220px"},e.breakpoints.down("sm"),{height:"125px",width:"158px"}),searchMapImg:f({borderRadius:"4px",height:"500px",width:"633px"},e.breakpoints.down("sm"),{height:"198px",width:"253px",boder:"1px solid ".concat("#EDEDED")}),StartGrid:f({},e.breakpoints.down("sm"),{marginTop:"".concat(e.spacing(1)," !important"),paddingTop:"".concat(e.spacing(0)," !important"),order:7}),yesNoGrid:f({},e.breakpoints.down("sm"),{marginTop:"".concat(e.spacing(1)," !important"),paddingTop:"".concat(e.spacing(0)," !important"),marginBottom:"".concat(e.spacing(1)," !important"),paddingBottom:"".concat(e.spacing(0)," !important"),order:6}),h3:f({},e.breakpoints.down("sm"),{marginTop:e.spacing(1.5),marginBottom:e.spacing(1)}),none:{display:"none"},nextTargetModal:{display:"flex",alignItems:"center",justifyContent:"center"},nextTargetInfo:(t={width:"50%"},f(t,e.breakpoints.down("sm"),{width:"80%"}),f(t,"backgroundColor",e.palette.background.paper),f(t,"border","2px solid #000"),f(t,"boxShadow",e.shadows[5]),f(t,"padding",e.spacing(2,4,3)),t),nextTargetInfoCenter:{display:"flex",alignItems:"center",justifyContent:"center"},nextTargetDescription:f({marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:".75em"}),nextTargetDescriptionMobile:f({marginBottom:e.spacing(2),display:"none"},e.breakpoints.down("sm"),{display:"block",fontSize:".75rem"}),aggreementModal:{display:"flex",alignItems:"center",justifyContent:"center"},AggreementInfo:(r={width:"50%"},f(r,e.breakpoints.down("sm"),{width:"80%"}),f(r,"backgroundColor",e.palette.background.paper),f(r,"border","2px solid #000"),f(r,"boxShadow",e.shadows[5]),f(r,"padding",e.spacing(2,4,3)),r),AggreementInfoTitle:f({},e.breakpoints.down("sm"),{fontSize:"1.2em",marginBottom:e.spacing(.5)}),AggreementInfoDecription:f({marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:".75em",marginBottom:e.spacing(.5)}),AggreementInfoContact:f({fontSize:".85rem",marginBottom:e.spacing(3),fontStyle:"italic"},e.breakpoints.down("sm"),{fontSize:".60rem"}),AggreementCenter:f({display:"flex",alignItems:"center",justifyContent:"center"},e.breakpoints.down("sm"),{flexWrap:"wrap"}),aggreeButton:f({marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("sm"),(a={marginTop:e.spacing(1)},f(a,"marginTop",e.spacing(1)),f(a,"width","100%"),a))}}));function x(){var e=g(Object(a.useState)(!0),2),t=(e[0],e[1],g(Object(a.useState)(Date.now()),2)),r=t[0],s=t[1],n=o.a.useRef(r),i=function(e){n.current=e,s(e)},h=g(Object(a.useState)(!0),2),f=h[0],x=h[1],_=o.a.useRef(f),w=function(e){_.current=e,x(e)},v=g(Object(a.useState)(!0),2),k=v[0],E=v[1],j=o.a.useRef(N),N=function(e){j.current=e,E(e)},O=g(Object(a.useState)(u()),2),D=O[0],I=O[1],S=o.a.useRef(D),T=function(e){S.current=e,I(e)},M=g(Object(a.useState)(u()),2),R=M[0],C=M[1],A=o.a.useRef(R),H=function(e){A.current=e,C(e)},B=g(Object(a.useState)(u()),2),P=B[0],L=B[1],G=o.a.useRef(P),Y=function(e){G.current=e,L(e)},z=g(Object(a.useState)(u()),2),q=z[0],U=z[1],W=o.a.useRef(q),J=function(e){W.current=e,U(e)},X=g(Object(a.useState)(p()),2),F=X[0],$=X[1],K=o.a.useRef(F),Q=function(e){K.current=e,$(e)},V=g(Object(a.useState)(p()),2),Z=V[0],ee=V[1],te=o.a.useRef(Z),re=function(e){te.current=e,ee(e)},ae=g(Object(a.useState)(p()),2),oe=ae[0],se=ae[1],ne=o.a.useRef(oe),ie=function(e){ne.current=e,se(e)},ce=g(Object(a.useState)(p()),2),de=ce[0],le=ce[1],me=o.a.useRef(de),ue=function(e){me.current=e,le(e)},pe=g(Object(a.useState)("src/images/blank.png"),2),ge=pe[0],he=pe[1],fe=o.a.useRef(ge),be=function(e){fe.current=e,he(e)},ye=g(Object(a.useState)(b),2),xe=ye[0],_e=ye[1],we=o.a.useRef(xe),ve=function(e){we.current=e,_e(e)},ke=g(Object(a.useState)("random-gestalt"),2),Ee=ke[0],je=ke[1],Ne=o.a.useRef(Ee),Oe=function(e){Ne.current=e,je(e)},De=g(Object(a.useState)(""),2),Ie=De[0],Se=De[1],Te=o.a.useRef(Ie),Me=function(e){Te.current=e,Se(e)},Re=g(Object(a.useState)([S,A]),2),Ce=Re[0],Ae=Re[1],He=o.a.useRef(Ce),Be=function(e){He.current=e,Ae(e)},Pe=g(Object(a.useState)([T,H]),2),Le=Pe[0],Ge=Pe[1],Ye=o.a.useRef(Le),ze=function(e){Ye.current=e,Ge(e)},qe=g(o.a.useState(!1),2),Ue=qe[0],We=qe[1],Je=function(){We(!0)},Xe=function(){We(!1)},Fe=g(o.a.useState(!0),2),$e=Fe[0],Ke=Fe[1],Qe=function(){w(!0),N(!0),Ke(!1)},Ve=function(e){return e[Math.floor(Math.random()*e.length)]},Ze=function(e){var t=e.ref,r=e.set,a=e.useWith,o="with"===a?[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]:[0],s=function(e){if(0===e)return"target-none-";if(function(e){return 1}){var t=e.toString().length<2?"0".concat(e.toString()):e.toString();return"target".concat(Te.current,"-").concat(t,"-")}}(Ve(o)),n=Ve(t.current);r(function(e,t){return e.filter((function(e){return e!=t}))}(t.current,n));var i="".concat("https://capstone-images-daveism.s3.amazonaws.com/").concat(s).concat(n,".png");return be(i),console.log("array with is this long: ",t.current.length),console.log("current map: ",n),console.log("at: ",i),i},et=function e(){var t=Ve([0,1]),r=t?"with":"without",a=Ce[t],o=Le[t],s=Ce[t?0:1];return 0===a.current.length&&0===s.current.length?(window.removeEventListener("keydown",nt),w(!0),N(!1),be("src/images/blank.png"),ot(),We(!0),null):(Ze({ref:a,set:o,useWith:r}),0===a.current.length&&e(),null)},tt=y(),rt=function(){return Date.now()-n.current},at=function(e){if(_.current)return null;switch(e){case"Y":var t=rt();return i(Date.now()),console.log("you answered yes in ".concat(t," ms")),et(),e;case"N":var r=rt();return i(Date.now()),console.log("you answered no in ".concat(r," ms")),et(),e;default:return null}},ot=function(){switch(Ne.current){case"random-gestalt":return ze([Y,J]),Be([G,W]),ve("src/images/target-not-gestalt-01.png"),Me("-not-gestalt"),Oe("random-not-gestalt"),void st();case"random-not-gestalt":return ze([Q,re]),Be([K,te]),ve(b),Me(""),Oe("random-clustered-gestalt"),void st();case"random-clustered-gestalt":return ze([ie,ue]),Be([ne,me]),ve("src/images/target-not-gestalt-01.png"),Me("-not-gestalt"),Oe("random-clustered-not-gestalt"),void st();case"random-clustered-not-gestalt":return ze([T,H]),Be([S,A]),ve(b),Me(""),Oe("random-gestalt"),void st();default:return ze([Y,J]),Be([G,W]),ve(b),Me("-not-gestalt"),Oe("random-not-gestalt"),void st()}},st=function(){switch(Ne.current){case"random-gestalt":return ze([T,H]),Be([S,A]),void Me("");case"random-not-gestalt":return ze([Y,J]),Be([G,W]),void Me("-not-gestalt");case"random-clustered-gestalt":return ze([Q,re]),Be([K,te]),void Me("");case"random-clustered-not-gestalt":return ze([ie,ue]),Be([ne,me]),void Me("-not-gestalt");default:return ze([T,H]),Be([S,A]),void Me("")}},nt=function(e){return e.key?(at(e.key.toUpperCase()),null):(at("YES"===e.target.innerText.toUpperCase()?"Y":"N"),null)},it=o.a.createElement("div",{className:tt.nextTargetInfo},o.a.createElement("h2",{id:"simple-modal-title"},"Directions"),o.a.createElement("p",{id:"simple-modal-description",className:tt.nextTargetDescription},"You are looking for the following object in the map, the color of the object will NOT change."),o.a.createElement("div",{className:tt.nextTargetInfoCenter},o.a.createElement("img",{src:xe,alt:"test",className:tt.targetMapImg})),o.a.createElement("p",{id:"simple-modal-description",className:tt.nextTargetDescription},"It is important that you answer as quickly as you can. If the object does not exist on the map, you should answer no. If the object does exist on the map, you should answer yes. You can answer yes or no by using the ",o.a.createElement("strong",null,"'y'")," or ",o.a.createElement("strong",null,"'n'")," key on the keyboard or clicking the ",o.a.createElement("strong",null,"yes")," or ",o.a.createElement("strong",null,"no")," button."),o.a.createElement("p",{id:"simple-modal-description",className:tt.nextTargetDescriptionMobile},"This task will be more comfortable on a larger screen size. While it is not required, you may want to consider switching to a larger screen such as a tablet, a laptop, or a secondary monitor."),o.a.createElement("p",{id:"simple-modal-description",className:tt.nextTargetDescription},"To begin the close this box and then click  ",o.a.createElement("strong",null,"Start Experiment"),"."),o.a.createElement("div",{className:tt.nextTargetInfoCenter},o.a.createElement(l.a,{onClick:Xe,color:"primary",variant:"contained"},"Close"))),ct=o.a.createElement("div",{className:tt.AggreementInfo},o.a.createElement("h2",{id:"simple-modal-title",className:tt.AggreementInfoTitle},"Study Participation Aggreement"),o.a.createElement("p",{id:"simple-modal-description",className:tt.AggreementInfoDecription},"Thank you for taking part in this study. By using the following website, you are agreeing to participate in a study about how people use web-presented maps.  We will collect information about your interactions with this site but not any personally identifiable information. The only people with access to the study data will the researchers. However, the data will be summarized, shared, and disseminated in talks, blogs, and possibly research journals. There is no cost to you to participate in this research study and you will not be compensated. There are no known risks in the following tasks."),o.a.createElement("p",{id:"simple-modal-description",className:tt.AggreementInfoDecription},"By agreeing to this, you have acknowledged that you have read the contents of this consent, are an adult over 18 years of age, and you are giving consent to participate in this study"),o.a.createElement("p",{id:"simple-modal-contact",className:tt.AggreementInfoContact},"The researchers conducting this study are Michael Neelon, PhD and David Michelson. For questions or more information concerning this research you may contact Dr. Neelon at 828-250-2359 or mneelon@unca.edu, or David Michelson at dmichels@unca.edu.  If you have any questions about your rights as a research subject, you may contact the UNC Asheville Institutional Review Board at 828.251.6313 or irb@unca.edu."),o.a.createElement("div",{className:tt.AggreementCenter},o.a.createElement(l.a,{onClick:function(){N(!1),Ke(!1),We(!0)},className:tt.aggreeButton,color:"primary",variant:"contained"},"I aggree"),o.a.createElement(l.a,{onClick:Qe,className:tt.aggreeButton,color:"default",variant:"contained"},"I do not aggree")));return Object(a.useEffect)((function(){return function(){return window.removeEventListener("keydown",nt)}}),[]),o.a.createElement("div",{className:tt.root},o.a.createElement(c.a,{container:!0,spacing:1,height:"100%"},o.a.createElement(c.a,{container:!0,spacing:2,className:tt.searchMapsArea},o.a.createElement(c.a,{item:!0,xs:12,md:4,m:2,display:"flex",flex:1},o.a.createElement(c.a,{container:!0,spacing:0,className:tt.sideMapsHolder},o.a.createElement(c.a,{onClick:Je,item:!0,xs:12,display:"flex",flex:1,className:tt.targetTitle},o.a.createElement("h3",{className:tt.h3},"Look for this object")),o.a.createElement(c.a,{onClick:Je,item:!0,xs:12,display:"flex",flex:1,className:tt.targetMapGrid},o.a.createElement(d.a,{display:"flex",flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center",className:tt.targetMapHolder},o.a.createElement("img",{src:xe,alt:"test",className:tt.targetMapImg}))),o.a.createElement(l.a,{onClick:Je,variant:"contained",color:"default",className:tt.buttonsDirecton,height:"100%"},"Directions"),o.a.createElement(c.a,{item:!0,xs:12,display:"flex",flex:1,className:tt.statTitle},o.a.createElement("h3",{className:tt.h3},"Your stats")),o.a.createElement(c.a,{item:!0,xs:6,display:"flex",flex:1,className:tt.statGridLeft},o.a.createElement(d.a,{display:"flex",flexDirection:"row",m:0,flex:1,border:1,borderColor:"grey.500",className:tt.statBoxLeft})),o.a.createElement(c.a,{item:!0,xs:6,display:"flex",flex:1,className:tt.statGridRight},o.a.createElement(d.a,{display:"flex",flexDirection:"row",m:0,flex:1,border:1,borderColor:"grey.500",className:tt.statBoxRight})))),o.a.createElement(c.a,{item:!0,xs:12,md:8,display:"flex",flex:1,className:tt.searchMapsGrid},o.a.createElement(c.a,{container:!0,spacing:0,display:"flex"},o.a.createElement(c.a,{item:!0,xs:12,display:"flex",flex:1,className:tt.searchMapsTitle},o.a.createElement("h3",{className:tt.h3},"On this map")),o.a.createElement(c.a,{item:!0,xs:12,display:"flex",flex:1,className:tt.searchMapGrid},o.a.createElement(d.a,{display:"flex",flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center",className:tt.searchMapHolder},o.a.createElement("img",{src:ge,className:tt.searchMapImg})))))),o.a.createElement(c.a,{container:!0,spacing:2,className:tt.buttonsYesNoArea},o.a.createElement(c.a,{item:!0,xs:12,md:4,display:"flex",flex:1,className:tt.StartGrid},o.a.createElement(d.a,{display:"flex",flexDirection:"row",m:1,flex:1},o.a.createElement(l.a,{onClick:function(e){w(!1),N(!0),st(),window.addEventListener("keydown",nt),i(Date.now()),et()},disabled:k,variant:"contained",color:"primary",className:tt.buttonsYesNo,height:"100%"},"Start Experiment"))),o.a.createElement(c.a,{item:!0,xs:6,md:4,display:"flex",flex:1,className:tt.yesNoGrid},o.a.createElement(d.a,{display:"flex",flexDirection:"row",m:1,flex:1,className:tt.buttonYesBox},o.a.createElement(l.a,{onClick:nt,disabled:f,variant:"contained",value:"Y",className:tt.buttonsYesNo,height:"100%"},"Yes"))),o.a.createElement(c.a,{item:!0,xs:6,md:4,display:"flex",flex:1,className:tt.yesNoGrid},o.a.createElement(d.a,{display:"flex",flexDirection:"row",m:1,flex:1,className:tt.buttonNoBox},o.a.createElement(l.a,{onClick:nt,disabled:f,variant:"contained",value:"N",className:tt.buttonsYesNo,height:"100%"},"No"))))),o.a.createElement(m.a,{open:Ue,onClose:Xe,className:tt.nextTargetModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},it),o.a.createElement(m.a,{open:$e,onClose:Qe,className:tt.aggreementModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},ct))}function _(){return o.a.createElement("div",null,o.a.createElement(x,null))}x.propTypes={},n.a.render(o.a.createElement(_,null),document.querySelector("#root"))}});