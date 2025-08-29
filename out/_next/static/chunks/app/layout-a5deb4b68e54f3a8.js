(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5551:function(e,t,r){Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.t.bind(r,7402,23)),Promise.resolve().then(r.t.bind(r,2126,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(9268);r(6006);var i=r(8121),n=r(1736),o=r(5846),s=r.n(o),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(i&&(i+=" "),i+=a);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[46rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4",children:n.Ok.map(n=>(0,a.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===n.name}),href:n.hash,onClick:()=>{t(n.name),r(Date.now())},children:[n.name,n.name===e&&(0,a.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},n.hash))})})]})}},8302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(9268),i=r(9380);r(6006);var n=r(8136);function o(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,a.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,a.jsx)(n.eSY,{}):(0,a.jsx)(n.s1t,{})})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return n},default:function(){return o},useActiveSectionContext:function(){return s}});var a=r(9268),i=r(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[r,o]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,a.jsx)(n.Provider,{value:{activeSection:r,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o},useTheme:function(){return s}});var a=r(9268),i=r(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[r,o]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(o(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(o("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(n.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(o("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(o("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},1736:function(e,t,r){"use strict";r.d(t,{yN:function(){return o},$c:function(){return s},Ok:function(){return n},nD:function(){return l},ZU:function(){return c}});var a=r(6006),i=r(7782);let n=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Education",hash:"#education"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],o=[{degree:"Bachelor of Science in Computer Science",institution:"National University of Modern Languages",location:"Rawalpindi, Pakistan",description:"Relevant coursework: Algorithms, Data Structures, Machine Learning, Artificial Intelligence",date:"2021 - 2025",gradeScored:"3.78/4.00 CGPA"},{degree:"Data Analytics",institution:"Leverify Quest",location:"Rawalpindi, Pakistan",description:"Data Visualization, Interpretation, PowerBI",date:"2024"},{degree:"Python Basics - Coursera",institution:"University of Michigan",location:"USA",description:"Python Programming, Variables, Loops, Functions",date:"2023"}],s=[{title:"AI Machine Learning Developer",location:"Ash Tech's",description:"Worked on developing and implementing AI/ML models, while also collaborating with the team to integrate the solutions into real-world applications.",icon:a.createElement(i.qWM),date:"2025"},{title:"Machine Learning Intern",location:"Inotech Solutions",description:"Developed and implemented a machine learning model, built a user-friendly frontend with React.js for model interaction, and collaborated with a team to integrate the solution into a real-world application.",icon:a.createElement(i.qWM),date:"2024"}],l=[{title:"Fake News Detector",description:"Built a Fake News Detection system using ML models and NLP techniques, with a user-friendly React.js frontend, FastAPI, and MongoDB for real-time verification.",tags:["React","Next.js","MongoDB","Python","FastAPI"],imageUrl:{src:"/_next/static/media/FakeNewsDetection.8130705b.png",height:591,width:762,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAi0lEQVR42mMwM3BPsvG0EldiAAM2VlYGNn5GFl4GLy/v6Oio8PDw6JhoAwMDoBwrrzijZxtDaVnpnDmzp0yZ0tHZoa6uDtLEL8FomspgYGjo4uIKRHp6ujw83AICAgwMTExAeX4uZkkpKQkJSQVFBS0tTX5+fgagDDMng7CqoTA/LwMSYGRkZGBkBACnhRUHzdQwpQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},{title:"Large Document Summarizer",description:"Developed a Large Document Summarizer using BART-large-CNN with PDF and DOCX support for efficient summarization of lengthy documents.",tags:["React","Python","AI"],imageUrl:{src:"/_next/static/media/SmartSummarizer.cf4d0ca4.png",height:469,width:452,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAw0lEQVR42mNoaGhob28vLS2tra1pbW1tampqa2urqqpiAAJlFWUnJydPIPDydHR0ANJqamoMvb09ff39mRmZ5ha27JzKDCxKDBBw9erVQ4cOt7T12QWWmwS1GnvU62sHuLl5Mezdu3fN2rXTepZ11Rzy7b1fPPFxpvvEoMAwhu3bt69cuaqouNU3vN8ie4N5xgY940xvLy+G5cuXdXZ2efsGCinqySrbSIob8AjJy8tLMcABB4cgC48SM58yMys/AwMDAIYbQQmj/mz/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{title:"AI Content Detector",description:"Developed an AI Content Detector using GPT-2 and NLP techniques with perplexity, burstiness, and frequency analysis to identify AI-generated text.",tags:["Python","NLP","AI"],imageUrl:{src:"/_next/static/media/AIContentDetector.e23dcc38.png",height:735,width:595,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAnUlEQVR42mPILayobeyoqW8vr2mprm+vqGlmsHH2s3Xys3YPsnINtHb0tXbyY2AQ02dgEExubA/LyGdgYGBTtAKSEgwiil4JKYWlDfzCagwMfAzOnv7cQtJAGVt7l5CIWE8vb4bYpDRbBxcJGWUzL9/kzNzwyBiGsLCIgKAQUVEZFTuHuJSM0NgkBg1NLRtbWxNTU3NLK0c3DwVNPQA44iXuvzOUrwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}}],c=["Python","AI","ML","HTML","CSS","JavaScript","TypeScript","React","Next.js","Node.js","Git","Tailwind","MongoDB"]},7402:function(){},2126:function(e){e.exports={style:{fontFamily:"'__Inter_52d07b', '__Inter_Fallback_52d07b'",fontStyle:"normal"},className:"__className_52d07b"}},8919:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return $},ErrorIcon:function(){return F},LoaderIcon:function(){return H},ToastBar:function(){return ee},ToastIcon:function(){return q},Toaster:function(){return ei},default:function(){return en},resolveValue:function(){return E},toast:function(){return U},useToaster:function(){return _},useToasterStore:function(){return T}});var n,o=r(6006);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",i="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+o+";":a+="f"==n[1]?m(o,n):n+"{"+m(o,"k"==n[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(n,o):n+":"+o+";")}return r+(t&&i?t+"{"+i+"}":i)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,i)=>{var n;let o=f(e),s=p[o]||(p[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!p[s]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=m(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),n=p[s],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),s},g=(e,t,r)=>e.reduce((e,a,i)=>{let n=t[i];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,A,x,v=y.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function i(n,o){let s=Object.assign({},n),l=s.className||i.className;r.p=Object.assign({theme:A&&A()},s),r.o=/ *go\d+/.test(l),s.className=y.apply(r,a)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),x&&c[0]&&x(s),b(c,s)}return t?t(i):i}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,N=(a=0,()=>(++a).toString()),C=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},S=new Map,D=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),M({type:4,toastId:e})},1e3);S.set(e,t)},I=e=>{let t=S.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&I(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?P(e,{type:1,toast:r}):P(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?D(a):e.toasts.forEach(e=>{D(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},L=[],j={toasts:[],pausedAt:void 0},M=e=>{j=P(j,e),L.forEach(e=>{e(j)})},B={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},T=(e={})=>{let[t,r]=(0,o.useState)(j);(0,o.useEffect)(()=>(L.push(r),()=>{let e=L.indexOf(r);e>-1&&L.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||B[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},z=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||N()}),R=e=>(t,r)=>{let a=z(t,e,r);return M({type:2,toast:a}),a.id},U=(e,t)=>R("blank")(e,t);U.error=R("error"),U.success=R("success"),U.loading=R("loading"),U.custom=R("custom"),U.dismiss=e=>{M({type:3,toastId:e})},U.remove=e=>M({type:4,toastId:e}),U.promise=(e,t,r)=>{let a=U.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(U.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{U.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var O=(e,t)=>{M({type:1,toast:{id:e,height:t}})},G=()=>{M({type:5,time:Date.now()})},_=e=>{let{toasts:t,pausedAt:r}=T(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&U.dismiss(t.id);return}return setTimeout(()=>U.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,o.useCallback)(()=>{r&&M({type:6,time:Date.now()})},[r]),i=(0,o.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:n}=r||{},o=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:O,startPause:G,endPause:a,calculateOffset:i}}},F=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,$=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=w("div")`
  position: absolute;
`,V=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(J,null,t):t:"blank"===r?null:o.createElement(V,null,o.createElement(H,{...a}),"loading"!==r&&o.createElement(Q,null,"error"===r?o.createElement(F,{...a}):o.createElement($,{...a})))},W=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Z=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[W(r),Y(r)];return{animation:t?`${v(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},n=o.createElement(q,{toast:e}),s=o.createElement(K,{...e.ariaProps},E(e.message,e));return o.createElement(Z,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):o.createElement(o.Fragment,null,n,s))});n=o.createElement,m.p=void 0,b=n,A=void 0,x=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let n=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:n,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=_(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let n=r.position||t,s=er(n,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?E(r.message,r):i?i(r):o.createElement(ee,{toast:r,position:n}))}))},en=U}},function(e){e.O(0,[680,166,584,253,769,744],function(){return e(e.s=5551)}),_N_E=e.O()}]);