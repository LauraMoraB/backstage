/*! For license information please see 1fc89fdd.59c7f3ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[416162],{717454:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=t(824246),o=t(511151);const u={id:"plugin-catalog-backend-module-ldap.defaultgrouptransformer",title:"defaultGroupTransformer()",description:"API reference for defaultGroupTransformer()"},a=void 0,c={id:"reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",title:"defaultGroupTransformer()",description:"API reference for defaultGroupTransformer()",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",permalink:"/docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.defaultgrouptransformer",title:"defaultGroupTransformer()",description:"API reference for defaultGroupTransformer()"}},l={},s=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",children:(0,n.jsx)(r.code,{children:"defaultGroupTransformer"})})]}),"\n",(0,n.jsx)(r.p,{children:"The default implementation of the transformation from an LDAP entry to a Group entity."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function defaultGroupTransformer(vendor: LdapVendor, config: GroupConfig, entry: SearchEntry): Promise<GroupEntity | undefined>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"vendor"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"config"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"entry"}),(0,n.jsx)(r.td,{children:"SearchEntry"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1",children:"GroupEntity"})," | undefined>"]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,u={},s=null,i=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:i,props:u,_owner:c.current}}r.Fragment=u,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function b(){}function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=_.prototype=new b;v.constructor=_,h(v,g.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,u={},a=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)x.call(r,o)&&!S.hasOwnProperty(o)&&(u[o]=r[o]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var s=Array(l),i=0;i<l;i++)s[i]=arguments[i+2];u.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===u[o]&&(u[o]=l[o]);return{$$typeof:t,type:e,key:a,ref:c,props:u,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,o,u,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case n:l=!0}}if(l)return a=a(l=e),e=""===u?"."+R(l,0):u,j(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),P(a,r,o,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),r.push(a)),1;if(l=0,u=""===u?".":u+":",j(e))for(var s=0;s<e.length;s++){var i=u+R(c=e[s],s);l+=P(c,r,o,i,a)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(c=e.next()).done;)l+=P(c=c.value,r,o,i=u+R(c,s++),a);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function $(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},G={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=a,r.PureComponent=_,r.StrictMode=u,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)x.call(r,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var i=0;i<s;i++)l[i]=arguments[i+2];o.children=l}return{$$typeof:t,type:e.type,key:u,ref:a,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return T.current.useCallback(e,r)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,r){return T.current.useEffect(e,r)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,r,t){return T.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return T.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return T.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return T.current.useMemo(e,r)},r.useReducer=function(e,r,t){return T.current.useReducer(e,r,t)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return T.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return T.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>a});var n=t(667294);const o={},u=n.createContext(o);function a(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);