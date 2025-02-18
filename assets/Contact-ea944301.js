import{r as s,R as B,j as f,c as d,d as E}from"./index-35409859.js";import{g as U,C as W}from"./Loader-329152fb.js";import{P as e}from"./index-eba6a4f0.js";import{M as q,T as V,C as Z}from"./events-776716bd.esm-38f93afd.js";import{S as J,s as R}from"./SectionWrapper-f567bde9.js";import{I as N,C as m,n as K}from"./index-08ed9c72.js";import{m as I}from"./motion-f60d45de.js";const A={_origin:"https://api.emailjs.com"},X=(n,t="https://api.emailjs.com")=>{A._userID=n,A._origin=t},G=(n,t,r)=>{if(!n)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class D{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const F=(n,t,r={})=>new Promise((i,u)=>{const c=new XMLHttpRequest;c.addEventListener("load",({target:a})=>{const o=new D(a);o.status===200||o.text==="OK"?i(o):u(o)}),c.addEventListener("error",({target:a})=>{u(new D(a))}),c.open("POST",A._origin+n,!0),Object.keys(r).forEach(a=>{c.setRequestHeader(a,r[a])}),c.send(t)}),Y=(n,t,r,i)=>{const u=i||A._userID;return G(u,n,t),F("/api/v1.0/email/send",JSON.stringify({lib_version:"3.12.1",user_id:u,service_id:n,template_id:t,template_params:r}),{"Content-type":"application/json"})},Q=n=>{let t;if(typeof n=="string"?t=document.querySelector(n):t=n,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},ee=(n,t,r,i)=>{const u=i||A._userID,c=Q(r);G(u,n,t);const a=new FormData(c);return a.append("lib_version","3.12.1"),a.append("service_id",n),a.append("template_id",t),a.append("user_id",u),F("/api/v1.0/email/send-form",a)},ne={init:X,send:Y,sendForm:ee};function te(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,u,c,a,o=[],l=!0,g=!1;try{if(c=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(i=c.call(r)).done)&&(o.push(i.value),o.length!==t);l=!0);}catch(h){g=!0,u=h}finally{try{if(!l&&r.return!=null&&(a=r.return(),Object(a)!==a))return}finally{if(g)throw u}}return o}}function re(n,t,r){return t=fe(t),t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function _(n,t){return ie(n)||te(n,t)||$(n,t)||ce()}function oe(n){return ae(n)||se(n)||$(n)||ue()}function ae(n){if(Array.isArray(n))return S(n)}function ie(n){if(Array.isArray(n))return n}function se(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $(n,t){if(n){if(typeof n=="string")return S(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(n,t)}}function S(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=n[r];return i}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(n,t){if(typeof n!="object"||n===null)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var i=r.call(n,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function fe(n){var t=le(n,"string");return typeof t=="symbol"?t:String(t)}var me=function(t,r){var i=new Set(r);return Object.assign.apply(Object,[{}].concat(oe(Object.entries(t).filter(function(u){var c=_(u,1),a=c[0];return!i.has(a)}).map(function(u){var c=_(u,2),a=c[0],o=c[1];return re({},a,o)}))))};function P(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,i=Array(t);r<t;r++)i[r]=n[r];return i}function pe(n){if(Array.isArray(n))return n}function ge(n){if(Array.isArray(n))return P(n)}function be(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ye(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,u,c,a,o=[],l=!0,g=!1;try{if(c=(r=r.call(n)).next,t!==0)for(;!(l=(i=c.call(r)).done)&&(o.push(i.value),o.length!==t);l=!0);}catch(h){g=!0,u=h}finally{try{if(!l&&r.return!=null&&(a=r.return(),Object(a)!==a))return}finally{if(g)throw u}}return o}}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(n,t){return pe(n)||ye(n,t)||z(n,t)||de()}function k(n){return ge(n)||be(n)||z(n)||he()}function z(n,t){if(n){if(typeof n=="string")return P(n,t);var r={}.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(n,t):void 0}}function Oe(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.wrapperElementType,i=r===void 0?"div":r,u=t.nodeMapper,c=u===void 0?function(h){return h}:u,a=t.methodNames,o=a===void 0?[]:a,l=t.initPropNames,g=l===void 0?[]:l;return s.forwardRef(function(h,v){var j=s.useRef(),T=s.useMemo(function(){var p=Object.fromEntries(g.filter(function(y){return h.hasOwnProperty(y)}).map(function(y){return[y,h[y]]}));return n(p)},[]);M(function(){T(c(j.current))},s.useLayoutEffect),M(function(){return T._destructor instanceof Function?T._destructor:void 0});var b=s.useCallback(function(p){for(var y=arguments.length,L=new Array(y>1?y-1:0),O=1;O<y;O++)L[O-1]=arguments[O];return T[p]instanceof Function?T[p].apply(T,L):void 0},[T]),C=s.useRef({});return Object.keys(me(h,[].concat(k(o),k(g)))).filter(function(p){return C.current[p]!==h[p]}).forEach(function(p){return b(p,h[p])}),C.current=h,s.useImperativeHandle(v,function(){return Object.fromEntries(o.map(function(p){return[p,function(){for(var y=arguments.length,L=new Array(y),O=0;O<y;O++)L[O]=arguments[O];return b.apply(void 0,[p].concat(L))}]}))},[b]),B.createElement(i,{ref:j})})}function M(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s.useEffect,r=s.useRef(),i=s.useRef(!1),u=s.useRef(!1),c=s.useState(0),a=Te(c,2);a[0];var o=a[1];i.current&&(u.current=!0),t(function(){return i.current||(r.current=n(),i.current=!0),o(function(l){return l+1}),function(){u.current&&r.current&&r.current()}},[])}var ve={width:e.number,height:e.number,backgroundColor:e.string,backgroundImageUrl:e.string,globeImageUrl:e.string,bumpImageUrl:e.string,globeTileEngineUrl:e.func,showGlobe:e.bool,showGraticules:e.bool,showAtmosphere:e.bool,atmosphereColor:e.string,atmosphereAltitude:e.number,globeMaterial:e.object,onGlobeReady:e.func,onGlobeClick:e.func,onGlobeRightClick:e.func,pointsData:e.arrayOf(e.object),pointLat:e.oneOfType([e.number,e.string,e.func]),pointLng:e.oneOfType([e.number,e.string,e.func]),pointColor:e.oneOfType([e.string,e.func]),pointAltitude:e.oneOfType([e.number,e.string,e.func]),pointRadius:e.oneOfType([e.number,e.string,e.func]),pointResolution:e.number,pointsMerge:e.bool,pointsTransitionDuration:e.number,pointLabel:e.oneOfType([e.string,e.func]),onPointClick:e.func,onPointRightClick:e.func,onPointHover:e.func,arcsData:e.arrayOf(e.object),arcStartLat:e.oneOfType([e.number,e.string,e.func]),arcStartLng:e.oneOfType([e.number,e.string,e.func]),arcEndLat:e.oneOfType([e.number,e.string,e.func]),arcEndLng:e.oneOfType([e.number,e.string,e.func]),arcColor:e.oneOfType([e.string,e.arrayOf(e.string),e.func]),arcAltitude:e.oneOfType([e.number,e.string,e.func]),arcAltitudeAutoScale:e.oneOfType([e.number,e.string,e.func]),arcStroke:e.oneOfType([e.number,e.string,e.func]),arcCurveResolution:e.number,arcCircularResolution:e.number,arcDashLength:e.oneOfType([e.number,e.string,e.func]),arcDashGap:e.oneOfType([e.number,e.string,e.func]),arcDashInitialGap:e.oneOfType([e.number,e.string,e.func]),arcDashAnimateTime:e.oneOfType([e.number,e.string,e.func]),arcsTransitionDuration:e.number,arcLabel:e.oneOfType([e.string,e.func]),onArcClick:e.func,onArcRightClick:e.func,onArcHover:e.func,polygonsData:e.arrayOf(e.object),polygonGeoJsonGeometry:e.oneOfType([e.string,e.func]),polygonCapColor:e.oneOfType([e.string,e.func]),polygonCapMaterial:e.oneOfType([e.object,e.string,e.func]),polygonSideColor:e.oneOfType([e.string,e.func]),polygonSideMaterial:e.oneOfType([e.object,e.string,e.func]),polygonStrokeColor:e.oneOfType([e.string,e.func]),polygonAltitude:e.oneOfType([e.number,e.string,e.func]),polygonCapCurvatureResolution:e.oneOfType([e.number,e.string,e.func]),polygonsTransitionDuration:e.number,polygonLabel:e.oneOfType([e.string,e.func]),onPolygonClick:e.func,onPolygonRightClick:e.func,onPolygonHover:e.func,pathsData:e.array,pathPoints:e.oneOfType([e.array,e.string,e.func]),pathPointLat:e.oneOfType([e.number,e.string,e.func]),pathPointLng:e.oneOfType([e.number,e.string,e.func]),pathPointAlt:e.oneOfType([e.number,e.string,e.func]),pathResolution:e.number,pathColor:e.oneOfType([e.string,e.arrayOf(e.string),e.func]),pathStroke:e.oneOfType([e.number,e.string,e.func]),pathDashLength:e.oneOfType([e.number,e.string,e.func]),pathDashGap:e.oneOfType([e.number,e.string,e.func]),pathDashInitialGap:e.oneOfType([e.number,e.string,e.func]),pathDashAnimateTime:e.oneOfType([e.number,e.string,e.func]),pathTransitionDuration:e.number,pathLabel:e.oneOfType([e.string,e.func]),onPathClick:e.func,onPathRightClick:e.func,onPathHover:e.func,heatmapsData:e.array,heatmapPoints:e.oneOfType([e.array,e.string,e.func]),heatmapPointLat:e.oneOfType([e.number,e.string,e.func]),heatmapPointLng:e.oneOfType([e.number,e.string,e.func]),heatmapPointWeight:e.oneOfType([e.number,e.string,e.func]),heatmapBandwidth:e.oneOfType([e.number,e.string,e.func]),heatmapColorFn:e.oneOfType([e.string,e.func]),heatmapColorSaturation:e.oneOfType([e.number,e.string,e.func]),heatmapBaseAltitude:e.oneOfType([e.number,e.string,e.func]),heatmapTopAltitude:e.oneOfType([e.number,e.string,e.func]),heatmapsTransitionDuration:e.number,onHeatmapClick:e.func,onHeatmapRightClick:e.func,onHeatmapHover:e.func,hexBinPointsData:e.arrayOf(e.object),hexBinPointLat:e.oneOfType([e.number,e.string,e.func]),hexBinPointLng:e.oneOfType([e.number,e.string,e.func]),hexBinPointWeight:e.oneOfType([e.number,e.string,e.func]),hexBinResolution:e.number,hexMargin:e.oneOfType([e.number,e.func]),hexTopColor:e.func,hexSideColor:e.func,hexAltitude:e.oneOfType([e.number,e.func]),hexTopCurvatureResolution:e.number,hexBinMerge:e.bool,hexTransitionDuration:e.number,hexLabel:e.oneOfType([e.string,e.func]),onHexClick:e.func,onHexRightClick:e.func,onHexHover:e.func,hexPolygonsData:e.arrayOf(e.object),hexPolygonGeoJsonGeometry:e.oneOfType([e.string,e.func]),hexPolygonColor:e.oneOfType([e.string,e.func]),hexPolygonAltitude:e.oneOfType([e.number,e.string,e.func]),hexPolygonResolution:e.oneOfType([e.number,e.string,e.func]),hexPolygonMargin:e.oneOfType([e.number,e.string,e.func]),hexPolygonUseDots:e.oneOfType([e.bool,e.string,e.func]),hexPolygonCurvatureResolution:e.oneOfType([e.number,e.string,e.func]),hexPolygonDotResolution:e.oneOfType([e.number,e.string,e.func]),hexPolygonsTransitionDuration:e.number,hexPolygonLabel:e.oneOfType([e.string,e.func]),onHexPolygonClick:e.func,onHexPolygonRightClick:e.func,onHexPolygonHover:e.func,tilesData:e.arrayOf(e.object),tileLat:e.oneOfType([e.number,e.string,e.func]),tileLng:e.oneOfType([e.number,e.string,e.func]),tileAltitude:e.oneOfType([e.number,e.string,e.func]),tileWidth:e.oneOfType([e.number,e.string,e.func]),tileHeight:e.oneOfType([e.number,e.string,e.func]),tileUseGlobeProjection:e.oneOfType([e.bool,e.string,e.func]),tileMaterial:e.oneOfType([e.object,e.string,e.func]),tileCurvatureResolution:e.oneOfType([e.number,e.string,e.func]),tilesTransitionDuration:e.number,tileLabel:e.oneOfType([e.string,e.func]),onTileClick:e.func,onTileRightClick:e.func,onTileHover:e.func,particlesData:e.arrayOf(e.object),particlesList:e.oneOfType([e.string,e.func]),particleLat:e.oneOfType([e.number,e.string,e.func]),particleLng:e.oneOfType([e.number,e.string,e.func]),particleAltitude:e.oneOfType([e.number,e.string,e.func]),particlesSize:e.oneOfType([e.number,e.string,e.func]),particlesSizeAttenuation:e.oneOfType([e.bool,e.string,e.func]),particlesColor:e.oneOfType([e.string,e.func]),particlesTexture:e.oneOfType([e.string,e.func]),particleLabel:e.oneOfType([e.string,e.func]),onParticleClick:e.func,onParticleRightClick:e.func,onParticleHover:e.func,ringsData:e.arrayOf(e.object),ringLat:e.oneOfType([e.number,e.string,e.func]),ringLng:e.oneOfType([e.number,e.string,e.func]),ringAltitude:e.oneOfType([e.number,e.string,e.func]),ringColor:e.oneOfType([e.string,e.arrayOf(e.string),e.func]),ringResolution:e.number,ringMaxRadius:e.oneOfType([e.number,e.string,e.func]),ringPropagationSpeed:e.oneOfType([e.number,e.string,e.func]),ringRepeatPeriod:e.oneOfType([e.number,e.string,e.func]),labelsData:e.arrayOf(e.object),labelLat:e.oneOfType([e.number,e.string,e.func]),labelLng:e.oneOfType([e.number,e.string,e.func]),labelAltitude:e.oneOfType([e.number,e.string,e.func]),labelRotation:e.oneOfType([e.number,e.string,e.func]),labelText:e.oneOfType([e.string,e.func]),labelSize:e.oneOfType([e.number,e.string,e.func]),labelTypeFace:e.object,labelColor:e.oneOfType([e.string,e.func]),labelResolution:e.number,labelIncludeDot:e.oneOfType([e.bool,e.string,e.func]),labelDotRadius:e.oneOfType([e.number,e.string,e.func]),labelDotOrientation:e.oneOfType([e.string,e.func]),labelsTransitionDuration:e.number,labelLabel:e.oneOfType([e.string,e.func]),onLabelClick:e.func,onLabelRightClick:e.func,onLabelHover:e.func,htmlElementsData:e.arrayOf(e.object),htmlLat:e.oneOfType([e.number,e.string,e.func]),htmlLng:e.oneOfType([e.number,e.string,e.func]),htmlAltitude:e.oneOfType([e.number,e.string,e.func]),htmlElement:e.oneOfType([e.string,e.func]),htmlTransitionDuration:e.number,objectsData:e.arrayOf(e.object),objectLat:e.oneOfType([e.number,e.string,e.func]),objectLng:e.oneOfType([e.number,e.string,e.func]),objectAltitude:e.oneOfType([e.number,e.string,e.func]),objectRotation:e.oneOfType([e.shape({x:e.number,y:e.number,z:e.number}),e.string,e.func]),objectFacesSurface:e.oneOfType([e.bool,e.string,e.func]),objectThreeObject:e.oneOfType([e.object,e.string,e.func]),objectLabel:e.oneOfType([e.string,e.func]),onObjectClick:e.func,onObjectRightClick:e.func,onObjectHover:e.func,customLayerData:e.arrayOf(e.object),customThreeObject:e.oneOfType([e.object,e.string,e.func]),customThreeObjectUpdate:e.oneOfType([e.string,e.func]),customLayerLabel:e.oneOfType([e.string,e.func]),onCustomLayerClick:e.func,onCustomLayerRightClick:e.func,onCustomLayerHover:e.func,enablePointerInteraction:e.bool,pointerEventsFilter:e.func,lineHoverPrecision:e.number,onZoom:e.func},w=Oe(U,{methodNames:["pauseAnimation","resumeAnimation","pointOfView","lights","scene","camera","renderer","postProcessingComposer","controls","getGlobeRadius","getCoords","getScreenCoords","toGeoCoords","toGlobeCoords"],initPropNames:["animateIn","waitForGlobeReady","rendererConfig"]});w.displayName="Globe";w.propTypes=ve;const Ce=()=>{const n=s.useRef(),t=s.useRef(),[r,i]=s.useState({width:800,height:600}),[u,c]=s.useState(!0),a=s.useMemo(()=>{const o=new q({transparent:!0,opacity:1});return o.bumpScale=10,o},[]);return s.useEffect(()=>{if(!n.current||!u)return;const o=n.current.controls();o.autoRotate=!0,o.autoRotateSpeed=.5,o.enableZoom=!1;let l;const g=()=>{o.update(),l=requestAnimationFrame(g)};return g(),()=>cancelAnimationFrame(l)},[u]),s.useEffect(()=>{new V().load("//unpkg.com/three-globe/example/img/earth-water.png",o=>{a.specularMap=o,a.specular=new Z("grey"),a.shininess=15,a.needsUpdate=!0})},[a]),s.useEffect(()=>{const o=()=>{t.current&&i({width:t.current.offsetWidth,height:t.current.offsetHeight})};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),s.useEffect(()=>{if(!n.current)return;const o=n.current.lights&&n.current.lights();if(o){const l=o.find(g=>g.type==="DirectionalLight");l&&l.position.set(1,1,1)}},[]),s.useEffect(()=>{if(!n.current)return;const o=n.current.scene();o&&o.traverse(l=>{l.isMesh&&l.material===a&&l.scale.set(.5,.5,.5)})},[a]),f.jsx("div",{ref:t,style:{width:"800px",height:"800px",background:"transparent"},children:f.jsx(s.Suspense,{fallback:f.jsx(W,{}),children:f.jsx(w,{ref:n,width:r.width,height:r.height,globeMaterial:a,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",backgroundColor:"rgba(0,0,0,0)"})})})},xe={sm:640,md:768,lg:1024,xl:1280,"2xl":1536},je=typeof window<"u",Le=n=>je?window.innerWidth<xe[n]:!1,H=()=>Le("md"),Ae=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,x=s.memo(({label:n,id:t,name:r,type:i="text",value:u,onChange:c,error:a,textarea:o,placeholder:l})=>f.jsxs("div",{className:`${r==="firstName"||r==="lastName"?"":"sm:col-span-2"}`,children:[f.jsx("label",{htmlFor:t,className:d.formLabel,children:n}),f.jsxs("div",{className:"mt-2.5",children:[o?f.jsx("textarea",{id:t,name:r,value:u,onChange:c,className:d.formInput,rows:4,placeholder:l}):f.jsx("input",{id:t,name:r,type:i,value:u,onChange:c,className:d.formInput,placeholder:l}),a&&f.jsx("span",{className:d.validationError,children:a})]})]})),Se=()=>{const n=s.useRef(),[t,r]=s.useState(N),[i,u]=s.useState(!1),[c,a]=s.useState({}),[o,l]=s.useState(""),[g,h]=s.useState(!H());s.useEffect(()=>{const b=()=>{h(!H())};return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const v=s.useCallback(b=>{const{name:C,value:p}=b.target;r(y=>({...y,[C]:p}))},[]),j=s.useCallback(()=>{const b={};return t.firstName.trim()||(b.firstName=m.firstNameError),Ae.test(t.email)||(b.email=m.emailError),t.agreed||(b.agreed=m.agreementError),b},[t]),T=s.useCallback(b=>{b.preventDefault();const C=j();if(Object.keys(C).length>0){a(C);return}u(!0);const p=`${t.firstName}${t.lastName?` ${t.lastName}`:""}`,y=`Company: ${t.company}
Phone: ${t.phone}

Message:
${t.message}`;ne.send(m.EMAIL_SERVICE_ID,m.EMAIL_TEMPLATE_ID,{from_name:p,to_name:m.EMAIL_RECIPIENT_NAME,from_email:t.email,message:y},m.EMAIL_PUBLIC_KEY).then(()=>{r(N),l(m.successMessage)}).catch(()=>l(m.errorMessage)).finally(()=>u(!1))},[t,j]);return f.jsxs("div",{className:d.contactContainer,children:[f.jsx("div",{"aria-hidden":"true",className:d.backgroundGradientContainer,children:f.jsx("div",{className:d.backgroundGradientElement,style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),f.jsxs(I.div,{variants:R("left","tween",.2,1),className:d.contactFormContainer,style:{maxWidth:"500px"},children:[f.jsx("p",{className:E.sectionSubText,children:m.sectionSubText}),f.jsx("h3",{className:E.sectionHeadText,children:m.sectionHeadText}),f.jsxs("form",{ref:n,onSubmit:T,className:d.contactForm,children:[f.jsxs("div",{className:d.formFieldsGrid,children:[f.jsx(x,{label:m.firstNameLabel,id:"first-name",name:"firstName",placeholder:m.firstNameLabel,value:t.firstName,onChange:v,error:c.firstName}),f.jsx(x,{label:m.lastNameLabel,id:"last-name",name:"lastName",placeholder:m.lastNameLabel,value:t.lastName,onChange:v}),f.jsx(x,{label:m.companyLabel,id:"company",name:"company",placeholder:m.companyLabel,value:t.company,onChange:v}),f.jsx(x,{label:m.emailLabel,id:"email",name:"email",type:"email",placeholder:m.emailLabel,value:t.email,onChange:v,error:c.email}),f.jsx(x,{label:m.phoneLabel,id:"phone-number",name:"phone",placeholder:m.phoneLabel,value:t.phone,onChange:v}),f.jsx(x,{label:m.messageLabel,id:"message",name:"message",placeholder:m.messageLabel,value:t.message,onChange:v,textarea:!0})]}),f.jsx("div",{className:d.submitButtonWrapper,children:f.jsx("button",{type:"submit",disabled:i,className:d.submitButton,children:i?m.sendingButton:m.sendButton})}),o&&f.jsx("p",{className:o===m.successMessage?d.successMessage:d.errorMessage,children:o})]})]}),g&&f.jsx(I.div,{variants:R("right","tween",.2,1),className:d.globeVisualizationContainer,children:f.jsx(Ce,{})})]})},_e=J(Se,K[2].id);export{_e as default};
