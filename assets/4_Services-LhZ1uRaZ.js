import{j as e,m as h,d as n,A as t,r as x,u as g}from"./index-DyNLbm05.js";import{S as u,t as v}from"./SectionWrapper-CiHHcLA3.js";import{W as s,p as j}from"./index-JFc_VBVv.js";const b=x.memo(({id:o,name:r,description:l,tags:d,image:c,source_code_link:f,underDevelopment:p})=>{const i=g(),m=()=>{i(`/services/${o}/details`)};return e.jsx("article",{onClick:m,children:e.jsxs("section",{className:`${t.projectCard.wrapper} cursor-pointer bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:border-secondary-dark hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl`,children:[e.jsxs("figure",{className:`${t.projectCard.imageContainer} relative aspect-video rounded-xl overflow-hidden mb-6 shadow-lg group`,children:[e.jsx("img",{src:c,alt:`Service preview for ${r}`,className:`${t.projectCard.image} w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),p&&e.jsx("div",{className:"absolute top-4 left-4 px-3 py-1 bg-yellow-500/90 text-black font-semibold text-xs rounded-full shadow-lg transform rotate-[-5deg] z-10 animate-pulse",children:"Under Development"}),e.jsx("button",{className:"absolute bottom-4 right-4 px-4 py-2 bg-secondary-dark/80 hover:bg-secondary-dark text-white rounded-lg shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500",onClick:a=>{a.stopPropagation(),i(`/services/${o}/details`)},children:"Learn More"})]}),e.jsxs("header",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("h3",{className:`${t.projectCard.title} text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-tertiary-light group-hover:scale-105 transition-transform duration-500`,children:r})}),e.jsx("p",{className:`${t.projectCard.description} text-primary-light/80 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500 group-hover:text-primary-light`,children:l})]}),e.jsx("footer",{className:t.projectCard.tagsContainer,children:d.map(a=>e.jsx("span",{className:`${t.projectCard.tag} ${a.color}`,children:e.jsxs("span",{className:"px-3 py-1 text-sm bg-gradient-to-r from-secondary-dark/20 to-tertiary-light/20 rounded-full text-primary-light/80 hover:text-white transition-all duration-500 hover:shadow-xl hover:from-secondary-dark/50 hover:to-tertiary-light/50 hover:scale-110",children:["#",a.name]})},a.name))})]})})}),y=()=>e.jsxs("main",{children:[e.jsx("header",{className:"hidden md:block",children:e.jsx(h.div,{variants:v(),children:e.jsx("h2",{className:`
            ${n.sectionHeadText} 
            ${t.text.mainContent.h2}
            text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-8
          `,children:s.sectionHeading})})}),e.jsx("header",{className:"md:hidden",children:e.jsx("h2",{className:`
          ${n.sectionHeadText} 
          ${t.text.mainContent.h2}
          text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark via-tertiary-light to-primary-light mb-8
        `,children:s.sectionHeading})}),e.jsx("section",{className:"w-full flex mb-12",children:e.jsx("p",{className:`${t.text.mainContent.p} text-lg text-primary-light/80 leading-relaxed max-w-3xl`,children:s.description})}),e.jsx("section",{className:`${t.mainContent.projectsGrid} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,children:j.map((o,r)=>e.jsx(b,{...o,id:r},`project-${r}`))})]}),C=u(y,"");export{C as default};
