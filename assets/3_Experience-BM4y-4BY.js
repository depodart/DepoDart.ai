import{p as L,q as U,r as h,s as Q,j as d,d as R,t as m,T as Y,v as q}from"./index-9eEj3cDv.js";import{r as B}from"./index-Chjiymov.js";import{n as Z,E as $,e as ee}from"./index-FAiKktx1.js";import{S as te}from"./SectionWrapper-BNAoCgds.js";var b={},A;function re(){if(A)return b;A=1,b.__esModule=!0,b.default=void 0;var t=i(L()),e=i(B()),n=i(U());function i(s){return s&&s.__esModule?s:{default:s}}const r=({animate:s=!0,className:l="",layout:o="2-columns",lineColor:c="#FFF",children:u})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",c),t.default.createElement("div",{className:(0,n.default)(l,"vertical-timeline",{"vertical-timeline--animate":s,"vertical-timeline--two-columns":o==="2-columns","vertical-timeline--one-column-left":o==="1-column"||o==="1-column-left","vertical-timeline--one-column-right":o==="1-column-right"})},u));r.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]).isRequired,className:e.default.string,animate:e.default.bool,layout:e.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:e.default.string};var a=r;return b.default=a,b}var y={};function C(){return C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},C.apply(this,arguments)}function ne(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,S(t,e)}function S(t,e){return S=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},S(t,e)}function ie(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var j=new Map,w=new WeakMap,P=0,z=void 0;function ae(t){z=t}function le(t){return t?(w.has(t)||(P+=1,w.set(t,P.toString())),w.get(t)):"0"}function oe(t){return Object.keys(t).sort().filter(function(e){return t[e]!==void 0}).map(function(e){return e+"_"+(e==="root"?le(t.root):t[e])}).toString()}function se(t){var e=oe(t),n=j.get(e);if(!n){var i=new Map,r,a=new IntersectionObserver(function(s){s.forEach(function(l){var o,c=l.isIntersecting&&r.some(function(u){return l.intersectionRatio>=u});t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=c),(o=i.get(l.target))==null||o.forEach(function(u){u(c,l)})})},t);r=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:a,elements:i},j.set(e,n)}return n}function M(t,e,n,i){if(n===void 0&&(n={}),i===void 0&&(i=z),typeof window.IntersectionObserver>"u"&&i!==void 0){var r=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var a=se(n),s=a.id,l=a.observer,o=a.elements,c=o.get(t)||[];return o.has(t)||o.set(t,c),c.push(e),l.observe(t),function(){c.splice(c.indexOf(e),1),c.length===0&&(o.delete(t),l.unobserve(t)),o.size===0&&(l.disconnect(),j.delete(s))}}var ce=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function D(t){return typeof t.children!="function"}var T=function(t){ne(e,t);function e(i){var r;return r=t.call(this,i)||this,r.node=null,r._unobserveCb=null,r.handleNode=function(a){r.node&&(r.unobserve(),!a&&!r.props.triggerOnce&&!r.props.skip&&r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=a||null,r.observeNode()},r.handleChange=function(a,s){a&&r.props.triggerOnce&&r.unobserve(),D(r.props)||r.setState({inView:a,entry:s}),r.props.onChange&&r.props.onChange(a,s)},r.state={inView:!!i.initialInView,entry:void 0},r}var n=e.prototype;return n.componentDidUpdate=function(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var r=this.props,a=r.threshold,s=r.root,l=r.rootMargin,o=r.trackVisibility,c=r.delay,u=r.fallbackInView;this._unobserveCb=M(this.node,this.handleChange,{threshold:a,root:s,rootMargin:l,trackVisibility:o,delay:c},u)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!D(this.props)){var r=this.state,a=r.inView,s=r.entry;return this.props.children({inView:a,entry:s,ref:this.handleNode})}var l=this.props,o=l.children,c=l.as,u=ie(l,ce);return h.createElement(c||"div",C({ref:this.handleNode},u),o)},e}(h.Component);T.displayName="InView";T.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ue(t){var e=t===void 0?{}:t,n=e.threshold,i=e.delay,r=e.trackVisibility,a=e.rootMargin,s=e.root,l=e.triggerOnce,o=e.skip,c=e.initialInView,u=e.fallbackInView,f=h.useRef(),x=h.useState({inView:!!c}),v=x[0],_=x[1],k=h.useCallback(function(V){f.current!==void 0&&(f.current(),f.current=void 0),!o&&V&&(f.current=M(V,function(N,g){_({inView:N,entry:g}),g.isIntersecting&&l&&f.current&&(f.current(),f.current=void 0)},{root:s,rootMargin:a,threshold:n,trackVisibility:r,delay:i},u))},[Array.isArray(n)?n.toString():n,s,a,l,o,r,u,i]);h.useEffect(function(){!f.current&&v.entry&&!l&&!o&&_({inView:!!c})});var p=[k,v.inView,v.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const de=Object.freeze(Object.defineProperty({__proto__:null,InView:T,default:T,defaultFallbackInView:ae,observe:M,useInView:ue},Symbol.toStringTag,{value:"Module"})),fe=Q(de);var F;function pe(){if(F)return y;F=1,y.__esModule=!0,y.default=void 0;var t=r(L()),e=r(B()),n=r(U()),i=fe;function r(l){return l&&l.__esModule?l:{default:l}}const a=({children:l="",className:o="",contentArrowStyle:c=null,contentStyle:u=null,date:f="",dateClassName:x="",icon:v=null,iconClassName:_="",iconOnClick:k=null,onTimelineElementClick:p=null,iconStyle:V=null,id:N="",position:g="",style:X=null,textClassName:K="",intersectionObserverProps:G={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:E=!1})=>t.default.createElement(i.InView,G,({inView:O,ref:J})=>t.default.createElement("div",{ref:J,id:N,className:(0,n.default)(o,"vertical-timeline-element",{"vertical-timeline-element--left":g==="left","vertical-timeline-element--right":g==="right","vertical-timeline-element--no-children":l===""}),style:X},t.default.createElement(t.default.Fragment,null,t.default.createElement("span",{style:V,onClick:k,className:(0,n.default)(_,"vertical-timeline-element-icon",{"bounce-in":O||E,"is-hidden":!(O||E)})},v),t.default.createElement("div",{style:u,onClick:p,className:(0,n.default)(K,"vertical-timeline-element-content",{"bounce-in":O||E,"is-hidden":!(O||E)})},t.default.createElement("div",{style:c,className:"vertical-timeline-element-content-arrow"}),l,t.default.createElement("span",{className:(0,n.default)(x,"vertical-timeline-element-date")},f)))));a.propTypes={children:e.default.oneOfType([e.default.arrayOf(e.default.node),e.default.node]),className:e.default.string,contentArrowStyle:e.default.shape({}),contentStyle:e.default.shape({}),date:e.default.node,dateClassName:e.default.string,icon:e.default.element,iconClassName:e.default.string,iconStyle:e.default.shape({}),iconOnClick:e.default.func,onTimelineElementClick:e.default.func,id:e.default.string,position:e.default.string,style:e.default.shape({}),textClassName:e.default.string,visible:e.default.bool,intersectionObserverProps:e.default.shape({root:e.default.object,rootMargin:e.default.string,threshold:e.default.number,triggerOnce:e.default.bool})};var s=a;return y.default=s,y}var I,W;function me(){return W||(W=1,I={VerticalTimeline:re().default,VerticalTimelineElement:pe().default}),I}var H=me();const he=h.memo(({experience:t})=>{const{isDark:e}=h.useContext(Y),n=e?q.colors.dark.background.tertiary:q.colors.dark.background.secondary;return d.jsxs(H.VerticalTimelineElement,{contentStyle:{background:n,boxShadow:"-4px -4px 4px 0px rgba(210,59,12,0.6), -4px 0px 4px 0px rgba(210,59,12,0.6), -4px 4px 4px 0px rgba(210,59,12,0.6)"},contentArrowStyle:{borderRight:"7px solid #E5E7EB"},date:t.date,iconStyle:{background:n},icon:t.icon&&d.jsx("div",{className:m.icon.iconContainer,children:d.jsx("img",{src:t.icon,alt:t.sub_title,className:m.icon.iconImage})}),children:[d.jsxs("div",{children:[d.jsx("h3",{className:m.text.cardTitle,children:t.title}),d.jsx("p",{className:m.text.cardSubtitle,children:t.sub_title})]}),d.jsx("ul",{className:m.pointsList,children:t.points.map((i,r)=>d.jsx("li",{className:m.pointItem,children:i},`experience-point-${r}`))})]})}),ve=()=>d.jsxs(d.Fragment,{children:[d.jsx("p",{className:`
        ${R.sectionSubText} 
        ${m.text.mainTitle.p}
        `,children:$.sectionSubText}),d.jsx("h2",{className:`
        ${R.sectionHeadText} 
        ${m.text.mainTitle.h2}`,children:$.sectionHeadText}),d.jsx("div",{className:m.timelineContainer,children:d.jsx(H.VerticalTimeline,{children:ee.map((t,e)=>d.jsx(he,{experience:t},`experience-${e}`))})})]}),_e=te(ve,Z.SPA[1].id);export{_e as default};
