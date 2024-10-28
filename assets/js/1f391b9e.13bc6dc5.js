"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3085],{14247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(67294);var i=t(90512),o=t(10833),a=t(35281),r=t(39096),s=t(45042),l=t(39407),c=t(22212);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(85893);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:h,unlisted:f},assets:x}=n,{keywords:p,wrapperClassName:g,hide_table_of_contents:v}=h,j=x.image??h.image;return(0,m.jsx)(o.FG,{className:(0,i.Z)(g??a.k.wrapper.mdxPages,a.k.page.mdxPage),children:(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(o.d,{title:t,description:u,keywords:p,image:j}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,i.Z)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,i.Z)("col",!v&&"col--8"),children:[f&&(0,m.jsx)(c.Z,{}),(0,m.jsx)("article",{children:(0,m.jsx)(s.Z,{children:(0,m.jsx)(n,{})})})]}),!v&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(l.Z,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},93743:(e,n,t)=>{t.d(n,{Z:()=>x});var i=t(67294),o=t(86668);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):i.push(o)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>s(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let o=n;o<=t;o+=1)i.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var m=t(33692),u=t(85893);function h(e){let{toc:n,className:t,linkClassName:i,isChild:o}=e;return n.length?(0,u.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const x=(0,o.L)(),p=c??x.tableOfContents.minHeadingLevel,g=m??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,i.useMemo)((()=>r({toc:a(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:p,maxHeadingLevel:g});return d((0,i.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:g}}),[s,l,p,g])),(0,u.jsx)(f,{toc:v,className:t,linkClassName:s,...h})}},39407:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var i=t(90512),o=t(93743);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(85893);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.Z)(a.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(o.Z,{...t,linkClassName:s,linkActiveClassName:l})})}},22212:(e,n,t)=>{t.d(n,{Z:()=>h});t(67294);var i=t(90512),o=t(95999),a=t(35742),r=t(85893);function s(){return(0,r.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(a.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(35281),m=t(47083);function u(e){let{className:n}=e;return(0,r.jsx)(m.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.Z)(n,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},47083:(e,n,t)=>{t.d(n,{Z:()=>x});var i=t(95999),o=t(35281),a=t(90512),r=t(67294);const s={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg"};var l=t(85893);function c(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v4m0 4h.01m9.72 1-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2.001 2.001 0 0 0 1.73-3Z"})})}function d(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"})})}function m(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"m3.11 2.5 3.805.031c.37.003.717.175.944.467l13.594 17.528a.604.604 0 0 1-.477.974h-3.983c-.377 0-.732-.176-.96-.475l-3.791-5.192-4.196 5.209c-.23.29-.578.458-.947.458H3.105a.604.604 0 0 1-.474-.979l6.657-8.435L2.625 3.47a.604.604 0 0 1 .393-.965L3.11 2.5Zm17.859 0a.604.604 0 0 1 .48.979l-5.96 7.51c-.425-.333-3.724-3.088-.542-6.776l.095-.111.145-.168c.277-.325.71-.83.804-.944.315-.38.574-.456.941-.459L20.97 2.5Z"})})}const u={note:{infimaClassName:"secondary",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m21.44 11.05-9.19 9.19a6.003 6.003 0 1 1-8.49-8.49l8.57-8.57A4.006 4.006 0 0 1 18 8.84l-8.59 8.57a2.001 2.001 0 1 1-2.83-2.83l8.49-8.48"})})},label:(0,l.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"Note"})},tip:{infimaClassName:"tip",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 18h6m-5 4h4m1.09-8c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 1 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"})})},label:(0,l.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"Tip"})},danger:{infimaClassName:"danger",iconComponent:c,label:(0,l.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"Danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"})})},label:(0,l.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"Info"})},caution:{infimaClassName:"warning",iconComponent:d,label:(0,l.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"Caution"})},warning:{infimaClassName:"warning",iconComponent:d,label:(0,l.jsx)(i.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"Warning"})},xstate:{infimaClassName:"xstate",iconComponent:m,label:(0,l.jsx)(i.Z,{id:"theme.admonition.xstate",description:"The default label used for the XState admonition (:::xstate)",children:"XState"})},typescript:{infimaClassName:"typescript",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{fillRule:"nonzero",d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm-3.066 8.365c-1.496 0-2.573.815-2.563 2.033-.003.994.694 1.553 1.825 1.812l.684.16c.719.166 1.042.36 1.048.728-.006.4-.38.678-1.016.678-.7 0-1.16-.326-1.195-.956h-1.515c.019 1.531 1.083 2.263 2.729 2.263 1.63 0 2.595-.738 2.602-1.981-.007-1.046-.713-1.685-2.004-1.97l-.563-.127c-.594-.128-.971-.326-.959-.716.004-.358.31-.617.924-.617.617 0 .956.278.997.745h1.515c-.013-1.224-.988-2.052-2.509-2.052Zm-3.12.09H7.28v1.284H9.27V18h1.56v-5.26h1.984v-1.285Z"})})},label:(0,l.jsx)(i.Z,{id:"theme.admonition.typescript",description:"The default label used for the TypeScript admonition (:::typescript)",children:"TypeScript"})},studio:{infimaClassName:"studio",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("g",{fillRule:"evenodd",children:(0,l.jsx)("path",{d:"M15.327 5.224a2.362 2.362 0 1 0 0-4.724 2.362 2.362 0 0 0 0 4.724M21.049 13.251v-.002L8.299.5a4.711 4.711 0 0 0 .01 6.67l4.058 4.057-.007.007 2.3 2.3a.463.463 0 0 1 .138.325.46.46 0 0 1-.148.331l-2.682 2.682a.46.46 0 0 1-.65 0l-2.69-2.69a.46.46 0 0 1 0-.65c1.835-1.959.465-4.304-.383-5.098l-.6-.6-5.376 5.377a.919.919 0 0 0 0 1.3l8.72 8.72a.919.919 0 0 0 1.3 0l8.702-8.702a.869.869 0 0 0 .058-1.278"})})})},label:(0,l.jsx)(i.Z,{id:"theme.admonition.studio",description:"The default label used for the Stately Studio admonition (:::studio)",children:"Studio"})},warningxstate:{infimaClassName:"warningxstate",iconComponent:m,label:(0,l.jsx)(i.Z,{id:"theme.admonition.warningxstate",description:"The default label used for the XState warning admonition (:::warningxstate)",children:"XState Warning"})},new:{infimaClassName:"new",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5.8 11.3 2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3-.82-.33c-.86-.34-1.82.2-1.98 1.11-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98-.7.1-1.22.72-1.22 1.43V7m2 6c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"})})},label:(0,l.jsx)(i.Z,{id:" ",description:"The default label used for the XState warning admonition (:::new)",children:"New"})},breakingchange:{infimaClassName:"breakingchange",iconComponent:c,label:(0,l.jsx)(i.Z,{id:" ",description:"The default label used for the breaking change admonition (:::breakingchange)",children:"Breaking change"})},video:{infimaClassName:"video",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",children:(0,l.jsx)("path",{stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m5 3 14 9-14 9V3Z"})})},label:(0,l.jsx)(i.Z,{id:"theme.admonition.video",description:"The default label used for the XState warning admonition (:::video)",children:"Video"})}},h={secondary:"note",important:"info",success:"tip",warning:"danger"};function f(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=r.Children.toArray(e),t=n.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=(0,l.jsx)(l.Fragment,{children:n.filter((e=>e!==t))});return{mdxAdmonitionTitle:t,rest:i}}(e.children);return{...e,title:e.title??n,children:t}}function x(e){const{children:n,type:t,title:i,icon:r}=f(e),c=function(e){const n=h[e]??e,t=u[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),u.info)}(t),{iconComponent:d}=(i??c.label,c),m=r??(0,l.jsx)(d,{});return(0,l.jsxs)("aside",{className:(0,a.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,s.admonition),children:[(0,l.jsx)("div",{className:s.admonitionHeading,children:(0,l.jsx)("span",{className:s.admonitionIcon,children:m})}),(0,l.jsx)("div",{className:s.admonitionContent,children:n})]})}},6242:(e,n,t)=>{t.d(n,{Z:()=>f});var i=t(9756),o=t(85162),a=t(65099),r=t(19965),s=t(78241),l=t(67294),c=t(85893);var d=t(92949);const m="embed_rxbU";function u(e,n){const t=new URL(e);for(const i in n)t.searchParams.set(i,n[i]);return t.toString()}var h=t(56222);const f={...i.Z,...s,Announcement:e=>{let{cta:n,href:t,children:i}=e;const[o,a]=(0,l.useState)(!1);return(0,c.jsxs)("section",{style:{backgroundColor:"RGBA(144, 205, 244, .15)",marginBlock:"16px",marginInline:"-16px",paddingInline:"16px",paddingBlock:"16px",marginTop:"32px",display:"flex",flexDirection:"column",gap:"5px",alignItems:"center"},children:[(0,c.jsx)("p",{style:{margin:"0!important",textAlign:"left"},children:i}),(0,c.jsx)("a",{style:{justifyContent:"center",backgroundColor:o?"#1d56dd":"#0b6dff",transition:"background-color 0.2s ease-in-out",padding:"8px 16px",borderRadius:"8px",color:"white",textDecoration:"none",width:"max-content"},href:t,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:n})]})},Tweet:function(e){let{id:n}=e;return(0,c.jsx)(h.tP,{hideConversation:!0,tweetLink:`anyuser/status/${n}`,theme:"dark",align:"center"})},YouTube:function(e){let{id:n}=e;return(0,c.jsx)("div",{style:{margin:"20px 0"},children:(0,c.jsx)(h._F,{youTubeId:n})})},EmbedMachine:function(e){let{name:n,embedURL:t}=e;const{colorMode:i}=(0,d.I)();return(0,c.jsxs)("iframe",{loading:"lazy",src:u(t,{colorMode:i}),className:m,children:[(0,c.jsxs)("a",{href:t,children:["View the ",(0,c.jsx)("em",{children:n})," machine in Stately Studio"]}),"."]})},ThemedImage:r.Z,Tabs:a.Z,TabItem:o.Z}},65099:(e,n,t)=>{t.d(n,{Z:()=>h});var i=t(67294),o=t(90512),a=t(12466),r=t(70989),s=t(72389);const l={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var c=t(85893);function d(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=d.indexOf(n),o=s[t].value;o!==i&&(m(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...a,className:(0,o.Z)("tabs__item",l.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function m(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"padding-top--s"}):null}return(0,c.jsx)("div",{className:"padding-top--s",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function u(e){const n=(0,r.Y)(e);return(0,c.jsxs)("div",{className:(0,o.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(d,{...e,...n}),(0,c.jsx)(m,{...e,...n})]})}function h(e){const n=(0,s.Z)();return(0,c.jsx)(u,{...e},String(n))}}}]);