import{r as c,j as e,m as i}from"./index-CpCxI0gN.js";import{c as m,d as y}from"./index-k09nlhHl.js";import{A as g}from"./index-I6gniksB.js";const d={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20}},x={overlay:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},content:{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0}}},s=({text:a,color:r})=>e.jsx("span",{className:`text-sm bg-${r}-500/10 text-${r}-500 dark:text-${r}-400 px-4 py-1.5 rounded-full`,children:a}),o=({title:a,requirements:r})=>e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:a}),e.jsx("ul",{className:"list-disc pl-6",children:r.map((t,l)=>e.jsx("li",{className:"text-primary-dark/80 dark:text-primary-light/80",children:t},l))})]}),u=()=>e.jsxs("div",{className:"text-center",children:[e.jsx(i.h1,{...d,transition:{delay:.2,duration:.5},className:"text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-primary-light dark:from-primary-light dark:to-secondary-dark mb-4",children:"Join Our Team"}),e.jsx("p",{className:"text-lg text-primary-dark/80 dark:text-primary-light/80 max-w-2xl mx-auto",children:"Be part of something extraordinary. We're always looking for talented people to join our growing team."})]}),k=({selectedDepartment:a,setSelectedDepartment:r})=>e.jsxs("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-primary-dark dark:text-primary-light",children:"Filter by Department"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:[{id:"all",name:"All Departments"},...y].map(t=>e.jsx("button",{onClick:()=>r(t.id),className:`px-6 py-2.5 rounded-full transition-all duration-300 ${a===t.id?"bg-secondary-dark text-primary-light shadow-lg shadow-secondary-dark/30 scale-105":"bg-background-secondary-dark/50 hover:bg-background-secondary-dark text-primary-dark dark:text-primary-light hover:scale-105"}`,children:t.name},t.id))})]}),b=({job:a,index:r,onSelect:t})=>e.jsxs(i.div,{...d,transition:{duration:.5,delay:r*.1},className:"group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-secondary-dark/50",children:[e.jsx("h3",{className:"text-2xl font-bold mb-3 text-primary-dark dark:text-primary-light group-hover:text-secondary-dark dark:group-hover:text-secondary-dark transition-colors",children:`${a.title} - ${a.location.region} - ${a.department}`}),e.jsxs("div",{className:"flex gap-3 mb-4",children:[e.jsx(s,{text:a.location.workType,color:"blue"}),e.jsx(s,{text:a.employment.type,color:"green"}),e.jsx(s,{text:a.employment.experience.level,color:"purple"})]}),e.jsx("p",{className:"text-primary-dark/80 dark:text-primary-light/80 mb-6 line-clamp-3",children:a.description}),e.jsx("button",{onClick:()=>t(a),className:"block w-full bg-secondary-dark text-primary-light px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center",children:"Read More"})]},a.id),f=({job:a,onClose:r})=>e.jsx(i.div,{...x.overlay,onClick:r,className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:e.jsxs(i.div,{...x.content,onClick:t=>t.stopPropagation(),className:"bg-primary-light dark:bg-primary-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[e.jsx("h2",{className:"text-3xl font-bold text-primary-dark dark:text-primary-light mb-4",children:a.title}),e.jsxs("div",{className:"flex gap-3 mb-6",children:[e.jsx(s,{text:a.location.workType,color:"blue"}),e.jsx(s,{text:a.employment.type,color:"green"}),e.jsx(s,{text:a.employment.experience.level,color:"purple"})]}),e.jsxs("div",{className:"prose prose-lg dark:prose-invert max-w-none mb-8",children:[e.jsx("p",{className:"text-primary-dark/80 dark:text-primary-light/80",children:a.description}),e.jsx(o,{title:"Technical Requirements",requirements:a.requirements.technical}),e.jsx(o,{title:"Professional Requirements",requirements:a.requirements.professional}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Compensation"}),e.jsx("p",{className:"text-primary-dark/80 dark:text-primary-light/80",children:`${a.compensation.currency} ${a.compensation.range[0].toLocaleString()} - ${a.compensation.range[1].toLocaleString()}`}),e.jsx(o,{title:"Benefits",requirements:a.compensation.benefits})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("a",{href:`mailto:info@depodart.com?subject=Application for ${a.title}`,className:"flex-1 bg-secondary-dark text-primary-light px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-secondary-dark/30 transition-all duration-300 text-center",children:"Apply Now"}),e.jsx("button",{onClick:r,className:"px-6 py-3 rounded-xl bg-primary-light dark:bg-primary-dark text-secondary-dark hover:bg-secondary-dark/10 transition-all duration-300 hover:scale-105 active:scale-95",children:"Back to Jobs"})]})]})}),w=()=>{const[a,r]=c.useState("all"),[t,l]=c.useState(null),p=a==="all"?m:m.filter(n=>n.department===a);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-b",children:[e.jsx("div",{className:"container mx-auto px-6 py-12",children:e.jsxs(i.div,{...d,transition:{duration:.6,ease:"easeOut"},className:"space-y-10",children:[e.jsx(u,{}),e.jsx(k,{selectedDepartment:a,setSelectedDepartment:r}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:p.map((n,h)=>e.jsx(b,{job:n,index:h,onSelect:l},n.id))})]})}),e.jsx(g,{children:t&&e.jsx(f,{job:t,onClose:()=>l(null)})})]})};export{w as default};
