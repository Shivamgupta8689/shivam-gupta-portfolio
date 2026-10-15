(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function k_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uu={exports:{}},ko={},Fu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function z_(){if($p)return ht;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function g(U,oe,ke){this.props=U,this.context=oe,this.refs=A,this.updater=ke||S}g.prototype.isReactComponent={},g.prototype.setState=function(U,oe){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,oe,"setState")},g.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=g.prototype;function D(U,oe,ke){this.props=U,this.context=oe,this.refs=A,this.updater=ke||S}var C=D.prototype=new v;C.constructor=D,w(C,g.prototype),C.isPureReactComponent=!0;var L=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function F(U,oe,ke){var Z,ue={},Se=null,Me=null;if(oe!=null)for(Z in oe.ref!==void 0&&(Me=oe.ref),oe.key!==void 0&&(Se=""+oe.key),oe)G.call(oe,Z)&&!b.hasOwnProperty(Z)&&(ue[Z]=oe[Z]);var Ne=arguments.length-2;if(Ne===1)ue.children=ke;else if(1<Ne){for(var De=Array(Ne),it=0;it<Ne;it++)De[it]=arguments[it+2];ue.children=De}if(U&&U.defaultProps)for(Z in Ne=U.defaultProps,Ne)ue[Z]===void 0&&(ue[Z]=Ne[Z]);return{$$typeof:s,type:U,key:Se,ref:Me,props:ue,_owner:O.current}}function te(U,oe){return{$$typeof:s,type:U.type,key:oe,ref:U.ref,props:U.props,_owner:U._owner}}function M(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function R(U){var oe={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ke){return oe[ke]})}var ie=/\/+/g;function K(U,oe){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):oe.toString(36)}function ce(U,oe,ke,Z,ue){var Se=typeof U;(Se==="undefined"||Se==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case s:case e:Me=!0}}if(Me)return Me=U,ue=ue(Me),U=Z===""?"."+K(Me,0):Z,L(ue)?(ke="",U!=null&&(ke=U.replace(ie,"$&/")+"/"),ce(ue,oe,ke,"",function(it){return it})):ue!=null&&(M(ue)&&(ue=te(ue,ke+(!ue.key||Me&&Me.key===ue.key?"":(""+ue.key).replace(ie,"$&/")+"/")+U)),oe.push(ue)),1;if(Me=0,Z=Z===""?".":Z+":",L(U))for(var Ne=0;Ne<U.length;Ne++){Se=U[Ne];var De=Z+K(Se,Ne);Me+=ce(Se,oe,ke,De,ue)}else if(De=y(U),typeof De=="function")for(U=De.call(U),Ne=0;!(Se=U.next()).done;)Se=Se.value,De=Z+K(Se,Ne++),Me+=ce(Se,oe,ke,De,ue);else if(Se==="object")throw oe=String(U),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return Me}function de(U,oe,ke){if(U==null)return U;var Z=[],ue=0;return ce(U,Z,"","",function(Se){return oe.call(ke,Se,ue++)}),Z}function ne(U){if(U._status===-1){var oe=U._result;oe=oe(),oe.then(function(ke){(U._status===0||U._status===-1)&&(U._status=1,U._result=ke)},function(ke){(U._status===0||U._status===-1)&&(U._status=2,U._result=ke)}),U._status===-1&&(U._status=0,U._result=oe)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},fe={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:de,forEach:function(U,oe,ke){de(U,function(){oe.apply(this,arguments)},ke)},count:function(U){var oe=0;return de(U,function(){oe++}),oe},toArray:function(U){return de(U,function(oe){return oe})||[]},only:function(U){if(!M(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ht.Component=g,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=D,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,ht.act=se,ht.cloneElement=function(U,oe,ke){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=w({},U.props),ue=U.key,Se=U.ref,Me=U._owner;if(oe!=null){if(oe.ref!==void 0&&(Se=oe.ref,Me=O.current),oe.key!==void 0&&(ue=""+oe.key),U.type&&U.type.defaultProps)var Ne=U.type.defaultProps;for(De in oe)G.call(oe,De)&&!b.hasOwnProperty(De)&&(Z[De]=oe[De]===void 0&&Ne!==void 0?Ne[De]:oe[De])}var De=arguments.length-2;if(De===1)Z.children=ke;else if(1<De){Ne=Array(De);for(var it=0;it<De;it++)Ne[it]=arguments[it+2];Z.children=Ne}return{$$typeof:s,type:U.type,key:ue,ref:Se,props:Z,_owner:Me}},ht.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},ht.createElement=F,ht.createFactory=function(U){var oe=F.bind(null,U);return oe.type=U,oe},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:d,render:U}},ht.isValidElement=M,ht.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ne}},ht.memo=function(U,oe){return{$$typeof:m,type:U,compare:oe===void 0?null:oe}},ht.startTransition=function(U){var oe=B.transition;B.transition={};try{U()}finally{B.transition=oe}},ht.unstable_act=se,ht.useCallback=function(U,oe){return le.current.useCallback(U,oe)},ht.useContext=function(U){return le.current.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ht.useEffect=function(U,oe){return le.current.useEffect(U,oe)},ht.useId=function(){return le.current.useId()},ht.useImperativeHandle=function(U,oe,ke){return le.current.useImperativeHandle(U,oe,ke)},ht.useInsertionEffect=function(U,oe){return le.current.useInsertionEffect(U,oe)},ht.useLayoutEffect=function(U,oe){return le.current.useLayoutEffect(U,oe)},ht.useMemo=function(U,oe){return le.current.useMemo(U,oe)},ht.useReducer=function(U,oe,ke){return le.current.useReducer(U,oe,ke)},ht.useRef=function(U){return le.current.useRef(U)},ht.useState=function(U){return le.current.useState(U)},ht.useSyncExternalStore=function(U,oe,ke){return le.current.useSyncExternalStore(U,oe,ke)},ht.useTransition=function(){return le.current.useTransition()},ht.version="18.3.1",ht}var Kp;function ud(){return Kp||(Kp=1,Fu.exports=z_()),Fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function B_(){if(Zp)return ko;Zp=1;var s=ud(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var _,x={},y=null,S=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!c.hasOwnProperty(_)&&(x[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:d,key:y,ref:S,props:x,_owner:a.current}}return ko.Fragment=n,ko.jsx=u,ko.jsxs=u,ko}var Qp;function H_(){return Qp||(Qp=1,Uu.exports=B_()),Uu.exports}var ae=H_(),Ze=ud();const Zr=k_(Ze);var al={},Ou={exports:{}},Cn={},ku={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function V_(){return Jp||(Jp=1,(function(s){function e(B,fe){var se=B.length;B.push(fe);e:for(;0<se;){var U=se-1>>>1,oe=B[U];if(0<a(oe,fe))B[U]=fe,B[se]=oe,se=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var fe=B[0],se=B.pop();if(se!==fe){B[0]=se;e:for(var U=0,oe=B.length,ke=oe>>>1;U<ke;){var Z=2*(U+1)-1,ue=B[Z],Se=Z+1,Me=B[Se];if(0>a(ue,se))Se<oe&&0>a(Me,ue)?(B[U]=Me,B[Se]=se,U=Se):(B[U]=ue,B[Z]=se,U=Z);else if(Se<oe&&0>a(Me,se))B[U]=Me,B[Se]=se,U=Se;else break e}}return fe}function a(B,fe){var se=B.sortIndex-fe.sortIndex;return se!==0?se:B.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],_=1,x=null,y=3,S=!1,w=!1,A=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=B)r(m),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=n(m)}}function L(B){if(A=!1,C(B),!w)if(n(h)!==null)w=!0,ne(G);else{var fe=n(m);fe!==null&&le(L,fe.startTime-B)}}function G(B,fe){w=!1,A&&(A=!1,v(F),F=-1),S=!0;var se=y;try{for(C(fe),x=n(h);x!==null&&(!(x.expirationTime>fe)||B&&!R());){var U=x.callback;if(typeof U=="function"){x.callback=null,y=x.priorityLevel;var oe=U(x.expirationTime<=fe);fe=s.unstable_now(),typeof oe=="function"?x.callback=oe:x===n(h)&&r(h),C(fe)}else r(h);x=n(h)}if(x!==null)var ke=!0;else{var Z=n(m);Z!==null&&le(L,Z.startTime-fe),ke=!1}return ke}finally{x=null,y=se,S=!1}}var O=!1,b=null,F=-1,te=5,M=-1;function R(){return!(s.unstable_now()-M<te)}function ie(){if(b!==null){var B=s.unstable_now();M=B;var fe=!0;try{fe=b(!0,B)}finally{fe?K():(O=!1,b=null)}}else O=!1}var K;if(typeof D=="function")K=function(){D(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=ie,K=function(){de.postMessage(null)}}else K=function(){g(ie,0)};function ne(B){b=B,O||(O=!0,K())}function le(B,fe){F=g(function(){B(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ne(G))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var fe=3;break;default:fe=y}var se=y;y=fe;try{return B()}finally{y=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,fe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=y;y=B;try{return fe()}finally{y=se}},s.unstable_scheduleCallback=function(B,fe,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=se+oe,B={id:_++,callback:fe,priorityLevel:B,startTime:se,expirationTime:oe,sortIndex:-1},se>U?(B.sortIndex=se,e(m,B),n(h)===null&&B===n(m)&&(A?(v(F),F=-1):A=!0,le(L,se-U))):(B.sortIndex=oe,e(h,B),w||S||(w=!0,ne(G))),B},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(B){var fe=y;return function(){var se=y;y=fe;try{return B.apply(this,arguments)}finally{y=se}}}})(zu)),zu}var em;function G_(){return em||(em=1,ku.exports=V_()),ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function W_(){if(tm)return Cn;tm=1;var s=ud(),e=G_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function y(t){return h.call(x,t)?!0:h.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,f,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);g[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);g[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);g[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,i,o,l){var f=g.hasOwnProperty(i)?g[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,l)&&(o=null),l||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),R=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function oe(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var ke=!1;function Z(t,i){if(!t||ke)return"";ke=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),p=l.stack.split(`
`),E=f.length-1,I=p.length-1;1<=E&&0<=I&&f[E]!==p[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==p[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==p[I]){var k=`
`+f[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=I);break}}}finally{ke=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?oe(t):""}function ue(t){switch(t.tag){case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case O:return"Portal";case te:return"Profiler";case F:return"StrictMode";case K:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R:return(t.displayName||"Context")+".Consumer";case M:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function Me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ne(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(t){var i=De(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function gt(t){t._valueTracker||(t._valueTracker=it(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function z(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gt(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function at(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ne(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&C(t,"checked",i,!1)}function Qe(t,i){lt(t,i);var o=Ne(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Je(t,i.type,o):i.hasOwnProperty("defaultValue")&&Je(t,i.type,Ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function _t(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Je(t,i,o){(i!=="number"||z(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var N=Array.isArray;function T(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ne(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Y(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pe(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(N(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ne(o)}}function _e(t,i){var o=Ne(i.value),l=Ne(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function We(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?We(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ie,pt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xe=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){xe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function Xe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function we(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Xe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var je=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ae(t,i){if(i){if(je[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function st(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function Le(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var re=null,he=null,be=null;function Oe(t){if(t=Eo(t)){if(typeof re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ma(i),re(t.stateNode,t.type,i))}}function ct(t){he?be?be.push(t):be=[t]:he=t}function Ct(){if(he){var t=he,i=be;if(be=he=null,Oe(t),i)for(t=0;t<i.length;t++)Oe(i[t])}}function Xt(t,i){return t(i)}function mt(){}var qt=!1;function Gn(t,i,o){if(qt)return t(i,o);qt=!0;try{return Xt(t,i,o)}finally{qt=!1,(he!==null||be!==null)&&(mt(),Ct())}}function ji(t,i){var o=t.stateNode;if(o===null)return null;var l=Ma(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ns=!1;if(d)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{ns=!1}function io(t,i,o,l,f,p,E,I,k){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ve){this.onError(ve)}}var Xi=!1,Ar=null,Ei=!1,is=null,rs={onError:function(t){Xi=!0,Ar=t}};function ia(t,i,o,l,f,p,E,I,k){Xi=!1,Ar=null,io.apply(rs,arguments)}function ra(t,i,o,l,f,p,E,I,k){if(ia.apply(this,arguments),Xi){if(Xi){var ee=Ar;Xi=!1,Ar=null}else throw Error(n(198));Ei||(Ei=!0,is=ee)}}function wi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function sa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function oa(t){if(wi(t)!==t)throw Error(n(188))}function P(t){var i=t.alternate;if(!i){if(i=wi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return oa(f),t;if(p===l)return oa(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=p;else{for(var E=!1,I=f.child;I;){if(I===o){E=!0,o=f,l=p;break}if(I===l){E=!0,l=f,o=p;break}I=I.sibling}if(!E){for(I=p.child;I;){if(I===o){E=!0,o=p,l=f;break}if(I===l){E=!0,l=p,o=f;break}I=I.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function W(t){return t=P(t),t!==null?Q(t):null}function Q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Q(t);if(i!==null)return i;t=t.sibling}return null}var J=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,Ce=e.unstable_shouldYield,ze=e.unstable_requestPaint,Re=e.unstable_now,Ye=e.unstable_getCurrentPriorityLevel,nt=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,$e=e.unstable_NormalPriority,wt=e.unstable_LowPriority,Rt=e.unstable_IdlePriority,bt=null,Ot=null;function St(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(bt,t,void 0,(t.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Nn,Kt=Math.log,Mt=Math.LN2;function Nn(t){return t>>>=0,t===0?32:31-(Kt(t)/Mt|0)|0}var ei=64,tn=4194304;function Ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lt(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,p=t.pingedLanes,E=o&268435455;if(E!==0){var I=E&~f;I!==0?l=Ti(I):(p&=E,p!==0&&(l=Ti(p)))}else E=o&~f,E!==0?l=Ti(E):p!==0&&(l=Ti(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-He(i),f=1<<o,l|=t[o],i&=~f;return l}function pi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ro(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-He(p),I=1<<E,k=f[E];k===-1?((I&o)===0||(I&l)!==0)&&(f[E]=pi(I,i)):k<=i&&(t.expiredLanes|=I),p&=~I}}function fn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ss(){var t=ei;return ei<<=1,(ei&4194240)===0&&(ei=64),t}function so(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function qi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-He(i),t[i]=o}function sg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-He(o),p=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~p}}function rc(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-He(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var At=0;function Cd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Rd,sc,Pd,bd,Ld,oc=!1,aa=[],Yi=null,$i=null,Ki=null,oo=new Map,ao=new Map,Zi=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(t,i,o,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Eo(i),i!==null&&sc(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function ag(t,i,o,l,f){switch(i){case"focusin":return Yi=lo(Yi,t,i,o,l,f),!0;case"dragenter":return $i=lo($i,t,i,o,l,f),!0;case"mouseover":return Ki=lo(Ki,t,i,o,l,f),!0;case"pointerover":var p=f.pointerId;return oo.set(p,lo(oo.get(p)||null,t,i,o,l,f)),!0;case"gotpointercapture":return p=f.pointerId,ao.set(p,lo(ao.get(p)||null,t,i,o,l,f)),!0}return!1}function Nd(t){var i=Cr(t.target);if(i!==null){var o=wi(i);if(o!==null){if(i=o.tag,i===13){if(i=sa(o),i!==null){t.blockedOn=i,Ld(t.priority,function(){Pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=lc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);V=l,o.target.dispatchEvent(l),V=null}else return i=Eo(o),i!==null&&sc(i),t.blockedOn=o,!1;i.shift()}return!0}function Id(t,i,o){la(t)&&o.delete(i)}function lg(){oc=!1,Yi!==null&&la(Yi)&&(Yi=null),$i!==null&&la($i)&&($i=null),Ki!==null&&la(Ki)&&(Ki=null),oo.forEach(Id),ao.forEach(Id)}function co(t,i){t.blockedOn===i&&(t.blockedOn=null,oc||(oc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lg)))}function uo(t){function i(f){return co(f,t)}if(0<aa.length){co(aa[0],t);for(var o=1;o<aa.length;o++){var l=aa[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Yi!==null&&co(Yi,t),$i!==null&&co($i,t),Ki!==null&&co(Ki,t),oo.forEach(i),ao.forEach(i),o=0;o<Zi.length;o++)l=Zi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)Nd(o),o.blockedOn===null&&Zi.shift()}var os=L.ReactCurrentBatchConfig,ca=!0;function cg(t,i,o,l){var f=At,p=os.transition;os.transition=null;try{At=1,ac(t,i,o,l)}finally{At=f,os.transition=p}}function ug(t,i,o,l){var f=At,p=os.transition;os.transition=null;try{At=4,ac(t,i,o,l)}finally{At=f,os.transition=p}}function ac(t,i,o,l){if(ca){var f=lc(t,i,o,l);if(f===null)Tc(t,i,l,ua,o),Dd(t,l);else if(ag(f,t,i,o,l))l.stopPropagation();else if(Dd(t,l),i&4&&-1<og.indexOf(t)){for(;f!==null;){var p=Eo(f);if(p!==null&&Rd(p),p=lc(t,i,o,l),p===null&&Tc(t,i,l,ua,o),p===f)break;f=p}f!==null&&l.stopPropagation()}else Tc(t,i,l,null,o)}}var ua=null;function lc(t,i,o,l){if(ua=null,t=Le(l),t=Cr(t),t!==null)if(i=wi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=sa(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ua=t,null}function Ud(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ye()){case nt:return 1;case rt:return 4;case $e:case wt:return 16;case Rt:return 536870912;default:return 16}default:return 16}}var Qi=null,cc=null,fa=null;function Fd(){if(fa)return fa;var t,i=cc,o=i.length,l,f="value"in Qi?Qi.value:Qi.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===f[p-l];l++);return fa=f.slice(t,1<l?1-l:void 0)}function da(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function Od(){return!1}function In(t){function i(o,l,f,p,E){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ha:Od,this.isPropagationStopped=Od,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=In(as),fo=se({},as,{view:0,detail:0}),fg=In(fo),fc,dc,ho,pa=se({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(fc=t.screenX-ho.screenX,dc=t.screenY-ho.screenY):dc=fc=0,ho=t),fc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),kd=In(pa),dg=se({},pa,{dataTransfer:0}),hg=In(dg),pg=se({},fo,{relatedTarget:0}),hc=In(pg),mg=se({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=In(mg),_g=se({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vg=In(_g),xg=se({},as,{data:0}),zd=In(xg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Mg[t])?!!i[t]:!1}function pc(){return Eg}var wg=se({},fo,{key:function(t){if(t.key){var i=yg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tg=In(wg),Ag=se({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=In(Ag),Cg=se({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Rg=In(Cg),Pg=se({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=In(Pg),Lg=se({},pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=In(Lg),Ng=[9,13,27,32],mc=d&&"CompositionEvent"in window,po=null;d&&"documentMode"in document&&(po=document.documentMode);var Ig=d&&"TextEvent"in window&&!po,Hd=d&&(!mc||po&&8<po&&11>=po),Vd=" ",Gd=!1;function Wd(t,i){switch(t){case"keyup":return Ng.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function Ug(t,i){switch(t){case"compositionend":return jd(i);case"keypress":return i.which!==32?null:(Gd=!0,Vd);case"textInput":return t=i.data,t===Vd&&Gd?null:t;default:return null}}function Fg(t,i){if(ls)return t==="compositionend"||!mc&&Wd(t,i)?(t=Fd(),fa=cc=Qi=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hd&&i.locale!=="ko"?null:i.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Og[t.type]:i==="textarea"}function qd(t,i,o,l){ct(l),i=xa(i,"onChange"),0<i.length&&(o=new uc("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var mo=null,go=null;function kg(t){fh(t,0)}function ma(t){var i=hs(t);if(dt(i))return t}function zg(t,i){if(t==="change")return i}var Yd=!1;if(d){var gc;if(d){var _c="oninput"in document;if(!_c){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),_c=typeof $d.oninput=="function"}gc=_c}else gc=!1;Yd=gc&&(!document.documentMode||9<document.documentMode)}function Kd(){mo&&(mo.detachEvent("onpropertychange",Zd),go=mo=null)}function Zd(t){if(t.propertyName==="value"&&ma(go)){var i=[];qd(i,go,t,Le(t)),Gn(kg,i)}}function Bg(t,i,o){t==="focusin"?(Kd(),mo=i,go=o,mo.attachEvent("onpropertychange",Zd)):t==="focusout"&&Kd()}function Hg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ma(go)}function Vg(t,i){if(t==="click")return ma(i)}function Gg(t,i){if(t==="input"||t==="change")return ma(i)}function Wg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:Wg;function _o(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!h.call(i,f)||!ti(t[f],i[f]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jd(t,i){var o=Qd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function eh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?eh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function th(){for(var t=window,i=z();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=z(t.document)}return i}function vc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function jg(t){var i=th(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(l!==null&&vc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!t.extend&&p>l&&(f=l,l=p,p=f),f=Jd(o,p);var E=Jd(o,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xg=d&&"documentMode"in document&&11>=document.documentMode,cs=null,xc=null,vo=null,yc=!1;function nh(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;yc||cs==null||cs!==z(l)||(l=cs,"selectionStart"in l&&vc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vo&&_o(vo,l)||(vo=l,l=xa(xc,"onSelect"),0<l.length&&(i=new uc("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=cs)))}function ga(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var us={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Sc={},ih={};d&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function _a(t){if(Sc[t])return Sc[t];if(!us[t])return t;var i=us[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ih)return Sc[t]=i[o];return t}var rh=_a("animationend"),sh=_a("animationiteration"),oh=_a("animationstart"),ah=_a("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){lh.set(t,i),c(i,[t])}for(var Mc=0;Mc<ch.length;Mc++){var Ec=ch[Mc],qg=Ec.toLowerCase(),Yg=Ec[0].toUpperCase()+Ec.slice(1);Ji(qg,"on"+Yg)}Ji(rh,"onAnimationEnd"),Ji(sh,"onAnimationIteration"),Ji(oh,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function uh(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,ra(l,i,void 0,t),t.currentTarget=null}function fh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],k=I.instance,ee=I.currentTarget;if(I=I.listener,k!==p&&f.isPropagationStopped())break e;uh(f,I,ee),p=k}else for(E=0;E<l.length;E++){if(I=l[E],k=I.instance,ee=I.currentTarget,I=I.listener,k!==p&&f.isPropagationStopped())break e;uh(f,I,ee),p=k}}}if(Ei)throw t=is,Ei=!1,is=null,t}function Nt(t,i){var o=i[Lc];o===void 0&&(o=i[Lc]=new Set);var l=t+"__bubble";o.has(l)||(dh(i,t,2,!1),o.add(l))}function wc(t,i,o){var l=0;i&&(l|=4),dh(o,t,l,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[va]){t[va]=!0,r.forEach(function(o){o!=="selectionchange"&&($g.has(o)||wc(o,!1,t),wc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[va]||(i[va]=!0,wc("selectionchange",!1,i))}}function dh(t,i,o,l){switch(Ud(i)){case 1:var f=cg;break;case 4:f=ug;break;default:f=ac}o=f.bind(null,i,o,t),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Tc(t,i,o,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Cr(I),E===null)return;if(k=E.tag,k===5||k===6){l=p=E;continue e}I=I.parentNode}}l=l.return}Gn(function(){var ee=p,ve=Le(o),Ee=[];e:{var ge=lh.get(t);if(ge!==void 0){var Be=uc,Ge=t;switch(t){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":Be=Tg;break;case"focusin":Ge="focus",Be=hc;break;case"focusout":Ge="blur",Be=hc;break;case"beforeblur":case"afterblur":Be=hc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Rg;break;case rh:case sh:case oh:Be=gg;break;case ah:Be=bg;break;case"scroll":Be=fg;break;case"wheel":Be=Dg;break;case"copy":case"cut":case"paste":Be=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Bd}var qe=(i&4)!==0,Wt=!qe&&t==="scroll",q=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var H=ee,$;H!==null;){$=H;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,q!==null&&(Te=ji(H,q),Te!=null&&qe.push(So(H,Te,$)))),Wt)break;H=H.return}0<qe.length&&(ge=new Be(ge,Ge,null,o,ve),Ee.push({event:ge,listeners:qe}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",ge&&o!==V&&(Ge=o.relatedTarget||o.fromElement)&&(Cr(Ge)||Ge[Ai]))break e;if((Be||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Be?(Ge=o.relatedTarget||o.toElement,Be=ee,Ge=Ge?Cr(Ge):null,Ge!==null&&(Wt=wi(Ge),Ge!==Wt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Be=null,Ge=ee),Be!==Ge)){if(qe=kd,Te="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Bd,Te="onPointerLeave",q="onPointerEnter",H="pointer"),Wt=Be==null?ge:hs(Be),$=Ge==null?ge:hs(Ge),ge=new qe(Te,H+"leave",Be,o,ve),ge.target=Wt,ge.relatedTarget=$,Te=null,Cr(ve)===ee&&(qe=new qe(q,H+"enter",Ge,o,ve),qe.target=$,qe.relatedTarget=Wt,Te=qe),Wt=Te,Be&&Ge)t:{for(qe=Be,q=Ge,H=0,$=qe;$;$=fs($))H++;for($=0,Te=q;Te;Te=fs(Te))$++;for(;0<H-$;)qe=fs(qe),H--;for(;0<$-H;)q=fs(q),$--;for(;H--;){if(qe===q||q!==null&&qe===q.alternate)break t;qe=fs(qe),q=fs(q)}qe=null}else qe=null;Be!==null&&hh(Ee,ge,Be,qe,!1),Ge!==null&&Wt!==null&&hh(Ee,Wt,Ge,qe,!0)}}e:{if(ge=ee?hs(ee):window,Be=ge.nodeName&&ge.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ge.type==="file")var Ke=zg;else if(Xd(ge))if(Yd)Ke=Gg;else{Ke=Hg;var et=Bg}else(Be=ge.nodeName)&&Be.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=Vg);if(Ke&&(Ke=Ke(t,ee))){qd(Ee,Ke,o,ve);break e}et&&et(t,ge,ee),t==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Je(ge,"number",ge.value)}switch(et=ee?hs(ee):window,t){case"focusin":(Xd(et)||et.contentEditable==="true")&&(cs=et,xc=ee,vo=null);break;case"focusout":vo=xc=cs=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,nh(Ee,o,ve);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":nh(Ee,o,ve)}var tt;if(mc)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ls?Wd(t,o)&&(ot="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(Hd&&o.locale!=="ko"&&(ls||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ls&&(tt=Fd()):(Qi=ve,cc="value"in Qi?Qi.value:Qi.textContent,ls=!0)),et=xa(ee,ot),0<et.length&&(ot=new zd(ot,t,null,o,ve),Ee.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=jd(o),tt!==null&&(ot.data=tt)))),(tt=Ig?Ug(t,o):Fg(t,o))&&(ee=xa(ee,"onBeforeInput"),0<ee.length&&(ve=new zd("onBeforeInput","beforeinput",null,o,ve),Ee.push({event:ve,listeners:ee}),ve.data=tt))}fh(Ee,i)})}function So(t,i,o){return{instance:t,listener:i,currentTarget:o}}function xa(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=ji(t,o),p!=null&&l.unshift(So(t,p,f)),p=ji(t,i),p!=null&&l.push(So(t,p,f))),t=t.return}return l}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hh(t,i,o,l,f){for(var p=i._reactName,E=[];o!==null&&o!==l;){var I=o,k=I.alternate,ee=I.stateNode;if(k!==null&&k===l)break;I.tag===5&&ee!==null&&(I=ee,f?(k=ji(o,p),k!=null&&E.unshift(So(o,k,I))):f||(k=ji(o,p),k!=null&&E.push(So(o,k,I)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Kg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function ph(t){return(typeof t=="string"?t:""+t).replace(Kg,`
`).replace(Zg,"")}function ya(t,i,o){if(i=ph(i),ph(t)!==i&&o)throw Error(n(425))}function Sa(){}var Ac=null,Cc=null;function Rc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(e_)}:Pc;function e_(t){setTimeout(function(){throw t})}function bc(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),uo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);uo(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),mi="__reactFiber$"+ds,Mo="__reactProps$"+ds,Ai="__reactContainer$"+ds,Lc="__reactEvents$"+ds,t_="__reactListeners$"+ds,n_="__reactHandles$"+ds;function Cr(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=gh(t);t!==null;){if(o=t[mi])return o;t=gh(t)}return i}t=o,o=t.parentNode}return null}function Eo(t){return t=t[mi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ma(t){return t[Mo]||null}var Dc=[],ps=-1;function tr(t){return{current:t}}function It(t){0>ps||(t.current=Dc[ps],Dc[ps]=null,ps--)}function Dt(t,i){ps++,Dc[ps]=t.current,t.current=i}var nr={},dn=tr(nr),Mn=tr(!1),Rr=nr;function ms(t,i){var o=t.type.contextTypes;if(!o)return nr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function En(t){return t=t.childContextTypes,t!=null}function Ea(){It(Mn),It(dn)}function _h(t,i,o){if(dn.current!==nr)throw Error(n(168));Dt(dn,i),Dt(Mn,o)}function vh(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Me(t)||"Unknown",f));return se({},o,l)}function wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Rr=dn.current,Dt(dn,t),Dt(Mn,Mn.current),!0}function xh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=vh(t,i,Rr),l.__reactInternalMemoizedMergedChildContext=t,It(Mn),It(dn),Dt(dn,t)):It(Mn),Dt(Mn,o)}var Ci=null,Ta=!1,Nc=!1;function yh(t){Ci===null?Ci=[t]:Ci.push(t)}function i_(t){Ta=!0,yh(t)}function ir(){if(!Nc&&Ci!==null){Nc=!0;var t=0,i=At;try{var o=Ci;for(At=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ci=null,Ta=!1}catch(f){throw Ci!==null&&(Ci=Ci.slice(t+1)),J(nt,ir),f}finally{At=i,Nc=!1}}return null}var gs=[],_s=0,Aa=null,Ca=0,Wn=[],jn=0,Pr=null,Ri=1,Pi="";function br(t,i){gs[_s++]=Ca,gs[_s++]=Aa,Aa=t,Ca=i}function Sh(t,i,o){Wn[jn++]=Ri,Wn[jn++]=Pi,Wn[jn++]=Pr,Pr=t;var l=Ri;t=Pi;var f=32-He(l)-1;l&=~(1<<f),o+=1;var p=32-He(i)+f;if(30<p){var E=f-f%5;p=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ri=1<<32-He(i)+f|o<<f|l,Pi=p+t}else Ri=1<<p|o<<f|l,Pi=t}function Ic(t){t.return!==null&&(br(t,1),Sh(t,1,0))}function Uc(t){for(;t===Aa;)Aa=gs[--_s],gs[_s]=null,Ca=gs[--_s],gs[_s]=null;for(;t===Pr;)Pr=Wn[--jn],Wn[jn]=null,Pi=Wn[--jn],Wn[jn]=null,Ri=Wn[--jn],Wn[jn]=null}var Un=null,Fn=null,kt=!1,ni=null;function Mh(t,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Fn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,Fn=null,!0):!1;default:return!1}}function Fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oc(t){if(kt){var i=Fn;if(i){var o=i;if(!Eh(t,i)){if(Fc(t))throw Error(n(418));i=er(o.nextSibling);var l=Un;i&&Eh(t,i)?Mh(l,o):(t.flags=t.flags&-4097|2,kt=!1,Un=t)}}else{if(Fc(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Un=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Ra(t){if(t!==Un)return!1;if(!kt)return wh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Rc(t.type,t.memoizedProps)),i&&(i=Fn)){if(Fc(t))throw Th(),Error(n(418));for(;i;)Mh(t,i),i=er(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Fn=er(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Un?er(t.stateNode.nextSibling):null;return!0}function Th(){for(var t=Fn;t;)t=er(t.nextSibling)}function vs(){Fn=Un=null,kt=!1}function kc(t){ni===null?ni=[t]:ni.push(t)}var r_=L.ReactCurrentBatchConfig;function wo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var I=f.refs;E===null?delete I[p]:I[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ah(t){var i=t._init;return i(t._payload)}function Ch(t){function i(q,H){if(t){var $=q.deletions;$===null?(q.deletions=[H],q.flags|=16):$.push(H)}}function o(q,H){if(!t)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function l(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function f(q,H){return q=fr(q,H),q.index=0,q.sibling=null,q}function p(q,H,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<H?(q.flags|=2,H):$):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return t&&q.alternate===null&&(q.flags|=2),q}function I(q,H,$,Te){return H===null||H.tag!==6?(H=Pu($,q.mode,Te),H.return=q,H):(H=f(H,$),H.return=q,H)}function k(q,H,$,Te){var Ke=$.type;return Ke===b?ve(q,H,$.props.children,Te,$.key):H!==null&&(H.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&Ah(Ke)===H.type)?(Te=f(H,$.props),Te.ref=wo(q,H,$),Te.return=q,Te):(Te=Ja($.type,$.key,$.props,null,q.mode,Te),Te.ref=wo(q,H,$),Te.return=q,Te)}function ee(q,H,$,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=bu($,q.mode,Te),H.return=q,H):(H=f(H,$.children||[]),H.return=q,H)}function ve(q,H,$,Te,Ke){return H===null||H.tag!==7?(H=kr($,q.mode,Te,Ke),H.return=q,H):(H=f(H,$),H.return=q,H)}function Ee(q,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Pu(""+H,q.mode,$),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return $=Ja(H.type,H.key,H.props,null,q.mode,$),$.ref=wo(q,null,H),$.return=q,$;case O:return H=bu(H,q.mode,$),H.return=q,H;case ne:var Te=H._init;return Ee(q,Te(H._payload),$)}if(N(H)||fe(H))return H=kr(H,q.mode,$,null),H.return=q,H;Pa(q,H)}return null}function ge(q,H,$,Te){var Ke=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ke!==null?null:I(q,H,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case G:return $.key===Ke?k(q,H,$,Te):null;case O:return $.key===Ke?ee(q,H,$,Te):null;case ne:return Ke=$._init,ge(q,H,Ke($._payload),Te)}if(N($)||fe($))return Ke!==null?null:ve(q,H,$,Te,null);Pa(q,$)}return null}function Be(q,H,$,Te,Ke){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get($)||null,I(H,q,""+Te,Ke);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return q=q.get(Te.key===null?$:Te.key)||null,k(H,q,Te,Ke);case O:return q=q.get(Te.key===null?$:Te.key)||null,ee(H,q,Te,Ke);case ne:var et=Te._init;return Be(q,H,$,et(Te._payload),Ke)}if(N(Te)||fe(Te))return q=q.get($)||null,ve(H,q,Te,Ke,null);Pa(H,Te)}return null}function Ge(q,H,$,Te){for(var Ke=null,et=null,tt=H,ot=H=0,sn=null;tt!==null&&ot<$.length;ot++){tt.index>ot?(sn=tt,tt=null):sn=tt.sibling;var Et=ge(q,tt,$[ot],Te);if(Et===null){tt===null&&(tt=sn);break}t&&tt&&Et.alternate===null&&i(q,tt),H=p(Et,H,ot),et===null?Ke=Et:et.sibling=Et,et=Et,tt=sn}if(ot===$.length)return o(q,tt),kt&&br(q,ot),Ke;if(tt===null){for(;ot<$.length;ot++)tt=Ee(q,$[ot],Te),tt!==null&&(H=p(tt,H,ot),et===null?Ke=tt:et.sibling=tt,et=tt);return kt&&br(q,ot),Ke}for(tt=l(q,tt);ot<$.length;ot++)sn=Be(tt,q,ot,$[ot],Te),sn!==null&&(t&&sn.alternate!==null&&tt.delete(sn.key===null?ot:sn.key),H=p(sn,H,ot),et===null?Ke=sn:et.sibling=sn,et=sn);return t&&tt.forEach(function(dr){return i(q,dr)}),kt&&br(q,ot),Ke}function qe(q,H,$,Te){var Ke=fe($);if(typeof Ke!="function")throw Error(n(150));if($=Ke.call($),$==null)throw Error(n(151));for(var et=Ke=null,tt=H,ot=H=0,sn=null,Et=$.next();tt!==null&&!Et.done;ot++,Et=$.next()){tt.index>ot?(sn=tt,tt=null):sn=tt.sibling;var dr=ge(q,tt,Et.value,Te);if(dr===null){tt===null&&(tt=sn);break}t&&tt&&dr.alternate===null&&i(q,tt),H=p(dr,H,ot),et===null?Ke=dr:et.sibling=dr,et=dr,tt=sn}if(Et.done)return o(q,tt),kt&&br(q,ot),Ke;if(tt===null){for(;!Et.done;ot++,Et=$.next())Et=Ee(q,Et.value,Te),Et!==null&&(H=p(Et,H,ot),et===null?Ke=Et:et.sibling=Et,et=Et);return kt&&br(q,ot),Ke}for(tt=l(q,tt);!Et.done;ot++,Et=$.next())Et=Be(tt,q,ot,Et.value,Te),Et!==null&&(t&&Et.alternate!==null&&tt.delete(Et.key===null?ot:Et.key),H=p(Et,H,ot),et===null?Ke=Et:et.sibling=Et,et=Et);return t&&tt.forEach(function(O_){return i(q,O_)}),kt&&br(q,ot),Ke}function Wt(q,H,$,Te){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case G:e:{for(var Ke=$.key,et=H;et!==null;){if(et.key===Ke){if(Ke=$.type,Ke===b){if(et.tag===7){o(q,et.sibling),H=f(et,$.props.children),H.return=q,q=H;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&Ah(Ke)===et.type){o(q,et.sibling),H=f(et,$.props),H.ref=wo(q,et,$),H.return=q,q=H;break e}o(q,et);break}else i(q,et);et=et.sibling}$.type===b?(H=kr($.props.children,q.mode,Te,$.key),H.return=q,q=H):(Te=Ja($.type,$.key,$.props,null,q.mode,Te),Te.ref=wo(q,H,$),Te.return=q,q=Te)}return E(q);case O:e:{for(et=$.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){o(q,H.sibling),H=f(H,$.children||[]),H.return=q,q=H;break e}else{o(q,H);break}else i(q,H);H=H.sibling}H=bu($,q.mode,Te),H.return=q,q=H}return E(q);case ne:return et=$._init,Wt(q,H,et($._payload),Te)}if(N($))return Ge(q,H,$,Te);if(fe($))return qe(q,H,$,Te);Pa(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(o(q,H.sibling),H=f(H,$),H.return=q,q=H):(o(q,H),H=Pu($,q.mode,Te),H.return=q,q=H),E(q)):o(q,H)}return Wt}var xs=Ch(!0),Rh=Ch(!1),ba=tr(null),La=null,ys=null,zc=null;function Bc(){zc=ys=La=null}function Hc(t){var i=ba.current;It(ba),t._currentValue=i}function Vc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function Ss(t,i){La=t,zc=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(wn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(zc!==t)if(t={context:t,memoizedValue:i,next:null},ys===null){if(La===null)throw Error(n(308));ys=t,La.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return i}var Lr=null;function Gc(t){Lr===null?Lr=[t]:Lr.push(t)}function Ph(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Gc(i)):(o.next=f.next,f.next=o),i.interleaved=o,bi(t,l)}function bi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var rr=!1;function Wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,bi(t,o)}return f=l.interleaved,f===null?(i.next=i,Gc(l)):(i.next=f.next,f.next=i),l.interleaved=i,bi(t,o)}function Da(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,rc(t,o)}}function Lh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Na(t,i,o,l){var f=t.updateQueue;rr=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var k=I,ee=k.next;k.next=null,E===null?p=ee:E.next=ee,E=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=ee:I.next=ee,ve.lastBaseUpdate=k))}if(p!==null){var Ee=f.baseState;E=0,ve=ee=k=null,I=p;do{var ge=I.lane,Be=I.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Be,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ge=t,qe=I;switch(ge=i,Be=o,qe.tag){case 1:if(Ge=qe.payload,typeof Ge=="function"){Ee=Ge.call(Be,Ee,ge);break e}Ee=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=qe.payload,ge=typeof Ge=="function"?Ge.call(Be,Ee,ge):Ge,ge==null)break e;Ee=se({},Ee,ge);break e;case 2:rr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[I]:ge.push(I))}else Be={eventTime:Be,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ee=ve=Be,k=Ee):ve=ve.next=Be,E|=ge;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(ve===null&&(k=Ee),f.baseState=k,f.firstBaseUpdate=ee,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Ir|=E,t.lanes=E,t.memoizedState=Ee}}function Dh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var To={},gi=tr(To),Ao=tr(To),Co=tr(To);function Dr(t){if(t===To)throw Error(n(174));return t}function jc(t,i){switch(Dt(Co,i),Dt(Ao,t),Dt(gi,To),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Pe(i,t)}It(gi),Dt(gi,i)}function Ms(){It(gi),It(Ao),It(Co)}function Nh(t){Dr(Co.current);var i=Dr(gi.current),o=Pe(i,t.type);i!==o&&(Dt(Ao,t),Dt(gi,o))}function Xc(t){Ao.current===t&&(It(gi),It(Ao))}var zt=tr(0);function Ia(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qc=[];function Yc(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var Ua=L.ReactCurrentDispatcher,$c=L.ReactCurrentBatchConfig,Nr=0,Bt=null,Zt=null,nn=null,Fa=!1,Ro=!1,Po=0,s_=0;function hn(){throw Error(n(321))}function Kc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ti(t[o],i[o]))return!1;return!0}function Zc(t,i,o,l,f,p){if(Nr=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=t===null||t.memoizedState===null?c_:u_,t=o(l,f),Ro){p=0;do{if(Ro=!1,Po=0,25<=p)throw Error(n(301));p+=1,nn=Zt=null,i.updateQueue=null,Ua.current=f_,t=o(l,f)}while(Ro)}if(Ua.current=za,i=Zt!==null&&Zt.next!==null,Nr=0,nn=Zt=Bt=null,Fa=!1,i)throw Error(n(300));return t}function Qc(){var t=Po!==0;return Po=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Bt.memoizedState=nn=t:nn=nn.next=t,nn}function qn(){if(Zt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=nn===null?Bt.memoizedState:nn.next;if(i!==null)nn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},nn===null?Bt.memoizedState=nn=t:nn=nn.next=t}return nn}function bo(t,i){return typeof i=="function"?i(t):i}function Jc(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Zt,f=l.baseQueue,p=o.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}l.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,l=l.baseState;var I=E=null,k=null,ee=p;do{var ve=ee.lane;if((Nr&ve)===ve)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var Ee={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(I=k=Ee,E=l):k=k.next=Ee,Bt.lanes|=ve,Ir|=ve}ee=ee.next}while(ee!==null&&ee!==p);k===null?E=l:k.next=I,ti(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do p=f.lane,Bt.lanes|=p,Ir|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function eu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=t(p,E.action),E=E.next;while(E!==f);ti(p,i.memoizedState)||(wn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function Ih(){}function Uh(t,i){var o=Bt,l=qn(),f=i(),p=!ti(l.memoizedState,f);if(p&&(l.memoizedState=f,wn=!0),l=l.queue,tu(kh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Lo(9,Oh.bind(null,o,l,f,i),void 0,null),rn===null)throw Error(n(349));(Nr&30)!==0||Fh(o,i,f)}return f}function Fh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Oh(t,i,o,l){i.value=o,i.getSnapshot=l,zh(i)&&Bh(t)}function kh(t,i,o){return o(function(){zh(i)&&Bh(t)})}function zh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ti(t,o)}catch{return!0}}function Bh(t){var i=bi(t,1);i!==null&&oi(i,t,1,-1)}function Hh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},i.queue=t,t=t.dispatch=l_.bind(null,Bt,t),[i.memoizedState,t]}function Lo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Vh(){return qn().memoizedState}function Oa(t,i,o,l){var f=_i();Bt.flags|=t,f.memoizedState=Lo(1|i,o,void 0,l===void 0?null:l)}function ka(t,i,o,l){var f=qn();l=l===void 0?null:l;var p=void 0;if(Zt!==null){var E=Zt.memoizedState;if(p=E.destroy,l!==null&&Kc(l,E.deps)){f.memoizedState=Lo(i,o,p,l);return}}Bt.flags|=t,f.memoizedState=Lo(1|i,o,p,l)}function Gh(t,i){return Oa(8390656,8,t,i)}function tu(t,i){return ka(2048,8,t,i)}function Wh(t,i){return ka(4,2,t,i)}function jh(t,i){return ka(4,4,t,i)}function Xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,ka(4,4,Xh.bind(null,i,t),o)}function nu(){}function Yh(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Kc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Kc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Kh(t,i,o){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=o):(ti(o,i)||(o=ss(),Bt.lanes|=o,Ir|=o,t.baseState=!0),i)}function o_(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var l=$c.transition;$c.transition={};try{t(!1),i()}finally{At=o,$c.transition=l}}function Zh(){return qn().memoizedState}function a_(t,i,o){var l=cr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(t))Jh(i,o);else if(o=Ph(t,i,o,l),o!==null){var f=xn();oi(o,t,l,f),ep(o,i,l)}}function l_(t,i,o){var l=cr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(t))Jh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,I=p(E,o);if(f.hasEagerState=!0,f.eagerState=I,ti(I,E)){var k=i.interleaved;k===null?(f.next=f,Gc(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=Ph(t,i,f,l),o!==null&&(f=xn(),oi(o,t,l,f),ep(o,i,l))}}function Qh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function Jh(t,i){Ro=Fa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ep(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,rc(t,o)}}var za={readContext:Xn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},c_={readContext:Xn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:Gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Oa(4194308,4,Xh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Oa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oa(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=a_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Hh,useDebugValue:nu,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Hh(!1),i=t[0];return t=o_.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Bt,f=_i();if(kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),rn===null)throw Error(n(349));(Nr&30)!==0||Fh(l,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Gh(kh.bind(null,l,p,t),[t]),l.flags|=2048,Lo(9,Oh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=rn.identifierPrefix;if(kt){var o=Pi,l=Ri;o=(l&~(1<<32-He(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Po++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=s_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},u_={readContext:Xn,useCallback:Yh,useContext:Xn,useEffect:tu,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:jh,useMemo:$h,useReducer:Jc,useRef:Vh,useState:function(){return Jc(bo)},useDebugValue:nu,useDeferredValue:function(t){var i=qn();return Kh(i,Zt.memoizedState,t)},useTransition:function(){var t=Jc(bo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1},f_={readContext:Xn,useCallback:Yh,useContext:Xn,useEffect:tu,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:jh,useMemo:$h,useReducer:eu,useRef:Vh,useState:function(){return eu(bo)},useDebugValue:nu,useDeferredValue:function(t){var i=qn();return Zt===null?i.memoizedState=t:Kh(i,Zt.memoizedState,t)},useTransition:function(){var t=eu(bo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function iu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ba={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=xn(),f=cr(t),p=Li(l,f);p.payload=i,o!=null&&(p.callback=o),i=sr(t,p,f),i!==null&&(oi(i,t,f,l),Da(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=xn(),f=cr(t),p=Li(l,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=sr(t,p,f),i!==null&&(oi(i,t,f,l),Da(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=xn(),l=cr(t),f=Li(o,l);f.tag=2,i!=null&&(f.callback=i),i=sr(t,f,l),i!==null&&(oi(i,t,l,o),Da(i,t,l))}};function tp(t,i,o,l,f,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!_o(o,l)||!_o(f,p):!0}function np(t,i,o){var l=!1,f=nr,p=i.contextType;return typeof p=="object"&&p!==null?p=Xn(p):(f=En(i)?Rr:dn.current,l=i.contextTypes,p=(l=l!=null)?ms(t,f):nr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ba,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function ip(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ba.enqueueReplaceState(i,i.state,null)}function ru(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Wc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Xn(p):(p=En(i)?Rr:dn.current,f.context=ms(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(iu(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ba.enqueueReplaceState(f,f.state,null),Na(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function su(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ou(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var d_=typeof WeakMap=="function"?WeakMap:Map;function rp(t,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){qa||(qa=!0,Su=l),ou(t,i)},o}function sp(t,i,o){o=Li(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){ou(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ou(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function op(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new d_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=A_.bind(null,t,i,o),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function lp(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var h_=L.ReactCurrentOwner,wn=!1;function vn(t,i,o,l){i.child=t===null?Rh(i,null,o,l):xs(i,t.child,o,l)}function cp(t,i,o,l,f){o=o.render;var p=i.ref;return Ss(i,f),l=Zc(t,i,o,l,p,f),o=Qc(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(kt&&o&&Ic(i),i.flags|=1,vn(t,i,l,f),i.child)}function up(t,i,o,l,f){if(t===null){var p=o.type;return typeof p=="function"&&!Ru(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,fp(t,i,p,l,f)):(t=Ja(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:_o,o(E,l)&&t.ref===i.ref)return Di(t,i,f)}return i.flags|=1,t=fr(p,l),t.ref=i.ref,t.return=i,i.child=t}function fp(t,i,o,l,f){if(t!==null){var p=t.memoizedProps;if(_o(p,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Di(t,i,f)}return au(t,i,o,l,f)}function dp(t,i,o){var l=i.pendingProps,f=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ts,On),On|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Ts,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Dt(Ts,On),On|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Dt(Ts,On),On|=l;return vn(t,i,f,o),i.child}function hp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function au(t,i,o,l,f){var p=En(o)?Rr:dn.current;return p=ms(i,p),Ss(i,f),o=Zc(t,i,o,l,p,f),l=Qc(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(kt&&l&&Ic(i),i.flags|=1,vn(t,i,o,f),i.child)}function pp(t,i,o,l,f){if(En(o)){var p=!0;wa(i)}else p=!1;if(Ss(i,f),i.stateNode===null)Va(t,i),np(i,o,l),ru(i,o,l,f),l=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var k=E.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Xn(ee):(ee=En(o)?Rr:dn.current,ee=ms(i,ee));var ve=o.getDerivedStateFromProps,Ee=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||k!==ee)&&ip(i,E,l,ee),rr=!1;var ge=i.memoizedState;E.state=ge,Na(i,l,E,f),k=i.memoizedState,I!==l||ge!==k||Mn.current||rr?(typeof ve=="function"&&(iu(i,o,ve,l),k=i.memoizedState),(I=rr||tp(i,o,I,l,ge,k,ee))?(Ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=ee,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,bh(t,i),I=i.memoizedProps,ee=i.type===i.elementType?I:ii(i.type,I),E.props=ee,Ee=i.pendingProps,ge=E.context,k=o.contextType,typeof k=="object"&&k!==null?k=Xn(k):(k=En(o)?Rr:dn.current,k=ms(i,k));var Be=o.getDerivedStateFromProps;(ve=typeof Be=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Ee||ge!==k)&&ip(i,E,l,k),rr=!1,ge=i.memoizedState,E.state=ge,Na(i,l,E,f);var Ge=i.memoizedState;I!==Ee||ge!==Ge||Mn.current||rr?(typeof Be=="function"&&(iu(i,o,Be,l),Ge=i.memoizedState),(ee=rr||tp(i,o,ee,l,ge,Ge,k)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ge,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ge,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ge),E.props=l,E.state=Ge,E.context=k,l=ee):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return lu(t,i,o,l,p,f)}function lu(t,i,o,l,f,p){hp(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&xh(i,o,!1),Di(t,i,p);l=i.stateNode,h_.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=xs(i,t.child,null,p),i.child=xs(i,null,I,p)):vn(t,i,I,p),i.memoizedState=l.state,f&&xh(i,o,!0),i.child}function mp(t){var i=t.stateNode;i.pendingContext?_h(t,i.pendingContext,i.pendingContext!==i.context):i.context&&_h(t,i.context,!1),jc(t,i.containerInfo)}function gp(t,i,o,l,f){return vs(),kc(f),i.flags|=256,vn(t,i,o,l),i.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function uu(t){return{baseLanes:t,cachePool:null,transitions:null}}function _p(t,i,o){var l=i.pendingProps,f=zt.current,p=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Dt(zt,f&1),t===null)return Oc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,p?(l=i.mode,p=i.child,E={mode:"hidden",children:E},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=el(E,l,0,null),t=kr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=uu(o),i.memoizedState=cu,t):fu(i,E));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return p_(t,i,E,l,I,f,o);if(p){p=l.fallback,E=i.mode,f=t.child,I=f.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=fr(f,k),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?p=fr(I,p):(p=kr(p,E,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,E=t.child.memoizedState,E=E===null?uu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~o,i.memoizedState=cu,l}return p=t.child,t=p.sibling,l=fr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function fu(t,i){return i=el({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ha(t,i,o,l){return l!==null&&kc(l),xs(i,t.child,null,o),t=fu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function p_(t,i,o,l,f,p,E){if(o)return i.flags&256?(i.flags&=-257,l=su(Error(n(422))),Ha(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=el({mode:"visible",children:l.children},f,0,null),p=kr(p,f,E,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&xs(i,t.child,null,E),i.child.memoizedState=uu(E),i.memoizedState=cu,p);if((i.mode&1)===0)return Ha(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=su(p,l,void 0),Ha(t,i,E,l)}if(I=(E&t.childLanes)!==0,wn||I){if(l=rn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,bi(t,f),oi(l,t,f,-1))}return Cu(),l=su(Error(n(421))),Ha(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=C_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Fn=er(f.nextSibling),Un=i,kt=!0,ni=null,t!==null&&(Wn[jn++]=Ri,Wn[jn++]=Pi,Wn[jn++]=Pr,Ri=t.id,Pi=t.overflow,Pr=i),i=fu(i,l.children),i.flags|=4096,i)}function vp(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Vc(t.return,i,o)}function du(t,i,o,l,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=f)}function xp(t,i,o){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(vn(t,i,l.children,o),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vp(t,o,i);else if(t.tag===19)vp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ia(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),du(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ia(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}du(i,!0,o,null,p);break;case"together":du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=fr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=fr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function m_(t,i,o){switch(i.tag){case 3:mp(i),vs();break;case 5:Nh(i);break;case 1:En(i.type)&&wa(i);break;case 4:jc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Dt(ba,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?_p(t,i,o):(Dt(zt,zt.current&1),t=Di(t,i,o),t!==null?t.sibling:null);Dt(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return xp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,o)}return Di(t,i,o)}var yp,hu,Sp,Mp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},hu=function(){},Sp=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Dr(gi.current);var p=null;switch(o){case"input":f=Gt(t,f),l=Gt(t,l),p=[];break;case"select":f=se({},f,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":f=Y(t,f),l=Y(t,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Sa)}Ae(o,l);var E;o=null;for(ee in f)if(!l.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var I=f[ee];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in l){var k=l[ee];if(I=f!=null?f[ee]:void 0,l.hasOwnProperty(ee)&&k!==I&&(k!=null||I!=null))if(ee==="style")if(I){for(E in I)!I.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in k)k.hasOwnProperty(E)&&I[E]!==k[E]&&(o||(o={}),o[E]=k[E])}else o||(p||(p=[]),p.push(ee,o)),o=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(p=p||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Nt("scroll",t),p||I===k||(p=[])):(p=p||[]).push(ee,k))}o&&(p=p||[]).push("style",o);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},Mp=function(t,i,o,l){o!==l&&(i.flags|=4)};function Do(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function g_(t,i,o){var l=i.pendingProps;switch(Uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return En(i.type)&&Ea(),pn(i),null;case 3:return l=i.stateNode,Ms(),It(Mn),It(dn),Yc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ra(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(wu(ni),ni=null))),hu(t,i),pn(i),null;case 5:Xc(i);var f=Dr(Co.current);if(o=i.type,t!==null&&i.stateNode!=null)Sp(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=Dr(gi.current),Ra(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[mi]=i,l[Mo]=p,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(f=0;f<xo.length;f++)Nt(xo[f],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":at(l,p),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",l);break;case"textarea":pe(l,p),Nt("invalid",l)}Ae(o,p),f=null;for(var E in p)if(p.hasOwnProperty(E)){var I=p[E];E==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&ya(l.textContent,I,t),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&ya(l.textContent,I,t),f=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Nt("scroll",l)}switch(o){case"input":gt(l),_t(l,p,!0);break;case"textarea":gt(l),me(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=Sa)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=We(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[mi]=i,t[Mo]=l,yp(t,i,!1,!1),i.stateNode=t;e:{switch(E=st(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),f=l;break;case"iframe":case"object":case"embed":Nt("load",t),f=l;break;case"video":case"audio":for(f=0;f<xo.length;f++)Nt(xo[f],t);f=l;break;case"source":Nt("error",t),f=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),f=l;break;case"details":Nt("toggle",t),f=l;break;case"input":at(t,l),f=Gt(t,l),Nt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=se({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":pe(t,l),f=Y(t,l),Nt("invalid",t);break;default:f=l}Ae(o,f),I=f;for(p in I)if(I.hasOwnProperty(p)){var k=I[p];p==="style"?we(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&pt(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ye(t,k):typeof k=="number"&&ye(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Nt("scroll",t):k!=null&&C(t,p,k,E))}switch(o){case"input":gt(t),_t(t,l,!1);break;case"textarea":gt(t),me(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ne(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?T(t,!!l.multiple,p,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Sa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)Mp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Dr(Co.current),Dr(gi.current),Ra(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(p=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:ya(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return pn(i),null;case 13:if(It(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),vs(),i.flags|=98560,p=!1;else if(p=Ra(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),p=!1}else ni!==null&&(wu(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Qt===0&&(Qt=3):Cu())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return Ms(),hu(t,i),t===null&&yo(i.stateNode.containerInfo),pn(i),null;case 10:return Hc(i.type._context),pn(i),null;case 17:return En(i.type)&&Ea(),pn(i),null;case 19:if(It(zt),p=i.memoizedState,p===null)return pn(i),null;if(l=(i.flags&128)!==0,E=p.rendering,E===null)if(l)Do(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ia(t),E!==null){for(i.flags|=128,Do(p,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Re()>As&&(i.flags|=128,l=!0,Do(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ia(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!kt)return pn(i),null}else 2*Re()-p.renderingStartTime>As&&o!==1073741824&&(i.flags|=128,l=!0,Do(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Re(),i.sibling=null,o=zt.current,Dt(zt,l?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return Au(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function __(t,i){switch(Uc(i),i.tag){case 1:return En(i.type)&&Ea(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ms(),It(Mn),It(dn),Yc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Xc(i),null;case 13:if(It(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(zt),null;case 4:return Ms(),null;case 10:return Hc(i.type._context),null;case 22:case 23:return Au(),null;case 24:return null;default:return null}}var Ga=!1,mn=!1,v_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function ws(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function pu(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var Ep=!1;function x_(t,i){if(Ac=ca,t=th(),vc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,I=-1,k=-1,ee=0,ve=0,Ee=t,ge=null;t:for(;;){for(var Be;Ee!==o||f!==0&&Ee.nodeType!==3||(I=E+f),Ee!==p||l!==0&&Ee.nodeType!==3||(k=E+l),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(Be=Ee.firstChild)!==null;)ge=Ee,Ee=Be;for(;;){if(Ee===t)break t;if(ge===o&&++ee===f&&(I=E),ge===p&&++ve===l&&(k=E),(Be=Ee.nextSibling)!==null)break;Ee=ge,ge=Ee.parentNode}Ee=Be}o=I===-1||k===-1?null:{start:I,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cc={focusedElem:t,selectionRange:o},ca=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var qe=Ge.memoizedProps,Wt=Ge.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ii(i.type,qe),Wt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return Ge=Ep,Ep=!1,Ge}function No(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&pu(i,o,p)}f=f.next}while(f!==l)}}function Wa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function mu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[Mo],delete i[Lc],delete i[t_],delete i[n_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Sa));else if(l!==4&&(t=t.child,t!==null))for(gu(t,i,o),t=t.sibling;t!==null;)gu(t,i,o),t=t.sibling}function _u(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(_u(t,i,o),t=t.sibling;t!==null;)_u(t,i,o),t=t.sibling}var cn=null,ri=!1;function or(t,i,o){for(o=o.child;o!==null;)Cp(t,i,o),o=o.sibling}function Cp(t,i,o){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:mn||ws(o,i);case 6:var l=cn,f=ri;cn=null,or(t,i,o),cn=l,ri=f,cn!==null&&(ri?(t=cn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ri?(t=cn,o=o.stateNode,t.nodeType===8?bc(t.parentNode,o):t.nodeType===1&&bc(t,o),uo(t)):bc(cn,o.stateNode));break;case 4:l=cn,f=ri,cn=o.stateNode.containerInfo,ri=!0,or(t,i,o),cn=l,ri=f;break;case 0:case 11:case 14:case 15:if(!mn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&pu(o,i,E),f=f.next}while(f!==l)}or(t,i,o);break;case 1:if(!mn&&(ws(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(I){Ht(o,i,I)}or(t,i,o);break;case 21:or(t,i,o);break;case 22:o.mode&1?(mn=(l=mn)||o.memoizedState!==null,or(t,i,o),mn=l):or(t,i,o);break;default:or(t,i,o)}}function Rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new v_),i.forEach(function(l){var f=R_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function si(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var p=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,ri=!1;break e;case 3:cn=I.stateNode.containerInfo,ri=!0;break e;case 4:cn=I.stateNode.containerInfo,ri=!0;break e}I=I.return}if(cn===null)throw Error(n(160));Cp(p,E,f),cn=null,ri=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(ee){Ht(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pp(i,t),i=i.sibling}function Pp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),vi(t),l&4){try{No(3,t,t.return),Wa(3,t)}catch(qe){Ht(t,t.return,qe)}try{No(5,t,t.return)}catch(qe){Ht(t,t.return,qe)}}break;case 1:si(i,t),vi(t),l&512&&o!==null&&ws(o,o.return);break;case 5:if(si(i,t),vi(t),l&512&&o!==null&&ws(o,o.return),t.flags&32){var f=t.stateNode;try{ye(f,"")}catch(qe){Ht(t,t.return,qe)}}if(l&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,E=o!==null?o.memoizedProps:p,I=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&lt(f,p),st(I,E);var ee=st(I,p);for(E=0;E<k.length;E+=2){var ve=k[E],Ee=k[E+1];ve==="style"?we(f,Ee):ve==="dangerouslySetInnerHTML"?pt(f,Ee):ve==="children"?ye(f,Ee):C(f,ve,Ee,ee)}switch(I){case"input":Qe(f,p);break;case"textarea":_e(f,p);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Be=p.value;Be!=null?T(f,!!p.multiple,Be,!1):ge!==!!p.multiple&&(p.defaultValue!=null?T(f,!!p.multiple,p.defaultValue,!0):T(f,!!p.multiple,p.multiple?[]:"",!1))}f[Mo]=p}catch(qe){Ht(t,t.return,qe)}}break;case 6:if(si(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(qe){Ht(t,t.return,qe)}}break;case 3:if(si(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(qe){Ht(t,t.return,qe)}break;case 4:si(i,t),vi(t);break;case 13:si(i,t),vi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(yu=Re())),l&4&&Rp(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(mn=(ee=mn)||ve,si(i,t),mn=ee):si(i,t),vi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ve&&(t.mode&1)!==0)for(Ve=t,ve=t.child;ve!==null;){for(Ee=Ve=ve;Ve!==null;){switch(ge=Ve,Be=ge.child,ge.tag){case 0:case 11:case 14:case 15:No(4,ge,ge.return);break;case 1:ws(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(qe){Ht(l,o,qe)}}break;case 5:ws(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Dp(Ee);continue}}Be!==null?(Be.return=ge,Ve=Be):Dp(Ee)}ve=ve.sibling}e:for(ve=null,Ee=t;;){if(Ee.tag===5){if(ve===null){ve=Ee;try{f=Ee.stateNode,ee?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Ee.stateNode,k=Ee.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Xe("display",E))}catch(qe){Ht(t,t.return,qe)}}}else if(Ee.tag===6){if(ve===null)try{Ee.stateNode.nodeValue=ee?"":Ee.memoizedProps}catch(qe){Ht(t,t.return,qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;ve===Ee&&(ve=null),Ee=Ee.return}ve===Ee&&(ve=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:si(i,t),vi(t),l&4&&Rp(t);break;case 21:break;default:si(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Tp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ye(f,""),l.flags&=-33);var p=Ap(t);_u(t,p,f);break;case 3:case 4:var E=l.stateNode.containerInfo,I=Ap(t);gu(t,I,E);break;default:throw Error(n(161))}}catch(k){Ht(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function y_(t,i,o){Ve=t,bp(t)}function bp(t,i,o){for(var l=(t.mode&1)!==0;Ve!==null;){var f=Ve,p=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Ga;if(!E){var I=f.alternate,k=I!==null&&I.memoizedState!==null||mn;I=Ga;var ee=mn;if(Ga=E,(mn=k)&&!ee)for(Ve=f;Ve!==null;)E=Ve,k=E.child,E.tag===22&&E.memoizedState!==null?Np(f):k!==null?(k.return=E,Ve=k):Np(f);for(;p!==null;)Ve=p,bp(p),p=p.sibling;Ve=f,Ga=I,mn=ee}Lp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Ve=p):Lp(t)}}function Lp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Wa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!mn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Dh(i,p,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dh(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var Ee=ve.dehydrated;Ee!==null&&uo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&mu(i)}catch(ge){Ht(i,i.return,ge)}}if(i===t){Ve=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Dp(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Np(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Wa(4,i)}catch(k){Ht(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(k){Ht(i,f,k)}}var p=i.return;try{mu(i)}catch(k){Ht(i,p,k)}break;case 5:var E=i.return;try{mu(i)}catch(k){Ht(i,E,k)}}}catch(k){Ht(i,i.return,k)}if(i===t){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var S_=Math.ceil,ja=L.ReactCurrentDispatcher,vu=L.ReactCurrentOwner,Yn=L.ReactCurrentBatchConfig,yt=0,rn=null,Yt=null,un=0,On=0,Ts=tr(0),Qt=0,Io=null,Ir=0,Xa=0,xu=0,Uo=null,Tn=null,yu=0,As=1/0,Ni=null,qa=!1,Su=null,ar=null,Ya=!1,lr=null,$a=0,Fo=0,Mu=null,Ka=-1,Za=0;function xn(){return(yt&6)!==0?Re():Ka!==-1?Ka:Ka=Re()}function cr(t){return(t.mode&1)===0?1:(yt&2)!==0&&un!==0?un&-un:r_.transition!==null?(Za===0&&(Za=ss()),Za):(t=At,t!==0||(t=window.event,t=t===void 0?16:Ud(t.type)),t)}function oi(t,i,o,l){if(50<Fo)throw Fo=0,Mu=null,Error(n(185));qi(t,o,l),((yt&2)===0||t!==rn)&&(t===rn&&((yt&2)===0&&(Xa|=o),Qt===4&&ur(t,un)),An(t,l),o===1&&yt===0&&(i.mode&1)===0&&(As=Re()+500,Ta&&ir()))}function An(t,i){var o=t.callbackNode;ro(t,i);var l=Lt(t,t===rn?un:0);if(l===0)o!==null&&X(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&X(o),i===1)t.tag===0?i_(Up.bind(null,t)):yh(Up.bind(null,t)),Jg(function(){(yt&6)===0&&ir()}),o=null;else{switch(Cd(l)){case 1:o=nt;break;case 4:o=rt;break;case 16:o=$e;break;case 536870912:o=Rt;break;default:o=$e}o=Gp(o,Ip.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Ip(t,i){if(Ka=-1,Za=0,(yt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Cs()&&t.callbackNode!==o)return null;var l=Lt(t,t===rn?un:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Qa(t,l);else{i=l;var f=yt;yt|=2;var p=Op();(rn!==t||un!==i)&&(Ni=null,As=Re()+500,Fr(t,i));do try{w_();break}catch(I){Fp(t,I)}while(!0);Bc(),ja.current=p,yt=f,Yt!==null?i=0:(rn=null,un=0,i=Qt)}if(i!==0){if(i===2&&(f=fn(t),f!==0&&(l=f,i=Eu(t,f))),i===1)throw o=Io,Fr(t,0),ur(t,l),An(t,Re()),o;if(i===6)ur(t,l);else{if(f=t.current.alternate,(l&30)===0&&!M_(f)&&(i=Qa(t,l),i===2&&(p=fn(t),p!==0&&(l=p,i=Eu(t,p))),i===1))throw o=Io,Fr(t,0),ur(t,l),An(t,Re()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Or(t,Tn,Ni);break;case 3:if(ur(t,l),(l&130023424)===l&&(i=yu+500-Re(),10<i)){if(Lt(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){xn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Pc(Or.bind(null,t,Tn,Ni),i);break}Or(t,Tn,Ni);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-He(l);p=1<<E,E=i[E],E>f&&(f=E),l&=~p}if(l=f,l=Re()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*S_(l/1960))-l,10<l){t.timeoutHandle=Pc(Or.bind(null,t,Tn,Ni),l);break}Or(t,Tn,Ni);break;case 5:Or(t,Tn,Ni);break;default:throw Error(n(329))}}}return An(t,Re()),t.callbackNode===o?Ip.bind(null,t):null}function Eu(t,i){var o=Uo;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Qa(t,i),t!==2&&(i=Tn,Tn=o,i!==null&&wu(i)),t}function wu(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function M_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],p=f.getSnapshot;f=f.value;try{if(!ti(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~xu,i&=~Xa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-He(i),l=1<<o;t[o]=-1,i&=~l}}function Up(t){if((yt&6)!==0)throw Error(n(327));Cs();var i=Lt(t,0);if((i&1)===0)return An(t,Re()),null;var o=Qa(t,i);if(t.tag!==0&&o===2){var l=fn(t);l!==0&&(i=l,o=Eu(t,l))}if(o===1)throw o=Io,Fr(t,0),ur(t,i),An(t,Re()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,Tn,Ni),An(t,Re()),null}function Tu(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(As=Re()+500,Ta&&ir())}}function Ur(t){lr!==null&&lr.tag===0&&(yt&6)===0&&Cs();var i=yt;yt|=1;var o=Yn.transition,l=At;try{if(Yn.transition=null,At=1,t)return t()}finally{At=l,Yn.transition=o,yt=i,(yt&6)===0&&ir()}}function Au(){On=Ts.current,It(Ts)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Qg(o)),Yt!==null)for(o=Yt.return;o!==null;){var l=o;switch(Uc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ea();break;case 3:Ms(),It(Mn),It(dn),Yc();break;case 5:Xc(l);break;case 4:Ms();break;case 13:It(zt);break;case 19:It(zt);break;case 10:Hc(l.type._context);break;case 22:case 23:Au()}o=o.return}if(rn=t,Yt=t=fr(t.current,null),un=On=i,Qt=0,Io=null,xu=Xa=Ir=0,Tn=Uo=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,p=o.pending;if(p!==null){var E=p.next;p.next=f,l.next=E}o.pending=l}Lr=null}return t}function Fp(t,i){do{var o=Yt;try{if(Bc(),Ua.current=za,Fa){for(var l=Bt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Fa=!1}if(Nr=0,nn=Zt=Bt=null,Ro=!1,Po=0,vu.current=null,o===null||o.return===null){Qt=1,Io=i,Yt=null;break}e:{var p=t,E=o.return,I=o,k=i;if(i=un,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,ve=I,Ee=ve.tag;if((ve.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Be=ap(E);if(Be!==null){Be.flags&=-257,lp(Be,E,I,p,i),Be.mode&1&&op(p,ee,i),i=Be,k=ee;var Ge=i.updateQueue;if(Ge===null){var qe=new Set;qe.add(k),i.updateQueue=qe}else Ge.add(k);break e}else{if((i&1)===0){op(p,ee,i),Cu();break e}k=Error(n(426))}}else if(kt&&I.mode&1){var Wt=ap(E);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),lp(Wt,E,I,p,i),kc(Es(k,I));break e}}p=k=Es(k,I),Qt!==4&&(Qt=2),Uo===null?Uo=[p]:Uo.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=rp(p,k,i);Lh(p,q);break e;case 1:I=k;var H=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ar===null||!ar.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=sp(p,I,i);Lh(p,Te);break e}}p=p.return}while(p!==null)}zp(o)}catch(Ke){i=Ke,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function Op(){var t=ja.current;return ja.current=za,t===null?za:t}function Cu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),rn===null||(Ir&268435455)===0&&(Xa&268435455)===0||ur(rn,un)}function Qa(t,i){var o=yt;yt|=2;var l=Op();(rn!==t||un!==i)&&(Ni=null,Fr(t,i));do try{E_();break}catch(f){Fp(t,f)}while(!0);if(Bc(),yt=o,ja.current=l,Yt!==null)throw Error(n(261));return rn=null,un=0,Qt}function E_(){for(;Yt!==null;)kp(Yt)}function w_(){for(;Yt!==null&&!Ce();)kp(Yt)}function kp(t){var i=Vp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?zp(t):Yt=i,vu.current=null}function zp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=g_(o,i,On),o!==null){Yt=o;return}}else{if(o=__(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Or(t,i,o){var l=At,f=Yn.transition;try{Yn.transition=null,At=1,T_(t,i,o,l)}finally{Yn.transition=f,At=l}return null}function T_(t,i,o,l){do Cs();while(lr!==null);if((yt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(sg(t,p),t===rn&&(Yt=rn=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ya||(Ya=!0,Gp($e,function(){return Cs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var E=At;At=1;var I=yt;yt|=4,vu.current=null,x_(t,o),Pp(o,t),jg(Cc),ca=!!Ac,Cc=Ac=null,t.current=o,y_(o),ze(),yt=I,At=E,Yn.transition=p}else t.current=o;if(Ya&&(Ya=!1,lr=t,$a=f),p=t.pendingLanes,p===0&&(ar=null),St(o.stateNode),An(t,Re()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(qa)throw qa=!1,t=Su,Su=null,t;return($a&1)!==0&&t.tag!==0&&Cs(),p=t.pendingLanes,(p&1)!==0?t===Mu?Fo++:(Fo=0,Mu=t):Fo=0,ir(),null}function Cs(){if(lr!==null){var t=Cd($a),i=Yn.transition,o=At;try{if(Yn.transition=null,At=16>t?16:t,lr===null)var l=!1;else{if(t=lr,lr=null,$a=0,(yt&6)!==0)throw Error(n(331));var f=yt;for(yt|=4,Ve=t.current;Ve!==null;){var p=Ve,E=p.child;if((Ve.flags&16)!==0){var I=p.deletions;if(I!==null){for(var k=0;k<I.length;k++){var ee=I[k];for(Ve=ee;Ve!==null;){var ve=Ve;switch(ve.tag){case 0:case 11:case 15:No(8,ve,p)}var Ee=ve.child;if(Ee!==null)Ee.return=ve,Ve=Ee;else for(;Ve!==null;){ve=Ve;var ge=ve.sibling,Be=ve.return;if(wp(ve),ve===ee){Ve=null;break}if(ge!==null){ge.return=Be,Ve=ge;break}Ve=Be}}}var Ge=p.alternate;if(Ge!==null){var qe=Ge.child;if(qe!==null){Ge.child=null;do{var Wt=qe.sibling;qe.sibling=null,qe=Wt}while(qe!==null)}}Ve=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Ve=E;else e:for(;Ve!==null;){if(p=Ve,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:No(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,Ve=q;break e}Ve=p.return}}var H=t.current;for(Ve=H;Ve!==null;){E=Ve;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Ve=$;else e:for(E=H;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Wa(9,I)}}catch(Ke){Ht(I,I.return,Ke)}if(I===E){Ve=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Ve=Te;break e}Ve=I.return}}if(yt=f,ir(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(bt,t)}catch{}l=!0}return l}finally{At=o,Yn.transition=i}}return!1}function Bp(t,i,o){i=Es(o,i),i=rp(t,i,1),t=sr(t,i,1),i=xn(),t!==null&&(qi(t,1,i),An(t,i))}function Ht(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=Es(o,t),t=sp(i,t,1),i=sr(i,t,1),t=xn(),i!==null&&(qi(i,1,t),An(i,t));break}}i=i.return}}function A_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&o,rn===t&&(un&o)===o&&(Qt===4||Qt===3&&(un&130023424)===un&&500>Re()-yu?Fr(t,0):xu|=o),An(t,i)}function Hp(t,i){i===0&&((t.mode&1)===0?i=1:(i=tn,tn<<=1,(tn&130023424)===0&&(tn=4194304)));var o=xn();t=bi(t,i),t!==null&&(qi(t,i,o),An(t,o))}function C_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Hp(t,o)}function R_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Hp(t,o)}var Vp;Vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Mn.current)wn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return wn=!1,m_(t,i,o);wn=(t.flags&131072)!==0}else wn=!1,kt&&(i.flags&1048576)!==0&&Sh(i,Ca,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Va(t,i),t=i.pendingProps;var f=ms(i,dn.current);Ss(i,o),f=Zc(null,i,l,t,f,o);var p=Qc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,En(l)?(p=!0,wa(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Wc(i),f.updater=Ba,i.stateNode=f,f._reactInternals=i,ru(i,l,t,o),i=lu(null,i,l,!0,p,o)):(i.tag=0,kt&&p&&Ic(i),vn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Va(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=b_(l),t=ii(l,t),f){case 0:i=au(null,i,l,t,o);break e;case 1:i=pp(null,i,l,t,o);break e;case 11:i=cp(null,i,l,t,o);break e;case 14:i=up(null,i,l,ii(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),au(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),pp(t,i,l,f,o);case 3:e:{if(mp(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,f=p.element,bh(t,i),Na(i,l,null,o);var E=i.memoizedState;if(l=E.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Es(Error(n(423)),i),i=gp(t,i,l,o,f);break e}else if(l!==f){f=Es(Error(n(424)),i),i=gp(t,i,l,o,f);break e}else for(Fn=er(i.stateNode.containerInfo.firstChild),Un=i,kt=!0,ni=null,o=Rh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(vs(),l===f){i=Di(t,i,o);break e}vn(t,i,l,o)}i=i.child}return i;case 5:return Nh(i),t===null&&Oc(i),l=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,E=f.children,Rc(l,f)?E=null:p!==null&&Rc(l,p)&&(i.flags|=32),hp(t,i),vn(t,i,E,o),i.child;case 6:return t===null&&Oc(i),null;case 13:return _p(t,i,o);case 4:return jc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=xs(i,null,l,o):vn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),cp(t,i,l,f,o);case 7:return vn(t,i,i.pendingProps,o),i.child;case 8:return vn(t,i,i.pendingProps.children,o),i.child;case 12:return vn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,E=f.value,Dt(ba,l._currentValue),l._currentValue=E,p!==null)if(ti(p.value,E)){if(p.children===f.children&&!Mn.current){i=Di(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){E=p.child;for(var k=I.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=Li(-1,o&-o),k.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),ee.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Vc(p.return,o,i),I.lanes|=o;break}k=k.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Vc(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}vn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Ss(i,o),f=Xn(f),l=l(f),i.flags|=1,vn(t,i,l,o),i.child;case 14:return l=i.type,f=ii(l,i.pendingProps),f=ii(l.type,f),up(t,i,l,f,o);case 15:return fp(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),Va(t,i),i.tag=1,En(l)?(t=!0,wa(i)):t=!1,Ss(i,o),np(i,l,f),ru(i,l,f,o),lu(null,i,l,!0,t,o);case 19:return xp(t,i,o);case 22:return dp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return J(t,i)}function P_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,i,o,l){return new P_(t,i,o,l)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b_(t){if(typeof t=="function")return Ru(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===de)return 14}return 2}function fr(t,i){var o=t.alternate;return o===null?(o=$n(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ja(t,i,o,l,f,p){var E=2;if(l=t,typeof t=="function")Ru(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case b:return kr(o.children,f,p,i);case F:E=8,f|=8;break;case te:return t=$n(12,o,i,f|2),t.elementType=te,t.lanes=p,t;case K:return t=$n(13,o,i,f),t.elementType=K,t.lanes=p,t;case ce:return t=$n(19,o,i,f),t.elementType=ce,t.lanes=p,t;case le:return el(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M:E=10;break e;case R:E=9;break e;case ie:E=11;break e;case de:E=14;break e;case ne:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=$n(E,o,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function kr(t,i,o,l){return t=$n(7,t,l,i),t.lanes=o,t}function el(t,i,o,l){return t=$n(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function Pu(t,i,o){return t=$n(6,t,null,i),t.lanes=o,t}function bu(t,i,o){return i=$n(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function L_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Lu(t,i,o,l,f,p,E,I,k){return t=new L_(t,i,o,I,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=$n(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(p),t}function D_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Wp(t){if(!t)return nr;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(En(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(En(o))return vh(t,o,i)}return i}function jp(t,i,o,l,f,p,E,I,k){return t=Lu(o,l,!0,t,f,p,E,I,k),t.context=Wp(null),o=t.current,l=xn(),f=cr(o),p=Li(l,f),p.callback=i??null,sr(o,p,f),t.current.lanes=f,qi(t,f,l),An(t,l),t}function tl(t,i,o,l){var f=i.current,p=xn(),E=cr(f);return o=Wp(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(p,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=sr(f,i,E),t!==null&&(oi(t,f,E,p),Da(t,f,E)),E}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Du(t,i){Xp(t,i),(t=t.alternate)&&Xp(t,i)}function N_(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nu(t){this._internalRoot=t}il.prototype.render=Nu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));tl(t,i,null,null)},il.prototype.unmount=Nu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){tl(null,t,null,null)}),i[Ai]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var i=bd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,t),o===0&&Nd(t)}};function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function I_(t,i,o,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var ee=nl(E);p.call(ee)}}var E=jp(i,l,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=E,t[Ai]=E.current,yo(t.nodeType===8?t.parentNode:t),Ur(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var ee=nl(k);I.call(ee)}}var k=Lu(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=k,t[Ai]=k.current,yo(t.nodeType===8?t.parentNode:t),Ur(function(){tl(i,k,o,l)}),k}function sl(t,i,o,l,f){var p=o._reactRootContainer;if(p){var E=p;if(typeof f=="function"){var I=f;f=function(){var k=nl(E);I.call(k)}}tl(i,E,t,f)}else E=I_(o,i,t,f,l);return nl(E)}Rd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ti(i.pendingLanes);o!==0&&(rc(i,o|1),An(i,Re()),(yt&6)===0&&(As=Re()+500,ir()))}break;case 13:Ur(function(){var l=bi(t,1);if(l!==null){var f=xn();oi(l,t,1,f)}}),Du(t,1)}},sc=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var o=xn();oi(i,t,134217728,o)}Du(t,134217728)}},Pd=function(t){if(t.tag===13){var i=cr(t),o=bi(t,i);if(o!==null){var l=xn();oi(o,t,i,l)}Du(t,i)}},bd=function(){return At},Ld=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},re=function(t,i,o){switch(i){case"input":if(Qe(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=Ma(l);if(!f)throw Error(n(90));dt(l),Qe(l,f)}}}break;case"textarea":_e(t,o);break;case"select":i=o.value,i!=null&&T(t,!!o.multiple,i,!1)}},Xt=Tu,mt=Ur;var U_={usingClientEntryPoint:!1,Events:[Eo,hs,Ma,ct,Ct,Tu]},Oo={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F_={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||N_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{bt=ol.inject(F_),Ot=ol}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U_,Cn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(i))throw Error(n(200));return D_(t,i,null,o)},Cn.createRoot=function(t,i){if(!Iu(t))throw Error(n(299));var o=!1,l="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Lu(t,1,!1,null,null,o,!1,l,f),t[Ai]=i.current,yo(t.nodeType===8?t.parentNode:t),new Nu(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=W(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return Ur(t)},Cn.hydrate=function(t,i,o){if(!rl(i))throw Error(n(200));return sl(null,t,i,!0,o)},Cn.hydrateRoot=function(t,i,o){if(!Iu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,p="",E=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=jp(i,null,t,1,o??null,f,!1,p,E),t[Ai]=i.current,yo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new il(i)},Cn.render=function(t,i,o){if(!rl(i))throw Error(n(200));return sl(null,t,i,!1,o)},Cn.unmountComponentAtNode=function(t){if(!rl(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){sl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},Cn.unstable_batchedUpdates=Tu,Cn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!rl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return sl(t,i,o,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var nm;function j_(){if(nm)return Ou.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ou.exports=W_(),Ou.exports}var im;function X_(){if(im)return al;im=1;var s=j_();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var q_=X_();function Y_(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function v0(){const[s,e]=Ze.useState(()=>{try{return localStorage.getItem("shivam_theme_pref")||"auto"}catch{return"auto"}});Ze.useEffect(()=>{document.documentElement.setAttribute("data-theme",s);try{localStorage.setItem("shivam_theme_pref",s)}catch{}},[s]);const n=s==="auto"?Y_():s;function r(){e(a=>a==="auto"?"dark":a==="dark"?"light":"auto")}return{theme:s,effectiveTheme:n,cycleTheme:r}}const $_=["home","about","projects","skills","contact"];function K_(){const[s,e]=Ze.useState("home");return Ze.useEffect(()=>{const n=$_.map(a=>document.getElementById(a)).filter(Boolean);if(!("IntersectionObserver"in window)||n.length===0)return;const r=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting&&e(c.target.id)})},{rootMargin:"-20% 0px -65% 0px",threshold:0});return n.forEach(a=>r.observe(a)),()=>r.disconnect()},[]),s}function Si(s,e=!0){Ze.useEffect(()=>{const n=s==null?void 0:s.current;if(!n||!e)return;function r(c){const u=n.getBoundingClientRect(),d=u.left+u.width/2,h=u.top+u.height/2,m=c.clientX-d,_=c.clientY-h,x=8,y=Math.max(-x,Math.min(x,m*.28)),S=Math.max(-x,Math.min(x,_*.28));n.style.transform=`translate3d(${y}px, ${S}px, 0)`}function a(){n.style.transition="transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",n.style.transform="translate3d(0, 0, 0)",setTimeout(()=>{n.style.transition=""},350)}return n.addEventListener("mousemove",r),n.addEventListener("mouseleave",a),()=>{n.removeEventListener("mousemove",r),n.removeEventListener("mouseleave",a)}},[s,e])}function Js(){const[s,e]=Ze.useState(()=>window.matchMedia("(pointer: fine)").matches);return Ze.useEffect(()=>{const n=window.matchMedia("(pointer: fine)"),r=a=>e(a.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),s}const Z_="_siteHeader_1dvp0_1",Q_="_navInner_1dvp0_12",J_="_brand_1dvp0_18",ev="_navLinks_1dvp0_27",tv="_navItem_1dvp0_34",nv="_navLink_1dvp0_27",iv="_activeLink_1dvp0_52",rv="_mobileMenuBtn_1dvp0_57",sv="_mobileNavOverlay_1dvp0_70",ov="_isOpen_1dvp0_82",av="_mobileNavLinks_1dvp0_86",lv="_mobileNavLink_1dvp0_86",Zn={siteHeader:Z_,navInner:Q_,brand:J_,navLinks:ev,navItem:tv,navLink:nv,activeLink:iv,mobileMenuBtn:rv,mobileNavOverlay:sv,isOpen:ov,mobileNavLinks:av,mobileNavLink:lv},rm=[{label:"Home",href:"#home",id:"home"},{label:"About",href:"#about",id:"about"},{label:"Projects",href:"#projects",id:"projects"},{label:"Skills",href:"#skills",id:"skills"},{label:"Contact",href:"#contact",id:"contact"}];function cv({href:s,label:e,isActive:n,isFine:r,onClick:a}){const c=Ze.useRef(null);return Si(c,r),ae.jsx("a",{ref:c,href:s,className:`${Zn.navLink} ${n?Zn.activeLink:""}`,"aria-current":n?"true":void 0,onClick:a,children:e})}function uv(){const s=K_(),e=Js(),[n,r]=Ze.useState(!1),a=Ze.useRef(null);Si(a,e);function c(){r(!1)}return Ze.useEffect(()=>{function u(d){(d.key==="Escape"||d.key==="Esc")&&n&&c()}return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[n]),ae.jsxs("header",{className:Zn.siteHeader,children:[ae.jsx("div",{className:"container",children:ae.jsxs("nav",{className:Zn.navInner,"aria-label":"Main navigation",children:[ae.jsx("a",{ref:a,className:Zn.brand,href:"#home",children:"Shivam Gupta"}),ae.jsx("ul",{className:Zn.navLinks,children:rm.map(({label:u,href:d,id:h})=>ae.jsx("li",{className:Zn.navItem,children:ae.jsx(cv,{href:d,label:u,isActive:s===h,isFine:e})},h))}),ae.jsx("button",{className:Zn.mobileMenuBtn,"aria-expanded":n,"aria-controls":"mobile-nav-menu","aria-label":"Toggle navigation menu",onClick:()=>r(u=>!u),children:"Menu"})]})}),ae.jsx("div",{id:"mobile-nav-menu",className:`${Zn.mobileNavOverlay} ${n?Zn.isOpen:""}`,"aria-hidden":!n,children:ae.jsx("div",{className:"container",children:ae.jsx("ul",{className:Zn.mobileNavLinks,children:rm.map(({label:u,href:d,id:h})=>ae.jsx("li",{children:ae.jsx("a",{href:d,className:Zn.mobileNavLink,"aria-current":s===h?"true":void 0,onClick:c,children:u})},h))})})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="169",fv=0,sm=1,dv=2,x0=1,hv=2,Bi=3,Er=0,bn=1,Hi=2,Sr=0,Ws=1,om=2,am=3,lm=4,pv=5,qr=100,mv=101,gv=102,_v=103,vv=104,xv=200,yv=201,Sv=202,Mv=203,Mf=204,Ef=205,Ev=206,wv=207,Tv=208,Av=209,Cv=210,Rv=211,Pv=212,bv=213,Lv=214,wf=0,Tf=1,Af=2,qs=3,Cf=4,Rf=5,Pf=6,bf=7,y0=0,Dv=1,Nv=2,Mr=0,Iv=1,Uv=2,Fv=3,Ov=4,kv=5,zv=6,Bv=7,S0=300,Ys=301,$s=302,Lf=303,Df=304,Jl=306,Nf=1e3,$r=1001,If=1002,Qn=1003,Hv=1004,ll=1005,fi=1006,Bu=1007,Kr=1008,Wi=1009,M0=1010,E0=1011,Ko=1012,dd=1013,Jr=1014,Vi=1015,Zo=1016,hd=1017,pd=1018,Ks=1020,w0=35902,T0=1021,A0=1022,hi=1023,C0=1024,R0=1025,js=1026,Zs=1027,P0=1028,md=1029,b0=1030,gd=1031,_d=1033,Fl=33776,Ol=33777,kl=33778,zl=33779,Uf=35840,Ff=35841,Of=35842,kf=35843,zf=36196,Bf=37492,Hf=37496,Vf=37808,Gf=37809,Wf=37810,jf=37811,Xf=37812,qf=37813,Yf=37814,$f=37815,Kf=37816,Zf=37817,Qf=37818,Jf=37819,ed=37820,td=37821,Bl=36492,nd=36494,id=36495,L0=36283,rd=36284,sd=36285,od=36286,Vv=3200,Gv=3201,D0=0,Wv=1,yr="",xi="srgb",Tr="srgb-linear",vd="display-p3",ec="display-p3-linear",Gl="linear",Ut="srgb",Wl="rec709",jl="p3",Rs=7680,cm=519,jv=512,Xv=513,qv=514,N0=515,Yv=516,$v=517,Kv=518,Zv=519,um=35044,fm="300 es",Gi=2e3,Xl=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=Math.PI/180,ad=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function Pn(s,e,n){return Math.max(e,Math.min(n,s))}function Qv(s,e){return(s%e+e)%e}function Vu(s,e,n){return(1-n)*s+n*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,n=0){xt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,n,r,a,c,u,d,h,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,h,m)}set(e,n,r,a,c,u,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=c,_[5]=h,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],_=r[4],x=r[7],y=r[2],S=r[5],w=r[8],A=a[0],g=a[3],v=a[6],D=a[1],C=a[4],L=a[7],G=a[2],O=a[5],b=a[8];return c[0]=u*A+d*D+h*G,c[3]=u*g+d*C+h*O,c[6]=u*v+d*L+h*b,c[1]=m*A+_*D+x*G,c[4]=m*g+_*C+x*O,c[7]=m*v+_*L+x*b,c[2]=y*A+S*D+w*G,c[5]=y*g+S*C+w*O,c[8]=y*v+S*L+w*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*u*_-n*d*m-r*c*_+r*d*h+a*c*m-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=_*u-d*m,y=d*h-_*c,S=m*c-u*h,w=n*x+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(a*m-_*r)*A,e[2]=(d*r-a*u)*A,e[3]=y*A,e[4]=(_*n-a*h)*A,e[5]=(a*c-d*n)*A,e[6]=S*A,e[7]=(r*h-m*n)*A,e[8]=(u*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,d){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-a*m,a*h,-a*(-m*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Gu.makeScale(e,n)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new ft;function I0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jv(){const s=ql("canvas");return s.style.display="block",s}const dm={};function Hl(s){s in dm||(dm[s]=!0,console.warn(s))}function e1(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function t1(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function n1(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hm=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pm=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[Tr]:{transfer:Gl,primaries:Wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[xi]:{transfer:Ut,primaries:Wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ec]:{transfer:Gl,primaries:jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(pm),fromReference:s=>s.applyMatrix3(hm)},[vd]:{transfer:Ut,primaries:jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(pm),fromReference:s=>s.applyMatrix3(hm).convertLinearToSRGB()}},i1=new Set([Tr,ec]),Tt={enabled:!0,_workingColorSpace:Tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!i1.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Bo[e].toReference,a=Bo[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Bo[s].primaries},getTransfer:function(s){return s===yr?Gl:Bo[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Bo[e].luminanceCoefficients)}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class r1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=ql("canvas")),Ps.width=e.width,Ps.height=e.height;const r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Xs(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xs(n[r]/255)*255):n[r]=Xs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s1=0;class U0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?c.push(ju(a[u].image)):c.push(ju(a[u]))}else c=ju(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function ju(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?r1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o1=0;class Ln extends eo{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=$r,a=$r,c=fi,u=Kr,d=hi,h=Wi,m=Ln.DEFAULT_ANISOTROPY,_=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Qo(),this.name="",this.source=new U0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=S0;Ln.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,r=0,a=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,m=h[0],_=h[4],x=h[8],y=h[1],S=h[5],w=h[9],A=h[2],g=h[6],v=h[10];if(Math.abs(_-y)<.01&&Math.abs(x-A)<.01&&Math.abs(w-g)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+A)<.1&&Math.abs(w+g)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(m+1)/2,L=(S+1)/2,G=(v+1)/2,O=(_+y)/4,b=(x+A)/4,F=(w+g)/4;return C>L&&C>G?C<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(C),a=O/r,c=b/r):L>G?L<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(L),r=O/a,c=F/a):G<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(G),r=b/c,a=F/c),this.set(r,a,c,n),this}let D=Math.sqrt((g-w)*(g-w)+(x-A)*(x-A)+(y-_)*(y-_));return Math.abs(D)<.001&&(D=1),this.x=(g-w)/D,this.y=(x-A)/D,this.z=(y-_)/D,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a1 extends eo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new U0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends a1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class F0 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l1 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,d){let h=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const y=c[u+0],S=c[u+1],w=c[u+2],A=c[u+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=A;return}if(x!==A||h!==y||m!==S||_!==w){let g=1-d;const v=h*y+m*S+_*w+x*A,D=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const G=Math.sqrt(C),O=Math.atan2(G,v*D);g=Math.sin(g*O)/G,d=Math.sin(d*O)/G}const L=d*D;if(h=h*g+y*L,m=m*g+S*L,_=_*g+w*L,x=x*g+A*L,g===1-d){const G=1/Math.sqrt(h*h+m*m+_*_+x*x);h*=G,m*=G,_*=G,x*=G}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,u){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],x=c[u],y=c[u+1],S=c[u+2],w=c[u+3];return e[n]=d*w+_*x+h*S-m*y,e[n+1]=h*w+_*y+m*x-d*S,e[n+2]=m*w+_*S+d*y-h*x,e[n+3]=_*w-d*x-h*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),x=d(c/2),y=h(r/2),S=h(a/2),w=h(c/2);switch(u){case"XYZ":this._x=y*_*x+m*S*w,this._y=m*S*x-y*_*w,this._z=m*_*w+y*S*x,this._w=m*_*x-y*S*w;break;case"YXZ":this._x=y*_*x+m*S*w,this._y=m*S*x-y*_*w,this._z=m*_*w-y*S*x,this._w=m*_*x+y*S*w;break;case"ZXY":this._x=y*_*x-m*S*w,this._y=m*S*x+y*_*w,this._z=m*_*w+y*S*x,this._w=m*_*x-y*S*w;break;case"ZYX":this._x=y*_*x-m*S*w,this._y=m*S*x+y*_*w,this._z=m*_*w-y*S*x,this._w=m*_*x+y*S*w;break;case"YZX":this._x=y*_*x+m*S*w,this._y=m*S*x+y*_*w,this._z=m*_*w-y*S*x,this._w=m*_*x-y*S*w;break;case"XZY":this._x=y*_*x-m*S*w,this._y=m*S*x-y*_*w,this._z=m*_*w+y*S*x,this._w=m*_*x+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],d=n[5],h=n[9],m=n[2],_=n[6],x=n[10],y=r+d+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-h)*S,this._y=(c-m)*S,this._z=(u-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(c+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(u-a)/S,this._x=(c+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+u*d+a*m-c*h,this._y=a*_+u*h+c*d-r*m,this._z=c*_+u*m+r*h-a*d,this._w=u*_-r*d-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,y=Math.sin(n*_)/m;return this._w=u*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*a-d*r),_=2*(d*n-c*a),x=2*(c*r-u*n);return this.x=n+h*m+u*x-d*_,this.y=r+h*_+d*m-c*x,this.z=a+h*x+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,d=n.y,h=n.z;return this.x=a*h-c*d,this.y=c*u-r*h,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new j,mm=new Jo;class ea{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ai):ai.fromBufferAttribute(c,u),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cl.copy(r.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),ul.subVectors(this.max,Ho),bs.subVectors(e.a,Ho),Ls.subVectors(e.b,Ho),Ds.subVectors(e.c,Ho),hr.subVectors(Ls,bs),pr.subVectors(Ds,Ls),zr.subVectors(bs,Ds);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-zr.z,zr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,zr.z,0,-zr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-zr.y,zr.x,0];return!qu(n,bs,Ls,Ds,ul)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,bs,Ls,Ds,ul))?!1:(fl.crossVectors(hr,pr),n=[fl.x,fl.y,fl.z],qu(n,bs,Ls,Ds,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new j,new j,new j,new j,new j,new j,new j,new j],ai=new j,cl=new ea,bs=new j,Ls=new j,Ds=new j,hr=new j,pr=new j,zr=new j,Ho=new j,ul=new j,fl=new j,Br=new j;function qu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){Br.fromArray(s,c);const d=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),h=e.dot(Br),m=n.dot(Br),_=r.dot(Br);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const c1=new ea,Vo=new j,Yu=new j;class ta{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):c1.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Vo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Yu)),this.expandByPoint(Vo.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new j,$u=new j,dl=new j,mr=new j,Ku=new j,hl=new j,Zu=new j;class xd{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){$u.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),mr.copy(this.origin).sub($u);const c=e.distanceTo(n)*.5,u=-this.direction.dot(dl),d=mr.dot(this.direction),h=-mr.dot(dl),m=mr.lengthSq(),_=Math.abs(1-u*u);let x,y,S,w;if(_>0)if(x=u*h-d,y=u*d-h,w=c*_,x>=0)if(y>=-w)if(y<=w){const A=1/_;x*=A,y*=A,S=x*(x+u*y+2*d)+y*(u*x+y+2*h)+m}else y=c,x=Math.max(0,-(u*y+d)),S=-x*x+y*(y+2*h)+m;else y=-c,x=Math.max(0,-(u*y+d)),S=-x*x+y*(y+2*h)+m;else y<=-w?(x=Math.max(0,-(-u*c+d)),y=x>0?-c:Math.min(Math.max(-c,-h),c),S=-x*x+y*(y+2*h)+m):y<=w?(x=0,y=Math.min(Math.max(-c,-h),c),S=y*(y+2*h)+m):(x=Math.max(0,-(u*c+d)),y=x>0?c:Math.min(Math.max(-c,-h),c),S=-x*x+y*(y+2*h)+m);else y=u>0?-c:c,x=Math.max(0,-(u*y+d)),S=-x*x+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy($u).addScaledVector(dl,y),S}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,d,h;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),_>=0?(c=(e.min.y-y.y)*_,u=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,u=(e.min.y-y.y)*_),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),x>=0?(d=(e.min.z-y.z)*x,h=(e.max.z-y.z)*x):(d=(e.max.z-y.z)*x,h=(e.min.z-y.z)*x),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,a,c){Ku.subVectors(n,e),hl.subVectors(r,e),Zu.crossVectors(Ku,hl);let u=this.direction.dot(Zu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;mr.subVectors(this.origin,e);const h=d*this.direction.dot(hl.crossVectors(mr,hl));if(h<0)return null;const m=d*this.direction.dot(Ku.cross(mr));if(m<0||h+m>u)return null;const _=-d*mr.dot(Zu);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,r,a,c,u,d,h,m,_,x,y,S,w,A,g){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,d,h,m,_,x,y,S,w,A,g)}set(e,n,r,a,c,u,d,h,m,_,x,y,S,w,A,g){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=u,v[9]=d,v[13]=h,v[2]=m,v[6]=_,v[10]=x,v[14]=y,v[3]=S,v[7]=w,v[11]=A,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),c=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=u*_,S=u*x,w=d*_,A=d*x;n[0]=h*_,n[4]=-h*x,n[8]=m,n[1]=S+w*m,n[5]=y-A*m,n[9]=-d*h,n[2]=A-y*m,n[6]=w+S*m,n[10]=u*h}else if(e.order==="YXZ"){const y=h*_,S=h*x,w=m*_,A=m*x;n[0]=y+A*d,n[4]=w*d-S,n[8]=u*m,n[1]=u*x,n[5]=u*_,n[9]=-d,n[2]=S*d-w,n[6]=A+y*d,n[10]=u*h}else if(e.order==="ZXY"){const y=h*_,S=h*x,w=m*_,A=m*x;n[0]=y-A*d,n[4]=-u*x,n[8]=w+S*d,n[1]=S+w*d,n[5]=u*_,n[9]=A-y*d,n[2]=-u*m,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const y=u*_,S=u*x,w=d*_,A=d*x;n[0]=h*_,n[4]=w*m-S,n[8]=y*m+A,n[1]=h*x,n[5]=A*m+y,n[9]=S*m-w,n[2]=-m,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const y=u*h,S=u*m,w=d*h,A=d*m;n[0]=h*_,n[4]=A-y*x,n[8]=w*x+S,n[1]=x,n[5]=u*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*x+w,n[10]=y-A*x}else if(e.order==="XZY"){const y=u*h,S=u*m,w=d*h,A=d*m;n[0]=h*_,n[4]=-x,n[8]=m*_,n[1]=y*x+A,n[5]=u*_,n[9]=S*x-w,n[2]=w*x-S,n[6]=d*_,n[10]=A*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u1,e,f1)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),gr.crossVectors(r,kn),gr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),gr.crossVectors(r,kn)),gr.normalize(),pl.crossVectors(kn,gr),a[0]=gr.x,a[4]=pl.x,a[8]=kn.x,a[1]=gr.y,a[5]=pl.y,a[9]=kn.y,a[2]=gr.z,a[6]=pl.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],_=r[1],x=r[5],y=r[9],S=r[13],w=r[2],A=r[6],g=r[10],v=r[14],D=r[3],C=r[7],L=r[11],G=r[15],O=a[0],b=a[4],F=a[8],te=a[12],M=a[1],R=a[5],ie=a[9],K=a[13],ce=a[2],de=a[6],ne=a[10],le=a[14],B=a[3],fe=a[7],se=a[11],U=a[15];return c[0]=u*O+d*M+h*ce+m*B,c[4]=u*b+d*R+h*de+m*fe,c[8]=u*F+d*ie+h*ne+m*se,c[12]=u*te+d*K+h*le+m*U,c[1]=_*O+x*M+y*ce+S*B,c[5]=_*b+x*R+y*de+S*fe,c[9]=_*F+x*ie+y*ne+S*se,c[13]=_*te+x*K+y*le+S*U,c[2]=w*O+A*M+g*ce+v*B,c[6]=w*b+A*R+g*de+v*fe,c[10]=w*F+A*ie+g*ne+v*se,c[14]=w*te+A*K+g*le+v*U,c[3]=D*O+C*M+L*ce+G*B,c[7]=D*b+C*R+L*de+G*fe,c[11]=D*F+C*ie+L*ne+G*se,c[15]=D*te+C*K+L*le+G*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],d=e[5],h=e[9],m=e[13],_=e[2],x=e[6],y=e[10],S=e[14],w=e[3],A=e[7],g=e[11],v=e[15];return w*(+c*h*x-a*m*x-c*d*y+r*m*y+a*d*S-r*h*S)+A*(+n*h*S-n*m*y+c*u*y-a*u*S+a*m*_-c*h*_)+g*(+n*m*x-n*d*S-c*u*x+r*u*S+c*d*_-r*m*_)+v*(-a*d*_-n*h*x+n*d*y+a*u*x-r*u*y+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=e[9],y=e[10],S=e[11],w=e[12],A=e[13],g=e[14],v=e[15],D=x*g*m-A*y*m+A*h*S-d*g*S-x*h*v+d*y*v,C=w*y*m-_*g*m-w*h*S+u*g*S+_*h*v-u*y*v,L=_*A*m-w*x*m+w*d*S-u*A*S-_*d*v+u*x*v,G=w*x*h-_*A*h-w*d*y+u*A*y+_*d*g-u*x*g,O=n*D+r*C+a*L+c*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/O;return e[0]=D*b,e[1]=(A*y*c-x*g*c-A*a*S+r*g*S+x*a*v-r*y*v)*b,e[2]=(d*g*c-A*h*c+A*a*m-r*g*m-d*a*v+r*h*v)*b,e[3]=(x*h*c-d*y*c-x*a*m+r*y*m+d*a*S-r*h*S)*b,e[4]=C*b,e[5]=(_*g*c-w*y*c+w*a*S-n*g*S-_*a*v+n*y*v)*b,e[6]=(w*h*c-u*g*c-w*a*m+n*g*m+u*a*v-n*h*v)*b,e[7]=(u*y*c-_*h*c+_*a*m-n*y*m-u*a*S+n*h*S)*b,e[8]=L*b,e[9]=(w*x*c-_*A*c-w*r*S+n*A*S+_*r*v-n*x*v)*b,e[10]=(u*A*c-w*d*c+w*r*m-n*A*m-u*r*v+n*d*v)*b,e[11]=(_*d*c-u*x*c-_*r*m+n*x*m+u*r*S-n*d*S)*b,e[12]=G*b,e[13]=(_*A*a-w*x*a+w*r*y-n*A*y-_*r*g+n*x*g)*b,e[14]=(w*d*a-u*A*a-w*r*h+n*A*h+u*r*g-n*d*g)*b,e[15]=(u*x*a-_*d*a+_*r*h-n*x*h-u*r*y+n*d*y)*b,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,d=e.y,h=e.z,m=c*u,_=c*d;return this.set(m*u+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*u,0,m*h-a*d,_*h+a*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,d=n._z,h=n._w,m=c+c,_=u+u,x=d+d,y=c*m,S=c*_,w=c*x,A=u*_,g=u*x,v=d*x,D=h*m,C=h*_,L=h*x,G=r.x,O=r.y,b=r.z;return a[0]=(1-(A+v))*G,a[1]=(S+L)*G,a[2]=(w-C)*G,a[3]=0,a[4]=(S-L)*O,a[5]=(1-(y+v))*O,a[6]=(g+D)*O,a[7]=0,a[8]=(w+C)*b,a[9]=(g-D)*b,a[10]=(1-(y+A))*b,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Ns.set(a[0],a[1],a[2]).length();const u=Ns.set(a[4],a[5],a[6]).length(),d=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/c,_=1/u,x=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=_,li.elements[5]*=_,li.elements[6]*=_,li.elements[8]*=x,li.elements[9]*=x,li.elements[10]*=x,n.setFromRotationMatrix(li),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,a,c,u,d=Gi){const h=this.elements,m=2*c/(n-e),_=2*c/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let S,w;if(d===Gi)S=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(d===Xl)S=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,u,d=Gi){const h=this.elements,m=1/(n-e),_=1/(r-a),x=1/(u-c),y=(n+e)*m,S=(r+a)*_;let w,A;if(d===Gi)w=(u+c)*x,A=-2*x;else if(d===Xl)w=c*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new j,li=new Ft,u1=new j(0,0,0),f1=new j(1,1,1),gr=new j,pl=new j,kn=new j,gm=new Ft,_m=new Jo;class Mi{constructor(e=0,n=0,r=0,a=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],d=a[8],h=a[1],m=a[5],_=a[9],x=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Pn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class O0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d1=0;const vm=new j,Is=new Jo,Fi=new Ft,ml=new j,Go=new j,h1=new j,p1=new Jo,xm=new j(1,0,0),ym=new j(0,1,0),Sm=new j(0,0,1),Mm={type:"added"},m1={type:"removed"},Us={type:"childadded",child:null},Qu={type:"childremoved",child:null};class ln extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new j,n=new Mi,r=new Jo,a=new j(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ft}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ml.copy(e):ml.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Go,ml,this.up):Fi.lookAt(ml,Go,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Fi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(m1),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,h1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,p1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const x=h[m];c(e.shapes,x)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(c(e.materials,this.material[h]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(c(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),_=u(e.images),x=u(e.shapes),y=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new j(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new j,Oi=new j,Ju=new j,ki=new j,Fs=new j,Os=new j,Em=new j,ef=new j,tf=new j,nf=new j,rf=new Pt,sf=new Pt,of=new Pt;class di{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ci.subVectors(a,n),Oi.subVectors(r,n),Ju.subVectors(e,n);const u=ci.dot(ci),d=ci.dot(Oi),h=ci.dot(Ju),m=Oi.dot(Oi),_=Oi.dot(Ju),x=u*m-d*d;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(m*h-d*_)*y,w=(u*_-d*h)*y;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,r,a,c,u,d,h){return this.getBarycoord(e,n,r,a,ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,ki.x),h.addScaledVector(u,ki.y),h.addScaledVector(d,ki.z),h)}static getInterpolatedAttribute(e,n,r,a,c,u){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,n),sf.fromBufferAttribute(e,r),of.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(rf,c.x),u.addScaledVector(sf,c.y),u.addScaledVector(of,c.z),u}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),Oi.subVectors(e,n),ci.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ci.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return di.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,d;Fs.subVectors(a,r),Os.subVectors(c,r),ef.subVectors(e,r);const h=Fs.dot(ef),m=Os.dot(ef);if(h<=0&&m<=0)return n.copy(r);tf.subVectors(e,a);const _=Fs.dot(tf),x=Os.dot(tf);if(_>=0&&x<=_)return n.copy(a);const y=h*x-_*m;if(y<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(r).addScaledVector(Fs,u);nf.subVectors(e,c);const S=Fs.dot(nf),w=Os.dot(nf);if(w>=0&&S<=w)return n.copy(c);const A=S*m-h*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Os,d);const g=_*w-S*x;if(g<=0&&x-_>=0&&S-w>=0)return Em.subVectors(c,a),d=(x-_)/(x-_+(S-w)),n.copy(a).addScaledVector(Em,d);const v=1/(g+A+y);return u=A*v,d=y*v,n.copy(r).addScaledVector(Fs,u).addScaledVector(Os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},gl={h:0,s:0,l:0};function af(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=Qv(e,1),n=Pn(n,0,1),r=Pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=af(u,c,e+1/3),this.g=af(u,c,e),this.b=af(u,c,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=xi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xi){const r=k0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Tt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Pn(_n.r*255,0,255))*65536+Math.round(Pn(_n.g*255,0,255))*256+Math.round(Pn(_n.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(_n.copy(this),n);const r=_n.r,a=_n.g,c=_n.b,u=Math.max(r,a,c),d=Math.min(r,a,c);let h,m;const _=(d+u)/2;if(d===u)h=0,m=0;else{const x=u-d;switch(m=_<=.5?x/(u+d):x/(2-u-d),u){case r:h=(a-c)/x+(a<c?6:0);break;case a:h=(c-r)/x+2;break;case c:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=xi){Tt.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,a=_n.b;return e!==xi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(gl);const r=Vu(_r.h,gl.h,n),a=Vu(_r.s,gl.s,n),c=Vu(_r.l,gl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new vt;vt.NAMES=k0;let g1=0;class ts extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Ws,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Ef,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Mf&&(r.blendSrc=this.blendSrc),this.blendDst!==Ef&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const d in c){const h=c[d];delete h.metadata,u.push(h)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yl extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new j,_l=new xt;class Hn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=um,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array),c=Rn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class z0 extends Hn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class B0 extends Hn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Sn extends Hn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let _1=0;const Kn=new Ft,lf=new ln,ks=new j,zn=new ea,Wo=new ea,on=new j;class Vn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?B0:z0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,r){return Kn.makeTranslation(e,n,r),this.applyMatrix4(Kn),this}scale(e,n,r){return Kn.makeScale(e,n,r),this.applyMatrix4(Kn),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(on.addVectors(zn.min,Wo.min),zn.expandByPoint(on),on.addVectors(zn.max,Wo.max),zn.expandByPoint(on)):(zn.expandByPoint(Wo.min),zn.expandByPoint(Wo.max))}zn.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)on.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(on));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)on.fromBufferAttribute(d,m),h&&(ks.fromBufferAttribute(e,m),on.add(ks)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let F=0;F<r.count;F++)d[F]=new j,h[F]=new j;const m=new j,_=new j,x=new j,y=new xt,S=new xt,w=new xt,A=new j,g=new j;function v(F,te,M){m.fromBufferAttribute(r,F),_.fromBufferAttribute(r,te),x.fromBufferAttribute(r,M),y.fromBufferAttribute(c,F),S.fromBufferAttribute(c,te),w.fromBufferAttribute(c,M),_.sub(m),x.sub(m),S.sub(y),w.sub(y);const R=1/(S.x*w.y-w.x*S.y);isFinite(R)&&(A.copy(_).multiplyScalar(w.y).addScaledVector(x,-S.y).multiplyScalar(R),g.copy(x).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(R),d[F].add(A),d[te].add(A),d[M].add(A),h[F].add(g),h[te].add(g),h[M].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let F=0,te=D.length;F<te;++F){const M=D[F],R=M.start,ie=M.count;for(let K=R,ce=R+ie;K<ce;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const C=new j,L=new j,G=new j,O=new j;function b(F){G.fromBufferAttribute(a,F),O.copy(G);const te=d[F];C.copy(te),C.sub(G.multiplyScalar(G.dot(te))).normalize(),L.crossVectors(O,te);const R=L.dot(h[F])<0?-1:1;u.setXYZW(F,C.x,C.y,C.z,R)}for(let F=0,te=D.length;F<te;++F){const M=D[F],R=M.start,ie=M.count;for(let K=R,ce=R+ie;K<ce;K+=3)b(e.getX(K+0)),b(e.getX(K+1)),b(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new j,c=new j,u=new j,d=new j,h=new j,m=new j,_=new j,x=new j;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),A=e.getX(y+1),g=e.getX(y+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,g),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,g),d.add(_),h.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,x=d.normalized,y=new m.constructor(h.length*_);let S=0,w=0;for(let A=0,g=h.length;A<g;A++){d.isInterleavedBufferAttribute?S=h[A]*d.data.stride+d.offset:S=h[A]*_;for(let v=0;v<_;v++)y[w++]=m[S++]}return new Hn(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const h=[],m=c[d];for(let _=0,x=m.length;_<x;_++){const y=m[_],S=e(y,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],x=c[m];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Ft,Hr=new xd,vl=new ta,Tm=new j,xl=new j,yl=new j,Sl=new j,cf=new j,Ml=new j,Am=new j,El=new j;class Jn extends ln{constructor(e=new Vn,n=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){Ml.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const _=d[h],x=c[h];_!==0&&(cf.fromBufferAttribute(x,e),u?Ml.addScaledVector(cf,_):Ml.addScaledVector(cf.sub(n),_))}n.add(Ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(c),Hr.copy(e.ray).recast(e.near),!(vl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(vl,Tm)===null||Hr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(c).invert(),Hr.copy(e.ray).applyMatrix4(wm),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,d=c.index,h=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,A=y.length;w<A;w++){const g=y[w],v=u[g.materialIndex],D=Math.max(g.start,S.start),C=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let L=D,G=C;L<G;L+=3){const O=d.getX(L),b=d.getX(L+1),F=d.getX(L+2);a=wl(this,v,e,r,m,_,x,O,b,F),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let g=w,v=A;g<v;g+=3){const D=d.getX(g),C=d.getX(g+1),L=d.getX(g+2);a=wl(this,u,e,r,m,_,x,D,C,L),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,A=y.length;w<A;w++){const g=y[w],v=u[g.materialIndex],D=Math.max(g.start,S.start),C=Math.min(h.count,Math.min(g.start+g.count,S.start+S.count));for(let L=D,G=C;L<G;L+=3){const O=L,b=L+1,F=L+2;a=wl(this,v,e,r,m,_,x,O,b,F),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let g=w,v=A;g<v;g+=3){const D=g,C=g+1,L=g+2;a=wl(this,u,e,r,m,_,x,D,C,L),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function v1(s,e,n,r,a,c,u,d){let h;if(e.side===bn?h=r.intersectTriangle(u,c,a,!0,d):h=r.intersectTriangle(a,c,u,e.side===Er,d),h===null)return null;El.copy(d),El.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(El);return m<n.near||m>n.far?null:{distance:m,point:El.clone(),object:s}}function wl(s,e,n,r,a,c,u,d,h,m){s.getVertexPosition(d,xl),s.getVertexPosition(h,yl),s.getVertexPosition(m,Sl);const _=v1(s,e,n,r,xl,yl,Sl,Am);if(_){const x=new j;di.getBarycoord(Am,xl,yl,Sl,x),a&&(_.uv=di.getInterpolatedAttribute(a,d,h,m,x,new xt)),c&&(_.uv1=di.getInterpolatedAttribute(c,d,h,m,x,new xt)),u&&(_.normal=di.getInterpolatedAttribute(u,d,h,m,x,new j),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:h,c:m,normal:new j,materialIndex:0};di.getNormal(xl,yl,Sl,y.normal),_.face=y,_.barycoord=x}return _}class to extends Vn{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const d=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],_=[],x=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,u,c,0),w("z","y","x",1,-1,r,n,-e,u,c,1),w("x","z","y",1,1,e,r,n,a,u,2),w("x","z","y",1,-1,e,r,-n,a,u,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(x,2));function w(A,g,v,D,C,L,G,O,b,F,te){const M=L/b,R=G/F,ie=L/2,K=G/2,ce=O/2,de=b+1,ne=F+1;let le=0,B=0;const fe=new j;for(let se=0;se<ne;se++){const U=se*R-K;for(let oe=0;oe<de;oe++){const ke=oe*M-ie;fe[A]=ke*D,fe[g]=U*C,fe[v]=ce,m.push(fe.x,fe.y,fe.z),fe[A]=0,fe[g]=0,fe[v]=O>0?1:-1,_.push(fe.x,fe.y,fe.z),x.push(oe/b),x.push(1-se/F),le+=1}}for(let se=0;se<F;se++)for(let U=0;U<b;U++){const oe=y+U+de*se,ke=y+U+de*(se+1),Z=y+(U+1)+de*(se+1),ue=y+(U+1)+de*se;h.push(oe,ke,ue),h.push(ke,Z,ue),B+=6}d.addGroup(S,B,te),S+=B,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Qs(s[n]);for(const a in r)e[a]=r[a]}return e}function x1(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function H0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const y1={clone:Qs,merge:yn};var S1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S1,this.fragmentShader=M1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=x1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class V0 extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new j,Cm=new xt,Rm=new xt;class Bn extends V0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,Cm,Rm),n.subVectors(Rm,Cm)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/h,n-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Bs=1;class E1 extends ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bn(zs,Bs,e,n);a.layers=this.layers,this.add(a);const c=new Bn(zs,Bs,e,n);c.layers=this.layers,this.add(c);const u=new Bn(zs,Bs,e,n);u.layers=this.layers,this.add(u);const d=new Bn(zs,Bs,e,n);d.layers=this.layers,this.add(d);const h=new Bn(zs,Bs,e,n);h.layers=this.layers,this.add(h);const m=new Bn(zs,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,d,h]=n;for(const m of n)this.remove(m);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Xl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,h,m,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class G0 extends Ln{constructor(e,n,r,a,c,u,d,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Ys,super(e,n,r,a,c,u,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w1 extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new G0(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new to(5,5,5),c=new wr({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:Sr});c.uniforms.tEquirect.value=n;const u=new Jn(a,c),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=fi),new E1(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const uf=new j,T1=new j,A1=new ft;class jr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=uf.subVectors(r,n).cross(T1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(uf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||A1.getNormalMatrix(e),a=this.coplanarPoint(uf).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new ta,Tl=new j;class yd{constructor(e=new jr,n=new jr,r=new jr,a=new jr,c=new jr,u=new jr){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Gi){const r=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],m=a[4],_=a[5],x=a[6],y=a[7],S=a[8],w=a[9],A=a[10],g=a[11],v=a[12],D=a[13],C=a[14],L=a[15];if(r[0].setComponents(h-c,y-m,g-S,L-v).normalize(),r[1].setComponents(h+c,y+m,g+S,L+v).normalize(),r[2].setComponents(h+u,y+_,g+w,L+D).normalize(),r[3].setComponents(h-u,y-_,g-w,L-D).normalize(),r[4].setComponents(h-d,y-x,g-A,L-C).normalize(),n===Gi)r[5].setComponents(h+d,y+x,g+A,L+C).normalize();else if(n===Xl)r[5].setComponents(d,x,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Tl.x=a.normal.x>0?e.max.x:e.min.x,Tl.y=a.normal.y>0?e.max.y:e.min.y,Tl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W0(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function C1(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,m){const _=h.array,x=h.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<x.length;S++){const w=x[y],A=x[S];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++y,x[y]=A)}x.length=y+1;for(let S=0,w=x.length;S<w;S++){const A=x[S];s.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:c,update:u}}class tc extends Vn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,x=e/d,y=n/h,S=[],w=[],A=[],g=[];for(let v=0;v<_;v++){const D=v*y-u;for(let C=0;C<m;C++){const L=C*x-c;w.push(L,-D,0),A.push(0,0,1),g.push(C/d),g.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<d;D++){const C=D+m*v,L=D+m*(v+1),G=D+1+m*(v+1),O=D+1+m*v;S.push(C,L,O),S.push(L,G,O)}this.setIndex(S),this.setAttribute("position",new Sn(w,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,J1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ax=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,My=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$y=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:R1,alphahash_pars_fragment:P1,alphamap_fragment:b1,alphamap_pars_fragment:L1,alphatest_fragment:D1,alphatest_pars_fragment:N1,aomap_fragment:I1,aomap_pars_fragment:U1,batching_pars_vertex:F1,batching_vertex:O1,begin_vertex:k1,beginnormal_vertex:z1,bsdfs:B1,iridescence_fragment:H1,bumpmap_pars_fragment:V1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:X1,color_fragment:q1,color_pars_fragment:Y1,color_pars_vertex:$1,color_vertex:K1,common:Z1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:J1,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:rx,colorspace_pars_fragment:sx,envmap_fragment:ox,envmap_common_pars_fragment:ax,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:yx,envmap_vertex:ux,fog_vertex:fx,fog_pars_vertex:dx,fog_fragment:hx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:_x,lights_lambert_pars_fragment:vx,lights_pars_begin:xx,lights_toon_fragment:Sx,lights_toon_pars_fragment:Mx,lights_phong_fragment:Ex,lights_phong_pars_fragment:wx,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ax,lights_fragment_begin:Cx,lights_fragment_maps:Rx,lights_fragment_end:Px,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Nx,map_fragment:Ix,map_pars_fragment:Ux,map_particle_fragment:Fx,map_particle_pars_fragment:Ox,metalnessmap_fragment:kx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Bx,morphcolor_vertex:Hx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Wx,normal_fragment_begin:jx,normal_fragment_maps:Xx,normal_pars_fragment:qx,normal_pars_vertex:Yx,normal_vertex:$x,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:ry,dithering_fragment:sy,dithering_pars_fragment:oy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:uy,shadowmap_vertex:fy,shadowmask_pars_fragment:dy,skinbase_vertex:hy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:_y,specularmap_pars_fragment:vy,tonemapping_fragment:xy,tonemapping_pars_fragment:yy,transmission_fragment:Sy,transmission_pars_fragment:My,uv_pars_fragment:Ey,uv_pars_vertex:wy,uv_vertex:Ty,worldpos_vertex:Ay,background_vert:Cy,background_frag:Ry,backgroundCube_vert:Py,backgroundCube_frag:by,cube_vert:Ly,cube_frag:Dy,depth_vert:Ny,depth_frag:Iy,distanceRGBA_vert:Uy,distanceRGBA_frag:Fy,equirect_vert:Oy,equirect_frag:ky,linedashed_vert:zy,linedashed_frag:By,meshbasic_vert:Hy,meshbasic_frag:Vy,meshlambert_vert:Gy,meshlambert_frag:Wy,meshmatcap_vert:jy,meshmatcap_frag:Xy,meshnormal_vert:qy,meshnormal_frag:Yy,meshphong_vert:$y,meshphong_frag:Ky,meshphysical_vert:Zy,meshphysical_frag:Qy,meshtoon_vert:Jy,meshtoon_frag:eS,points_vert:tS,points_frag:nS,shadow_vert:iS,shadow_frag:rS,sprite_vert:sS,sprite_frag:oS},Ue={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},yi={basic:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:yn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:yn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:yn([Ue.points,Ue.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:yn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:yn([Ue.common,Ue.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:yn([Ue.sprite,Ue.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:yn([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:yn([Ue.lights,Ue.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};yi.physical={uniforms:yn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Al={r:0,b:0,g:0},Gr=new Mi,aS=new Ft;function lS(s,e,n,r,a,c,u){const d=new vt(0);let h=c===!0?0:1,m,_,x=null,y=0,S=null;function w(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?n:e).get(C)),C}function A(D){let C=!1;const L=w(D);L===null?v(d,h):L&&L.isColor&&(v(L,1),C=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(D,C){const L=w(C);L&&(L.isCubeTexture||L.mapping===Jl)?(_===void 0&&(_=new Jn(new to(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Qs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,O,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Gr.copy(C.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(aS.makeRotationFromEuler(Gr)),_.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ut,(x!==L||y!==L.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=L,y=L.version,S=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Jn(new tc(2,2),new wr({name:"BackgroundMaterial",uniforms:Qs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||y!==L.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=L,y=L.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,C){D.getRGB(Al,H0(s)),r.buffers.color.setClear(Al.r,Al.g,Al.b,C,u)}return{getClearColor:function(){return d},setClearColor:function(D,C=1){d.set(D),h=C,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,v(d,h)},render:A,addToRenderList:g}}function cS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,u=!1;function d(M,R,ie,K,ce){let de=!1;const ne=x(K,ie,R);c!==ne&&(c=ne,m(c.object)),de=S(M,K,ie,ce),de&&w(M,K,ie,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,L(M,R,ie,K),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return s.createVertexArray()}function m(M){return s.bindVertexArray(M)}function _(M){return s.deleteVertexArray(M)}function x(M,R,ie){const K=ie.wireframe===!0;let ce=r[M.id];ce===void 0&&(ce={},r[M.id]=ce);let de=ce[R.id];de===void 0&&(de={},ce[R.id]=de);let ne=de[K];return ne===void 0&&(ne=y(h()),de[K]=ne),ne}function y(M){const R=[],ie=[],K=[];for(let ce=0;ce<n;ce++)R[ce]=0,ie[ce]=0,K[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:ie,attributeDivisors:K,object:M,attributes:{},index:null}}function S(M,R,ie,K){const ce=c.attributes,de=R.attributes;let ne=0;const le=ie.getAttributes();for(const B in le)if(le[B].location>=0){const se=ce[B];let U=de[B];if(U===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(U=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(U=M.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;ne++}return c.attributesNum!==ne||c.index!==K}function w(M,R,ie,K){const ce={},de=R.attributes;let ne=0;const le=ie.getAttributes();for(const B in le)if(le[B].location>=0){let se=de[B];se===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),ce[B]=U,ne++}c.attributes=ce,c.attributesNum=ne,c.index=K}function A(){const M=c.newAttributes;for(let R=0,ie=M.length;R<ie;R++)M[R]=0}function g(M){v(M,0)}function v(M,R){const ie=c.newAttributes,K=c.enabledAttributes,ce=c.attributeDivisors;ie[M]=1,K[M]===0&&(s.enableVertexAttribArray(M),K[M]=1),ce[M]!==R&&(s.vertexAttribDivisor(M,R),ce[M]=R)}function D(){const M=c.newAttributes,R=c.enabledAttributes;for(let ie=0,K=R.length;ie<K;ie++)R[ie]!==M[ie]&&(s.disableVertexAttribArray(ie),R[ie]=0)}function C(M,R,ie,K,ce,de,ne){ne===!0?s.vertexAttribIPointer(M,R,ie,ce,de):s.vertexAttribPointer(M,R,ie,K,ce,de)}function L(M,R,ie,K){A();const ce=K.attributes,de=ie.getAttributes(),ne=R.defaultAttributeValues;for(const le in de){const B=de[le];if(B.location>=0){let fe=ce[le];if(fe===void 0&&(le==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),le==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const se=fe.normalized,U=fe.itemSize,oe=e.get(fe);if(oe===void 0)continue;const ke=oe.buffer,Z=oe.type,ue=oe.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||fe.gpuType===dd;if(fe.isInterleavedBufferAttribute){const Me=fe.data,Ne=Me.stride,De=fe.offset;if(Me.isInstancedInterleavedBuffer){for(let it=0;it<B.locationSize;it++)v(B.location+it,Me.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let it=0;it<B.locationSize;it++)g(B.location+it);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let it=0;it<B.locationSize;it++)C(B.location+it,U/B.locationSize,Z,se,Ne*ue,(De+U/B.locationSize*it)*ue,Se)}else{if(fe.isInstancedBufferAttribute){for(let Me=0;Me<B.locationSize;Me++)v(B.location+Me,fe.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<B.locationSize;Me++)g(B.location+Me);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let Me=0;Me<B.locationSize;Me++)C(B.location+Me,U/B.locationSize,Z,se,U*ue,U/B.locationSize*Me*ue,Se)}}else if(ne!==void 0){const se=ne[le];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(B.location,se);break;case 3:s.vertexAttrib3fv(B.location,se);break;case 4:s.vertexAttrib4fv(B.location,se);break;default:s.vertexAttrib1fv(B.location,se)}}}}D()}function G(){F();for(const M in r){const R=r[M];for(const ie in R){const K=R[ie];for(const ce in K)_(K[ce].object),delete K[ce];delete R[ie]}delete r[M]}}function O(M){if(r[M.id]===void 0)return;const R=r[M.id];for(const ie in R){const K=R[ie];for(const ce in K)_(K[ce].object),delete K[ce];delete R[ie]}delete r[M.id]}function b(M){for(const R in r){const ie=r[R];if(ie[M.id]===void 0)continue;const K=ie[M.id];for(const ce in K)_(K[ce].object),delete K[ce];delete ie[M.id]}}function F(){te(),u=!0,c!==a&&(c=a,m(c.object))}function te(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:F,resetDefaultState:te,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:b,initAttributes:A,enableAttribute:g,disableUnusedAttributes:D}}function uS(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let w=0;w<x;w++)S+=_[w];n.update(S,r,1)}function h(m,_,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)u(m[w],_[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,x);let w=0;for(let A=0;A<x;A++)w+=_[A];for(let A=0;A<y.length;A++)n.update(w,r,y[A])}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function fS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(b){return!(b!==hi&&r.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(b){const F=b===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Wi&&r.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Vi&&!F)}function h(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(y===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=w>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:D,maxVaryings:C,maxFragmentUniforms:L,vertexTextures:G,maxSamples:O}}function dS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new jr,d=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){n=_(x,y,0)},this.setState=function(x,y,S){const w=x.clippingPlanes,A=x.clipIntersection,g=x.clipShadows,v=s.get(x);if(!a||w===null||w.length===0||c&&!g)c?_(null):m();else{const D=c?0:r,C=D*4;let L=v.clippingState||null;h.value=L,L=_(w,y,C,S);for(let G=0;G!==C;++G)L[G]=n[G];v.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,y,S,w){const A=x!==null?x.length:0;let g=null;if(A!==0){if(g=h.value,w!==!0||g===null){const v=S+A*4,D=y.matrixWorldInverse;d.getNormalMatrix(D),(g===null||g.length<v)&&(g=new Float32Array(v));for(let C=0,L=S;C!==A;++C,L+=4)u.copy(x[C]).applyMatrix4(D,d),u.normal.toArray(g,L),g[L+3]=u.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,g}}function hS(s){let e=new WeakMap;function n(u,d){return d===Lf?u.mapping=Ys:d===Df&&(u.mapping=$s),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Lf||d===Df)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new w1(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class j0 extends V0{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=4,Pm=[.125,.215,.35,.446,.526,.582],Yr=20,ff=new j0,bm=new vt;let df=null,hf=0,pf=0,mf=!1;const Xr=(1+Math.sqrt(5))/2,Hs=1/Xr,Lm=[new j(-Xr,Hs,0),new j(Xr,Hs,0),new j(-Hs,0,Xr),new j(Hs,0,Xr),new j(0,Xr,-Hs),new j(0,Xr,Hs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(df,hf,pf),this._renderer.xr.enabled=mf,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Zo,format:hi,colorSpace:Tr,depthBuffer:!1},a=Nm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pS(c)),this._blurMaterial=mS(c,e,n)}return a}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,ff)}_sceneToCubeUV(e,n,r,a){const d=new Bn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(bm),_.toneMapping=Mr,_.autoClear=!1;const S=new Yl({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),w=new Jn(new to,S);let A=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,A=!0):(S.color.copy(bm),A=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(d.up.set(0,h[v],0),d.lookAt(m[v],0,0)):D===1?(d.up.set(0,0,h[v]),d.lookAt(0,m[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,m[v]));const C=this._cubeSize;Cl(a,D*C,v>2?C:0,C,C),_.setRenderTarget(a),A&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ys||e.mapping===$s;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const h=this._cubeSize;Cl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,ff)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Lm[(a-c-1)%Lm.length];this._blur(e,c-1,c,u,d)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Jn(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Yr-1),A=c/w,g=isFinite(c)?1+Math.floor(_*A):Yr;g>Yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yr}`);const v=[];let D=0;for(let b=0;b<Yr;++b){const F=b/A,te=Math.exp(-F*F/2);v.push(te),b===0?D+=te:b<g&&(D+=2*te)}for(let b=0;b<v.length;b++)v[b]=v[b]/D;y.envMap.value=e.texture,y.samples.value=g,y.weights.value=v,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:C}=this;y.dTheta.value=w,y.mipInt.value=C-r;const L=this._sizeLods[a],G=3*L*(a>C-Gs?a-C+Gs:0),O=4*(this._cubeSize-L);Cl(n,G,O,3*L,2*L),h.setRenderTarget(n),h.render(x,ff)}}function pS(s){const e=[],n=[],r=[];let a=s;const c=s-Gs+1+Pm.length;for(let u=0;u<c;u++){const d=Math.pow(2,a);n.push(d);let h=1/d;u>s-Gs?h=Pm[u-s+Gs-1]:u===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,x=1+m,y=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,w=6,A=3,g=2,v=1,D=new Float32Array(A*w*S),C=new Float32Array(g*w*S),L=new Float32Array(v*w*S);for(let O=0;O<S;O++){const b=O%3*2/3-1,F=O>2?0:-1,te=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];D.set(te,A*w*O),C.set(y,g*w*O);const M=[O,O,O,O,O,O];L.set(M,v*w*O)}const G=new Vn;G.setAttribute("position",new Hn(D,A)),G.setAttribute("uv",new Hn(C,g)),G.setAttribute("faceIndex",new Hn(L,v)),e.push(G),a>Gs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Nm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=Jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function mS(s,e,n){const r=new Float32Array(Yr),a=new j(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Im(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Um(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===Lf||h===Df,_=h===Ys||h===$s;if(m||_){let x=e.get(d);const y=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new Dm(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new Dm(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function c(d){const h=d.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function _S(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Hl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function vS(s,e,n,r){const a={},c=new WeakMap;function u(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const A=y.morphAttributes[w];for(let g=0,v=A.length;g<v;g++)e.remove(A[g])}y.removeEventListener("dispose",u),delete a[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(x,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,n.memory.geometries++),y}function h(x){const y=x.attributes;for(const w in y)e.update(y[w],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const w in S){const A=S[w];for(let g=0,v=A.length;g<v;g++)e.update(A[g],s.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,w=x.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let C=0,L=D.length;C<L;C+=3){const G=D[C+0],O=D[C+1],b=D[C+2];y.push(G,O,O,b,b,G)}}else if(w!==void 0){const D=w.array;A=w.version;for(let C=0,L=D.length/3-1;C<L;C+=3){const G=C+0,O=C+1,b=C+2;y.push(G,O,O,b,b,G)}}else return;const g=new(I0(y)?B0:z0)(y,1);g.version=A;const v=c.get(x);v&&e.remove(v),c.set(x,g)}function _(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:h,getWireframeAttribute:_}}function xS(s,e,n){let r;function a(y){r=y}let c,u;function d(y){c=y.type,u=y.bytesPerElement}function h(y,S){s.drawElements(r,S,c,y*u),n.update(S,r,1)}function m(y,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,y*u,w),n.update(S,r,w))}function _(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,w);let g=0;for(let v=0;v<w;v++)g+=S[v];n.update(g,r,1)}function x(y,S,w,A){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<y.length;v++)m(y[v]/u,S[v],A[v]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,A,0,w);let v=0;for(let D=0;D<w;D++)v+=S[D];for(let D=0;D<A.length;D++)n.update(v,r,A[D])}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function yS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function SS(s,e,n){const r=new WeakMap,a=new Pt;function c(u,d,h){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==x){let M=function(){F.dispose(),r.delete(d),d.removeEventListener("dispose",M)};var S=M;y!==void 0&&y.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),A===!0&&(L=2),g===!0&&(L=3);let G=d.attributes.position.count*L,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const b=new Float32Array(G*O*4*x),F=new F0(b,G,O,x);F.type=Vi,F.needsUpdate=!0;const te=L*4;for(let R=0;R<x;R++){const ie=v[R],K=D[R],ce=C[R],de=G*O*4*R;for(let ne=0;ne<ie.count;ne++){const le=ne*te;w===!0&&(a.fromBufferAttribute(ie,ne),b[de+le+0]=a.x,b[de+le+1]=a.y,b[de+le+2]=a.z,b[de+le+3]=0),A===!0&&(a.fromBufferAttribute(K,ne),b[de+le+4]=a.x,b[de+le+5]=a.y,b[de+le+6]=a.z,b[de+le+7]=0),g===!0&&(a.fromBufferAttribute(ce,ne),b[de+le+8]=a.x,b[de+le+9]=a.y,b[de+le+10]=a.z,b[de+le+11]=ce.itemSize===4?a.w:1)}}y={count:x,texture:F,size:new xt(G,O)},r.set(d,y),d.addEventListener("dispose",M)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let g=0;g<m.length;g++)w+=m[g];const A=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function MS(s,e,n,r){let a=new WeakMap;function c(h){const m=r.render.frame,_=h.geometry,x=e.get(h,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function u(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class X0 extends Ln{constructor(e,n,r,a,c,u,d,h,m,_=js){if(_!==js&&_!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===js&&(r=Jr),r===void 0&&_===Zs&&(r=Ks),super(null,a,c,u,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Qn,this.minFilter=h!==void 0?h:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const q0=new Ln,Fm=new X0(1,1),Y0=new F0,$0=new l1,K0=new G0,Om=[],km=[],zm=new Float32Array(16),Bm=new Float32Array(9),Hm=new Float32Array(4);function no(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=Om[a];if(c===void 0&&(c=new Float32Array(a),Om[a]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function nc(s,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function ES(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function CS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),en(n,r)}}function RS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Bm.set(r),s.uniformMatrix3fv(this.addr,!1,Bm),en(n,r)}}function PS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;zm.set(r),s.uniformMatrix4fv(this.addr,!1,zm),en(n,r)}}function bS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function LS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function DS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function NS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function IS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function FS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function OS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function kS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Fm.compareFunction=N0,c=Fm):c=q0,n.setTexture2D(e||c,a)}function zS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$0,a)}function BS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||K0,a)}function HS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Y0,a)}function VS(s){switch(s){case 5126:return ES;case 35664:return wS;case 35665:return TS;case 35666:return AS;case 35674:return CS;case 35675:return RS;case 35676:return PS;case 5124:case 35670:return bS;case 35667:case 35671:return LS;case 35668:case 35672:return DS;case 35669:case 35673:return NS;case 5125:return IS;case 36294:return US;case 36295:return FS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return HS}}function GS(s,e){s.uniform1fv(this.addr,e)}function WS(s,e){const n=no(e,this.size,2);s.uniform2fv(this.addr,n)}function jS(s,e){const n=no(e,this.size,3);s.uniform3fv(this.addr,n)}function XS(s,e){const n=no(e,this.size,4);s.uniform4fv(this.addr,n)}function qS(s,e){const n=no(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function YS(s,e){const n=no(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function $S(s,e){const n=no(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function KS(s,e){s.uniform1iv(this.addr,e)}function ZS(s,e){s.uniform2iv(this.addr,e)}function QS(s,e){s.uniform3iv(this.addr,e)}function JS(s,e){s.uniform4iv(this.addr,e)}function e2(s,e){s.uniform1uiv(this.addr,e)}function t2(s,e){s.uniform2uiv(this.addr,e)}function n2(s,e){s.uniform3uiv(this.addr,e)}function i2(s,e){s.uniform4uiv(this.addr,e)}function r2(s,e,n){const r=this.cache,a=e.length,c=nc(n,a);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||q0,c[u])}function s2(s,e,n){const r=this.cache,a=e.length,c=nc(n,a);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||$0,c[u])}function o2(s,e,n){const r=this.cache,a=e.length,c=nc(n,a);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||K0,c[u])}function a2(s,e,n){const r=this.cache,a=e.length,c=nc(n,a);Jt(r,c)||(s.uniform1iv(this.addr,c),en(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Y0,c[u])}function l2(s){switch(s){case 5126:return GS;case 35664:return WS;case 35665:return jS;case 35666:return XS;case 35674:return qS;case 35675:return YS;case 35676:return $S;case 5124:case 35670:return KS;case 35667:case 35671:return ZS;case 35668:case 35672:return QS;case 35669:case 35673:return JS;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return a2}}class c2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=VS(n.type)}}class u2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=l2(n.type)}}class f2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function d2(s,e,n){const r=s.name,a=r.length;for(gf.lastIndex=0;;){const c=gf.exec(r),u=gf.lastIndex;let d=c[1];const h=c[2]==="]",m=c[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===a){Vm(n,m===void 0?new c2(d,s,e):new u2(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new f2(d),Vm(n,x)),n=x}}}class Vl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);d2(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const d=n[c],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Gm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const h2=37297;let p2=0;function m2(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}function g2(s){const e=Tt.getPrimaries(Tt.workingColorSpace),n=Tt.getPrimaries(s);let r;switch(e===n?r="":e===jl&&n===Wl?r="LinearDisplayP3ToLinearSRGB":e===Wl&&n===jl&&(r="LinearSRGBToLinearDisplayP3"),s){case Tr:case ec:return[r,"LinearTransferOETF"];case xi:case vd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Wm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+m2(s.getShaderSource(e),u)}else return a}function _2(s,e){const n=g2(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function v2(s,e){let n;switch(e){case Iv:n="Linear";break;case Uv:n="Reinhard";break;case Fv:n="Cineon";break;case Ov:n="ACESFilmic";break;case zv:n="AgX";break;case Bv:n="Neutral";break;case kv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new j;function x2(){Tt.getLuminanceCoefficients(Rl);const s=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function S2(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function M2(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function qo(s){return s!==""}function jm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(s){return s.replace(E2,T2)}const w2=new Map;function T2(s,e){let n=ut[e];if(n===void 0){const r=w2.get(e);if(r!==void 0)n=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ld(n)}const A2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(A2,C2)}function C2(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Ym(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===x0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function P2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function L2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case y0:e="ENVMAP_BLENDING_MULTIPLY";break;case Dv:e="ENVMAP_BLENDING_MIX";break;case Nv:e="ENVMAP_BLENDING_ADD";break}return e}function D2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function N2(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=R2(n),m=P2(n),_=b2(n),x=L2(n),y=D2(n),S=y2(n),w=S2(c),A=a.createProgram();let g,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(qo).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(qo).join(`
`),v.length>0&&(v+=`
`)):(g=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),v=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?ut.tonemapping_pars_fragment:"",n.toneMapping!==Mr?v2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,_2("linearToOutputTexel",n.outputColorSpace),x2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),u=ld(u),u=jm(u,n),u=Xm(u,n),d=ld(d),d=jm(d,n),d=Xm(d,n),u=qm(u),d=qm(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=D+g+u,L=D+v+d,G=Gm(a,a.VERTEX_SHADER,C),O=Gm(a,a.FRAGMENT_SHADER,L);a.attachShader(A,G),a.attachShader(A,O),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function b(R){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(A).trim(),K=a.getShaderInfoLog(G).trim(),ce=a.getShaderInfoLog(O).trim();let de=!0,ne=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,G,O);else{const le=Wm(a,G,"vertex"),B=Wm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+ie+`
`+le+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(K===""||ce==="")&&(ne=!1);ne&&(R.diagnostics={runnable:de,programLog:ie,vertexShader:{log:K,prefix:g},fragmentShader:{log:ce,prefix:v}})}a.deleteShader(G),a.deleteShader(O),F=new Vl(a,A),te=M2(a,A)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let te;this.getAttributes=function(){return te===void 0&&b(this),te};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(A,h2)),M},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=p2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=O,this}let I2=0;class U2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new F2(e),n.set(e,r)),r}}class F2{constructor(e){this.id=I2++,this.code=e,this.usedTimes=0}}function O2(s,e,n,r,a,c,u){const d=new O0,h=new U2,m=new Set,_=[],x=a.logarithmicDepthBuffer,y=a.reverseDepthBuffer,S=a.vertexTextures;let w=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return m.add(M),M===0?"uv":`uv${M}`}function v(M,R,ie,K,ce){const de=K.fog,ne=ce.geometry,le=M.isMeshStandardMaterial?K.environment:null,B=(M.isMeshStandardMaterial?n:e).get(M.envMap||le),fe=B&&B.mapping===Jl?B.image.height:null,se=A[M.type];M.precision!==null&&(w=a.getMaxPrecision(M.precision),w!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",w,"instead."));const U=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,oe=U!==void 0?U.length:0;let ke=0;ne.morphAttributes.position!==void 0&&(ke=1),ne.morphAttributes.normal!==void 0&&(ke=2),ne.morphAttributes.color!==void 0&&(ke=3);let Z,ue,Se,Me;if(se){const qt=yi[se];Z=qt.vertexShader,ue=qt.fragmentShader}else Z=M.vertexShader,ue=M.fragmentShader,h.update(M),Se=h.getVertexShaderID(M),Me=h.getFragmentShaderID(M);const Ne=s.getRenderTarget(),De=ce.isInstancedMesh===!0,it=ce.isBatchedMesh===!0,gt=!!M.map,dt=!!M.matcap,z=!!B,Gt=!!M.aoMap,at=!!M.lightMap,lt=!!M.bumpMap,Qe=!!M.normalMap,_t=!!M.displacementMap,Je=!!M.emissiveMap,N=!!M.metalnessMap,T=!!M.roughnessMap,Y=M.anisotropy>0,pe=M.clearcoat>0,_e=M.dispersion>0,me=M.iridescence>0,We=M.sheen>0,Pe=M.transmission>0,Ie=Y&&!!M.anisotropyMap,pt=pe&&!!M.clearcoatMap,ye=pe&&!!M.clearcoatNormalMap,Fe=pe&&!!M.clearcoatRoughnessMap,xe=me&&!!M.iridescenceMap,Xe=me&&!!M.iridescenceThicknessMap,we=We&&!!M.sheenColorMap,je=We&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,st=!!M.specularColorMap,V=!!M.specularIntensityMap,Le=Pe&&!!M.transmissionMap,re=Pe&&!!M.thicknessMap,he=!!M.gradientMap,be=!!M.alphaMap,Oe=M.alphaTest>0,ct=!!M.alphaHash,Ct=!!M.extensions;let Xt=Mr;M.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const mt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:ue,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:w,batching:it,batchingColor:it&&ce._colorsTexture!==null,instancing:De,instancingColor:De&&ce.instanceColor!==null,instancingMorph:De&&ce.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Tr,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:dt,envMap:z,envMapMode:z&&B.mapping,envMapCubeUVHeight:fe,aoMap:Gt,lightMap:at,bumpMap:lt,normalMap:Qe,displacementMap:S&&_t,emissiveMap:Je,normalMapObjectSpace:Qe&&M.normalMapType===Wv,normalMapTangentSpace:Qe&&M.normalMapType===D0,metalnessMap:N,roughnessMap:T,anisotropy:Y,anisotropyMap:Ie,clearcoat:pe,clearcoatMap:pt,clearcoatNormalMap:ye,clearcoatRoughnessMap:Fe,dispersion:_e,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Xe,sheen:We,sheenColorMap:we,sheenRoughnessMap:je,specularMap:Ae,specularColorMap:st,specularIntensityMap:V,transmission:Pe,transmissionMap:Le,thicknessMap:re,gradientMap:he,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:be,alphaTest:Oe,alphaHash:ct,combine:M.combine,mapUv:gt&&g(M.map.channel),aoMapUv:Gt&&g(M.aoMap.channel),lightMapUv:at&&g(M.lightMap.channel),bumpMapUv:lt&&g(M.bumpMap.channel),normalMapUv:Qe&&g(M.normalMap.channel),displacementMapUv:_t&&g(M.displacementMap.channel),emissiveMapUv:Je&&g(M.emissiveMap.channel),metalnessMapUv:N&&g(M.metalnessMap.channel),roughnessMapUv:T&&g(M.roughnessMap.channel),anisotropyMapUv:Ie&&g(M.anisotropyMap.channel),clearcoatMapUv:pt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(M.sheenRoughnessMap.channel),specularMapUv:Ae&&g(M.specularMap.channel),specularColorMapUv:st&&g(M.specularColorMap.channel),specularIntensityMapUv:V&&g(M.specularIntensityMap.channel),transmissionMapUv:Le&&g(M.transmissionMap.channel),thicknessMapUv:re&&g(M.thicknessMap.channel),alphaMapUv:be&&g(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Qe||Y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!ne.attributes.uv&&(gt||be),fog:!!de,useFog:M.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:y,skinning:ce.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&ie.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&Tt.getTransfer(M.map.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hi,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ct&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&M.extensions.multiDraw===!0||it)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=m.has(1),mt.vertexUv2s=m.has(2),mt.vertexUv3s=m.has(3),m.clear(),mt}function D(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ie in M.defines)R.push(ie),R.push(M.defines[ie]);return M.isRawShaderMaterial===!1&&(C(R,M),L(R,M),R.push(s.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function C(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function L(M,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),M.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.alphaToCoverage&&d.enable(20),M.push(d.mask)}function G(M){const R=A[M.type];let ie;if(R){const K=yi[R];ie=y1.clone(K.uniforms)}else ie=M.uniforms;return ie}function O(M,R){let ie;for(let K=0,ce=_.length;K<ce;K++){const de=_[K];if(de.cacheKey===R){ie=de,++ie.usedTimes;break}}return ie===void 0&&(ie=new N2(s,R,M,c),_.push(ie)),ie}function b(M){if(--M.usedTimes===0){const R=_.indexOf(M);_[R]=_[_.length-1],_.pop(),M.destroy()}}function F(M){h.remove(M)}function te(){h.dispose()}return{getParameters:v,getProgramCacheKey:D,getUniforms:G,acquireProgram:O,releaseProgram:b,releaseShaderCache:F,programs:_,dispose:te}}function k2(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,h){s.get(u)[d]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function z2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Km(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(x,y,S,w,A,g){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:S,groupOrder:w,renderOrder:x.renderOrder,z:A,group:g},s[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=S,v.groupOrder=w,v.renderOrder=x.renderOrder,v.z=A,v.group=g),e++,v}function d(x,y,S,w,A,g){const v=u(x,y,S,w,A,g);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function h(x,y,S,w,A,g){const v=u(x,y,S,w,A,g);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(x,y){n.length>1&&n.sort(x||z2),r.length>1&&r.sort(y||$m),a.length>1&&a.sort(y||$m)}function _(){for(let x=e,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:h,finish:_,sort:m}}function B2(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new Km,s.set(r,[u])):a>=c.length?(u=new Km,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function H2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new vt};break;case"SpotLight":n={position:new j,direction:new j,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=n,n}}}function V2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let G2=0;function W2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j2(s){const e=new H2,n=V2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new j);const a=new j,c=new Ft,u=new Ft;function d(m){let _=0,x=0,y=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let S=0,w=0,A=0,g=0,v=0,D=0,C=0,L=0,G=0,O=0,b=0;m.sort(W2);for(let te=0,M=m.length;te<M;te++){const R=m[te],ie=R.color,K=R.intensity,ce=R.distance,de=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)_+=ie.r*K,x+=ie.g*K,y+=ie.b*K;else if(R.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(R.sh.coefficients[ne],K);b++}else if(R.isDirectionalLight){const ne=e.get(R);if(ne.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const le=R.shadow,B=n.get(R);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=R.shadow.matrix,D++}r.directional[S]=ne,S++}else if(R.isSpotLight){const ne=e.get(R);ne.position.setFromMatrixPosition(R.matrixWorld),ne.color.copy(ie).multiplyScalar(K),ne.distance=ce,ne.coneCos=Math.cos(R.angle),ne.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ne.decay=R.decay,r.spot[A]=ne;const le=R.shadow;if(R.map&&(r.spotLightMap[G]=R.map,G++,le.updateMatrices(R),R.castShadow&&O++),r.spotLightMatrix[A]=le.matrix,R.castShadow){const B=n.get(R);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[A]=B,r.spotShadowMap[A]=de,L++}A++}else if(R.isRectAreaLight){const ne=e.get(R);ne.color.copy(ie).multiplyScalar(K),ne.halfWidth.set(R.width*.5,0,0),ne.halfHeight.set(0,R.height*.5,0),r.rectArea[g]=ne,g++}else if(R.isPointLight){const ne=e.get(R);if(ne.color.copy(R.color).multiplyScalar(R.intensity),ne.distance=R.distance,ne.decay=R.decay,R.castShadow){const le=R.shadow,B=n.get(R);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=de,r.pointShadowMatrix[w]=R.shadow.matrix,C++}r.point[w]=ne,w++}else if(R.isHemisphereLight){const ne=e.get(R);ne.skyColor.copy(R.color).multiplyScalar(K),ne.groundColor.copy(R.groundColor).multiplyScalar(K),r.hemi[v]=ne,v++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const F=r.hash;(F.directionalLength!==S||F.pointLength!==w||F.spotLength!==A||F.rectAreaLength!==g||F.hemiLength!==v||F.numDirectionalShadows!==D||F.numPointShadows!==C||F.numSpotShadows!==L||F.numSpotMaps!==G||F.numLightProbes!==b)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=g,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=L+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=b,F.directionalLength=S,F.pointLength=w,F.spotLength=A,F.rectAreaLength=g,F.hemiLength=v,F.numDirectionalShadows=D,F.numPointShadows=C,F.numSpotShadows=L,F.numSpotMaps=G,F.numLightProbes=b,r.version=G2++)}function h(m,_){let x=0,y=0,S=0,w=0,A=0;const g=_.matrixWorldInverse;for(let v=0,D=m.length;v<D;v++){const C=m[v];if(C.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(g),x++}else if(C.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(g),S++}else if(C.isRectAreaLight){const L=r.rectArea[w];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(g),u.identity(),c.copy(C.matrixWorld),c.premultiply(g),u.extractRotation(c),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(C.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(g),y++}else if(C.isHemisphereLight){const L=r.hemi[A];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(g),A++}}}return{setup:d,setupView:h,state:r}}function Zm(s){const e=new j2(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function X2(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let d;return u===void 0?(d=new Zm(s),e.set(a,[d])):c>=u.length?(d=new Zm(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class q2 extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y2 extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z2(s,e,n){let r=new yd;const a=new xt,c=new xt,u=new Pt,d=new q2({depthPacking:Gv}),h=new Y2,m={},_=n.maxTextureSize,x={[Er]:bn,[bn]:Er,[Hi]:Hi},y=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:$2,fragmentShader:K2}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Vn;w.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Jn(w,y),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x0;let v=this.type;this.render=function(O,b,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||O.length===0)return;const te=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Sr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const K=v!==Bi&&this.type===Bi,ce=v===Bi&&this.type!==Bi;for(let de=0,ne=O.length;de<ne;de++){const le=O[de],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const fe=B.getFrameExtents();if(a.multiply(fe),c.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/fe.x),a.x=c.x*fe.x,B.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/fe.y),a.y=c.y*fe.y,B.mapSize.y=c.y)),B.map===null||K===!0||ce===!0){const U=this.type!==Bi?{minFilter:Qn,magFilter:Qn}:{};B.map!==null&&B.map.dispose(),B.map=new es(a.x,a.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const se=B.getViewportCount();for(let U=0;U<se;U++){const oe=B.getViewport(U);u.set(c.x*oe.x,c.y*oe.y,c.x*oe.z,c.y*oe.w),ie.viewport(u),B.updateMatrices(le,U),r=B.getFrustum(),L(b,F,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Bi&&D(B,F),B.needsUpdate=!1}v=this.type,g.needsUpdate=!1,s.setRenderTarget(te,M,R)};function D(O,b){const F=e.update(A);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new es(a.x,a.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(b,null,F,y,A,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(b,null,F,S,A,null)}function C(O,b,F,te){let M=null;const R=F.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(R!==void 0)M=R;else if(M=F.isPointLight===!0?h:d,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const ie=M.uuid,K=b.uuid;let ce=m[ie];ce===void 0&&(ce={},m[ie]=ce);let de=ce[K];de===void 0&&(de=M.clone(),ce[K]=de,b.addEventListener("dispose",G)),M=de}if(M.visible=b.visible,M.wireframe=b.wireframe,te===Bi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:x[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ie=s.properties.get(M);ie.light=F}return M}function L(O,b,F,te,M){if(O.visible===!1)return;if(O.layers.test(b.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&M===Bi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,O.matrixWorld);const K=e.update(O),ce=O.material;if(Array.isArray(ce)){const de=K.groups;for(let ne=0,le=de.length;ne<le;ne++){const B=de[ne],fe=ce[B.materialIndex];if(fe&&fe.visible){const se=C(O,fe,te,M);O.onBeforeShadow(s,O,b,F,K,se,B),s.renderBufferDirect(F,null,K,se,O,B),O.onAfterShadow(s,O,b,F,K,se,B)}}}else if(ce.visible){const de=C(O,ce,te,M);O.onBeforeShadow(s,O,b,F,K,de,null),s.renderBufferDirect(F,null,K,de,O,null),O.onAfterShadow(s,O,b,F,K,de,null)}}const ie=O.children;for(let K=0,ce=ie.length;K<ce;K++)L(ie[K],b,F,te,M)}function G(O){O.target.removeEventListener("dispose",G);for(const F in m){const te=m[F],M=O.target.uuid;M in te&&(te[M].dispose(),delete te[M])}}}const Q2={[wf]:Tf,[Af]:Pf,[Cf]:bf,[qs]:Rf,[Tf]:wf,[Pf]:Af,[bf]:Cf,[Rf]:qs};function J2(s){function e(){let V=!1;const Le=new Pt;let re=null;const he=new Pt(0,0,0,0);return{setMask:function(be){re!==be&&!V&&(s.colorMask(be,be,be,be),re=be)},setLocked:function(be){V=be},setClear:function(be,Oe,ct,Ct,Xt){Xt===!0&&(be*=Ct,Oe*=Ct,ct*=Ct),Le.set(be,Oe,ct,Ct),he.equals(Le)===!1&&(s.clearColor(be,Oe,ct,Ct),he.copy(Le))},reset:function(){V=!1,re=null,he.set(-1,0,0,0)}}}function n(){let V=!1,Le=!1,re=null,he=null,be=null;return{setReversed:function(Oe){Le=Oe},setTest:function(Oe){Oe?Se(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Oe){re!==Oe&&!V&&(s.depthMask(Oe),re=Oe)},setFunc:function(Oe){if(Le&&(Oe=Q2[Oe]),he!==Oe){switch(Oe){case wf:s.depthFunc(s.NEVER);break;case Tf:s.depthFunc(s.ALWAYS);break;case Af:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case Cf:s.depthFunc(s.EQUAL);break;case Rf:s.depthFunc(s.GEQUAL);break;case Pf:s.depthFunc(s.GREATER);break;case bf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Oe}},setLocked:function(Oe){V=Oe},setClear:function(Oe){be!==Oe&&(s.clearDepth(Oe),be=Oe)},reset:function(){V=!1,re=null,he=null,be=null}}}function r(){let V=!1,Le=null,re=null,he=null,be=null,Oe=null,ct=null,Ct=null,Xt=null;return{setTest:function(mt){V||(mt?Se(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(mt){Le!==mt&&!V&&(s.stencilMask(mt),Le=mt)},setFunc:function(mt,qt,Gn){(re!==mt||he!==qt||be!==Gn)&&(s.stencilFunc(mt,qt,Gn),re=mt,he=qt,be=Gn)},setOp:function(mt,qt,Gn){(Oe!==mt||ct!==qt||Ct!==Gn)&&(s.stencilOp(mt,qt,Gn),Oe=mt,ct=qt,Ct=Gn)},setLocked:function(mt){V=mt},setClear:function(mt){Xt!==mt&&(s.clearStencil(mt),Xt=mt)},reset:function(){V=!1,Le=null,re=null,he=null,be=null,Oe=null,ct=null,Ct=null,Xt=null}}}const a=new e,c=new n,u=new r,d=new WeakMap,h=new WeakMap;let m={},_={},x=new WeakMap,y=[],S=null,w=!1,A=null,g=null,v=null,D=null,C=null,L=null,G=null,O=new vt(0,0,0),b=0,F=!1,te=null,M=null,R=null,ie=null,K=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,ne=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(le)[1]),de=ne>=1):le.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),de=ne>=2);let B=null,fe={};const se=s.getParameter(s.SCISSOR_BOX),U=s.getParameter(s.VIEWPORT),oe=new Pt().fromArray(se),ke=new Pt().fromArray(U);function Z(V,Le,re,he){const be=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(V,Oe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<re;ct++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Le+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Oe}const ue={};ue[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Se(s.DEPTH_TEST),c.setFunc(qs),at(!1),lt(sm),Se(s.CULL_FACE),z(Sr);function Se(V){m[V]!==!0&&(s.enable(V),m[V]=!0)}function Me(V){m[V]!==!1&&(s.disable(V),m[V]=!1)}function Ne(V,Le){return _[V]!==Le?(s.bindFramebuffer(V,Le),_[V]=Le,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function De(V,Le){let re=y,he=!1;if(V){re=x.get(Le),re===void 0&&(re=[],x.set(Le,re));const be=V.textures;if(re.length!==be.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,ct=be.length;Oe<ct;Oe++)re[Oe]=s.COLOR_ATTACHMENT0+Oe;re.length=be.length,he=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,he=!0);he&&s.drawBuffers(re)}function it(V){return S!==V?(s.useProgram(V),S=V,!0):!1}const gt={[qr]:s.FUNC_ADD,[mv]:s.FUNC_SUBTRACT,[gv]:s.FUNC_REVERSE_SUBTRACT};gt[_v]=s.MIN,gt[vv]=s.MAX;const dt={[xv]:s.ZERO,[yv]:s.ONE,[Sv]:s.SRC_COLOR,[Mf]:s.SRC_ALPHA,[Cv]:s.SRC_ALPHA_SATURATE,[Tv]:s.DST_COLOR,[Ev]:s.DST_ALPHA,[Mv]:s.ONE_MINUS_SRC_COLOR,[Ef]:s.ONE_MINUS_SRC_ALPHA,[Av]:s.ONE_MINUS_DST_COLOR,[wv]:s.ONE_MINUS_DST_ALPHA,[Rv]:s.CONSTANT_COLOR,[Pv]:s.ONE_MINUS_CONSTANT_COLOR,[bv]:s.CONSTANT_ALPHA,[Lv]:s.ONE_MINUS_CONSTANT_ALPHA};function z(V,Le,re,he,be,Oe,ct,Ct,Xt,mt){if(V===Sr){w===!0&&(Me(s.BLEND),w=!1);return}if(w===!1&&(Se(s.BLEND),w=!0),V!==pv){if(V!==A||mt!==F){if((g!==qr||C!==qr)&&(s.blendEquation(s.FUNC_ADD),g=qr,C=qr),mt)switch(V){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.ONE,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,D=null,L=null,G=null,O.set(0,0,0),b=0,A=V,F=mt}return}be=be||Le,Oe=Oe||re,ct=ct||he,(Le!==g||be!==C)&&(s.blendEquationSeparate(gt[Le],gt[be]),g=Le,C=be),(re!==v||he!==D||Oe!==L||ct!==G)&&(s.blendFuncSeparate(dt[re],dt[he],dt[Oe],dt[ct]),v=re,D=he,L=Oe,G=ct),(Ct.equals(O)===!1||Xt!==b)&&(s.blendColor(Ct.r,Ct.g,Ct.b,Xt),O.copy(Ct),b=Xt),A=V,F=!1}function Gt(V,Le){V.side===Hi?Me(s.CULL_FACE):Se(s.CULL_FACE);let re=V.side===bn;Le&&(re=!re),at(re),V.blending===Ws&&V.transparent===!1?z(Sr):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const he=V.stencilWrite;u.setTest(he),he&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),_t(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(V){te!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),te=V)}function lt(V){V!==fv?(Se(s.CULL_FACE),V!==M&&(V===sm?s.cullFace(s.BACK):V===dv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),M=V}function Qe(V){V!==R&&(de&&s.lineWidth(V),R=V)}function _t(V,Le,re){V?(Se(s.POLYGON_OFFSET_FILL),(ie!==Le||K!==re)&&(s.polygonOffset(Le,re),ie=Le,K=re)):Me(s.POLYGON_OFFSET_FILL)}function Je(V){V?Se(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function N(V){V===void 0&&(V=s.TEXTURE0+ce-1),B!==V&&(s.activeTexture(V),B=V)}function T(V,Le,re){re===void 0&&(B===null?re=s.TEXTURE0+ce-1:re=B);let he=fe[re];he===void 0&&(he={type:void 0,texture:void 0},fe[re]=he),(he.type!==V||he.texture!==Le)&&(B!==re&&(s.activeTexture(re),B=re),s.bindTexture(V,Le||ue[V]),he.type=V,he.texture=Le)}function Y(){const V=fe[B];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(V){oe.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),oe.copy(V))}function we(V){ke.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ke.copy(V))}function je(V,Le){let re=h.get(Le);re===void 0&&(re=new WeakMap,h.set(Le,re));let he=re.get(V);he===void 0&&(he=s.getUniformBlockIndex(Le,V.name),re.set(V,he))}function Ae(V,Le){const he=h.get(Le).get(V);d.get(Le)!==he&&(s.uniformBlockBinding(Le,he,V.__bindingPointIndex),d.set(Le,he))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},B=null,fe={},_={},x=new WeakMap,y=[],S=null,w=!1,A=null,g=null,v=null,D=null,C=null,L=null,G=null,O=new vt(0,0,0),b=0,F=!1,te=null,M=null,R=null,ie=null,K=null,oe.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Se,disable:Me,bindFramebuffer:Ne,drawBuffers:De,useProgram:it,setBlending:z,setMaterial:Gt,setFlipSided:at,setCullFace:lt,setLineWidth:Qe,setPolygonOffset:_t,setScissorTest:Je,activeTexture:N,bindTexture:T,unbindTexture:Y,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:xe,updateUBOMapping:je,uniformBlockBinding:Ae,texStorage2D:pt,texStorage3D:ye,texSubImage2D:me,texSubImage3D:We,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ie,scissor:Xe,viewport:we,reset:st}}function Qm(s,e,n,r){const a=eM(r);switch(n){case T0:return s*e;case C0:return s*e;case R0:return s*e*2;case P0:return s*e/a.components*a.byteLength;case md:return s*e/a.components*a.byteLength;case b0:return s*e*2/a.components*a.byteLength;case gd:return s*e*2/a.components*a.byteLength;case A0:return s*e*3/a.components*a.byteLength;case hi:return s*e*4/a.components*a.byteLength;case _d:return s*e*4/a.components*a.byteLength;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:case kf:return Math.max(s,16)*Math.max(e,8)/4;case Uf:case Of:return Math.max(s,8)*Math.max(e,8)/2;case zf:case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case nd:case id:return Math.ceil(s/4)*Math.ceil(e/4)*16;case L0:case rd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sd:case od:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eM(s){switch(s){case Wi:case M0:return{byteLength:1,components:1};case Ko:case E0:case Zo:return{byteLength:2,components:1};case hd:case pd:return{byteLength:2,components:4};case Jr:case dd:case Vi:return{byteLength:4,components:1};case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function tM(s,e,n,r,a,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xt,_=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,T){return S?new OffscreenCanvas(N,T):ql("canvas")}function A(N,T,Y){let pe=1;const _e=Je(N);if((_e.width>Y||_e.height>Y)&&(pe=Y/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const me=Math.floor(pe*_e.width),We=Math.floor(pe*_e.height);x===void 0&&(x=w(me,We));const Pe=T?w(me,We):x;return Pe.width=me,Pe.height=We,Pe.getContext("2d").drawImage(N,0,0,me,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+me+"x"+We+")."),Pe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==Qn&&N.minFilter!==fi}function v(N){s.generateMipmap(N)}function D(N,T,Y,pe,_e=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=T;if(T===s.RED&&(Y===s.FLOAT&&(me=s.R32F),Y===s.HALF_FLOAT&&(me=s.R16F),Y===s.UNSIGNED_BYTE&&(me=s.R8)),T===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.R8UI),Y===s.UNSIGNED_SHORT&&(me=s.R16UI),Y===s.UNSIGNED_INT&&(me=s.R32UI),Y===s.BYTE&&(me=s.R8I),Y===s.SHORT&&(me=s.R16I),Y===s.INT&&(me=s.R32I)),T===s.RG&&(Y===s.FLOAT&&(me=s.RG32F),Y===s.HALF_FLOAT&&(me=s.RG16F),Y===s.UNSIGNED_BYTE&&(me=s.RG8)),T===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.RG8UI),Y===s.UNSIGNED_SHORT&&(me=s.RG16UI),Y===s.UNSIGNED_INT&&(me=s.RG32UI),Y===s.BYTE&&(me=s.RG8I),Y===s.SHORT&&(me=s.RG16I),Y===s.INT&&(me=s.RG32I)),T===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(me=s.RGB16UI),Y===s.UNSIGNED_INT&&(me=s.RGB32UI),Y===s.BYTE&&(me=s.RGB8I),Y===s.SHORT&&(me=s.RGB16I),Y===s.INT&&(me=s.RGB32I)),T===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),Y===s.UNSIGNED_INT&&(me=s.RGBA32UI),Y===s.BYTE&&(me=s.RGBA8I),Y===s.SHORT&&(me=s.RGBA16I),Y===s.INT&&(me=s.RGBA32I)),T===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),T===s.RGBA){const We=_e?Gl:Tt.getTransfer(pe);Y===s.FLOAT&&(me=s.RGBA32F),Y===s.HALF_FLOAT&&(me=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(me=We===Ut?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function C(N,T){let Y;return N?T===null||T===Jr||T===Ks?Y=s.DEPTH24_STENCIL8:T===Vi?Y=s.DEPTH32F_STENCIL8:T===Ko&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Jr||T===Ks?Y=s.DEPTH_COMPONENT24:T===Vi?Y=s.DEPTH_COMPONENT32F:T===Ko&&(Y=s.DEPTH_COMPONENT16),Y}function L(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Qn&&N.minFilter!==fi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function G(N){const T=N.target;T.removeEventListener("dispose",G),b(T),T.isVideoTexture&&_.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),te(T)}function b(N){const T=r.get(N);if(T.__webglInit===void 0)return;const Y=N.source,pe=y.get(Y);if(pe){const _e=pe[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&F(N),Object.keys(pe).length===0&&y.delete(Y)}r.remove(N)}function F(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const Y=N.source,pe=y.get(Y);delete pe[T.__cacheKey],u.memory.textures--}function te(N){const T=r.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let _e=0;_e<T.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=N.textures;for(let pe=0,_e=Y.length;pe<_e;pe++){const me=r.get(Y[pe]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),u.memory.textures--),r.remove(Y[pe])}r.remove(N)}let M=0;function R(){M=0}function ie(){const N=M;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),M+=1,N}function K(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ce(N,T){const Y=r.get(N);if(N.isVideoTexture&&Qe(N),N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){const pe=N.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,N,T);return}}n.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+T)}function de(N,T){const Y=r.get(N);if(N.version>0&&Y.__version!==N.version){ke(Y,N,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+T)}function ne(N,T){const Y=r.get(N);if(N.version>0&&Y.__version!==N.version){ke(Y,N,T);return}n.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+T)}function le(N,T){const Y=r.get(N);if(N.version>0&&Y.__version!==N.version){Z(Y,N,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+T)}const B={[Nf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[If]:s.MIRRORED_REPEAT},fe={[Qn]:s.NEAREST,[Hv]:s.NEAREST_MIPMAP_NEAREST,[ll]:s.NEAREST_MIPMAP_LINEAR,[fi]:s.LINEAR,[Bu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},se={[jv]:s.NEVER,[Zv]:s.ALWAYS,[Xv]:s.LESS,[N0]:s.LEQUAL,[qv]:s.EQUAL,[Kv]:s.GEQUAL,[Yv]:s.GREATER,[$v]:s.NOTEQUAL};function U(N,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===fi||T.magFilter===Bu||T.magFilter===ll||T.magFilter===Kr||T.minFilter===fi||T.minFilter===Bu||T.minFilter===ll||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,B[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,B[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,B[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,fe[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qn||T.minFilter!==ll&&T.minFilter!==Kr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function oe(N,T){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",G));const pe=T.source;let _e=y.get(pe);_e===void 0&&(_e={},y.set(pe,_e));const me=K(T);if(me!==N.__cacheKey){_e[me]===void 0&&(_e[me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),_e[me].usedTimes++;const We=_e[N.__cacheKey];We!==void 0&&(_e[N.__cacheKey].usedTimes--,We.usedTimes===0&&F(T)),N.__cacheKey=me,N.__webglTexture=_e[me].texture}return Y}function ke(N,T,Y){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=oe(N,T),me=T.source;n.bindTexture(pe,N.__webglTexture,s.TEXTURE0+Y);const We=r.get(me);if(me.version!==We.__version||_e===!0){n.activeTexture(s.TEXTURE0+Y);const Pe=Tt.getPrimaries(Tt.workingColorSpace),Ie=T.colorSpace===yr?null:Tt.getPrimaries(T.colorSpace),pt=T.colorSpace===yr||Pe===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let ye=A(T.image,!1,a.maxTextureSize);ye=_t(T,ye);const Fe=c.convert(T.format,T.colorSpace),xe=c.convert(T.type);let Xe=D(T.internalFormat,Fe,xe,T.colorSpace,T.isVideoTexture);U(pe,T);let we;const je=T.mipmaps,Ae=T.isVideoTexture!==!0,st=We.__version===void 0||_e===!0,V=me.dataReady,Le=L(T,ye);if(T.isDepthTexture)Xe=C(T.format===Zs,T.type),st&&(Ae?n.texStorage2D(s.TEXTURE_2D,1,Xe,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Xe,ye.width,ye.height,0,Fe,xe,null));else if(T.isDataTexture)if(je.length>0){Ae&&st&&n.texStorage2D(s.TEXTURE_2D,Le,Xe,je[0].width,je[0].height);for(let re=0,he=je.length;re<he;re++)we=je[re],Ae?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,we.width,we.height,Fe,xe,we.data):n.texImage2D(s.TEXTURE_2D,re,Xe,we.width,we.height,0,Fe,xe,we.data);T.generateMipmaps=!1}else Ae?(st&&n.texStorage2D(s.TEXTURE_2D,Le,Xe,ye.width,ye.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,xe,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Xe,ye.width,ye.height,0,Fe,xe,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ae&&st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,je[0].width,je[0].height,ye.depth);for(let re=0,he=je.length;re<he;re++)if(we=je[re],T.format!==hi)if(Fe!==null)if(Ae){if(V)if(T.layerUpdates.size>0){const be=Qm(we.width,we.height,T.format,T.type);for(const Oe of T.layerUpdates){const ct=we.data.subarray(Oe*be/we.data.BYTES_PER_ELEMENT,(Oe+1)*be/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Oe,we.width,we.height,1,Fe,ct,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,ye.depth,Fe,we.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Xe,we.width,we.height,ye.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,ye.depth,Fe,xe,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,Xe,we.width,we.height,ye.depth,0,Fe,xe,we.data)}else{Ae&&st&&n.texStorage2D(s.TEXTURE_2D,Le,Xe,je[0].width,je[0].height);for(let re=0,he=je.length;re<he;re++)we=je[re],T.format!==hi?Fe!==null?Ae?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,we.width,we.height,Fe,we.data):n.compressedTexImage2D(s.TEXTURE_2D,re,Xe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,we.width,we.height,Fe,xe,we.data):n.texImage2D(s.TEXTURE_2D,re,Xe,we.width,we.height,0,Fe,xe,we.data)}else if(T.isDataArrayTexture)if(Ae){if(st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Xe,ye.width,ye.height,ye.depth),V)if(T.layerUpdates.size>0){const re=Qm(ye.width,ye.height,T.format,T.type);for(const he of T.layerUpdates){const be=ye.data.subarray(he*re/ye.data.BYTES_PER_ELEMENT,(he+1)*re/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Fe,xe,be)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,xe,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,ye.width,ye.height,ye.depth,0,Fe,xe,ye.data);else if(T.isData3DTexture)Ae?(st&&n.texStorage3D(s.TEXTURE_3D,Le,Xe,ye.width,ye.height,ye.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,xe,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Xe,ye.width,ye.height,ye.depth,0,Fe,xe,ye.data);else if(T.isFramebufferTexture){if(st)if(Ae)n.texStorage2D(s.TEXTURE_2D,Le,Xe,ye.width,ye.height);else{let re=ye.width,he=ye.height;for(let be=0;be<Le;be++)n.texImage2D(s.TEXTURE_2D,be,Xe,re,he,0,Fe,xe,null),re>>=1,he>>=1}}else if(je.length>0){if(Ae&&st){const re=Je(je[0]);n.texStorage2D(s.TEXTURE_2D,Le,Xe,re.width,re.height)}for(let re=0,he=je.length;re<he;re++)we=je[re],Ae?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Fe,xe,we):n.texImage2D(s.TEXTURE_2D,re,Xe,Fe,xe,we);T.generateMipmaps=!1}else if(Ae){if(st){const re=Je(ye);n.texStorage2D(s.TEXTURE_2D,Le,Xe,re.width,re.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,xe,ye)}else n.texImage2D(s.TEXTURE_2D,0,Xe,Fe,xe,ye);g(T)&&v(pe),We.__version=me.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Z(N,T,Y){if(T.image.length!==6)return;const pe=oe(N,T),_e=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Y);const me=r.get(_e);if(_e.version!==me.__version||pe===!0){n.activeTexture(s.TEXTURE0+Y);const We=Tt.getPrimaries(Tt.workingColorSpace),Pe=T.colorSpace===yr?null:Tt.getPrimaries(T.colorSpace),Ie=T.colorSpace===yr||We===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!pt&&!ye?Fe[he]=A(T.image[he],!0,a.maxCubemapSize):Fe[he]=ye?T.image[he].image:T.image[he],Fe[he]=_t(T,Fe[he]);const xe=Fe[0],Xe=c.convert(T.format,T.colorSpace),we=c.convert(T.type),je=D(T.internalFormat,Xe,we,T.colorSpace),Ae=T.isVideoTexture!==!0,st=me.__version===void 0||pe===!0,V=_e.dataReady;let Le=L(T,xe);U(s.TEXTURE_CUBE_MAP,T);let re;if(pt){Ae&&st&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,je,xe.width,xe.height);for(let he=0;he<6;he++){re=Fe[he].mipmaps;for(let be=0;be<re.length;be++){const Oe=re[be];T.format!==hi?Xe!==null?Ae?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Oe.width,Oe.height,Xe,Oe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Oe.width,Oe.height,Xe,we,Oe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,je,Oe.width,Oe.height,0,Xe,we,Oe.data)}}}else{if(re=T.mipmaps,Ae&&st){re.length>0&&Le++;const he=Je(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,je,he.width,he.height)}for(let he=0;he<6;he++)if(ye){Ae?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Xe,we,Fe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,je,Fe[he].width,Fe[he].height,0,Xe,we,Fe[he].data);for(let be=0;be<re.length;be++){const ct=re[be].image[he].image;Ae?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,ct.width,ct.height,Xe,we,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,je,ct.width,ct.height,0,Xe,we,ct.data)}}else{Ae?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Xe,we,Fe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,je,Xe,we,Fe[he]);for(let be=0;be<re.length;be++){const Oe=re[be];Ae?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,Xe,we,Oe.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,je,Xe,we,Oe.image[he])}}}g(T)&&v(s.TEXTURE_CUBE_MAP),me.__version=_e.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ue(N,T,Y,pe,_e,me){const We=c.convert(Y.format,Y.colorSpace),Pe=c.convert(Y.type),Ie=D(Y.internalFormat,We,Pe,Y.colorSpace);if(!r.get(T).__hasExternalTextures){const ye=Math.max(1,T.width>>me),Fe=Math.max(1,T.height>>me);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,me,Ie,ye,Fe,T.depth,0,We,Pe,null):n.texImage2D(_e,me,Ie,ye,Fe,0,We,Pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),lt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,r.get(Y).__webglTexture,0,at(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,r.get(Y).__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(N,T,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const pe=T.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,me=C(T.stencilBuffer,_e),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=at(T);lt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,me,T.width,T.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,me,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,N)}else{const pe=T.textures;for(let _e=0;_e<pe.length;_e++){const me=pe[_e],We=c.convert(me.format,me.colorSpace),Pe=c.convert(me.type),Ie=D(me.internalFormat,We,Pe,me.colorSpace),pt=at(T);Y&&lt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Ie,T.width,T.height):lt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const pe=r.get(T.depthTexture).__webglTexture,_e=at(T);if(T.depthTexture.format===js)lt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(T.depthTexture.format===Zs)lt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const T=r.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=pe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Me(T.__webglFramebuffer,N)}else if(Y){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),Se(T.__webglDepthbuffer[pe],N,!1);else{const _e=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Se(T.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function De(N,T,Y){const pe=r.get(N);T!==void 0&&ue(pe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Ne(N)}function it(N){const T=N.texture,Y=r.get(N),pe=r.get(T);N.addEventListener("dispose",O);const _e=N.textures,me=N.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,u.memory.textures++),me){Y.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Pe]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)Y.__webglFramebuffer[Pe][Ie]=s.createFramebuffer()}else Y.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)Y.__webglFramebuffer[Pe]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(We)for(let Pe=0,Ie=_e.length;Pe<Ie;Pe++){const pt=r.get(_e[Pe]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&lt(N)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Pe=0;Pe<_e.length;Pe++){const Ie=_e[Pe];Y.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Pe]);const pt=c.convert(Ie.format,Ie.colorSpace),ye=c.convert(Ie.type),Fe=D(Ie.internalFormat,pt,ye,Ie.colorSpace,N.isXRRenderTarget===!0),xe=at(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Fe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(Y.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),U(s.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ue(Y.__webglFramebuffer[Pe][Ie],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ie);else ue(Y.__webglFramebuffer[Pe],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);g(T)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Pe=0,Ie=_e.length;Pe<Ie;Pe++){const pt=_e[Pe],ye=r.get(pt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),U(s.TEXTURE_2D,pt),ue(Y.__webglFramebuffer,N,pt,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),g(pt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,pe.__webglTexture),U(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ue(Y.__webglFramebuffer[Ie],N,T,s.COLOR_ATTACHMENT0,Pe,Ie);else ue(Y.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Pe,0);g(T)&&v(Pe),n.unbindTexture()}N.depthBuffer&&Ne(N)}function gt(N){const T=N.textures;for(let Y=0,pe=T.length;Y<pe;Y++){const _e=T[Y];if(g(_e)){const me=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,We=r.get(_e).__webglTexture;n.bindTexture(me,We),v(me),n.unbindTexture()}}}const dt=[],z=[];function Gt(N){if(N.samples>0){if(lt(N)===!1){const T=N.textures,Y=N.width,pe=N.height;let _e=s.COLOR_BUFFER_BIT;const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(N),Pe=T.length>1;if(Pe)for(let Ie=0;Ie<T.length;Ie++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]);const pt=r.get(T[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,_e,s.NEAREST),h===!0&&(dt.length=0,z.length=0,dt.push(s.COLOR_ATTACHMENT0+Ie),N.depthBuffer&&N.resolveDepthBuffer===!1&&(dt.push(me),z.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ie=0;Ie<T.length;Ie++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ie]);const pt=r.get(T[Ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function at(N){return Math.min(a.maxSamples,N.samples)}function lt(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(N){const T=u.render.frame;_.get(N)!==T&&(_.set(N,T),N.update())}function _t(N,T){const Y=N.colorSpace,pe=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Tr&&Y!==yr&&(Tt.getTransfer(Y)===Ut?(pe!==hi||_e!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=ie,this.resetTextureUnits=R,this.setTexture2D=ce,this.setTexture2DArray=de,this.setTexture3D=ne,this.setTextureCube=le,this.rebindTextures=De,this.setupRenderTarget=it,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=lt}function nM(s,e){function n(r,a=yr){let c;const u=Tt.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===w0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===M0)return s.BYTE;if(r===E0)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===dd)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Zo)return s.HALF_FLOAT;if(r===T0)return s.ALPHA;if(r===A0)return s.RGB;if(r===hi)return s.RGBA;if(r===C0)return s.LUMINANCE;if(r===R0)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===Zs)return s.DEPTH_STENCIL;if(r===P0)return s.RED;if(r===md)return s.RED_INTEGER;if(r===b0)return s.RG;if(r===gd)return s.RG_INTEGER;if(r===_d)return s.RGBA_INTEGER;if(r===Fl||r===Ol||r===kl||r===zl)if(u===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Fl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Fl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uf||r===Ff||r===Of||r===kf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Uf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ff)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Of)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zf||r===Bf||r===Hf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===zf||r===Bf)return u===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Hf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vf||r===Gf||r===Wf||r===jf||r===Xf||r===qf||r===Yf||r===$f||r===Kf||r===Zf||r===Qf||r===Jf||r===ed||r===td)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Vf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$f)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jf)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ed)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===td)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===nd||r===id)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Bl)return u===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===L0||r===rd||r===sd||r===od)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Bl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===rd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class iM extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yo extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rM={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const g=n.getJointPose(A,r),v=this._getHandJoint(m,A);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rM)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Yo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:sM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new tc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lM extends eo{constructor(e,n){super();const r=this;let a=null,c=1,u=null,d="local-floor",h=1,m=null,_=null,x=null,y=null,S=null,w=null;const A=new aM,g=n.getContextAttributes();let v=null,D=null;const C=[],L=[],G=new xt;let O=null;const b=new Bn;b.layers.enable(1),b.viewport=new Pt;const F=new Bn;F.layers.enable(2),F.viewport=new Pt;const te=[b,F],M=new iM;M.layers.enable(1),M.layers.enable(2);let R=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=C[Z];return ue===void 0&&(ue=new _f,C[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=C[Z];return ue===void 0&&(ue=new _f,C[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=C[Z];return ue===void 0&&(ue=new _f,C[Z]=ue),ue.getHandSpace()};function K(Z){const ue=L.indexOf(Z.inputSource);if(ue===-1)return;const Se=C[ue];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,m||u),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ce(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",de);for(let Z=0;Z<C.length;Z++){const ue=L[Z];ue!==null&&(L[Z]=null,C[Z].disconnect(ue))}R=null,ie=null,A.reset(),e.setRenderTarget(v),S=null,y=null,x=null,a=null,D=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",de),g.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),a.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new es(S.framebufferWidth,S.framebufferHeight,{format:hi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,Se=null,Me=null;g.depth&&(Me=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?Zs:js,Se=g.stencil?Ks:Jr);const Ne={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:c};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(Ne),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new es(y.textureWidth,y.textureHeight,{format:hi,type:Wi,depthTexture:new X0(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(d),ke.setContext(a),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(Z){for(let ue=0;ue<Z.removed.length;ue++){const Se=Z.removed[ue],Me=L.indexOf(Se);Me>=0&&(L[Me]=null,C[Me].disconnect(Se))}for(let ue=0;ue<Z.added.length;ue++){const Se=Z.added[ue];let Me=L.indexOf(Se);if(Me===-1){for(let De=0;De<C.length;De++)if(De>=L.length){L.push(Se),Me=De;break}else if(L[De]===null){L[De]=Se,Me=De;break}if(Me===-1)break}const Ne=C[Me];Ne&&Ne.connect(Se)}}const ne=new j,le=new j;function B(Z,ue,Se){ne.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const Me=ne.distanceTo(le),Ne=ue.projectionMatrix.elements,De=Se.projectionMatrix.elements,it=Ne[14]/(Ne[10]-1),gt=Ne[14]/(Ne[10]+1),dt=(Ne[9]+1)/Ne[5],z=(Ne[9]-1)/Ne[5],Gt=(Ne[8]-1)/Ne[0],at=(De[8]+1)/De[0],lt=it*Gt,Qe=it*at,_t=Me/(-Gt+at),Je=_t*-Gt;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Je),Z.translateZ(_t),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const N=it+_t,T=gt+_t,Y=lt-Je,pe=Qe+(Me-Je),_e=dt*gt/T*N,me=z*gt/T*N;Z.projectionMatrix.makePerspective(Y,pe,_e,me,N,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ue=Z.near,Se=Z.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),M.near=F.near=b.near=ue,M.far=F.far=b.far=Se,(R!==M.near||ie!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,ie=M.far);const Me=Z.parent,Ne=M.cameras;fe(M,Me);for(let De=0;De<Ne.length;De++)fe(Ne[De],Me);Ne.length===2?B(M,b,F):M.projectionMatrix.copy(b.projectionMatrix),se(Z,M,Me)};function se(Z,ue,Se){Se===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ad*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Z){h=Z,y!==null&&(y.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(M)};let U=null;function oe(Z,ue){if(_=ue.getViewerPose(m||u),w=ue,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Me=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let De=0;De<Se.length;De++){const it=Se[De];let gt=null;if(S!==null)gt=S.getViewport(it);else{const z=x.getViewSubImage(y,it);gt=z.viewport,De===0&&(e.setRenderTargetTextures(D,z.colorTexture,y.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(D))}let dt=te[De];dt===void 0&&(dt=new Bn,dt.layers.enable(De),dt.viewport=new Pt,te[De]=dt),dt.matrix.fromArray(it.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(it.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(gt.x,gt.y,gt.width,gt.height),De===0&&(M.matrix.copy(dt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(dt)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const De=x.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&A.init(e,De,a.renderState)}}for(let Se=0;Se<C.length;Se++){const Me=L[Se],Ne=C[Se];Me!==null&&Ne!==void 0&&Ne.update(Me,ue,m||u)}U&&U(Z,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const ke=new W0;ke.setAnimationLoop(oe),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Wr=new Mi,cM=new Ft;function uM(s,e){function n(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,H0(s)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function a(g,v,D,C,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(g,v):v.isMeshToonMaterial?(c(g,v),x(g,v)):v.isMeshPhongMaterial?(c(g,v),_(g,v)):v.isMeshStandardMaterial?(c(g,v),y(g,v),v.isMeshPhysicalMaterial&&S(g,v,L)):v.isMeshMatcapMaterial?(c(g,v),w(g,v)):v.isMeshDepthMaterial?c(g,v):v.isMeshDistanceMaterial?(c(g,v),A(g,v)):v.isMeshNormalMaterial?c(g,v):v.isLineBasicMaterial?(u(g,v),v.isLineDashedMaterial&&d(g,v)):v.isPointsMaterial?h(g,v,D,C):v.isSpriteMaterial?m(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,n(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===bn&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,n(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===bn&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,n(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,n(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const D=e.get(v),C=D.envMap,L=D.envMapRotation;C&&(g.envMap.value=C,Wr.copy(L),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(Wr)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,g.aoMapTransform))}function u(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform))}function d(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function h(g,v,D,C){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*D,g.scale.value=C*.5,v.map&&(g.map.value=v.map,n(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function _(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function x(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function y(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function S(g,v,D){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===bn&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,v){v.matcap&&(g.matcap.value=v.matcap)}function A(g,v){const D=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function fM(s,e,n,r){let a={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,C){const L=C.program;r.uniformBlockBinding(D,L)}function m(D,C){let L=a[D.id];L===void 0&&(w(D),L=_(D),a[D.id]=L,D.addEventListener("dispose",g));const G=C.program;r.updateUBOMapping(D,G);const O=e.render.frame;c[D.id]!==O&&(y(D),c[D.id]=O)}function _(D){const C=x();D.__bindingPointIndex=C;const L=s.createBuffer(),G=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,G,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,L),L}function x(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const C=a[D.id],L=D.uniforms,G=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let O=0,b=L.length;O<b;O++){const F=Array.isArray(L[O])?L[O]:[L[O]];for(let te=0,M=F.length;te<M;te++){const R=F[te];if(S(R,O,te,G)===!0){const ie=R.__offset,K=Array.isArray(R.value)?R.value:[R.value];let ce=0;for(let de=0;de<K.length;de++){const ne=K[de],le=A(ne);typeof ne=="number"||typeof ne=="boolean"?(R.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,ie+ce,R.__data)):ne.isMatrix3?(R.__data[0]=ne.elements[0],R.__data[1]=ne.elements[1],R.__data[2]=ne.elements[2],R.__data[3]=0,R.__data[4]=ne.elements[3],R.__data[5]=ne.elements[4],R.__data[6]=ne.elements[5],R.__data[7]=0,R.__data[8]=ne.elements[6],R.__data[9]=ne.elements[7],R.__data[10]=ne.elements[8],R.__data[11]=0):(ne.toArray(R.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,C,L,G){const O=D.value,b=C+"_"+L;if(G[b]===void 0)return typeof O=="number"||typeof O=="boolean"?G[b]=O:G[b]=O.clone(),!0;{const F=G[b];if(typeof O=="number"||typeof O=="boolean"){if(F!==O)return G[b]=O,!0}else if(F.equals(O)===!1)return F.copy(O),!0}return!1}function w(D){const C=D.uniforms;let L=0;const G=16;for(let b=0,F=C.length;b<F;b++){const te=Array.isArray(C[b])?C[b]:[C[b]];for(let M=0,R=te.length;M<R;M++){const ie=te[M],K=Array.isArray(ie.value)?ie.value:[ie.value];for(let ce=0,de=K.length;ce<de;ce++){const ne=K[ce],le=A(ne),B=L%G,fe=B%le.boundary,se=B+fe;L+=fe,se!==0&&G-se<le.storage&&(L+=G-se),ie.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=L,L+=le.storage}}}const O=L%G;return O>0&&(L+=G-O),D.__size=L,D.__cache={},this}function A(D){const C={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(C.boundary=4,C.storage=4):D.isVector2?(C.boundary=8,C.storage=8):D.isVector3||D.isColor?(C.boundary=16,C.storage=12):D.isVector4?(C.boundary=16,C.storage=16):D.isMatrix3?(C.boundary=48,C.storage=48):D.isMatrix4?(C.boundary=64,C.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),C}function g(D){const C=D.target;C.removeEventListener("dispose",g);const L=u.indexOf(C.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(a[C.id]),delete a[C.id],delete c[C.id]}function v(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},c={}}return{bind:h,update:m,dispose:v}}class dM{constructor(e={}){const{canvas:n=Jv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const S=new Uint32Array(4),w=new Int32Array(4);let A=null,g=null;const v=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=Mr,this.toneMappingExposure=1;const C=this;let L=!1,G=0,O=0,b=null,F=-1,te=null;const M=new Pt,R=new Pt;let ie=null;const K=new vt(0);let ce=0,de=n.width,ne=n.height,le=1,B=null,fe=null;const se=new Pt(0,0,de,ne),U=new Pt(0,0,de,ne);let oe=!1;const ke=new yd;let Z=!1,ue=!1;const Se=new Ft,Me=new Ft,Ne=new j,De=new Pt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function dt(){return b===null?le:1}let z=r;function Gt(P,W){return n.getContext(P,W)}try{const P={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fd}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),z===null){const W="webgl2";if(z=Gt(W,P),z===null)throw Gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let at,lt,Qe,_t,Je,N,T,Y,pe,_e,me,We,Pe,Ie,pt,ye,Fe,xe,Xe,we,je,Ae,st,V;function Le(){at=new _S(z),at.init(),Ae=new nM(z,at),lt=new fS(z,at,e,Ae),Qe=new J2(z),lt.reverseDepthBuffer&&Qe.buffers.depth.setReversed(!0),_t=new yS(z),Je=new k2,N=new tM(z,at,Qe,Je,lt,Ae,_t),T=new hS(C),Y=new gS(C),pe=new C1(z),st=new cS(z,pe),_e=new vS(z,pe,_t,st),me=new MS(z,_e,pe,_t),Xe=new SS(z,lt,N),ye=new dS(Je),We=new O2(C,T,Y,at,lt,st,ye),Pe=new uM(C,Je),Ie=new B2,pt=new X2(at),xe=new lS(C,T,Y,Qe,me,y,h),Fe=new Z2(C,me,lt),V=new fM(z,_t,lt,Qe),we=new uS(z,at,_t),je=new xS(z,at,_t),_t.programs=We.programs,C.capabilities=lt,C.extensions=at,C.properties=Je,C.renderLists=Ie,C.shadowMap=Fe,C.state=Qe,C.info=_t}Le();const re=new lM(C,z);this.xr=re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=at.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=at.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(de,ne,!1))},this.getSize=function(P){return P.set(de,ne)},this.setSize=function(P,W,Q=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=P,ne=W,n.width=Math.floor(P*le),n.height=Math.floor(W*le),Q===!0&&(n.style.width=P+"px",n.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(de*le,ne*le).floor()},this.setDrawingBufferSize=function(P,W,Q){de=P,ne=W,le=Q,n.width=Math.floor(P*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(se)},this.setViewport=function(P,W,Q,J){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,W,Q,J),Qe.viewport(M.copy(se).multiplyScalar(le).round())},this.getScissor=function(P){return P.copy(U)},this.setScissor=function(P,W,Q,J){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,W,Q,J),Qe.scissor(R.copy(U).multiplyScalar(le).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(P){Qe.setScissorTest(oe=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){fe=P},this.getClearColor=function(P){return P.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(P=!0,W=!0,Q=!0){let J=0;if(P){let X=!1;if(b!==null){const Ce=b.texture.format;X=Ce===_d||Ce===gd||Ce===md}if(X){const Ce=b.texture.type,ze=Ce===Wi||Ce===Jr||Ce===Ko||Ce===Ks||Ce===hd||Ce===pd,Re=xe.getClearColor(),Ye=xe.getClearAlpha(),nt=Re.r,rt=Re.g,$e=Re.b;ze?(S[0]=nt,S[1]=rt,S[2]=$e,S[3]=Ye,z.clearBufferuiv(z.COLOR,0,S)):(w[0]=nt,w[1]=rt,w[2]=$e,w[3]=Ye,z.clearBufferiv(z.COLOR,0,w))}else J|=z.COLOR_BUFFER_BIT}W&&(J|=z.DEPTH_BUFFER_BIT,z.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),Ie.dispose(),pt.dispose(),Je.dispose(),T.dispose(),Y.dispose(),me.dispose(),st.dispose(),V.dispose(),We.dispose(),re.dispose(),re.removeEventListener("sessionstart",ji),re.removeEventListener("sessionend",ns),Dn.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const P=_t.autoReset,W=Fe.enabled,Q=Fe.autoUpdate,J=Fe.needsUpdate,X=Fe.type;Le(),_t.autoReset=P,Fe.enabled=W,Fe.autoUpdate=Q,Fe.needsUpdate=J,Fe.type=X}function Oe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ct(P){const W=P.target;W.removeEventListener("dispose",ct),Ct(W)}function Ct(P){Xt(P),Je.remove(P)}function Xt(P){const W=Je.get(P).programs;W!==void 0&&(W.forEach(function(Q){We.releaseProgram(Q)}),P.isShaderMaterial&&We.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Q,J,X,Ce){W===null&&(W=it);const ze=X.isMesh&&X.matrixWorld.determinant()<0,Re=wi(P,W,Q,J,X);Qe.setMaterial(J,ze);let Ye=Q.index,nt=1;if(J.wireframe===!0){if(Ye=_e.getWireframeAttribute(Q),Ye===void 0)return;nt=2}const rt=Q.drawRange,$e=Q.attributes.position;let wt=rt.start*nt,Rt=(rt.start+rt.count)*nt;Ce!==null&&(wt=Math.max(wt,Ce.start*nt),Rt=Math.min(Rt,(Ce.start+Ce.count)*nt)),Ye!==null?(wt=Math.max(wt,0),Rt=Math.min(Rt,Ye.count)):$e!=null&&(wt=Math.max(wt,0),Rt=Math.min(Rt,$e.count));const bt=Rt-wt;if(bt<0||bt===1/0)return;st.setup(X,J,Re,Q,Ye);let Ot,St=we;if(Ye!==null&&(Ot=pe.get(Ye),St=je,St.setIndex(Ot)),X.isMesh)J.wireframe===!0?(Qe.setLineWidth(J.wireframeLinewidth*dt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(X.isLine){let He=J.linewidth;He===void 0&&(He=1),Qe.setLineWidth(He*dt()),X.isLineSegments?St.setMode(z.LINES):X.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else X.isPoints?St.setMode(z.POINTS):X.isSprite&&St.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)St.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const He=X._multiDrawStarts,Kt=X._multiDrawCounts,Mt=X._multiDrawCount,Nn=Ye?pe.get(Ye).bytesPerElement:1,ei=Je.get(J).currentProgram.getUniforms();for(let tn=0;tn<Mt;tn++)ei.setValue(z,"_gl_DrawID",tn),St.render(He[tn]/Nn,Kt[tn])}else if(X.isInstancedMesh)St.renderInstances(wt,bt,X.count);else if(Q.isInstancedBufferGeometry){const He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Kt=Math.min(Q.instanceCount,He);St.renderInstances(wt,bt,Kt)}else St.render(wt,bt)};function mt(P,W,Q){P.transparent===!0&&P.side===Hi&&P.forceSinglePass===!1?(P.side=bn,P.needsUpdate=!0,rs(P,W,Q),P.side=Er,P.needsUpdate=!0,rs(P,W,Q),P.side=Hi):rs(P,W,Q)}this.compile=function(P,W,Q=null){Q===null&&(Q=P),g=pt.get(Q),g.init(W),D.push(g),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),P!==Q&&P.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const J=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ce=X.material;if(Ce)if(Array.isArray(Ce))for(let ze=0;ze<Ce.length;ze++){const Re=Ce[ze];mt(Re,Q,X),J.add(Re)}else mt(Ce,Q,X),J.add(Ce)}),D.pop(),g=null,J},this.compileAsync=function(P,W,Q=null){const J=this.compile(P,W,Q);return new Promise(X=>{function Ce(){if(J.forEach(function(ze){Je.get(ze).currentProgram.isReady()&&J.delete(ze)}),J.size===0){X(P);return}setTimeout(Ce,10)}at.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let qt=null;function Gn(P){qt&&qt(P)}function ji(){Dn.stop()}function ns(){Dn.start()}const Dn=new W0;Dn.setAnimationLoop(Gn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(P){qt=P,re.setAnimationLoop(P),P===null?Dn.stop():Dn.start()},re.addEventListener("sessionstart",ji),re.addEventListener("sessionend",ns),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),P.isScene===!0&&P.onBeforeRender(C,P,W,b),g=pt.get(P,D.length),g.init(W),D.push(g),Me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ke.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,Z=ye.init(this.clippingPlanes,ue),A=Ie.get(P,v.length),A.init(),v.push(A),re.enabled===!0&&re.isPresenting===!0){const Ce=C.xr.getDepthSensingMesh();Ce!==null&&io(Ce,W,-1/0,C.sortObjects)}io(P,W,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(B,fe),gt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,gt&&xe.addToRenderList(A,P),this.info.render.frame++,Z===!0&&ye.beginShadows();const Q=g.state.shadowsArray;Fe.render(Q,P,W),Z===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=A.opaque,X=A.transmissive;if(g.setupLights(),W.isArrayCamera){const Ce=W.cameras;if(X.length>0)for(let ze=0,Re=Ce.length;ze<Re;ze++){const Ye=Ce[ze];Ar(J,X,P,Ye)}gt&&xe.render(P);for(let ze=0,Re=Ce.length;ze<Re;ze++){const Ye=Ce[ze];Xi(A,P,Ye,Ye.viewport)}}else X.length>0&&Ar(J,X,P,W),gt&&xe.render(P),Xi(A,P,W);b!==null&&(N.updateMultisampleRenderTarget(b),N.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(C,P,W),st.resetDefaultState(),F=-1,te=null,D.pop(),D.length>0?(g=D[D.length-1],Z===!0&&ye.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?A=v[v.length-1]:A=null};function io(P,W,Q,J){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ke.intersectsSprite(P)){J&&De.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Me);const ze=me.update(P),Re=P.material;Re.visible&&A.push(P,ze,Re,Q,De.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ke.intersectsObject(P))){const ze=me.update(P),Re=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),De.copy(P.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),De.copy(ze.boundingSphere.center)),De.applyMatrix4(P.matrixWorld).applyMatrix4(Me)),Array.isArray(Re)){const Ye=ze.groups;for(let nt=0,rt=Ye.length;nt<rt;nt++){const $e=Ye[nt],wt=Re[$e.materialIndex];wt&&wt.visible&&A.push(P,ze,wt,Q,De.z,$e)}}else Re.visible&&A.push(P,ze,Re,Q,De.z,null)}}const Ce=P.children;for(let ze=0,Re=Ce.length;ze<Re;ze++)io(Ce[ze],W,Q,J)}function Xi(P,W,Q,J){const X=P.opaque,Ce=P.transmissive,ze=P.transparent;g.setupLightsView(Q),Z===!0&&ye.setGlobalState(C.clippingPlanes,Q),J&&Qe.viewport(M.copy(J)),X.length>0&&Ei(X,W,Q),Ce.length>0&&Ei(Ce,W,Q),ze.length>0&&Ei(ze,W,Q),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Ar(P,W,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new es(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Zo:Wi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ce=g.state.transmissionRenderTarget[J.id],ze=J.viewport||M;Ce.setSize(ze.z,ze.w);const Re=C.getRenderTarget();C.setRenderTarget(Ce),C.getClearColor(K),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),gt&&xe.render(Q);const Ye=C.toneMapping;C.toneMapping=Mr;const nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),Z===!0&&ye.setGlobalState(C.clippingPlanes,J),Ei(P,Q,J),N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce),at.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let $e=0,wt=W.length;$e<wt;$e++){const Rt=W[$e],bt=Rt.object,Ot=Rt.geometry,St=Rt.material,He=Rt.group;if(St.side===Hi&&bt.layers.test(J.layers)){const Kt=St.side;St.side=bn,St.needsUpdate=!0,is(bt,Q,J,Ot,St,He),St.side=Kt,St.needsUpdate=!0,rt=!0}}rt===!0&&(N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce))}C.setRenderTarget(Re),C.setClearColor(K,ce),nt!==void 0&&(J.viewport=nt),C.toneMapping=Ye}function Ei(P,W,Q){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ce=P.length;X<Ce;X++){const ze=P[X],Re=ze.object,Ye=ze.geometry,nt=J===null?ze.material:J,rt=ze.group;Re.layers.test(Q.layers)&&is(Re,W,Q,Ye,nt,rt)}}function is(P,W,Q,J,X,Ce){P.onBeforeRender(C,W,Q,J,X,Ce),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(C,W,Q,J,P,Ce),X.transparent===!0&&X.side===Hi&&X.forceSinglePass===!1?(X.side=bn,X.needsUpdate=!0,C.renderBufferDirect(Q,W,J,X,P,Ce),X.side=Er,X.needsUpdate=!0,C.renderBufferDirect(Q,W,J,X,P,Ce),X.side=Hi):C.renderBufferDirect(Q,W,J,X,P,Ce),P.onAfterRender(C,W,Q,J,X,Ce)}function rs(P,W,Q){W.isScene!==!0&&(W=it);const J=Je.get(P),X=g.state.lights,Ce=g.state.shadowsArray,ze=X.state.version,Re=We.getParameters(P,X.state,Ce,W,Q),Ye=We.getProgramCacheKey(Re);let nt=J.programs;J.environment=P.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(P.isMeshStandardMaterial?Y:T).get(P.envMap||J.environment),J.envMapRotation=J.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,nt===void 0&&(P.addEventListener("dispose",ct),nt=new Map,J.programs=nt);let rt=nt.get(Ye);if(rt!==void 0){if(J.currentProgram===rt&&J.lightsStateVersion===ze)return ra(P,Re),rt}else Re.uniforms=We.getUniforms(P),P.onBeforeCompile(Re,C),rt=We.acquireProgram(Re,Ye),nt.set(Ye,rt),J.uniforms=Re.uniforms;const $e=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($e.clippingPlanes=ye.uniform),ra(P,Re),J.needsLights=oa(P),J.lightsStateVersion=ze,J.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=rt,J.uniformsList=null,rt}function ia(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=Vl.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function ra(P,W){const Q=Je.get(P);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function wi(P,W,Q,J,X){W.isScene!==!0&&(W=it),N.resetTextureUnits();const Ce=W.fog,ze=J.isMeshStandardMaterial?W.environment:null,Re=b===null?C.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Tr,Ye=(J.isMeshStandardMaterial?Y:T).get(J.envMap||ze),nt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,rt=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!Q.morphAttributes.position,wt=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color;let bt=Mr;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bt=C.toneMapping);const Ot=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,St=Ot!==void 0?Ot.length:0,He=Je.get(J),Kt=g.state.lights;if(Z===!0&&(ue===!0||P!==te)){const fn=P===te&&J.id===F;ye.setState(J,P,fn)}let Mt=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Kt.state.version||He.outputColorSpace!==Re||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isBatchedMesh&&He.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&He.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==Ye||J.fog===!0&&He.fog!==Ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ye.numPlanes||He.numIntersection!==ye.numIntersection)||He.vertexAlphas!==nt||He.vertexTangents!==rt||He.morphTargets!==$e||He.morphNormals!==wt||He.morphColors!==Rt||He.toneMapping!==bt||He.morphTargetsCount!==St)&&(Mt=!0):(Mt=!0,He.__version=J.version);let Nn=He.currentProgram;Mt===!0&&(Nn=rs(J,W,X));let ei=!1,tn=!1,Ti=!1;const Lt=Nn.getUniforms(),pi=He.uniforms;if(Qe.useProgram(Nn.program)&&(ei=!0,tn=!0,Ti=!0),J.id!==F&&(F=J.id,tn=!0),ei||te!==P){lt.reverseDepthBuffer?(Se.copy(P.projectionMatrix),t1(Se),n1(Se),Lt.setValue(z,"projectionMatrix",Se)):Lt.setValue(z,"projectionMatrix",P.projectionMatrix),Lt.setValue(z,"viewMatrix",P.matrixWorldInverse);const fn=Lt.map.cameraPosition;fn!==void 0&&fn.setValue(z,Ne.setFromMatrixPosition(P.matrixWorld)),lt.logarithmicDepthBuffer&&Lt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),te!==P&&(te=P,tn=!0,Ti=!0)}if(X.isSkinnedMesh){Lt.setOptional(z,X,"bindMatrix"),Lt.setOptional(z,X,"bindMatrixInverse");const fn=X.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Lt.setValue(z,"boneTexture",fn.boneTexture,N))}X.isBatchedMesh&&(Lt.setOptional(z,X,"batchingTexture"),Lt.setValue(z,"batchingTexture",X._matricesTexture,N),Lt.setOptional(z,X,"batchingIdTexture"),Lt.setValue(z,"batchingIdTexture",X._indirectTexture,N),Lt.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&Lt.setValue(z,"batchingColorTexture",X._colorsTexture,N));const ro=Q.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0)&&Xe.update(X,Q,Nn),(tn||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,Lt.setValue(z,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(pi.envMap.value=Ye,pi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(pi.envMapIntensity.value=W.environmentIntensity),tn&&(Lt.setValue(z,"toneMappingExposure",C.toneMappingExposure),He.needsLights&&sa(pi,Ti),Ce&&J.fog===!0&&Pe.refreshFogUniforms(pi,Ce),Pe.refreshMaterialUniforms(pi,J,le,ne,g.state.transmissionRenderTarget[P.id]),Vl.upload(z,ia(He),pi,N)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vl.upload(z,ia(He),pi,N),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(z,"center",X.center),Lt.setValue(z,"modelViewMatrix",X.modelViewMatrix),Lt.setValue(z,"normalMatrix",X.normalMatrix),Lt.setValue(z,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const fn=J.uniformsGroups;for(let ss=0,so=fn.length;ss<so;ss++){const qi=fn[ss];V.update(qi,Nn),V.bind(qi,Nn)}}return Nn}function sa(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function oa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,W,Q){Je.get(P.texture).__webglTexture=W,Je.get(P.depthTexture).__webglTexture=Q;const J=Je.get(P);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){const Q=Je.get(P);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Q=0){b=P,G=W,O=Q;let J=!0,X=null,Ce=!1,ze=!1;if(P){const Ye=Je.get(P);if(Ye.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(z.FRAMEBUFFER,null),J=!1;else if(Ye.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(Ye.__hasExternalTextures)N.rebindTextures(P,Je.get(P.texture).__webglTexture,Je.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const $e=P.depthTexture;if(Ye.__boundDepthTexture!==$e){if($e!==null&&Je.has($e)&&(P.width!==$e.image.width||P.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}const nt=P.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ze=!0);const rt=Je.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(rt[W])?X=rt[W][Q]:X=rt[W],Ce=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?X=Je.get(P).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[Q]:X=rt,M.copy(P.viewport),R.copy(P.scissor),ie=P.scissorTest}else M.copy(se).multiplyScalar(le).floor(),R.copy(U).multiplyScalar(le).floor(),ie=oe;if(Qe.bindFramebuffer(z.FRAMEBUFFER,X)&&J&&Qe.drawBuffers(P,X),Qe.viewport(M),Qe.scissor(R),Qe.setScissorTest(ie),Ce){const Ye=Je.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ye.__webglTexture,Q)}else if(ze){const Ye=Je.get(P.texture),nt=W||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ye.__webglTexture,Q||0,nt)}F=-1},this.readRenderTargetPixels=function(P,W,Q,J,X,Ce,ze){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Je.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&(Re=Re[ze]),Re){Qe.bindFramebuffer(z.FRAMEBUFFER,Re);try{const Ye=P.texture,nt=Ye.format,rt=Ye.type;if(!lt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-J&&Q>=0&&Q<=P.height-X&&z.readPixels(W,Q,J,X,Ae.convert(nt),Ae.convert(rt),Ce)}finally{const Ye=b!==null?Je.get(b).__webglFramebuffer:null;Qe.bindFramebuffer(z.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(P,W,Q,J,X,Ce,ze){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Je.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&(Re=Re[ze]),Re){const Ye=P.texture,nt=Ye.format,rt=Ye.type;if(!lt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-J&&Q>=0&&Q<=P.height-X){Qe.bindFramebuffer(z.FRAMEBUFFER,Re);const $e=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.bufferData(z.PIXEL_PACK_BUFFER,Ce.byteLength,z.STREAM_READ),z.readPixels(W,Q,J,X,Ae.convert(nt),Ae.convert(rt),0);const wt=b!==null?Je.get(b).__webglFramebuffer:null;Qe.bindFramebuffer(z.FRAMEBUFFER,wt);const Rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await e1(z,Rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ce),z.deleteBuffer($e),z.deleteSync(Rt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,Q=0){P.isTexture!==!0&&(Hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);const J=Math.pow(2,-Q),X=Math.floor(P.image.width*J),Ce=Math.floor(P.image.height*J),ze=W!==null?W.x:0,Re=W!==null?W.y:0;N.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,ze,Re,X,Ce),Qe.unbindTexture()},this.copyTextureToTexture=function(P,W,Q=null,J=null,X=0){P.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1],W=arguments[2],X=arguments[3]||0,Q=null);let Ce,ze,Re,Ye,nt,rt;Q!==null?(Ce=Q.max.x-Q.min.x,ze=Q.max.y-Q.min.y,Re=Q.min.x,Ye=Q.min.y):(Ce=P.image.width,ze=P.image.height,Re=0,Ye=0),J!==null?(nt=J.x,rt=J.y):(nt=0,rt=0);const $e=Ae.convert(W.format),wt=Ae.convert(W.type);N.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Rt=z.getParameter(z.UNPACK_ROW_LENGTH),bt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ot=z.getParameter(z.UNPACK_SKIP_PIXELS),St=z.getParameter(z.UNPACK_SKIP_ROWS),He=z.getParameter(z.UNPACK_SKIP_IMAGES),Kt=P.isCompressedTexture?P.mipmaps[X]:P.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Kt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Kt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Re),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ye),P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,nt,rt,Ce,ze,$e,wt,Kt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,nt,rt,Kt.width,Kt.height,$e,Kt.data):z.texSubImage2D(z.TEXTURE_2D,X,nt,rt,Ce,ze,$e,wt,Kt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Rt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,St),z.pixelStorei(z.UNPACK_SKIP_IMAGES,He),X===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Qe.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Q=null,J=null,X=0){P.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,P=arguments[2],W=arguments[3],X=arguments[4]||0);let Ce,ze,Re,Ye,nt,rt,$e,wt,Rt;const bt=P.isCompressedTexture?P.mipmaps[X]:P.image;Q!==null?(Ce=Q.max.x-Q.min.x,ze=Q.max.y-Q.min.y,Re=Q.max.z-Q.min.z,Ye=Q.min.x,nt=Q.min.y,rt=Q.min.z):(Ce=bt.width,ze=bt.height,Re=bt.depth,Ye=0,nt=0,rt=0),J!==null?($e=J.x,wt=J.y,Rt=J.z):($e=0,wt=0,Rt=0);const Ot=Ae.convert(W.format),St=Ae.convert(W.type);let He;if(W.isData3DTexture)N.setTexture3D(W,0),He=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)N.setTexture2DArray(W,0),He=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Kt=z.getParameter(z.UNPACK_ROW_LENGTH),Mt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Nn=z.getParameter(z.UNPACK_SKIP_PIXELS),ei=z.getParameter(z.UNPACK_SKIP_ROWS),tn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,bt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ye),z.pixelStorei(z.UNPACK_SKIP_ROWS,nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rt),P.isDataTexture||P.isData3DTexture?z.texSubImage3D(He,X,$e,wt,Rt,Ce,ze,Re,Ot,St,bt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(He,X,$e,wt,Rt,Ce,ze,Re,Ot,bt.data):z.texSubImage3D(He,X,$e,wt,Rt,Ce,ze,Re,Ot,St,bt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Kt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,ei),z.pixelStorei(z.UNPACK_SKIP_IMAGES,tn),X===0&&W.generateMipmaps&&z.generateMipmap(He),Qe.unbindTexture()},this.initRenderTarget=function(P){Je.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),Qe.unbindTexture()},this.resetState=function(){G=0,O=0,b=null,Qe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vd?"display-p3":"srgb",n.unpackColorSpace=Tt.workingColorSpace===ec?"display-p3":"srgb"}}class Md{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new vt(e),this.near=n,this.far=r}clone(){return new Md(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hM extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Z0 extends ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $l=new j,Kl=new j,Jm=new Ft,jo=new xd,Pl=new ta,vf=new j,e0=new j;class pM extends ln{constructor(e=new Vn,n=new Z0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)$l.fromBufferAttribute(n,a-1),Kl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=$l.distanceTo(Kl);e.setAttribute("lineDistance",new Sn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(a),Pl.radius+=c,e.ray.intersectsSphere(Pl)===!1)return;Jm.copy(a).invert(),jo.copy(e.ray).applyMatrix4(Jm);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,_=r.index,y=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let A=S,g=w-1;A<g;A+=m){const v=_.getX(A),D=_.getX(A+1),C=bl(this,e,jo,h,v,D);C&&n.push(C)}if(this.isLineLoop){const A=_.getX(w-1),g=_.getX(S),v=bl(this,e,jo,h,A,g);v&&n.push(v)}}else{const S=Math.max(0,u.start),w=Math.min(y.count,u.start+u.count);for(let A=S,g=w-1;A<g;A+=m){const v=bl(this,e,jo,h,A,A+1);v&&n.push(v)}if(this.isLineLoop){const A=bl(this,e,jo,h,w-1,S);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function bl(s,e,n,r,a,c){const u=s.geometry.attributes.position;if($l.fromBufferAttribute(u,a),Kl.fromBufferAttribute(u,c),n.distanceSqToSegment($l,Kl,vf,e0)>r)return;vf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(vf);if(!(h<e.near||h>e.far))return{distance:h,point:e0.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const t0=new j,n0=new j;class mM extends pM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,c=n.count;a<c;a+=2)t0.fromBufferAttribute(n,a),n0.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+t0.distanceTo(n0);e.setAttribute("lineDistance",new Sn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i0=new Ft,cd=new xd,Ll=new ta,Dl=new j;class gM extends ln{constructor(e=new Vn,n=new Q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(a),Ll.radius+=c,e.ray.intersectsSphere(Ll)===!1)return;i0.copy(a).invert(),cd.copy(e.ray).applyMatrix4(i0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,x=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let w=y,A=S;w<A;w++){const g=m.getX(w);Dl.fromBufferAttribute(x,g),r0(Dl,g,h,a,e,n,this)}}else{const y=Math.max(0,u.start),S=Math.min(x.count,u.start+u.count);for(let w=y,A=S;w<A;w++)Dl.fromBufferAttribute(x,w),r0(Dl,w,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function r0(s,e,n,r,a,c,u){const d=cd.distanceSqToPoint(s);if(d<n){const h=new j;cd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class na extends Vn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],u=[];d(a),m(r),_(),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(c.slice(),3)),this.setAttribute("uv",new Sn(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const C=new j,L=new j,G=new j;for(let O=0;O<n.length;O+=3)S(n[O+0],C),S(n[O+1],L),S(n[O+2],G),h(C,L,G,D)}function h(D,C,L,G){const O=G+1,b=[];for(let F=0;F<=O;F++){b[F]=[];const te=D.clone().lerp(L,F/O),M=C.clone().lerp(L,F/O),R=O-F;for(let ie=0;ie<=R;ie++)ie===0&&F===O?b[F][ie]=te:b[F][ie]=te.clone().lerp(M,ie/R)}for(let F=0;F<O;F++)for(let te=0;te<2*(O-F)-1;te++){const M=Math.floor(te/2);te%2===0?(y(b[F][M+1]),y(b[F+1][M]),y(b[F][M])):(y(b[F][M+1]),y(b[F+1][M+1]),y(b[F+1][M]))}}function m(D){const C=new j;for(let L=0;L<c.length;L+=3)C.x=c[L+0],C.y=c[L+1],C.z=c[L+2],C.normalize().multiplyScalar(D),c[L+0]=C.x,c[L+1]=C.y,c[L+2]=C.z}function _(){const D=new j;for(let C=0;C<c.length;C+=3){D.x=c[C+0],D.y=c[C+1],D.z=c[C+2];const L=g(D)/2/Math.PI+.5,G=v(D)/Math.PI+.5;u.push(L,1-G)}w(),x()}function x(){for(let D=0;D<u.length;D+=6){const C=u[D+0],L=u[D+2],G=u[D+4],O=Math.max(C,L,G),b=Math.min(C,L,G);O>.9&&b<.1&&(C<.2&&(u[D+0]+=1),L<.2&&(u[D+2]+=1),G<.2&&(u[D+4]+=1))}}function y(D){c.push(D.x,D.y,D.z)}function S(D,C){const L=D*3;C.x=e[L+0],C.y=e[L+1],C.z=e[L+2]}function w(){const D=new j,C=new j,L=new j,G=new j,O=new xt,b=new xt,F=new xt;for(let te=0,M=0;te<c.length;te+=9,M+=6){D.set(c[te+0],c[te+1],c[te+2]),C.set(c[te+3],c[te+4],c[te+5]),L.set(c[te+6],c[te+7],c[te+8]),O.set(u[M+0],u[M+1]),b.set(u[M+2],u[M+3]),F.set(u[M+4],u[M+5]),G.copy(D).add(C).add(L).divideScalar(3);const R=g(G);A(O,M+0,D,R),A(b,M+2,C,R),A(F,M+4,L,R)}}function A(D,C,L,G){G<0&&D.x===1&&(u[C]=D.x-1),L.x===0&&L.z===0&&(u[C]=G/2/Math.PI+.5)}function g(D){return Math.atan2(D.z,-D.x)}function v(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.vertices,e.indices,e.radius,e.details)}}class $o extends na{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $o(e.radius,e.detail)}}class Ed extends na{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ed(e.radius,e.detail)}}class wd extends na{constructor(e=1,n=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new wd(e.radius,e.detail)}}class Td extends Vn{constructor(e=1,n=.4,r=64,a=8,c=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:a,p:c,q:u},r=Math.floor(r),a=Math.floor(a);const d=[],h=[],m=[],_=[],x=new j,y=new j,S=new j,w=new j,A=new j,g=new j,v=new j;for(let C=0;C<=r;++C){const L=C/r*c*Math.PI*2;D(L,c,u,e,S),D(L+.01,c,u,e,w),g.subVectors(w,S),v.addVectors(w,S),A.crossVectors(g,v),v.crossVectors(A,g),A.normalize(),v.normalize();for(let G=0;G<=a;++G){const O=G/a*Math.PI*2,b=-n*Math.cos(O),F=n*Math.sin(O);x.x=S.x+(b*v.x+F*A.x),x.y=S.y+(b*v.y+F*A.y),x.z=S.z+(b*v.z+F*A.z),h.push(x.x,x.y,x.z),y.subVectors(x,S).normalize(),m.push(y.x,y.y,y.z),_.push(C/r),_.push(G/a)}}for(let C=1;C<=r;C++)for(let L=1;L<=a;L++){const G=(a+1)*(C-1)+(L-1),O=(a+1)*C+(L-1),b=(a+1)*C+L,F=(a+1)*(C-1)+L;d.push(G,O,F),d.push(O,b,F)}this.setIndex(d),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(m,3)),this.setAttribute("uv",new Sn(_,2));function D(C,L,G,O,b){const F=Math.cos(C),te=Math.sin(C),M=G/L*C,R=Math.cos(M);b.x=O*(2+R)*.5*F,b.y=O*(2+R)*te*.5,b.z=O*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class s0 extends ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ad extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const xf=new Ft,o0=new j,a0=new j;class J0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yd,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;o0.setFromMatrixPosition(e.matrixWorld),n.position.copy(o0),a0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(a0),n.updateMatrixWorld(),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const l0=new Ft,Xo=new j,yf=new j;class _M extends J0{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Xo),yf.copy(r.position),yf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(yf),r.updateMatrixWorld(),a.makeTranslation(-Xo.x,-Xo.y,-Xo.z),l0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l0)}}class c0 extends Ad{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new _M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vM extends J0{constructor(){super(new j0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u0 extends Ad{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new vM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xM extends Ad{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class yM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=f0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=f0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function f0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);const SM="_canvasWrap_1e3nm_1",MM="_canvas_1e3nm_1",d0={canvasWrap:SM,canvas:MM},eg=[8164863,10980346,2282478,16020150,16498468],tg=[2377448,8141549,561586,14362487,14251782];function Qr(){const s=document.documentElement.getAttribute("data-theme");return s==="dark"?!0:s==="light"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches}function EM(){return Qr()?eg:tg}function wM(){return Qr()?.35:.12}function TM(){return Qr()?988443:15331058}function AM(){return Qr()?8164863:2377448}function CM({theme:s}){const e=Ze.useRef(null),n=Ze.useRef({});return Ze.useEffect(()=>{const r=e.current;if(!r)return;const a=n.current;let c,u,d,h,m,_,x=[],y,S,w,A,g,v=null,D=!0,C=!0,L=0,G=0,O=0,b=0,F=0,te=0;const M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,R=window.matchMedia("(pointer: coarse)").matches,ie=window.innerWidth<640;try{let K=function(xe){F=xe.clientX/window.innerWidth*2-1,te=xe.clientY/window.innerHeight*2-1,G=F*.38,L=-te*.28},ce=function(){L=Math.sin(window.scrollY*.003)*.2},de=function(){if(!Pe)return;const xe=Math.max(0,Math.min(1,1-window.scrollY/(Pe.offsetHeight*.75)));r.style.opacity=xe.toFixed(3)},ne=function(){C=!document.hidden},le=function(){if(!d||!c||!r)return;const xe=r.parentElement,Xe=xe.clientWidth||window.innerWidth,we=xe.clientHeight||window.innerHeight;d.aspect=Xe/we,d.updateProjectionMatrix(),c.setSize(Xe,we)},B=function(xe){m.getWorldPosition(ye);const Xe=x.map(je=>(je.mesh.getWorldPosition(Fe),{d:je,dist:ye.distanceTo(Fe),pos:Fe.clone()})).sort((je,Ae)=>je.dist-Ae.dist).slice(0,5),we=w.geometry.attributes.position.array;Xe.forEach(({pos:je},Ae)=>{we[Ae*6]=ye.x,we[Ae*6+1]=ye.y,we[Ae*6+2]=ye.z,we[Ae*6+3]=je.x,we[Ae*6+4]=je.y,we[Ae*6+5]=je.z}),w.geometry.attributes.position.needsUpdate=!0},fe=function(){if(v=requestAnimationFrame(fe),!D||!C)return;const xe=pt.getElapsedTime();O+=(L-O)*.055,b+=(G-b)*.055,h.rotation.x=O,h.rotation.y=b;const Xe=1+Math.sin(xe*1.4)*.03;m.scale.setScalar(Xe),m.rotation.x+=.003,m.rotation.y+=.005;const we=9;A.position.set(Math.cos(xe*.38)*we,Math.sin(xe*.28)*5,Math.sin(xe*.38)*we),g.position.set(Math.cos(xe*.31+Math.PI)*we,Math.sin(xe*.22+1)*5,Math.sin(xe*.31+Math.PI)*we),x.forEach(({mesh:Ae,baseX:st,baseY:V,depthZ:Le,speed:re,amplitude:he,rotSpeedX:be,rotSpeedY:Oe,phase:ct,parallaxFactor:Ct})=>{Ae.position.y=V+Math.sin(xe*re+ct)*he,Ae.position.x=st+-F*.8*Ct,Ae.position.z=Le+-te*.5*Ct,Ae.rotation.x+=be,Ae.rotation.y+=Oe});const je=y.geometry.attributes.position.array;for(let Ae=0;Ae<lt;Ae++)je[Ae*3]+=Je[Ae].x,je[Ae*3+1]+=Je[Ae].y,je[Ae*3+2]+=Je[Ae].z,Math.abs(je[Ae*3])>23&&(je[Ae*3]*=-.98),Math.abs(je[Ae*3+1])>15&&(je[Ae*3+1]*=-.98),Math.abs(je[Ae*3+2])>18&&(je[Ae*3+2]*=-.98);y.geometry.attributes.position.needsUpdate=!0,B(xe),c.render(u,d)};const se=r.parentElement,U=se.clientWidth||window.innerWidth,oe=se.clientHeight||window.innerHeight,ke=U/oe;c=new dM({canvas:r,alpha:!0,antialias:!0,powerPreference:"high-performance"}),c.setSize(U,oe),c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),u=new hM,d=new Bn(45,ke,.1,200),d.position.set(0,0,18),u.fog=new Md(TM(),22,55);const Z=new xM(16777215,.55);u.add(Z);const ue=new u0(16773328,1.1);ue.position.set(8,10,12),u.add(ue);const Se=new u0(13691135,.65);Se.position.set(-8,-5,-10),u.add(Se),A=new c0(8164863,Qr()?3.5:2,22),u.add(A),g=new c0(16020150,Qr()?2.8:1.8,20),u.add(g),h=new Yo,u.add(h);const Me=EM(),Ne=wM(),De=AM(),it=new $o(3.2,0),gt=new s0({color:De,emissive:De,emissiveIntensity:Ne,roughness:.3,metalness:.2,transparent:!0,opacity:.92,flatShading:!0});m=new Jn(it,gt),m.position.set(0,0,-4),h.add(m);const dt=new $o(3.28,0),z=new Yl({color:De,wireframe:!0,transparent:!0,opacity:.38});_=new Jn(dt,z),m.add(_);const Gt=[new $o(1,0),new Ed(1.15,0),new to(1.22,1.22,1.22),new Td(.72,.22,48,8),new wd(1.05,0)],at=ie?8:14;for(let xe=0;xe<at;xe++){const Xe=Gt[xe%Gt.length],we=Me[xe%Me.length],je=xe/at,Ae=je<.33,st=je>.66,V=xe%3===2,Le=Ae?(Math.random()-.5)*4+2:st?(Math.random()-.5)*5-6:(Math.random()-.5)*5-2;let re;V?re=new Yl({color:we,wireframe:!0,transparent:!0,opacity:.9}):re=new s0({color:we,emissive:we,emissiveIntensity:Ne,roughness:.3,metalness:.2,flatShading:!0,transparent:!0,opacity:Ae?.82:.92});const he=new Jn(Xe,re),be=xe/at*Math.PI*2+Math.random()*.4,ct=((ie?4.5:7)+Math.random()*3.5)*Math.max(.45,Math.min(1,ke)),Ct=(ie?2.8:3.8)+Math.random()*2.5,Xt=Math.cos(be)*ct,mt=Math.sin(be)*Ct;he.position.set(Xt,mt,Le),he.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0);const qt=Ae?1.15:st?.78:1;he.scale.setScalar(qt),h.add(he),x.push({mesh:he,baseX:Xt,baseY:mt,depthZ:Le,palColor:we,speed:.65+Math.random()*1.2,amplitude:.22+Math.random()*.38,rotSpeedX:(Math.random()-.5)*.016,rotSpeedY:(Math.random()-.5)*.016,phase:Math.random()*Math.PI*2,parallaxFactor:Ae?.9:st?.25:.55,isWire:V})}const lt=ie?150:400,Qe=new Float32Array(lt*3),_t=new Float32Array(lt*3),Je=[],N=new vt;for(let xe=0;xe<lt;xe++)Qe[xe*3]=(Math.random()-.5)*45,Qe[xe*3+1]=(Math.random()-.5)*28,Qe[xe*3+2]=(Math.random()-.5)*30-8,N.set(Me[xe%Me.length]),_t[xe*3]=N.r,_t[xe*3+1]=N.g,_t[xe*3+2]=N.b,Je.push({x:(Math.random()-.5)*.004,y:(Math.random()-.5)*.004,z:(Math.random()-.5)*.002});S=Qe;const T=new Vn;T.setAttribute("position",new Hn(Qe,3)),T.setAttribute("color",new Hn(_t,3));const Y=new Q0({size:.12,vertexColors:!0,transparent:!0,opacity:.6,sizeAttenuation:!0});y=new gM(T,Y),u.add(y);const pe=new Float32Array(30),_e=new Vn;_e.setAttribute("position",new Hn(pe,3));const me=(new(void 0),null),We=new Z0({color:De,transparent:!0,opacity:.35});w=new mM(_e,We),u.add(w),R?window.addEventListener("scroll",ce,{passive:!0}):window.addEventListener("mousemove",K);const Pe=r.closest("section");window.addEventListener("scroll",de,{passive:!0});let Ie;Pe&&"IntersectionObserver"in window&&(Ie=new IntersectionObserver(([xe])=>{D=xe.isIntersecting},{threshold:0}),Ie.observe(Pe)),document.addEventListener("visibilitychange",ne),window.addEventListener("resize",le),a.updateColors=()=>{if(!m)return;const xe=Qr(),Xe=xe?eg:tg,we=xe?.35:.12,je=xe?8164863:2377448;u.fog&&u.fog.color.setHex(xe?988443:15331058),m.material.color.setHex(je),m.material.emissive.setHex(je),m.material.emissiveIntensity=we,_.material.color.setHex(je),We.color.setHex(je),A.intensity=xe?3.5:2,g.intensity=xe?2.8:1.8,x.forEach(({mesh:st,palColor:V},Le)=>{const re=Xe[Le%Xe.length];st.material.color.setHex(re),st.material.emissive&&(st.material.emissive.setHex(re),st.material.emissiveIntensity=we)});const Ae=new vt;for(let st=0;st<lt;st++)Ae.set(Xe[st%Xe.length]),_t[st*3]=Ae.r,_t[st*3+1]=Ae.g,_t[st*3+2]=Ae.b;y.geometry.attributes.color.needsUpdate=!0};const pt=new yM,ye=new j,Fe=new j;M?c.render(u,d):fe(),a.cleanup=()=>{v&&cancelAnimationFrame(v),window.removeEventListener("mousemove",K),window.removeEventListener("scroll",ce),window.removeEventListener("scroll",de),window.removeEventListener("resize",le),document.removeEventListener("visibilitychange",ne),Ie==null||Ie.disconnect(),[it,dt,...Gt].forEach(xe=>{try{xe.dispose()}catch{}}),[gt,z,Y,We].forEach(xe=>{try{xe.dispose()}catch{}}),x.forEach(({mesh:xe})=>{try{xe.material.dispose()}catch{}}),T.dispose(),_e.dispose();try{c.dispose()}catch{}}}catch(K){console.warn("WebGL init skipped:",K),r&&(r.style.display="none")}return()=>{var K;(K=a.cleanup)==null||K.call(a)}},[]),Ze.useEffect(()=>{if(n.current.updateColors){const r=setTimeout(()=>{var a,c;return(c=(a=n.current).updateColors)==null?void 0:c.call(a)},50);return()=>clearTimeout(r)}},[s]),ae.jsx("div",{className:d0.canvasWrap,"aria-hidden":"true",children:ae.jsx("canvas",{ref:e,className:d0.canvas,"aria-hidden":"true"})})}function ng(){const[s,e]=Ze.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return Ze.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)"),r=a=>e(a.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),s}const RM="_heroSection_zhpry_2",PM="_vignette_zhpry_31",bM="_spotlight_zhpry_48",LM="_heroContent_zhpry_79",DM="_heroTitle_zhpry_92",NM="_heroTitleLine_zhpry_106",IM="_heroTitleAccent_zhpry_111",UM="_heroLetter_zhpry_119",FM="_heroIntro_zhpry_139",OM="_heroActions_zhpry_152",ui={heroSection:RM,vignette:PM,spotlight:bM,heroContent:LM,heroTitle:DM,heroTitleLine:NM,heroTitleAccent:IM,heroLetter:UM,heroIntro:FM,heroActions:OM},Sf=["S","h","i","v","a","m"],kM=["G","u","p","t","a"];function h0({char:s,idx:e,lettersRef:n}){const r=Ze.useRef(null);return Ze.useEffect(()=>{n&&r.current&&(n.current[e]=r.current)},[]),ae.jsx("span",{ref:r,className:ui.heroLetter,"aria-hidden":"true",style:{"--letter-idx":e},children:s})}function zM({theme:s}){const e=Js(),n=ng(),r=Ze.useRef(null),a=Ze.useRef(null),c=Ze.useRef(null),u=Ze.useRef(null),d=Ze.useRef({}),h=Ze.useRef(null),m=Ze.useRef(null);return Si(h,e&&!n),Si(m,e&&!n),Ze.useEffect(()=>{if(!e||n)return;const _=r.current,x=a.current,y=c.current,S=u.current;if(!_||!x)return;function w(b){const F=_.getBoundingClientRect();x.style.setProperty("--mouse-x",b.clientX-F.left+"px"),x.style.setProperty("--mouse-y",b.clientY-F.top+"px"),x.style.opacity="1"}function A(){x.style.opacity="0"}_.addEventListener("mousemove",w),_.addEventListener("mouseleave",A);const g=Object.values(d.current);let v=[];function D(){v=g.map(b=>{const F=b.getBoundingClientRect();return{el:b,cx:F.left+F.width/2,cy:F.top+F.height/2,curX:0,curY:0,curRot:0,targetX:0,targetY:0,targetRot:0}})}setTimeout(D,700),window.addEventListener("resize",D),window.addEventListener("scroll",D,{passive:!0});function C(b){const F=_.getBoundingClientRect(),te=(b.clientX-(F.left+F.width/2))/(F.width/2),M=(b.clientY-(F.top+F.height/2))/(F.height/2),R=-te*6,ie=-M*6;y&&(y.style.transform=`translate3d(${R}px,${ie}px,0)`),S&&(S.style.transform=`translate3d(${R*.75}px,${ie*.75}px,0)`),D();const K=120,ce=18;v.forEach(de=>{const ne=de.cx-b.clientX,le=de.cy-b.clientY,B=Math.hypot(ne,le);if(B<K){const fe=(K-B)/K,se=fe*ce,U=Math.atan2(le,ne);de.targetX=Math.cos(U)*se,de.targetY=Math.sin(U)*se,de.targetRot=(ne>0?1:-1)*(fe*6)}else de.targetX=de.targetY=de.targetRot=0})}function L(){v.forEach(b=>{b.targetX=b.targetY=b.targetRot=0}),y&&(y.style.transform=""),S&&(S.style.transform="")}_.addEventListener("mousemove",C),_.addEventListener("mouseleave",L);let G;function O(){v.forEach(F=>{F.curX+=(F.targetX-F.curX)*.14,F.curY+=(F.targetY-F.curY)*.14,F.curRot+=(F.targetRot-F.curRot)*.14,Math.abs(F.curX)>.01||Math.abs(F.curY)>.01||Math.abs(F.curRot)>.01?F.el.style.transform=`translate3d(${F.curX.toFixed(2)}px,${F.curY.toFixed(2)}px,0) rotate(${F.curRot.toFixed(2)}deg)`:F.el.style.transform=""}),G=requestAnimationFrame(O)}return G=requestAnimationFrame(O),()=>{_.removeEventListener("mousemove",w),_.removeEventListener("mouseleave",A),_.removeEventListener("mousemove",C),_.removeEventListener("mouseleave",L),window.removeEventListener("resize",D),window.removeEventListener("scroll",D),cancelAnimationFrame(G)}},[e,n]),ae.jsxs("section",{className:ui.heroSection,id:"home",ref:r,children:[ae.jsx(CM,{theme:s}),ae.jsx("div",{className:ui.vignette,"aria-hidden":"true"}),ae.jsx("div",{className:ui.spotlight,id:"hero-spotlight",ref:a,"aria-hidden":"true"}),ae.jsxs("div",{className:ui.heroContent,children:[ae.jsxs("h1",{className:ui.heroTitle,"aria-label":"Shivam Gupta",children:[ae.jsx("span",{className:ui.heroTitleLine,"aria-hidden":"true",children:Sf.map((_,x)=>ae.jsx(h0,{char:_,idx:x,lettersRef:d},x))}),ae.jsx("span",{className:`${ui.heroTitleLine} ${ui.heroTitleAccent}`,"aria-hidden":"true",children:kM.map((_,x)=>ae.jsx(h0,{char:_,idx:x+Sf.length,lettersRef:d},x+Sf.length))})]}),ae.jsx("p",{className:ui.heroIntro,ref:c,id:"hero-intro-text",children:"Full-stack web developer and computer engineering student in Navi Mumbai. I build React and Node.js products, some powered by AI."}),ae.jsxs("div",{className:ui.heroActions,ref:u,id:"hero-actions-bar",children:[ae.jsx("a",{ref:h,href:"#projects",className:"btn btn-primary",children:"View projects"}),ae.jsx("a",{ref:m,href:"#contact",className:"btn btn-outline",children:"Contact me"})]})]})]})}const Nl={email:"devshivam.infinite@gmail.com",github:"https://github.com/Shivamgupta8689",linkedin:"https://linkedin.com/in/shivam-gupta-657005323"},BM=[{num:"01",title:"AI Smart Study Planner",description:"Uses Gemini AI to create personalized timetables, summarize notes, generate quizzes and track daily study progress.",github:"https://github.com/Shivamgupta8689/smart-study-planner",highlightLabel:"Highlight",highlight:"Real-time sync across sessions with secure sign-in.",tags:["React","Node.js","Firebase","Gemini AI"],image:null},{num:"02",title:"Real-Time Chat App",description:"Messaging with instant two-way communication and saved message history.",github:"https://github.com/Shivamgupta8689/Chat-application",highlightLabel:"Highlight",highlight:"JWT login, messages stored in MongoDB.",tags:["MongoDB","Express","React","Node.js","Socket.IO"],image:null},{num:"03",title:"Campus Lost & Found",description:"Students report and recover lost items, with private real-time chat.",github:"https://github.com/Shivamgupta8689/lost-and-found-system",highlightLabel:"Highlight",highlight:"Chats are removed automatically once an item is claimed.",tags:["React","Node.js","Firebase","Socket.IO"],image:null},{num:"04",title:"Blog Application",description:"Users securely create, edit, delete and manage posts.",github:"https://github.com/Shivamgupta8689/blog_website2",highlightLabel:"Recognition",highlight:"Won Best User Experience at the Inovatex college competition.",tags:["MongoDB","Express","React","Node.js","Material UI"],image:null}],HM=[{date:"Nov 2025 – Feb 2026",title:"Frontend Developer",company:"MyEZZ",description:"Redesigned UI flows, built responsive React components, and worked with the backend team to fix security issues and recurring bugs."},{date:"Jun – Aug 2024",title:"Data Analytics Intern",company:"IBM SkillsBuild",description:"Analyzed large datasets with Python, SQL and Excel, and built dashboards to share key metrics."},{date:"2023 – 2027",title:"B.E. Computer Engineering",company:"Lokmanya Tilak College of Engineering",description:"CGPA 9.3 / 10, topped Semester 3 with a 10.0."},{date:"2025 – 2026",title:"Leadership & Community",company:"Coding Club & GFG Chapter",description:"President of the Coding Club and Technical Head of the GFG Chapter. Organized contests and workshops, mentored juniors."},{date:"Hackathons",title:"Competitive Milestones",company:"Quasar 4.0 & Incuverse",description:"Finalist at Quasar 4.0 and Incuverse inter-college hackathons."}],VM=[{name:"Languages",skills:[{label:"Java",icon:"FaJava"},{label:"Python",icon:"SiPython"},{label:"C",icon:"SiC"},{label:"JavaScript",icon:"SiJavascript"}]},{name:"Frontend",skills:[{label:"HTML",icon:"SiHtml5"},{label:"CSS",icon:"SiCss3"},{label:"React.js",icon:"SiReact"},{label:"Material UI",icon:"SiMui"},{label:"Responsive Design",icon:"MdDevices"}]},{name:"Backend and databases",skills:[{label:"Node.js",icon:"SiNodedotjs"},{label:"Express.js",icon:"SiExpress"},{label:"REST APIs",icon:"TbApi"},{label:"Socket.IO",icon:"SiSocketdotio"},{label:"MySQL",icon:"SiMysql"},{label:"MongoDB",icon:"SiMongodb"},{label:"Firebase",icon:"SiFirebase"}]},{name:"Tools",skills:[{label:"Git",icon:"SiGit"},{label:"GitHub",icon:"SiGithub"},{label:"Postman",icon:"SiPostman"},{label:"VS Code",icon:"VscVscode"},{label:"Gemini AI",icon:"SiGooglegemini"}]}],GM="Full-stack web developer and computer engineering student at Lokmanya Tilak College of Engineering in Navi Mumbai (CGPA 9.3/10, topping Semester 3 with 10.0). Focuses on building scalable React and Node.js products, including AI-integrated applications. Active leader serving as President of the Coding Club and Technical Head of the GFG Chapter, and a finalist at the Quasar 4.0 and Incuverse hackathons.";function ic(s=.12){const e=Ze.useRef(null),n=typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;return Ze.useEffect(()=>{const r=e.current;if(!r)return;if(n){r.classList.add("is-visible"),r.style.opacity="1";return}if(!("IntersectionObserver"in window)){r.classList.add("is-visible");return}const a=new IntersectionObserver(([c])=>{c.isIntersecting&&(r.classList.add("is-visible"),a.disconnect())},{threshold:s});return a.observe(r),()=>a.disconnect()},[]),e}const WM="_section_xnugh_1",jM="_bio_xnugh_6",XM="_timelineTable_xnugh_14",qM="_timelineRow_xnugh_19",YM="_timelineDate_xnugh_28",$M="_timelineDetail_xnugh_35",KM="_timelineTitle_xnugh_37",ZM="_roleCompany_xnugh_46",xr={section:WM,bio:jM,timelineTable:XM,timelineRow:qM,timelineDate:YM,timelineDetail:$M,timelineTitle:KM,roleCompany:ZM};function QM(){const s=ic();return ae.jsxs("section",{id:"about",className:xr.section,children:[ae.jsx("div",{className:"section-glow",children:ae.jsx("div",{className:"section-eyebrow",children:"ABOUT"})}),ae.jsxs("div",{ref:s,className:"reveal",children:[ae.jsx("p",{className:xr.bio,children:GM}),ae.jsx("div",{className:xr.timelineTable,children:HM.map((e,n)=>ae.jsxs("div",{className:xr.timelineRow,children:[ae.jsx("div",{className:xr.timelineDate,children:e.date}),ae.jsxs("div",{className:xr.timelineDetail,children:[ae.jsx("h3",{className:xr.timelineTitle,children:e.title}),ae.jsx("div",{className:xr.roleCompany,children:e.company}),ae.jsx("p",{children:e.description})]})]},n))})]})]})}const JM="_projectRow_1mqxi_1",eE="_projectSummary_1mqxi_10",tE="_titleWrap_1mqxi_24",nE="_projectNum_1mqxi_31",iE="_projectTitle_1mqxi_39",rE="_projectToggle_1mqxi_48",sE="_projectBody_1mqxi_68",oE="_screenshotWrap_1mqxi_76",aE="_screenshotImg_1mqxi_81",lE="_gradientPlaceholder_1mqxi_94",cE="_projectLeft_1mqxi_108",uE="_githubLink_1mqxi_115",fE="_projectRight_1mqxi_131",dE="_highlightBox_1mqxi_137",hE="_highlightLabel_1mqxi_144",pE="_highlightText_1mqxi_154",mE="_techTags_1mqxi_161",gE="_tag_1mqxi_168",an={projectRow:JM,projectSummary:eE,titleWrap:tE,projectNum:nE,projectTitle:iE,projectToggle:rE,projectBody:sE,screenshotWrap:oE,screenshotImg:aE,gradientPlaceholder:lE,projectLeft:cE,githubLink:uE,projectRight:fE,highlightBox:dE,highlightLabel:hE,highlightText:pE,techTags:mE,tag:gE},p0=[["#2446E8","#7C3AED"],["#0891B2","#2446E8"],["#7C3AED","#DB2777"],["#DB2777","#D97706"]];function _E({title:s,pairIdx:e}){const[n,r]=p0[e%p0.length];return ae.jsx("div",{className:an.gradientPlaceholder,style:{background:`linear-gradient(135deg, ${n} 0%, ${r} 100%)`},role:"img","aria-label":s})}function vE({project:s,defaultOpen:e=!1,index:n=0}){const r=Ze.useRef(null),a=Ze.useRef(null),c=Ze.useRef(null),u=Js();return Si(c,u),Ze.useEffect(()=>{const d=r.current;if(!d)return;function h(){a.current&&(a.current.textContent=d.open?"–":"+"),d.dispatchEvent(new CustomEvent("projecttoggle",{bubbles:!0,detail:{open:d.open}}))}return d.addEventListener("toggle",h),()=>d.removeEventListener("toggle",h)},[]),ae.jsxs("details",{ref:r,className:an.projectRow,defaultOpen:e,children:[ae.jsxs("summary",{className:an.projectSummary,children:[ae.jsxs("div",{className:an.titleWrap,children:[ae.jsx("span",{className:an.projectNum,children:s.num}),ae.jsx("h3",{className:an.projectTitle,children:s.title})]}),ae.jsx("span",{ref:a,className:an.projectToggle,"aria-hidden":"true",children:e?"–":"+"})]}),ae.jsxs("div",{className:an.projectBody,children:[ae.jsx("div",{className:an.screenshotWrap,children:s.image?ae.jsx("img",{src:s.image,alt:`Screenshot of ${s.title}`,className:an.screenshotImg,loading:"lazy"}):ae.jsx(_E,{title:s.title,pairIdx:n})}),ae.jsxs("div",{className:an.projectLeft,children:[ae.jsx("p",{children:s.description}),ae.jsx("a",{ref:c,href:s.github,target:"_blank",rel:"noopener noreferrer",className:an.githubLink,children:"See on GitHub ↗"})]}),ae.jsxs("div",{className:an.projectRight,children:[ae.jsxs("div",{className:an.highlightBox,children:[ae.jsx("div",{className:an.highlightLabel,children:s.highlightLabel}),ae.jsx("div",{className:an.highlightText,children:s.highlight})]}),ae.jsx("div",{className:an.techTags,children:s.tags.map(d=>ae.jsx("span",{className:an.tag,children:d},d))})]})]})]})}const xE="_section_9vlbe_1",yE="_projectsIndex_9vlbe_6",m0={section:xE,projectsIndex:yE};function SE(){const s=ic();return ae.jsxs("section",{id:"projects",className:m0.section,children:[ae.jsx("div",{className:"section-glow",children:ae.jsx("div",{className:"section-eyebrow",children:"PROJECTS"})}),ae.jsx("div",{ref:s,className:`reveal ${m0.projectsIndex}`,children:BM.map((e,n)=>ae.jsx(vE,{project:e,defaultOpen:n===0,index:n},e.num))})]})}var ig={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g0=Zr.createContext&&Zr.createContext(ig),ME=["attr","size","title"];function EE(s,e){if(s==null)return{};var n,r,a=wE(s,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(s,n)&&(a[n]=s[n])}return a}function wE(s,e){if(s==null)return{};var n={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(e.indexOf(r)!==-1)continue;n[r]=s[r]}return n}function Zl(){return Zl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Zl.apply(null,arguments)}function _0(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Ql(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_0(Object(n),!0).forEach(function(r){TE(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):_0(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function TE(s,e,n){return(e=AE(e))in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function AE(s){var e=CE(s,"string");return typeof e=="symbol"?e:e+""}function CE(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function rg(s){return s&&s.map((e,n)=>Zr.createElement(e.tag,Ql({key:n},e.attr),rg(e.child)))}function jt(s){return e=>Zr.createElement(RE,Zl({attr:Ql({},s.attr)},e),rg(s.child))}function RE(s){var e=n=>{var r=s.attr,a=s.size,c=s.title,u=EE(s,ME),d=a||n.size||"1em",h;return n.className&&(h=n.className),s.className&&(h=(h?h+" ":"")+s.className),Zr.createElement("svg",Zl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:h,style:Ql(Ql({color:s.color||n.color},n.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Zr.createElement("title",null,c),s.children)};return g0!==void 0?Zr.createElement(g0.Consumer,null,n=>e(n)):e(ig)}function PE(s){return jt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(s)}function bE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"},child:[]}]})(s)}function LE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(s)}function DE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(s)}function NE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(s)}function IE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(s)}function UE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(s)}function FE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"},child:[]}]})(s)}function OE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(s)}function kE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(s)}function zE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(s)}function BE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"},child:[]}]})(s)}function HE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},child:[]}]})(s)}function VE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"},child:[]}]})(s)}function GE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"},child:[]}]})(s)}function WE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(s)}function jE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"},child:[]}]})(s)}function XE(s){return jt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"},child:[]}]})(s)}function qE(s){return jt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z"},child:[]}]})(s)}function YE(s){return jt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 13h5"},child:[]},{tag:"path",attr:{d:"M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"},child:[]},{tag:"path",attr:{d:"M20 8v8"},child:[]},{tag:"path",attr:{d:"M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"},child:[]}]})(s)}function $E(s){return jt({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M15.434 1.72887L12.14 0.144875C12.002 0.078875 11.855 0.046875 11.709 0.046875C11.353 0.046875 11.18 0.211875 11.155 0.228875C11.073 0.270875 11.005 0.337875 11.004 0.338875L4.698 6.08888L1.951 4.00488C1.832 3.91388 1.69 3.86987 1.548 3.86987C1.387 3.86987 1.226 3.92788 1.1 4.04288L0.219 4.84387C0.074 4.97587 0.001 5.15688 0.001 5.33687C0.001 5.51687 0.073 5.69688 0.218 5.82888L2.6 8.00088L0.217 10.1719C0.072 10.3039 0 10.4839 0 10.6639C0 10.8439 0.073 11.0249 0.218 11.1569L1.099 11.9579C1.226 12.0729 1.386 12.1309 1.547 12.1309C1.688 12.1309 1.83 12.0859 1.95 11.9959L4.697 9.91187L11.003 15.6619C11.003 15.6619 11.072 15.7299 11.155 15.7719C11.179 15.7889 11.353 15.9529 11.709 15.9529C11.855 15.9529 12.003 15.9209 12.141 15.8549L15.435 14.2709C15.781 14.1049 16.001 13.7539 16.001 13.3699V2.62888C16.001 2.24487 15.781 1.89488 15.435 1.72787L15.434 1.72887ZM7.217 7.99988L12.002 4.36987V11.6299L7.217 7.99988Z"},child:[]}]})(s)}const KE="_section_34gj1_1",ZE="_skillsWrapper_34gj1_6",QE="_skillGroup_34gj1_14",JE="_groupName_34gj1_20",e3="_tileGrid_34gj1_28",t3="_tile_34gj1_28",Vs={section:KE,skillsWrapper:ZE,skillGroup:QE,groupName:JE,tileGrid:e3,tile:t3},n3={FaJava:PE,SiPython:DE,SiC:XE,SiJavascript:kE,SiHtml5:zE,SiCss3:jE,SiReact:LE,SiMui:FE,MdDevices:qE,SiNodedotjs:IE,SiExpress:WE,TbApi:YE,SiSocketdotio:bE,SiMysql:UE,SiMongodb:OE,SiFirebase:GE,SiGit:VE,SiGithub:HE,SiPostman:NE,VscVscode:$E,SiGooglegemini:BE};function i3(){const s=ic();return ae.jsxs("section",{id:"skills",className:Vs.section,children:[ae.jsx("div",{className:"section-glow",children:ae.jsx("div",{className:"section-eyebrow",children:"SKILLS"})}),ae.jsx("div",{ref:s,className:`reveal ${Vs.skillsWrapper}`,children:VM.map(e=>ae.jsxs("div",{className:Vs.skillGroup,children:[ae.jsx("h3",{className:Vs.groupName,children:e.name}),ae.jsx("div",{className:Vs.tileGrid,children:e.skills.map(n=>{const r=n3[n.icon];return ae.jsxs("div",{className:Vs.tile,children:[r?ae.jsx(r,{size:32,"aria-hidden":"true",style:{fill:"currentColor"}}):null,ae.jsx("span",{children:n.label})]},n.label)})})]},e.name))})]})}const r3="_formContainer_14jg3_1",s3="_collapsed_14jg3_8",o3="_expanded_14jg3_19",a3="_form_14jg3_1",l3="_formGroup_14jg3_35",c3="_label_14jg3_41",u3="_input_14jg3_50",f3="_textarea_14jg3_51",d3="_invalid_14jg3_77",h3="_fieldError_14jg3_81",p3="_submitBtn_14jg3_90",m3="_errorBanner_14jg3_118",g3="_successMsg_14jg3_142",Vt={formContainer:r3,collapsed:s3,expanded:o3,form:a3,formGroup:l3,label:c3,input:u3,textarea:f3,invalid:d3,fieldError:h3,submitBtn:p3,errorBanner:m3,successMsg:g3},_3="";function v3(s){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).toLowerCase())}function x3({isOpen:s,toggleBtnRef:e}){const n=Ze.useRef(null),r=Ze.useRef(null),[a,c]=Ze.useState(""),[u,d]=Ze.useState(""),[h,m]=Ze.useState(""),[_,x]=Ze.useState(""),[y,S]=Ze.useState(""),[w,A]=Ze.useState(""),[g,v]=Ze.useState(!1),[D,C]=Ze.useState(!1),[L,G]=Ze.useState("");Ze.useEffect(()=>{const b=n.current;b&&(s?b.removeAttribute("inert"):b.setAttribute("inert",""))},[s]),Ze.useEffect(()=>{if(s&&r.current){const b=setTimeout(()=>{var F;return(F=r.current)==null?void 0:F.focus()},300);return()=>clearTimeout(b)}},[s]),Ze.useEffect(()=>{const b=n.current;if(!b)return;function F(te){var M;(te.key==="Escape"||te.key==="Esc")&&s&&(te.stopPropagation(),(M=e==null?void 0:e.current)==null||M.click(),setTimeout(()=>{var R;return(R=e==null?void 0:e.current)==null?void 0:R.focus()},10))}return b.addEventListener("keydown",F),()=>b.removeEventListener("keydown",F)},[s,e]);async function O(b){b.preventDefault(),x(""),S(""),A(""),G("");const F=b.target.querySelector('input[name="_gotcha"]');if(F&&F.value.trim()!=="")return;let te=!0;if(a.trim()||(x("Please enter your name."),te=!1),(!u.trim()||!v3(u))&&(S("Enter a valid email address."),te=!1),h.trim()||(A("Please enter your message."),te=!1),!!te){v(!0);try{const M=await fetch(_3,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:a,email:u,message:h})});if(M.ok)C(!0),setTimeout(()=>{var R;(R=e==null?void 0:e.current)==null||R.click()},3e3);else throw new Error("Server returned "+M.status)}catch{v(!1),G("devshivam.infinite@gmail.com")}}}return ae.jsx("div",{ref:n,id:"contact-form-container",className:`${Vt.formContainer} ${s?Vt.expanded:Vt.collapsed}`,"aria-hidden":!s,children:D?ae.jsx("p",{className:Vt.successMsg,children:"Thanks, I will reply to you soon."}):ae.jsxs("form",{onSubmit:O,className:Vt.form,noValidate:!0,children:[ae.jsx("input",{type:"text",name:"_gotcha","aria-hidden":"true",tabIndex:-1,autoComplete:"off",style:{display:"none"}}),ae.jsxs("div",{className:Vt.formGroup,children:[ae.jsx("label",{className:Vt.label,htmlFor:"contact-name",children:"Name"}),ae.jsx("input",{ref:r,id:"contact-name",name:"name",type:"text",className:`${Vt.input} ${_?Vt.invalid:""}`,placeholder:"Shivam Gupta",autoComplete:"name",required:!0,value:a,onChange:b=>{c(b.target.value),x("")}}),ae.jsx("div",{className:Vt.fieldError,"aria-live":"polite",children:_})]}),ae.jsxs("div",{className:Vt.formGroup,children:[ae.jsx("label",{className:Vt.label,htmlFor:"contact-email",children:"Email"}),ae.jsx("input",{id:"contact-email",name:"email",type:"email",className:`${Vt.input} ${y?Vt.invalid:""}`,placeholder:"shivam@example.com",autoComplete:"email",required:!0,value:u,onChange:b=>{d(b.target.value),S("")}}),ae.jsx("div",{className:Vt.fieldError,"aria-live":"polite",children:y})]}),ae.jsxs("div",{className:Vt.formGroup,children:[ae.jsx("label",{className:Vt.label,htmlFor:"contact-message",children:"Message"}),ae.jsx("textarea",{id:"contact-message",name:"message",className:`${Vt.textarea} ${w?Vt.invalid:""}`,placeholder:"Tell me about your project or opportunity...",rows:5,required:!0,value:h,onChange:b=>{m(b.target.value),A("")}}),ae.jsx("div",{className:Vt.fieldError,"aria-live":"polite",children:w})]}),ae.jsx("button",{type:"submit",className:Vt.submitBtn,disabled:g,children:g?"Sending…":"Send message"}),L&&ae.jsxs("div",{className:Vt.errorBanner,"aria-live":"assertive",children:["Could not send. Email me directly at"," ",ae.jsx("a",{href:`mailto:${L}`,children:L})]})]})})}const y3="_section_jkrt9_1",S3="_emailLink_jkrt9_6",M3="_socialLinks_jkrt9_22",E3="_toggleBtn_jkrt9_43",Il={section:y3,emailLink:S3,socialLinks:M3,toggleBtn:E3};function w3(){const[s,e]=Ze.useState(!1),n=Js(),r=Ze.useRef(null),a=Ze.useRef(null),c=Ze.useRef(null),u=Ze.useRef(null),d=ic();Si(r,n),Si(a,n),Si(c,n),Si(u,n);function h(){e(m=>!m)}return ae.jsxs("section",{id:"contact",className:Il.section,children:[ae.jsx("div",{className:"section-glow",children:ae.jsx("div",{className:"section-eyebrow",children:"CONTACT"})}),ae.jsxs("div",{ref:d,className:"reveal",children:[ae.jsx("a",{ref:a,href:`mailto:${Nl.email}`,className:Il.emailLink,children:Nl.email}),ae.jsxs("div",{className:Il.socialLinks,children:[ae.jsx("a",{ref:c,href:Nl.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub ↗"}),ae.jsx("a",{ref:u,href:Nl.linkedin,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn ↗"})]}),ae.jsx("button",{ref:r,className:Il.toggleBtn,"aria-expanded":s,"aria-controls":"contact-form-container",id:"contact-toggle-btn",type:"button",onClick:h,children:s?"Close form":"Send me a message"}),ae.jsx(x3,{isOpen:s,toggleBtnRef:r})]})]})}const T3="_footer_1degq_1",A3="_footerInner_1degq_6",C3="_copy_1degq_14",R3="_themeBtn_1degq_21",Ul={footer:T3,footerInner:A3,copy:C3,themeBtn:R3};function P3(){const{cycleTheme:s}=v0(),e=Js(),n=Ze.useRef(null);return Si(n,e),ae.jsx("footer",{className:Ul.footer,children:ae.jsxs("div",{className:`${Ul.footerInner} container`,children:[ae.jsx("div",{className:Ul.copy,children:"© 2026 All rights reserved. Made with ❤️"}),ae.jsxs("button",{ref:n,className:Ul.themeBtn,"aria-label":"Switch theme",onClick:s,children:[ae.jsx("span",{"aria-hidden":"true",children:"◐"}),ae.jsx("span",{children:"Switch theme"})]})]})})}const b3="_dot_jbng2_1",L3="_ring_jbng2_17",D3="_hoverLink_jbng2_46",N3="_hoverProject_jbng2_53",I3="_activeClick_jbng2_61",zi={dot:b3,ring:L3,hoverLink:D3,hoverProject:N3,activeClick:I3};function U3(){const s=Js(),e=ng(),n=Ze.useRef(null),r=Ze.useRef(null);return Ze.useEffect(()=>{if(!s||e)return;const a=n.current,c=r.current;if(!a||!c)return;document.body.classList.add("custom-cursor-active"),a.style.display="block",c.style.display="flex";let u=-100,d=-100,h=-100,m=-100,_=!1,x;function y(te){u=te.clientX,d=te.clientY,_||(h=u,m=d,_=!0),a.style.transform=`translate3d(${u}px,${d}px,0)`}function S(){c.classList.add(zi.activeClick)}function w(){c.classList.remove(zi.activeClick)}function A(){a.style.opacity="0",c.style.opacity="0",_=!1}function g(){a.style.opacity="1",c.style.opacity="1"}window.addEventListener("mousemove",y),window.addEventListener("mousedown",S),window.addEventListener("mouseup",w),document.addEventListener("mouseleave",A),document.addEventListener("mouseenter",g);function v(){_&&(h+=(u-h)*.18,m+=(d-m)*.18,c.style.transform=`translate3d(${h}px,${m}px,0)`),x=requestAnimationFrame(v)}x=requestAnimationFrame(v);const D=document.querySelectorAll("a, button, .skill-tile, .hero-letter");function C(){c.dataset.hoverProject||(c.classList.add(zi.hoverLink),a.style.opacity="0.6")}function L(){c.classList.remove(zi.hoverLink),a.style.opacity="1"}D.forEach(te=>{te.addEventListener("mouseenter",C),te.addEventListener("mouseleave",L)});function G(te){const M=te.currentTarget.closest("details");c.classList.remove(zi.hoverLink),c.classList.add(zi.hoverProject),c.dataset.hoverProject="true",c.textContent=M!=null&&M.open?"Close":"Open",a.style.opacity="0"}function O(){c.classList.remove(zi.hoverProject),delete c.dataset.hoverProject,c.textContent="",a.style.opacity="1"}function b(te){c.dataset.hoverProject&&(c.textContent=te.detail.open?"Close":"Open")}const F=document.querySelectorAll("details summary");return F.forEach(te=>{te.addEventListener("mouseenter",G),te.addEventListener("mouseleave",O)}),document.addEventListener("projecttoggle",b),()=>{document.body.classList.remove("custom-cursor-active"),cancelAnimationFrame(x),window.removeEventListener("mousemove",y),window.removeEventListener("mousedown",S),window.removeEventListener("mouseup",w),document.removeEventListener("mouseleave",A),document.removeEventListener("mouseenter",g),document.removeEventListener("projecttoggle",b),D.forEach(te=>{te.removeEventListener("mouseenter",C),te.removeEventListener("mouseleave",L)}),F.forEach(te=>{te.removeEventListener("mouseenter",G),te.removeEventListener("mouseleave",O)})}},[s,e]),!s||e?null:ae.jsxs(ae.Fragment,{children:[ae.jsx("div",{ref:n,className:zi.dot,"aria-hidden":"true"}),ae.jsx("div",{ref:r,className:zi.ring,"aria-hidden":"true"})]})}function F3(){const{theme:s}=v0();return ae.jsxs(ae.Fragment,{children:[ae.jsx(U3,{}),ae.jsx(uv,{}),ae.jsxs("main",{children:[ae.jsx(zM,{theme:s}),ae.jsx(QM,{}),ae.jsx(SE,{}),ae.jsx(i3,{}),ae.jsx(w3,{})]}),ae.jsx(P3,{})]})}q_.createRoot(document.getElementById("root")).render(ae.jsx(Ze.StrictMode,{children:ae.jsx(F3,{})}));
