"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{7293:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(7437),l=r(2265),s=r(8637),o=r(3145),i={src:"/_next/static/media/add-pdf.d5a58bd2.svg",height:99,width:86,blurWidth:0,blurHeight:0};let u=l.forwardRef(function(e,t){let{title:r,titleId:n,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},s),r?l.createElement("title",{id:n},r):null,l.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))}),a=l.forwardRef(function(e,t){let{title:r,titleId:n,...s}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},s),r?l.createElement("title",{id:n},r):null,l.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))});var c=r(5156),d=r(2209),f=r(354),m=r(8174);let p=async e=>{let t=await (0,m.g)(e),r=(0,f.U)(t),n=(0,d.A_)(r);return(0,c.n)(n)};var h=r(190),x=r(5171),g=r(1541),y=r(9376);let w={name:"",size:0,fileUrl:""},v=e=>{let t=e/1024;return t<1e3?t.toPrecision(3)+" KB":(t/1024).toPrecision(3)+" MB"};var j=e=>{let{onFileUrlChange:t,className:r,playgroundView:c=!1}=e,[d,f]=(0,l.useState)(w),[m,j]=(0,l.useState)(!1),[b,S]=(0,l.useState)(!1),k=!!d.name,O=(0,y.useRouter)(),N=e=>{d.fileUrl&&URL.revokeObjectURL(d.fileUrl);let{name:r,size:n}=e,l=URL.createObjectURL(e);f({name:r,size:n,fileUrl:l}),t(l)},E=async e=>{let t=e.target.files;t&&N(t[0])},C=async()=>{let e=await p(d.fileUrl),t=(0,h.I)(x.DF);if((0,g.pK)()){let r=Object.keys(t.formToShow),n={workExperiences:e.workExperiences.length>0,educations:e.educations.length>0,projects:e.projects.length>0,skills:e.skills.descriptions.length>0,custom:e.custom.descriptions.length>0};for(let e of r)t.formToShow[e]=n[e]}(0,g.Wq)({resume:e,settings:t}),O.push("/resume-builder")};return(0,n.jsx)("div",{className:(0,s.cx)("flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6",m&&"border-sky-400",c?"pb-6 pt-4":"py-12",r),onDragOver:e=>{e.preventDefault(),j(!0)},onDragLeave:()=>j(!1),onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];t.name.endsWith(".pdf")?(S(!1),N(t)):S(!0),j(!1)},children:(0,n.jsxs)("div",{className:(0,s.cx)("text-center",c?"space-y-2":"space-y-3"),children:[!c&&(0,n.jsx)(o.default,{src:i,className:"mx-auto h-14 w-14",alt:"Add Pdf","aria-hidden":"true",priority:!0}),k?(0,n.jsxs)("div",{className:"flex items-center justify-center gap-3 pt-3",children:[(0,n.jsxs)("div",{className:"pl-7 font-semibold text-gray-900",children:[d.name," - ",v(d.size)]}),(0,n.jsx)("button",{type:"button",className:"outline-theme-blue rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500",title:"Remove file",onClick:()=>{f(w),t("")},children:(0,n.jsx)(a,{className:"h-6 w-6"})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:(0,s.cx)("pt-3 text-gray-700",!c&&"text-lg font-semibold"),children:"Browse a pdf file or drop it here"}),(0,n.jsxs)("p",{className:"flex text-sm text-gray-500",children:[(0,n.jsx)(u,{className:"mr-1 mt-1 h-3 w-3 text-gray-400"}),"File data is used locally and never leaves your browser"]})]}),(0,n.jsx)("div",{className:"pt-4",children:k?(0,n.jsxs)(n.Fragment,{children:[!c&&(0,n.jsx)("button",{type:"button",className:"btn-primary",onClick:C,children:"Import and Continue"}),(0,n.jsxs)("p",{className:(0,s.cx)("text-gray-500",!c&&"mt-6"),children:["Note: ",c?"Parser":"Import"," works best on single column resume"]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",{className:(0,s.cx)("within-outline-theme-purple cursor-pointer rounded-full px-6 pb-2.5 pt-2 font-semibold shadow-sm",c?"border":"bg-primary"),children:["Browse file",(0,n.jsx)("input",{type:"file",className:"sr-only",accept:".pdf",onChange:E})]}),b&&(0,n.jsx)("p",{className:"mt-6 text-red-400",children:"Only pdf file is supported"})]})})]})})}},8637:function(e,t,r){r.d(t,{cx:function(){return n}});let n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let n=[];for(let e of t)"string"==typeof e&&n.push(e.trim());return n.join(" ")}},190:function(e,t,r){r.d(t,{I:function(){return n}});let n=e=>JSON.parse(JSON.stringify(e))},5156:function(e,t,r){r.d(t,{n:function(){return X}});var n=r(2209);let l=(e,t)=>{let r=e.map(e=>({text:e.text,score:0,match:!1}));for(let n=0;n<e.length;n++){let l=e[n];for(let e of t){let[t,s,o]=e,i=t(l);if(i){let e=l.text;o&&"object"==typeof i&&(e=i[0]);let t=r[n];l.text===e?(t.score+=s,o&&(t.match=!0)):r.push({text:e,score:s,match:!0})}}}return r},s=function(e,t){var r;let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=l(e,t),i=[],u=-1/0;for(let{text:e,score:t}of o)t>=u&&(t>u&&(i=[]),i.push(e),u=t);return n&&u<=0?["",o]:[s?i.map(e=>e.trim()).join(" "):null!==(r=i[0])&&void 0!==r?r:"",o]},o=(e,t)=>{for(let r in e)if(t.some(e=>r.toLowerCase().includes(e)))return e[r];return[]},i=e=>e.text.includes("@"),u=e=>/\([0-9]+\)/.test(e.text),a=e=>/[0-9]/.test(e.text),c=e=>e.text.match(/[A-Z][a-zA-Z\s]+,[A-Z]{2}/),d=e=>e.text.includes(","),f=e=>e.text.includes("/"),m=e=>e.text.split(" ").length>=4,p=[[e=>e.text.match(/^[A-Za-z\s\.]+$/),3,!0],[n.nJ,2],[n.Pd,2],[i,-4],[a,-4],[u,-4],[f,-4],[d,-4],[m,-2]],h=[[e=>e.text.match(/\S+@\S+\.\S+/),4,!0],[n.nJ,-1],[n.Pd,-1],[u,-4],[d,-4],[f,-4],[m,-4]],x=[[e=>e.text.match(/\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}/),4,!0],[n.lZ,-4]],g=[[c,4,!0],[n.nJ,-1],[i,-4],[u,-3],[f,-4]],y=[[e=>e.text.match(/\S+\.[a-z]+\/S+/),4,!0],[e=>e.text.match(/https?:\/\/S+\.\S+/),3,!0],[e=>e.text.match(/www\.\S+\.\S+/),3,!0],[n.nJ,-1],[i,-4],[u,-3],[d,-4],[m,-4]],w=[[m,4],[n.nJ,-1],[i,-4],[u,-3],[c,-4,!1]],v=e=>{let t=(e.profile||[]).flat(),[r,n]=s(t,p),[l,i]=s(t,h),[u,a]=s(t,x),[c,d]=s(t,g),[f,m]=s(t,y),[v,j]=s(t,w,void 0,!0),b=o(e,["summary"]).flat().map(e=>e.text).join(" "),S=o(e,["objective"]).flat().map(e=>e.text).join(" ");return{profile:{name:r,email:l,phone:u,location:c,url:f,summary:b||S||v},profileScores:{name:n,email:i,phone:a,location:d,url:m,summary:j}}},j=["⋅","∙","\uD83D\uDF84","•","⦁","⚫︎","●","⬤","⚬","○"],b=e=>{for(let t=0;t<e.length;t++)for(let r of e[t])if(j.some(e=>r.text.includes(e)))return t},S=e=>/^[^0-9]+$/.test(e),k=e=>e.text.split(/\s/).filter(S).length>=8,O=e=>{let t=b(e);if(void 0===t)for(let r=0;r<e.length;r++){let n=e[r];if(1===n.length&&k(n[0])){t=r;break}}return t},N=e=>{if(void 0===b(e))return e.map(e=>e.map(e=>e.text).join(" "));let t="";for(let r of e.flat()){let e=r.text;t.endsWith(" ")||e.startsWith(" ")||(t+=" "),t+=e}let r=E(t),n=t.indexOf(r);return -1!==n&&(t=t.slice(n)),t.split(r).map(e=>e.trim()).filter(e=>!!e)},E=e=>{let t=j.reduce((e,t)=>(e[t]=0,e),{}),r=j[0];for(let n of e)t.hasOwnProperty(n)&&(t[n]++,t[n]>0&&(r=n));return r},C=e=>t=>t.text.includes(e),A=["January","February","March","April","May","June","July","August","September","October","November","December"],P=["Summer","Fall","Spring","Winter"],F=[[e=>/(?:19|20)\d{2}/.test(e.text),1],[e=>A.some(t=>e.text.includes(t)||e.text.includes(t.slice(0,4))),1],[e=>P.some(t=>e.text.includes(t)),1],[e=>e.text.includes("Present"),1],[d,-1]],J=e=>{let t=L(e),r=R(e,t);return 1===r.length&&(r=R(e,(e,t)=>!!((0,n.nJ)(t[0])&&(0,n.nJ)(e[0])))),r},L=e=>{let t={},r=e.map(e=>e[0].y),n=0,l=0;for(let e=1;e<r.length;e++){let s=Math.round(r[e-1]-r[e]);t[s]||(t[s]=0),t[s]+=1,t[s]>l&&(n=s,l=t[s])}let s=1.4*n;return(e,t)=>Math.round(t[0].y-e[0].y)>s},R=(e,t)=>{let r=[],n=[];for(let l=0;l<e.length;l++){let s=e[l];if(0===l){n.push(s);continue}t(s,e[l-1])&&(r.push(n),n=[]),n.push(s)}return n.length>0&&r.push(n),r},I=["College","University","Institute","School","Academy"],T=e=>I.some(t=>e.text.includes(t)),Z=["Bachelor","Master","PhD","Ph."],D=e=>Z.some(t=>e.text.includes(t))||/[ABM][A-Z\.]/.test(e.text),U=[[T,4],[D,-4],[a,-4]],M=[[D,4],[T,-4],[a,-3]],B=[[e=>e.text.match(/[0-4]\.\d{1,2}/),4,!0],[e=>{let t=parseFloat(e.text);return Number.isFinite(t)&&t<=110?[String(t)]:null},3,!0],[d,-3],[n.lZ,-4]],W=e=>{let t=[],r=[];for(let n of J(o(e,["education"]))){let e=n.flat(),[l,o]=s(e,U),[i,u]=s(e,M),[a,c]=s(e,B),[d,f]=s(e,F),m=[],p=O(n);void 0!==p&&(m=N(n.slice(p))),t.push({school:l,degree:i,gpa:a,date:d,descriptions:m}),r.push({schoolScores:o,degreeScore:u,gpaScores:c,dateScores:f})}if(0!==t.length){let r=o(e,["course"]);0!==r.length&&t[0].descriptions.push("Courses: "+r.flat().map(e=>e.text).join(" "))}return{educations:t,educationScores:r}},z=e=>{let t=[],r=[];for(let i of J(o(e,["project"]))){var l;let e=null!==(l=O(i))&&void 0!==l?l:1,o=i.slice(0,e).flat(),[u,a]=s(o,F),[c,d]=s(o,[[n.nJ,2],[C(u),-4]],!1),f=N(i.slice(e));t.push({project:c,date:u,descriptions:f}),r.push({projectScore:d,dateScores:a})}return{projects:t,projectScores:r}};var _=r(9881),H=r(190);let K=e=>{var t;let r=o(e,["skill"]),n=null!==(t=O(r))&&void 0!==t?t:0,l=N(r.slice(n)),s=(0,H.I)(_.oc);if(0!==n){let e=r.slice(0,n).flat().filter(e=>e.text.trim()).slice(0,6);for(let t=0;t<e.length;t++)s[t].skill=e[t].text}return{skills:{featuredSkills:s,descriptions:l}}},q=["work","experience","employment","history","job"],$=["Analyst","Agent","Administrator","Architect","Assistant","Associate","CTO"],Y=[[e=>$.some(t=>e.text.split(/\s/).some(e=>e===t)),4],[a,-4],[e=>e.text.split(/\s/).length>5,-2]],V=e=>{let t=[],r=[];for(let i of J(o(e,q))){var l;let e=null!==(l=O(i))&&void 0!==l?l:2,o=i.slice(0,e).flat(),[u,a]=s(o,F),[c,d]=s(o,Y),[f,m]=s(o,[[n.nJ,2],[C(u),-4],[C(c),-4]],!1),p=N(i.slice(e));t.push({company:f,jobTitle:c,date:u,descriptions:p}),r.push({companyScores:m,jonTitleScores:d,dateScores:a})}return{workExperiences:t,workExperiencesScores:r}},X=e=>{let{profile:t}=v(e),{educations:r}=W(e),{workExperiences:n}=V(e),{projects:l}=z(e),{skills:s}=K(e);return{profile:t,educations:r,workExperiences:n,projects:l,skills:s,custom:{descriptions:[]}}}},2209:function(e,t,r){r.d(t,{A_:function(){return l},Pd:function(){return a},lZ:function(){return u},nJ:function(){return o}});let n=["experience","education","project","skill","job","course","extracurricular","objective","summary","award","honor","project"],l=e=>{let t={},r="profile",n=[];for(let o=0;o<e.length;o++){var l;let i=e[o],u=null===(l=i[0])||void 0===l?void 0:l.text.trim();s(i,o)?(t[r]=[...n],r=u,n=[]):n.push(i)}return n.length>0&&(t[r]=[...n]),t},s=(e,t)=>{let r=e.length>1,l=0===e.length;if(t<2||r||l)return!1;let s=e[0];if(o(s)&&a(s))return!0;let i=s.text.trim(),u=i.split(" ").filter(e=>"&"!==e).length<=2,d=/[A-Z]/.test(i.slice(0,1));return!!(u&&c(s)&&d&&n.some(e=>i.toLowerCase().includes(e)))},o=e=>i(e.fontName),i=e=>e.toLowerCase().includes("bold"),u=e=>/[a-zA-Z]/.test(e.text),a=e=>u(e)&&e.text.toUpperCase()===e.text,c=e=>/^[A-Za-z\s&]+$/.test(e.text)},354:function(e,t,r){r.d(t,{U:function(){return n}});let n=e=>{let t=[],r=[];for(let n of e)n.hasEOL?(""!==n.text.trim()&&r.push({...n}),t.push(r),r=[]):""!==n.text.trim()&&r.push({...n});r.length>0&&t.push(r);let n=s(t.flat());for(let e of t)for(let t=e.length-1;t>0;t--){let r=e[t],s=e[t-1],o=s.x+s.width;if(r.x-o<=n){l(s.text,r.text)&&(s.text+=" "),s.text+=r.text;let n=r.x+r.width;s.width=n-s.x,e.splice(t,1)}}return t},l=(e,t)=>{let r=e[e.length-1],n=t[0];return[[":",",","|","."].includes(r)&&" "!==n," "!==r&&["|"].includes(n)].some(e=>e)},s=e=>{e=e.filter(e=>""!==e.text.trim());let t={},r=0,n=0,l={},s="",o=0;for(let i of e){let{text:e,height:u,fontName:a}=i;t[u]||(t[u]=0),t[u]++,t[u]>n&&(r=u,n=t[u]),l[a]||(l[a]=0),l[a]+=e.length,l[a]>o&&(s=a,o=l[a])}let[i,u]=e.filter(e=>e.fontName===s&&e.height===r).reduce((e,t)=>{let[r,n]=e;return[r+t.width,n+t.text.length]},[0,0]);return i/u}},8174:function(e,t,r){r.d(t,{g:function(){return l}});var n=r(7781);n.Tu.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(n.i8,"/pdf.worker.min.js");let l=async e=>{let t=await n.Me(e).promise,r=[];for(let e=1;e<=t.numPages;e++){let n=await t.getPage(e),l=await n.getTextContent();await n.getOperatorList();let s=n.commonObjs,o=l.items.map(e=>{let{str:t,dir:r,transform:n,fontName:l,...o}=e,i=n[4],u=n[5],a=s.get(l).name,c=t.replace(/--/g,"-");return{...o,fontName:a,text:c,x:i,y:u}});r.push(...o)}let l=e=>!e.hasEOL&&""===e.text.trim();return r.filter(e=>!l(e))}},1541:function(e,t,r){r.d(t,{Wq:function(){return l},dJ:function(){return s},pK:function(){return o}});let n="resume-builder-parser-state",l=e=>{try{let t=JSON.stringify(e);localStorage.setItem(n,t)}catch(e){}},s=()=>{try{let e=localStorage.getItem(n);if(!e)return;return JSON.parse(e)}catch(e){return}},o=()=>!!s()},9881:function(e,t,r){r.d(t,{Dp:function(){return j},Ml:function(){return a},NR:function(){return m},O3:function(){return s},UF:function(){return x},Ue:function(){return g},WY:function(){return p},Wi:function(){return h},_I:function(){return O},b2:function(){return S},bh:function(){return k},c1:function(){return l},cS:function(){return o},fx:function(){return y},gY:function(){return E},hR:function(){return w},im:function(){return v},n_:function(){return i},oc:function(){return u},q1:function(){return f},sf:function(){return N},tM:function(){return b},xx:function(){return d}});var n=r(1455);let l={name:"",summary:"",email:"",phone:"",location:"",url:""},s={company:"",jobTitle:"",date:"",descriptions:[]},o={school:"",date:"",degree:"",gpa:"",descriptions:[]},i={project:"",date:"",descriptions:[]},u=Array(6).fill({skill:"",rating:4}),a={profile:l,workExperiences:[s],educations:[o],projects:[i],skills:{featuredSkills:u,descriptions:[]},custom:{descriptions:[]}},c=(0,n.oM)({name:"resume",initialState:a,reducers:{changeProfile:(e,t)=>{let{field:r,value:n}=t.payload;e.profile[r]=n},changeWorkExperience:(e,t)=>{let{idx:r,field:n,value:l}=t.payload;e.workExperiences[r][n]=l},changeEducations:(e,t)=>{let{idx:r,field:n,value:l}=t.payload;e.educations[r][n]=l},changeProjects:(e,t)=>{let{idx:r,field:n,value:l}=t.payload;e.projects[r][n]=l},changeSkills:(e,t)=>{let{field:r}=t.payload;if("descriptions"===r){let{value:r}=t.payload;e.skills.descriptions=r}else{let{idx:r,skill:n,rating:l}=t.payload,s=e.skills.featuredSkills[r];s.skill=n,s.rating=l}},changeCustom:(e,t)=>{let{value:r}=t.payload;e.custom.descriptions=r},addSectionInForm:(e,t)=>{let{form:r}=t.payload;switch(r){case"workExperiences":return e.workExperiences.push(structuredClone(s)),e;case"educations":return e.educations.push(structuredClone(o)),e;case"projects":return e.projects.push(structuredClone(i)),e}},moveSectionInForm:(e,t)=>{let{form:r,idx:n,direction:l}=t.payload;if("skills"!==r&&"custom"!==r){if(0===n&&"up"===l||n===e[r].length-1&&"down"===l)return e;let t=e[r][n];"up"===l?(e[r][n]=e[r][n-1],e[r][n-1]=t):(e[r][n]=e[r][n+1],e[r][n+1]=t)}},deleteSectionInFormByIdx:(e,t)=>{let{form:r,idx:n}=t.payload;"skills"!==r&&"custom"!==r&&e[r].splice(n,1)},setResume:(e,t)=>t.payload}}),{changeCustom:d,changeEducations:f,changeProjects:m,changeProfile:p,changeSkills:h,changeWorkExperience:x,addSectionInForm:g,moveSectionInForm:y,deleteSectionInFormByIdx:w,setResume:v}=c.actions,j=e=>e.resume,b=e=>e.resume.profile,S=e=>e.resume.workExperiences,k=e=>e.resume.educations,O=e=>e.resume.projects,N=e=>e.resume.skills,E=e=>e.resume.custom;t.ZP=c.reducer},5171:function(e,t,r){r.d(t,{Am:function(){return j},DF:function(){return o},De:function(){return w},Dy:function(){return u},I2:function(){return m},Lk:function(){return d},ON:function(){return c},V1:function(){return f},_S:function(){return h},cd:function(){return y},e:function(){return l},hs:function(){return g},rk:function(){return v},vi:function(){return p},wo:function(){return x},xw:function(){return s},z5:function(){return a}});var n=r(1455);let l="#38bdf8",s="#171717",o={themeColor:l,fontFamily:"Roboto",fontSize:"11",documentSize:"Letter",formToShow:{workExperiences:!0,educations:!0,projects:!0,skills:!0,custom:!0},formToHeading:{workExperiences:"WORK EXPERIENCE",educations:"EDUCATION",projects:"PROJECT",skills:"SKILLS",custom:"CUSTOM SECTION"},formsOrder:["workExperiences","educations","projects","skills","custom"],showBulletPoints:{educations:!0,projects:!0,skills:!0,custom:!0}},i=(0,n.oM)({name:"settings",initialState:o,reducers:{changeSettings:(e,t)=>{let{field:r,value:n}=t.payload;e[r]=n},changeShowForm:(e,t)=>{let{field:r,value:n}=t.payload;e.formToShow[r]=n},changeFormHeading:(e,t)=>{let{field:r,value:n}=t.payload;e.formToHeading[r]=n},changeFormOrder:(e,t)=>{let{form:r,type:n}=t.payload,l=e.formsOrder.length-1,s=e.formsOrder.indexOf(r),o="up"===n?s-1:s+1;o>=0&&o<=l&&((t,r)=>{let n=e.formsOrder[t];e.formsOrder[t]=e.formsOrder[r],e.formsOrder[r]=n})(s,o)},changeShowBulletPoints:(e,t)=>{let{field:r,value:n}=t.payload;e.showBulletPoints[r]=n},setSettings:(e,t)=>t.payload}}),{changeSettings:u,changeShowForm:a,changeFormHeading:c,changeFormOrder:d,changeShowBulletPoints:f,setSettings:m}=i.actions,p=e=>e.settings,h=e=>e.settings.themeColor,x=e=>t=>t.settings.formToShow[e],g=e=>t=>t.settings.formToHeading[e],y=e=>e.settings.formsOrder,w=e=>t=>t.settings.formsOrder[0]===e,v=e=>t=>t.settings.formsOrder[t.settings.formsOrder.length-1]===e,j=e=>t=>t.settings.showBulletPoints[e];t.ZP=i.reducer}}]);