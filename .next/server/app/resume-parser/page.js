(()=>{var e={};e.id=592,e.ids=[592],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},4667:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var l=r(260),a=r(8203),t=r(5155),i=r.n(t),o=r(7292),n={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);r.d(s,n);let d=["",{children:["resume-parser",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2250)),"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/resume-parser/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9611)),"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/resume-parser/page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},p=new l.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/resume-parser/page",pathname:"/resume-parser",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5775:(e,s,r)=>{Promise.resolve().then(r.bind(r,2250))},2207:(e,s,r)=>{Promise.resolve().then(r.bind(r,7941))},4504:(e,s,r)=>{"use strict";r.d(s,{l:()=>a});var l=r(5512);let a=({maxWidth:e,minWidth:s=0,className:r=""})=>(0,l.jsx)("div",{className:`invisible shrink-[10000] grow ${r}`,style:{maxWidth:`${e}px`,minWidth:`${s}px`}})},7941:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>w});var l=r(5512),a=r(6008),t=r(8009),i=r(396),o=r(6886),n=r(1195),d=r(4504),c=r(7428);let m={1:"text-2xl font-bold",2:"text-xl font-bold",3:"text-lg font-semibold"},p=({level:e=1,children:s,className:r=""})=>{let a=`h${e}`;return(0,l.jsx)(a,{className:(0,c.cx)("mt-[2em] text-gray-900",m[e],r),children:s})},u=({smallMarginTop:e=!1,children:s,className:r=""})=>(0,l.jsx)("p",{className:(0,c.cx)(e?"mt-[0.8em]":"mt-[1.5em]","text-lg text-gray-700",r),children:s});var x=r(8971),h=r(1713),j=r(8865);let f=({children:e})=>(0,l.jsx)("tr",{className:"divide-x bg-gray-50",children:(0,l.jsx)("th",{className:"px-3 py-2 font-semibold",scope:"colgroup",colSpan:2,children:e})}),b=({label:e,value:s,className:r})=>(0,l.jsxs)("tr",{className:(0,c.cx)("divide-x",r),children:[(0,l.jsx)("th",{className:"px-3 py-2 font-medium",scope:"row",children:e}),(0,l.jsx)("td",{className:"w-full px-3 py-2",children:"string"==typeof s?s:s.map((e,s)=>(0,l.jsxs)(t.Fragment,{children:["• ",e]},s))})]}),g=({resume:e})=>{let s=0===e.educations.length?[(0,h.G)(j.vg)]:e.educations,r=0===e.workExperiences.length?[(0,h.G)(j.m5)]:e.workExperiences,a=[...e.skills.descriptions],i=e.skills.featuredSkills.filter(e=>e.skill.trim()).map(e=>e.skill).join(", ").trim();return i&&a.unshift(i),(0,l.jsx)("table",{className:"mt-2 w-full border text-sm text-gray-900",children:(0,l.jsxs)("tbody",{className:"divide-y text-left align-top",children:[(0,l.jsx)(f,{children:"Profile"}),(0,l.jsx)(b,{label:"Name",value:e.profile.name}),(0,l.jsx)(b,{label:"Email",value:e.profile.email}),(0,l.jsx)(b,{label:"Phone",value:e.profile.phone}),(0,l.jsx)(b,{label:"Location",value:e.profile.location}),(0,l.jsx)(b,{label:"Link",value:e.profile.url}),(0,l.jsx)(b,{label:"Summary",value:e.profile.summary}),(0,l.jsx)(f,{children:"Education"}),s.map((e,r)=>(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(b,{label:"School",value:e.school}),(0,l.jsx)(b,{label:"Degree",value:e.degree}),(0,l.jsx)(b,{label:"GPA",value:e.gpa}),(0,l.jsx)(b,{label:"Date",value:e.date}),(0,l.jsx)(b,{label:"Descriptions",value:e.descriptions,className:s.length-1!=0&&r!==s.length-1&&"!border-b-4"})]},r)),(0,l.jsx)(f,{children:"Work Experience"}),r.map((e,s)=>(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(b,{label:"Company",value:e.company}),(0,l.jsx)(b,{label:"Job Title",value:e.jobTitle}),(0,l.jsx)(b,{label:"Date",value:e.date}),(0,l.jsx)(b,{label:"Descriptions",value:e.descriptions,className:r.length-1!=0&&s!==r.length-1&&"!border-b-4"})]},s)),e.projects.length>0&&(0,l.jsx)(f,{children:"Projects"}),e.projects.map((s,r)=>(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(b,{label:"Project",value:s.project}),(0,l.jsx)(b,{label:"Date",value:s.date}),(0,l.jsx)(b,{label:"Descriptions",value:s.descriptions,className:e.projects.length-1!=0&&r!==e.projects.length-1&&"!border-b-4"})]},r)),(0,l.jsx)(f,{children:"Skills"}),(0,l.jsx)(b,{label:"Descriptions",value:a})]})})};r(9096);let v=[{fileUrl:"resume-example/public-resume.pdf",description:(0,l.jsx)("span",{className:"font-bold",children:"Took from public sources"})},{fileUrl:"resume-example/inhouse-resume.pdf",description:(0,l.jsxs)("span",{className:"font-bold",children:["Created with Inhouse Resume Builder -"," ",(0,l.jsx)(a.default,{href:"/resume-builder",className:"text-[#3B82F6]",children:"Build Resume now"})]})}],y=v[1].fileUrl;function w(){let[e,s]=(0,t.useState)(y),[r,a]=(0,t.useState)([]),m=(0,i.y)(r||[]),h=(0,o.Ve)(m),j=(0,n.f)(h);return(0,l.jsx)("main",{className:"h-full w-full overflow-hidden",children:(0,l.jsxs)("div",{className:"grid md:grid-cols-6",children:[(0,l.jsxs)("div",{className:"flex justify-center px-2 md:col-span-3 md-h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end",children:[(0,l.jsx)("section",{className:"mt-5 grow px-4 md:max-w-[600px] md:px-0",children:(0,l.jsx)("div",{className:"aspect-h-[9.5] aspect-w-7",children:(0,l.jsx)("iframe",{src:`${e}#navpanes=0`,className:"h-full w-full"})})}),(0,l.jsx)(d.l,{maxWidth:45,className:"hidden md:block"})]}),(0,l.jsxs)("div",{className:"flex px-6 text-gray-900 md:col-span-3 md-h-[calc(100vh-var(--top-nav-bar-height))] md:overflow-y-scroll",children:[(0,l.jsx)(d.l,{maxWidth:45,className:"hidden md:block"}),(0,l.jsxs)("section",{className:"max-w-[600px] grow",children:[(0,l.jsx)(p,{className:"text-primary !mt-4",children:"Resume Parser Playground"}),(0,l.jsx)(u,{smallMarginTop:!0,children:"This playground showcases the Inhouse resume parser and its ability to parse information from a resume PDF. Click around the PDF examples below to observe different parsing results."}),(0,l.jsx)("div",{className:"mt-3 flex gap-3",children:v.map((r,a)=>(0,l.jsxs)("article",{className:(0,c.cx)("flex-1 cursor-pointer rounded-md border-2 px-4 py-3 shadow-sm outline-none hover:bg-gray-50 focus:bg-gray-50",r.fileUrl===e?"border-blue-400":"border-gray-300"),onClick:()=>s(r.fileUrl),onKeyDown:e=>{["Enter"," "].includes(e.key)&&s(r.fileUrl)},tabIndex:0,children:[(0,l.jsxs)("h1",{className:"font-semibold",children:["Resume Example ",a+1]}),(0,l.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:r.description})]},a))}),(0,l.jsxs)(u,{children:["You can also"," ",(0,l.jsx)("span",{className:"font-semibold",children:"add your resume below"})," to access how well your resume would be parsed by similar Application Tracking System (ATS) used in job applications. The more information it can parse out, the better it indicates the resume is well formatted and easy to read."]}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)(x.A,{onFileUrlChange:e=>s(e||y),playgroundView:!0})}),(0,l.jsx)(p,{level:2,className:"!mt-[1.2em]",children:"Resume Parsing Results"}),(0,l.jsx)(g,{resume:j})]})]})]})})}},2250:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});let l=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/resume-parser/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/gautamkhosla/Desktop/Codes/Resume Builder-Oysters/app/resume-parser/page.tsx","default")}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),l=s.X(0,[989,807,635,669,911],()=>r(4667));module.exports=l})();