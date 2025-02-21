import{r as l,j as a,m as d}from"./index-CZckkSud.js";import{c as i,d as n}from"./index-CDzGV7aV.js";const c=()=>{const[e,t]=l.useState("all"),s=e==="all"?i:i.filter(r=>r.department===e);return a.jsx("div",{className:"container mx-auto px-4 py-8 top-10 bg-background-secondary-dark dark:bg-background-tertiary-dark",children:a.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[a.jsx("h1",{className:"text-4xl font-bold text-secondary-dark dark:text-primary-light mb-8",children:"Join Our Team"}),a.jsxs("div",{className:"mb-8",children:[a.jsx("h2",{className:"text-2xl font-semibold mb-4 text-primary-dark dark:text-primary-light",children:"Filter by Department"}),a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx("button",{onClick:()=>t("all"),className:`px-4 py-2 rounded-lg ${e==="all"?"bg-secondary-dark text-primary-light shadow-[-2px_-2px_0px_0px_rgba(210,59,12,0.3)]":"bg-background-secondary-dark dark:bg-background-tertiary-dark text-primary-dark dark:text-primary-light"}`,children:"All Departments"}),n.map(r=>a.jsx("button",{onClick:()=>t(r.id),className:`px-4 py-2 rounded-lg ${e===r.id?"bg-secondary-dark text-primary-light shadow-[-2px_-2px_0px_0px_rgba(210,59,12,0.3)]":"bg-background-secondary-dark dark:bg-background-tertiary-dark text-primary-dark dark:text-primary-light"}`,children:r.name},r.id))]})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(r=>a.jsxs(d.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"bg-background-secondary-dark dark:bg-background-tertiary-dark rounded-lg shadow-[-4px_-4px_4px_0px_rgba(210,59,12,0.6),_-4px_0px_4px_0px_rgba(210,59,12,0.6),_-4px_4px_4px_0px_rgba(210,59,12,0.6)] p-6",children:[a.jsx("h3",{className:"text-xl font-semibold mb-2 text-primary-dark dark:text-primary-light",children:r.title}),a.jsxs("div",{className:"flex gap-4 mb-4",children:[a.jsx("span",{className:"text-sm bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-2 py-1 rounded",children:r.location}),a.jsx("span",{className:"text-sm bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 px-2 py-1 rounded",children:r.type})]}),a.jsx("p",{className:"text-primary-dark dark:text-primary-light mb-4",children:r.description}),a.jsx("button",{className:"bg-secondary-dark text-primary-light px-4 py-2 rounded hover:opacity-90 transition-opacity",children:"Apply Now"})]},r.id))})]})})};export{c as default};
