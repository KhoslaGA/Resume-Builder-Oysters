(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},3547:e=>{"use strict";e.exports=import("@react-pdf/renderer")},1552:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(3156),s(5606),s(5866);var r=s(3191),a=s(8716),l=s(7922),i=s.n(l),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3156)),"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,5606)),"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/page.tsx"],u="/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8061:(e,t,s)=>{Promise.resolve().then(s.bind(s,5664)),Promise.resolve().then(s.t.bind(s,9404,23))},5664:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{AutoTypingResume:()=>x});var a=s(326),l=s(7577),i=s(4340),n=s(701),o=s(4952),d=s(9765),c=s(6223),u=s(6090),m=s(5037),p=e([u]);u=(p.then?(await p)():p)[0];let x=()=>{let[e,t]=(0,l.useState)((0,i.I)(n.Ml)),s=(0,l.useRef)((0,o.X)(d.P,d.f)),r=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{let e=setInterval(()=>{let e=s.current.next();for(let t=0;t<9;t++)e=s.current.next();e.done?r.current||(t(d.f),r.current=!0):t(e.value)},50);return()=>clearInterval(e)}),(0,l.useEffect)(()=>{let e=setInterval(()=>{s.current=(0,o.X)(d.P,d.f),r.current=!1},6e4);return()=>clearInterval(e)},[]),a.jsx(a.Fragment,{children:a.jsx(c._,{documentSize:"Letter",scale:.7,children:a.jsx(u.u,{resume:e,settings:{...m.DF,fontSize:"12",formToHeading:{workExperiences:e.workExperiences[0].company?"WORK EXPERIENCE":"",educations:e.educations[0].school?"EDUCATION":"",projects:e.projects[0].project?"PROJECT":"",skills:e.skills.featuredSkills[0].skill?"SKILLS":"",custom:"CUSTOM SECTION"}}})})})};r()}catch(e){r(e)}})},9765:(e,t,s)=>{"use strict";s.d(t,{P:()=>i,f:()=>l});var r=s(4340),a=s(701);let l={profile:{name:"Zulikat",summary:"Software engineer obsessed with building exceptional products that people love",email:"test@gmail.com",phone:"123-456-7890",location:"TOR,CANADA",url:"linkedin.com/in/yourusername"},workExperiences:[{company:"ABC Company",jobTitle:"Software Engineer",date:"May 2023 - Present",descriptions:["Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences","Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences","Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences"]},{company:"DEF Organization",jobTitle:"Software Engineer",date:"May 2022 - May 2023",descriptions:["Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences","Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences","Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences"]},{company:"XYZ Company",jobTitle:"Software Engineer",date:"May 2021 - May 2022",descriptions:["Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences"]}],educations:[{school:"XYZ University",degree:"Bachelor of Science in Computer Science",date:"Sep 2018 - Aug 2022",gpa:"8.55",descriptions:["Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences"]}],projects:[{project:"Project1",date:"Fall 2021",descriptions:["Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences"]}],skills:{featuredSkills:[{skill:"Python",rating:3},{skill:"TypeScript",rating:3},{skill:"React",rating:3}],descriptions:["Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git","Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile"]},custom:{descriptions:[]}},i={profile:(0,r.I)(a.c1),educations:[(0,r.I)(a.cS)],projects:[(0,r.I)(a.n_)],custom:{descriptions:[]},workExperiences:l.workExperiences.map(()=>(0,r.I)(a.O3)),skills:{featuredSkills:l.skills.featuredSkills.map(e=>({skill:"",rating:e.rating})),descriptions:[]}}},4952:(e,t,s)=>{"use strict";s.d(t,{X:()=>function* e(t,s,a=0){let l=0===a?(0,r.I)(t):t;for(let[t,i]of Object.entries(s))if("object"==typeof i){let s=e(l[t],i,a+1);for(;!s.next().done;)yield(0,r.I)(l)}else for(let e=0;e<=i.length;e++)l[t]=i.slice(0,e),yield(0,r.I)(l)}});var r=s(4340)},4340:(e,t,s)=>{"use strict";s.d(t,{I:()=>r});let r=e=>JSON.parse(JSON.stringify(e))},3156:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(9510),a=s(1812),l=s.n(a);let i=({maxWidth:e,minWidth:t=0,className:s=""})=>r.jsx("div",{className:`invisible shrink-[10000] grow ${s}`,style:{maxWidth:`${e}px`,minWidth:`${t}px`}}),n=(0,s(8570).createProxy)(String.raw`/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/home/AutoTypingResume.tsx#AutoTypingResume`),o=()=>(0,r.jsxs)("section",{className:"lg:flex lg:h-[825px] lg:justify-center",children:[r.jsx(i,{maxWidth:75,minWidth:0,className:"hidden lg:block"}),(0,r.jsxs)("div",{className:"mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left",children:[(0,r.jsxs)("h1",{className:"text-primary pb-2 text-4xl font-bold lg:text-5xl",children:["Create a professional",r.jsx("br",{}),"resume easily"]}),r.jsx("p",{className:"mt-3 text-lg lg:mt-5 lg:text-xl",children:"With this powerful resume builder"}),r.jsx(l(),{href:"/resume-import",className:"btn-primary mt-6 lg:mt-14",children:"Create Resume"}),(0,r.jsxs)("p",{className:"mt-3 text-sm text-gray-600 lg:mt-36",children:["Already have a resume? Test its ATS readability with the"," ",r.jsx(l(),{href:"/resume-parser",className:"underline underline-offset-2 text-bold text-[#3B82F6] font-bold",children:"resume parser"})]})]}),r.jsx(i,{maxWidth:100,minWidth:50,className:"hidden lg:block"})," ",r.jsx("div",{className:"mt-6 flex justify-center lg:mt-4 lg:block lg:grow",children:r.jsx(n,{})})]}),d=[{title:"Add a resume pdf",text:"or create from scratch"},{title:"Preview design",text:"and make edits"},{title:"Download new resume",text:"and apply with confidence"}],c=()=>(0,r.jsxs)("section",{className:"mx-auto mt-8 rounded-2xl bg-sky-50 bg-dot px-8 pb-12 pt-10 lg:mt-2",children:[r.jsx("h1",{className:"text-center text-3xl font-bold",children:"3 Simple Steps"}),r.jsx("div",{className:"mt-8 flex justify-center",children:r.jsx("dl",{className:"flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-20",children:d.map(({title:e,text:t},s)=>(0,r.jsxs)("div",{className:"relative self-start pl-14",children:[(0,r.jsxs)("dt",{className:"text-lg font-bold text-[#3B82F6]",children:[r.jsx("div",{className:"bg-primary absolute left-0 top-1 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-80",children:r.jsx("div",{className:"flex h-full w-full items-center justify-center rounded-full bg-white",children:r.jsx("div",{className:"text-primary -mt-0.5 text-2xl",children:s+1})})}),e]}),r.jsx("dd",{children:t})]},s))})})]});function u(){return(0,r.jsxs)("main",{className:"mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12",children:[r.jsx(o,{}),r.jsx(c,{})]})}},1812:(e,t,s)=>{"use strict";let{createProxy:r}=s(8570);e.exports=r("/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/node_modules/next/dist/client/link.js")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,31,484,611,260],()=>s(1552));module.exports=r})();