import{r as s,R as X,k as Y,j as p,l as v,m as k,d as N}from"./index-Dt-lgo9U.js";import{g as Q,M as ee,T as ne,s as D,C as te,A as re,D as oe,P as ae,a as ie}from"./CanvasLoader-0zQ7Ek_n.js";import{r as se}from"./index-Chjiymov.js";import{S as ce}from"./SectionWrapper-CE3nHiwZ.js";import{s as I}from"./motion-D_uXpfKZ.js";import{n as ue,I as H,C as g}from"./index-DFLWir3U.js";class x{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const le=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,t)=>Promise.resolve(localStorage.setItem(n,t)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},h={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:le()},A=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},fe=(n,t="https://api.emailjs.com")=>{if(!n)return;const r=A(n);h.publicKey=r.publicKey,h.blockHeadless=r.blockHeadless,h.storageProvider=r.storageProvider,h.blockList=r.blockList,h.limitRate=r.limitRate,h.origin=r.origin||t},$=async(n,t,r={})=>{const o=await fetch(h.origin+n,{method:"POST",headers:r,body:t}),a=await o.text(),m=new x(o.status,a);if(o.ok)return m;throw m},B=(n,t,r)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},me=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},U=n=>n.webdriver||!n.languages||n.languages.length===0,V=()=>new x(451,"Unavailable For Headless Browser"),pe=(n,t)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},be=n=>{var t;return!((t=n.list)!=null&&t.length)||!n.watchVariable},ge=(n,t)=>n instanceof FormData?n.get(t):n[t],z=(n,t)=>{if(be(n))return!1;pe(n.list,n.watchVariable);const r=ge(t,n.watchVariable);return typeof r!="string"?!1:n.list.includes(r)},W=()=>new x(403,"Forbidden"),ye=(n,t)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},de=async(n,t,r)=>{const o=Number(await r.get(n)||0);return t-Date.now()+o},K=async(n,t,r)=>{if(!t.throttle||!r)return!1;ye(t.throttle,t.id);const o=t.id||n;return await de(o,t.throttle,r)>0?!0:(await r.set(o,Date.now().toString()),!1)},q=()=>new x(429,"Too Many Requests"),he=async(n,t,r,o)=>{const a=A(o),m=a.publicKey||h.publicKey,f=a.blockHeadless||h.blockHeadless,b=a.storageProvider||h.storageProvider,c={...h.blockList,...a.blockList},i={...h.limitRate,...a.limitRate};return f&&U(navigator)?Promise.reject(V()):(B(m,n,t),me(r),r&&z(c,r)?Promise.reject(W()):await K(location.pathname,i,b)?Promise.reject(q()):$("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:m,service_id:n,template_id:t,template_params:r}),{"Content-type":"application/json"}))},Te=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Oe=n=>typeof n=="string"?document.querySelector(n):n,ve=async(n,t,r,o)=>{const a=A(o),m=a.publicKey||h.publicKey,f=a.blockHeadless||h.blockHeadless,b=h.storageProvider||a.storageProvider,c={...h.blockList,...a.blockList},i={...h.limitRate,...a.limitRate};if(f&&U(navigator))return Promise.reject(V());const u=Oe(r);B(m,n,t),Te(u);const l=new FormData(u);return z(c,l)?Promise.reject(W()):await K(location.pathname,i,b)?Promise.reject(q()):(l.append("lib_version","4.4.1"),l.append("service_id",n),l.append("template_id",t),l.append("user_id",m),$("/api/v1.0/email/send-form",l))},Le={init:fe,send:he,sendForm:ve,EmailJSResponseStatus:x};function je(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var o,a,m,f,b=[],c=!0,i=!1;try{if(m=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;c=!1}else for(;!(c=(o=m.call(r)).done)&&(b.push(o.value),b.length!==t);c=!0);}catch(u){i=!0,a=u}finally{try{if(!c&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(i)throw a}}return b}}function we(n,t,r){return t=ke(t),t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function M(n,t){return xe(n)||je(n,t)||Z(n,t)||Ae()}function Ce(n){return Pe(n)||Re(n)||Z(n)||Se()}function Pe(n){if(Array.isArray(n))return R(n)}function xe(n){if(Array.isArray(n))return n}function Re(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Z(n,t){if(n){if(typeof n=="string")return R(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(n,t)}}function R(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=n[r];return o}function Se(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ee(n,t){if(typeof n!="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var o=r.call(n,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function ke(n){var t=Ee(n,"string");return typeof t=="symbol"?t:String(t)}var Ne=function(t,r){var o=new Set(r);return Object.assign.apply(Object,[{}].concat(Ce(Object.entries(t).filter(function(a){var m=M(a,1),f=m[0];return!o.has(f)}).map(function(a){var m=M(a,2),f=m[0],b=m[1];return we({},f,b)}))))};function S(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,o=Array(t);r<t;r++)o[r]=n[r];return o}function De(n){if(Array.isArray(n))return n}function Ie(n){if(Array.isArray(n))return S(n)}function He(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Me(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var o,a,m,f,b=[],c=!0,i=!1;try{if(m=(r=r.call(n)).next,t!==0)for(;!(c=(o=m.call(r)).done)&&(b.push(o.value),b.length!==t);c=!0);}catch(u){i=!0,a=u}finally{try{if(!c&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(i)throw a}}return b}}function _e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ge(n,t){return De(n)||Me(n,t)||J(n,t)||_e()}function _(n){return Ie(n)||He(n)||J(n)||Fe()}function J(n,t){if(n){if(typeof n=="string")return S(n,t);var r={}.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(n,t):void 0}}function $e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.wrapperElementType,o=r===void 0?"div":r,a=t.nodeMapper,m=a===void 0?function(u){return u}:a,f=t.methodNames,b=f===void 0?[]:f,c=t.initPropNames,i=c===void 0?[]:c;return s.forwardRef(function(u,l){var T=s.useRef(),L=s.useMemo(function(){var d=Object.fromEntries(i.filter(function(O){return u.hasOwnProperty(O)}).map(function(O){return[O,u[O]]}));return n(d)},[]);F(function(){L(m(T.current))},s.useLayoutEffect),F(function(){return L._destructor instanceof Function?L._destructor:void 0});var y=s.useCallback(function(d){for(var O=arguments.length,P=new Array(O>1?O-1:0),j=1;j<O;j++)P[j-1]=arguments[j];return L[d]instanceof Function?L[d].apply(L,P):void 0},[L]),w=s.useRef({});return Object.keys(Ne(u,[].concat(_(b),_(i)))).filter(function(d){return w.current[d]!==u[d]}).forEach(function(d){return y(d,u[d])}),w.current=u,s.useImperativeHandle(l,function(){return Object.fromEntries(b.map(function(d){return[d,function(){for(var O=arguments.length,P=new Array(O),j=0;j<O;j++)P[j]=arguments[j];return y.apply(void 0,[d].concat(P))}]}))},[y]),X.createElement(o,{ref:T})})}function F(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s.useEffect,r=s.useRef(),o=s.useRef(!1),a=s.useRef(!1),m=s.useState(0),f=Ge(m,2);f[0];var b=f[1];o.current&&(a.current=!0),t(function(){return o.current||(r.current=n(),o.current=!0),b(function(c){return c+1}),function(){a.current&&r.current&&r.current()}},[])}var Be=se();const e=Y(Be);var Ue={width:e.number,height:e.number,globeOffset:e.arrayOf(e.number),backgroundColor:e.string,backgroundImageUrl:e.string,globeImageUrl:e.string,bumpImageUrl:e.string,globeTileEngineUrl:e.func,showGlobe:e.bool,showGraticules:e.bool,showAtmosphere:e.bool,atmosphereColor:e.string,atmosphereAltitude:e.number,globeMaterial:e.object,onGlobeReady:e.func,onGlobeClick:e.func,onGlobeRightClick:e.func,pointsData:e.arrayOf(e.object),pointLat:e.oneOfType([e.number,e.string,e.func]),pointLng:e.oneOfType([e.number,e.string,e.func]),pointColor:e.oneOfType([e.string,e.func]),pointAltitude:e.oneOfType([e.number,e.string,e.func]),pointRadius:e.oneOfType([e.number,e.string,e.func]),pointResolution:e.number,pointsMerge:e.bool,pointsTransitionDuration:e.number,pointLabel:e.oneOfType([e.string,e.func]),onPointClick:e.func,onPointRightClick:e.func,onPointHover:e.func,arcsData:e.arrayOf(e.object),arcStartLat:e.oneOfType([e.number,e.string,e.func]),arcStartLng:e.oneOfType([e.number,e.string,e.func]),arcEndLat:e.oneOfType([e.number,e.string,e.func]),arcEndLng:e.oneOfType([e.number,e.string,e.func]),arcColor:e.oneOfType([e.string,e.arrayOf(e.string),e.func]),arcAltitude:e.oneOfType([e.number,e.string,e.func]),arcAltitudeAutoScale:e.oneOfType([e.number,e.string,e.func]),arcStroke:e.oneOfType([e.number,e.string,e.func]),arcCurveResolution:e.number,arcCircularResolution:e.number,arcDashLength:e.oneOfType([e.number,e.string,e.func]),arcDashGap:e.oneOfType([e.number,e.string,e.func]),arcDashInitialGap:e.oneOfType([e.number,e.string,e.func]),arcDashAnimateTime:e.oneOfType([e.number,e.string,e.func]),arcsTransitionDuration:e.number,arcLabel:e.oneOfType([e.string,e.func]),onArcClick:e.func,onArcRightClick:e.func,onArcHover:e.func,polygonsData:e.arrayOf(e.object),polygonGeoJsonGeometry:e.oneOfType([e.string,e.func]),polygonCapColor:e.oneOfType([e.string,e.func]),polygonCapMaterial:e.oneOfType([e.object,e.string,e.func]),polygonSideColor:e.oneOfType([e.string,e.func]),polygonSideMaterial:e.oneOfType([e.object,e.string,e.func]),polygonStrokeColor:e.oneOfType([e.string,e.func]),polygonAltitude:e.oneOfType([e.number,e.string,e.func]),polygonCapCurvatureResolution:e.oneOfType([e.number,e.string,e.func]),polygonsTransitionDuration:e.number,polygonLabel:e.oneOfType([e.string,e.func]),onPolygonClick:e.func,onPolygonRightClick:e.func,onPolygonHover:e.func,pathsData:e.array,pathPoints:e.oneOfType([e.array,e.string,e.func]),pathPointLat:e.oneOfType([e.number,e.string,e.func]),pathPointLng:e.oneOfType([e.number,e.string,e.func]),pathPointAlt:e.oneOfType([e.number,e.string,e.func]),pathResolution:e.number,pathColor:e.oneOfType([e.string,e.arrayOf(e.string),e.func]),pathStroke:e.oneOfType([e.number,e.string,e.func]),pathDashLength:e.oneOfType([e.number,e.string,e.func]),pathDashGap:e.oneOfType([e.number,e.string,e.func]),pathDashInitialGap:e.oneOfType([e.number,e.string,e.func]),pathDashAnimateTime:e.oneOfType([e.number,e.string,e.func]),pathTransitionDuration:e.number,pathLabel:e.oneOfType([e.string,e.func]),onPathClick:e.func,onPathRightClick:e.func,onPathHover:e.func,heatmapsData:e.array,heatmapPoints:e.oneOfType([e.array,e.string,e.func]),heatmapPointLat:e.oneOfType([e.number,e.string,e.func]),heatmapPointLng:e.oneOfType([e.number,e.string,e.func]),heatmapPointWeight:e.oneOfType([e.number,e.string,e.func]),heatmapBandwidth:e.oneOfType([e.number,e.string,e.func]),heatmapColorFn:e.oneOfType([e.string,e.func]),heatmapColorSaturation:e.oneOfType([e.number,e.string,e.func]),heatmapBaseAltitude:e.oneOfType([e.number,e.string,e.func]),heatmapTopAltitude:e.oneOfType([e.number,e.string,e.func]),heatmapsTransitionDuration:e.number,onHeatmapClick:e.func,onHeatmapRightClick:e.func,onHeatmapHover:e.func,hexBinPointsData:e.arrayOf(e.object),hexBinPointLat:e.oneOfType([e.number,e.string,e.func]),hexBinPointLng:e.oneOfType([e.number,e.string,e.func]),hexBinPointWeight:e.oneOfType([e.number,e.string,e.func]),hexBinResolution:e.number,hexMargin:e.oneOfType([e.number,e.func]),hexTopColor:e.func,hexSideColor:e.func,hexAltitude:e.oneOfType([e.number,e.func]),hexTopCurvatureResolution:e.number,hexBinMerge:e.bool,hexTransitionDuration:e.number,hexLabel:e.oneOfType([e.string,e.func]),onHexClick:e.func,onHexRightClick:e.func,onHexHover:e.func,hexPolygonsData:e.arrayOf(e.object),hexPolygonGeoJsonGeometry:e.oneOfType([e.string,e.func]),hexPolygonColor:e.oneOfType([e.string,e.func]),hexPolygonAltitude:e.oneOfType([e.number,e.string,e.func]),hexPolygonResolution:e.oneOfType([e.number,e.string,e.func]),hexPolygonMargin:e.oneOfType([e.number,e.string,e.func]),hexPolygonUseDots:e.oneOfType([e.bool,e.string,e.func]),hexPolygonCurvatureResolution:e.oneOfType([e.number,e.string,e.func]),hexPolygonDotResolution:e.oneOfType([e.number,e.string,e.func]),hexPolygonsTransitionDuration:e.number,hexPolygonLabel:e.oneOfType([e.string,e.func]),onHexPolygonClick:e.func,onHexPolygonRightClick:e.func,onHexPolygonHover:e.func,tilesData:e.arrayOf(e.object),tileLat:e.oneOfType([e.number,e.string,e.func]),tileLng:e.oneOfType([e.number,e.string,e.func]),tileAltitude:e.oneOfType([e.number,e.string,e.func]),tileWidth:e.oneOfType([e.number,e.string,e.func]),tileHeight:e.oneOfType([e.number,e.string,e.func]),tileUseGlobeProjection:e.oneOfType([e.bool,e.string,e.func]),tileMaterial:e.oneOfType([e.object,e.string,e.func]),tileCurvatureResolution:e.oneOfType([e.number,e.string,e.func]),tilesTransitionDuration:e.number,tileLabel:e.oneOfType([e.string,e.func]),onTileClick:e.func,onTileRightClick:e.func,onTileHover:e.func,particlesData:e.arrayOf(e.object),particlesList:e.oneOfType([e.string,e.func]),particleLat:e.oneOfType([e.number,e.string,e.func]),particleLng:e.oneOfType([e.number,e.string,e.func]),particleAltitude:e.oneOfType([e.number,e.string,e.func]),particlesSize:e.oneOfType([e.number,e.string,e.func]),particlesSizeAttenuation:e.oneOfType([e.bool,e.string,e.func]),particlesColor:e.oneOfType([e.string,e.func]),particlesTexture:e.oneOfType([e.string,e.func]),particleLabel:e.oneOfType([e.string,e.func]),onParticleClick:e.func,onParticleRightClick:e.func,onParticleHover:e.func,ringsData:e.arrayOf(e.object),ringLat:e.oneOfType([e.number,e.string,e.func]),ringLng:e.oneOfType([e.number,e.string,e.func]),ringAltitude:e.oneOfType([e.number,e.string,e.func]),ringColor:e.oneOfType([e.string,e.arrayOf(e.string),e.func]),ringResolution:e.number,ringMaxRadius:e.oneOfType([e.number,e.string,e.func]),ringPropagationSpeed:e.oneOfType([e.number,e.string,e.func]),ringRepeatPeriod:e.oneOfType([e.number,e.string,e.func]),labelsData:e.arrayOf(e.object),labelLat:e.oneOfType([e.number,e.string,e.func]),labelLng:e.oneOfType([e.number,e.string,e.func]),labelAltitude:e.oneOfType([e.number,e.string,e.func]),labelRotation:e.oneOfType([e.number,e.string,e.func]),labelText:e.oneOfType([e.string,e.func]),labelSize:e.oneOfType([e.number,e.string,e.func]),labelTypeFace:e.object,labelColor:e.oneOfType([e.string,e.func]),labelResolution:e.number,labelIncludeDot:e.oneOfType([e.bool,e.string,e.func]),labelDotRadius:e.oneOfType([e.number,e.string,e.func]),labelDotOrientation:e.oneOfType([e.string,e.func]),labelsTransitionDuration:e.number,labelLabel:e.oneOfType([e.string,e.func]),onLabelClick:e.func,onLabelRightClick:e.func,onLabelHover:e.func,htmlElementsData:e.arrayOf(e.object),htmlLat:e.oneOfType([e.number,e.string,e.func]),htmlLng:e.oneOfType([e.number,e.string,e.func]),htmlAltitude:e.oneOfType([e.number,e.string,e.func]),htmlElement:e.oneOfType([e.string,e.func]),htmlTransitionDuration:e.number,objectsData:e.arrayOf(e.object),objectLat:e.oneOfType([e.number,e.string,e.func]),objectLng:e.oneOfType([e.number,e.string,e.func]),objectAltitude:e.oneOfType([e.number,e.string,e.func]),objectRotation:e.oneOfType([e.shape({x:e.number,y:e.number,z:e.number}),e.string,e.func]),objectFacesSurface:e.oneOfType([e.bool,e.string,e.func]),objectThreeObject:e.oneOfType([e.object,e.string,e.func]),objectLabel:e.oneOfType([e.string,e.func]),onObjectClick:e.func,onObjectRightClick:e.func,onObjectHover:e.func,customLayerData:e.arrayOf(e.object),customThreeObject:e.oneOfType([e.object,e.string,e.func]),customThreeObjectUpdate:e.oneOfType([e.string,e.func]),customLayerLabel:e.oneOfType([e.string,e.func]),onCustomLayerClick:e.func,onCustomLayerRightClick:e.func,onCustomLayerHover:e.func,enablePointerInteraction:e.bool,pointerEventsFilter:e.func,lineHoverPrecision:e.number,onZoom:e.func},E=$e(Q,{methodNames:["pauseAnimation","resumeAnimation","pointOfView","lights","scene","camera","renderer","postProcessingComposer","controls","getGlobeRadius","getCoords","getScreenCoords","toGeoCoords","toGlobeCoords"],initPropNames:["animateIn","waitForGlobeReady","rendererConfig"]});E.displayName="Globe";E.propTypes=Ue;const Ve=()=>{const n=s.useRef(),t=s.useRef(),[r,o]=s.useState({width:800,height:800}),[a,m]=s.useState(!0),[f,b]=s.useState(!1);s.useEffect(()=>{const i=()=>{if(t.current){const u=t.current.offsetWidth,l=t.current.offsetHeight;o({width:u,height:l})}};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const c=s.useMemo(()=>{const i=new ee;return i.transparent=!0,i.opacity=1,i.bumpScale=10,i},[]);return s.useEffect(()=>{const i=new ne;i.crossOrigin="anonymous";const u=window.location.origin;Promise.all([new Promise((l,T)=>i.load(`${u}/earth-water.png`,l,void 0,()=>l(null))),new Promise((l,T)=>i.load(`${u}/earth-blue-marble.jpg`,l,void 0,()=>l(null)))]).then(([l,T])=>{c&&T&&l?(T.encoding=D,l.encoding=D,c.map=T,c.specularMap=l,c.specular=new te("grey"),c.shininess=15,c.needsUpdate=!0,b(!0)):(console.warn("Some textures failed to load, using default appearance"),b(!0))})},[c]),s.useEffect(()=>{const i=n.current;if(!i||!a||!f)return;const u=i.controls();if(!u)return;u.autoRotate=!0,u.autoRotateSpeed=.5,u.enableZoom=!1,u.minDistance=350,u.maxDistance=350;const l=()=>(u.update(),requestAnimationFrame(l)),T=l();return()=>cancelAnimationFrame(T)},[a,f]),s.useEffect(()=>{if(!n.current||!f)return;const i=n.current.scene();if(i){i.children.filter(y=>y.isLight).forEach(y=>i.remove(y));const l=new re(12303291,.3);i.add(l);const T=new oe(16777215,.8);T.position.set(1,1,1),i.add(T);const L=new ae(16777215,.5);L.position.set(-50,100,50),i.add(L)}},[f]),p.jsx("div",{ref:t,style:{width:"100%",height:"100%",background:"transparent"},children:p.jsx(s.Suspense,{fallback:p.jsx(ie,{}),children:p.jsx(E,{ref:n,width:r.width,height:r.height,globeMaterial:c,backgroundColor:"rgba(0,0,0,0)",waitForGlobeReady:!0,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",enableZoom:!1})})})},ze={sm:640,md:768,lg:1024,xl:1280,"2xl":1536},We=typeof window<"u",Ke=n=>We?window.innerWidth<ze[n]:!1,G=()=>Ke("md"),qe=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,C=s.memo(({label:n,id:t,name:r,type:o="text",value:a,onChange:m,error:f,textarea:b,placeholder:c})=>p.jsxs("div",{className:`${r==="firstName"||r==="lastName"?"":"sm:col-span-2"}`,children:[p.jsx("label",{htmlFor:t,className:v.formLabel,children:n}),p.jsxs("div",{className:"mt-2.5",children:[b?p.jsx("textarea",{id:t,name:r,value:a,onChange:m,className:v.formInput,rows:4,placeholder:c}):p.jsx("input",{id:t,name:r,type:o,value:a,onChange:m,className:v.formInput,placeholder:c}),f&&p.jsx("span",{className:v.validationError,children:f})]})]})),Ze=()=>{const n=s.useRef(),[t,r]=s.useState(H),[o,a]=s.useState(!1),[m,f]=s.useState({}),[b,c]=s.useState(""),[i,u]=s.useState(!G());s.useEffect(()=>{const y=()=>{u(!G())};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);const l=s.useCallback(y=>{const{name:w,value:d}=y.target;r(O=>({...O,[w]:d}))},[]),T=s.useCallback(()=>{const y={};return t.firstName.trim()||(y.firstName=g.firstNameError),qe.test(t.email)||(y.email=g.emailError),t.agreed||(y.agreed=g.agreementError),y},[t]),L=s.useCallback(y=>{y.preventDefault();const w=T();if(Object.keys(w).length>0){f(w);return}a(!0);const d=`${t.firstName}${t.lastName?` ${t.lastName}`:""}`,O=`Company: ${t.company}
Phone: ${t.phone}

Message:
${t.message}`;Le.send(g.EMAIL_SERVICE_ID,g.EMAIL_TEMPLATE_ID,{from_name:d,to_name:g.EMAIL_RECIPIENT_NAME,from_email:t.email,message:O},g.EMAIL_PUBLIC_KEY).then(()=>{r(H),c(g.successMessage)}).catch(()=>c(g.errorMessage)).finally(()=>a(!1))},[t,T]);return p.jsxs("div",{className:v.contactContainer,children:[p.jsx("div",{"aria-hidden":"true",className:v.backgroundGradientContainer,children:p.jsx("div",{className:v.backgroundGradientElement,style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),p.jsxs(k.div,{variants:I("left","tween",.2,1),className:v.contactFormContainer,style:{maxWidth:"500px"},children:[p.jsx("p",{className:N.sectionSubText,children:g.sectionSubText}),p.jsx("h3",{className:N.sectionHeadText,children:g.sectionHeadText}),p.jsxs("form",{ref:n,onSubmit:L,className:v.contactForm,children:[p.jsxs("div",{className:v.formFieldsGrid,children:[p.jsx(C,{label:g.firstNameLabel,id:"first-name",name:"firstName",placeholder:g.firstNameLabel,value:t.firstName,onChange:l,error:m.firstName}),p.jsx(C,{label:g.lastNameLabel,id:"last-name",name:"lastName",placeholder:g.lastNameLabel,value:t.lastName,onChange:l}),p.jsx(C,{label:g.companyLabel,id:"company",name:"company",placeholder:g.companyLabel,value:t.company,onChange:l}),p.jsx(C,{label:g.emailLabel,id:"email",name:"email",type:"email",placeholder:g.emailLabel,value:t.email,onChange:l,error:m.email}),p.jsx(C,{label:g.phoneLabel,id:"phone-number",name:"phone",placeholder:g.phoneLabel,value:t.phone,onChange:l}),p.jsx(C,{label:g.messageLabel,id:"message",name:"message",placeholder:g.messageLabel,value:t.message,onChange:l,textarea:!0})]}),p.jsx("div",{className:v.submitButtonWrapper,children:p.jsx("button",{type:"submit",disabled:o,className:v.submitButton,children:o?g.sendingButton:g.sendButton})}),b&&p.jsx("p",{className:b===g.successMessage?v.successMessage:v.errorMessage,children:b})]})]}),i&&p.jsx(k.div,{variants:I("right","tween",.2,1),className:v.globeVisualizationContainer,children:p.jsx(Ve,{})})]})},tn=ce(Ze,ue.SPA[2].id);export{tn as default};
