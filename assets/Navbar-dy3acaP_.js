import{r as x,u as N,j as e,d as g,n as s,L as i}from"./index-DhQ74RRn.js";import{c as u,m as L}from"./close-Ck3EYUNQ.js";import{n as h}from"./index-Bv6HVjc0.js";const f="/assets/Logo-DLq8ucUw.png",C=()=>{var r,m,d,v;const[o,n]=x.useState(""),[t,c]=x.useState(!1),p=N(),l=(a,j)=>{n(j),p(a),window.scrollTo(0,0)};return e.jsx("nav",{className:`${g.paddingX} ${s.nav}`,children:e.jsxs("div",{className:s.container,children:[e.jsx(i,{to:"/",className:s.logo,onClick:()=>{n(""),window.scrollTo(0,0)},children:e.jsxs("p",{className:s.logoText,children:[e.jsx("img",{src:f,alt:"Logo",className:"w-8 h-8 object-contain mr-2"}),"DepoDart"]})}),e.jsx("ul",{className:s.desktopNav,children:(m=(r=h)==null?void 0:r.main)==null?void 0:m.map(a=>e.jsx("li",{className:`${o===a.title?s.activeLink:s.inactiveDesktopLink} ${s.navLink}`,onClick:()=>l(a.path,a.title),children:e.jsx(i,{to:a.path,children:a.title})},a.id))}),e.jsxs("div",{className:s.mobileMenuContainer,children:[e.jsx("img",{src:t?u:L,alt:"menu",className:s.menuIcon,onClick:()=>c(!t)}),e.jsx("div",{className:`${t?"flex":"hidden"} ${s.mobileMenuDropdown}`,children:e.jsx("ul",{className:s.mobileNav,children:(v=(d=h)==null?void 0:d.main)==null?void 0:v.map(a=>e.jsx("li",{className:`${o===a.title?s.activeLink:s.inactiveMobileLink} ${s.navLink}`,onClick:()=>{l(a.path,a.title),c(!1)},children:e.jsx(i,{to:a.path,children:a.title})},a.id))})})]})]})})};export{C as default};
