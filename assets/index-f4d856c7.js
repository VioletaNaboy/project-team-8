import{r as it,s as Ce,m as Ee}from"./authorization-c490fce8.js";function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:at}=Object.prototype,{getPrototypeOf:le}=Object,z=(e=>t=>{const n=at.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>z(t)===e),J=e=>t=>typeof t===e,{isArray:P}=Array,F=J("undefined");function ct(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Be=R("ArrayBuffer");function lt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Be(e.buffer),t}const ut=J("string"),w=J("function"),Ne=J("number"),V=e=>e!==null&&typeof e=="object",dt=e=>e===!0||e===!1,v=e=>{if(z(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ft=R("Date"),pt=R("File"),ht=R("Blob"),mt=R("FileList"),yt=e=>V(e)&&w(e.pipe),Et=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=z(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},bt=R("URLSearchParams"),wt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Pe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const _e=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fe=e=>!F(e)&&e!==_e;function re(){const{caseless:e}=Fe(this)&&this||{},t={},n=(r,o)=>{const s=e&&Pe(t,o)||o;v(t[s])&&v(r)?t[s]=re(t[s],r):v(r)?t[s]=re({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&D(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(D(t,(o,s)=>{n&&w(o)?e[s]=ke(o,n):e[s]=o},{allOwnKeys:r}),e),St=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ot=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},At=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Tt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Ne(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),Lt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},kt=R("HTMLFormElement"),Bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Nt=R("RegExp"),De=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},Pt=e=>{De(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Ft=()=>{},Dt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",we="0123456789",Ue={DIGIT:we,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+we},Ut=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function jt(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vt=e=>{const t=new Array(10),n=(r,o)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return D(r,(i,l)=>{const f=n(i,o+1);!F(f)&&(s[l]=f)}),t[o]=void 0,s}}return r};return n(e,0)},Mt=R("AsyncFunction"),Ht=e=>e&&(V(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:P,isArrayBuffer:Be,isBuffer:ct,isFormData:Et,isArrayBufferView:lt,isString:ut,isNumber:Ne,isBoolean:dt,isObject:V,isPlainObject:v,isUndefined:F,isDate:ft,isFile:pt,isBlob:ht,isRegExp:Nt,isFunction:w,isStream:yt,isURLSearchParams:bt,isTypedArray:xt,isFileList:mt,forEach:D,merge:re,extend:gt,trim:wt,stripBOM:St,inherits:Rt,toFlatObject:Ot,kindOf:z,kindOfTest:R,endsWith:At,toArray:Tt,forEachEntry:Lt,matchAll:Ct,isHTMLForm:kt,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:De,freezeMethods:Pt,toObjectSet:_t,toCamelCase:Bt,noop:Ft,toFiniteNumber:Dt,findKey:Pe,global:_e,isContextDefined:Fe,ALPHABET:Ue,generateString:Ut,isSpecCompliantForm:jt,toJSONObject:vt,isAsyncFn:Mt,isThenable:Ht};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=m.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ve[e]={value:e}});Object.defineProperties(m,ve);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(je);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const qt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,n){return e?e.concat(t).map(function(o,s){return o=Me(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function It(e){return a.isArray(e)&&!e.some(oe)}const $t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,O){return!a.isUndefined(O[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,h,O){let g=d;if(d&&!O&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&It(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(g=a.toArray(d)))return h=Me(h),g.forEach(function(j,st){!(a.isUndefined(j)||j===null)&&t.append(i===!0?ge([h],st,s):i===null?h:h+"[]",c(j))}),!1}return oe(d)?!0:(t.append(ge(O,h,s),c(d)),!1)}const p=[],b=Object.assign($t,{defaultVisitor:u,convertValue:c,isVisitable:oe});function y(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(g,L){(!(a.isUndefined(g)||g===null)&&o.call(t,g,a.isString(L)?L.trim():L,h,b))===!0&&y(g,h?h.concat(L):[L])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&W(e,this,t)}const He=ue.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function zt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qe(e,t,n){if(!t)return e;const r=n&&n.encode||zt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Re=Jt,Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:ue,Wt=typeof FormData<"u"?FormData:null,Kt=typeof Blob<"u"?Blob:null,Gt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Xt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Wt,Blob:Kt},isStandardBrowserEnv:Gt,isStandardBrowserWebWorkerEnv:Xt,protocols:["http","https","file","blob","url","data"]};function Yt(e,t){return W(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Qt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function $e(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),f=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,f?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Zt(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Qt(r),o,n,0)}),n}return null}const en={"Content-Type":void 0};function tn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const K={transitional:Ie,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify($e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),tn(t)):t}],transformResponse:[function(t){const n=this.transitional||K.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){K.headers[t]={}});a.forEach(["post","put","patch"],function(t){K.headers[t]=a.merge(en)});const de=K,nn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rn=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&nn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function on(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const sn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function an(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class G{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,f,c){const u=_(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||f]=M(l))}const i=(l,f)=>a.forEach(l,(c,u)=>s(c,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!sn(t)?i(rn(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=_(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return on(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=_(i),i){const l=a.findKey(r,i);l&&(!n||ee(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||ee(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=M(o),delete n[s];return}const l=t?an(s):String(s).trim();l!==s&&delete n[s],n[l]=M(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=_(i);r[l]||(cn(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}G.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(G.prototype);a.freezeMethods(G);const A=G;function te(e,t){const n=this||de,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function ze(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function ln(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const un=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),a.isString(s)&&f.push("path="+s),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function fn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Je(e,t){return e&&!dn(t)?fn(e,t):t}const pn=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),u=r[s];i||(i=c),n[o]=f,r[o]=c;let p=s,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function Ae(e,t){let n=0;const r=mn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,f=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&c?(i-s)/f:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const yn=typeof XMLHttpRequest<"u",En=yn&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+d))}const u=Je(e.baseURL,e.url);c.open(e.method.toUpperCase(),qe(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};ln(function(g){n(g),f()},function(g){r(g),f()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ie;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||pn(u))&&e.xsrfCookieName&&un.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ae(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ae(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new U(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=hn(u);if(b&&S.protocols.indexOf(b)===-1){r(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},H={http:qt,xhr:En};a.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const bn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?H[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(H,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:H};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Te(e){return ne(e),e.headers=A.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),bn.getAdapter(e.adapter||de.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return ze(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const xe=e=>e instanceof A?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const f={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(xe(c),xe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||o,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(n[u]=b)}),n}const Ve="1.4.0",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};fe.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Ve+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function wn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],f=l===void 0||i(l,s,e);if(f!==!0)throw new m("option "+s+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const se={assertOptions:wn,validators:fe},T=se.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&se.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:se.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=A.concat(i,s);const l=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,b;if(!f){const d=[Te.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),b=d.length,u=Promise.resolve(n);p<b;)u=u.then(d[p++],d[p++]);return u}b=l.length;let y=n;for(p=0;p<b;){const d=l[p++],h=l[p++];try{y=d(y)}catch(O){h.call(this,O);break}}try{u=Te.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=C(this.defaults,t);const n=Je(t.baseURL,t.url);return qe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}I.prototype[t]=n(),I.prototype[t+"Form"]=n(!0)});const q=I;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new U(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(o){t=o}),cancel:t}}}const gn=pe;function Sn(e){return function(n){return e.apply(null,n)}}function Rn(e){return a.isObject(e)&&e.isAxiosError===!0}const ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ie).forEach(([e,t])=>{ie[t]=e});const On=ie;function We(e){const t=new q(e),n=ke(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return We(C(e,o))},n}const E=We(de);E.Axios=q;E.CanceledError=U;E.CancelToken=gn;E.isCancel=ze;E.VERSION=Ve;E.toFormData=W;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Sn;E.isAxiosError=Rn;E.mergeConfig=C;E.AxiosHeaders=A;E.formToJSON=e=>$e(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=On;E.default=E;const X=E,Y="https://books-backend.p.goit.global/books";async function An(){try{return await X.get(`${Y}/category-list`)}catch(e){return e}}async function Ke(){try{return await X.get(`${Y}/top-books`)}catch(e){return e}}async function Tn(e){try{return await X.get(`${Y}/category?category=${e}`)}catch(t){return t}}async function Ge(e){try{return await X.get(`${Y}/${e}`)}catch(t){return t}}const xn=document.querySelector(".category__list");function Ln(e){xn.innerHTML=e.map(t=>`

         <li class="category_list" name="${t.list_name}">

         ${t.list_name}
         </li>`).join("")}async function Cn(){try{const e=await An();Ln(e.data)}catch(e){console.log(e)}}Cn();const Xe=document.querySelector(".loader"),he=()=>{Xe.classList.remove("hiddenLoader")},Ye=()=>{Xe.classList.add("hiddenLoader")},kn=document.querySelector(".category__list"),x=document.querySelector(".catalog"),Bn=document.querySelector(".category_title"),Qe=(e,t)=>{Ye(),t.insertAdjacentHTML("beforeend",`${e.data.map(n=>`<div class="main-block">
  <div class="gallery-and-genre-type">
      <p class="genre-type">${n.list_name}</p>
      <div class="gallery" id="${n.list_name.split(" ").join("-")}">
     ${n.books.map(r=>` <div class="card" id=${r._id}><div class="wrapper"><img src="${r.book_image}" class="book-cover" loading="lazy" alt="${r.title}"><div class="overlay-box">
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
</div>`).join("")}`)};he();Ke().then(e=>{Qe(e,x);const t=document.querySelectorAll(".see-more"),n=document.querySelector(".gallery").clientHeight;t.forEach((r,o)=>{r.addEventListener("click",async()=>{const s=document.getElementById(e.data[o].list_name.split(" ").join("-"));r.textContent==="SEE MORE"?(s.style.height=n*2+"px",s.style.overflowY="scroll",s.innerHTML="",r.textContent="SEE LESS",ae(e.data[o].list_name,s)):(s.innerHTML="",ae(e.data[o].list_name,s),s.style.height=n+"px",s.style.overflowY="hidden",r.textContent="SEE MORE")})})});Bn.addEventListener("click",async()=>{x.innerHTML="",he(),x.insertAdjacentHTML("afterbegin",'<h1 class="catalog-header">Best Seller <span>Books</span></h1>');const e=await Ke();Qe(e,x)});const ae=(e,t)=>{Tn(e).then(n=>{Ye(),t.insertAdjacentHTML("beforeend",`<div class="gallery-select">${n.data.map(r=>`<div class="card" id=${r._id}><div class="wrapper"><img src="${r.book_image}" class="book-cover" loading="lazy" alt="${r.title}"><div class="overlay-box">
          <p class="overlay-text">
            Quick view
          </p>
 
          </div>
          </div>
    <div class="desc">
    <p class="book-card-title">${r.title}</p>
    <p class="book-card-author">${r.author}</p>

    </div></div>`).join("")}</div>`)})};kn.addEventListener("click",e=>{if(e.target.nodeName==="UL")return;x.innerHTML="",he();let t=e.target.getAttribute("name"),n=t.split(" "),r=`<span>${n[n.length-1]}</span>`;x.insertAdjacentHTML("afterbegin",`<h1 class="catalog-header">${n.slice(0,n.length-1).join(" ")} ${r}</h1>`),ae(t,x)});function Nn(e){return Ge(e).then(t=>t.data).catch(t=>console.log(t))}function Pn(e){Ge(e).then(t=>t.data).then(({book_image:t,title:n,author:r,description:o,buy_links:s})=>{it(e,t,n,r,o,s)}).catch(t=>console.log(t))}const me=document.querySelector(".pop-up-modal-btn"),Ze=document.querySelector(".pop-up-remove-txt");me.addEventListener("click",Fn);const $="shopping-list";let k=[],Q=[];function _n(){tt(),et(),Q.includes(N)&&nt()}async function Fn(){if(et(),Q.includes(N))Dn();else{const e=await Nn(N);k.push(e),Ce($,k),nt()}}function Dn(){const e=Q.indexOf(N);k.splice(e,1),Ce($,k),tt()}function et(){Ee($)&&(k=Ee($)),Q=k.map(e=>e._id)}function tt(){me.textContent="Add to shopping list",Ze.textContent=""}function nt(){me.textContent="remove from the shopping list",Ze.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."}const B={galleryBooks:document.querySelector(".catalog"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),bookInfo:document.querySelector(".pop-up-book-info"),body:document.querySelector("body")};B.galleryBooks.addEventListener("click",Un);B.closeModalBtn.addEventListener("click",ye);B.modal.addEventListener("click",vn);let N="";function Un(e){e.target.closest(".card")&&(N=e.target.closest(".card").id,Pn(N),_n(),jn())}function rt(){B.modal.classList.toggle("is-hidden"),B.body.classList.toggle("no-scroll")}function jn(){Mn(),window.addEventListener("keydown",ot),rt()}function ye(){rt(),window.removeEventListener("keydown",ot)}function ot({code:e}){e==="Escape"&&ye()}function vn(e){e.target.classList.contains("pop-up-backdrop")&&ye()}function Mn(){B.bookInfo.innerHTML=""}const ce=document.querySelector("a.arrow");window.addEventListener("scroll",()=>{document.body.scrollTop>50||document.documentElement.scrollTop>50?ce.style.visibility="visible":ce.style.visibility="hidden"});ce.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});