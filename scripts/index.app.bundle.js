!function(e){function t(t){for(var a,o,s=t[0],n=t[1],i=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(T,o)&&T[o]&&d.push(T[o][0]),T[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(B&&B(t);d.length;)d.shift()();return M.push.apply(M,i||[]),r()}function r(){for(var e,t=0;t<M.length;t++){for(var r=M[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==T[s]&&(a=!1)}a&&(M.splice(t--,1),e=R(R.s=r[0]))}return e}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!v[e]||!w[e])return;for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(h[r]=t[r]);0==--y&&0===x&&N()}(e,t),a&&a(e,t)};var o,s=!0,n="0d2c0d16424b72ba3ec2",i={},c=[],d=[];function l(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)r._acceptedDependencies[e[a]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[t]=e[t],p("ready");break;case"ready":I(t);break;case"prepare":case"check":case"dispose":case"apply":(b=b||[]).push(t)}},check:E,apply:O,status:function(e){if(!e)return u;m.push(e)},addStatusHandler:function(e){m.push(e)},removeStatusHandler:function(e){var t=m.indexOf(e);t>=0&&m.splice(t,1)},data:i[t]};return o=void 0,r}var m=[],u="idle";function p(e){u=e;for(var t=0;t<m.length;t++)m[t].call(null,e)}var g,h,f,b,y=0,x=0,_={},w={},v={};function k(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return s=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var a=new XMLHttpRequest,o=R.p+""+n+".hot-update.json";a.open("GET",o,!0),a.timeout=t,a.send(null)}catch(e){return r(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===a.status)e();else if(200!==a.status&&304!==a.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(a.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return p(D()?"ready":"idle"),null;w={},_={},v=e.c,f=e.h,p("prepare");var t=new Promise((function(e,t){g={resolve:e,reject:t}}));for(var r in h={},T)j(r);return"prepare"===u&&0===x&&0===y&&N(),t}));var t}function j(e){v[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+n+".hot-update.js",document.head.appendChild(t)}(e)):_[e]=!0}function N(){p("ready");var e=g;if(g=null,e)if(s)Promise.resolve().then((function(){return O(s)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&t.push(k(r));e.resolve(t)}}function O(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function t(r){var a,s,d,l,m;function u(e){for(var t=[e],r={},a=t.map((function(e){return{chain:[e],id:e}}));a.length>0;){var o=a.pop(),s=o.id,n=o.chain;if((l=S[s])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:n,moduleId:s};if(l.hot._main)return{type:"unaccepted",chain:n,moduleId:s};for(var i=0;i<l.parents.length;i++){var c=l.parents[i],d=S[c];if(d){if(d.hot._declinedDependencies[s])return{type:"declined",chain:n.concat([c]),moduleId:s,parentId:c};-1===t.indexOf(c)&&(d.hot._acceptedDependencies[s]?(r[c]||(r[c]=[]),g(r[c],[s])):(delete r[c],t.push(c),a.push({chain:n.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function g(e,t){for(var r=0;r<t.length;r++){var a=t[r];-1===e.indexOf(a)&&e.push(a)}}D();var y={},x=[],_={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var j;m=k(E),j=h[E]?u(m):{type:"disposed",moduleId:E};var N=!1,O=!1,I=!1,M="";switch(j.chain&&(M="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(N=new Error("Aborted because of self decline: "+j.moduleId+M));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(N=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+M));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(N=new Error("Aborted because "+m+" is not accepted"+M));break;case"accepted":r.onAccepted&&r.onAccepted(j),O=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),I=!0;break;default:throw new Error("Unexception type "+j.type)}if(N)return p("abort"),Promise.reject(N);if(O)for(m in _[m]=h[m],g(x,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,m)&&(y[m]||(y[m]=[]),g(y[m],j.outdatedDependencies[m]));I&&(g(x,[j.moduleId]),_[m]=w)}var C,A=[];for(s=0;s<x.length;s++)m=x[s],S[m]&&S[m].hot._selfAccepted&&_[m]!==w&&!S[m].hot._selfInvalidated&&A.push({module:m,parents:S[m].parents.slice(),errorHandler:S[m].hot._selfAccepted});p("dispose"),Object.keys(v).forEach((function(e){!1===v[e]&&function(e){delete T[e]}(e)}));var H,B,P=x.slice();for(;P.length>0;)if(m=P.pop(),l=S[m]){var L={},G=l.hot._disposeHandlers;for(d=0;d<G.length;d++)(a=G[d])(L);for(i[m]=L,l.hot.active=!1,delete S[m],delete y[m],d=0;d<l.children.length;d++){var Y=S[l.children[d]];Y&&((C=Y.parents.indexOf(m))>=0&&Y.parents.splice(C,1))}}for(m in y)if(Object.prototype.hasOwnProperty.call(y,m)&&(l=S[m]))for(B=y[m],d=0;d<B.length;d++)H=B[d],(C=l.children.indexOf(H))>=0&&l.children.splice(C,1);p("apply"),void 0!==f&&(n=f,f=void 0);for(m in h=void 0,_)Object.prototype.hasOwnProperty.call(_,m)&&(e[m]=_[m]);var z=null;for(m in y)if(Object.prototype.hasOwnProperty.call(y,m)&&(l=S[m])){B=y[m];var q=[];for(s=0;s<B.length;s++)if(H=B[s],a=l.hot._acceptedDependencies[H]){if(-1!==q.indexOf(a))continue;q.push(a)}for(s=0;s<q.length;s++){a=q[s];try{a(B)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:m,dependencyId:B[s],error:e}),r.ignoreErrored||z||(z=e)}}}for(s=0;s<A.length;s++){var U=A[s];m=U.module,c=U.parents,o=m;try{R(m)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:m,error:t,originalError:e}),r.ignoreErrored||z||(z=t),z||(z=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:m,error:e}),r.ignoreErrored||z||(z=e)}}if(z)return p("fail"),Promise.reject(z);if(b)return t(r).then((function(e){return x.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(x)}))}(t=t||{})}function D(){if(b)return h||(h={}),b.forEach(I),b=void 0,!0}function I(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var S={},T={0:0},M=[];function R(t){if(S[t])return S[t].exports;var r=S[t]={i:t,l:!1,exports:{},hot:l(t),parents:(d=c,c=[],d),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=S[e];if(!t)return R;var r=function(r){return t.hot.active?(S[r]?-1===S[r].parents.indexOf(e)&&S[r].parents.push(e):(c=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),R(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var s in R)Object.prototype.hasOwnProperty.call(R,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(r,s,a(s));return r.e=function(e){return"ready"===u&&p("prepare"),x++,R.e(e).then(t,(function(e){throw t(),e}));function t(){x--,"prepare"===u&&(_[e]||j(e),0===x&&0===y&&N())}},r.t=function(e,t){return 1&t&&(e=r(e)),R.t(e,-2&t)},r}(t)),r.l=!0,r.exports}R.m=e,R.c=S,R.d=function(e,t,r){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(R.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)R.d(r,a,function(t){return e[t]}.bind(null,a));return r},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="",R.h=function(){return n};var C=window.webpackJsonp=window.webpackJsonp||[],A=C.push.bind(C);C.push=t,C=C.slice();for(var H=0;H<C.length;H++)t(C[H]);var B=A;M.push([350,1]),r()}({345:function(e,t,r){"use strict";var a=r(346)(e.i,{locals:!1});e.hot.dispose(a),e.hot.accept(void 0,a)},350:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),s=r(19),n=r.n(s),i=(r(157),r(13)),c=r.n(i),d=r(370),l=r(372),m=r(373),u=r(375),p=r(374),g=function(){return["distractor-random-all-distractor-color-mixed-basemap-none","distractor-random-high-distractor-color-mixed-basemap-none","distractor-random-med-distractor-color-mixed-basemap-none","distractor-random-low-distractor-color-mixed-basemap-none","distractor-random-high-distractor-color-mixed-basemap-streets","distractor-random-med-distractor-color-mixed-basemap-streets","distractor-random-low-distractor-color-mixed-basemap-streets","distractor-random-high-distractor-color-mixed-basemap-dark","distractor-random-med-distractor-color-mixed-basemap-dark","distractor-random-low-distractor-color-mixed-basemap-dark","distractor-random-high-distractor-color-mixed-basemap-imagery","distractor-random-med-distractor-color-mixed-basemap-imagery","distractor-random-low-distractor-color-mixed-basemap-imagery","distractor-random-all-distractor-color-matches_target-basemap-none","distractor-random-high-distractor-color-matches_target-basemap-none","distractor-random-med-distractor-color-matches_target-basemap-none","distractor-random-low-distractor-color-matches_target-basemap-none","distractor-random-high-distractor-color-matches_target-basemap-streets","distractor-random-med-distractor-color-matches_target-basemap-streets","distractor-random-low-distractor-color-matches_target-basemap-streets","distractor-random-high-distractor-color-matches_target-basemap-dark","distractor-random-med-distractor-color-matches_target-basemap-dark","distractor-random-low-distractor-color-matches_target-basemap-dark","distractor-random-high-distractor-color-matches_target-basemap-imagery","distractor-random-med-distractor-color-matches_target-basemap-imagery","distractor-random-low-distractor-color-matches_target-basemap-imagery","distractor-random-all-distractor-color-red-basemap-none","distractor-random-high-distractor-color-red-basemap-none","distractor-random-med-distractor-color-red-basemap-none","distractor-random-low-distractor-color-red-basemap-none","distractor-random-high-distractor-color-red-basemap-streets","distractor-random-med-distractor-color-red-basemap-streets","distractor-random-low-distractor-color-red-basemap-streets","distractor-random-high-distractor-color-red-basemap-dark","distractor-random-med-distractor-color-red-basemap-dark","distractor-random-low-distractor-color-red-basemap-dark","distractor-random-high-distractor-color-red-basemap-imagery","distractor-random-med-distractor-color-red-basemap-imagery","distractor-random-low-distractor-color-red-basemap-imagery","distractor-random-all-distractor-color-blue-basemap-none","distractor-random-high-distractor-color-blue-basemap-none","distractor-random-med-distractor-color-blue-basemap-none","distractor-random-low-distractor-color-blue-basemap-none","distractor-random-high-distractor-color-blue-basemap-streets","distractor-random-med-distractor-color-blue-basemap-streets","distractor-random-low-distractor-color-blue-basemap-streets","distractor-random-high-distractor-color-blue-basemap-dark","distractor-random-med-distractor-color-blue-basemap-dark","distractor-random-low-distractor-color-blue-basemap-dark","distractor-random-high-distractor-color-blue-basemap-imagery","distractor-random-med-distractor-color-blue-basemap-imagery","distractor-random-low-distractor-color-blue-basemap-imagery","no-distractor-basemap-none","no-distractor-basemap-streets","no-distractor-basemap-dark","no-distractor-basemap-imagery"]},h=function(){return["distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-none","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-none","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-none","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-none","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-none","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-none","distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-streets","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-streets","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-streets","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-streets","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-streets","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-streets","distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-dark","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-dark","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-dark","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-dark","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-dark","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-dark","distractor-clustered-large_smooth-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-small_smooth-distractor-color-mixed_v1-basemap-imagery","distractor-clustered--large_rough-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-medium_rough-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-small_rough-distractor-color-mixed_v1-basemap-imagery","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-none","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-none","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-none","distractor-clustered--large_rough-distractor-color-matches_target-basemap-none","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-none","distractor-clustered-small_rough-distractor-color-matches_target-basemap-none","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-streets","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-streets","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-streets","distractor-clustered--large_rough-distractor-color-matches_target-basemap-streets","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-streets","distractor-clustered-small_rough-distractor-color-matches_target-basemap-streets","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-dark","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-dark","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-dark","distractor-clustered--large_rough-distractor-color-matches_target-basemap-dark","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-dark","distractor-clustered-small_rough-distractor-color-matches_target-basemap-dark","distractor-clustered-large_smooth-distractor-color-matches_target-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-matches_target-basemap-imagery","distractor-clustered-small_smooth-distractor-color-matches_target-basemap-imagery","distractor-clustered--large_rough-distractor-color-matches_target-basemap-imagery","distractor-clustered-medium_rough-distractor-color-matches_target-basemap-imagery","distractor-clustered-small_rough-distractor-color-matches_target-basemap-imagery","distractor-clustered-large_smooth-distractor-color-red-basemap-none","distractor-clustered-medium_smooth-distractor-color-red-basemap-none","distractor-clustered-small_smooth-distractor-color-red-basemap-none","distractor-clustered--large_rough-distractor-color-red-basemap-none","distractor-clustered-medium_rough-distractor-color-red-basemap-none","distractor-clustered-small_rough-distractor-color-red-basemap-none","distractor-clustered-large_smooth-distractor-color-red-basemap-streets","distractor-clustered-medium_smooth-distractor-color-red-basemap-streets","distractor-clustered-small_smooth-distractor-color-red-basemap-streets","distractor-clustered--large_rough-distractor-color-red-basemap-streets","distractor-clustered-medium_rough-distractor-color-red-basemap-streets","distractor-clustered-small_rough-distractor-color-red-basemap-streets","distractor-clustered-large_smooth-distractor-color-red-basemap-dark","distractor-clustered-medium_smooth-distractor-color-red-basemap-dark","distractor-clustered-small_smooth-distractor-color-red-basemap-dark","distractor-clustered--large_rough-distractor-color-red-basemap-dark","distractor-clustered-medium_rough-distractor-color-red-basemap-dark","distractor-clustered-small_rough-distractor-color-red-basemap-dark","distractor-clustered-large_smooth-distractor-color-red-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-red-basemap-imagery","distractor-clustered-small_smooth-distractor-color-red-basemap-imagery","distractor-clustered--large_rough-distractor-color-red-basemap-imagery","distractor-clustered-medium_rough-distractor-color-red-basemap-imagery","distractor-clustered-small_rough-distractor-color-red-basemap-imagery","distractor-clustered-large_smooth-distractor-color-blue-basemap-none","distractor-clustered-medium_smooth-distractor-color-blue-basemap-none","distractor-clustered-small_smooth-distractor-color-blue-basemap-none","distractor-clustered--large_rough-distractor-color-blue-basemap-none","distractor-clustered-medium_rough-distractor-color-blue-basemap-none","distractor-clustered-small_rough-distractor-color-blue-basemap-none","distractor-clustered-large_smooth-distractor-color-blue-basemap-streets","distractor-clustered-medium_smooth-distractor-color-blue-basemap-streets","distractor-clustered-small_smooth-distractor-color-blue-basemap-streets","distractor-clustered--large_rough-distractor-color-blue-basemap-streets","distractor-clustered-medium_rough-distractor-color-blue-basemap-streets","distractor-clustered-small_rough-distractor-color-blue-basemap-streets","distractor-clustered-large_smooth-distractor-color-blue-basemap-dark","distractor-clustered-medium_smooth-distractor-color-blue-basemap-dark","distractor-clustered-small_smooth-distractor-color-blue-basemap-dark","distractor-clustered--large_rough-distractor-color-blue-basemap-dark","distractor-clustered-medium_rough-distractor-color-blue-basemap-dark","distractor-clustered-small_rough-distractor-color-blue-basemap-dark","distractor-clustered-large_smooth-distractor-color-blue-basemap-imagery","distractor-clustered-medium_smooth-distractor-color-blue-basemap-imagery","distractor-clustered-small_smooth-distractor-color-blue-basemap-imagery","distractor-clustered--large_rough-distractor-color-blue-basemap-imagery","distractor-clustered-medium_rough-distractor-color-blue-basemap-imagery","distractor-clustered-small_rough-distractor-color-blue-basemap-imagery"]};r(345);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,o=!1,s=void 0;try{for(var n,i=e[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){o=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw s}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x="src/images/target-01.png",_=Object(d.a)((function(e){var t,r,a;return{root:y({padding:e.spacing(2),backgroundColor:"#ffffff",color:"#000000",maxWidth:"1024px",maxHeight:"650px",borderRadius:"4px"},e.breakpoints.down("sm"),{maxWidth:"360px",maxHeight:"800px",padding:e.spacing(0)}),mainTitle:{height:"".concat(60,"px")},buttonsDirecton:y({textTransform:"none",width:"328px",height:"".concat(50,"px"),fontSize:"1.5rem",fontWeight:"normal",marginTop:e.spacing(0),marginLeft:e.spacing(0),marginRight:e.spacing(0)},e.breakpoints.down("sm"),{display:window.screen.height<700?"none":"inline",alignItems:"center",justifyContent:"center",marginBottom:e.spacing(1),marginLeft:e.spacing(2),marginRight:e.spacing(2),width:"320px"}),buttonsYesNo:y({textTransform:"none",width:"100%",height:"".concat(50,"px"),fontSize:"1.5rem",fontWeight:"bold"},e.breakpoints.down("sm"),{fontSize:".85rem"}),searchMapsArea:{margin:e.spacing(0)},buttonsYesNoArea:{margin:e.spacing(0)},buttonYesBox:{marginLeft:e.spacing(2)},buttonNoBox:{marginRight:e.spacing(2)},sideMapsHolder:{height:"100%"},searchMapsGrid:y({height:"100%"},e.breakpoints.down("sm"),{height:"unset",order:5,padding:e.spacing(.5)}),searchMapGrid:y({display:"flex"},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2)}),searchMapHolder:y({height:"500px",width:"633px",marginLeft:e.spacing(0),marginRight:e.spacing(0)},e.breakpoints.down("sm"),{height:"198px",width:"253px"}),targetMapHolder:y({backgroundColor:"#EDEDED",borderRadius:"4px",height:"200px",marginLeft:e.spacing(0),marginRight:e.spacing(0)},e.breakpoints.down("sm"),{height:"135px",width:"253px",maxWidth:"253px"}),statGridLeft:y({paddingLeft:e.spacing(2),height:"145px"},e.breakpoints.down("sm"),{order:2,height:"121px",display:window.screen.height<700?"none":"flex"}),statGridRight:y({paddingRight:e.spacing(2),height:"145px"},e.breakpoints.down("sm"),{order:2,height:"121px",display:window.screen.height<700?"none":"flex"}),statTitle:y({marginLeft:e.spacing(2),height:"75px",display:"flex",alignItems:"flex-end"},e.breakpoints.down("sm"),{order:1,display:"none"}),targetTitle:y({height:"60px"},e.breakpoints.down("sm"),{order:3,paddingLeft:e.spacing(2),height:"40px"}),targetMapGrid:y({display:"flex"},e.breakpoints.down("sm"),{order:4,paddingLeft:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"center"}),searchMapsTitle:y({marginLeft:e.spacing(2)},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),height:"45px"}),statBoxLeft:y({height:"145px",borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},e.breakpoints.down("sm"),{height:"121px"}),statBoxRight:y({height:"145px",borderTopRightRadius:"4px",borderBottomRightRadius:"4px"},e.breakpoints.down("sm"),{height:"121px"}),targetMapImg:y({width:"235px",height:"185px"},e.breakpoints.down("sm"),{height:"125px",width:"158px"}),searchMapImg:(t={borderRadius:"4px",height:"500px",width:"633px",border:"2px solid ".concat("#EDEDED")},y(t,"borderRadius","4px"),y(t,e.breakpoints.down("sm"),{height:"198px",width:"253px"}),t),StartGrid:y({},e.breakpoints.down("sm"),{marginTop:"".concat(e.spacing(1)," !important"),paddingTop:"".concat(e.spacing(0)," !important"),order:7}),yesNoGrid:y({},e.breakpoints.down("sm"),{marginTop:"".concat(e.spacing(1)," !important"),paddingTop:"".concat(e.spacing(0)," !important"),marginBottom:"".concat(e.spacing(1)," !important"),paddingBottom:"".concat(e.spacing(0)," !important"),order:6}),h3:y({},e.breakpoints.down("sm"),{marginTop:e.spacing(1.5),marginBottom:e.spacing(1)}),none:{display:"none"},nextTargetModal:{display:"flex",alignItems:"center",justifyContent:"center"},nextTargetInfo:(r={width:"50%"},y(r,e.breakpoints.down("sm"),{width:"80%"}),y(r,"backgroundColor",e.palette.background.paper),y(r,"border","0px solid transparent"),y(r,"borderRadius","4px"),y(r,"padding",e.spacing(2,4,3)),r),nextTargetInfoCenter:{display:"flex",alignItems:"start",justifyContent:"start"},nextTargetInfoEnd:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"},nextTargetDescription:y({marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:".75em"}),nextTargetDescriptionMobile:y({marginBottom:e.spacing(2),display:"none"},e.breakpoints.down("sm"),{display:"block",fontSize:".75rem"}),aggreementModal:{display:"flex",alignItems:"center",justifyContent:"center"},AggreementInfo:(a={width:"50%"},y(a,e.breakpoints.down("sm"),{width:"80%"}),y(a,"backgroundColor",e.palette.background.paper),y(a,"border","0px solid transparent"),y(a,"borderRadius","4px"),y(a,"padding",e.spacing(2,4,3)),a),AggreementInfoTitle:y({},e.breakpoints.down("sm"),{fontSize:"1.2em",marginBottom:e.spacing(.5)}),AggreementInfoDecription:y({marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:".75em",marginBottom:e.spacing(.5)}),AggreementInfoContact:y({fontSize:".85rem",marginBottom:e.spacing(3),fontStyle:"italic"},e.breakpoints.down("sm"),{fontSize:".60rem"}),AggreementCenter:y({display:"flex",alignItems:"center",justifyContent:"center"},e.breakpoints.down("sm"),{flexWrap:"wrap"}),aggreeButton:y({marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("sm"),{marginTop:e.spacing(1),width:"100%"})}}));function w(){var e=f(Object(a.useState)(Date.now()),2),t=e[0],r=e[1],s=o.a.useRef(t),n=function(e){s.current=e,r(e)},i=f(Object(a.useState)(!0),2),c=i[0],d=i[1],b=o.a.useRef(c),y=function(e){b.current=e,d(e)},w=f(Object(a.useState)(!0),2),v=w[0],k=w[1],E=o.a.useRef(v),j=function(e){E.current=e,k(e)},N=f(Object(a.useState)(g()),2),O=N[0],D=N[1],I=o.a.useRef(O),S=function(e){I.current=e,D(e)},T=f(Object(a.useState)(g()),2),M=T[0],R=T[1],C=o.a.useRef(M),A=function(e){C.current=e,R(e)},H=f(Object(a.useState)(g()),2),B=H[0],P=H[1],L=o.a.useRef(B),G=function(e){L.current=e,P(e)},Y=f(Object(a.useState)(g()),2),z=Y[0],q=Y[1],U=o.a.useRef(z),W=function(e){U.current=e,q(e)},J=f(Object(a.useState)(h()),2),X=J[0],F=J[1],$=o.a.useRef(X),K=function(e){$.current=e,F(e)},Q=f(Object(a.useState)(h()),2),V=Q[0],Z=Q[1],ee=o.a.useRef(V),te=function(e){ee.current=e,Z(e)},re=f(Object(a.useState)(h()),2),ae=re[0],oe=re[1],se=o.a.useRef(ae),ne=function(e){se.current=e,oe(e)},ie=f(Object(a.useState)(h()),2),ce=ie[0],de=ie[1],le=o.a.useRef(ce),me=function(e){le.current=e,de(e)},ue=f(Object(a.useState)("src/images/blank.png"),2),pe=ue[0],ge=ue[1],he=o.a.useRef(pe),fe=function(e){he.current=e,ge(e)},be=f(Object(a.useState)(x),2),ye=be[0],xe=be[1],_e=o.a.useRef(ye),we=function(e){_e.current=e,xe(e)},ve=f(Object(a.useState)("random-gestalt"),2),ke=ve[0],Ee=ve[1],je=o.a.useRef(ke),Ne=function(e){je.current=e,Ee(e)},Oe=f(Object(a.useState)(""),2),De=Oe[0],Ie=Oe[1],Se=o.a.useRef(De),Te=function(e){Se.current=e,Ie(e)},Me=f(Object(a.useState)([I,C]),2),Re=Me[0],Ce=Me[1],Ae=o.a.useRef(Re),He=function(e){Ae.current=e,Ce(e)},Be=f(Object(a.useState)([S,A]),2),Pe=Be[0],Le=Be[1],Ge=o.a.useRef(Pe),Ye=function(e){Ge.current=e,Le(e)},ze=_(),qe=f(o.a.useState(!1),2),Ue=qe[0],We=qe[1],Je=function(){We(!0)},Xe=function(){We(!1)},Fe=f(o.a.useState(!0),2),$e=Fe[0],Ke=Fe[1],Qe=function(){y(!0),j(!0),Ke(!1)},Ve=function(e){return e[Math.floor(Math.random()*e.length)]},Ze=function(e){var t=e.ref,r=e.set,a=e.useWith,o="with"===a?[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]:[0],s=function(e){if(0===e)return"target-none-";if(e>=1){var t=e.toString().length<2?"0".concat(e.toString()):e.toString();return"target".concat(Se.current,"-").concat(t,"-")}return null}(Ve(o)),n=Ve(t.current);r(function(e,t){return e.filter((function(e){return e!==t}))}(t.current,n));var i="".concat("https://capstone-images-daveism.s3.amazonaws.com/").concat(s).concat(n,".png");return fe(i),i},et=function(){switch(je.current){case"random-gestalt":return Ye([S,A]),He([I,C]),void Te("");case"random-not-gestalt":return Ye([G,W]),He([L,U]),void Te("-not-gestalt");case"random-clustered-gestalt":return Ye([K,te]),He([$,ee]),void Te("");case"random-clustered-not-gestalt":return Ye([ne,me]),He([se,le]),void Te("-not-gestalt");default:return Ye([S,A]),He([I,C]),void Te("")}},tt=function(){return Date.now()-s.current},rt=function e(){var t=Ve([0,1]),r=t?"with":"without",a=Re[t],o=Pe[t],s=Re[t?0:1];return 0===a.current.length&&0===s.current.length?(window.removeEventListener("keydown",ot),y(!0),j(!1),fe("src/images/blank.png"),function(){switch(je.current){case"random-gestalt":return Ye([G,W]),He([L,U]),we("src/images/target-not-gestalt-01.png"),Te("-not-gestalt"),Ne("random-not-gestalt"),void et();case"random-not-gestalt":return Ye([K,te]),He([$,ee]),we(x),Te(""),Ne("random-clustered-gestalt"),void et();case"random-clustered-gestalt":return Ye([ne,me]),He([se,le]),we("src/images/target-not-gestalt-01.png"),Te("-not-gestalt"),Ne("random-clustered-not-gestalt"),void et();case"random-clustered-not-gestalt":return Ye([S,A]),He([I,C]),we(x),Te(""),Ne("random-gestalt"),void et();default:Ye([G,W]),He([L,U]),we(x),Te("-not-gestalt"),Ne("random-not-gestalt"),et()}}(),We(!0),null):(Ze({ref:a,set:o,useWith:r}),0===a.current.length&&e(),null)},at=function(e){if(b.current)return null;switch(e){case"Y":var t=tt();return n(Date.now()),console.log("you answered yes in ".concat(t," ms")),rt(),e;case"N":var r=tt();return n(Date.now()),console.log("you answered no in ".concat(r," ms")),rt(),e;default:return null}},ot=function(e){return e.key?(at(e.key.toUpperCase()),null):(at("YES"===e.target.innerText.toUpperCase()?"Y":"N"),null)},st=o.a.createElement("div",{className:ze.nextTargetInfo},o.a.createElement("h2",{id:"simple-modal-title"},"Directions"),o.a.createElement("p",{id:"simple-modal-description",className:ze.nextTargetDescription},"You are looking for the following object on the map, the color of the object will NOT change."),o.a.createElement("div",{className:ze.nextTargetInfoCenter},o.a.createElement("img",{src:ye,alt:"test",className:ze.targetMapImg})),o.a.createElement("p",{id:"simple-modal-description",className:ze.nextTargetDescription},"It is important that you answer as quickly as you can. If the object does not exist on the map, you should answer no. If the object does exist on the map, you should answer yes. You can answer yes or no by using the ",o.a.createElement("strong",null,"'y'")," or ",o.a.createElement("strong",null,"' n'")," key on the keyboard or clicking the ",o.a.createElement("strong",null,"yes")," or ",o.a.createElement("strong",null,"no")," button."),o.a.createElement("p",{id:"simple-modal-description",className:ze.nextTargetDescriptionMobile},"This task will be more comfortable on a larger screen size. While it is not required, you may want to consider switching to a larger screen such as a tablet, a laptop, or a secondary monitor."),o.a.createElement("p",{id:"simple-modal-description",className:ze.nextTargetDescription},"To begin the close this box and then click  ",o.a.createElement("strong",null,"Start Experiment"),"."),o.a.createElement("div",{className:ze.nextTargetInfoEnd},o.a.createElement(u.a,{onClick:Xe,color:"primary",variant:"contained"},"Close"))),nt=o.a.createElement("div",{className:ze.AggreementInfo},o.a.createElement("h2",{id:"simple-modal-title",className:ze.AggreementInfoTitle},"Study Participation Aggreement"),o.a.createElement("p",{id:"simple-modal-description",className:ze.AggreementInfoDecription},"Thank you for taking part in this study. By using the following website, you are agreeing to participate in a study about how people use web-presented maps. We will collect information about your interactions with this site but not any personally identifiable information. The only people with access to the study data will the researchers. However, the data will be summarized, shared, and disseminated in talks, blogs, and possibly research journals. There is no cost to you to participate in this research study and you will not be compensated. There are no known risks in the following tasks."),o.a.createElement("p",{id:"simple-modal-description",className:ze.AggreementInfoDecription},"By agreeing to this, you have acknowledged that you have read the contents of this consent, are an adult over 18 years of age, and you are giving consent to participate in this study"),o.a.createElement("p",{id:"simple-modal-contact",className:ze.AggreementInfoContact},"The researchers conducting this study are Michael Neelon, PhD and David Michelson. For questions or more information concerning this research you may contact Dr. Neelon at 828-250-2359 or mneelon@unca.edu, or David Michelson at dmichels@unca.edu.  If you have any questions about your rights as a research subject, you may contact the UNC Asheville Institutional Review Board at 828.251.6313 or irb@unca.edu."),o.a.createElement("div",{className:ze.AggreementCenter},o.a.createElement(u.a,{onClick:function(){j(!1),Ke(!1),We(!0)},className:ze.aggreeButton,color:"primary",variant:"contained"},"I aggree"),o.a.createElement(u.a,{onClick:Qe,className:ze.aggreeButton,color:"default",variant:"contained"},"I do not aggree")));return Object(a.useEffect)((function(){return window.removeEventListener("keydown",ot)}),[]),o.a.createElement("div",{className:ze.root},o.a.createElement(l.a,{container:!0,spacing:1,height:"100%"},o.a.createElement(l.a,{container:!0,spacing:2,className:ze.searchMapsArea},o.a.createElement(l.a,{item:!0,xs:12,md:4,m:2,display:"flex",flex:1},o.a.createElement(l.a,{container:!0,spacing:0,className:ze.sideMapsHolder},o.a.createElement(l.a,{onClick:Je,item:!0,xs:12,display:"flex",flex:1,className:ze.targetTitle},o.a.createElement("h3",{className:ze.h3},"Look for this object")),o.a.createElement(l.a,{onClick:Je,item:!0,xs:12,display:"flex",flex:1,className:ze.targetMapGrid},o.a.createElement(m.a,{display:"flex",flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center",className:ze.targetMapHolder},o.a.createElement("img",{src:ye,alt:"test",className:ze.targetMapImg}))),o.a.createElement(u.a,{onClick:Je,variant:"contained",color:"default",className:ze.buttonsDirecton,height:"100%"},"Directions"),o.a.createElement(l.a,{item:!0,xs:12,display:"flex",flex:1,className:ze.statTitle},o.a.createElement("h3",{className:ze.h3},"Your stats")),o.a.createElement(l.a,{item:!0,xs:6,display:"flex",flex:1,className:ze.statGridLeft},o.a.createElement(m.a,{display:"flex",flexDirection:"row",m:0,flex:1,border:1,borderColor:"grey.500",className:ze.statBoxLeft})),o.a.createElement(l.a,{item:!0,xs:6,display:"flex",flex:1,className:ze.statGridRight},o.a.createElement(m.a,{display:"flex",flexDirection:"row",m:0,flex:1,border:1,borderColor:"grey.500",className:ze.statBoxRight})))),o.a.createElement(l.a,{item:!0,xs:12,md:8,display:"flex",flex:1,className:ze.searchMapsGrid},o.a.createElement(l.a,{container:!0,spacing:0,display:"flex"},o.a.createElement(l.a,{item:!0,xs:12,display:"flex",flex:1,className:ze.searchMapsTitle},o.a.createElement("h3",{className:ze.h3},"On this map")),o.a.createElement(l.a,{item:!0,xs:12,display:"flex",flex:1,className:ze.searchMapGrid},o.a.createElement(m.a,{display:"flex",flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center",className:ze.searchMapHolder},o.a.createElement("img",{src:pe,className:ze.searchMapImg})))))),o.a.createElement(l.a,{container:!0,spacing:2,className:ze.buttonsYesNoArea},o.a.createElement(l.a,{item:!0,xs:12,md:4,display:"flex",flex:1,className:ze.StartGrid},o.a.createElement(m.a,{display:"flex",flexDirection:"row",m:1,flex:1},o.a.createElement(u.a,{onClick:function(e){y(!1),j(!0),et(),window.addEventListener("keydown",ot),n(Date.now()),rt()},disabled:v,variant:"contained",color:"primary",className:ze.buttonsYesNo,height:"100%"},"Start Experiment"))),o.a.createElement(l.a,{item:!0,xs:6,md:4,display:"flex",flex:1,className:ze.yesNoGrid},o.a.createElement(m.a,{display:"flex",flexDirection:"row",m:1,flex:1,className:ze.buttonYesBox},o.a.createElement(u.a,{onClick:ot,disabled:c,variant:"contained",value:"Y",className:ze.buttonsYesNo,height:"100%"},"Yes"))),o.a.createElement(l.a,{item:!0,xs:6,md:4,display:"flex",flex:1,className:ze.yesNoGrid},o.a.createElement(m.a,{display:"flex",flexDirection:"row",m:1,flex:1,className:ze.buttonNoBox},o.a.createElement(u.a,{onClick:ot,disabled:c,variant:"contained",value:"N",className:ze.buttonsYesNo,height:"100%"},"No"))))),o.a.createElement(p.a,{open:Ue,onClose:Xe,className:ze.nextTargetModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},st),o.a.createElement(p.a,{open:$e,onClose:Qe,className:ze.aggreementModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},nt))}function v(){return o.a.createElement("div",null,o.a.createElement(w,null))}w.propTypes={ref:c.a.func,set:c.a.func,useWith:c.a.string},n.a.render(o.a.createElement(v,null),document.querySelector("#root"))}});