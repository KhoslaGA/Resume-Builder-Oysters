(()=>{var e={};e.id=154,e.ids=[154],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},8072:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),r(6870),r(5606),r(5866);var a=r(3191),l=r(8716),t=r(7922),i=r.n(t),n=r(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(s,o);let d=["",{children:["resume-parser",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6870)),"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/resume-parser/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5606)),"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/resume-parser/page.tsx"],m="/resume-parser/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/resume-parser/page",pathname:"/resume-parser",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7849:(e,s,r)=>{Promise.resolve().then(r.bind(r,7982))},3116:(e,s,r)=>{"use strict";r.d(s,{G:()=>l});var a=r(326);let l=({maxWidth:e,minWidth:s=0,className:r=""})=>a.jsx("div",{className:`invisible shrink-[10000] grow ${r}`,style:{maxWidth:`${e}px`,minWidth:`${s}px`}})},7982:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>N});var a=r(326),l=r(434),t=r(7577),i=r(2920),n=r(5777),o=r(9690),d=r(3116),c=r(8830);let m={1:"text-2xl font-bold",2:"text-xl font-bold",3:"text-lg font-semibold"},p=({level:e=1,children:s,className:r=""})=>{let l=`h${e}`;return a.jsx(l,{className:(0,c.cx)("mt-[2em] text-gray-900",m[e],r),children:s})},u=({smallMarginTop:e=!1,children:s,className:r=""})=>a.jsx("p",{className:(0,c.cx)(e?"mt-[0.8em]":"mt-[1.5em]","text-lg text-gray-700",r),children:s});var x=r(550),h=r(4340),j=r(701);let b=({children:e})=>a.jsx("tr",{className:"divide-x bg-gray-50",children:a.jsx("th",{className:"px-3 py-2 font-semibold",scope:"colgroup",colSpan:2,children:e})}),g=({label:e,value:s,className:r})=>(0,a.jsxs)("tr",{className:(0,c.cx)("divide-x",r),children:[a.jsx("th",{className:"px-3 py-2 font-medium",scope:"row",children:e}),a.jsx("td",{className:"w-full px-3 py-2",children:"string"==typeof s?s:s.map((e,s)=>(0,a.jsxs)(t.Fragment,{children:["• ",e]},s))})]}),f=({resume:e})=>{let s=0===e.educations.length?[(0,h.I)(j.cS)]:e.educations,r=0===e.workExperiences.length?[(0,h.I)(j.O3)]:e.workExperiences,l=[...e.skills.descriptions],i=e.skills.featuredSkills.filter(e=>e.skill.trim()).map(e=>e.skill).join(", ").trim();return i&&l.unshift(i),a.jsx("table",{className:"mt-2 w-full border text-sm text-gray-900",children:(0,a.jsxs)("tbody",{className:"divide-y text-left align-top",children:[a.jsx(b,{children:"Profile"}),a.jsx(g,{label:"Name",value:e.profile.name}),a.jsx(g,{label:"Email",value:e.profile.email}),a.jsx(g,{label:"Phone",value:e.profile.phone}),a.jsx(g,{label:"Location",value:e.profile.location}),a.jsx(g,{label:"Link",value:e.profile.url}),a.jsx(g,{label:"Summary",value:e.profile.summary}),a.jsx(b,{children:"Education"}),s.map((e,r)=>(0,a.jsxs)(t.Fragment,{children:[a.jsx(g,{label:"School",value:e.school}),a.jsx(g,{label:"Degree",value:e.degree}),a.jsx(g,{label:"GPA",value:e.gpa}),a.jsx(g,{label:"Date",value:e.date}),a.jsx(g,{label:"Descriptions",value:e.descriptions,className:s.length-1!=0&&r!==s.length-1&&"!border-b-4"})]},r)),a.jsx(b,{children:"Work Experience"}),r.map((e,s)=>(0,a.jsxs)(t.Fragment,{children:[a.jsx(g,{label:"Company",value:e.company}),a.jsx(g,{label:"Job Title",value:e.jobTitle}),a.jsx(g,{label:"Date",value:e.date}),a.jsx(g,{label:"Descriptions",value:e.descriptions,className:r.length-1!=0&&s!==r.length-1&&"!border-b-4"})]},s)),e.projects.length>0&&a.jsx(b,{children:"Projects"}),e.projects.map((s,r)=>(0,a.jsxs)(t.Fragment,{children:[a.jsx(g,{label:"Project",value:s.project}),a.jsx(g,{label:"Date",value:s.date}),a.jsx(g,{label:"Descriptions",value:s.descriptions,className:e.projects.length-1!=0&&r!==e.projects.length-1&&"!border-b-4"})]},r)),a.jsx(b,{children:"Skills"}),a.jsx(g,{label:"Descriptions",value:l})]})})};r(5941);let v=[{fileUrl:"resume-example/public-resume.pdf",description:a.jsx("span",{className:"font-bold",children:"Took from public sources"})},{fileUrl:"resume-example/inhouse-resume.pdf",description:(0,a.jsxs)("span",{className:"font-bold",children:["Created with Inhouse Resume Builder -"," ",a.jsx(l.default,{href:"/resume-builder",className:"text-[#3B82F6]",children:"Build Resume now"})]})}],y=v[1].fileUrl;function N(){let[e,s]=(0,t.useState)(y),[r,l]=(0,t.useState)([]),m=(0,i.U)(r||[]),h=(0,n.A_)(m),j=(0,o.n)(h);return a.jsx("main",{className:"h-full w-full overflow-hidden",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-6",children:[(0,a.jsxs)("div",{className:"flex justify-center px-2 md:col-span-3 md-h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end",children:[a.jsx("section",{className:"mt-5 grow px-4 md:max-w-[600px] md:px-0",children:a.jsx("div",{className:"aspect-h-[9.5] aspect-w-7",children:a.jsx("iframe",{src:`${e}#navpanes=0`,className:"h-full w-full"})})}),a.jsx(d.G,{maxWidth:45,className:"hidden md:block"})]}),(0,a.jsxs)("div",{className:"flex px-6 text-gray-900 md:col-span-3 md-h-[calc(100vh-var(--top-nav-bar-height))] md:overflow-y-scroll",children:[a.jsx(d.G,{maxWidth:45,className:"hidden md:block"}),(0,a.jsxs)("section",{className:"max-w-[600px] grow",children:[a.jsx(p,{className:"text-primary !mt-4",children:"Resume Parser Playground"}),a.jsx(u,{smallMarginTop:!0,children:"This playground showcases the Inhouse resume parser and its ability to parse information from a resume PDF. Click around the PDF examples below to observe different parsing results."}),a.jsx("div",{className:"mt-3 flex gap-3",children:v.map((r,l)=>(0,a.jsxs)("article",{className:(0,c.cx)("flex-1 cursor-pointer rounded-md border-2 px-4 py-3 shadow-sm outline-none hover:bg-gray-50 focus:bg-gray-50",r.fileUrl===e?"border-blue-400":"border-gray-300"),onClick:()=>s(r.fileUrl),onKeyDown:e=>{["Enter"," "].includes(e.key)&&s(r.fileUrl)},tabIndex:0,children:[(0,a.jsxs)("h1",{className:"font-semibold",children:["Resume Example ",l+1]}),a.jsx("p",{className:"mt-2 text-sm text-gray-500",children:r.description})]},l))}),(0,a.jsxs)(u,{children:["You can also"," ",a.jsx("span",{className:"font-semibold",children:"add your resume below"})," to access how well your resume would be parsed by similar Application Tracking System (ATS) used in job applications. The more information it can parse out, the better it indicates the resume is well formatted and easy to read."]}),a.jsx("div",{className:"mt-3",children:a.jsx(x.Z,{onFileUrlChange:e=>s(e||y),playgroundView:!0})}),a.jsx(p,{level:2,className:"!mt-[1.2em]",children:"Resume Parsing Results"}),a.jsx(f,{resume:j})]})]})]})})}},6870:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});let a=(0,r(8570).createProxy)(String.raw`/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/resume-parser/page.tsx#default`)}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),a=s.X(0,[948,31,484,943,941],()=>r(8072));module.exports=a})();