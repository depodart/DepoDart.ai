import{r as n,T as m,j as e,d as x,n as a,L as h}from"./index-35409859.js";import{n as c}from"./index-08ed9c72.js";const g="/DepoDart.ai/assets/Logo-698d5863.png",v="/DepoDart.ai/assets/menu-242d80a8.svg",p="/DepoDart.ai/assets/close-ad0e0ca6.svg",w=()=>{const{toggleTheme:d,isDark:i}=n.useContext(m),[o,l]=n.useState(""),[t,r]=n.useState(!1);return e.jsx("nav",{className:`${x.paddingX} ${a.nav}`,children:e.jsxs("div",{className:a.container,children:[e.jsx(h,{to:"/",className:a.logo,onClick:()=>{l(""),window.scrollTo(0,0)},children:e.jsxs("p",{className:a.logoText,children:[e.jsx("img",{src:g,alt:"Logo",className:"w-8 h-8 object-contain mr-2"}),"DepoDart"]})}),e.jsx("button",{onClick:d,className:`ml-4 px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 ${i?"bg-transparent border border-primary-dark text-white hover:bg-gray-500":"bg-yellow-400 text-gray-900 hover:bg-yellow-500"}`,children:i?e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),e.jsx("span",{children:"Light"})]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),e.jsx("span",{children:"Dark"})]})}),e.jsx("ul",{className:a.desktopNav,children:c.map(s=>e.jsx("li",{className:`${o===s.title?a.activeLink:a.inactiveDesktopLink} ${a.navLink}`,onClick:()=>l(s.title),children:e.jsx("a",{href:`#${s.id}`,children:s.title})},s.id))}),e.jsxs("div",{className:a.mobileMenuContainer,children:[e.jsx("img",{src:t?p:v,alt:"menu",className:a.menuIcon,onClick:()=>r(!t)}),e.jsx("div",{className:`${t?"flex":"hidden"} ${a.mobileMenuDropdown}`,children:e.jsx("ul",{className:a.mobileNav,children:c.map(s=>e.jsx("li",{className:`${o===s.title?a.activeLink:a.inactiveMobileLink} ${a.navLink}`,onClick:()=>{l(s.title),r(!1)},children:e.jsx("a",{href:`#${s.id}`,children:s.title})},s.id))})})]})]})})};export{w as default};
