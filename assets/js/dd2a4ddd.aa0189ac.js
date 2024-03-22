/*! For license information please see dd2a4ddd.aa0189ac.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[351005],{956015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(824246),s=r(511151);const o={id:"plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder"},a=void 0,i={id:"reference/plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder",source:"@site/../docs/reference/plugin-catalog-backend.catalogbuilder.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder",permalink:"/docs/reference/plugin-catalog-backend.catalogbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.catalogbuilder.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder"}},c={},l=[{value:"Methods",id:"methods",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:(0,n.jsx)(t.code,{children:"CatalogBuilder"})})]}),"\n",(0,n.jsx)(t.p,{children:"A builder that helps wire up all of the component parts of the catalog."}),"\n",(0,n.jsx)(t.p,{children:"The touch points where you can replace or extend behavior are as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Entity policies can be added or replaced. These are automatically run after the processors' pre-processing steps. All policies are given the chance to inspect the entity, and all of them have to pass in order for the entity to be considered valid from an overall point of view. - Location analyzers can be added. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf. - Placeholder resolvers can be replaced or added. These run on the raw structured data between the parsing and pre-processing steps, to replace dollar-prefixed entries with their actual values (like $file). - Field format validators can be replaced. These check the format of individual core fields such as metadata.name, to ensure that they adhere to certain rules. - Processors can be added or replaced. These implement the functionality of reading, parsing, validating, and processing the entity data before it is persisted in the catalog."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class CatalogBuilder \n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy",children:"addEntityPolicy(policies)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Adds policies that are used to validate entities between the pre- processing and post-processing stages. All such policies must pass for the entity to be considered valid."}),(0,n.jsx)(t.p,{children:"If what you want to do is to replace the rules for what format is allowed in various core entity fields (such as metadata.name), you may want to use  instead."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",children:"addEntityProvider(providers)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds or replaces entity providers. These are responsible for bootstrapping the list of entities out of original data sources. For example, there is one entity source for the config locations, and one for the database stored locations. If you ingest entities out of a third party system, you may want to implement that in terms of an entity provider as well."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers",children:"addLocationAnalyzers(analyzers)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds Location Analyzers. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addpermissionrules",children:"addPermissionRules(permissionRules)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Adds additional permission rules. Permission rules are used to evaluate catalog resources against queries. See ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addpermissions",children:"addPermissions(permissions)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds additional permissions. See ."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addprocessor",children:"addProcessor(processors)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds entity processors. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.build",children:"build()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Wires up and returns all of the component parts of the catalog"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.create",children:"create(env)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{children:"Creates a catalog builder."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.getdefaultprocessors",children:"getDefaultProcessors()"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Returns the default list of entity processors. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog. Changing the order of processing can give more control to custom processors."}),(0,n.jsx)(t.p,{children:"Consider using with "})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.replaceentitypolicies",children:"replaceEntityPolicies(policies)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets what policies to use for validation of entities between the pre- processing and post-processing stages. All such policies must pass for the entity to be considered valid."}),(0,n.jsx)(t.p,{children:"If what you want to do is to replace the rules for what format is allowed in various core entity fields (such as metadata.name), you may want to use  instead."}),(0,n.jsx)(t.p,{children:"This function replaces the default set of policies; use with care."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.replaceprocessors",children:"replaceProcessors(processors)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets what entity processors to use. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog."}),(0,n.jsx)(t.p,{children:"This function replaces the default set of processors, consider using with ; use with care."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setallowedlocationtypes",children:"setAllowedLocationTypes(allowedLocationTypes)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Sets up the allowed location types from being registered via the location service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setentitydataparser",children:"setEntityDataParser(parser)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets up the catalog to use a custom parser for entity data."}),(0,n.jsx)(t.p,{children:"This is the function that gets called immediately after some raw entity specification data has been read from a remote source, and needs to be parsed and emitted as structured data."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.seteventbroker",children:"setEventBroker(broker)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Enables the publishing of events for conflicts in the DefaultProcessingDatabase"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setfieldformatvalidators",children:"setFieldFormatValidators(validators)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets the validator function to use for one or more special fields of an entity. This is useful if the default rules for formatting of fields are not sufficient."}),(0,n.jsx)(t.p,{children:"This function has no effect if used together with ."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setlocationanalyzer",children:"setLocationAnalyzer(locationAnalyzer)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Overwrites the default location analyzer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",children:"setPlaceholderResolver(key, resolver)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds, or overwrites, a handler for placeholders (e.g. $file) in entity definition files."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setprocessinginterval",children:"setProcessingInterval(processingInterval)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Overwrites the default processing interval function used to spread entity updates in the catalog."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setprocessingintervalseconds",children:"setProcessingIntervalSeconds(seconds)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Processing interval determines how often entities should be processed. Seconds provided will be multiplied by 1.5 The default processing interval is 100-150 seconds. setting this too low will potentially deplete request quotas to upstream services."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.subscribe",children:"subscribe(options)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.uselegacysingleprocessorvalidation",children:"useLegacySingleProcessorValidation()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Enables the legacy behaviour of canceling validation early whenever only a single processor declares an entity kind to be valid."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},371426:(e,t,r)=>{var n=r(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||p}function x(){}function j(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=b.prototype;var m=j.prototype=new x;m.constructor=j,g(m,b.prototype),m.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var s,o={},a=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=t[s]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===o[s]&&(o[s]=c[s]);return{$$typeof:r,type:e,key:a,ref:i,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,s,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===o?"."+C(c,0):o,v(a)?(s="",null!=e&&(s=e.replace(E,"$&/")+"/"),R(a,t,s,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var d=o+C(i=e[l],l);c+=R(i,t,s,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)c+=R(i=i.value,t,s,d=o+C(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,r){if(null==e)return e;var n=[],s=0;return R(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},O={transition:null},I={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:O,ReactCurrentOwner:w};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=s,t.Profiler=a,t.PureComponent=j,t.StrictMode=o,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)k.call(t,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}return{$$typeof:r,type:e.type,key:o,ref:a,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(667294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);