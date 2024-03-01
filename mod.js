// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return t.exec(e).slice(1)};function o(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o.charAt(0))}return(t?"/":"")+(e=r(h(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function i(e){var t=u(e),n="/"===b(e,-1);return(e=r(h(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function u(e){return"/"===e.charAt(0)}function s(){return i(h(Array.prototype.slice.call(arguments,0),(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function a(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=o(e).substr(1),r=o(r).substr(1);for(var n=t(e.split("/")),i=t(r.split("/")),u=Math.min(n.length,i.length),s=u,a=0;a<u;a++)if(n[a]!==i[a]){s=a;break}var l=[];for(a=s;a<n.length;a++)l.push("..");return(l=l.concat(i.slice(s))).join("/")}function l(e){var r=n(e),t=r[0],o=r[1];return t||o?(o&&(o=o.substr(0,o.length-1)),t+o):"."}function f(e,r){var t=n(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function c(e){return n(e)[3]}var p={extname:c,basename:f,dirname:l,sep:"/",delimiter:":",relative:a,join:s,isAbsolute:u,normalize:i,resolve:o};function h(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var b="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},v=(0,e(Object.freeze({__proto__:null,basename:f,default:p,delimiter:":",dirname:l,extname:c,isAbsolute:u,join:s,normalize:i,relative:a,resolve:o,sep:"/"})).resolve)("/home/runner/work/random-base-shared/random-base-shared/lib","..","include");export{v as default};
//# sourceMappingURL=mod.js.map
