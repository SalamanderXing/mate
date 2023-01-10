(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zr={},Wf={get exports(){return zr},set exports(e){zr=e}},So={},y={},Xf={get exports(){return y},set exports(e){y=e}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),Qf=Symbol.for("react.portal"),Gf=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),em=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),rm=Symbol.for("react.memo"),am=Symbol.for("react.lazy"),iu=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var $c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Hc={};function or(e,n,t){this.props=e,this.context=n,this.refs=Hc,this.updater=t||$c}or.prototype.isReactComponent={};or.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=or.prototype;function Tl(e,n,t){this.props=e,this.context=n,this.refs=Hc,this.updater=t||$c}var _l=Tl.prototype=new Kc;_l.constructor=Tl;Bc(_l,or.prototype);_l.isPureReactComponent=!0;var lu=Array.isArray,Vc=Object.prototype.hasOwnProperty,Nl={current:null},Uc={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,n,t){var r,a={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Vc.call(n,r)&&!Uc.hasOwnProperty(r)&&(a[r]=n[r]);var l=arguments.length-2;if(l===1)a.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:oa,type:e,key:o,ref:i,props:a,_owner:Nl.current}}function im(e,n){return{$$typeof:oa,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===oa}function lm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var su=/\/+/g;function Qo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?lm(""+e.key):n.toString(36)}function Da(e,n,t,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case oa:case Qf:i=!0}}if(i)return i=e,a=a(i),e=r===""?"."+Qo(i,0):r,lu(a)?(t="",e!=null&&(t=e.replace(su,"$&/")+"/"),Da(a,n,t,"",function(u){return u})):a!=null&&(Ml(a)&&(a=im(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(su,"$&/")+"/")+e)),n.push(a)),1;if(i=0,r=r===""?".":r+":",lu(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Qo(o,l);i+=Da(o,n,t,s,a)}else if(s=om(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Qo(o,l++),i+=Da(o,n,t,s,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function va(e,n,t){if(e==null)return e;var r=[],a=0;return Da(e,r,"","",function(o){return n.call(t,o,a++)}),r}function sm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},za={transition:null},um={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:za,ReactCurrentOwner:Nl};z.Children={map:va,forEach:function(e,n,t){va(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return va(e,function(){n++}),n},toArray:function(e){return va(e,function(n){return n})||[]},only:function(e){if(!Ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=or;z.Fragment=Gf;z.Profiler=Zf;z.PureComponent=Tl;z.StrictMode=qf;z.Suspense=tm;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=um;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bc({},e.props),a=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Nl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Vc.call(n,s)&&!Uc.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:oa,type:e.type,key:a,ref:o,props:r,_owner:i}};z.createContext=function(e){return e={$$typeof:em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jf,_context:e},e.Consumer=e};z.createElement=Yc;z.createFactory=function(e){var n=Yc.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:nm,render:e}};z.isValidElement=Ml;z.lazy=function(e){return{$$typeof:am,_payload:{_status:-1,_result:e},_init:sm}};z.memo=function(e,n){return{$$typeof:rm,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=za.transition;za.transition={};try{e()}finally{za.transition=n}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,n){return be.current.useCallback(e,n)};z.useContext=function(e){return be.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return be.current.useDeferredValue(e)};z.useEffect=function(e,n){return be.current.useEffect(e,n)};z.useId=function(){return be.current.useId()};z.useImperativeHandle=function(e,n,t){return be.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return be.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return be.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return be.current.useMemo(e,n)};z.useReducer=function(e,n,t){return be.current.useReducer(e,n,t)};z.useRef=function(e){return be.current.useRef(e)};z.useState=function(e){return be.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return be.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return be.current.useTransition()};z.version="18.2.0";(function(e){e.exports=z})(Xf);const en=Ac(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=y,dm=Symbol.for("react.element"),pm=Symbol.for("react.fragment"),fm=Object.prototype.hasOwnProperty,mm=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function Wc(e,n,t){var r,a={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)fm.call(n,r)&&!vm.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:dm,type:e,key:o,ref:i,props:a,_owner:mm.current}}So.Fragment=pm;So.jsx=Wc;So.jsxs=Wc;(function(e){e.exports=So})(Wf);const Wt=zr.Fragment,I=zr.jsx,Rn=zr.jsxs;var Pi={},Qa={},hm={get exports(){return Qa},set exports(e){Qa=e}},Fe={},Ii={},gm={get exports(){return Ii},set exports(e){Ii=e}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,N){var _=P.length;P.push(N);e:for(;0<_;){var A=_-1>>>1,B=P[A];if(0<a(B,N))P[A]=N,P[_]=B,_=A;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var N=P[0],_=P.pop();if(_!==N){P[0]=_;e:for(var A=0,B=P.length,_e=B>>>1;A<_e;){var ie=2*(A+1)-1,Y=P[ie],te=ie+1,Ne=P[te];if(0>a(Y,_))te<B&&0>a(Ne,Y)?(P[A]=Ne,P[te]=_,A=te):(P[A]=Y,P[ie]=_,A=ie);else if(te<B&&0>a(Ne,_))P[A]=Ne,P[te]=_,A=te;else break e}}return N}function a(P,N){var _=P.sortIndex-N.sortIndex;return _!==0?_:P.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],u=[],c=1,d=null,v=3,h=!1,g=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var N=t(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=P)r(u),N.sortIndex=N.expirationTime,n(s,N);else break;N=t(u)}}function w(P){if(x=!1,m(P),!g)if(t(s)!==null)g=!0,Q(k);else{var N=t(u);N!==null&&ee(w,N.startTime-P)}}function k(P,N){g=!1,x&&(x=!1,f(E),E=-1),h=!0;var _=v;try{for(m(N),d=t(s);d!==null&&(!(d.expirationTime>N)||P&&!M());){var A=d.callback;if(typeof A=="function"){d.callback=null,v=d.priorityLevel;var B=A(d.expirationTime<=N);N=e.unstable_now(),typeof B=="function"?d.callback=B:d===t(s)&&r(s),m(N)}else r(s);d=t(s)}if(d!==null)var _e=!0;else{var ie=t(u);ie!==null&&ee(w,ie.startTime-N),_e=!1}return _e}finally{d=null,v=_,h=!1}}var C=!1,S=null,E=-1,R=5,T=-1;function M(){return!(e.unstable_now()-T<R)}function L(){if(S!==null){var P=e.unstable_now();T=P;var N=!0;try{N=S(!0,P)}finally{N?D():(C=!1,S=null)}}else C=!1}var D;if(typeof p=="function")D=function(){p(L)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,F=H.port2;H.port1.onmessage=L,D=function(){F.postMessage(null)}}else D=function(){b(L,0)};function Q(P){S=P,C||(C=!0,D())}function ee(P,N){E=b(function(){P(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,Q(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var N=3;break;default:N=v}var _=v;v=N;try{return P()}finally{v=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,N){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var _=v;v=P;try{return N()}finally{v=_}},e.unstable_scheduleCallback=function(P,N,_){var A=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?A+_:A):_=A,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=_+B,P={id:c++,callback:N,priorityLevel:P,startTime:_,expirationTime:B,sortIndex:-1},_>A?(P.sortIndex=_,n(u,P),t(s)===null&&P===t(u)&&(x?(f(E),E=-1):x=!0,ee(w,_-A))):(P.sortIndex=B,n(s,P),g||h||(g=!0,Q(k))),P},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(P){var N=v;return function(){var _=v;v=N;try{return P.apply(this,arguments)}finally{v=_}}}})(Xc);(function(e){e.exports=Xc})(gm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=y,ze=Ii;function j(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gc=new Set,Fr={};function wt(e,n){Xt(e,n),Xt(e+"Capture",n)}function Xt(e,n){for(Fr[e]=n,e=0;e<n.length;e++)Gc.add(n[e])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},cu={};function wm(e){return Oi.call(cu,e)?!0:Oi.call(uu,e)?!1:ym.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function xm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function km(e,n,t,r){if(n===null||typeof n>"u"||xm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ce(e,n,t,r,a,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];me[n]=new Ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rl=/[\-:]([a-z])/g;function Ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Rl,Ll);me[n]=new Ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Rl,Ll);me[n]=new Ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Rl,Ll);me[n]=new Ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,n,t,r){var a=me.hasOwnProperty(n)?me[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(km(n,t,a,r)&&(t=null),r||a===null?wm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var jn=Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),It=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),Ti=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),Fl=Symbol.for("react.forward_ref"),_i=Symbol.for("react.suspense"),Ni=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),Jc=Symbol.for("react.offscreen"),du=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Go;function xr(e){if(Go===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Go=n&&n[1]||""}return`
`+Go+e}var qo=!1;function Zo(e,n){if(!e||qo)return"";qo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var s=`
`+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{qo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xr(e):""}function bm(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case It:return"Portal";case Ti:return"Profiler";case zl:return"StrictMode";case _i:return"Suspense";case Ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zc:return(e.displayName||"Context")+".Consumer";case qc:return(e._context.displayName||"Context")+".Provider";case Fl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Al:return n=e.displayName||null,n!==null?n:Mi(e.type)||"Memo";case On:n=e._payload,e=e._init;try{return Mi(e(n))}catch{}}return null}function Cm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(n);case 8:return n===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ed(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Sm(e){var n=ed(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ga(e){e._valueTracker||(e._valueTracker=Sm(e))}function nd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ed(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ri(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function pu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Yn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function td(e,n){n=n.checked,n!=null&&Dl(e,"checked",n,!1)}function Li(e,n){td(e,n);var t=Yn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Di(e,n.type,t):n.hasOwnProperty("defaultValue")&&Di(e,n.type,Yn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function fu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Di(e,n,t){(n!=="number"||Ga(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var kr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Yn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function zi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(j(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(j(92));if(kr(t)){if(1<t.length)throw Error(j(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Yn(t)}}function rd(e,n){var t=Yn(n.value),r=Yn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function vu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ya,od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ar(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){Em.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Er[n]=Er[e]})});function id(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Er.hasOwnProperty(e)&&Er[e]?(""+n).trim():n+"px"}function ld(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=id(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var jm=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,n){if(n){if(jm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(j(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(j(61))}if(n.style!=null&&typeof n.style!="object")throw Error(j(62))}}function $i(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,Ht=null,Kt=null;function hu(e){if(e=sa(e)){if(typeof Hi!="function")throw Error(j(280));var n=e.stateNode;n&&(n=Oo(n),Hi(e.stateNode,e.type,n))}}function sd(e){Ht?Kt?Kt.push(e):Kt=[e]:Ht=e}function ud(){if(Ht){var e=Ht,n=Kt;if(Kt=Ht=null,hu(e),n)for(e=0;e<n.length;e++)hu(n[e])}}function cd(e,n){return e(n)}function dd(){}var Jo=!1;function pd(e,n,t){if(Jo)return e(n,t);Jo=!0;try{return cd(e,n,t)}finally{Jo=!1,(Ht!==null||Kt!==null)&&(dd(),ud())}}function $r(e,n){var t=e.stateNode;if(t===null)return null;var r=Oo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(j(231,n,typeof t));return t}var Ki=!1;if(kn)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Ki=!1}function Pm(e,n,t,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var jr=!1,qa=null,Za=!1,Vi=null,Im={onError:function(e){jr=!0,qa=e}};function Om(e,n,t,r,a,o,i,l,s){jr=!1,qa=null,Pm.apply(Im,arguments)}function Tm(e,n,t,r,a,o,i,l,s){if(Om.apply(this,arguments),jr){if(jr){var u=qa;jr=!1,qa=null}else throw Error(j(198));Za||(Za=!0,Vi=u)}}function xt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function fd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function gu(e){if(xt(e)!==e)throw Error(j(188))}function _m(e){var n=e.alternate;if(!n){if(n=xt(e),n===null)throw Error(j(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return gu(a),e;if(o===r)return gu(a),n;o=o.sibling}throw Error(j(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,l=a.child;l;){if(l===t){i=!0,t=a,r=o;break}if(l===r){i=!0,r=a,t=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===t){i=!0,t=o,r=a;break}if(l===r){i=!0,r=o,t=a;break}l=l.sibling}if(!i)throw Error(j(189))}}if(t.alternate!==r)throw Error(j(190))}if(t.tag!==3)throw Error(j(188));return t.stateNode.current===t?e:n}function md(e){return e=_m(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=vd(e);if(n!==null)return n;e=e.sibling}return null}var hd=ze.unstable_scheduleCallback,yu=ze.unstable_cancelCallback,Nm=ze.unstable_shouldYield,Mm=ze.unstable_requestPaint,re=ze.unstable_now,Rm=ze.unstable_getCurrentPriorityLevel,Bl=ze.unstable_ImmediatePriority,gd=ze.unstable_UserBlockingPriority,Ja=ze.unstable_NormalPriority,Lm=ze.unstable_LowPriority,yd=ze.unstable_IdlePriority,Eo=null,sn=null;function Dm(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:Am,zm=Math.log,Fm=Math.LN2;function Am(e){return e>>>=0,e===0?32:31-(zm(e)/Fm|0)|0}var wa=64,xa=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~a;l!==0?r=br(l):(o&=i,o!==0&&(r=br(o)))}else i=t&~a,i!==0?r=br(i):o!==0&&(r=br(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-nn(n),a=1<<t,r|=e[t],n&=~a;return r}function $m(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-nn(o),l=1<<i,s=a[i];s===-1?(!(l&t)||l&r)&&(a[i]=$m(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wd(){var e=wa;return wa<<=1,!(wa&4194240)&&(wa=64),e}function ei(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ia(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-nn(n),e[n]=t}function Hm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-nn(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}function Hl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-nn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var K=0;function xd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kd,Kl,bd,Cd,Sd,Yi=!1,ka=[],Fn=null,An=null,$n=null,Br=new Map,Hr=new Map,Nn=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,n){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Br.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(n.pointerId)}}function dr(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=sa(n),n!==null&&Kl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Vm(e,n,t,r,a){switch(n){case"focusin":return Fn=dr(Fn,e,n,t,r,a),!0;case"dragenter":return An=dr(An,e,n,t,r,a),!0;case"mouseover":return $n=dr($n,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return Br.set(o,dr(Br.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Hr.set(o,dr(Hr.get(o)||null,e,n,t,r,a)),!0}return!1}function Ed(e){var n=ot(e.target);if(n!==null){var t=xt(n);if(t!==null){if(n=t.tag,n===13){if(n=fd(t),n!==null){e.blockedOn=n,Sd(e.priority,function(){bd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Wi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Bi=r,t.target.dispatchEvent(r),Bi=null}else return n=sa(t),n!==null&&Kl(n),e.blockedOn=t,!1;n.shift()}return!0}function xu(e,n,t){Fa(e)&&t.delete(n)}function Um(){Yi=!1,Fn!==null&&Fa(Fn)&&(Fn=null),An!==null&&Fa(An)&&(An=null),$n!==null&&Fa($n)&&($n=null),Br.forEach(xu),Hr.forEach(xu)}function pr(e,n){e.blockedOn===n&&(e.blockedOn=null,Yi||(Yi=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Um)))}function Kr(e){function n(a){return pr(a,e)}if(0<ka.length){pr(ka[0],e);for(var t=1;t<ka.length;t++){var r=ka[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&pr(Fn,e),An!==null&&pr(An,e),$n!==null&&pr($n,e),Br.forEach(n),Hr.forEach(n),t=0;t<Nn.length;t++)r=Nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(t=Nn[0],t.blockedOn===null);)Ed(t),t.blockedOn===null&&Nn.shift()}var Vt=jn.ReactCurrentBatchConfig,no=!0;function Ym(e,n,t,r){var a=K,o=Vt.transition;Vt.transition=null;try{K=1,Vl(e,n,t,r)}finally{K=a,Vt.transition=o}}function Wm(e,n,t,r){var a=K,o=Vt.transition;Vt.transition=null;try{K=4,Vl(e,n,t,r)}finally{K=a,Vt.transition=o}}function Vl(e,n,t,r){if(no){var a=Wi(e,n,t,r);if(a===null)ci(e,n,r,to,t),wu(e,r);else if(Vm(a,e,n,t,r))r.stopPropagation();else if(wu(e,r),n&4&&-1<Km.indexOf(e)){for(;a!==null;){var o=sa(a);if(o!==null&&kd(o),o=Wi(e,n,t,r),o===null&&ci(e,n,r,to,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else ci(e,n,r,null,t)}}var to=null;function Wi(e,n,t,r){if(to=null,e=$l(r),e=ot(e),e!==null)if(n=xt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=fd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return to=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case Bl:return 1;case gd:return 4;case Ja:case Lm:return 16;case yd:return 536870912;default:return 16}default:return 16}}var Ln=null,Ul=null,Aa=null;function Pd(){if(Aa)return Aa;var e,n=Ul,t=n.length,r,a="value"in Ln?Ln.value:Ln.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===a[o-r];r++);return Aa=a.slice(e,1<r?1-r:void 0)}function $a(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function ku(){return!1}function Ae(e){function n(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ba:ku,this.isPropagationStopped=ku,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Ae(ir),la=J({},ir,{view:0,detail:0}),Xm=Ae(la),ni,ti,fr,jo=J({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(ni=e.screenX-fr.screenX,ti=e.screenY-fr.screenY):ti=ni=0,fr=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ti}}),bu=Ae(jo),Qm=J({},jo,{dataTransfer:0}),Gm=Ae(Qm),qm=J({},la,{relatedTarget:0}),ri=Ae(qm),Zm=J({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=Ae(Zm),ev=J({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nv=Ae(ev),tv=J({},ir,{data:0}),Cu=Ae(tv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ov[e])?!!n[e]:!1}function Wl(){return iv}var lv=J({},la,{key:function(e){if(e.key){var n=rv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(e){return e.type==="keypress"?$a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sv=Ae(lv),uv=J({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Ae(uv),cv=J({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),dv=Ae(cv),pv=J({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Ae(pv),mv=J({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=Ae(mv),hv=[9,13,27,32],Xl=kn&&"CompositionEvent"in window,Pr=null;kn&&"documentMode"in document&&(Pr=document.documentMode);var gv=kn&&"TextEvent"in window&&!Pr,Id=kn&&(!Xl||Pr&&8<Pr&&11>=Pr),Eu=String.fromCharCode(32),ju=!1;function Od(e,n){switch(e){case"keyup":return hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function yv(e,n){switch(e){case"compositionend":return Td(n);case"keypress":return n.which!==32?null:(ju=!0,Eu);case"textInput":return e=n.data,e===Eu&&ju?null:e;default:return null}}function wv(e,n){if(Tt)return e==="compositionend"||!Xl&&Od(e,n)?(e=Pd(),Aa=Ul=Ln=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Id&&n.locale!=="ko"?null:n.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xv[e.type]:n==="textarea"}function _d(e,n,t,r){sd(r),n=ro(n,"onChange"),0<n.length&&(t=new Yl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ir=null,Vr=null;function kv(e){Hd(e,0)}function Po(e){var n=Mt(e);if(nd(n))return e}function bv(e,n){if(e==="change")return n}var Nd=!1;if(kn){var ai;if(kn){var oi="oninput"in document;if(!oi){var Iu=document.createElement("div");Iu.setAttribute("oninput","return;"),oi=typeof Iu.oninput=="function"}ai=oi}else ai=!1;Nd=ai&&(!document.documentMode||9<document.documentMode)}function Ou(){Ir&&(Ir.detachEvent("onpropertychange",Md),Vr=Ir=null)}function Md(e){if(e.propertyName==="value"&&Po(Vr)){var n=[];_d(n,Vr,e,$l(e)),pd(kv,n)}}function Cv(e,n,t){e==="focusin"?(Ou(),Ir=n,Vr=t,Ir.attachEvent("onpropertychange",Md)):e==="focusout"&&Ou()}function Sv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Po(Vr)}function Ev(e,n){if(e==="click")return Po(n)}function jv(e,n){if(e==="input"||e==="change")return Po(n)}function Pv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var rn=typeof Object.is=="function"?Object.is:Pv;function Ur(e,n){if(rn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Oi.call(n,a)||!rn(e[a],n[a]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _u(e,n){var t=Tu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tu(t)}}function Rd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ld(){for(var e=window,n=Ga();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ga(e.document)}return n}function Ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Iv(e){var n=Ld(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Rd(t.ownerDocument.documentElement,t)){if(r!==null&&Ql(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=_u(t,o);var i=_u(t,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ov=kn&&"documentMode"in document&&11>=document.documentMode,_t=null,Xi=null,Or=null,Qi=!1;function Nu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qi||_t==null||_t!==Ga(r)||(r=_t,"selectionStart"in r&&Ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Ur(Or,r)||(Or=r,r=ro(Xi,"onSelect"),0<r.length&&(n=new Yl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=_t)))}function Ca(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Nt={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},ii={},Dd={};kn&&(Dd=document.createElement("div").style,"AnimationEvent"in window||(delete Nt.animationend.animation,delete Nt.animationiteration.animation,delete Nt.animationstart.animation),"TransitionEvent"in window||delete Nt.transitionend.transition);function Io(e){if(ii[e])return ii[e];if(!Nt[e])return e;var n=Nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Dd)return ii[e]=n[t];return e}var zd=Io("animationend"),Fd=Io("animationiteration"),Ad=Io("animationstart"),$d=Io("transitionend"),Bd=new Map,Mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,n){Bd.set(e,n),wt(n,[e])}for(var li=0;li<Mu.length;li++){var si=Mu[li],Tv=si.toLowerCase(),_v=si[0].toUpperCase()+si.slice(1);Qn(Tv,"on"+_v)}Qn(zd,"onAnimationEnd");Qn(Fd,"onAnimationIteration");Qn(Ad,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn($d,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Ru(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Tm(r,n,void 0,e),e.currentTarget=null}function Hd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Ru(a,l,u),o=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Ru(a,l,u),o=s}}}if(Za)throw e=Vi,Za=!1,Vi=null,e}function W(e,n){var t=n[el];t===void 0&&(t=n[el]=new Set);var r=e+"__bubble";t.has(r)||(Kd(n,e,2,!1),t.add(r))}function ui(e,n,t){var r=0;n&&(r|=4),Kd(t,e,r,n)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[Sa]){e[Sa]=!0,Gc.forEach(function(t){t!=="selectionchange"&&(Nv.has(t)||ui(t,!1,e),ui(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Sa]||(n[Sa]=!0,ui("selectionchange",!1,n))}}function Kd(e,n,t,r){switch(jd(n)){case 1:var a=Ym;break;case 4:a=Wm;break;default:a=Vl}t=a.bind(null,n,t,e),a=void 0,!Ki||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function ci(e,n,t,r,a){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;i=i.return}for(;l!==null;){if(i=ot(l),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}l=l.parentNode}}r=r.return}pd(function(){var u=o,c=$l(t),d=[];e:{var v=Bd.get(e);if(v!==void 0){var h=Yl,g=e;switch(e){case"keypress":if($a(t)===0)break e;case"keydown":case"keyup":h=sv;break;case"focusin":g="focus",h=ri;break;case"focusout":g="blur",h=ri;break;case"beforeblur":case"afterblur":h=ri;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=dv;break;case zd:case Fd:case Ad:h=Jm;break;case $d:h=fv;break;case"scroll":h=Xm;break;case"wheel":h=vv;break;case"copy":case"cut":case"paste":h=nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Su}var x=(n&4)!==0,b=!x&&e==="scroll",f=x?v!==null?v+"Capture":null:v;x=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=$r(p,f),w!=null&&x.push(Wr(p,w,m)))),b)break;p=p.return}0<x.length&&(v=new h(v,g,null,t,c),d.push({event:v,listeners:x}))}}if(!(n&7)){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&t!==Bi&&(g=t.relatedTarget||t.fromElement)&&(ot(g)||g[bn]))break e;if((h||v)&&(v=c.window===c?c:(v=c.ownerDocument)?v.defaultView||v.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=u,g=g?ot(g):null,g!==null&&(b=xt(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(x=bu,w="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Su,w="onPointerLeave",f="onPointerEnter",p="pointer"),b=h==null?v:Mt(h),m=g==null?v:Mt(g),v=new x(w,p+"leave",h,t,c),v.target=b,v.relatedTarget=m,w=null,ot(c)===u&&(x=new x(f,p+"enter",g,t,c),x.target=m,x.relatedTarget=b,w=x),b=w,h&&g)n:{for(x=h,f=g,p=0,m=x;m;m=Ct(m))p++;for(m=0,w=f;w;w=Ct(w))m++;for(;0<p-m;)x=Ct(x),p--;for(;0<m-p;)f=Ct(f),m--;for(;p--;){if(x===f||f!==null&&x===f.alternate)break n;x=Ct(x),f=Ct(f)}x=null}else x=null;h!==null&&Lu(d,v,h,x,!1),g!==null&&b!==null&&Lu(d,b,g,x,!0)}}e:{if(v=u?Mt(u):window,h=v.nodeName&&v.nodeName.toLowerCase(),h==="select"||h==="input"&&v.type==="file")var k=bv;else if(Pu(v))if(Nd)k=jv;else{k=Sv;var C=Cv}else(h=v.nodeName)&&h.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=Ev);if(k&&(k=k(e,u))){_d(d,k,t,c);break e}C&&C(e,v,u),e==="focusout"&&(C=v._wrapperState)&&C.controlled&&v.type==="number"&&Di(v,"number",v.value)}switch(C=u?Mt(u):window,e){case"focusin":(Pu(C)||C.contentEditable==="true")&&(_t=C,Xi=u,Or=null);break;case"focusout":Or=Xi=_t=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,Nu(d,t,c);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":Nu(d,t,c)}var S;if(Xl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Tt?Od(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Id&&t.locale!=="ko"&&(Tt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Tt&&(S=Pd()):(Ln=c,Ul="value"in Ln?Ln.value:Ln.textContent,Tt=!0)),C=ro(u,E),0<C.length&&(E=new Cu(E,e,null,t,c),d.push({event:E,listeners:C}),S?E.data=S:(S=Td(t),S!==null&&(E.data=S)))),(S=gv?yv(e,t):wv(e,t))&&(u=ro(u,"onBeforeInput"),0<u.length&&(c=new Cu("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=S))}Hd(d,n)})}function Wr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ro(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=$r(e,t),o!=null&&r.unshift(Wr(e,o,a)),o=$r(e,n),o!=null&&r.push(Wr(e,o,a))),e=e.return}return r}function Ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lu(e,n,t,r,a){for(var o=n._reactName,i=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=$r(t,o),s!=null&&i.unshift(Wr(t,s,l))):a||(s=$r(t,o),s!=null&&i.push(Wr(t,s,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Mv=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(Mv,`
`).replace(Rv,"")}function Ea(e,n,t){if(n=Du(n),Du(e)!==n&&t)throw Error(j(425))}function ao(){}var Gi=null,qi=null;function Zi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(zv)}:Ji;function zv(e){setTimeout(function(){throw e})}function di(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Kr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Kr(n)}function Bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),ln="__reactFiber$"+lr,Xr="__reactProps$"+lr,bn="__reactContainer$"+lr,el="__reactEvents$"+lr,Fv="__reactListeners$"+lr,Av="__reactHandles$"+lr;function ot(e){var n=e[ln];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[ln]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Fu(e);e!==null;){if(t=e[ln])return t;e=Fu(e)}return n}e=t,t=e.parentNode}return null}function sa(e){return e=e[ln]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Oo(e){return e[Xr]||null}var nl=[],Rt=-1;function Gn(e){return{current:e}}function X(e){0>Rt||(e.current=nl[Rt],nl[Rt]=null,Rt--)}function U(e,n){Rt++,nl[Rt]=e.current,e.current=n}var Wn={},ye=Gn(Wn),je=Gn(!1),pt=Wn;function Qt(e,n){var t=e.type.contextTypes;if(!t)return Wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Pe(e){return e=e.childContextTypes,e!=null}function oo(){X(je),X(ye)}function Au(e,n,t){if(ye.current!==Wn)throw Error(j(168));U(ye,n),U(je,t)}function Vd(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(j(108,Cm(e)||"Unknown",a));return J({},t,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,pt=ye.current,U(ye,e),U(je,je.current),!0}function $u(e,n,t){var r=e.stateNode;if(!r)throw Error(j(169));t?(e=Vd(e,n,pt),r.__reactInternalMemoizedMergedChildContext=e,X(je),X(ye),U(ye,e)):X(je),U(je,t)}var mn=null,To=!1,pi=!1;function Ud(e){mn===null?mn=[e]:mn.push(e)}function $v(e){To=!0,Ud(e)}function qn(){if(!pi&&mn!==null){pi=!0;var e=0,n=K;try{var t=mn;for(K=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}mn=null,To=!1}catch(a){throw mn!==null&&(mn=mn.slice(e+1)),hd(Bl,qn),a}finally{K=n,pi=!1}}return null}var Lt=[],Dt=0,lo=null,so=0,$e=[],Be=0,ft=null,gn=1,yn="";function rt(e,n){Lt[Dt++]=so,Lt[Dt++]=lo,lo=e,so=n}function Yd(e,n,t){$e[Be++]=gn,$e[Be++]=yn,$e[Be++]=ft,ft=e;var r=gn;e=yn;var a=32-nn(r)-1;r&=~(1<<a),t+=1;var o=32-nn(n)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,gn=1<<32-nn(n)+a|t<<a|r,yn=o+e}else gn=1<<o|t<<a|r,yn=e}function Gl(e){e.return!==null&&(rt(e,1),Yd(e,1,0))}function ql(e){for(;e===lo;)lo=Lt[--Dt],Lt[Dt]=null,so=Lt[--Dt],Lt[Dt]=null;for(;e===ft;)ft=$e[--Be],$e[Be]=null,yn=$e[--Be],$e[Be]=null,gn=$e[--Be],$e[Be]=null}var De=null,Le=null,G=!1,Ze=null;function Wd(e,n){var t=He(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Bu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,De=e,Le=Bn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,De=e,Le=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ft!==null?{id:gn,overflow:yn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=He(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,De=e,Le=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rl(e){if(G){var n=Le;if(n){var t=n;if(!Bu(e,n)){if(tl(e))throw Error(j(418));n=Bn(t.nextSibling);var r=De;n&&Bu(e,n)?Wd(r,t):(e.flags=e.flags&-4097|2,G=!1,De=e)}}else{if(tl(e))throw Error(j(418));e.flags=e.flags&-4097|2,G=!1,De=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function ja(e){if(e!==De)return!1;if(!G)return Hu(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Zi(e.type,e.memoizedProps)),n&&(n=Le)){if(tl(e))throw Xd(),Error(j(418));for(;n;)Wd(e,n),n=Bn(n.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Le=Bn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Le=null}}else Le=De?Bn(e.stateNode.nextSibling):null;return!0}function Xd(){for(var e=Le;e;)e=Bn(e.nextSibling)}function Gt(){Le=De=null,G=!1}function Zl(e){Ze===null?Ze=[e]:Ze.push(e)}var Bv=jn.ReactCurrentBatchConfig;function Ge(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var uo=Gn(null),co=null,zt=null,Jl=null;function es(){Jl=zt=co=null}function ns(e){var n=uo.current;X(uo),e._currentValue=n}function al(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ut(e,n){co=e,Jl=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function Ve(e){var n=e._currentValue;if(Jl!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(co===null)throw Error(j(308));zt=e,co.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var it=null;function ts(e){it===null?it=[e]:it.push(e)}function Qd(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,ts(n)):(t.next=a.next,a.next=t),n.interleaved=t,Cn(e,r)}function Cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Tn=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Cn(e,t)}return a=r.interleaved,a===null?(n.next=n,ts(r)):(n.next=a.next,a.next=n),r.interleaved=n,Cn(e,t)}function Ba(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Hl(e,t)}}function Ku(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function po(e,n,t,r){var a=e.updateQueue;Tn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?o=u:i.next=u,i=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==i&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var d=a.baseState;i=0,c=u=s=null,l=o;do{var v=l.lane,h=l.eventTime;if((r&v)===v){c!==null&&(c=c.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(v=n,h=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(h,d,v);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,v=typeof g=="function"?g.call(h,d,v):g,v==null)break e;d=J({},d,v);break e;case 2:Tn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=a.effects,v===null?a.effects=[l]:v.push(l))}else h={eventTime:h,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=h,s=d):c=c.next=h,i|=v;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;v=l,l=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(1);if(c===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,n=a.shared.interleaved,n!==null){a=n;do i|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);vt|=i,e.lanes=i,e.memoizedState=d}}function Vu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(j(191,a));a.call(r)}}}var qd=new Qc.Component().refs;function ol(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _o={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ke(),a=Vn(e),o=wn(r,a);o.payload=n,t!=null&&(o.callback=t),n=Hn(e,o,a),n!==null&&(tn(n,e,a,r),Ba(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ke(),a=Vn(e),o=wn(r,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Hn(e,o,a),n!==null&&(tn(n,e,a,r),Ba(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ke(),r=Vn(e),a=wn(t,r);a.tag=2,n!=null&&(a.callback=n),n=Hn(e,a,r),n!==null&&(tn(n,e,r,t),Ba(n,e,r))}};function Uu(e,n,t,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Ur(t,r)||!Ur(a,o):!0}function Zd(e,n,t){var r=!1,a=Wn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(a=Pe(n)?pt:ye.current,r=n.contextTypes,o=(r=r!=null)?Qt(e,a):Wn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_o,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function Yu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&_o.enqueueReplaceState(n,n.state,null)}function il(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=qd,rs(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=Ve(o):(o=Pe(n)?pt:ye.current,a.context=Qt(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ol(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&_o.enqueueReplaceState(a,a.state,null),po(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(j(309));var r=t.stateNode}if(!r)throw Error(j(147,e));var a=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var l=a.refs;l===qd&&(l=a.refs={}),i===null?delete l[o]:l[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(j(284));if(!t._owner)throw Error(j(290,e))}return e}function Pa(e,n){throw e=Object.prototype.toString.call(n),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wu(e){var n=e._init;return n(e._payload)}function Jd(e){function n(f,p){if(e){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function t(f,p){if(!e)return null;for(;p!==null;)n(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=Un(f,p),f.index=0,f.sibling=null,f}function o(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,p,m,w){return p===null||p.tag!==6?(p=wi(m,f.mode,w),p.return=f,p):(p=a(p,m),p.return=f,p)}function s(f,p,m,w){var k=m.type;return k===Ot?c(f,p,m.props.children,w,m.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===On&&Wu(k)===p.type)?(w=a(p,m.props),w.ref=mr(f,p,m),w.return=f,w):(w=Wa(m.type,m.key,m.props,null,f.mode,w),w.ref=mr(f,p,m),w.return=f,w)}function u(f,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=xi(m,f.mode,w),p.return=f,p):(p=a(p,m.children||[]),p.return=f,p)}function c(f,p,m,w,k){return p===null||p.tag!==7?(p=ct(m,f.mode,w,k),p.return=f,p):(p=a(p,m),p.return=f,p)}function d(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wi(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ha:return m=Wa(p.type,p.key,p.props,null,f.mode,m),m.ref=mr(f,null,p),m.return=f,m;case It:return p=xi(p,f.mode,m),p.return=f,p;case On:var w=p._init;return d(f,w(p._payload),m)}if(kr(p)||ur(p))return p=ct(p,f.mode,m,null),p.return=f,p;Pa(f,p)}return null}function v(f,p,m,w){var k=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(f,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ha:return m.key===k?s(f,p,m,w):null;case It:return m.key===k?u(f,p,m,w):null;case On:return k=m._init,v(f,p,k(m._payload),w)}if(kr(m)||ur(m))return k!==null?null:c(f,p,m,w,null);Pa(f,m)}return null}function h(f,p,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,l(p,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ha:return f=f.get(w.key===null?m:w.key)||null,s(p,f,w,k);case It:return f=f.get(w.key===null?m:w.key)||null,u(p,f,w,k);case On:var C=w._init;return h(f,p,m,C(w._payload),k)}if(kr(w)||ur(w))return f=f.get(m)||null,c(p,f,w,k,null);Pa(p,w)}return null}function g(f,p,m,w){for(var k=null,C=null,S=p,E=p=0,R=null;S!==null&&E<m.length;E++){S.index>E?(R=S,S=null):R=S.sibling;var T=v(f,S,m[E],w);if(T===null){S===null&&(S=R);break}e&&S&&T.alternate===null&&n(f,S),p=o(T,p,E),C===null?k=T:C.sibling=T,C=T,S=R}if(E===m.length)return t(f,S),G&&rt(f,E),k;if(S===null){for(;E<m.length;E++)S=d(f,m[E],w),S!==null&&(p=o(S,p,E),C===null?k=S:C.sibling=S,C=S);return G&&rt(f,E),k}for(S=r(f,S);E<m.length;E++)R=h(S,f,E,m[E],w),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?E:R.key),p=o(R,p,E),C===null?k=R:C.sibling=R,C=R);return e&&S.forEach(function(M){return n(f,M)}),G&&rt(f,E),k}function x(f,p,m,w){var k=ur(m);if(typeof k!="function")throw Error(j(150));if(m=k.call(m),m==null)throw Error(j(151));for(var C=k=null,S=p,E=p=0,R=null,T=m.next();S!==null&&!T.done;E++,T=m.next()){S.index>E?(R=S,S=null):R=S.sibling;var M=v(f,S,T.value,w);if(M===null){S===null&&(S=R);break}e&&S&&M.alternate===null&&n(f,S),p=o(M,p,E),C===null?k=M:C.sibling=M,C=M,S=R}if(T.done)return t(f,S),G&&rt(f,E),k;if(S===null){for(;!T.done;E++,T=m.next())T=d(f,T.value,w),T!==null&&(p=o(T,p,E),C===null?k=T:C.sibling=T,C=T);return G&&rt(f,E),k}for(S=r(f,S);!T.done;E++,T=m.next())T=h(S,f,E,T.value,w),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?E:T.key),p=o(T,p,E),C===null?k=T:C.sibling=T,C=T);return e&&S.forEach(function(L){return n(f,L)}),G&&rt(f,E),k}function b(f,p,m,w){if(typeof m=="object"&&m!==null&&m.type===Ot&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ha:e:{for(var k=m.key,C=p;C!==null;){if(C.key===k){if(k=m.type,k===Ot){if(C.tag===7){t(f,C.sibling),p=a(C,m.props.children),p.return=f,f=p;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===On&&Wu(k)===C.type){t(f,C.sibling),p=a(C,m.props),p.ref=mr(f,C,m),p.return=f,f=p;break e}t(f,C);break}else n(f,C);C=C.sibling}m.type===Ot?(p=ct(m.props.children,f.mode,w,m.key),p.return=f,f=p):(w=Wa(m.type,m.key,m.props,null,f.mode,w),w.ref=mr(f,p,m),w.return=f,f=w)}return i(f);case It:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){t(f,p.sibling),p=a(p,m.children||[]),p.return=f,f=p;break e}else{t(f,p);break}else n(f,p);p=p.sibling}p=xi(m,f.mode,w),p.return=f,f=p}return i(f);case On:return C=m._init,b(f,p,C(m._payload),w)}if(kr(m))return g(f,p,m,w);if(ur(m))return x(f,p,m,w);Pa(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(t(f,p.sibling),p=a(p,m),p.return=f,f=p):(t(f,p),p=wi(m,f.mode,w),p.return=f,f=p),i(f)):t(f,p)}return b}var qt=Jd(!0),ep=Jd(!1),ua={},un=Gn(ua),Qr=Gn(ua),Gr=Gn(ua);function lt(e){if(e===ua)throw Error(j(174));return e}function as(e,n){switch(U(Gr,n),U(Qr,e),U(un,ua),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Fi(n,e)}X(un),U(un,n)}function Zt(){X(un),X(Qr),X(Gr)}function np(e){lt(Gr.current);var n=lt(un.current),t=Fi(n,e.type);n!==t&&(U(Qr,e),U(un,t))}function os(e){Qr.current===e&&(X(un),X(Qr))}var q=Gn(0);function fo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fi=[];function is(){for(var e=0;e<fi.length;e++)fi[e]._workInProgressVersionPrimary=null;fi.length=0}var Ha=jn.ReactCurrentDispatcher,mi=jn.ReactCurrentBatchConfig,mt=0,Z=null,le=null,ue=null,mo=!1,Tr=!1,qr=0,Hv=0;function ve(){throw Error(j(321))}function ls(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!rn(e[t],n[t]))return!1;return!0}function ss(e,n,t,r,a,o){if(mt=o,Z=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ha.current=e===null||e.memoizedState===null?Yv:Wv,e=t(r,a),Tr){o=0;do{if(Tr=!1,qr=0,25<=o)throw Error(j(301));o+=1,ue=le=null,n.updateQueue=null,Ha.current=Xv,e=t(r,a)}while(Tr)}if(Ha.current=vo,n=le!==null&&le.next!==null,mt=0,ue=le=Z=null,mo=!1,n)throw Error(j(300));return e}function us(){var e=qr!==0;return qr=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ue(){if(le===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var n=ue===null?Z.memoizedState:ue.next;if(n!==null)ue=n,le=e;else{if(e===null)throw Error(j(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function Zr(e,n){return typeof n=="function"?n(e):n}function vi(e){var n=Ue(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var r=le,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var l=i=null,s=null,u=o;do{var c=u.lane;if((mt&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,Z.lanes|=c,vt|=c}u=u.next}while(u!==null&&u!==o);s===null?i=r:s.next=l,rn(r,n.memoizedState)||(Ee=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do o=a.lane,Z.lanes|=o,vt|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function hi(e){var n=Ue(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);rn(o,n.memoizedState)||(Ee=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function tp(){}function rp(e,n){var t=Z,r=Ue(),a=n(),o=!rn(r.memoizedState,a);if(o&&(r.memoizedState=a,Ee=!0),r=r.queue,cs(ip.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ue!==null&&ue.memoizedState.tag&1){if(t.flags|=2048,Jr(9,op.bind(null,t,r,a,n),void 0,null),de===null)throw Error(j(349));mt&30||ap(t,n,a)}return a}function ap(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function op(e,n,t,r){n.value=t,n.getSnapshot=r,lp(n)&&sp(e)}function ip(e,n,t){return t(function(){lp(n)&&sp(e)})}function lp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!rn(e,t)}catch{return!0}}function sp(e){var n=Cn(e,1);n!==null&&tn(n,e,1,-1)}function Xu(e){var n=on();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},n.queue=e,e=e.dispatch=Uv.bind(null,Z,e),[n.memoizedState,e]}function Jr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Z.updateQueue,n===null?(n={lastEffect:null,stores:null},Z.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function up(){return Ue().memoizedState}function Ka(e,n,t,r){var a=on();Z.flags|=e,a.memoizedState=Jr(1|n,t,void 0,r===void 0?null:r)}function No(e,n,t,r){var a=Ue();r=r===void 0?null:r;var o=void 0;if(le!==null){var i=le.memoizedState;if(o=i.destroy,r!==null&&ls(r,i.deps)){a.memoizedState=Jr(n,t,o,r);return}}Z.flags|=e,a.memoizedState=Jr(1|n,t,o,r)}function Qu(e,n){return Ka(8390656,8,e,n)}function cs(e,n){return No(2048,8,e,n)}function cp(e,n){return No(4,2,e,n)}function dp(e,n){return No(4,4,e,n)}function pp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fp(e,n,t){return t=t!=null?t.concat([e]):null,No(4,4,pp.bind(null,n,e),t)}function ds(){}function mp(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ls(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function vp(e,n){var t=Ue();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ls(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hp(e,n,t){return mt&21?(rn(t,n)||(t=wd(),Z.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=t)}function Kv(e,n){var t=K;K=t!==0&&4>t?t:4,e(!0);var r=mi.transition;mi.transition={};try{e(!1),n()}finally{K=t,mi.transition=r}}function gp(){return Ue().memoizedState}function Vv(e,n,t){var r=Vn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},yp(e))wp(n,t);else if(t=Qd(e,n,t,r),t!==null){var a=ke();tn(t,e,r,a),xp(t,n,r)}}function Uv(e,n,t){var r=Vn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(yp(e))wp(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,l=o(i,t);if(a.hasEagerState=!0,a.eagerState=l,rn(l,i)){var s=n.interleaved;s===null?(a.next=a,ts(n)):(a.next=s.next,s.next=a),n.interleaved=a;return}}catch{}finally{}t=Qd(e,n,a,r),t!==null&&(a=ke(),tn(t,e,r,a),xp(t,n,r))}}function yp(e){var n=e.alternate;return e===Z||n!==null&&n===Z}function wp(e,n){Tr=mo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function xp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Hl(e,t)}}var vo={readContext:Ve,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Yv={readContext:Ve,useCallback:function(e,n){return on().memoizedState=[e,n===void 0?null:n],e},useContext:Ve,useEffect:Qu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ka(4194308,4,pp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ka(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ka(4,2,e,n)},useMemo:function(e,n){var t=on();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=on();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Vv.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var n=on();return e={current:e},n.memoizedState=e},useState:Xu,useDebugValue:ds,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=Xu(!1),n=e[0];return e=Kv.bind(null,e[1]),on().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Z,a=on();if(G){if(t===void 0)throw Error(j(407));t=t()}else{if(t=n(),de===null)throw Error(j(349));mt&30||ap(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,Qu(ip.bind(null,r,o,e),[e]),r.flags|=2048,Jr(9,op.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=on(),n=de.identifierPrefix;if(G){var t=yn,r=gn;t=(r&~(1<<32-nn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Hv++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Wv={readContext:Ve,useCallback:mp,useContext:Ve,useEffect:cs,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:vp,useReducer:vi,useRef:up,useState:function(){return vi(Zr)},useDebugValue:ds,useDeferredValue:function(e){var n=Ue();return hp(n,le.memoizedState,e)},useTransition:function(){var e=vi(Zr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:tp,useSyncExternalStore:rp,useId:gp,unstable_isNewReconciler:!1},Xv={readContext:Ve,useCallback:mp,useContext:Ve,useEffect:cs,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:vp,useReducer:hi,useRef:up,useState:function(){return hi(Zr)},useDebugValue:ds,useDeferredValue:function(e){var n=Ue();return le===null?n.memoizedState=e:hp(n,le.memoizedState,e)},useTransition:function(){var e=hi(Zr)[0],n=Ue().memoizedState;return[e,n]},useMutableSource:tp,useSyncExternalStore:rp,useId:gp,unstable_isNewReconciler:!1};function Jt(e,n){try{var t="",r=n;do t+=bm(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function gi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ll(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qv=typeof WeakMap=="function"?WeakMap:Map;function kp(e,n,t){t=wn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){go||(go=!0,gl=r),ll(e,n)},t}function bp(e,n,t){t=wn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){ll(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ll(e,n),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Gu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Qv;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=uh.bind(null,e,n,t),n.then(e,e))}function qu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zu(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=wn(-1,1),n.tag=2,Hn(t,n,1))),t.lanes|=1),e)}var Gv=jn.ReactCurrentOwner,Ee=!1;function xe(e,n,t,r){n.child=e===null?ep(n,null,t,r):qt(n,e.child,t,r)}function Ju(e,n,t,r,a){t=t.render;var o=n.ref;return Ut(n,a),r=ss(e,n,t,r,o,a),t=us(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Sn(e,n,a)):(G&&t&&Gl(n),n.flags|=1,xe(e,n,r,a),n.child)}function ec(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!ws(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Cp(e,n,o,r,a)):(e=Wa(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ur,t(i,r)&&e.ref===n.ref)return Sn(e,n,a)}return n.flags|=1,e=Un(o,r),e.ref=n.ref,e.return=n,n.child=e}function Cp(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if(Ur(o,r)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,Sn(e,n,a)}return sl(e,n,t,r,a)}function Sp(e,n,t){var r=n.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(At,Me),Me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(At,Me),Me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,U(At,Me),Me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,U(At,Me),Me|=r;return xe(e,n,a,t),n.child}function Ep(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function sl(e,n,t,r,a){var o=Pe(t)?pt:ye.current;return o=Qt(n,o),Ut(n,a),t=ss(e,n,t,r,o,a),r=us(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Sn(e,n,a)):(G&&r&&Gl(n),n.flags|=1,xe(e,n,t,a),n.child)}function nc(e,n,t,r,a){if(Pe(t)){var o=!0;io(n)}else o=!1;if(Ut(n,a),n.stateNode===null)Va(e,n),Zd(n,t,r),il(n,t,r,a),r=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var s=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Pe(t)?pt:ye.current,u=Qt(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Yu(n,i,r,u),Tn=!1;var v=n.memoizedState;i.state=v,po(n,r,i,a),s=n.memoizedState,l!==r||v!==s||je.current||Tn?(typeof c=="function"&&(ol(n,t,c,r),s=n.memoizedState),(l=Tn||Uu(n,t,l,r,v,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Gd(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:Ge(n.type,l),i.props=u,d=n.pendingProps,v=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=Pe(t)?pt:ye.current,s=Qt(n,s));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||v!==s)&&Yu(n,i,r,s),Tn=!1,v=n.memoizedState,i.state=v,po(n,r,i,a);var g=n.memoizedState;l!==d||v!==g||je.current||Tn?(typeof h=="function"&&(ol(n,t,h,r),g=n.memoizedState),(u=Tn||Uu(n,t,u,r,v,g,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),i.props=r,i.state=g,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return ul(e,n,t,r,o,a)}function ul(e,n,t,r,a,o){Ep(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return a&&$u(n,t,!1),Sn(e,n,o);r=n.stateNode,Gv.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=qt(n,e.child,null,o),n.child=qt(n,null,l,o)):xe(e,n,l,o),n.memoizedState=r.state,a&&$u(n,t,!0),n.child}function jp(e){var n=e.stateNode;n.pendingContext?Au(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Au(e,n.context,!1),as(e,n.containerInfo)}function tc(e,n,t,r,a){return Gt(),Zl(a),n.flags|=256,xe(e,n,t,r),n.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pp(e,n,t){var r=n.pendingProps,a=q.current,o=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),U(q,a&1),e===null)return rl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Lo(i,r,0,null),e=ct(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=dl(t),n.memoizedState=cl,e):ps(n,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return qv(e,n,i,r,l,a,t);if(o){o=r.fallback,i=n.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Un(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Un(l,o):(o=ct(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?dl(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=cl,r}return o=e.child,e=o.sibling,r=Un(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ps(e,n){return n=Lo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ia(e,n,t,r){return r!==null&&Zl(r),qt(n,e.child,null,t),e=ps(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qv(e,n,t,r,a,o,i){if(t)return n.flags&256?(n.flags&=-257,r=gi(Error(j(422))),Ia(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,a=n.mode,r=Lo({mode:"visible",children:r.children},a,0,null),o=ct(o,a,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&qt(n,e.child,null,i),n.child.memoizedState=dl(i),n.memoizedState=cl,o);if(!(n.mode&1))return Ia(e,n,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(j(419)),r=gi(o,r,void 0),Ia(e,n,i,r)}if(l=(i&e.childLanes)!==0,Ee||l){if(r=de,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Cn(e,a),tn(r,e,a,-1))}return ys(),r=gi(Error(j(421))),Ia(e,n,i,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=ch.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,Le=Bn(a.nextSibling),De=n,G=!0,Ze=null,e!==null&&($e[Be++]=gn,$e[Be++]=yn,$e[Be++]=ft,gn=e.id,yn=e.overflow,ft=n),n=ps(n,r.children),n.flags|=4096,n)}function rc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),al(e.return,n,t)}function yi(e,n,t,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function Ip(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(xe(e,n,r.children,t),r=q.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,t,n);else if(e.tag===19)rc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(q,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&fo(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),yi(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&fo(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}yi(n,!0,t,null,o);break;case"together":yi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Va(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Sn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(j(153));if(n.child!==null){for(e=n.child,t=Un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Zv(e,n,t){switch(n.tag){case 3:jp(n),Gt();break;case 5:np(n);break;case 1:Pe(n.type)&&io(n);break;case 4:as(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;U(uo,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(q,q.current&1),n.flags|=128,null):t&n.child.childLanes?Pp(e,n,t):(U(q,q.current&1),e=Sn(e,n,t),e!==null?e.sibling:null);U(q,q.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ip(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(q,q.current),r)break;return null;case 22:case 23:return n.lanes=0,Sp(e,n,t)}return Sn(e,n,t)}var Op,pl,Tp,_p;Op=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};pl=function(){};Tp=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,lt(un.current);var o=null;switch(t){case"input":a=Ri(e,a),r=Ri(e,r),o=[];break;case"select":a=J({},a,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":a=zi(e,a),r=zi(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}Ai(t,r);var i;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=a?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};_p=function(e,n,t,r){t!==r&&(n.flags|=4)};function vr(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Jv(e,n,t){var r=n.pendingProps;switch(ql(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(n),null;case 1:return Pe(n.type)&&oo(),he(n),null;case 3:return r=n.stateNode,Zt(),X(je),X(ye),is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ja(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ze!==null&&(xl(Ze),Ze=null))),pl(e,n),he(n),null;case 5:os(n);var a=lt(Gr.current);if(t=n.type,e!==null&&n.stateNode!=null)Tp(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(j(166));return he(n),null}if(e=lt(un.current),ja(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[ln]=n,r[Xr]=o,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(a=0;a<Cr.length;a++)W(Cr[a],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":pu(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":mu(r,o),W("invalid",r)}Ai(t,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,l,e),a=["children",""+l]):Fr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&W("scroll",r)}switch(t){case"input":ga(r),fu(r,o,!0);break;case"textarea":ga(r),vu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ao)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[ln]=n,e[Xr]=r,Op(e,n,!1,!1),n.stateNode=e;e:{switch(i=$i(t,r),t){case"dialog":W("cancel",e),W("close",e),a=r;break;case"iframe":case"object":case"embed":W("load",e),a=r;break;case"video":case"audio":for(a=0;a<Cr.length;a++)W(Cr[a],e);a=r;break;case"source":W("error",e),a=r;break;case"img":case"image":case"link":W("error",e),W("load",e),a=r;break;case"details":W("toggle",e),a=r;break;case"input":pu(e,r),a=Ri(e,r),W("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=J({},r,{value:void 0}),W("invalid",e);break;case"textarea":mu(e,r),a=zi(e,r),W("invalid",e);break;default:a=r}Ai(t,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ld(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&od(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ar(e,s):typeof s=="number"&&Ar(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&W("scroll",e):s!=null&&Dl(e,o,s,i))}switch(t){case"input":ga(e),fu(e,r,!1);break;case"textarea":ga(e),vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Bt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ao)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return he(n),null;case 6:if(e&&n.stateNode!=null)_p(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(j(166));if(t=lt(Gr.current),lt(un.current),ja(n)){if(r=n.stateNode,t=n.memoizedProps,r[ln]=n,(o=r.nodeValue!==t)&&(e=De,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ln]=n,n.stateNode=r}return he(n),null;case 13:if(X(q),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Le!==null&&n.mode&1&&!(n.flags&128))Xd(),Gt(),n.flags|=98560,o=!1;else if(o=ja(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[ln]=n}else Gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;he(n),o=!1}else Ze!==null&&(xl(Ze),Ze=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||q.current&1?se===0&&(se=3):ys())),n.updateQueue!==null&&(n.flags|=4),he(n),null);case 4:return Zt(),pl(e,n),e===null&&Yr(n.stateNode.containerInfo),he(n),null;case 10:return ns(n.type._context),he(n),null;case 17:return Pe(n.type)&&oo(),he(n),null;case 19:if(X(q),o=n.memoizedState,o===null)return he(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)vr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=fo(e),i!==null){for(n.flags|=128,vr(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(q,q.current&1|2),n.child}e=e.sibling}o.tail!==null&&re()>er&&(n.flags|=128,r=!0,vr(o,!1),n.lanes=4194304)}else{if(!r)if(e=fo(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!G)return he(n),null}else 2*re()-o.renderingStartTime>er&&t!==1073741824&&(n.flags|=128,r=!0,vr(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=re(),n.sibling=null,t=q.current,U(q,r?t&1|2:t&1),n):(he(n),null);case 22:case 23:return gs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Me&1073741824&&(he(n),n.subtreeFlags&6&&(n.flags|=8192)):he(n),null;case 24:return null;case 25:return null}throw Error(j(156,n.tag))}function eh(e,n){switch(ql(n),n.tag){case 1:return Pe(n.type)&&oo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zt(),X(je),X(ye),is(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return os(n),null;case 13:if(X(q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(j(340));Gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(q),null;case 4:return Zt(),null;case 10:return ns(n.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var Oa=!1,ge=!1,nh=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ft(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ne(e,n,r)}else t.current=null}function fl(e,n,t){try{t()}catch(r){ne(e,n,r)}}var ac=!1;function th(e,n){if(Gi=no,e=Ld(),Ql(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,l=-1,s=-1,u=0,c=0,d=e,v=null;n:for(;;){for(var h;d!==t||a!==0&&d.nodeType!==3||(l=i+a),d!==o||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(h=d.firstChild)!==null;)v=d,d=h;for(;;){if(d===e)break n;if(v===t&&++u===a&&(l=i),v===o&&++c===r&&(s=i),(h=d.nextSibling)!==null)break;d=v,v=d.parentNode}d=h}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(qi={focusedElem:e,selectionRange:t},no=!1,O=n;O!==null;)if(n=O,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,O=e;else for(;O!==null;){n=O;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,b=g.memoizedState,f=n.stateNode,p=f.getSnapshotBeforeUpdate(n.elementType===n.type?x:Ge(n.type,x),b);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){ne(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,O=e;break}O=n.return}return g=ac,ac=!1,g}function _r(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&fl(n,t,o)}a=a.next}while(a!==r)}}function Mo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ml(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Np(e){var n=e.alternate;n!==null&&(e.alternate=null,Np(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ln],delete n[Xr],delete n[el],delete n[Fv],delete n[Av])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mp(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}function hl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hl(e,n,t),e=e.sibling;e!==null;)hl(e,n,t),e=e.sibling}var pe=null,qe=!1;function In(e,n,t){for(t=t.child;t!==null;)Rp(e,n,t),t=t.sibling}function Rp(e,n,t){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Eo,t)}catch{}switch(t.tag){case 5:ge||Ft(t,n);case 6:var r=pe,a=qe;pe=null,In(e,n,t),pe=r,qe=a,pe!==null&&(qe?(e=pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):pe.removeChild(t.stateNode));break;case 18:pe!==null&&(qe?(e=pe,t=t.stateNode,e.nodeType===8?di(e.parentNode,t):e.nodeType===1&&di(e,t),Kr(e)):di(pe,t.stateNode));break;case 4:r=pe,a=qe,pe=t.stateNode.containerInfo,qe=!0,In(e,n,t),pe=r,qe=a;break;case 0:case 11:case 14:case 15:if(!ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&fl(t,n,i),a=a.next}while(a!==r)}In(e,n,t);break;case 1:if(!ge&&(Ft(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ne(t,n,l)}In(e,n,t);break;case 21:In(e,n,t);break;case 22:t.mode&1?(ge=(r=ge)||t.memoizedState!==null,In(e,n,t),ge=r):In(e,n,t);break;default:In(e,n,t)}}function ic(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new nh),n.forEach(function(r){var a=dh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Qe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,qe=!1;break e;case 3:pe=l.stateNode.containerInfo,qe=!0;break e;case 4:pe=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(pe===null)throw Error(j(160));Rp(o,i,a),pe=null,qe=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ne(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Lp(n,e),n=n.sibling}function Lp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(n,e),an(e),r&4){try{_r(3,e,e.return),Mo(3,e)}catch(x){ne(e,e.return,x)}try{_r(5,e,e.return)}catch(x){ne(e,e.return,x)}}break;case 1:Qe(n,e),an(e),r&512&&t!==null&&Ft(t,t.return);break;case 5:if(Qe(n,e),an(e),r&512&&t!==null&&Ft(t,t.return),e.flags&32){var a=e.stateNode;try{Ar(a,"")}catch(x){ne(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&td(a,o),$i(l,i);var u=$i(l,o);for(i=0;i<s.length;i+=2){var c=s[i],d=s[i+1];c==="style"?ld(a,d):c==="dangerouslySetInnerHTML"?od(a,d):c==="children"?Ar(a,d):Dl(a,c,d,u)}switch(l){case"input":Li(a,o);break;case"textarea":rd(a,o);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Bt(a,!!o.multiple,h,!1):v!==!!o.multiple&&(o.defaultValue!=null?Bt(a,!!o.multiple,o.defaultValue,!0):Bt(a,!!o.multiple,o.multiple?[]:"",!1))}a[Xr]=o}catch(x){ne(e,e.return,x)}}break;case 6:if(Qe(n,e),an(e),r&4){if(e.stateNode===null)throw Error(j(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(x){ne(e,e.return,x)}}break;case 3:if(Qe(n,e),an(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Kr(n.containerInfo)}catch(x){ne(e,e.return,x)}break;case 4:Qe(n,e),an(e);break;case 13:Qe(n,e),an(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(vs=re())),r&4&&ic(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(ge=(u=ge)||c,Qe(n,e),ge=u):Qe(n,e),an(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(d=O=c;O!==null;){switch(v=O,h=v.child,v.tag){case 0:case 11:case 14:case 15:_r(4,v,v.return);break;case 1:Ft(v,v.return);var g=v.stateNode;if(typeof g.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(x){ne(r,t,x)}}break;case 5:Ft(v,v.return);break;case 22:if(v.memoizedState!==null){sc(d);continue}}h!==null?(h.return=v,O=h):sc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=id("display",i))}catch(x){ne(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ne(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qe(n,e),an(e),r&4&&ic(e);break;case 21:break;default:Qe(n,e),an(e)}}function an(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Mp(t)){var r=t;break e}t=t.return}throw Error(j(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ar(a,""),r.flags&=-33);var o=oc(e);hl(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,l=oc(e);vl(e,l,i);break;default:throw Error(j(161))}}catch(s){ne(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rh(e,n,t){O=e,Dp(e)}function Dp(e,n,t){for(var r=(e.mode&1)!==0;O!==null;){var a=O,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Oa;if(!i){var l=a.alternate,s=l!==null&&l.memoizedState!==null||ge;l=Oa;var u=ge;if(Oa=i,(ge=s)&&!u)for(O=a;O!==null;)i=O,s=i.child,i.tag===22&&i.memoizedState!==null?uc(a):s!==null?(s.return=i,O=s):uc(a);for(;o!==null;)O=o,Dp(o),o=o.sibling;O=a,Oa=l,ge=u}lc(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,O=o):lc(e)}}function lc(e){for(;O!==null;){var n=O;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ge||Mo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ge)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ge(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Vu(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Vu(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Kr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||n.flags&512&&ml(n)}catch(v){ne(n,n.return,v)}}if(n===e){O=null;break}if(t=n.sibling,t!==null){t.return=n.return,O=t;break}O=n.return}}function sc(e){for(;O!==null;){var n=O;if(n===e){O=null;break}var t=n.sibling;if(t!==null){t.return=n.return,O=t;break}O=n.return}}function uc(e){for(;O!==null;){var n=O;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Mo(4,n)}catch(s){ne(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(s){ne(n,a,s)}}var o=n.return;try{ml(n)}catch(s){ne(n,o,s)}break;case 5:var i=n.return;try{ml(n)}catch(s){ne(n,i,s)}}}catch(s){ne(n,n.return,s)}if(n===e){O=null;break}var l=n.sibling;if(l!==null){l.return=n.return,O=l;break}O=n.return}}var ah=Math.ceil,ho=jn.ReactCurrentDispatcher,fs=jn.ReactCurrentOwner,Ke=jn.ReactCurrentBatchConfig,$=0,de=null,ae=null,fe=0,Me=0,At=Gn(0),se=0,ea=null,vt=0,Ro=0,ms=0,Nr=null,Se=null,vs=0,er=1/0,fn=null,go=!1,gl=null,Kn=null,Ta=!1,Dn=null,yo=0,Mr=0,yl=null,Ua=-1,Ya=0;function ke(){return $&6?re():Ua!==-1?Ua:Ua=re()}function Vn(e){return e.mode&1?$&2&&fe!==0?fe&-fe:Bv.transition!==null?(Ya===0&&(Ya=wd()),Ya):(e=K,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function tn(e,n,t,r){if(50<Mr)throw Mr=0,yl=null,Error(j(185));ia(e,t,r),(!($&2)||e!==de)&&(e===de&&(!($&2)&&(Ro|=t),se===4&&Mn(e,fe)),Ie(e,r),t===1&&$===0&&!(n.mode&1)&&(er=re()+500,To&&qn()))}function Ie(e,n){var t=e.callbackNode;Bm(e,n);var r=eo(e,e===de?fe:0);if(r===0)t!==null&&yu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&yu(t),n===1)e.tag===0?$v(cc.bind(null,e)):Ud(cc.bind(null,e)),Dv(function(){!($&6)&&qn()}),t=null;else{switch(xd(r)){case 1:t=Bl;break;case 4:t=gd;break;case 16:t=Ja;break;case 536870912:t=yd;break;default:t=Ja}t=Vp(t,zp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function zp(e,n){if(Ua=-1,Ya=0,$&6)throw Error(j(327));var t=e.callbackNode;if(Yt()&&e.callbackNode!==t)return null;var r=eo(e,e===de?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=wo(e,r);else{n=r;var a=$;$|=2;var o=Ap();(de!==e||fe!==n)&&(fn=null,er=re()+500,ut(e,n));do try{lh();break}catch(l){Fp(e,l)}while(1);es(),ho.current=o,$=a,ae!==null?n=0:(de=null,fe=0,n=se)}if(n!==0){if(n===2&&(a=Ui(e),a!==0&&(r=a,n=wl(e,a))),n===1)throw t=ea,ut(e,0),Mn(e,r),Ie(e,re()),t;if(n===6)Mn(e,r);else{if(a=e.current.alternate,!(r&30)&&!oh(a)&&(n=wo(e,r),n===2&&(o=Ui(e),o!==0&&(r=o,n=wl(e,o))),n===1))throw t=ea,ut(e,0),Mn(e,r),Ie(e,re()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(j(345));case 2:at(e,Se,fn);break;case 3:if(Mn(e,r),(r&130023424)===r&&(n=vs+500-re(),10<n)){if(eo(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ji(at.bind(null,e,Se,fn),n);break}at(e,Se,fn);break;case 4:if(Mn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var i=31-nn(r);o=1<<i,i=n[i],i>a&&(a=i),r&=~o}if(r=a,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ah(r/1960))-r,10<r){e.timeoutHandle=Ji(at.bind(null,e,Se,fn),r);break}at(e,Se,fn);break;case 5:at(e,Se,fn);break;default:throw Error(j(329))}}}return Ie(e,re()),e.callbackNode===t?zp.bind(null,e):null}function wl(e,n){var t=Nr;return e.current.memoizedState.isDehydrated&&(ut(e,n).flags|=256),e=wo(e,n),e!==2&&(n=Se,Se=t,n!==null&&xl(n)),e}function xl(e){Se===null?Se=e:Se.push.apply(Se,e)}function oh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!rn(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mn(e,n){for(n&=~ms,n&=~Ro,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-nn(n),r=1<<t;e[t]=-1,n&=~r}}function cc(e){if($&6)throw Error(j(327));Yt();var n=eo(e,0);if(!(n&1))return Ie(e,re()),null;var t=wo(e,n);if(e.tag!==0&&t===2){var r=Ui(e);r!==0&&(n=r,t=wl(e,r))}if(t===1)throw t=ea,ut(e,0),Mn(e,n),Ie(e,re()),t;if(t===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,at(e,Se,fn),Ie(e,re()),null}function hs(e,n){var t=$;$|=1;try{return e(n)}finally{$=t,$===0&&(er=re()+500,To&&qn())}}function ht(e){Dn!==null&&Dn.tag===0&&!($&6)&&Yt();var n=$;$|=1;var t=Ke.transition,r=K;try{if(Ke.transition=null,K=1,e)return e()}finally{K=r,Ke.transition=t,$=n,!($&6)&&qn()}}function gs(){Me=At.current,X(At)}function ut(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lv(t)),ae!==null)for(t=ae.return;t!==null;){var r=t;switch(ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:Zt(),X(je),X(ye),is();break;case 5:os(r);break;case 4:Zt();break;case 13:X(q);break;case 19:X(q);break;case 10:ns(r.type._context);break;case 22:case 23:gs()}t=t.return}if(de=e,ae=e=Un(e.current,null),fe=Me=n,se=0,ea=null,ms=Ro=vt=0,Se=Nr=null,it!==null){for(n=0;n<it.length;n++)if(t=it[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}t.pending=r}it=null}return e}function Fp(e,n){do{var t=ae;try{if(es(),Ha.current=vo,mo){for(var r=Z.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}mo=!1}if(mt=0,ue=le=Z=null,Tr=!1,qr=0,fs.current=null,t===null||t.return===null){se=1,ea=n,ae=null;break}e:{var o=e,i=t.return,l=t,s=n;if(n=fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var v=c.alternate;v?(c.updateQueue=v.updateQueue,c.memoizedState=v.memoizedState,c.lanes=v.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=qu(i);if(h!==null){h.flags&=-257,Zu(h,i,l,o,n),h.mode&1&&Gu(o,u,n),n=h,s=u;var g=n.updateQueue;if(g===null){var x=new Set;x.add(s),n.updateQueue=x}else g.add(s);break e}else{if(!(n&1)){Gu(o,u,n),ys();break e}s=Error(j(426))}}else if(G&&l.mode&1){var b=qu(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Zu(b,i,l,o,n),Zl(Jt(s,l));break e}}o=s=Jt(s,l),se!==4&&(se=2),Nr===null?Nr=[o]:Nr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=kp(o,s,n);Ku(o,f);break e;case 1:l=s;var p=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kn===null||!Kn.has(m)))){o.flags|=65536,n&=-n,o.lanes|=n;var w=bp(o,l,n);Ku(o,w);break e}}o=o.return}while(o!==null)}Bp(t)}catch(k){n=k,ae===t&&t!==null&&(ae=t=t.return);continue}break}while(1)}function Ap(){var e=ho.current;return ho.current=vo,e===null?vo:e}function ys(){(se===0||se===3||se===2)&&(se=4),de===null||!(vt&268435455)&&!(Ro&268435455)||Mn(de,fe)}function wo(e,n){var t=$;$|=2;var r=Ap();(de!==e||fe!==n)&&(fn=null,ut(e,n));do try{ih();break}catch(a){Fp(e,a)}while(1);if(es(),$=t,ho.current=r,ae!==null)throw Error(j(261));return de=null,fe=0,se}function ih(){for(;ae!==null;)$p(ae)}function lh(){for(;ae!==null&&!Nm();)$p(ae)}function $p(e){var n=Kp(e.alternate,e,Me);e.memoizedProps=e.pendingProps,n===null?Bp(e):ae=n,fs.current=null}function Bp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=eh(t,n),t!==null){t.flags&=32767,ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ae=null;return}}else if(t=Jv(t,n,Me),t!==null){ae=t;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=e}while(n!==null);se===0&&(se=5)}function at(e,n,t){var r=K,a=Ke.transition;try{Ke.transition=null,K=1,sh(e,n,t,r)}finally{Ke.transition=a,K=r}return null}function sh(e,n,t,r){do Yt();while(Dn!==null);if($&6)throw Error(j(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Hm(e,o),e===de&&(ae=de=null,fe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ta||(Ta=!0,Vp(Ja,function(){return Yt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var i=K;K=1;var l=$;$|=4,fs.current=null,th(e,t),Lp(t,e),Iv(qi),no=!!Gi,qi=Gi=null,e.current=t,rh(t),Mm(),$=l,K=i,Ke.transition=o}else e.current=t;if(Ta&&(Ta=!1,Dn=e,yo=a),o=e.pendingLanes,o===0&&(Kn=null),Dm(t.stateNode),Ie(e,re()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(go)throw go=!1,e=gl,gl=null,e;return yo&1&&e.tag!==0&&Yt(),o=e.pendingLanes,o&1?e===yl?Mr++:(Mr=0,yl=e):Mr=0,qn(),null}function Yt(){if(Dn!==null){var e=xd(yo),n=Ke.transition,t=K;try{if(Ke.transition=null,K=16>e?16:e,Dn===null)var r=!1;else{if(e=Dn,Dn=null,yo=0,$&6)throw Error(j(331));var a=$;for($|=4,O=e.current;O!==null;){var o=O,i=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:_r(8,c,o)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var v=c.sibling,h=c.return;if(Np(c),c===u){O=null;break}if(v!==null){v.return=h,O=v;break}O=h}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}O=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,O=i;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_r(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,O=f;break e}O=o.return}}var p=e.current;for(O=p;O!==null;){i=O;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,O=m;else e:for(i=p;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mo(9,l)}}catch(k){ne(l,l.return,k)}if(l===i){O=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,O=w;break e}O=l.return}}if($=a,qn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{K=t,Ke.transition=n}}return!1}function dc(e,n,t){n=Jt(t,n),n=kp(e,n,1),e=Hn(e,n,1),n=ke(),e!==null&&(ia(e,1,n),Ie(e,n))}function ne(e,n,t){if(e.tag===3)dc(e,e,t);else for(;n!==null;){if(n.tag===3){dc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=Jt(t,e),e=bp(n,e,1),n=Hn(n,e,1),e=ke(),n!==null&&(ia(n,1,e),Ie(n,e));break}}n=n.return}}function uh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ke(),e.pingedLanes|=e.suspendedLanes&t,de===e&&(fe&t)===t&&(se===4||se===3&&(fe&130023424)===fe&&500>re()-vs?ut(e,0):ms|=t),Ie(e,n)}function Hp(e,n){n===0&&(e.mode&1?(n=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):n=1);var t=ke();e=Cn(e,n),e!==null&&(ia(e,n,t),Ie(e,t))}function ch(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Hp(e,t)}function dh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(n),Hp(e,t)}var Kp;Kp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||je.current)Ee=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ee=!1,Zv(e,n,t);Ee=!!(e.flags&131072)}else Ee=!1,G&&n.flags&1048576&&Yd(n,so,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Va(e,n),e=n.pendingProps;var a=Qt(n,ye.current);Ut(n,t),a=ss(null,n,r,e,a,t);var o=us();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Pe(r)?(o=!0,io(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,rs(n),a.updater=_o,n.stateNode=a,a._reactInternals=n,il(n,r,e,t),n=ul(null,n,r,!0,o,t)):(n.tag=0,G&&o&&Gl(n),xe(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Va(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=fh(r),e=Ge(r,e),a){case 0:n=sl(null,n,r,e,t);break e;case 1:n=nc(null,n,r,e,t);break e;case 11:n=Ju(null,n,r,e,t);break e;case 14:n=ec(null,n,r,Ge(r.type,e),t);break e}throw Error(j(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),sl(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),nc(e,n,r,a,t);case 3:e:{if(jp(n),e===null)throw Error(j(387));r=n.pendingProps,o=n.memoizedState,a=o.element,Gd(e,n),po(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=Jt(Error(j(423)),n),n=tc(e,n,r,t,a);break e}else if(r!==a){a=Jt(Error(j(424)),n),n=tc(e,n,r,t,a);break e}else for(Le=Bn(n.stateNode.containerInfo.firstChild),De=n,G=!0,Ze=null,t=ep(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gt(),r===a){n=Sn(e,n,t);break e}xe(e,n,r,t)}n=n.child}return n;case 5:return np(n),e===null&&rl(n),r=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,Zi(r,a)?i=null:o!==null&&Zi(r,o)&&(n.flags|=32),Ep(e,n),xe(e,n,i,t),n.child;case 6:return e===null&&rl(n),null;case 13:return Pp(e,n,t);case 4:return as(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qt(n,null,r,t):xe(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),Ju(e,n,r,a,t);case 7:return xe(e,n,n.pendingProps,t),n.child;case 8:return xe(e,n,n.pendingProps.children,t),n.child;case 12:return xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,o=n.memoizedProps,i=a.value,U(uo,r._currentValue),r._currentValue=i,o!==null)if(rn(o.value,i)){if(o.children===a.children&&!je.current){n=Sn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=wn(-1,t&-t),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),al(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(j(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),al(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}xe(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Ut(n,t),a=Ve(a),r=r(a),n.flags|=1,xe(e,n,r,t),n.child;case 14:return r=n.type,a=Ge(r,n.pendingProps),a=Ge(r.type,a),ec(e,n,r,a,t);case 15:return Cp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:Ge(r,a),Va(e,n),n.tag=1,Pe(r)?(e=!0,io(n)):e=!1,Ut(n,t),Zd(n,r,a),il(n,r,a,t),ul(null,n,r,!0,e,t);case 19:return Ip(e,n,t);case 22:return Sp(e,n,t)}throw Error(j(156,n.tag))};function Vp(e,n){return hd(e,n)}function ph(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,n,t,r){return new ph(e,n,t,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fh(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fl)return 11;if(e===Al)return 14}return 2}function Un(e,n){var t=e.alternate;return t===null?(t=He(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wa(e,n,t,r,a,o){var i=2;if(r=e,typeof e=="function")ws(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ot:return ct(t.children,a,o,n);case zl:i=8,a|=8;break;case Ti:return e=He(12,t,n,a|2),e.elementType=Ti,e.lanes=o,e;case _i:return e=He(13,t,n,a),e.elementType=_i,e.lanes=o,e;case Ni:return e=He(19,t,n,a),e.elementType=Ni,e.lanes=o,e;case Jc:return Lo(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qc:i=10;break e;case Zc:i=9;break e;case Fl:i=11;break e;case Al:i=14;break e;case On:i=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return n=He(i,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function ct(e,n,t,r){return e=He(7,e,r,n),e.lanes=t,e}function Lo(e,n,t,r){return e=He(22,e,r,n),e.elementType=Jc,e.lanes=t,e.stateNode={isHidden:!1},e}function wi(e,n,t){return e=He(6,e,null,n),e.lanes=t,e}function xi(e,n,t){return n=He(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function mh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ei(0),this.expirationTimes=ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ei(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function xs(e,n,t,r,a,o,i,l,s){return e=new mh(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=He(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},rs(o),e}function vh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Up(e){if(!e)return Wn;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(j(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(j(171))}if(e.tag===1){var t=e.type;if(Pe(t))return Vd(e,t,n)}return n}function Yp(e,n,t,r,a,o,i,l,s){return e=xs(t,r,!0,e,a,o,i,l,s),e.context=Up(null),t=e.current,r=ke(),a=Vn(t),o=wn(r,a),o.callback=n??null,Hn(t,o,a),e.current.lanes=a,ia(e,a,r),Ie(e,r),e}function Do(e,n,t,r){var a=n.current,o=ke(),i=Vn(a);return t=Up(t),n.context===null?n.context=t:n.pendingContext=t,n=wn(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Hn(a,n,i),e!==null&&(tn(e,a,i,o),Ba(e,a,i)),i}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ks(e,n){pc(e,n),(e=e.alternate)&&pc(e,n)}function hh(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}zo.prototype.render=bs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(j(409));Do(e,n,null,null)};zo.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){Do(null,e,null,null)}),n[bn]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Nn.length&&n!==0&&n<Nn[t].priority;t++);Nn.splice(t,0,e),t===0&&Ed(e)}};function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function gh(e,n,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=xo(i);o.call(u)}}var i=Yp(n,r,e,0,null,!1,!1,"",fc);return e._reactRootContainer=i,e[bn]=i.current,Yr(e.nodeType===8?e.parentNode:e),ht(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=xo(s);l.call(u)}}var s=xs(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=s,e[bn]=s.current,Yr(e.nodeType===8?e.parentNode:e),ht(function(){Do(n,s,t,r)}),s}function Ao(e,n,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var s=xo(i);l.call(s)}}Do(n,i,e,a)}else i=gh(t,n,e,a,r);return xo(i)}kd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=br(n.pendingLanes);t!==0&&(Hl(n,t|1),Ie(n,re()),!($&6)&&(er=re()+500,qn()))}break;case 13:ht(function(){var r=Cn(e,1);if(r!==null){var a=ke();tn(r,e,1,a)}}),ks(e,1)}};Kl=function(e){if(e.tag===13){var n=Cn(e,134217728);if(n!==null){var t=ke();tn(n,e,134217728,t)}ks(e,134217728)}};bd=function(e){if(e.tag===13){var n=Vn(e),t=Cn(e,n);if(t!==null){var r=ke();tn(t,e,n,r)}ks(e,n)}};Cd=function(){return K};Sd=function(e,n){var t=K;try{return K=e,n()}finally{K=t}};Hi=function(e,n,t){switch(n){case"input":if(Li(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Oo(r);if(!a)throw Error(j(90));nd(r),Li(r,a)}}}break;case"textarea":rd(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};cd=hs;dd=ht;var yh={usingClientEntryPoint:!1,Events:[sa,Mt,Oo,sd,ud,hs]},hr={findFiberByHostInstance:ot,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wh={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=md(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{Eo=_a.inject(wh),sn=_a}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yh;Fe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cs(n))throw Error(j(200));return vh(e,n,null,t)};Fe.createRoot=function(e,n){if(!Cs(e))throw Error(j(299));var t=!1,r="",a=Wp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=xs(e,1,!1,null,null,t,!1,r,a),e[bn]=n.current,Yr(e.nodeType===8?e.parentNode:e),new bs(n)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=md(n),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return ht(e)};Fe.hydrate=function(e,n,t){if(!Fo(n))throw Error(j(200));return Ao(null,e,n,!0,t)};Fe.hydrateRoot=function(e,n,t){if(!Cs(e))throw Error(j(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",i=Wp;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=Yp(n,null,e,1,t??null,a,!1,o,i),e[bn]=n.current,Yr(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new zo(n)};Fe.render=function(e,n,t){if(!Fo(n))throw Error(j(200));return Ao(null,e,n,!1,t)};Fe.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(j(40));return e._reactRootContainer?(ht(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};Fe.unstable_batchedUpdates=hs;Fe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Fo(t))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ao(e,n,t,!1,r)};Fe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=Fe})(hm);const $t=Ac(Qa);var mc=Qa;Pi.createRoot=mc.createRoot,Pi.hydrateRoot=mc.hydrateRoot;var kl={},xh={get exports(){return kl},set exports(e){kl=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var r=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var i=typeof o;if(i==="string"||i==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=t.apply(null,o);l&&r.push(l)}}else if(i==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var s in o)n.call(o,s)&&o[s]&&r.push(s)}}}return r.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(xh);const oe=kl;var bl={},kh={get exports(){return bl},set exports(e){bl=e}},ko={},bh={get exports(){return ko},set exports(e){ko=e}};(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;function t(r){function a(i,l,s,u,c,d){var v=u||"<<anonymous>>",h=d||s;if(l[s]==null)return i?new Error("Required "+c+" `"+h+"` was not specified "+("in `"+v+"`.")):null;for(var g=arguments.length,x=Array(g>6?g-6:0),b=6;b<g;b++)x[b-6]=arguments[b];return r.apply(void 0,[l,s,v,c,h].concat(x))}var o=a.bind(null,!1);return o.isRequired=a.bind(null,!0),o}e.exports=n.default})(bh,ko);(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var t=ko,r=a(t);function a(i){return i&&i.__esModule?i:{default:i}}function o(){for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];function u(){for(var c=arguments.length,d=Array(c),v=0;v<c;v++)d[v]=arguments[v];var h=null;return l.forEach(function(g){if(h==null){var x=g.apply(void 0,d);x!=null&&(h=x)}}),h}return(0,r.default)(u)}e.exports=n.default})(kh,bl);function Cl(){return Cl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Cl.apply(this,arguments)}function Xp(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function vc(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Ch(e){var n=Sh(e,"string");return typeof n=="symbol"?n:String(n)}function Sh(e,n){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Qp(e,n,t){var r=y.useRef(e!==void 0),a=y.useState(n),o=a[0],i=a[1],l=e!==void 0,s=r.current;return r.current=l,!l&&s&&o!==n&&i(n),[l?e:o,y.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),v=1;v<c;v++)d[v-1]=arguments[v];t&&t.apply(void 0,[u].concat(d)),i(u)},[t])]}function Ss(e,n){return Object.keys(n).reduce(function(t,r){var a,o=t,i=o[vc(r)],l=o[r],s=Xp(o,[vc(r),r].map(Ch)),u=n[r],c=Qp(l,i,e[u]),d=c[0],v=c[1];return Cl({},s,(a={},a[r]=d,a[u]=v,a))},e)}function Sl(e,n){return Sl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Sl(e,n)}function Eh(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Sl(e,n)}var jh=Function.prototype.bind.call(Function.prototype.call,[].slice);function vn(e,n){return jh(e.querySelectorAll(n))}function Gp(){var e=y.useReducer(function(t){return!t},!1),n=e[1];return n}var hc=function(n){return!n||typeof n=="function"?n:function(t){n.current=t}};function Ph(e,n){var t=hc(e),r=hc(n);return function(a){t&&t(a),r&&r(a)}}function $o(e,n){return y.useMemo(function(){return Ph(e,n)},[e,n])}const Bo=y.createContext(null);Bo.displayName="NavContext";const gt=y.createContext(null),na=(e,n=null)=>e!=null?String(e):n||null,qp=y.createContext(null),Ih="data-rr-ui-",Oh="rrUi";function sr(e){return`${Ih}${e}`}function Th(e){return`${Oh}${e}`}function _h(e){var n=y.useRef(e);return y.useEffect(function(){n.current=e},[e]),n}function ce(e){var n=_h(e);return y.useCallback(function(){return n.current&&n.current.apply(n,arguments)},[n])}const Nh=["as","disabled"];function Mh(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Rh(e){return!e||e.trim()==="#"}function Es({tagName:e,disabled:n,href:t,target:r,rel:a,role:o,onClick:i,tabIndex:l=0,type:s}){e||(t!=null||r!=null||a!=null?e="a":e="button");const u={tagName:e};if(e==="button")return[{type:s||"button",disabled:n},u];const c=v=>{if((n||e==="a"&&Rh(t))&&v.preventDefault(),n){v.stopPropagation();return}i?.(v)},d=v=>{v.key===" "&&(v.preventDefault(),c(v))};return e==="a"&&(t||(t="#"),n&&(t=void 0)),[{role:o??"button",disabled:void 0,tabIndex:n?void 0:l,href:t,target:e==="a"?r:void 0,"aria-disabled":n||void 0,rel:e==="a"?a:void 0,onClick:c,onKeyDown:d},u]}const js=y.forwardRef((e,n)=>{let{as:t,disabled:r}=e,a=Mh(e,Nh);const[o,{tagName:i}]=Es(Object.assign({tagName:t,disabled:r},a));return I(i,Object.assign({},a,o,{ref:n}))});js.displayName="Button";const Lh=["as","active","eventKey"];function Dh(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Zp({key:e,onClick:n,active:t,id:r,role:a,disabled:o}){const i=y.useContext(gt),l=y.useContext(Bo),s=y.useContext(qp);let u=t;const c={role:a};if(l){!a&&l.role==="tablist"&&(c.role="tab");const d=l.getControllerId(e??null),v=l.getControlledId(e??null);c[sr("event-key")]=e,c.id=d||r,u=t==null&&e!=null?l.activeKey===e:t,(u||!(s!=null&&s.unmountOnExit)&&!(s!=null&&s.mountOnEnter))&&(c["aria-controls"]=v)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),o&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=ce(d=>{o||(n?.(d),e!=null&&i&&!d.isPropagationStopped()&&i(e,d))}),[c,{isActive:u}]}const Jp=y.forwardRef((e,n)=>{let{as:t=js,active:r,eventKey:a}=e,o=Dh(e,Lh);const[i,l]=Zp(Object.assign({key:na(a,o.href),active:r},o));return i[sr("active")]=l.isActive,I(t,Object.assign({},o,i,{ref:n}))});Jp.displayName="NavItem";const zh=["as","onSelect","activeKey","role","onKeyDown"];function Fh(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}const gc=()=>{},yc=sr("event-key"),ef=y.forwardRef((e,n)=>{let{as:t="div",onSelect:r,activeKey:a,role:o,onKeyDown:i}=e,l=Fh(e,zh);const s=Gp(),u=y.useRef(!1),c=y.useContext(gt),d=y.useContext(qp);let v,h;d&&(o=o||"tablist",a=d.activeKey,v=d.getControlledId,h=d.getControllerId);const g=y.useRef(null),x=m=>{const w=g.current;if(!w)return null;const k=vn(w,`[${yc}]:not([aria-disabled=true])`),C=w.querySelector("[aria-selected=true]");if(!C||C!==document.activeElement)return null;const S=k.indexOf(C);if(S===-1)return null;let E=S+m;return E>=k.length&&(E=0),E<0&&(E=k.length-1),k[E]},b=(m,w)=>{m!=null&&(r?.(m,w),c?.(m,w))},f=m=>{if(i?.(m),!d)return;let w;switch(m.key){case"ArrowLeft":case"ArrowUp":w=x(-1);break;case"ArrowRight":case"ArrowDown":w=x(1);break;default:return}w&&(m.preventDefault(),b(w.dataset[Th("EventKey")]||null,m),u.current=!0,s())};y.useEffect(()=>{if(g.current&&u.current){const m=g.current.querySelector(`[${yc}][aria-selected=true]`);m?.focus()}u.current=!1});const p=$o(n,g);return I(gt.Provider,{value:b,children:I(Bo.Provider,{value:{role:o,activeKey:na(a),getControlledId:v||gc,getControllerId:h||gc},children:I(t,Object.assign({},l,{onKeyDown:f,ref:p,role:o}))})})});ef.displayName="Nav";const Ah=Object.assign(ef,{Item:Jp}),$h=["xxl","xl","lg","md","sm","xs"],Bh="xs",nf=y.createContext({prefixes:{},breakpoints:$h,minBreakpoint:Bh});function we(e,n){const{prefixes:t}=y.useContext(nf);return e||t[n]||n}function Hh(){const{dir:e}=y.useContext(nf);return e==="rtl"}const Zn=y.createContext(null);Zn.displayName="NavbarContext";const tf=y.createContext(null);tf.displayName="CardHeaderContext";var Kh=/-(.)/g;function Vh(e){return e.replace(Kh,function(n,t){return t.toUpperCase()})}const Uh=e=>e[0].toUpperCase()+Vh(e).slice(1);function kt(e,{displayName:n=Uh(e),Component:t,defaultProps:r}={}){const a=y.forwardRef(({className:o,bsPrefix:i,as:l=t||"div",...s},u)=>{const c=we(i,e);return I(l,{ref:u,className:oe(o,c),...s})});return a.defaultProps=r,a.displayName=n,a}const Yh=kt("nav-item");function Wh(){return y.useState(null)}function Xh(e,n,t,r){r===void 0&&(r=!1);var a=ce(t);y.useEffect(function(){var o=typeof e=="function"?e():e;return o.addEventListener(n,a,r),function(){return o.removeEventListener(n,a,r)}},[e])}function rf(){var e=y.useRef(!0),n=y.useRef(function(){return e.current});return y.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),n.current}function af(e){var n=y.useRef(null);return y.useEffect(function(){n.current=e}),n.current}var Qh=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Gh=typeof document<"u";const of=Gh||Qh?y.useLayoutEffect:y.useEffect,qh=["onKeyDown"];function Zh(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Jh(e){return!e||e.trim()==="#"}const Ps=y.forwardRef((e,n)=>{let{onKeyDown:t}=e,r=Zh(e,qh);const[a]=Es(Object.assign({tagName:"a"},r)),o=ce(i=>{a.onKeyDown(i),t?.(i)});return Jh(r.href)||r.role==="button"?I("a",Object.assign({ref:n},r,a,{onKeyDown:o})):I("a",Object.assign({ref:n},r,{onKeyDown:t}))});Ps.displayName="Anchor";const eg={disabled:!1},Ho=y.forwardRef(({bsPrefix:e,className:n,as:t=Ps,active:r,eventKey:a,...o},i)=>{e=we(e,"nav-link");const[l,s]=Zp({key:na(a,o.href),active:r,...o});return I(t,{...o,...l,ref:i,className:oe(n,e,o.disabled&&"disabled",s.isActive&&"active")})});Ho.displayName="NavLink";Ho.defaultProps=eg;const ng={justify:!1,fill:!1},Is=y.forwardRef((e,n)=>{const{as:t="div",bsPrefix:r,variant:a,fill:o,justify:i,navbar:l,navbarScroll:s,className:u,activeKey:c,...d}=Ss(e,{activeKey:"onSelect"}),v=we(r,"nav");let h,g,x=!1;const b=y.useContext(Zn),f=y.useContext(tf);return b?(h=b.bsPrefix,x=l??!0):f&&({cardHeaderBsPrefix:g}=f),I(Ah,{as:t,ref:n,activeKey:c,className:oe(u,{[v]:!x,[`${h}-nav`]:x,[`${h}-nav-scroll`]:x&&s,[`${g}-${a}`]:!!g,[`${v}-${a}`]:!!a,[`${v}-fill`]:o,[`${v}-justified`]:i}),...d})});Is.displayName="Nav";Is.defaultProps=ng;const Na=Object.assign(Is,{Item:Yh,Link:Ho}),lf=y.forwardRef(({bsPrefix:e,className:n,as:t,...r},a)=>{e=we(e,"navbar-brand");const o=t||(r.href?"a":"span");return I(o,{...r,ref:a,className:oe(n,e)})});lf.displayName="NavbarBrand";function Ko(e){return e&&e.ownerDocument||document}function tg(e){var n=Ko(e);return n&&n.defaultView||window}function rg(e,n){return tg(e).getComputedStyle(e,n)}var ag=/([A-Z])/g;function og(e){return e.replace(ag,"-$1").toLowerCase()}var ig=/^ms-/;function Ma(e){return og(e).replace(ig,"-ms-")}var lg=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function sg(e){return!!(e&&lg.test(e))}function xn(e,n){var t="",r="";if(typeof n=="string")return e.style.getPropertyValue(Ma(n))||rg(e).getPropertyValue(Ma(n));Object.keys(n).forEach(function(a){var o=n[a];!o&&o!==0?e.style.removeProperty(Ma(a)):sg(a)?r+=a+"("+o+") ":t+=Ma(a)+": "+o+";"}),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t}var Re={},ug={get exports(){return Re},set exports(e){Re=e}},cg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dg=cg,pg=dg;function sf(){}function uf(){}uf.resetWarningCache=sf;var fg=function(){function e(r,a,o,i,l,s){if(s!==pg){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:uf,resetWarningCache:sf};return t.PropTypes=t,t};ug.exports=fg();const wc={disabled:!1},cf=en.createContext(null);var mg=function(n){return n.scrollTop},Sr="unmounted",_n="exited",Je="entering",hn="entered",ta="exiting",Pn=function(e){Eh(n,e);function n(r,a){var o;o=e.call(this,r,a)||this;var i=a,l=i&&!i.isMounting?r.enter:r.appear,s;return o.appearStatus=null,r.in?l?(s=_n,o.appearStatus=Je):s=hn:r.unmountOnExit||r.mountOnEnter?s=Sr:s=_n,o.state={status:s},o.nextCallback=null,o}n.getDerivedStateFromProps=function(a,o){var i=a.in;return i&&o.status===Sr?{status:_n}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(a){var o=null;if(a!==this.props){var i=this.state.status;this.props.in?i!==Je&&i!==hn&&(o=Je):(i===Je||i===hn)&&(o=ta)}this.updateStatus(!1,o)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var a=this.props.timeout,o,i,l;return o=i=l=a,a!=null&&typeof a!="number"&&(o=a.exit,i=a.enter,l=a.appear!==void 0?a.appear:i),{exit:o,enter:i,appear:l}},t.updateStatus=function(a,o){if(a===void 0&&(a=!1),o!==null)if(this.cancelNextCallback(),o===Je){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:$t.findDOMNode(this);i&&mg(i)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===_n&&this.setState({status:Sr})},t.performEnter=function(a){var o=this,i=this.props.enter,l=this.context?this.context.isMounting:a,s=this.props.nodeRef?[l]:[$t.findDOMNode(this),l],u=s[0],c=s[1],d=this.getTimeouts(),v=l?d.appear:d.enter;if(!a&&!i||wc.disabled){this.safeSetState({status:hn},function(){o.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Je},function(){o.props.onEntering(u,c),o.onTransitionEnd(v,function(){o.safeSetState({status:hn},function(){o.props.onEntered(u,c)})})})},t.performExit=function(){var a=this,o=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:$t.findDOMNode(this);if(!o||wc.disabled){this.safeSetState({status:_n},function(){a.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:ta},function(){a.props.onExiting(l),a.onTransitionEnd(i.exit,function(){a.safeSetState({status:_n},function(){a.props.onExited(l)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(a,o){o=this.setNextCallback(o),this.setState(a,o)},t.setNextCallback=function(a){var o=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,o.nextCallback=null,a(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},t.onTransitionEnd=function(a,o){this.setNextCallback(o);var i=this.props.nodeRef?this.props.nodeRef.current:$t.findDOMNode(this),l=a==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=s[0],c=s[1];this.props.addEndListener(u,c)}a!=null&&setTimeout(this.nextCallback,a)},t.render=function(){var a=this.state.status;if(a===Sr)return null;var o=this.props,i=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var l=Xp(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return en.createElement(cf.Provider,{value:null},typeof i=="function"?i(a,l):en.cloneElement(en.Children.only(i),l))},n}(en.Component);Pn.contextType=cf;Pn.propTypes={};function St(){}Pn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:St,onEntering:St,onEntered:St,onExit:St,onExiting:St,onExited:St};Pn.UNMOUNTED=Sr;Pn.EXITED=_n;Pn.ENTERING=Je;Pn.ENTERED=hn;Pn.EXITING=ta;const Vo=!!(typeof window<"u"&&window.document&&window.document.createElement);var El=!1,jl=!1;try{var ki={get passive(){return El=!0},get once(){return jl=El=!0}};Vo&&(window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,!0))}catch{}function df(e,n,t,r){if(r&&typeof r!="boolean"&&!jl){var a=r.once,o=r.capture,i=t;!jl&&a&&(i=t.__once||function l(s){this.removeEventListener(n,l,o),t.call(this,s)},t.__once=i),e.addEventListener(n,i,El?r:o)}e.addEventListener(n,t,r)}function vg(e,n,t,r){var a=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(n,t,a),t.__once&&e.removeEventListener(n,t.__once,a)}function zn(e,n,t,r){return df(e,n,t,r),function(){vg(e,n,t,r)}}function hg(e,n,t,r){if(t===void 0&&(t=!1),r===void 0&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(n,t,r),e.dispatchEvent(a)}}function gg(e){var n=xn(e,"transitionDuration")||"",t=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*t}function yg(e,n,t){t===void 0&&(t=5);var r=!1,a=setTimeout(function(){r||hg(e,"transitionend",!0)},n+t),o=zn(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(a),o()}}function wg(e,n,t,r){t==null&&(t=gg(e)||0);var a=yg(e,t,r),o=zn(e,"transitionend",n);return function(){a(),o()}}function xc(e,n){const t=xn(e,n)||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function Os(e,n){const t=xc(e,"transitionDuration"),r=xc(e,"transitionDelay"),a=wg(e,o=>{o.target===e&&(a(),n(o))},t+r)}function gr(...e){return e.filter(n=>n!=null).reduce((n,t)=>{if(typeof t!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?t:function(...a){n.apply(this,a),t.apply(this,a)}},null)}function pf(e){e.offsetHeight}function xg(e){return e&&"setState"in e?$t.findDOMNode(e):e??null}const Ts=en.forwardRef(({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:a,onExited:o,addEndListener:i,children:l,childRef:s,...u},c)=>{const d=y.useRef(null),v=$o(d,s),h=C=>{v(xg(C))},g=C=>S=>{C&&d.current&&C(d.current,S)},x=y.useCallback(g(e),[e]),b=y.useCallback(g(n),[n]),f=y.useCallback(g(t),[t]),p=y.useCallback(g(r),[r]),m=y.useCallback(g(a),[a]),w=y.useCallback(g(o),[o]),k=y.useCallback(g(i),[i]);return I(Pn,{ref:c,...u,onEnter:x,onEntered:f,onEntering:b,onExit:p,onExited:w,onExiting:m,addEndListener:k,nodeRef:d,children:typeof l=="function"?(C,S)=>l(C,{...S,ref:h}):en.cloneElement(l,{ref:h})})}),kg={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function ff(e,n){const t=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=n[t],a=kg[e];return r+parseInt(xn(n,a[0]),10)+parseInt(xn(n,a[1]),10)}const bg={[_n]:"collapse",[ta]:"collapsing",[Je]:"collapsing",[hn]:"collapse show"},Cg={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:ff},mf=en.forwardRef(({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:a,className:o,children:i,dimension:l="height",getDimensionValue:s=ff,...u},c)=>{const d=typeof l=="function"?l():l,v=y.useMemo(()=>gr(f=>{f.style[d]="0"},e),[d,e]),h=y.useMemo(()=>gr(f=>{const p=`scroll${d[0].toUpperCase()}${d.slice(1)}`;f.style[d]=`${f[p]}px`},n),[d,n]),g=y.useMemo(()=>gr(f=>{f.style[d]=null},t),[d,t]),x=y.useMemo(()=>gr(f=>{f.style[d]=`${s(d,f)}px`,pf(f)},r),[r,s,d]),b=y.useMemo(()=>gr(f=>{f.style[d]=null},a),[d,a]);return I(Ts,{ref:c,addEndListener:Os,...u,"aria-expanded":u.role?u.in:null,onEnter:v,onEntering:h,onEntered:g,onExit:x,onExiting:b,childRef:i.ref,children:(f,p)=>en.cloneElement(i,{...p,className:oe(o,i.props.className,bg[f],d==="width"&&"collapse-horizontal")})})});mf.defaultProps=Cg;const vf=y.forwardRef(({children:e,bsPrefix:n,...t},r)=>{n=we(n,"navbar-collapse");const a=y.useContext(Zn);return I(mf,{in:!!(a&&a.expanded),...t,children:I("div",{ref:r,className:n,children:e})})});vf.displayName="NavbarCollapse";const Sg={label:"Toggle navigation"},_s=y.forwardRef(({bsPrefix:e,className:n,children:t,label:r,as:a="button",onClick:o,...i},l)=>{e=we(e,"navbar-toggler");const{onToggle:s,expanded:u}=y.useContext(Zn)||{},c=ce(d=>{o&&o(d),s&&s()});return a==="button"&&(i.type="button"),I(a,{...i,ref:l,onClick:c,"aria-label":r,className:oe(n,e,!u&&"collapsed"),children:t||I("span",{className:`${e}-icon`})})});_s.displayName="NavbarToggle";_s.defaultProps=Sg;var Pl=new WeakMap,kc=function(n,t){if(!(!n||!t)){var r=Pl.get(t)||new Map;Pl.set(t,r);var a=r.get(n);return a||(a=t.matchMedia(n),a.refCount=0,r.set(a.media,a)),a}};function Eg(e,n){n===void 0&&(n=typeof window>"u"?void 0:window);var t=kc(e,n),r=y.useState(function(){return t?t.matches:!1}),a=r[0],o=r[1];return of(function(){var i=kc(e,n);if(!i)return o(!1);var l=Pl.get(n),s=function(){o(i.matches)};return i.refCount++,i.addListener(s),s(),function(){i.removeListener(s),i.refCount--,i.refCount<=0&&l?.delete(i.media),i=void 0}},[e]),a}function jg(e){var n=Object.keys(e);function t(l,s){return l===s?s:l?l+" and "+s:s}function r(l){return n[Math.min(n.indexOf(l)+1,n.length-1)]}function a(l){var s=r(l),u=e[s];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function o(l){var s=e[l];return typeof s=="number"&&(s=s+"px"),"(min-width: "+s+")"}function i(l,s,u){var c;if(typeof l=="object")c=l,u=s,s=!0;else{var d;s=s||!0,c=(d={},d[l]=s,d)}var v=y.useMemo(function(){return Object.entries(c).reduce(function(h,g){var x=g[0],b=g[1];return(b==="up"||b===!0)&&(h=t(h,o(x))),(b==="down"||b===!0)&&(h=t(h,a(x))),h},"")},[JSON.stringify(c)]);return Eg(v,u)}return i}var Pg=jg({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function bi(e){e===void 0&&(e=Ko());try{var n=e.activeElement;return!n||!n.nodeName?null:n}catch{return e.body}}function bo(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}function Ig(e){var n=y.useRef(e);return n.current=e,n}function Og(e){var n=Ig(e);y.useEffect(function(){return function(){return n.current()}},[])}function Tg(e=document){const n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}const bc=sr("modal-open");class Ns{constructor({ownerDocument:n,handleContainerOverflow:t=!0,isRTL:r=!1}={}){this.handleContainerOverflow=t,this.isRTL=r,this.modals=[],this.ownerDocument=n}getScrollbarWidth(){return Tg(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(n){}removeModalAttributes(n){}setContainerStyle(n){const t={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();n.style={overflow:a.style.overflow,[r]:a.style[r]},n.scrollBarWidth&&(t[r]=`${parseInt(xn(a,r)||"0",10)+n.scrollBarWidth}px`),a.setAttribute(bc,""),xn(a,t)}reset(){[...this.modals].forEach(n=>this.remove(n))}removeContainerStyle(n){const t=this.getElement();t.removeAttribute(bc),Object.assign(t.style,n.style)}add(n){let t=this.modals.indexOf(n);return t!==-1||(t=this.modals.length,this.modals.push(n),this.setModalAttributes(n),t!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t}remove(n){const t=this.modals.indexOf(n);t!==-1&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}isTopModal(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}const hf=y.createContext(Vo?window:void 0);hf.Provider;function Ms(){return y.useContext(hf)}const Ci=(e,n)=>Vo?e==null?(n||Ko()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function _g(e,n){const t=Ms(),[r,a]=y.useState(()=>Ci(e,t?.document));if(!r){const o=Ci(e);o&&a(o)}return y.useEffect(()=>{n&&r&&n(r)},[n,r]),y.useEffect(()=>{const o=Ci(e);o!==r&&a(o)},[e,r]),r}const Ng=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Mg(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}let Si;function Rg(e){return Si||(Si=new Ns({ownerDocument:e?.document})),Si}function Lg(e){const n=Ms(),t=e||Rg(n),r=y.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>t.add(r.current),remove:()=>t.remove(r.current),isTopModal:()=>t.isTopModal(r.current),setDialogRef:y.useCallback(a=>{r.current.dialog=a},[]),setBackdropRef:y.useCallback(a=>{r.current.backdrop=a},[])})}const gf=y.forwardRef((e,n)=>{let{show:t=!1,role:r="dialog",className:a,style:o,children:i,backdrop:l=!0,keyboard:s=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:d,backdropTransition:v,autoFocus:h=!0,enforceFocus:g=!0,restoreFocus:x=!0,restoreFocusOptions:b,renderDialog:f,renderBackdrop:p=V=>I("div",Object.assign({},V)),manager:m,container:w,onShow:k,onHide:C=()=>{},onExit:S,onExited:E,onExiting:R,onEnter:T,onEntering:M,onEntered:L}=e,D=Mg(e,Ng);const H=_g(w),F=Lg(m),Q=rf(),ee=af(t),[P,N]=y.useState(!t),_=y.useRef(null);y.useImperativeHandle(n,()=>F,[F]),Vo&&!ee&&t&&(_.current=bi()),!d&&!t&&!P?N(!0):t&&P&&N(!1);const A=ce(()=>{if(F.add(),Ne.current=zn(document,"keydown",Y),te.current=zn(document,"focus",()=>setTimeout(_e),!0),k&&k(),h){const V=bi(document);F.dialog&&V&&!bo(F.dialog,V)&&(_.current=V,F.dialog.focus())}}),B=ce(()=>{if(F.remove(),Ne.current==null||Ne.current(),te.current==null||te.current(),x){var V;(V=_.current)==null||V.focus==null||V.focus(b),_.current=null}});y.useEffect(()=>{!t||!H||A()},[t,H,A]),y.useEffect(()=>{P&&B()},[P,B]),Og(()=>{B()});const _e=ce(()=>{if(!g||!Q()||!F.isTopModal())return;const V=bi();F.dialog&&V&&!bo(F.dialog,V)&&F.dialog.focus()}),ie=ce(V=>{V.target===V.currentTarget&&(u?.(V),l===!0&&C())}),Y=ce(V=>{s&&V.keyCode===27&&F.isTopModal()&&(c?.(V),V.defaultPrevented||C())}),te=y.useRef(),Ne=y.useRef(),pn=(...V)=>{N(!0),E?.(...V)},et=d;if(!H||!(t||et&&!P))return null;const fa=Object.assign({role:r,ref:F.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},D,{style:o,className:a,tabIndex:-1});let nt=f?f(fa):I("div",Object.assign({},fa,{children:y.cloneElement(i,{role:"document"})}));et&&(nt=I(et,{appear:!0,unmountOnExit:!0,in:!!t,onExit:S,onExiting:R,onExited:pn,onEnter:T,onEntering:M,onEntered:L,children:nt}));let bt=null;if(l){const V=v;bt=p({ref:F.setBackdropRef,onClick:ie}),V&&(bt=I(V,{appear:!0,in:!!t,children:bt}))}return I(Wt,{children:$t.createPortal(Rn(Wt,{children:[bt,nt]}),H)})});gf.displayName="Modal";const Dg=Object.assign(gf,{Manager:Ns}),zg={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Fg={[Je]:"show",[hn]:"show"},Rs=y.forwardRef(({className:e,children:n,transitionClasses:t={},...r},a)=>{const o=y.useCallback((i,l)=>{pf(i),r.onEnter==null||r.onEnter(i,l)},[r]);return I(Ts,{ref:a,addEndListener:Os,...r,onEnter:o,childRef:n.ref,children:(i,l)=>y.cloneElement(n,{...l,className:oe("fade",e,n.props.className,Fg[i],t[i])})})});Rs.defaultProps=zg;Rs.displayName="Fade";const Ag=kt("offcanvas-body"),$g={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Bg={[Je]:"show",[hn]:"show"},Ls=y.forwardRef(({bsPrefix:e,className:n,children:t,...r},a)=>(e=we(e,"offcanvas"),I(Ts,{ref:a,addEndListener:Os,...r,childRef:t.ref,children:(o,i)=>y.cloneElement(t,{...i,className:oe(n,t.props.className,(o===Je||o===ta)&&`${e}-toggling`,Bg[o])})})));Ls.defaultProps=$g;Ls.displayName="OffcanvasToggling";const yf=y.createContext({onHide(){}}),Hg={"aria-label":Re.string,onClick:Re.func,variant:Re.oneOf(["white"])},Kg={"aria-label":"Close"},Uo=y.forwardRef(({className:e,variant:n,...t},r)=>I("button",{ref:r,type:"button",className:oe("btn-close",n&&`btn-close-${n}`,e),...t}));Uo.displayName="CloseButton";Uo.propTypes=Hg;Uo.defaultProps=Kg;const Vg={closeLabel:"Close",closeButton:!1},wf=y.forwardRef(({closeLabel:e,closeVariant:n,closeButton:t,onHide:r,children:a,...o},i)=>{const l=y.useContext(yf),s=ce(()=>{l?.onHide(),r?.()});return Rn("div",{ref:i,...o,children:[a,t&&I(Uo,{"aria-label":e,variant:n,onClick:s})]})});wf.defaultProps=Vg;const Ug={closeLabel:"Close",closeButton:!1},Ds=y.forwardRef(({bsPrefix:e,className:n,...t},r)=>(e=we(e,"offcanvas-header"),I(wf,{ref:r,...t,className:oe(n,e)})));Ds.displayName="OffcanvasHeader";Ds.defaultProps=Ug;const Yg=e=>y.forwardRef((n,t)=>I("div",{...n,ref:t,className:oe(n.className,e)})),Wg=Yg("h5"),Xg=kt("offcanvas-title",{Component:Wg});function Qg(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function Gg(e,n){e.classList?e.classList.add(n):Qg(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function Cc(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function qg(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=Cc(e.className,n):e.setAttribute("class",Cc(e.className&&e.className.baseVal||"",n))}const Et={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class xf extends Ns{adjustAndStore(n,t,r){const a=t.style[n];t.dataset[n]=a,xn(t,{[n]:`${parseFloat(xn(t,n))+r}px`})}restore(n,t){const r=t.dataset[n];r!==void 0&&(delete t.dataset[n],xn(t,{[n]:r}))}setContainerStyle(n){super.setContainerStyle(n);const t=this.getElement();if(Gg(t,"modal-open"),!n.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";vn(t,Et.FIXED_CONTENT).forEach(o=>this.adjustAndStore(r,o,n.scrollBarWidth)),vn(t,Et.STICKY_CONTENT).forEach(o=>this.adjustAndStore(a,o,-n.scrollBarWidth)),vn(t,Et.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(a,o,n.scrollBarWidth))}removeContainerStyle(n){super.removeContainerStyle(n);const t=this.getElement();qg(t,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";vn(t,Et.FIXED_CONTENT).forEach(o=>this.restore(r,o)),vn(t,Et.STICKY_CONTENT).forEach(o=>this.restore(a,o)),vn(t,Et.NAVBAR_TOGGLER).forEach(o=>this.restore(a,o))}}let Ei;function Zg(e){return Ei||(Ei=new xf(e)),Ei}const Jg={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function ey(e){return I(Ls,{...e})}function ny(e){return I(Rs,{...e})}const zs=y.forwardRef(({bsPrefix:e,className:n,children:t,"aria-labelledby":r,placement:a,responsive:o,show:i,backdrop:l,keyboard:s,scroll:u,onEscapeKeyDown:c,onShow:d,onHide:v,container:h,autoFocus:g,enforceFocus:x,restoreFocus:b,restoreFocusOptions:f,onEntered:p,onExit:m,onExiting:w,onEnter:k,onEntering:C,onExited:S,backdropClassName:E,manager:R,renderStaticNode:T,...M},L)=>{const D=y.useRef();e=we(e,"offcanvas");const{onToggle:H}=y.useContext(Zn)||{},[F,Q]=y.useState(!1),ee=Pg(o||"xs","up");y.useEffect(()=>{Q(o?i&&!ee:i)},[i,o,ee]);const P=ce(()=>{H?.(),v?.()}),N=y.useMemo(()=>({onHide:P}),[P]);function _(){return R||(u?(D.current||(D.current=new xf({handleContainerOverflow:!1})),D.current):Zg())}const A=(Y,...te)=>{Y&&(Y.style.visibility="visible"),k?.(Y,...te)},B=(Y,...te)=>{Y&&(Y.style.visibility=""),S?.(...te)},_e=y.useCallback(Y=>I("div",{...Y,className:oe(`${e}-backdrop`,E)}),[E,e]),ie=Y=>I("div",{...Y,...M,className:oe(n,o?`${e}-${o}`:e,`${e}-${a}`),"aria-labelledby":r,children:t});return Rn(Wt,{children:[!F&&(o||T)&&ie({}),I(yf.Provider,{value:N,children:I(Dg,{show:F,ref:L,backdrop:l,container:h,keyboard:s,autoFocus:g,enforceFocus:x&&!u,restoreFocus:b,restoreFocusOptions:f,onEscapeKeyDown:c,onShow:d,onHide:P,onEnter:A,onEntering:C,onEntered:p,onExit:m,onExiting:w,onExited:B,manager:_(),transition:ey,backdropTransition:ny,renderBackdrop:_e,renderDialog:ie})})]})});zs.displayName="Offcanvas";zs.defaultProps=Jg;const ty=Object.assign(zs,{Body:Ag,Header:Ds,Title:Xg}),kf=y.forwardRef((e,n)=>{const t=y.useContext(Zn);return I(ty,{ref:n,show:!!(t!=null&&t.expanded),...e,renderStaticNode:!0})});kf.displayName="NavbarOffcanvas";const ry=kt("navbar-text",{Component:"span"}),ay={expand:!0,variant:"light",collapseOnSelect:!1},Fs=y.forwardRef((e,n)=>{const{bsPrefix:t,expand:r,variant:a,bg:o,fixed:i,sticky:l,className:s,as:u="nav",expanded:c,onToggle:d,onSelect:v,collapseOnSelect:h,...g}=Ss(e,{expanded:"onToggle"}),x=we(t,"navbar"),b=y.useCallback((...m)=>{v?.(...m),h&&c&&d?.(!1)},[v,h,c,d]);g.role===void 0&&u!=="nav"&&(g.role="navigation");let f=`${x}-expand`;typeof r=="string"&&(f=`${f}-${r}`);const p=y.useMemo(()=>({onToggle:()=>d?.(!c),bsPrefix:x,expanded:!!c,expand:r}),[x,c,r,d]);return I(Zn.Provider,{value:p,children:I(gt.Provider,{value:b,children:I(u,{ref:n,...g,className:oe(s,x,r&&f,a&&`${x}-${a}`,o&&`bg-${o}`,l&&`sticky-${l}`,i&&`fixed-${i}`)})})})});Fs.defaultProps=ay;Fs.displayName="Navbar";const Ra=Object.assign(Fs,{Brand:lf,Collapse:vf,Offcanvas:kf,Text:ry,Toggle:_s}),Yo=y.createContext(null);var Sc=Object.prototype.hasOwnProperty;function Ec(e,n,t){for(t of e.keys())if(Rr(t,n))return t}function Rr(e,n){var t,r,a;if(e===n)return!0;if(e&&n&&(t=e.constructor)===n.constructor){if(t===Date)return e.getTime()===n.getTime();if(t===RegExp)return e.toString()===n.toString();if(t===Array){if((r=e.length)===n.length)for(;r--&&Rr(e[r],n[r]););return r===-1}if(t===Set){if(e.size!==n.size)return!1;for(r of e)if(a=r,a&&typeof a=="object"&&(a=Ec(n,a),!a)||!n.has(a))return!1;return!0}if(t===Map){if(e.size!==n.size)return!1;for(r of e)if(a=r[0],a&&typeof a=="object"&&(a=Ec(n,a),!a)||!Rr(r[1],n.get(a)))return!1;return!0}if(t===ArrayBuffer)e=new Uint8Array(e),n=new Uint8Array(n);else if(t===DataView){if((r=e.byteLength)===n.byteLength)for(;r--&&e.getInt8(r)===n.getInt8(r););return r===-1}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===n.byteLength)for(;r--&&e[r]===n[r];);return r===-1}if(!t||typeof e=="object"){r=0;for(t in e)if(Sc.call(e,t)&&++r&&!Sc.call(n,t)||!(t in n)||!Rr(e[t],n[t]))return!1;return Object.keys(n).length===r}}return e!==e&&n!==n}function oy(e){var n=rf();return[e[0],y.useCallback(function(t){if(n())return e[1](t)},[n,e[1]])]}var Oe="top",Ye="bottom",We="right",Te="left",As="auto",ca=[Oe,Ye,We,Te],nr="start",ra="end",iy="clippingParents",bf="viewport",yr="popper",ly="reference",jc=ca.reduce(function(e,n){return e.concat([n+"-"+nr,n+"-"+ra])},[]),Cf=[].concat(ca,[As]).reduce(function(e,n){return e.concat([n,n+"-"+nr,n+"-"+ra])},[]),sy="beforeRead",uy="read",cy="afterRead",dy="beforeMain",py="main",fy="afterMain",my="beforeWrite",vy="write",hy="afterWrite",gy=[sy,uy,cy,dy,py,fy,my,vy,hy];function cn(e){return e.split("-")[0]}function Xe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var n=e.ownerDocument;return n&&n.defaultView||window}return e}function yt(e){var n=Xe(e).Element;return e instanceof n||e instanceof Element}function dn(e){var n=Xe(e).HTMLElement;return e instanceof n||e instanceof HTMLElement}function $s(e){if(typeof ShadowRoot>"u")return!1;var n=Xe(e).ShadowRoot;return e instanceof n||e instanceof ShadowRoot}var dt=Math.max,Co=Math.min,tr=Math.round;function Il(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(n){return n.brand+"/"+n.version}).join(" "):navigator.userAgent}function Sf(){return!/^((?!chrome|android).)*safari/i.test(Il())}function rr(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!1);var r=e.getBoundingClientRect(),a=1,o=1;n&&dn(e)&&(a=e.offsetWidth>0&&tr(r.width)/e.offsetWidth||1,o=e.offsetHeight>0&&tr(r.height)/e.offsetHeight||1);var i=yt(e)?Xe(e):window,l=i.visualViewport,s=!Sf()&&t,u=(r.left+(s&&l?l.offsetLeft:0))/a,c=(r.top+(s&&l?l.offsetTop:0))/o,d=r.width/a,v=r.height/o;return{width:d,height:v,top:c,right:u+d,bottom:c+v,left:u,x:u,y:c}}function Bs(e){var n=rr(e),t=e.offsetWidth,r=e.offsetHeight;return Math.abs(n.width-t)<=1&&(t=n.width),Math.abs(n.height-r)<=1&&(r=n.height),{x:e.offsetLeft,y:e.offsetTop,width:t,height:r}}function Ef(e,n){var t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&$s(t)){var r=n;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Xn(e){return e?(e.nodeName||"").toLowerCase():null}function En(e){return Xe(e).getComputedStyle(e)}function yy(e){return["table","td","th"].indexOf(Xn(e))>=0}function Jn(e){return((yt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Wo(e){return Xn(e)==="html"?e:e.assignedSlot||e.parentNode||($s(e)?e.host:null)||Jn(e)}function Pc(e){return!dn(e)||En(e).position==="fixed"?null:e.offsetParent}function wy(e){var n=/firefox/i.test(Il()),t=/Trident/i.test(Il());if(t&&dn(e)){var r=En(e);if(r.position==="fixed")return null}var a=Wo(e);for($s(a)&&(a=a.host);dn(a)&&["html","body"].indexOf(Xn(a))<0;){var o=En(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||n&&o.willChange==="filter"||n&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function da(e){for(var n=Xe(e),t=Pc(e);t&&yy(t)&&En(t).position==="static";)t=Pc(t);return t&&(Xn(t)==="html"||Xn(t)==="body"&&En(t).position==="static")?n:t||wy(e)||n}function Hs(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Lr(e,n,t){return dt(e,Co(n,t))}function xy(e,n,t){var r=Lr(e,n,t);return r>t?t:r}function jf(){return{top:0,right:0,bottom:0,left:0}}function Pf(e){return Object.assign({},jf(),e)}function If(e,n){return n.reduce(function(t,r){return t[r]=e,t},{})}var ky=function(n,t){return n=typeof n=="function"?n(Object.assign({},t.rects,{placement:t.placement})):n,Pf(typeof n!="number"?n:If(n,ca))};function by(e){var n,t=e.state,r=e.name,a=e.options,o=t.elements.arrow,i=t.modifiersData.popperOffsets,l=cn(t.placement),s=Hs(l),u=[Te,We].indexOf(l)>=0,c=u?"height":"width";if(!(!o||!i)){var d=ky(a.padding,t),v=Bs(o),h=s==="y"?Oe:Te,g=s==="y"?Ye:We,x=t.rects.reference[c]+t.rects.reference[s]-i[s]-t.rects.popper[c],b=i[s]-t.rects.reference[s],f=da(o),p=f?s==="y"?f.clientHeight||0:f.clientWidth||0:0,m=x/2-b/2,w=d[h],k=p-v[c]-d[g],C=p/2-v[c]/2+m,S=Lr(w,C,k),E=s;t.modifiersData[r]=(n={},n[E]=S,n.centerOffset=S-C,n)}}function Cy(e){var n=e.state,t=e.options,r=t.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=n.elements.popper.querySelector(a),!a)||Ef(n.elements.popper,a)&&(n.elements.arrow=a))}const Sy={name:"arrow",enabled:!0,phase:"main",fn:by,effect:Cy,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ar(e){return e.split("-")[1]}var Ey={top:"auto",right:"auto",bottom:"auto",left:"auto"};function jy(e){var n=e.x,t=e.y,r=window,a=r.devicePixelRatio||1;return{x:tr(n*a)/a||0,y:tr(t*a)/a||0}}function Ic(e){var n,t=e.popper,r=e.popperRect,a=e.placement,o=e.variation,i=e.offsets,l=e.position,s=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,d=e.isFixed,v=i.x,h=v===void 0?0:v,g=i.y,x=g===void 0?0:g,b=typeof c=="function"?c({x:h,y:x}):{x:h,y:x};h=b.x,x=b.y;var f=i.hasOwnProperty("x"),p=i.hasOwnProperty("y"),m=Te,w=Oe,k=window;if(u){var C=da(t),S="clientHeight",E="clientWidth";if(C===Xe(t)&&(C=Jn(t),En(C).position!=="static"&&l==="absolute"&&(S="scrollHeight",E="scrollWidth")),C=C,a===Oe||(a===Te||a===We)&&o===ra){w=Ye;var R=d&&C===k&&k.visualViewport?k.visualViewport.height:C[S];x-=R-r.height,x*=s?1:-1}if(a===Te||(a===Oe||a===Ye)&&o===ra){m=We;var T=d&&C===k&&k.visualViewport?k.visualViewport.width:C[E];h-=T-r.width,h*=s?1:-1}}var M=Object.assign({position:l},u&&Ey),L=c===!0?jy({x:h,y:x}):{x:h,y:x};if(h=L.x,x=L.y,s){var D;return Object.assign({},M,(D={},D[w]=p?"0":"",D[m]=f?"0":"",D.transform=(k.devicePixelRatio||1)<=1?"translate("+h+"px, "+x+"px)":"translate3d("+h+"px, "+x+"px, 0)",D))}return Object.assign({},M,(n={},n[w]=p?x+"px":"",n[m]=f?h+"px":"",n.transform="",n))}function Py(e){var n=e.state,t=e.options,r=t.gpuAcceleration,a=r===void 0?!0:r,o=t.adaptive,i=o===void 0?!0:o,l=t.roundOffsets,s=l===void 0?!0:l,u={placement:cn(n.placement),variation:ar(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:a,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,Ic(Object.assign({},u,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:i,roundOffsets:s})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,Ic(Object.assign({},u,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}const Iy={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Py,data:{}};var La={passive:!0};function Oy(e){var n=e.state,t=e.instance,r=e.options,a=r.scroll,o=a===void 0?!0:a,i=r.resize,l=i===void 0?!0:i,s=Xe(n.elements.popper),u=[].concat(n.scrollParents.reference,n.scrollParents.popper);return o&&u.forEach(function(c){c.addEventListener("scroll",t.update,La)}),l&&s.addEventListener("resize",t.update,La),function(){o&&u.forEach(function(c){c.removeEventListener("scroll",t.update,La)}),l&&s.removeEventListener("resize",t.update,La)}}const Ty={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Oy,data:{}};var _y={left:"right",right:"left",bottom:"top",top:"bottom"};function Xa(e){return e.replace(/left|right|bottom|top/g,function(n){return _y[n]})}var Ny={start:"end",end:"start"};function Oc(e){return e.replace(/start|end/g,function(n){return Ny[n]})}function Ks(e){var n=Xe(e),t=n.pageXOffset,r=n.pageYOffset;return{scrollLeft:t,scrollTop:r}}function Vs(e){return rr(Jn(e)).left+Ks(e).scrollLeft}function My(e,n){var t=Xe(e),r=Jn(e),a=t.visualViewport,o=r.clientWidth,i=r.clientHeight,l=0,s=0;if(a){o=a.width,i=a.height;var u=Sf();(u||!u&&n==="fixed")&&(l=a.offsetLeft,s=a.offsetTop)}return{width:o,height:i,x:l+Vs(e),y:s}}function Ry(e){var n,t=Jn(e),r=Ks(e),a=(n=e.ownerDocument)==null?void 0:n.body,o=dt(t.scrollWidth,t.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=dt(t.scrollHeight,t.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),l=-r.scrollLeft+Vs(e),s=-r.scrollTop;return En(a||t).direction==="rtl"&&(l+=dt(t.clientWidth,a?a.clientWidth:0)-o),{width:o,height:i,x:l,y:s}}function Us(e){var n=En(e),t=n.overflow,r=n.overflowX,a=n.overflowY;return/auto|scroll|overlay|hidden/.test(t+a+r)}function Of(e){return["html","body","#document"].indexOf(Xn(e))>=0?e.ownerDocument.body:dn(e)&&Us(e)?e:Of(Wo(e))}function Dr(e,n){var t;n===void 0&&(n=[]);var r=Of(e),a=r===((t=e.ownerDocument)==null?void 0:t.body),o=Xe(r),i=a?[o].concat(o.visualViewport||[],Us(r)?r:[]):r,l=n.concat(i);return a?l:l.concat(Dr(Wo(i)))}function Ol(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ly(e,n){var t=rr(e,!1,n==="fixed");return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Tc(e,n,t){return n===bf?Ol(My(e,t)):yt(n)?Ly(n,t):Ol(Ry(Jn(e)))}function Dy(e){var n=Dr(Wo(e)),t=["absolute","fixed"].indexOf(En(e).position)>=0,r=t&&dn(e)?da(e):e;return yt(r)?n.filter(function(a){return yt(a)&&Ef(a,r)&&Xn(a)!=="body"}):[]}function zy(e,n,t,r){var a=n==="clippingParents"?Dy(e):[].concat(n),o=[].concat(a,[t]),i=o[0],l=o.reduce(function(s,u){var c=Tc(e,u,r);return s.top=dt(c.top,s.top),s.right=Co(c.right,s.right),s.bottom=Co(c.bottom,s.bottom),s.left=dt(c.left,s.left),s},Tc(e,i,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Tf(e){var n=e.reference,t=e.element,r=e.placement,a=r?cn(r):null,o=r?ar(r):null,i=n.x+n.width/2-t.width/2,l=n.y+n.height/2-t.height/2,s;switch(a){case Oe:s={x:i,y:n.y-t.height};break;case Ye:s={x:i,y:n.y+n.height};break;case We:s={x:n.x+n.width,y:l};break;case Te:s={x:n.x-t.width,y:l};break;default:s={x:n.x,y:n.y}}var u=a?Hs(a):null;if(u!=null){var c=u==="y"?"height":"width";switch(o){case nr:s[u]=s[u]-(n[c]/2-t[c]/2);break;case ra:s[u]=s[u]+(n[c]/2-t[c]/2);break}}return s}function aa(e,n){n===void 0&&(n={});var t=n,r=t.placement,a=r===void 0?e.placement:r,o=t.strategy,i=o===void 0?e.strategy:o,l=t.boundary,s=l===void 0?iy:l,u=t.rootBoundary,c=u===void 0?bf:u,d=t.elementContext,v=d===void 0?yr:d,h=t.altBoundary,g=h===void 0?!1:h,x=t.padding,b=x===void 0?0:x,f=Pf(typeof b!="number"?b:If(b,ca)),p=v===yr?ly:yr,m=e.rects.popper,w=e.elements[g?p:v],k=zy(yt(w)?w:w.contextElement||Jn(e.elements.popper),s,c,i),C=rr(e.elements.reference),S=Tf({reference:C,element:m,strategy:"absolute",placement:a}),E=Ol(Object.assign({},m,S)),R=v===yr?E:C,T={top:k.top-R.top+f.top,bottom:R.bottom-k.bottom+f.bottom,left:k.left-R.left+f.left,right:R.right-k.right+f.right},M=e.modifiersData.offset;if(v===yr&&M){var L=M[a];Object.keys(T).forEach(function(D){var H=[We,Ye].indexOf(D)>=0?1:-1,F=[Oe,Ye].indexOf(D)>=0?"y":"x";T[D]+=L[F]*H})}return T}function Fy(e,n){n===void 0&&(n={});var t=n,r=t.placement,a=t.boundary,o=t.rootBoundary,i=t.padding,l=t.flipVariations,s=t.allowedAutoPlacements,u=s===void 0?Cf:s,c=ar(r),d=c?l?jc:jc.filter(function(g){return ar(g)===c}):ca,v=d.filter(function(g){return u.indexOf(g)>=0});v.length===0&&(v=d);var h=v.reduce(function(g,x){return g[x]=aa(e,{placement:x,boundary:a,rootBoundary:o,padding:i})[cn(x)],g},{});return Object.keys(h).sort(function(g,x){return h[g]-h[x]})}function Ay(e){if(cn(e)===As)return[];var n=Xa(e);return[Oc(e),n,Oc(n)]}function $y(e){var n=e.state,t=e.options,r=e.name;if(!n.modifiersData[r]._skip){for(var a=t.mainAxis,o=a===void 0?!0:a,i=t.altAxis,l=i===void 0?!0:i,s=t.fallbackPlacements,u=t.padding,c=t.boundary,d=t.rootBoundary,v=t.altBoundary,h=t.flipVariations,g=h===void 0?!0:h,x=t.allowedAutoPlacements,b=n.options.placement,f=cn(b),p=f===b,m=s||(p||!g?[Xa(b)]:Ay(b)),w=[b].concat(m).reduce(function(ie,Y){return ie.concat(cn(Y)===As?Fy(n,{placement:Y,boundary:c,rootBoundary:d,padding:u,flipVariations:g,allowedAutoPlacements:x}):Y)},[]),k=n.rects.reference,C=n.rects.popper,S=new Map,E=!0,R=w[0],T=0;T<w.length;T++){var M=w[T],L=cn(M),D=ar(M)===nr,H=[Oe,Ye].indexOf(L)>=0,F=H?"width":"height",Q=aa(n,{placement:M,boundary:c,rootBoundary:d,altBoundary:v,padding:u}),ee=H?D?We:Te:D?Ye:Oe;k[F]>C[F]&&(ee=Xa(ee));var P=Xa(ee),N=[];if(o&&N.push(Q[L]<=0),l&&N.push(Q[ee]<=0,Q[P]<=0),N.every(function(ie){return ie})){R=M,E=!1;break}S.set(M,N)}if(E)for(var _=g?3:1,A=function(Y){var te=w.find(function(Ne){var pn=S.get(Ne);if(pn)return pn.slice(0,Y).every(function(et){return et})});if(te)return R=te,"break"},B=_;B>0;B--){var _e=A(B);if(_e==="break")break}n.placement!==R&&(n.modifiersData[r]._skip=!0,n.placement=R,n.reset=!0)}}const By={name:"flip",enabled:!0,phase:"main",fn:$y,requiresIfExists:["offset"],data:{_skip:!1}};function _c(e,n,t){return t===void 0&&(t={x:0,y:0}),{top:e.top-n.height-t.y,right:e.right-n.width+t.x,bottom:e.bottom-n.height+t.y,left:e.left-n.width-t.x}}function Nc(e){return[Oe,We,Ye,Te].some(function(n){return e[n]>=0})}function Hy(e){var n=e.state,t=e.name,r=n.rects.reference,a=n.rects.popper,o=n.modifiersData.preventOverflow,i=aa(n,{elementContext:"reference"}),l=aa(n,{altBoundary:!0}),s=_c(i,r),u=_c(l,a,o),c=Nc(s),d=Nc(u);n.modifiersData[t]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const Ky={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Hy};function Vy(e,n,t){var r=cn(e),a=[Te,Oe].indexOf(r)>=0?-1:1,o=typeof t=="function"?t(Object.assign({},n,{placement:e})):t,i=o[0],l=o[1];return i=i||0,l=(l||0)*a,[Te,We].indexOf(r)>=0?{x:l,y:i}:{x:i,y:l}}function Uy(e){var n=e.state,t=e.options,r=e.name,a=t.offset,o=a===void 0?[0,0]:a,i=Cf.reduce(function(c,d){return c[d]=Vy(d,n.rects,o),c},{}),l=i[n.placement],s=l.x,u=l.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=s,n.modifiersData.popperOffsets.y+=u),n.modifiersData[r]=i}const Yy={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Uy};function Wy(e){var n=e.state,t=e.name;n.modifiersData[t]=Tf({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})}const Xy={name:"popperOffsets",enabled:!0,phase:"read",fn:Wy,data:{}};function Qy(e){return e==="x"?"y":"x"}function Gy(e){var n=e.state,t=e.options,r=e.name,a=t.mainAxis,o=a===void 0?!0:a,i=t.altAxis,l=i===void 0?!1:i,s=t.boundary,u=t.rootBoundary,c=t.altBoundary,d=t.padding,v=t.tether,h=v===void 0?!0:v,g=t.tetherOffset,x=g===void 0?0:g,b=aa(n,{boundary:s,rootBoundary:u,padding:d,altBoundary:c}),f=cn(n.placement),p=ar(n.placement),m=!p,w=Hs(f),k=Qy(w),C=n.modifiersData.popperOffsets,S=n.rects.reference,E=n.rects.popper,R=typeof x=="function"?x(Object.assign({},n.rects,{placement:n.placement})):x,T=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),M=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,L={x:0,y:0};if(C){if(o){var D,H=w==="y"?Oe:Te,F=w==="y"?Ye:We,Q=w==="y"?"height":"width",ee=C[w],P=ee+b[H],N=ee-b[F],_=h?-E[Q]/2:0,A=p===nr?S[Q]:E[Q],B=p===nr?-E[Q]:-S[Q],_e=n.elements.arrow,ie=h&&_e?Bs(_e):{width:0,height:0},Y=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:jf(),te=Y[H],Ne=Y[F],pn=Lr(0,S[Q],ie[Q]),et=m?S[Q]/2-_-pn-te-T.mainAxis:A-pn-te-T.mainAxis,fa=m?-S[Q]/2+_+pn+Ne+T.mainAxis:B+pn+Ne+T.mainAxis,nt=n.elements.arrow&&da(n.elements.arrow),bt=nt?w==="y"?nt.clientTop||0:nt.clientLeft||0:0,V=(D=M?.[w])!=null?D:0,Kf=ee+et-V-bt,Vf=ee+fa-V,Zs=Lr(h?Co(P,Kf):P,ee,h?dt(N,Vf):N);C[w]=Zs,L[w]=Zs-ee}if(l){var Js,Uf=w==="x"?Oe:Te,Yf=w==="x"?Ye:We,tt=C[k],ma=k==="y"?"height":"width",eu=tt+b[Uf],nu=tt-b[Yf],Xo=[Oe,Te].indexOf(f)!==-1,tu=(Js=M?.[k])!=null?Js:0,ru=Xo?eu:tt-S[ma]-E[ma]-tu+T.altAxis,au=Xo?tt+S[ma]+E[ma]-tu-T.altAxis:nu,ou=h&&Xo?xy(ru,tt,au):Lr(h?ru:eu,tt,h?au:nu);C[k]=ou,L[k]=ou-tt}n.modifiersData[r]=L}}const qy={name:"preventOverflow",enabled:!0,phase:"main",fn:Gy,requiresIfExists:["offset"]};function Zy(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Jy(e){return e===Xe(e)||!dn(e)?Ks(e):Zy(e)}function e0(e){var n=e.getBoundingClientRect(),t=tr(n.width)/e.offsetWidth||1,r=tr(n.height)/e.offsetHeight||1;return t!==1||r!==1}function n0(e,n,t){t===void 0&&(t=!1);var r=dn(n),a=dn(n)&&e0(n),o=Jn(n),i=rr(e,a,t),l={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!t)&&((Xn(n)!=="body"||Us(o))&&(l=Jy(n)),dn(n)?(s=rr(n,!0),s.x+=n.clientLeft,s.y+=n.clientTop):o&&(s.x=Vs(o))),{x:i.left+l.scrollLeft-s.x,y:i.top+l.scrollTop-s.y,width:i.width,height:i.height}}function t0(e){var n=new Map,t=new Set,r=[];e.forEach(function(o){n.set(o.name,o)});function a(o){t.add(o.name);var i=[].concat(o.requires||[],o.requiresIfExists||[]);i.forEach(function(l){if(!t.has(l)){var s=n.get(l);s&&a(s)}}),r.push(o)}return e.forEach(function(o){t.has(o.name)||a(o)}),r}function r0(e){var n=t0(e);return gy.reduce(function(t,r){return t.concat(n.filter(function(a){return a.phase===r}))},[])}function a0(e){var n;return function(){return n||(n=new Promise(function(t){Promise.resolve().then(function(){n=void 0,t(e())})})),n}}function o0(e){var n=e.reduce(function(t,r){var a=t[r.name];return t[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,t},{});return Object.keys(n).map(function(t){return n[t]})}var Mc={placement:"bottom",modifiers:[],strategy:"absolute"};function Rc(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return!n.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function i0(e){e===void 0&&(e={});var n=e,t=n.defaultModifiers,r=t===void 0?[]:t,a=n.defaultOptions,o=a===void 0?Mc:a;return function(l,s,u){u===void 0&&(u=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Mc,o),modifiersData:{},elements:{reference:l,popper:s},attributes:{},styles:{}},d=[],v=!1,h={state:c,setOptions:function(f){var p=typeof f=="function"?f(c.options):f;x(),c.options=Object.assign({},o,c.options,p),c.scrollParents={reference:yt(l)?Dr(l):l.contextElement?Dr(l.contextElement):[],popper:Dr(s)};var m=r0(o0([].concat(r,c.options.modifiers)));return c.orderedModifiers=m.filter(function(w){return w.enabled}),g(),h.update()},forceUpdate:function(){if(!v){var f=c.elements,p=f.reference,m=f.popper;if(Rc(p,m)){c.rects={reference:n0(p,da(m),c.options.strategy==="fixed"),popper:Bs(m)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(T){return c.modifiersData[T.name]=Object.assign({},T.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var k=c.orderedModifiers[w],C=k.fn,S=k.options,E=S===void 0?{}:S,R=k.name;typeof C=="function"&&(c=C({state:c,options:E,name:R,instance:h})||c)}}}},update:a0(function(){return new Promise(function(b){h.forceUpdate(),b(c)})}),destroy:function(){x(),v=!0}};if(!Rc(l,s))return h;h.setOptions(u).then(function(b){!v&&u.onFirstUpdate&&u.onFirstUpdate(b)});function g(){c.orderedModifiers.forEach(function(b){var f=b.name,p=b.options,m=p===void 0?{}:p,w=b.effect;if(typeof w=="function"){var k=w({state:c,name:f,instance:h,options:m}),C=function(){};d.push(k||C)}})}function x(){d.forEach(function(b){return b()}),d=[]}return h}}const l0=i0({defaultModifiers:[Ky,Xy,Iy,Ty,Yy,By,qy,Sy]}),s0=["enabled","placement","strategy","modifiers"];function u0(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}const c0={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},d0={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:n,popper:t}=e.elements;if("removeAttribute"in n){const r=(n.getAttribute("aria-describedby")||"").split(",").filter(a=>a.trim()!==t.id);r.length?n.setAttribute("aria-describedby",r.join(",")):n.removeAttribute("aria-describedby")}},fn:({state:e})=>{var n;const{popper:t,reference:r}=e.elements,a=(n=t.getAttribute("role"))==null?void 0:n.toLowerCase();if(t.id&&a==="tooltip"&&"setAttribute"in r){const o=r.getAttribute("aria-describedby");if(o&&o.split(",").indexOf(t.id)!==-1)return;r.setAttribute("aria-describedby",o?`${o},${t.id}`:t.id)}}},p0=[];function f0(e,n,t={}){let{enabled:r=!0,placement:a="bottom",strategy:o="absolute",modifiers:i=p0}=t,l=u0(t,s0);const s=y.useRef(i),u=y.useRef(),c=y.useCallback(()=>{var b;(b=u.current)==null||b.update()},[]),d=y.useCallback(()=>{var b;(b=u.current)==null||b.forceUpdate()},[]),[v,h]=oy(y.useState({placement:a,update:c,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),g=y.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:b})=>{const f={},p={};Object.keys(b.elements).forEach(m=>{f[m]=b.styles[m],p[m]=b.attributes[m]}),h({state:b,styles:f,attributes:p,update:c,forceUpdate:d,placement:b.placement})}}),[c,d,h]),x=y.useMemo(()=>(Rr(s.current,i)||(s.current=i),s.current),[i]);return y.useEffect(()=>{!u.current||!r||u.current.setOptions({placement:a,strategy:o,modifiers:[...x,g,c0]})},[o,a,g,r,x]),y.useEffect(()=>{if(!(!r||e==null||n==null))return u.current=l0(e,n,Object.assign({},l,{placement:a,strategy:o,modifiers:[...x,d0,g]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,h(b=>Object.assign({},b,{attributes:{},styles:{popper:{}}})))}},[r,e,n]),v}const Lc=()=>{};function m0(e){return e.button===0}function v0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ji=e=>e&&("current"in e?e.current:e),Dc={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function h0(e,n=Lc,{disabled:t,clickTrigger:r="click"}={}){const a=y.useRef(!1),o=y.useRef(!1),i=y.useCallback(u=>{const c=ji(e);a.current=!c||v0(u)||!m0(u)||!!bo(c,u.target)||o.current,o.current=!1},[e]),l=ce(u=>{const c=ji(e);c&&bo(c,u.target)&&(o.current=!0)}),s=ce(u=>{a.current||n(u)});y.useEffect(()=>{if(t||e==null)return;const u=Ko(ji(e));let c=(u.defaultView||window).event,d=null;Dc[r]&&(d=zn(u,Dc[r],l,!0));const v=zn(u,r,i,!0),h=zn(u,r,x=>{if(x===c){c=void 0;return}s(x)});let g=[];return"ontouchstart"in u.documentElement&&(g=[].slice.call(u.body.children).map(x=>zn(x,"mousemove",Lc))),()=>{d?.(),v(),h(),g.forEach(x=>x())}},[e,t,r,i,l,s])}function g0(e){const n={};return Array.isArray(e)?(e?.forEach(t=>{n[t.name]=t}),n):e||n}function y0(e={}){return Array.isArray(e)?e:Object.keys(e).map(n=>(e[n].name=n,e[n]))}function w0({enabled:e,enableEvents:n,placement:t,flip:r,offset:a,fixed:o,containerPadding:i,arrowElement:l,popperConfig:s={}}){var u,c,d,v,h;const g=g0(s.modifiers);return Object.assign({},s,{placement:t,enabled:e,strategy:o?"fixed":s.strategy,modifiers:y0(Object.assign({},g,{eventListeners:{enabled:n,options:(u=g.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},g.preventOverflow,{options:i?Object.assign({padding:i},(c=g.preventOverflow)==null?void 0:c.options):(d=g.preventOverflow)==null?void 0:d.options}),offset:{options:Object.assign({offset:a},(v=g.offset)==null?void 0:v.options)},arrow:Object.assign({},g.arrow,{enabled:!!l,options:Object.assign({},(h=g.arrow)==null?void 0:h.options,{element:l})}),flip:Object.assign({enabled:!!r},g.flip)}))})}const x0=["children"];function k0(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}const b0=()=>{};function _f(e={}){const n=y.useContext(Yo),[t,r]=Wh(),a=y.useRef(!1),{flip:o,offset:i,rootCloseEvent:l,fixed:s=!1,placement:u,popperConfig:c={},enableEventListeners:d=!0,usePopper:v=!!n}=e,h=n?.show==null?!!e.show:n.show;h&&!a.current&&(a.current=!0);const g=C=>{n?.toggle(!1,C)},{placement:x,setMenu:b,menuElement:f,toggleElement:p}=n||{},m=f0(p,f,w0({placement:u||x||"bottom-start",enabled:v,enableEvents:d??h,offset:i,flip:o,fixed:s,arrowElement:t,popperConfig:c})),w=Object.assign({ref:b||b0,"aria-labelledby":p?.id},m.attributes.popper,{style:m.styles.popper}),k={show:h,placement:x,hasShown:a.current,toggle:n?.toggle,popper:v?m:null,arrowProps:v?Object.assign({ref:r},m.attributes.arrow,{style:m.styles.arrow}):{}};return h0(f,g,{clickTrigger:l,disabled:!h}),[w,k]}const C0={usePopper:!0};function Ys(e){let{children:n}=e,t=k0(e,x0);const[r,a]=_f(t);return I(Wt,{children:n(r,a)})}Ys.displayName="DropdownMenu";Ys.defaultProps=C0;const Nf={prefix:String(Math.round(Math.random()*1e10)),current:0},S0=en.createContext(Nf);let E0=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function j0(e){let n=y.useContext(S0);return n===Nf&&!E0&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),y.useMemo(()=>e||`react-aria${n.prefix}-${++n.current}`,[e])}const Mf=e=>{var n;return((n=e.getAttribute("role"))==null?void 0:n.toLowerCase())==="menu"},zc=()=>{};function Rf(){const e=j0(),{show:n=!1,toggle:t=zc,setToggle:r,menuElement:a}=y.useContext(Yo)||{},o=y.useCallback(l=>{t(!n,l)},[n,t]),i={id:e,ref:r||zc,onClick:o,"aria-expanded":!!n};return a&&Mf(a)&&(i["aria-haspopup"]=!0),[i,{show:n,toggle:t}]}function Lf({children:e}){const[n,t]=Rf();return I(Wt,{children:e(n,t)})}Lf.displayName="DropdownToggle";const P0=["eventKey","disabled","onClick","active","as"];function I0(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Df({key:e,href:n,active:t,disabled:r,onClick:a}){const o=y.useContext(gt),i=y.useContext(Bo),{activeKey:l}=i||{},s=na(e,n),u=t==null&&e!=null?na(l)===s:t;return[{onClick:ce(d=>{r||(a?.(d),o&&!d.isPropagationStopped()&&o(s,d))}),"aria-disabled":r||void 0,"aria-selected":u,[sr("dropdown-item")]:""},{isActive:u}]}const zf=y.forwardRef((e,n)=>{let{eventKey:t,disabled:r,onClick:a,active:o,as:i=js}=e,l=I0(e,P0);const[s]=Df({key:t,href:l.href,disabled:r,onClick:a,active:o});return I(i,Object.assign({},l,{ref:n},s))});zf.displayName="DropdownItem";function Fc(){const e=Gp(),n=y.useRef(null),t=y.useCallback(r=>{n.current=r,e()},[e]);return[n,t]}function pa({defaultShow:e,show:n,onSelect:t,onToggle:r,itemSelector:a=`* [${sr("dropdown-item")}]`,focusFirstItemOnShow:o,placement:i="bottom-start",children:l}){const s=Ms(),[u,c]=Qp(n,e,r),[d,v]=Fc(),h=d.current,[g,x]=Fc(),b=g.current,f=af(u),p=y.useRef(null),m=y.useRef(!1),w=y.useContext(gt),k=y.useCallback((M,L,D=L?.type)=>{c(M,{originalEvent:L,source:D})},[c]),C=ce((M,L)=>{t?.(M,L),k(!1,L,"select"),L.isPropagationStopped()||w?.(M,L)}),S=y.useMemo(()=>({toggle:k,placement:i,show:u,menuElement:h,toggleElement:b,setMenu:v,setToggle:x}),[k,i,u,h,b,v,x]);h&&f&&!u&&(m.current=h.contains(h.ownerDocument.activeElement));const E=ce(()=>{b&&b.focus&&b.focus()}),R=ce(()=>{const M=p.current;let L=o;if(L==null&&(L=d.current&&Mf(d.current)?"keyboard":!1),L===!1||L==="keyboard"&&!/^key.+$/.test(M))return;const D=vn(d.current,a)[0];D&&D.focus&&D.focus()});y.useEffect(()=>{u?R():m.current&&(m.current=!1,E())},[u,m,E,R]),y.useEffect(()=>{p.current=null});const T=(M,L)=>{if(!d.current)return null;const D=vn(d.current,a);let H=D.indexOf(M)+L;return H=Math.max(0,Math.min(H,D.length)),D[H]};return Xh(y.useCallback(()=>s.document,[s]),"keydown",M=>{var L,D;const{key:H}=M,F=M.target,Q=(L=d.current)==null?void 0:L.contains(F),ee=(D=g.current)==null?void 0:D.contains(F);if(/input|textarea/i.test(F.tagName)&&(H===" "||H!=="Escape"&&Q||H==="Escape"&&F.type==="search")||!Q&&!ee||H==="Tab"&&(!d.current||!u))return;p.current=M.type;const N={originalEvent:M,source:M.type};switch(H){case"ArrowUp":{const _=T(F,-1);_&&_.focus&&_.focus(),M.preventDefault();return}case"ArrowDown":if(M.preventDefault(),!u)c(!0,N);else{const _=T(F,1);_&&_.focus&&_.focus()}return;case"Tab":df(F.ownerDocument,"keyup",_=>{var A;(_.key==="Tab"&&!_.target||!((A=d.current)!=null&&A.contains(_.target)))&&c(!1,N)},{once:!0});break;case"Escape":H==="Escape"&&(M.preventDefault(),M.stopPropagation()),c(!1,N);break}}),I(gt.Provider,{value:C,children:I(Yo.Provider,{value:S,children:l})})}pa.displayName="Dropdown";pa.Menu=Ys;pa.Toggle=Lf;pa.Item=zf;const Ws=y.createContext({});Ws.displayName="DropdownContext";const Ff=y.forwardRef(({bsPrefix:e,className:n,eventKey:t,disabled:r=!1,onClick:a,active:o,as:i=Ps,...l},s)=>{const u=we(e,"dropdown-item"),[c,d]=Df({key:t,href:l.href,disabled:r,onClick:a,active:o});return I(i,{...l,...c,ref:s,className:oe(n,u,d.isActive&&"active",r&&"disabled")})});Ff.displayName="DropdownItem";const Xs=y.createContext(null);Xs.displayName="InputGroupContext";function Af(e,n){return e}const jt=Re.oneOf(["start","end"]);Re.oneOfType([jt,Re.shape({sm:jt}),Re.shape({md:jt}),Re.shape({lg:jt}),Re.shape({xl:jt}),Re.shape({xxl:jt}),Re.object]);const O0={flip:!0};function $f(e,n,t){const r=t?"top-end":"top-start",a=t?"top-start":"top-end",o=t?"bottom-end":"bottom-start",i=t?"bottom-start":"bottom-end",l=t?"right-start":"left-start",s=t?"right-end":"left-end",u=t?"left-start":"right-start",c=t?"left-end":"right-end";let d=e?i:o;return n==="up"?d=e?a:r:n==="end"?d=e?c:u:n==="start"?d=e?s:l:n==="down-centered"?d="bottom":n==="up-centered"&&(d="top"),d}const Qs=y.forwardRef(({bsPrefix:e,className:n,align:t,rootCloseEvent:r,flip:a,show:o,renderOnMount:i,as:l="div",popperConfig:s,variant:u,...c},d)=>{let v=!1;const h=y.useContext(Zn),g=we(e,"dropdown-menu"),{align:x,drop:b,isRTL:f}=y.useContext(Ws);t=t||x;const p=y.useContext(Xs),m=[];if(t)if(typeof t=="object"){const M=Object.keys(t);if(M.length){const L=M[0],D=t[L];v=D==="start",m.push(`${g}-${L}-${D}`)}}else t==="end"&&(v=!0);const w=$f(v,b,f),[k,{hasShown:C,popper:S,show:E,toggle:R}]=_f({flip:a,rootCloseEvent:r,show:o,usePopper:!h&&m.length===0,offset:[0,2],popperConfig:s,placement:w});if(k.ref=$o(Af(d),k.ref),of(()=>{E&&S?.update()},[E]),!C&&!i&&!p)return null;typeof l!="string"&&(k.show=E,k.close=()=>R?.(!1),k.align=t);let T=c.style;return S!=null&&S.placement&&(T={...c.style,...k.style},c["x-placement"]=S.placement),I(l,{...c,...k,style:T,...(m.length||h)&&{"data-bs-popper":"static"},className:oe(n,g,E&&"show",v&&`${g}-end`,u&&`${g}-${u}`,...m)})});Qs.displayName="DropdownMenu";Qs.defaultProps=O0;const T0={variant:"primary",active:!1,disabled:!1},Gs=y.forwardRef(({as:e,bsPrefix:n,variant:t,size:r,active:a,className:o,...i},l)=>{const s=we(n,"btn"),[u,{tagName:c}]=Es({tagName:e,...i});return I(c,{...u,...i,ref:l,className:oe(o,s,a&&"active",t&&`${s}-${t}`,r&&`${s}-${r}`,i.href&&i.disabled&&"disabled")})});Gs.displayName="Button";Gs.defaultProps=T0;const Bf=y.forwardRef(({bsPrefix:e,split:n,className:t,childBsPrefix:r,as:a=Gs,...o},i)=>{const l=we(e,"dropdown-toggle"),s=y.useContext(Yo);r!==void 0&&(o.bsPrefix=r);const[u]=Rf();return u.ref=$o(u.ref,Af(i)),I(a,{className:oe(t,l,n&&`${l}-split`,s?.show&&"show"),...u,...o})});Bf.displayName="DropdownToggle";const _0=kt("dropdown-header",{defaultProps:{role:"heading"}}),N0=kt("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),M0=kt("dropdown-item-text",{Component:"span"}),R0={navbar:!1,align:"start",autoClose:!0,drop:"down"},qs=y.forwardRef((e,n)=>{const{bsPrefix:t,drop:r,show:a,className:o,align:i,onSelect:l,onToggle:s,focusFirstItemOnShow:u,as:c="div",navbar:d,autoClose:v,...h}=Ss(e,{show:"onToggle"}),g=y.useContext(Xs),x=we(t,"dropdown"),b=Hh(),f=S=>v===!1?S==="click":v==="inside"?S!=="rootClose":v==="outside"?S!=="select":!0,p=ce((S,E)=>{E.originalEvent.currentTarget===document&&(E.source!=="keydown"||E.originalEvent.key==="Escape")&&(E.source="rootClose"),f(E.source)&&s?.(S,E)}),w=$f(i==="end",r,b),k=y.useMemo(()=>({align:i,drop:r,isRTL:b}),[i,r,b]),C={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return I(Ws.Provider,{value:k,children:I(pa,{placement:w,show:a,onSelect:l,onToggle:p,focusFirstItemOnShow:u,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:g?h.children:I(c,{...h,ref:n,className:oe(o,a&&"show",C[r])})})})});qs.displayName="Dropdown";qs.defaultProps=R0;const st=Object.assign(qs,{Toggle:Bf,Menu:Qs,Item:Ff,ItemText:M0,Divider:N0,Header:_0}),Hf=y.forwardRef(({id:e,title:n,children:t,bsPrefix:r,className:a,rootCloseEvent:o,menuRole:i,disabled:l,active:s,renderMenuOnMount:u,menuVariant:c,...d},v)=>{const h=we(void 0,"nav-item");return Rn(st,{ref:v,...d,className:oe(a,h),children:[I(st.Toggle,{id:e,eventKey:null,active:s,disabled:l,childBsPrefix:r,as:Ho,children:n}),I(st.Menu,{role:i,renderOnMount:u,rootCloseEvent:o,variant:c,children:t})]})});Hf.displayName="NavDropdown";const wr=Object.assign(Hf,{Item:st.Item,ItemText:st.ItemText,Divider:st.Divider,Header:st.Header});const L0=`
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
    >
    <style>
    html, body{
        background:#285430;
        color:black;
    }
    code{
        color:#32CD32;
    }
    h1 {
        font-size: 2.5rem;
    }
    div.container {
        background:#5f8d4e;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 4rem;
    }
    nav {
        background: #5f8d4e;
    }
    </style>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #5f8d4e; padding:10px">      <a class="navbar-brand" href="./index.html">🧉 Docs</a>      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>      </button>      <div class="collapse navbar-collapse" id="navbarSupportedContent">          <li class="nav-item dropdown">            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">              Dropdown            </a>            <div class="dropdown-menu" aria-labelledby="navbarDropdown">                       <li class="nav-item active">            <a class="nav-link active" href="./project.html">Mate Project</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./cli.html">Mate CLI</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./mate.html">Runtime</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./config.html">Configuration</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./tutorials.html">Tutorials</a>        </li>            </div>         </li>          </div>    </nav>    
<div class="container" style=max-width:800px>

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
    >
    <style>
    html, body{
        background:#285430;
        color:black;
    }
    code{
        color:#32CD32;
    }
    h1 {
        font-size: 2.5rem;
    }
    div.container {
        background:#5f8d4e;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 4rem;
    }
    nav {
        background: #5f8d4e;
    }
    </style>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background: #5f8d4e; padding:10px">      <a class="navbar-brand" href="./index.html">🧉 Docs</a>      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>      </button>      <div class="collapse navbar-collapse" id="navbarSupportedContent">      <li class="nav-item dropdown">        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">          Dropdown        </a>        <div class="dropdown-menu" aria-labelledby="navbarDropdown">                   <li class="nav-item active">            <a class="nav-link active" href="./project.html">Mate Project</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./cli.html">Mate CLI</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./mate.html">Runtime</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./config.html">Configuration</a>        </li>        <li class="nav-item active">            <a class="nav-link active" href="./tutorials.html">Tutorials</a>        </li>        </div>     </li>       </nav>    
<div class="container" style=max-width:800px>

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
    >
    <style>
    html, body{
        background:#285430;
        color:black;
    }
    code{
        color:#32CD32;
    }
    h1 {
        font-size: 2.5rem;
    }
    div.container {
        background:#5f8d4e;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 4rem;
    }
    nav {
        background: #5f8d4e;
    }
    </style>
    <nav
  class="navbar navbar-expand-lg navbar-light fixed-top"
  style="background: #5f8d4e; padding: 10px"
>
  <a class="navbar-brand" href="./index.html">🧉 Docs</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li class="nav-item active">
          <a class="nav-link active" href="./project.html">Mate Project</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link active" href="./cli.html">Mate CLI</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link active" href="./mate.html">Runtime</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link active" href="./config.html">Configuration</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link active" href="./tutorials.html">Tutorials</a>
        </li>
      </div>
    </li>
    <ul class="navbar-nav mr-auto"></ul>
  </div>
</nav>
<div class="container" style="max-width: 800px">
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
  />
  <style>
    html,
    body {
      background: #285430;
      color: black;
    }
    code {
      color: #32cd32;
    }
    h1 {
      font-size: 2.5rem;
    }
    div.container {
      background: #5f8d4e;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-top: 4rem;
    }
    nav {
      background: #5f8d4e;
    }
  </style>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top"
    style="background: #5f8d4e; padding: 10px"
  >
    <a class="navbar-brand" href="./index.html">🧉 Docs</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li class="nav-item active">
            <a class="nav-link active" href="./project.html">Mate Project</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link active" href="./cli.html">Mate CLI</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link active" href="./mate.html">Runtime</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link active" href="./config.html">Configuration</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link active" href="./tutorials.html">Tutorials</a>
          </li>
        </div>
      </li>
      <ul class="navbar-nav mr-auto"></ul>
    </div>
  </nav>
  <div class="container" style="max-width: 800px">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <style>
      html,
      body {
        background: #285430;
        color: black;
      }
      code {
        color: #32cd32;
      }
      h1 {
        font-size: 2.5rem;
      }
      div.container {
        background: #5f8d4e;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 4rem;
      }
      nav {
        background: #5f8d4e;
      }
    </style>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top"
      style="background: #5f8d4e; padding: 10px"
    >
      <a class="navbar-brand" href="./index.html">🧉 Docs</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li class="nav-item active">
              <a class="nav-link active" href="./project.html">Mate Project</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./cli.html">Mate CLI</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./mate.html">Runtime</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./config.html">Configuration</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./tutorials.html">Tutorials</a>
            </li>
          </div>
        </li>
        <ul class="navbar-nav mr-auto"></ul>
      </div>
    </nav>
    <div class="container" style="max-width: 800px">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <style>
        html,
        body {
          background: #285430;
          color: black;
        }
        code {
          color: #32cd32;
        }
        h1 {
          font-size: 2.5rem;
        }
        div.container {
          background: #5f8d4e;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-top: 4rem;
        }
        nav {
          background: #5f8d4e;
        }
      </style>
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        style="background: #5f8d4e; padding: 10px"
      >
        <a class="navbar-brand" href="./index.html">🧉 Docs</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link active" href="./project.html">Mate Project</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./cli.html">Mate CLI</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./mate.html">Runtime</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./config.html">Configuration</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="./tutorials.html">Tutorials</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container" style="max-width: 800px">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <style>
          html,
          body {
            background: #285430;
            color: black;
          }
          code {
            color: #32cd32;
          }
          h1 {
            font-size: 2.5rem;
          }
          div.container {
            background: #5f8d4e;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 4rem;
          }
          nav {
            background: #5f8d4e;
          }
        </style>
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          style="background: #5f8d4e; padding: 10px"
        >
          <a class="navbar-brand" href="./index.html">🧉 Docs</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link active" href="./project.html"
                  >Mate Project</a
                >
              </li>
              <li class="nav-item active">
                <a class="nav-link active" href="./cli.html">Mate CLI</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link active" href="./mate.html">Runtime</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link active" href="./config.html"
                  >Configuration</a
                >
              </li>
              <li class="nav-item active">
                <a class="nav-link active" href="./tutorials.html">Tutorials</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container" style="max-width: 800px">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
          />
          <style>
            html,
            body {
              background: #285430;
              color: black;
            }
            code {
              color: #32cd32;
            }
            h1 {
              font-size: 2.5rem;
            }
            div.container {
              background: #5f8d4e;
              padding: 1rem;
              border-radius: 0.5rem;
              margin-top: 4rem;
            }
            nav {
              background: #5f8d4e;
            }
          </style>
          <nav
            class="navbar navbar-expand-lg navbar-light fixed-top"
            style="background: #5f8d4e; padding: 10px"
          >
            <a class="navbar-brand" href="./index.html">🧉 Docs</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link active" href="./project.html"
                    >Mate Project</a
                  >
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" href="./cli.html">Mate CLI</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" href="./mate.html">Runtime</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" href="./config.html"
                    >Configuration</a
                  >
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" href="./tutorials.html"
                    >Tutorials</a
                  >
                </li>
              </ul>
            </div>
          </nav>
          <div class="container" style="max-width: 700px">
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
              integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
              crossorigin="anonymous"
            />
            <style>
              html,
              body {
                background: #285430;
                color: black;
              }
              code {
                color: #32cd32;
              }
              h1 {
                font-size: 2.5rem;
              }
              div.container {
                background: #5f8d4e;
                padding: 1rem;
                border-radius: 0.5rem;
                margin-top: 3rem;
              }
              nav {
                background: #5f8d4e;
              }
            </style>
            <nav
              class="navbar navbar-expand-lg navbar-light fixed-top"
              style="background: #5f8d4e; padding: 10px"
            >
              <a class="navbar-brand" href="./index.html">🧉 Docs</a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link active" href="./project.html"
                      >Mate Project</a
                    >
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link active" href="./cli.html">Mate CLI</a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link active" href="./mate.html">Runtime</a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link active" href="./config.html"
                      >Configuration</a
                    >
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link active" href="./tutorials.html"
                      >Tutorials</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
            <div class="container" style="max-width: 700px">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossorigin="anonymous"
              />
              <style>
                html,
                body {
                  background: #285430;
                  color: black;
                }
                code {
                  color: #32cd32;
                }
                h1 {
                  font-size: 2.5rem;
                }
                div.container {
                  background: #5f8d4e;
                  padding: 1rem;
                  border-radius: 0.5rem;
                  margin-top: 2.5rem;
                }
                nav {
                  background: #5f8d4e;
                }
              </style>
              <nav
                class="navbar navbar-expand-lg navbar-light fixed-top"
                style="background: #5f8d4e; padding: 10px"
              >
                <a class="navbar-brand" href="./index.html">🧉 Docs</a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link active" href="./project.html"
                        >Mate Project</a
                      >
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link active" href="./cli.html">Mate CLI</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link active" href="./mate.html">Runtime</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link active" href="./config.html"
                        >Configuration</a
                      >
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link active" href="./tutorials.html"
                        >Tutorials</a
                      >
                    </li>
                  </ul>
                </div>
              </nav>
              <div class="container" style="max-width: 700px">
                <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                  crossorigin="anonymous"
                />
                <style>
                  html,
                  body {
                    background: #285430;
                    color: black;
                  }
                  code {
                    color: #32cd32;
                  }
                  h1 {
                    font-size: 2.5rem;
                  }
                  div.container {
                    background: #5f8d4e;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 2rem;
                  }
                  nav {
                    background: #5f8d4e;
                  }
                </style>
                <nav
                  class="navbar navbar-expand-lg navbar-light fixed-top"
                  style="background: #5f8d4e; padding: 10px"
                >
                  <a class="navbar-brand" href="./index.html">🧉 Docs</a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link active" href="./project.html"
                          >Mate Project</a
                        >
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link active" href="./cli.html"
                          >Mate CLI</a
                        >
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link active" href="./mate.html"
                          >Runtime</a
                        >
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link active" href="./config.html"
                          >Configuration</a
                        >
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link active" href="./tutorials.html"
                          >Tutorials</a
                        >
                      </li>
                    </ul>
                  </div>
                </nav>
                <div class="container" style="max-width: 700px">
                  <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossorigin="anonymous"
                  />
                  <style>
                    html,
                    body {
                      background: #285430;
                      color: black;
                    }
                    code {
                      color: #32cd32;
                    }
                    h1 {
                      font-size: 2.5rem;
                    }
                    div.container {
                      background: #5f8d4e;
                      padding: 1rem;
                      border-radius: 0.5rem;
                      margin-top: 0.5rem;
                    }
                    nav {
                      background: #5f8d4e;
                    }
                  </style>
                  <nav
                    class="navbar navbar-expand-lg navbar-light fixed-top"
                    style="background: #5f8d4e; padding: 10px"
                  >
                    <a class="navbar-brand" href="./index.html">🧉 Docs</a>
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <a class="nav-link active" href="./project.html"
                            >Mate Project</a
                          >
                        </li>
                        <li class="nav-item active">
                          <a class="nav-link active" href="./cli.html"
                            >Mate CLI</a
                          >
                        </li>
                        <li class="nav-item active">
                          <a class="nav-link active" href="./mate.html"
                            >Runtime</a
                          >
                        </li>
                        <li class="nav-item active">
                          <a class="nav-link active" href="./config.html"
                            >Configuration</a
                          >
                        </li>
                        <li class="nav-item active">
                          <a class="nav-link active" href="./tutorials.html"
                            >Tutorials</a
                          >
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div class="container" style="max-width: 700px">
                    <link
                      rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                      crossorigin="anonymous"
                    />
                    <style>
                      html,
                      body {
                        background: #285430;
                        color: black;
                      }
                      code {
                        color: #32cd32;
                      }
                      h1 {
                        font-size: 2.5rem;
                      }
                      div.container {
                        background: #5f8d4e;
                        padding: 1rem;
                        border-radius: 0.5rem;
                        margin-top: 0.5rem;
                      }
                      nav {
                        background: #5f8d4e;
                      }
                    </style>
                    <nav
                      class="navbar navbar-expand-lg navbar-light"
                      style="background: #5f8d4e; padding: 10px"
                    >
                      <a class="navbar-brand" href="./index.html">🧉 Docs</a>
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav mr-auto">
                          <li class="nav-item active">
                            <a class="nav-link active" href="./project.html"
                              >Mate Project</a
                            >
                          </li>
                          <li class="nav-item active">
                            <a class="nav-link active" href="./cli.html"
                              >Mate CLI</a
                            >
                          </li>
                          <li class="nav-item active">
                            <a class="nav-link active" href="./mate.html"
                              >Runtime</a
                            >
                          </li>
                          <li class="nav-item active">
                            <a class="nav-link active" href="./config.html"
                              >Configuration</a
                            >
                          </li>
                          <li class="nav-item active">
                            <a class="nav-link active" href="./tutorials.html"
                              >Tutorials</a
                            >
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div class="container" style="max-width: 700px">
                      <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                        crossorigin="anonymous"
                      />
                      <style>
                        html,
                        body {
                          background: #285430;
                          color: black;
                        }
                        code {
                          color: #32cd32;
                        }
                        h1 {
                          font-size: 2.5rem;
                        }
                        div.container {
                          background: #5f8d4e;
                          padding: 1rem;
                          border-radius: 0.5rem;
                          margin-top: 1rem;
                        }
                        nav {
                          background: #5f8d4e;
                        }
                      </style>
                      <nav
                        class="navbar navbar-expand-lg navbar-light"
                        style="background: #5f8d4e; padding: 10px"
                      >
                        <a class="navbar-brand" href="./index.html">🧉 Docs</a>
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                          class="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                              <a class="nav-link active" href="./project.html"
                                >Mate Project</a
                              >
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link active" href="./cli.html"
                                >Mate CLI</a
                              >
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link active" href="./mate.html"
                                >Runtime</a
                              >
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link active" href="./config.html"
                                >Configuration</a
                              >
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link active" href="./tutorials.html"
                                >Tutorials</a
                              >
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <div class="container" style="max-width: 700px">
                        <link
                          rel="stylesheet"
                          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                          crossorigin="anonymous"
                        />
                        <style>
                          html,
                          body {
                            background: #285430;
                            color: black;
                          }
                          code {
                            color: #32cd32;
                          }
                          h1 {
                            font-size: 2.5rem;
                          }
                          div.container {
                            background: #5f8d4e;
                            padding: 1rem;
                            border-radius: 0.5rem;
                            margin-top: 1rem;
                          }
                          nav {
                            background: #5f8d4e;
                          }
                        </style>
                        <nav
                          class="navbar navbar-expand-lg navbar-light"
                          style="background: #5f8d4e; padding: 10px"
                        >
                          <a class="navbar-brand" href="./index.html"
                            >🧉 Docs</a
                          >
                          <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                          >
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                          >
                            <ul class="navbar-nav mr-auto">
                              <li class="nav-item active">
                                <a class="nav-link active" href="./project.html"
                                  >Mate Project</a
                                >
                              </li>
                              <li class="nav-item active">
                                <a class="nav-link active" href="./cli.html"
                                  >Mate CLI</a
                                >
                              </li>
                              <li class="nav-item active">
                                <a class="nav-link active" href="./mate.html"
                                  >Runtime</a
                                >
                              </li>
                              <li class="nav-item active">
                                <a class="nav-link active" href="./config.html"
                                  >Configuration</a
                                >
                              </li>
                              <li class="nav-item active">
                                <a
                                  class="nav-link active"
                                  href="./tutorials.html"
                                  >Tutorials</a
                                >
                              </li>
                            </ul>
                          </div>
                        </nav>
                        <div class="container" style="max-width: 1000px">
                          <link
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                            crossorigin="anonymous"
                          />
                          <style>
                            html,
                            body {
                              background: #285430;
                              color: black;
                            }
                            code {
                              color: #32cd32;
                            }
                            h1 {
                              font-size: 2.5rem;
                            }
                            div.container {
                              background: #5f8d4e;
                              padding: 1rem;
                              border-radius: 0.5rem;
                              margin-top: 1rem;
                            }
                            nav {
                              background: #5f8d4e;
                            }
                          </style>
                          <nav
                            class="navbar navbar-expand-lg navbar-light"
                            style="background: #5f8d4e; padding: 10px"
                          >
                            <a class="navbar-brand" href="./index.html"
                              >🧉 Docs</a
                            >
                            <button
                              class="navbar-toggler"
                              type="button"
                              data-toggle="collapse"
                              data-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                              class="collapse navbar-collapse"
                              id="navbarSupportedContent"
                            >
                              <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                  <a
                                    class="nav-link active"
                                    href="./project.html"
                                    >Mate Project</a
                                  >
                                </li>
                                <li class="nav-item active">
                                  <a class="nav-link active" href="./cli.html"
                                    >Mate CLI</a
                                  >
                                </li>
                                <li class="nav-item active">
                                  <a class="nav-link active" href="./mate.html"
                                    >Runtime</a
                                  >
                                </li>
                                <li class="nav-item active">
                                  <a
                                    class="nav-link active"
                                    href="./config.html"
                                    >Configuration</a
                                  >
                                </li>
                                <li class="nav-item active">
                                  <a
                                    class="nav-link active"
                                    href="./tutorials.html"
                                    >Tutorials</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </nav>
                          <div class="container" style="max-width: 1000px">
                            <link
                              rel="stylesheet"
                              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                              integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                              crossorigin="anonymous"
                            />
                            <style>
                              html,
                              body {
                                background: #285430;
                                color: black;
                              }
                              code {
                                color: #32cd32;
                              }
                              h1 {
                                font-size: 2.5rem;
                              }
                              div.container {
                                background: #5f8d4e;
                                padding: 1rem;
                                border-radius: 0.5rem;
                                margin-top: 1rem;
                              }
                              nav {
                                background: #5f8d4e;
                              }
                            </style>
                            <nav
                              class="navbar navbar-expand-lg navbar-light"
                              style="background: #5f8d4e; padding: 10px"
                            >
                              <a class="navbar-brand" href="./index.html"
                                >🧉 Docs</a
                              >
                              <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                <span class="navbar-toggler-icon"></span>
                              </button>
                              <div
                                class="collapse navbar-collapse"
                                id="navbarSupportedContent"
                              >
                                <ul class="navbar-nav mr-auto">
                                  <li class="nav-item active">
                                    <a
                                      class="nav-link active"
                                      href="./project.html"
                                      >Mate Project</a
                                    >
                                  </li>
                                  <li class="nav-item active">
                                    <a class="nav-link active" href="./cli.html"
                                      >Mate CLI</a
                                    >
                                  </li>
                                  <li class="nav-item active">
                                    <a
                                      class="nav-link active"
                                      href="./mate.html"
                                      >Runtime</a
                                    >
                                  </li>
                                  <li class="nav-item active">
                                    <a
                                      class="nav-link active"
                                      href="./config.html"
                                      >Configuration</a
                                    >
                                  </li>
                                  <li class="nav-item active">
                                    <a
                                      class="nav-link active"
                                      href="./tutorials.html"
                                      >Tutorials</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </nav>
                            <div class="container" style="max-width: 1000px">
                              <link
                                rel="stylesheet"
                                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                crossorigin="anonymous"
                              />
                              <style>
                                html,
                                body {
                                  background: #285430;
                                  color: black;
                                }
                                code {
                                  color: #32cd32;
                                }
                                h1 {
                                  font-size: 2.5rem;
                                }
                                div.container {
                                  background: #5f8d4e;
                                  padding: 1rem;
                                  border-radius: 0.5rem;
                                  margin-top: 1rem;
                                }
                                nav {
                                  background: #5f8d4e;
                                }
                              </style>
                              <nav
                                class="navbar navbar-expand-lg navbar-light"
                                style="background: #5f8d4e; padding: 10px"
                              >
                                <a class="navbar-brand" href="./index.html"
                                  >🧉 Docs</a
                                >
                                <button
                                  class="navbar-toggler"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#navbarSupportedContent"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                >
                                  <span class="navbar-toggler-icon"></span>
                                </button>
                                <div
                                  class="collapse navbar-collapse"
                                  id="navbarSupportedContent"
                                >
                                  <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                      <a
                                        class="nav-link active"
                                        href="./project.html"
                                        >Mate Project</a
                                      >
                                    </li>
                                    <li class="nav-item active">
                                      <a
                                        class="nav-link active"
                                        href="./cli.html"
                                        >Mate CLI</a
                                      >
                                    </li>
                                    <li class="nav-item active">
                                      <a
                                        class="nav-link active"
                                        href="./mate.html"
                                        >Runtime</a
                                      >
                                    </li>
                                    <li class="nav-item active">
                                      <a
                                        class="nav-link active"
                                        href="./config.html"
                                        >Configuration</a
                                      >
                                    </li>
                                    <li class="nav-item active">
                                      <a
                                        class="nav-link active"
                                        href="./tutorials.html"
                                        >Tutorials</a
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </nav>
                              <div class="container" style="max-width: 1000px">
                                <link
                                  rel="stylesheet"
                                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                  crossorigin="anonymous"
                                />
                                <style>
                                  html,
                                  body {
                                    background: #285430;
                                    color: black;
                                  }
                                  code {
                                    color: #32cd32;
                                  }
                                  h1 {
                                    font-size: 2.5rem;
                                  }
                                  div.container {
                                    background: #5f8d4e;
                                    padding: 1rem;
                                    border-radius: 0.5rem;
                                    margin-top: 1rem;
                                  }
                                  nav {
                                    background: #5f8d4e;
                                  }
                                </style>
                                <nav
                                  class="navbar navbar-expand-lg navbar-light"
                                  style="background: #5f8d4e; padding: 10px"
                                >
                                  <a class="navbar-brand" href="./index.html"
                                    >🧉 Docs</a
                                  >
                                  <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                  >
                                    <span class="navbar-toggler-icon"></span>
                                  </button>
                                  <div
                                    class="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                  >
                                    <ul class="navbar-nav mr-auto">
                                      <li class="nav-item active">
                                        <a
                                          class="nav-link active"
                                          href="./project.html"
                                          >Mate Project</a
                                        >
                                      </li>
                                      <li class="nav-item active">
                                        <a
                                          class="nav-link active"
                                          href="./cli.html"
                                          >Mate CLI</a
                                        >
                                      </li>
                                      <li class="nav-item active">
                                        <a
                                          class="nav-link active"
                                          href="./mate.html"
                                          >Runtime</a
                                        >
                                      </li>
                                      <li class="nav-item active">
                                        <a
                                          class="nav-link active"
                                          href="./config.html"
                                          >Configuration</a
                                        >
                                      </li>
                                      <li class="nav-item active">
                                        <a
                                          class="nav-link active"
                                          href="./tutorials.html"
                                          >Tutorials</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </nav>
                                <div
                                  class="container"
                                  style="max-width: 1000px"
                                >
                                  <link
                                    rel="stylesheet"
                                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                    crossorigin="anonymous"
                                  />
                                  <style>
                                    html,
                                    body {
                                      background: #285430;
                                      color: black;
                                    }
                                    code {
                                      color: #32cd32;
                                    }
                                    h1 {
                                      font-size: 2.5rem;
                                    }
                                    div.container {
                                      background: #5f8d4e;
                                      padding: 1rem;
                                      border-radius: 0.5rem;
                                      margin-top: 1rem;
                                    }
                                    nav {
                                      background: #5f8d4e;
                                    }
                                  </style>
                                  <nav
                                    class="navbar navbar-expand-lg navbar-light"
                                    style="background: #5f8d4e; padding: 10px"
                                  >
                                    <a class="navbar-brand" href="./index.html"
                                      >🧉 Docs</a
                                    >
                                    <button
                                      class="navbar-toggler"
                                      type="button"
                                      data-toggle="collapse"
                                      data-target="#navbarSupportedContent"
                                      aria-controls="navbarSupportedContent"
                                      aria-expanded="false"
                                      aria-label="Toggle navigation"
                                    >
                                      <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                      class="collapse navbar-collapse"
                                      id="navbarSupportedContent"
                                    >
                                      <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                          <a
                                            class="nav-link active"
                                            href="./project.html"
                                            >Mate Project</a
                                          >
                                        </li>
                                        <li class="nav-item active">
                                          <a
                                            class="nav-link active"
                                            href="./cli.html"
                                            >Mate CLI</a
                                          >
                                        </li>
                                        <li class="nav-item active">
                                          <a
                                            class="nav-link active"
                                            href="./mate.html"
                                            >Runtime</a
                                          >
                                        </li>
                                        <li class="nav-item active">
                                          <a
                                            class="nav-link active"
                                            href="./config.html"
                                            >Configuration</a
                                          >
                                        </li>
                                        <li class="nav-item active">
                                          <a
                                            class="nav-link active"
                                            href="./tutorials.html"
                                            >Tutorials</a
                                          >
                                        </li>
                                      </ul>
                                    </div>
                                  </nav>
                                  <div
                                    class="container"
                                    style="max-width: 1000px"
                                  >
                                    <link
                                      rel="stylesheet"
                                      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                      crossorigin="anonymous"
                                    />
                                    <style>
                                      html,
                                      body {
                                        background: #285430;
                                        color: black;
                                      }
                                      code {
                                        color: #32cd32;
                                      }
                                      h1 {
                                        font-size: 2.5rem;
                                      }
                                      div.container {
                                        background: #5f8d4e;
                                        padding: 1rem;
                                        border-radius: 0.5rem;
                                        margin-top: 1rem;
                                      }
                                      nav {
                                        background: #5f8d4e;
                                      }
                                    </style>
                                    <nav
                                      class="navbar navbar-expand-lg navbar-light"
                                      style="background: #5f8d4e; padding: 10px"
                                    >
                                      <a
                                        class="navbar-brand"
                                        href="./index.html"
                                        >🧉 Docs</a
                                      >
                                      <button
                                        class="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                      >
                                        <span
                                          class="navbar-toggler-icon"
                                        ></span>
                                      </button>
                                      <div
                                        class="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                      >
                                        <ul class="navbar-nav mr-auto">
                                          <li class="nav-item active">
                                            <a
                                              class="nav-link active"
                                              href="./project.html"
                                              >Mate Project</a
                                            >
                                          </li>
                                          <li class="nav-item active">
                                            <a
                                              class="nav-link active"
                                              href="./cli.html"
                                              >Mate CLI</a
                                            >
                                          </li>
                                          <li class="nav-item active">
                                            <a
                                              class="nav-link active"
                                              href="./mate.html"
                                              >Runtime</a
                                            >
                                          </li>
                                          <li class="nav-item active">
                                            <a
                                              class="nav-link active"
                                              href="./config.html"
                                              >Configuration</a
                                            >
                                          </li>
                                          <li class="nav-item active">
                                            <a
                                              class="nav-link active"
                                              href="./tutorials.html"
                                              >Tutorials</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </nav>
                                    <div
                                      class="container"
                                      style="max-width: 1000px"
                                    >
                                      <link
                                        rel="stylesheet"
                                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                        crossorigin="anonymous"
                                      />
                                      <style>
                                        html,
                                        body {
                                          background: #285430;
                                          color: black;
                                        }
                                        code {
                                          color: #32cd32;
                                        }
                                        h1 {
                                          font-size: 2.5rem;
                                        }
                                        div.container {
                                          background: #5f8d4e;
                                          padding: 1rem;
                                          border-radius: 0.5rem;
                                          margin-top: 1rem;
                                        }
                                        nav {
                                          background: #5f8d4e;
                                        }
                                      </style>
                                      <nav
                                        class="navbar navbar-expand-lg navbar-light"
                                        style="
                                          background: #5f8d4e;
                                          padding: 10px;
                                        "
                                      >
                                        <a
                                          class="navbar-brand"
                                          href="./index.html"
                                          >🧉 Docs</a
                                        >
                                        <button
                                          class="navbar-toggler"
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#navbarSupportedContent"
                                          aria-controls="navbarSupportedContent"
                                          aria-expanded="false"
                                          aria-label="Toggle navigation"
                                        >
                                          <span
                                            class="navbar-toggler-icon"
                                          ></span>
                                        </button>
                                        <div
                                          class="collapse navbar-collapse"
                                          id="navbarSupportedContent"
                                        >
                                          <ul class="navbar-nav mr-auto">
                                            <li class="nav-item active">
                                              <a
                                                class="nav-link active"
                                                href="./project.html"
                                                >Mate Project</a
                                              >
                                            </li>
                                            <li class="nav-item active">
                                              <a
                                                class="nav-link active"
                                                href="./cli.html"
                                                >Mate CLI</a
                                              >
                                            </li>
                                            <li class="nav-item active">
                                              <a
                                                class="nav-link active"
                                                href="./mate.html"
                                                >Runtime</a
                                              >
                                            </li>
                                            <li class="nav-item active">
                                              <a
                                                class="nav-link active"
                                                href="./config.html"
                                                >Configuration</a
                                              >
                                            </li>
                                            <li class="nav-item active">
                                              <a
                                                class="nav-link active"
                                                href="./tutorials.html"
                                                >Tutorials</a
                                              >
                                            </li>
                                          </ul>
                                        </div>
                                      </nav>
                                      <div
                                        class="container"
                                        style="max-width: 1000px"
                                      >
                                        <link
                                          rel="stylesheet"
                                          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                          crossorigin="anonymous"
                                        />
                                        <style>
                                          html,
                                          body {
                                            background: #285430;
                                            color: black;
                                          }
                                          code {
                                            color: #32cd32;
                                          }
                                          h1 {
                                            font-size: 2.5rem;
                                          }
                                          div.container {
                                            background: #5f8d4e;
                                            padding: 1rem;
                                            border-radius: 0.5rem;
                                            margin-top: 1rem;
                                          }
                                          nav {
                                            background: #5f8d4e;
                                          }
                                        </style>
                                        <nav
                                          class="navbar navbar-expand-lg navbar-light"
                                          style="
                                            background: #5f8d4e;
                                            padding: 10px;
                                          "
                                        >
                                          <a
                                            class="navbar-brand"
                                            href="./index.html"
                                            >🧉 Docs</a
                                          >
                                          <button
                                            class="navbar-toggler"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                          >
                                            <span
                                              class="navbar-toggler-icon"
                                            ></span>
                                          </button>
                                          <div
                                            class="collapse navbar-collapse"
                                            id="navbarSupportedContent"
                                          >
                                            <ul class="navbar-nav mr-auto">
                                              <li class="nav-item active">
                                                <a
                                                  class="nav-link active"
                                                  href="./project.html"
                                                  >Mate Project</a
                                                >
                                              </li>
                                              <li class="nav-item active">
                                                <a
                                                  class="nav-link active"
                                                  href="./cli.html"
                                                  >Mate CLI</a
                                                >
                                              </li>
                                              <li class="nav-item active">
                                                <a
                                                  class="nav-link active"
                                                  href="./mate.html"
                                                  >Runtime</a
                                                >
                                              </li>
                                              <li class="nav-item active">
                                                <a
                                                  class="nav-link active"
                                                  href="./config.html"
                                                  >Configuration</a
                                                >
                                              </li>
                                              <li class="nav-item active">
                                                <a
                                                  class="nav-link active"
                                                  href="./tutorials.html"
                                                  >Tutorials</a
                                                >
                                              </li>
                                            </ul>
                                          </div>
                                        </nav>
                                        <div
                                          class="container"
                                          style="max-width: 1000px"
                                        >
                                          <link
                                            rel="stylesheet"
                                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                            crossorigin="anonymous"
                                          />
                                          <style>
                                            html,
                                            body {
                                              background: #285430;
                                              color: black;
                                            }
                                            code {
                                              color: #32cd32;
                                            }
                                            h1 {
                                              font-size: 2.5rem;
                                            }
                                            div.container {
                                              background: #5f8d4e;
                                              padding: 1rem;
                                              border-radius: 0.5rem;
                                              margin-top: 1rem;
                                            }
                                            nav {
                                              background: #5f8d4e;
                                            }
                                          </style>
                                          <nav
                                            class="navbar navbar-expand-lg navbar-light"
                                            style="
                                              background: #5f8d4e;
                                              padding: 10px;
                                            "
                                          >
                                            <a
                                              class="navbar-brand"
                                              href="./index.html"
                                              >🧉 Docs</a
                                            >
                                            <button
                                              class="navbar-toggler"
                                              type="button"
                                              data-toggle="collapse"
                                              data-target="#navbarSupportedContent"
                                              aria-controls="navbarSupportedContent"
                                              aria-expanded="false"
                                              aria-label="Toggle navigation"
                                            >
                                              <span
                                                class="navbar-toggler-icon"
                                              ></span>
                                            </button>
                                            <div
                                              class="collapse navbar-collapse"
                                              id="navbarSupportedContent"
                                            >
                                              <ul class="navbar-nav mr-auto">
                                                <li class="nav-item active">
                                                  <a
                                                    class="nav-link active"
                                                    href="./project.html"
                                                    >Mate Project</a
                                                  >
                                                </li>
                                                <li class="nav-item active">
                                                  <a
                                                    class="nav-link active"
                                                    href="./cli.html"
                                                    >Mate CLI</a
                                                  >
                                                </li>
                                                <li class="nav-item active">
                                                  <a
                                                    class="nav-link active"
                                                    href="./mate.html"
                                                    >Runtime</a
                                                  >
                                                </li>
                                                <li class="nav-item active">
                                                  <a
                                                    class="nav-link active"
                                                    href="./config.html"
                                                    >Configuration</a
                                                  >
                                                </li>
                                                <li class="nav-item active">
                                                  <a
                                                    class="nav-link active"
                                                    href="./tutorials.html"
                                                    >Tutorials</a
                                                  >
                                                </li>
                                              </ul>
                                            </div>
                                          </nav>
                                          <div
                                            class="container"
                                            style="max-width: 1000px"
                                          >
                                            <link
                                              rel="stylesheet"
                                              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                              integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                              crossorigin="anonymous"
                                            />
                                            <style>
                                              html,
                                              body {
                                                background: #285430;
                                                color: black;
                                              }
                                              code {
                                                color: #32cd32;
                                              }
                                              h1 {
                                                font-size: 2.5rem;
                                              }
                                              div.container {
                                                background: #5f8d4e;
                                                padding: 1rem;
                                                border-radius: 0.5rem;
                                                margin-top: 1rem;
                                              }
                                              nav {
                                                background: #5f8d4e;
                                              }
                                            </style>
                                            <nav
                                              class="navbar navbar-expand-lg navbar-light"
                                              style="
                                                background: #5f8d4e;
                                                padding: 10px;
                                              "
                                            >
                                              <a
                                                class="navbar-brand"
                                                href="./index.html"
                                                >🧉 Docs</a
                                              >
                                              <button
                                                class="navbar-toggler"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                              >
                                                <span
                                                  class="navbar-toggler-icon"
                                                ></span>
                                              </button>
                                              <div
                                                class="collapse navbar-collapse"
                                                id="navbarSupportedContent"
                                              >
                                                <ul class="navbar-nav mr-auto">
                                                  <li class="nav-item active">
                                                    <a
                                                      class="nav-link active"
                                                      href="./project.html"
                                                      >Mate Project</a
                                                    >
                                                  </li>
                                                  <li class="nav-item active">
                                                    <a
                                                      class="nav-link active"
                                                      href="./cli.html"
                                                      >Mate CLI</a
                                                    >
                                                  </li>
                                                  <li class="nav-item active">
                                                    <a
                                                      class="nav-link active"
                                                      href="./mate.html"
                                                      >Runtime</a
                                                    >
                                                  </li>
                                                  <li class="nav-item active">
                                                    <a
                                                      class="nav-link active"
                                                      href="./config.html"
                                                      >Configuration</a
                                                    >
                                                  </li>
                                                </ul>
                                              </div>
                                            </nav>
                                            <div
                                              class="container"
                                              style="max-width: 1000px"
                                            >
                                              <link
                                                rel="stylesheet"
                                                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                                crossorigin="anonymous"
                                              />
                                              <style>
                                                html,
                                                body {
                                                  background: #285430;
                                                  color: black;
                                                }
                                                code {
                                                  color: #32cd32;
                                                }
                                                h1 {
                                                  font-size: 2.5rem;
                                                }
                                                div.container {
                                                  background: #5f8d4e;
                                                  padding: 1rem;
                                                  border-radius: 0.5rem;
                                                  margin-top: 1rem;
                                                }
                                                nav {
                                                  background: #5f8d4e;
                                                }
                                              </style>
                                              <nav
                                                class="navbar navbar-expand-lg navbar-light"
                                                style="
                                                  background: #5f8d4e;
                                                  padding: 10px;
                                                "
                                              >
                                                <a
                                                  class="navbar-brand"
                                                  href="./index.html"
                                                  >🧉 Docs</a
                                                >
                                                <button
                                                  class="navbar-toggler"
                                                  type="button"
                                                  data-toggle="collapse"
                                                  data-target="#navbarSupportedContent"
                                                  aria-controls="navbarSupportedContent"
                                                  aria-expanded="false"
                                                  aria-label="Toggle navigation"
                                                >
                                                  <span
                                                    class="navbar-toggler-icon"
                                                  ></span>
                                                </button>
                                                <div
                                                  class="collapse navbar-collapse"
                                                  id="navbarSupportedContent"
                                                >
                                                  <ul
                                                    class="navbar-nav mr-auto"
                                                  >
                                                    <li class="nav-item active">
                                                      <a
                                                        class="nav-link active"
                                                        href="./project.html"
                                                        >Mate Project</a
                                                      >
                                                    </li>
                                                    <li class="nav-item active">
                                                      <a
                                                        class="nav-link active"
                                                        href="./cli.html"
                                                        >Mate CLI</a
                                                      >
                                                    </li>
                                                    <li class="nav-item active">
                                                      <a
                                                        class="nav-link active"
                                                        href="./mate.html"
                                                        >Runtime</a
                                                      >
                                                    </li>
                                                    <li class="nav-item active">
                                                      <a
                                                        class="nav-link active"
                                                        href="./config.html"
                                                        >Configuration</a
                                                      >
                                                    </li>
                                                  </ul>
                                                </div>
                                              </nav>
                                              <div
                                                class="container"
                                                style="max-width: 1000px"
                                              >
                                                <link
                                                  rel="stylesheet"
                                                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                                  crossorigin="anonymous"
                                                />
                                                <style>
                                                  html,
                                                  body {
                                                    background: #285430;
                                                    color: black;
                                                  }
                                                  code {
                                                    color: #32cd32;
                                                  }
                                                  h1 {
                                                    font-size: 2.5rem;
                                                  }
                                                  div.container {
                                                    background: #5f8d4e;
                                                    padding: 1rem;
                                                    border-radius: 0.5rem;
                                                    margin-top: 1rem;
                                                  }
                                                  nav {
                                                    background: #5f8d4e;
                                                  }
                                                </style>
                                                <nav
                                                  class="navbar navbar-expand-lg navbar-light"
                                                  style="
                                                    background: #5f8d4e;
                                                    padding: 10px;
                                                  "
                                                >
                                                  <a
                                                    class="navbar-brand"
                                                    href="./index.html"
                                                    >🧉 Docs</a
                                                  >
                                                  <button
                                                    class="navbar-toggler"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target="#navbarSupportedContent"
                                                    aria-controls="navbarSupportedContent"
                                                    aria-expanded="false"
                                                    aria-label="Toggle navigation"
                                                  >
                                                    <span
                                                      class="navbar-toggler-icon"
                                                    ></span>
                                                  </button>
                                                  <div
                                                    class="collapse navbar-collapse"
                                                    id="navbarSupportedContent"
                                                  >
                                                    <ul
                                                      class="navbar-nav mr-auto"
                                                    >
                                                      <li
                                                        class="nav-item active"
                                                      >
                                                        <a
                                                          class="nav-link active"
                                                          href="./project.html"
                                                          >Mate Project</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="nav-item active"
                                                      >
                                                        <a
                                                          class="nav-link active"
                                                          href="./cli.html"
                                                          >Mate CLI</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="nav-item active"
                                                      >
                                                        <a
                                                          class="nav-link active"
                                                          href="./mate.html"
                                                          >Runtime</a
                                                        >
                                                      </li>
                                                      <li
                                                        class="nav-item active"
                                                      >
                                                        <a
                                                          class="nav-link active"
                                                          href="./config.html"
                                                          >Configuration</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </nav>
                                                <div
                                                  class="container"
                                                  style="max-width: 1000px"
                                                >
                                                  <link
                                                    rel="stylesheet"
                                                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                                                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                                                    crossorigin="anonymous"
                                                  />
                                                  <style>
                                                    html,
                                                    body {
                                                      background: #285430;
                                                      color: black;
                                                    }
                                                    code {
                                                      color: #32cd32;
                                                    }
                                                    h1 {
                                                      font-size: 2.5rem;
                                                    }
                                                    div.container {
                                                      background: #5f8d4e;
                                                      padding: 1rem;
                                                      border-radius: 0.5rem;
                                                      margin-top: 1rem;
                                                    }
                                                    nav {
                                                      background: #5f8d4e;
                                                    }
                                                  </style>
                                                  <nav
                                                    class="navbar navbar-expand-lg navbar-light"
                                                    style="
                                                      background: #5f8d4e;
                                                      padding: 10px;
                                                    "
                                                  >
                                                    <a
                                                      class="navbar-brand"
                                                      href="./index.html"
                                                      >🧉 Docs</a
                                                    >
                                                    <button
                                                      class="navbar-toggler"
                                                      type="button"
                                                      data-toggle="collapse"
                                                      data-target="#navbarSupportedContent"
                                                      aria-controls="navbarSupportedContent"
                                                      aria-expanded="false"
                                                      aria-label="Toggle navigation"
                                                    >
                                                      <span
                                                        class="navbar-toggler-icon"
                                                      ></span>
                                                    </button>
                                                    <div
                                                      class="collapse navbar-collapse"
                                                      id="navbarSupportedContent"
                                                    >
                                                      <ul
                                                        class="navbar-nav mr-auto"
                                                      >
                                                        <li
                                                          class="nav-item active"
                                                        >
                                                          <a
                                                            class="nav-link active"
                                                            href="./project.html"
                                                            >Mate Project</a
                                                          >
                                                        </li>
                                                        <li
                                                          class="nav-item active"
                                                        >
                                                          <a
                                                            class="nav-link active"
                                                            href="./cli.html"
                                                            >Mate CLI</a
                                                          >
                                                        </li>
                                                        <li
                                                          class="nav-item active"
                                                        >
                                                          <a
                                                            class="nav-link active"
                                                            href="./mate.html"
                                                            >Runtime</a
                                                          >
                                                        </li>
                                                        <li
                                                          class="nav-item active"
                                                        >
                                                          <a
                                                            class="nav-link active"
                                                            href="./config.html"
                                                            >Configuration</a
                                                          >
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </nav>
                                                  <div
                                                    class="container"
                                                    style="max-width: 1000px"
                                                  >
                                                    <hr />
                                                    <pre><code>mate clone &lt;source_model&gt; &lt;target_model&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      source_model :
                                                      <code>str</code> : Path to
                                                      the source model -
                                                      target_model :
                                                      <code>str</code> : Path to
                                                      the target model
                                                    </p>
                                                    <p>Clones a module</p>
                                                    <hr />
                                                    <pre><code>mate create &lt;path&gt; &lt;name&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      path : <code>str</code> :
                                                      Path to the module to
                                                      create - name :
                                                      <code>str</code> : Name of
                                                      the module to create
                                                    </p>
                                                    <p>Creates a new module</p>
                                                    <hr />
                                                    <pre><code>mate export &lt;source&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      source :
                                                      <code>str</code> : Path to
                                                      the object to export
                                                    </p>
                                                    <p>
                                                      Exports a function/class
                                                      from a module
                                                    </p>
                                                    <hr />
                                                    <pre><code>mate init &lt;project_name&gt; &lt;params&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      project_name :
                                                      <code>str</code> : Name of
                                                      the project - params :
                                                      <code>str</code> :
                                                      Parameters to pass to the
                                                      project. These are the
                                                      same key-value pairs that
                                                      are in the
                                                      <code>mate.json</code>
                                                      file (check out that
                                                      section).
                                                    </p>
                                                    <p>
                                                      Creates a new mate project
                                                      in the current folder.
                                                    </p>
                                                    <p>
                                                      <strong>Example</strong>
                                                    </p>
                                                    <pre><code>mate init my_fancy_project venv=false</code></pre>
                                                    <hr />
                                                    <pre><code>mate install &lt;url&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      url : <code>str</code> :
                                                      URL to the package to
                                                      install
                                                    </p>
                                                    <p>
                                                      Installs a module from
                                                      url. The URL must be a git
                                                      repository and point to
                                                      the full path of the
                                                      module.
                                                    </p>
                                                    <hr />
                                                    <pre><code>mate md </code></pre>
                                                    <p>
                                                      <strong>Params</strong>
                                                    </p>
                                                    <p>
                                                      Prints the markdown
                                                      documentation of the
                                                      project
                                                    </p>
                                                    <hr />
                                                    <pre><code>mate pip &lt;commands&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      commands :
                                                      <code>str</code> :
                                                    </p>
                                                    <p>
                                                      Executes inside the python
                                                      venv
                                                    </p>
                                                    <pre><code>mate pip install numpy</code></pre>
                                                    <hr />
                                                    <pre><code>mate remove &lt;target&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      target :
                                                      <code>str</code> : Path to
                                                      the module to remove
                                                    </p>
                                                    <p>Removes a module</p>
                                                    <hr />
                                                    <pre><code>mate rename &lt;path&gt; &lt;name&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      path : <code>str</code> :
                                                      Path to the module to
                                                      rename - name :
                                                      <code>str</code> : New
                                                      name of the module
                                                    </p>
                                                    <p>Renames a module.</p>
                                                    <hr />
                                                    <pre><code>mate results </code></pre>
                                                    <p>
                                                      <strong>Params</strong>
                                                    </p>
                                                    <p>Prints results</p>
                                                    <hr />
                                                    <pre><code>mate run &lt;experiment_name&gt; &lt;command&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      experiment_name :
                                                      <code>str</code> : Name of
                                                      the experiment to run -
                                                      command :
                                                      <code>str</code> : Command
                                                      to run
                                                    </p>
                                                    <p>
                                                      Runs an experiment with
                                                      the given command
                                                    </p>
                                                    <hr />
                                                    <pre><code>mate show &lt;path&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      path : <code>str</code> :
                                                      Path to the module to show
                                                    </p>
                                                    <p>
                                                      Shows information about a
                                                      module or experiment.
                                                    </p>
                                                    <hr />
                                                    <pre><code>mate summary </code></pre>
                                                    <p>
                                                      <strong>Params</strong>
                                                    </p>
                                                    <p>
                                                      Prints a summary of the
                                                      mate project.
                                                    </p>
                                                    <hr />
                                                    <pre><code>mate venv &lt;command&gt;</code></pre>
                                                    <p>
                                                      <strong>Params</strong> -
                                                      command :
                                                      <code>str</code> : Command
                                                      to run in the virtual
                                                      environment
                                                    </p>
                                                    <p>
                                                      Executes inside the python
                                                      venv
                                                    </p>
                                                    <hr />
                                                    <h3
                                                      id="configuring-a-mate-project"
                                                    >
                                                      Configuring a mate project
                                                    </h3>
                                                    <p>
                                                      <code>mate.json</code> is
                                                      the main configuration
                                                      file for a Mate project.
                                                      It defines where the root
                                                      of a mate project is. The
                                                      format is JSON.
                                                    </p>
                                                    <p>
                                                      <strong
                                                        >Key-value pairs</strong
                                                      >
                                                    </p>
                                                    <ul>
                                                      <li>
                                                        results_folder :
                                                        <code>str</code> : The
                                                        folder where all results
                                                        are stored. This is
                                                        relative to the root
                                                        <strong>above</strong>
                                                        the project.
                                                      </li>
                                                      <li>
                                                        venv :
                                                        <code>bool</code>=true :
                                                        Whether to use a virtual
                                                        environment. If
                                                        <code>True</code> a
                                                        virtual environment is
                                                        created in the project
                                                        root. If
                                                        <code>False</code> no
                                                        virtual environment is
                                                        created and the same
                                                        python as the one used
                                                        to execute mate will be
                                                        used instead.
                                                      </li>
                                                    </ul>
                                                    <p>
                                                      <strong>Example</strong>:
                                                    </p>
                                                    <p>
                                                      If your
                                                      <code>mate.json</code>
                                                      lies in
                                                      <code
                                                        >/home/user/project_repo/mate_project/mate.json</code
                                                      >
                                                      and it looks like this:
                                                    </p>
                                                    <div
                                                      class="sourceCode"
                                                      id="cb17"
                                                    >
                                                      <pre
                                                        class="sourceCode json"
                                                      ><code class="sourceCode json"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="fu">{</span></span>
<span id="cb17-2"><a href="#cb17-2" aria-hidden="true" tabindex="-1"></a><span class="dt">&quot;results_folder&quot;</span><span class="fu">:</span> <span class="st">&quot;results&quot;</span></span>
<span id="cb17-3"><a href="#cb17-3" aria-hidden="true" tabindex="-1"></a><span class="st">&quot;venv&quot;</span><span class="er">:</span><span class="kw">true</span></span>
<span id="cb17-4"><a href="#cb17-4" aria-hidden="true" tabindex="-1"></a><span class="fu">}</span></span></code></pre>
                                                    </div>
                                                    <p>
                                                      Then the results folder
                                                      will be
                                                      <code
                                                        >/home/user/project_repo/results</code
                                                      >
                                                    </p>
                                                  </div>

                                                  <script
                                                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                                    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                                    crossorigin="anonymous"
                                                  ><\/script>

                                                  <script
                                                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                                    crossorigin="anonymous"
                                                  ><\/script>
                                                </div>

                                                <script
                                                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                                  integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                                  crossorigin="anonymous"
                                                ><\/script>

                                                <script
                                                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                                  integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                                  crossorigin="anonymous"
                                                ><\/script>
                                              </div>

                                              <script
                                                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                                integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                                crossorigin="anonymous"
                                              ><\/script>

                                              <script
                                                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                                crossorigin="anonymous"
                                              ><\/script>
                                            </div>

                                            <script
                                              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                              integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                              crossorigin="anonymous"
                                            ><\/script>

                                            <script
                                              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                              integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                              crossorigin="anonymous"
                                            ><\/script>
                                          </div>

                                          <script
                                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                            integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                            crossorigin="anonymous"
                                          ><\/script>

                                          <script
                                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                            crossorigin="anonymous"
                                          ><\/script>
                                        </div>

                                        <script
                                          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                          crossorigin="anonymous"
                                        ><\/script>

                                        <script
                                          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                          crossorigin="anonymous"
                                        ><\/script>
                                      </div>

                                      <script
                                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                        integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                        crossorigin="anonymous"
                                      ><\/script>

                                      <script
                                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                        crossorigin="anonymous"
                                      ><\/script>
                                    </div>

                                    <script
                                      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                      integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                      crossorigin="anonymous"
                                    ><\/script>

                                    <script
                                      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                      crossorigin="anonymous"
                                    ><\/script>
                                  </div>

                                  <script
                                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                    crossorigin="anonymous"
                                  ><\/script>

                                  <script
                                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                    crossorigin="anonymous"
                                  ><\/script>
                                </div>

                                <script
                                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                  integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                  crossorigin="anonymous"
                                ><\/script>

                                <script
                                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                  integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                  crossorigin="anonymous"
                                ><\/script>
                              </div>

                              <script
                                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                                integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                                crossorigin="anonymous"
                              ><\/script>

                              <script
                                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                                crossorigin="anonymous"
                              ><\/script>
                            </div>

                            <script
                              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                              integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                              crossorigin="anonymous"
                            ><\/script>

                            <script
                              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                              integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                              crossorigin="anonymous"
                            ><\/script>
                          </div>

                          <script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                            integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                            crossorigin="anonymous"
                          ><\/script>

                          <script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                            crossorigin="anonymous"
                          ><\/script>
                        </div>

                        <script
                          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                          crossorigin="anonymous"
                        ><\/script>

                        <script
                          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                          crossorigin="anonymous"
                        ><\/script>
                      </div>

                      <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                        integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                        crossorigin="anonymous"
                      ><\/script>

                      <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                        crossorigin="anonymous"
                      ><\/script>
                    </div>

                    <script
                      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                      integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                      crossorigin="anonymous"
                    ><\/script>

                    <script
                      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                      crossorigin="anonymous"
                    ><\/script>
                  </div>

                  <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                    crossorigin="anonymous"
                  ><\/script>

                  <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                    crossorigin="anonymous"
                  ><\/script>
                </div>

                <script
                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                  integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                  crossorigin="anonymous"
                ><\/script>

                <script
                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                  crossorigin="anonymous"
                ><\/script>
              </div>

              <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                crossorigin="anonymous"
              ><\/script>

              <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                crossorigin="anonymous"
              ><\/script>
            </div>

            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
              integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
              crossorigin="anonymous"
            ><\/script>

            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
              crossorigin="anonymous"
            ><\/script>
          </div>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
            integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
            crossorigin="anonymous"
          ><\/script>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
          ><\/script>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
          crossorigin="anonymous"
        ><\/script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"
        ><\/script>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
        integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
        crossorigin="anonymous"
      ><\/script>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ><\/script>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
      integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
      crossorigin="anonymous"
    ><\/script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ><\/script>
  </div>

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
    crossorigin="anonymous"
  ><\/script>

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ><\/script>
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"><\/script>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>
    
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"><\/script>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>
    
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"><\/script>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>
    `,D0=`<h1 id="tutorials">Tutorials</h1>
<ul>
<li><a href="./mate_project_from_scratch.md"><strong>Mate project from
scratch</strong></a></li>
<li><a href="./replicating_an_existing_project.md"><strong>Replicating
an existing project</strong></a></li>
<li><a href="./installing_a_mate_package.md"><strong>Installing a mate
package</strong></a></li>
</ul>
`,z0=`<h1 id="available-soon">Available Soon</h1>
`,F0=`<h1 id="mate-runtime">Mate Runtime</h1>
<p>Class containing all the information about the current run. You
usually want to import it into your experiment like this:</p>
<p align="center" style>
<img src="./imgs/python_de61f1f24fe60afb6f39e39e8a19fa27.svg" style="max-width:550px" alt="Your Image">
</p>
<p>You can use this to: - Get the current CLI command - Save the run to
a JSON file - Get the current save directory - Get the current
checkpoint path</p>
<p><strong>Example</strong></p>
<p align="center" style>
<img src="./imgs/python_5394662fc05f9041bd2eeb14e6f3316f.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<h3
id="mate.resultvalues-dict---none"><code>mate.result(values: dict) -&gt; None</code></h3>
<p>Save the results of the current run.</p>
<p><strong>Example</strong></p>
<p align="center" style>
<img src="./imgs/python_68971974bee6f7c32178807e5e3524c6.svg" style="max-width:550px" alt="Your Image">
</p>
<p>This is not meant to replace a proper logging framework, but rather
to provide a simple way to save the results of an experiment. This is
especially useful when you want to compare multiple experiments (see
<code>mate.results()</code>).</p>
<p><strong>Pytorch Lightning Example</strong></p>
<p>If you want, with pytorch lightning, you can directly pass the
<code>logged_metrics</code> dictionary to this function.</p>
<p align="center" style>
<img src="./imgs/python_0eeddeef797fd6a829d422195e2db94d.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<h3
id="mate.results---dictstr-dictstr-float"><code>mate.results() -&gt; dict[str, dict[str, float]]</code></h3>
<p>Get the results of all experiments. in the form of a dictionary. The
dictionary is structured as follows:</p>
<p align="center" style>
<img src="./imgs/python_b5133ff57f74d897dc3465e4c37ef46b.svg" style="max-width:550px" alt="Your Image">
</p>
<p align="center" style>
<img src="./imgs/python_cb990227e65fe21658e842f17c77154c.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
`,A0=`<h1 id="mate-project-from-scratch">Mate project from scratch</h1>
<p>This is a step by step guide to create a new project from
scratch.</p>
<h2 id="create-a-new-project">1 Create a new project</h2>
<p>Make sure you’re inside a <strong>git</strong> repository and run the
following command:</p>
<p align="center" style>
<img src="./imgs/None_4895d540a4c2b1dd4c7970e8ce84c86e.svg" style="max-width:550px" alt="Your Image">
</p>
<p>This will do the following:</p>
<ul>
<li>Create a new folder called <code>new_project</code>, with inside the
default folder structure</li>
<li>Create a virtual environment. This will be used to install all the
dependencies</li>
</ul>
<p>To make sure everything worked, first navigate inside the
<code>new_project</code> folder:</p>
<p align="center" style>
<img src="./imgs/bash_789d7abf2adb950f000c2d624e865c20.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Then run:</p>
<p align="center" style>
<img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image">
</p>
<h2 id="create-a-your-first-module">2 Create a your first module</h2>
<p>Make sure you’re still inside the <code>new_project</code> folder and
run the following command:</p>
<p align="center" style>
<img src="./imgs/bash_fc48862cdefaf78f565ff34a1859c353.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Now run again:</p>
<p align="center" style>
<img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Now let’s add some code to our module. Create a new file
<code>models/my_module/main.py</code> with your favorite editor and add
the following code:</p>
<p align="center" style>
<img src="./imgs/python_9d2be9ba1da6403958c70858e78960c4.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Then export the function to the <code>__init__.py</code> file by
running:</p>
<p align="center" style>
<img src="./imgs/bash_cf0c2b10dbe522a56c0d4552cccf0b79.svg" style="max-width:550px" alt="Your Image">
</p>
<h2 id="create-your-first-experiment">3 Create your first
experiment</h2>
<p>Now let’s create an experiment. Run the following command:</p>
<p align="center" style>
<img src="./imgs/bash_936a8f6a68d25d2dcd8df89eda2c8989.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Then edit the file <code>experiments/my_experiment.py</code></p>
<p align="center" style>
<img src="./imgs/python_7a778df3b29f27c0ebf0a8f1cfab848b.svg" style="max-width:550px" alt="Your Image">
</p>
<h2 id="run-your-experiment">4 Run your experiment</h2>
<p>Now let’s run the experiment. Run the following command:</p>
<p align="center" style>
<img src="./imgs/bash_07f188752de1b294a37b206bc95d59be.svg" style="max-width:550px" alt="Your Image">
</p>
<p>You should see <code>Training a model</code> printed in the console.
Hurrah! You just created your first project with mate!</p>
`,$0=`<h1 id="mate-cli">Mate CLI</h1>
<p>The following commands work within a mate project folder, that is,
where the <code>mate.json</code> file is located. This file will be
generated by the <code>init</code> command (see below).</p>
<hr />
<h2 id="cli-parser">Cli Parser</h2>
<p>Mate’s cli parser is a simple parser that parses the command line
arguments and calls the appropriate method on the Mate class.</p>
<p>Notice that for boolean arguments, you can use either false or False,
true or True. And for None you can use either null or None.</p>
<p><strong>Example</strong></p>
<p align="center" style>
<img src="./imgs/None_3544d72fc758ab7373e7fc0a62fa00d2.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<p align="center" style>
<img src="./imgs/None_ecc39b18cafef96b20ef0291357eaedd.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>source_model : <code>str</code> : Path to the source model</li>
<li>target_model : <code>str</code> : Path to the target model</li>
</ul>
<p>Clones a module</p>
<hr />
<p align="center" style>
<img src="./imgs/None_24e181ccaff571ddfc2ae5884b8babb1.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>path : <code>str</code> : Path to the module to create (relative to
the project folder)</li>
</ul>
<p>Creates a new module The path respects the python format,
(e.g. <code>my_module.sub_module</code>).</p>
<hr />
<p align="center" style>
<img src="./imgs/None_75da569af18dfad0082a6dadc203f3a3.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>source : <code>str</code> : Path to the object to export</li>
</ul>
<p>Exports a function/class from a module</p>
<hr />
<p align="center" style>
<img src="./imgs/None_d0607ffe22c05c44014d69d8733ff1d0.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>project_name : <code>str</code> : Name of the project</li>
<li>params : <code>str</code> : Parameters to pass to the project. These
are the same key-value pairs that are in the <code>mate.json</code> file
(check out that section).</li>
</ul>
<p>Creates a new mate project in the current folder.</p>
<p><strong>Example</strong></p>
<p align="center" style>
<img src="./imgs/None_fad2034c09b33dcd6e1738740e409b4d.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<p align="center" style>
<img src="./imgs/None_1cd94dfe83298068c525b70e3768d97f.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>path : <code>str</code> : Path to the module to inspect</li>
</ul>
<p>Provides information about a module, such as:</p>
<ul>
<li>exported functions, classes</li>
<li>imported modules in the case of experiments/analyses</li>
<li>errors found by mate</li>
</ul>
<p><strong>Example</strong></p>
<p align="center" style>
<img src="./imgs/None_2d5df0d231ef39a61b6bb4713c4d4ad3.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<p align="center" style>
<img src="./imgs/None_d4b4b55a9246cd89e53a2a3dd5cf0d60.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>url : <code>str</code> : URL to the package to install</li>
</ul>
<p>Installs a module from url. The URL must be a git repository and
point to the full path of the module.</p>
<hr />
<p align="center" style>
<img src="./imgs/None_6099788df50d8672b444c06ab7310da0.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<p>Prints the markdown documentation of the project</p>
<hr />
<p align="center" style>
<img src="./imgs/None_603e77b456350e5721abc2582cc864de.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>commands : <code>str</code> :</li>
</ul>
<p>Executes inside the python venv</p>
<p align="center" style>
<img src="./imgs/None_5f84267adcf0df1ad6caf9ceebc379f5.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<p align="center" style>
<img src="./imgs/None_5edfc97b831606ebd54655822bee6c06.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>target : <code>str</code> : Path to the module to remove</li>
</ul>
<p>Removes a module</p>
<hr />
<p align="center" style>
<img src="./imgs/None_052a6977ad3a53387033e9efb5ef1867.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>path : <code>str</code> : Path to the module to rename</li>
<li>name : <code>str</code> : New name of the module</li>
</ul>
<p>Renames a module.</p>
<hr />
<p align="center" style>
<img src="./imgs/None_db126b7ef5e12037f77af86ef9c5a16a.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>svg : <code>bool</code> : =False</li>
</ul>
<p>Prints results</p>
<hr />
<p align="center" style>
<img src="./imgs/None_a3711f6af7ab905b7ef21a1729b69b23.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>target : <code>str</code> : Name of the experiment to run</li>
<li>command : <code>Optional</code> : Command to run=None</li>
</ul>
<p>Runs an experiment or analysis. By default, mate assumes that you
want to run an expriment.</p>
<p><strong>Examples</strong></p>
<p align="center" style>
<img src="./imgs/None_07f188752de1b294a37b206bc95d59be.svg" style="max-width:550px" alt="Your Image">
</p>
is equivalent to
<p align="center" style>
<img src="./imgs/None_9260a32d45a9e86412b29d02a74419c5.svg" style="max-width:550px" alt="Your Image">
</p>
Alternatively, you can run an analysis:
<p align="center" style>
<img src="./imgs/None_6da5bdf365bd83635b674f67008e3fec.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<p align="center" style>
<img src="./imgs/None_2a1323bc1fcf20aac12c1fc08b5d846c.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>path : <code>str</code> : Path to the module to show</li>
</ul>
<p>Shows information about a module or experiment.</p>
<hr />
<p align="center" style>
<img src="./imgs/None_e8b881c59b2b899ef7b8f79859cfdc9b.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>svg : <code>bool</code> : Export result as svg=False</li>
</ul>
<p>Prints a summary of the mate project.</p>
<hr />
<p align="center" style>
<img src="./imgs/None_b93ce53aa59b0e1bbacbb74f0773b65e.svg" style="max-width:550px" alt="Your Image">
</p>
<p><strong>Params</strong></p>
<ul>
<li>command : <code>str</code> : Command to run in the virtual
environment</li>
</ul>
<p>Executes inside the python venv</p>
<hr />
`,B0=`<h1 id="configuring-a-mate-project">Configuring a Mate Project</h1>
<p><code>mate.json</code> is the main configuration file for a Mate
project. It defines where the root of a mate project is. The format is
JSON.</p>
<p><strong>Key-value pairs</strong></p>
<ul>
<li>results_folder : <code>str</code> : The folder where all results are
stored. This is relative to the root <strong>above</strong> the
project.</li>
<li>venv : <code>bool</code>=true : Whether to use a virtual
environment. If <code>True</code> a virtual environment is created in
the project root. If <code>False</code> no virtual environment is
created and the same python as the one used to execute mate will be used
instead.</li>
</ul>
<p><strong>Example</strong>:</p>
If your <code>mate.json</code> lies in
<code>/home/user/project_repo/mate_project/mate.json</code> and it looks
like this:
<p align="center" style>
<img src="./imgs/json_92f03bfff01a8870814eedb106c54f10.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Then the results folder will be
<code>/home/user/project_repo/results</code></p>
`,H0=`<h2 id="experiments">Experiments</h2>
<p>Experiments are written in <strong>restricted python</strong>.
Meaning it’s python but with some limitations that will keep your mate
project tidy. The following statements are not supported in a Mate
experiment:</p>
<ul>
<li>loops</li>
<li>functions</li>
<li>math operations</li>
<li>only one if-elif statement is allowed. To check the command sent to
the experiment (usually <code>train</code> or <code>test</code>).</li>
</ul>
<h3 id="imports">Imports</h3>
<p>You should only import from the root of a module.</p>
For example, this is not a valid import:
<p align="center" style>
<img src="./imgs/python_781fb6a012170781ee7755615a617313.svg" style="max-width:550px" alt="Your Image">
</p>
<p>And this is instead valid:</p>
<p align="center" style>
<img src="./imgs/python_d80cc51c2ccb5bf9ede99aeb7ce63170.svg" style="max-width:550px" alt="Your Image">
</p>
<h3 id="why-these-rules">Why these rules?</h3>
<p>A mate experiment, although a subset of python, is just a
configuration file where you should put all your hyperparameters. It’s
meant to be where you import all your modules and organize them together
to run your experiment. Defining loops and functions here would imply
that you can skip organizing your project into modules and do everything
in this file, thus losing all the attractive properties you get from
modularity.</p>
<p>If you’re tempted to write functions or loops, maybe you should
create a new module.</p>
<h3 id="mate-module-inside-your-experiment">Mate module inside your
experiment</h3>
<p>In your experiment, you usually want to import the <code>mate</code>
module, like so:</p>
<p align="center" style>
<img src="./imgs/None_c9495276ed784543b08b104ee0fb2510.svg" style="max-width:550px" alt="Your Image">
</p>
<p>This module contains variables and functions that are useful to run
your experiment. For example, the <code>mate.command</code> contains the
command sent to the experiment (usually <code>train</code> or
<code>test</code>). And <code>mate.result(...)</code> allows you to save
results of your experiments. Check out <a href="./mate.md">its doc
page</a>.</p>
<h3 id="organizing-your-experiments">Organizing your experiments</h3>
<p>You should create a new experiment for each different configuration
you want to run. For example, if you want to run an experiment with a
different learning rate, you should create a new experiment. This will
keep your experiments organized and easy to find.</p>
<p>Below you can find an example of a valid mate experiment:</p>
<p align="center" style>
<img src="./imgs/python_627c3ebbc65dc6ed3d9a69dd6eca558a.svg" style="max-width:550px" alt="Your Image">
</p>
`,K0=`<h1 id="available-soon">Available Soon</h1>
`,V0=`<h1 id="mate-project">Mate Project</h1>
<p>The root of a mate project is where you can find the
<code>mate.json</code>. Mate will generate this file for you when you do
<code>mate init</code>.</p>
<p>Mate leverages on modularity. This means that you should organize
your project as a set of <em>independent</em> modules. Independent means
that your modules cannot import each other. This is a good thing because
it allows you to reuse your modules in other projects. For example, you
can use the same data loader in a different project. This is also a good
thing because it allows you to easily test your modules. You can test
your data loader without having to test your model or your trainer.</p>
<p>A python module can <em>export</em> objects (such as classes or
functions) by adding them to the <code>__init__.py</code> file at the
root of your module. Notice that you don’t have to do this manually, you
can do <code>mate export model.my_model.file_name.ClassName</code> for
example (see the <a href="./cli.md">CLI docs</a>)</p>
<p>Each module can belong to one of the following categories:</p>
<ul>
<li><strong>models</strong>: contains the models of your project. If,
for example your working with pytorch, each model should be a subclass
of <code>torch.nn.Module</code>.</li>
<li><strong>data_loaders</strong>: contains the data loaders of your
project. If, for example your working with pytorch, each data loader
should be a subclass of <code>torch.utils.data.Dataset</code>. But mate
doesn’t check this, so if you want you can also export functions or
something else</li>
<li><strong>trainers</strong>: modules in here should contain the
training logic/loop.</li>
<li><strong>experiments</strong>: contains the experiments of your
project. Each experiment is a python file in charge of running the
experiments. See the <a href="./experiments.md">experiments docs</a> for
more info.</li>
</ul>
<h2 id="file-structure-of-a-mate-project">File structure of a mate
project</h2>
<p>The file structure of a mate project is just a collection of nested
python modules (a folder is a python module if it contains a
<code>__init__.py</code> file, which may be empty). When you do a
<code>mate init</code> you’ll automatically generate a simple mate
folder structure.</p>
<p>Typically, a file structure will look something like this:</p>
<p align="center" style>
<img src="./imgs/None_b615eff207c7f42c2cc4f6d07ddfe126.svg" style="max-width:550px" alt="Your Image">
</p>
<p>And this is how the <code>mate summary</code> command displays
it:</p>
<p align="center" style="margin:0; padding:0;">
<img src="./imgs/summary.svg" alt="Your Image" style="max-width:500px">
</p>
<p>To a mate project, the following rules apply:</p>
<ul>
<li>all the <code>README.md</code> files are optional but, if present,
will be used by the <code>mate show</code> command to display a module
(with its submodules).</li>
<li>In each python module, you may only have the following:</li>
<li>an<code>__init__.py</code></li>
<li>a readme</li>
<li>other submodules No other files/folders are allowed. Inside the leaf
modules, on the other hand (ex <code>models/ae</code>), everything is
permitted except for the following rule.</li>
<li>Each submodule inside a root module (ex <code>models/ae</code>) may
not import from other submodules in the mate project, i.e., it has to be
isolated.</li>
<li>Different rules apply to the experiment’s files (ex
<code>experiments/ae_cifar.py</code>). See the experiments section
below.</li>
</ul>
`,U0=`<h1 id="maté">Maté 🧉</h1>
<p>Mate is a tool designed to improve reproducibility and facilitate
development in deep learning. It is a command line tool that offers a
variety of features to help you manage your project, including:</p>
<ul>
<li>Validating the structure of your project</li>
<li>Visualizing/summarizing your project</li>
<li>Summarizing your results</li>
<li>Running/testing your experiments.</li>
<li>Managment of Python virtual environment</li>
</ul>
<p>It also creates a universal template for deep learning projects.</p>
<p>In addition, any project developed with Mate on a public repository
gets automatically listed on <a
href="https://salamanderxing.github.io/matehub">MateHub</a>. This
website is a browser for finding and reusing components created by
others (or yourself).</p>
<p>Mate is compatible is any python deep learning framework, such as
PyTorch, JAX, and TensorFlow/Keras, since it leverages Python
features.</p>
<p>Check out the <a
href="https://salamanderxing.github.io/mate">documentation</a>!</p>
<blockquote>
<p>⚠️ <strong>This project is still in active development</strong>: It’s
not yet stable but the first stable version is scheduled by the
<strong>10th of January</strong>.</p>
</blockquote>
<p>Developed in collaboration of Universiteit von Amstedam.</p>
<hr />
<h2 id="installation">Installation 🔌</h2>
<p align="center" style>
<img src="./imgs/bash_8b3d5a8def640d1dc9b67d83aff7397e.svg" style="max-width:550px" alt="Your Image">
</p>
<hr />
<h2 id="example-projects">Example Projects</h2>
<p>More examples coming soon :)</p>
<h3 id="pytorch-lightning">PyTorch Lightning</h3>
<ul>
<li><a
href="https://github.com/SalamanderXing/pytorch-lightning-mnist">MNIST
Classifier</a></li>
</ul>
<h3 id="jax-with-flax">JAX (with Flax)</h3>
<p><a href="https://github.com/google/jax">JAX</a> is the (relatively)
new framework by Google. That uses just-in-time-compilation to improve
performance of your neural network. These projects are based on this <a
href="https://github.com/phlippe/uvadlc_notebooks/tree/master/docs/tutorial_notebooks/JAX">amazing
repo</a>.</p>
<ul>
<li><a href="https://github.com/SalamanderXing/jax-ae">CIFAR10
Autoecoder</a></li>
<li><a href="https://github.com/SalamanderXing/jax-gnn">Graph Neural
Networks</a></li>
<li><a
href="https://github.com/SalamanderXing/jax-normalizing-flow">Normalizing
Flow</a></li>
<li><a
href="https://github.com/SalamanderXing/jax-inception-resnet-densenet">Inception,
ResNet, DenseNet</a></li>
<li><a
href="https://github.com/SalamanderXing/jax-autoregressive-image-modeling">Autoregressive
Image Modeling</a></li>
<li><a
href="https://github.com/SalamanderXing/jax-transformers">Transformers
for text classification</a></li>
<li><a
href="https://github.com/SalamanderXing/jax-anomaly-detection">Transformers
for anomaly detection</a></li>
</ul>
<hr />
<h2 id="quick-start">Quick Start ⚡</h2>
<p>This example will walk you through training and showing results of
your model on a Pytorch-Lithtning example.</p>
First let’s clone the project, for example:
<p align="center" style>
<img src="./imgs/bash_49449704768719c08e05230ff2ab1f5b.svg" style="max-width:550px" alt="Your Image">
</p>
Then go to the project directory:
<p align="center" style>
<img src="./imgs/bash_921a8028dd628088e0c41e17f4ab2d06.svg" style="max-width:550px" alt="Your Image">
</p>
Then run:
<p align="center" style>
<img src="./imgs/None_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image">
</p>
This will give you an overview of your projec and your componens.
Besides that, it will also create a local python virtual environment and
install all the dependencies of this project in it. It also tells you
where your components have issues. In this case, (hopefully) you will
see something like this:
<p align="center" style>
<img src="./imgs/exec_5ac24db831400cf68943454e2be32f48.svg" style="max-width:550px" alt="Your Image">
</p>
<p>then we can train our experiment:</p>
<p align="center" style>
<img src="./imgs/bash_27e5978a0d23c95eaa27ace2684499f6.svg" style="max-width:550px" alt="Your Image">
</p>
You should see all the training logs. If you now do again:
<p align="center" style>
<img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image">
</p>
You should notice a 💪 next to the experiment. That means that the
training was successful:
<p align="center" style>
<img src="./imgs/exec_5ac24db831400cf68943454e2be32f48.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Finally, to visualize our results:</p>
<p align="center" style>
<img src="./imgs/bash_eda9dcc34a8ecfc1ae5dc9aafab9c28d.svg" style="max-width:550px" alt="Your Image">
</p>
<p align="center" style>
<img src="./imgs/exec_e2b436d13e17ff69e83786cac9a87b76.svg" style="max-width:550px" alt="Your Image">
</p>
<p>Mate has inferred the dataset and will group our experiments
according to that and put them in the same table.</p>
<hr />
<h2 id="matehub">MateHub</h2>
<p><a href="https://salamanderxing.github.io/mate/">MateHub</a>. Before
creating a new module (trainer, data_loader, model) you might want to
head over to this site and look if there is anything that either fits
your need or allows you to not start from scratch.</p>
<h3 id="how-it-works">How it works</h3>
<p>All mate projects on public github repo (published by anyone) will be
automatically listed on MateHub. It works by using the GitHub rest
API.</p>
<hr />
<h2 id="comparison-to-familiar-tools">Comparison to familiar tools</h2>
<ul>
<li><em>Weights &amp; Biases</em>, <em>Tensorboard</em> is a logger and
allows model weights sharing as well. Mate does not attempt to replace
logger’s functionalities. Use the logger your like best :) That would
happend probably inside your trainer module.</li>
<li><em><a href="https://github.com/Project-MONAI/MONAI">Monai</a></em>:
Focuses on medical imaging and provides pretrained models as well as
preprocessing pipelines</li>
<li><em><a href="https://github.com/unifyai/ivy">Ivy</a></em>: Provides
a unified tensor type that work with all backends (frameworks). Works
with mate!</li>
<li><em><a
href="https://github.com/ViCCo-Group/thingsvision">THINGSvision</a></em>:
Provides a set pretrained models for analysis of their activation. In
particular to compare them with brain activations.</li>
</ul>
<hr />
<h2 id="contact">Contact 🤝</h2>
<p>For any question, please contact:</p>
<p><a href="mailto:g.zani@uva.nl">Giulio Zani</a></p>
<p>Or join the <a href="https://discord.gg/HyNgjBAQZR">discord
channel</a></p>
`,Pt={mate_cli:L0,tutorials:D0,replicating_an_existing_project:z0,mate:F0,mate_project_from_scratch:A0,cli:$0,config:B0,experiment:H0,installing_a_mate_package:K0,project:V0,index:U0};function Y0(){const[e,n]=y.useState(!1),[t,r]=y.useState("Mate"),a=y.createRef(),o=l=>{e&&a.current?.click(),r(l.target.innerText)},i={Mate:I("div",{dangerouslySetInnerHTML:{__html:Pt.index}}),"Mate Project":I("div",{dangerouslySetInnerHTML:{__html:Pt.project}}),"Mate CLI":I("div",{dangerouslySetInnerHTML:{__html:Pt.cli}}),"Mate Runtime":I("div",{dangerouslySetInnerHTML:{__html:Pt.mate}}),"Project Configuration":I("div",{dangerouslySetInnerHTML:{__html:Pt.config}}),Tutorials:I("div",{dangerouslySetInnerHTML:{__html:Pt.tutorials}})};return i.GitHub=i.Mate,i.MateHub=i.Mate,Rn(Wt,{children:[I(Ra,{expand:"lg",className:"sticky-top",style:{width:"100%",margin:0,background:"#5f8d4e",borderBottom:"1px solid #285430",color:"black"},children:Rn("div",{className:"container",style:{margin:0},children:[I(Ra.Brand,{onClick:o,children:"Mate"}),I(Ra.Toggle,{ref:a,"aria-controls":"basic-navbar-nav",className:`${e?"collapse":""}`,onClick:()=>n(!e)}),I(Ra.Collapse,{id:"basic-navbar-nav",className:`${e?"show":""}`,style:{color:"black"},children:Rn(Na,{className:"me-auto",children:[Rn(wr,{style:{color:"black"},title:"Documentation",id:"basic-nav-dropdown",children:[I(wr.Item,{style:{color:"black"},onClick:o,children:"Mate Project"}),I(wr.Item,{onClick:o,children:"Mate CLI"}),I(wr.Item,{onClick:o,children:"Mate Runtime"}),I(wr.Item,{onClick:o,children:"Project Configuration"})]}),I(Na.Link,{onClick:o,children:"Tutorials"}),I(Na.Link,{onClick:o,href:"https://salamanderxing.github.io/matehub/",target:"_blank",children:"MateHub"}),I(Na.Link,{onClick:o,href:"https://github.com/salamanderxing/mate",target:"_blank",children:"GitHub"})]})})]})}),I("div",{className:"container",style:{maxWidth:800,paddingTop:"20px",paddingRight:"50px",paddingLeft:"50px",paddingBottom:"50px",borderBottomRightRadius:"50px",borderBottomLeftRadius:"50px",background:"#5f8d4e",color:"black"},children:i[t]})]})}Pi.createRoot(document.getElementById("root")).render(I(en.StrictMode,{children:I(Y0,{})}));
