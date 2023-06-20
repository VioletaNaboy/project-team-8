import{r as Ge,m as Xe,s as se}from"./renderModal-8b914940.js";function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Qe}=Object.prototype,{getPrototypeOf:ie}=Object,$=(e=>t=>{const n=Qe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>$(t)===e),z=e=>t=>typeof t===e,{isArray:L}=Array,_=z("undefined");function Ye(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Re=O("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Re(e.buffer),t}const et=z("string"),w=z("function"),Ae=z("number"),J=e=>e!==null&&typeof e=="object",tt=e=>e===!0||e===!1,M=e=>{if($(e)!=="object")return!1;const t=ie(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nt=O("Date"),rt=O("File"),ot=O("Blob"),st=O("FileList"),it=e=>J(e)&&w(e.pipe),at=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=$(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},ct=O("URLSearchParams"),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const xe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ke=e=>!_(e)&&e!==xe;function te(){const{caseless:e}=ke(this)&&this||{},t={},n=(r,o)=>{const s=e&&Te(t,o)||o;M(t[s])&&M(r)?t[s]=te(t[s],r):M(r)?t[s]=te({},r):L(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&D(arguments[r],n);return t}const ut=(e,t,n,{allOwnKeys:r}={})=>(D(t,(o,s)=>{n&&w(o)?e[s]=Oe(o,n):e[s]=o},{allOwnKeys:r}),e),ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pt=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ie(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Ae(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ie(Uint8Array)),bt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Et=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},wt=O("HTMLFormElement"),gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),St=O("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},Ot=e=>{Be(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Rt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return L(e)?r(e):r(String(e).split(t)),n},At=()=>{},Tt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",pe="0123456789",Ne={DIGIT:pe,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+pe},xt=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function kt(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bt=e=>{const t=new Array(10),n=(r,o)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=L(r)?[]:{};return D(r,(i,l)=>{const d=n(i,o+1);!_(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},Nt=O("AsyncFunction"),Ct=e=>e&&(J(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:L,isArrayBuffer:Re,isBuffer:Ye,isFormData:at,isArrayBufferView:Ze,isString:et,isNumber:Ae,isBoolean:tt,isObject:J,isPlainObject:M,isUndefined:_,isDate:nt,isFile:rt,isBlob:ot,isRegExp:St,isFunction:w,isStream:it,isURLSearchParams:ct,isTypedArray:yt,isFileList:st,forEach:D,merge:te,extend:ut,trim:lt,stripBOM:ft,inherits:dt,toFlatObject:pt,kindOf:$,kindOfTest:O,endsWith:ht,toArray:mt,forEachEntry:bt,matchAll:Et,isHTMLForm:wt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Be,freezeMethods:Ot,toObjectSet:Rt,toCamelCase:gt,noop:At,toFiniteNumber:Tt,findKey:Te,global:xe,isContextDefined:ke,ALPHABET:Ne,generateString:xt,isSpecCompliantForm:kt,toJSONObject:Bt,isAsyncFn:Nt,isThenable:Ct};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ce=m.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}});Object.defineProperties(m,Le);Object.defineProperty(Ce,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(Ce);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Lt=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(o,s){return o=Pe(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Pt(e){return a.isArray(e)&&!e.some(ne)}const _t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,R){let g=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Pt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(g=a.toArray(f)))return h=Pe(h),g.forEach(function(j,Ke){!(a.isUndefined(j)||j===null)&&t.append(i===!0?he([h],Ke,s):i===null?h:h+"[]",c(j))}),!1}return ne(f)?!0:(t.append(he(R,h,s),c(f)),!1)}const p=[],E=Object.assign(_t,{defaultVisitor:u,convertValue:c,isVisitable:ne});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(g,k){(!(a.isUndefined(g)||g===null)&&o.call(t,g,a.isString(k)?k.trim():k,h,E))===!0&&y(g,h?h.concat(k):[k])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ae(e,t){this._pairs=[],e&&V(e,this,t)}const _e=ae.prototype;_e.append=function(t,n){this._pairs.push([t,n])};_e.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const r=n&&n.encode||Ft,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ae(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Dt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ye=Dt,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ut=typeof URLSearchParams<"u"?URLSearchParams:ae,jt=typeof FormData<"u"?FormData:null,Mt=typeof Blob<"u"?Blob:null,It=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ht=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Ut,FormData:jt,Blob:Mt},isStandardBrowserEnv:It,isStandardBrowserWebWorkerEnv:Ht,protocols:["http","https","file","blob","url","data"]};function qt(e,t){return V(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $t(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ue(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=$t(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(vt(r),o,n,0)}),n}return null}const zt={"Content-Type":void 0};function Jt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const W={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Jt(t)):t}],transformResponse:[function(t){const n=this.transitional||W.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){W.headers[t]={}});a.forEach(["post","put","patch"],function(t){W.headers[t]=a.merge(zt)});const ce=W,Vt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Vt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function Kt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Gt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Y(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Xt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Qt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,c){const u=P(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=I(l))}const i=(l,d)=>a.forEach(l,(c,u)=>s(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Gt(t)?i(Wt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Kt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Y(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=P(i),i){const l=a.findKey(r,i);l&&(!n||Y(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||Y(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=I(o),delete n[s];return}const l=t?Xt(s):String(s).trim();l!==s&&delete n[s],n[l]=I(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=P(i);r[l]||(Qt(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(K.prototype);a.freezeMethods(K);const A=K;function Z(e,t){const n=this||ce,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function je(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function Yt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Zt=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function en(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!en(t)?tn(e,t):t}const nn=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function on(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,E=0;for(;p!==o;)E+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(E*1e3/y):void 0}}function Ee(e,t){let n=0;const r=on(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const sn=typeof XMLHttpRequest<"u",an=sn&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const u=Me(e.baseURL,e.url);c.open(e.method.toUpperCase(),Fe(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Yt(function(g){n(g),d()},function(g){r(g),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||De;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||nn(u))&&e.xsrfCookieName&&Zt.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ee(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ee(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new U(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=rn(u);if(E&&S.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},H={http:Lt,xhr:an};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?H[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function we(e){return ee(e),e.headers=A.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),cn.getAdapter(e.adapter||ce.adapter)(e).then(function(r){return ee(e),r.data=Z.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return je(r)||(ee(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const ge=e=>e instanceof A?e.toJSON():e;function N(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(ge(c),ge(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||o,E=p(e[u],t[u],u);a.isUndefined(E)&&p!==l||(n[u]=E)}),n}const Ie="1.4.0",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Se={};le.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Ie+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Se[i]&&(Se[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function ln(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const re={assertOptions:ln,validators:le},T=re.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new ye,response:new ye}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:re.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=A.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,E;if(!d){const f=[we.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),E=f.length,u=Promise.resolve(n);p<E;)u=u.then(f[p++],f[p++]);return u}E=l.length;let y=n;for(p=0;p<E;){const f=l[p++],h=l[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{u=we.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=c.length;p<E;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=N(this.defaults,t);const n=Me(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(N(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const q=v;class ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new U(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ue(function(o){t=o}),cancel:t}}}const un=ue;function fn(e){return function(n){return e.apply(null,n)}}function dn(e){return a.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});const pn=oe;function He(e){const t=new q(e),n=Oe(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return He(N(e,o))},n}const b=He(ce);b.Axios=q;b.CanceledError=U;b.CancelToken=un;b.isCancel=je;b.VERSION=Ie;b.toFormData=V;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=fn;b.isAxiosError=dn;b.mergeConfig=N;b.AxiosHeaders=A;b.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=pn;b.default=b;const G=b,X="https://books-backend.p.goit.global/books";async function hn(){try{return await G.get(`${X}/category-list`)}catch(e){return e}}async function qe(){try{return await G.get(`${X}/top-books`)}catch(e){return e}}async function mn(e){try{return await G.get(`${X}/category?category=${e}`)}catch(t){return t}}async function ve(e){try{return await G.get(`${X}/${e}`)}catch(t){return t}}const yn=document.querySelector(".category__list");function bn(e){yn.innerHTML=e.map(t=>`

         <li class="category_list" name="${t.list_name}">

         ${t.list_name}
         </li>`).join("")}async function En(){try{const e=await hn();bn(e.data)}catch(e){console.log(e)}}En();const wn=document.querySelector(".category__list"),x=document.querySelector(".catalog"),gn=document.querySelector(".category_title"),$e=(e,t)=>{t.insertAdjacentHTML("beforeend",`${e.data.map(n=>`<div class="main-block">
  <div class="gallery-and-genre-type">
      <p class="genre-type">${n.list_name}</p>
      <div class="gallery">
     ${n.books.map(r=>` <div class="card" id=${r._id}><div class="wrapper"><img src="${r.book_image}" class="book-cover"><div class="overlay-box">
         <p class="overlay-text">
           Quick view
         </p>

         </div>
         </div>
      <div class="desc">
      <p class="book-card-title">${r.title}</p>
      <p class="book-card-author">${r.author}</p>
      
      </div></div>`).join("")}
      
  </div>
  <button class="see-more">SEE MORE</button>
</div>`).join("")}`)};qe().then(e=>{$e(e,x)});gn.addEventListener("click",async()=>{x.innerHTML="",x.insertAdjacentHTML("afterbegin",'<h1 class="catalog-header">Best Seller <span>Books</span></h1>');const e=await qe();$e(e,x)});const Sn=(e,t)=>{mn(e).then(n=>{t.insertAdjacentHTML("beforeend",`<div class="gallery-select">${n.data.map(r=>`<div class="card" id=${r._id}><div class="wrapper"><img src="${r.book_image}" class="book-cover"><div class="overlay-box">
          <p class="overlay-text">
            Quick view
          </p>
 
          </div>
          </div>
    <div class="desc">
    <p class="book-card-title">${r.title}</p>
    <p class="book-card-author">${r.author}</p>

    </div></div>`).join("")}</div>`)})};wn.addEventListener("click",e=>{if(e.target.nodeName==="UL")return;x.innerHTML="";let t=e.target.getAttribute("name"),n=t.split(" "),r=`<span>${n[n.length-1]}</span>`;x.insertAdjacentHTML("afterbegin",`<h1 class="catalog-header">${n.slice(0,n.length-1).join(" ")} ${r}</h1>`),Sn(t,x)});function On(e){return ve(e).then(t=>t.data).catch(t=>console.log(t))}function Rn(e){ve(e).then(t=>t.data).then(({book_image:t,title:n,author:r,description:o,buy_links:s})=>{Ge(e,t,n,r,o,s)}).catch(t=>console.log(t))}const F=document.querySelector(".pop-up-modal-btn");F.addEventListener("click",Tn);const ze="shopping-list",B=[],Je="current-book";function An(e){const t=B.map(n=>n._id);se(Je,e),F.textContent="Add to shopping list",t.includes(e)&&(F.textContent="remove from the shopping list")}async function Tn(){const e=Xe(Je),t=B.map(n=>n._id);if(t.includes(e))xn(e,t);else{const n=await On(e);B.push(n),se(ze,B),F.textContent="remove from the shopping list"}}function xn(e,t){const n=t.indexOf(e);B.splice(n,1),se(ze,B),F.textContent="Add to shopping list"}const C={galleryBooks:document.querySelector(".catalog"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),bookInfo:document.querySelector(".pop-up-book-info"),body:document.querySelector("body")};C.galleryBooks.addEventListener("click",kn);C.closeModalBtn.addEventListener("click",fe);C.modal.addEventListener("click",Nn);function kn(e){if(!e.target.closest(".card"))return;const t=e.target.closest(".card").id;Rn(t),An(t),Bn()}function Ve(){C.modal.classList.toggle("is-hidden"),C.body.classList.toggle("no-scroll")}function Bn(){Cn(),window.addEventListener("keydown",We),Ve()}function fe(){Ve(),window.removeEventListener("keydown",We)}function We({code:e}){e==="Escape"&&fe()}function Nn(e){e.target.classList.contains("pop-up-backdrop")&&fe()}function Cn(){C.bookInfo.innerHTML=""}
