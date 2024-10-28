"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[9315],{58817:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var i=o(85893),t=o(11151);const d={title:"Embed machines using their embed URL",description:"You can embed your machines anywhere that supports iframes. Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned."},a=void 0,r={id:"embed",title:"Embed machines using their embed URL",description:"You can embed your machines anywhere that supports iframes. Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned.",source:"@site/docs/embed.mdx",sourceDirName:".",slug:"/embed",permalink:"/xstate-zh/docs/embed",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/embed.mdx",tags:[],version:"current",frontMatter:{title:"Embed machines using their embed URL",description:"You can embed your machines anywhere that supports iframes. Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned."},sidebar:"tutorialSidebar",previous:{title:"\u5206\u4eab",permalink:"/xstate-zh/docs/category/share"},next:{title:"Share machine images using their image URL",permalink:"/xstate-zh/docs/image"}},s={},c=[{value:"Copy the embed URL",id:"copy-the-embed-url",level:2},{value:"Example <code>&lt;iframe&gt;</code> code",id:"example-iframe-code",level:2},{value:"URL parameters, including color mode",id:"url-parameters-including-color-mode",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{EmbedMachine:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("EmbedMachine",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You can embed your machines anywhere that supports ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:(0,i.jsx)(n.code,{children:"<iframe>"})}),". Embed mode is a focused non-editable view of your machine in Stately Studio\u2019s editor, which can be zoomed and panned."]}),"\n",(0,i.jsx)(n.p,{children:"We love to use embedded machines in our docs! Below is an example of an embedded machine:"}),"\n",(0,i.jsx)(o,{name:"Embed feature machine",embedURL:"https://stately.ai/registry/editor/embed/9e7f6b1e-416a-491f-a4a0-bba386a02d8d?mode=Design&machineId=e94d5674-7ab7-4a4e-b7a8-781609bfe523"}),"\n",(0,i.jsx)(n.p,{children:"Your machine will only be embeddable if:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the project visibility is ",(0,i.jsx)(n.strong,{children:"public"})]}),"\n",(0,i.jsxs)(n.li,{children:["the project visibility is ",(0,i.jsx)(n.strong,{children:"unlisted"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Embed URLs are not available for private machines."}),"\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"/docs/projects/#change-a-projects-visibility",children:"how to change a project\u2019s visibility settings"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can also ",(0,i.jsx)(n.a,{href:"/xstate-zh/docs/image",children:"get your machine as an image"})," for platforms where ",(0,i.jsx)(n.code,{children:"<iframe>"})," is not supported."]})}),"\n",(0,i.jsx)(n.h2,{id:"copy-the-embed-url",children:"Copy the embed URL"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.strong,{children:"Share"})," button in Stately Studio\u2019s top bar to open the Share dialog."]}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.strong,{children:"Copy embed URL"})," button to copy the machine\u2019s embed URL to your clipboard."]}),"\n",(0,i.jsxs)(n.li,{children:["Use the embed URL in an ",(0,i.jsx)(n.code,{children:"<iframe>"})," to embed the machine anywhere that supports iframes. ",(0,i.jsx)(n.a,{href:"#example-iframe-code",children:"Find some example code below"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"example-iframe-code",children:["Example ",(0,i.jsx)(n.code,{children:"<iframe>"})," code"]}),"\n",(0,i.jsx)(n.p,{children:"The following HTML embeds the same machine at the top of this page in dark mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<iframe\n  loading="lazy"\n  src="https://stately.ai/registry/editor/embed/9e7f6b1e-416a-491f-a4a0-bba386a02d8d?mode=Design&machineId=e94d5674-7ab7-4a4e-b7a8-781609bfe523&colorMode=dark"\n  style="display: block; width: 100%; aspect-ratio: 6 / 4;"\n>\n  <a\n    href="https://stately.ai/registry/editor/embed/9e7f6b1e-416a-491f-a4a0-bba386a02d8d?mode=Design&machineId=e94d5674-7ab7-4a4e-b7a8-781609bfe523"\n  >\n    View the <em>Embed feature machine</em> machine in Stately Studio </a\n  >.\n</iframe>\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"In the future, we plan to provide configurable embeds with copy-and-paste code."}),(0,i.jsxs)(n.p,{children:["If you want us to prioritize improving embed mode, please ",(0,i.jsx)(n.a,{href:"https://github.com/statelyai/feedback/issues/94",children:"upvote it on our feedback page"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"url-parameters-including-color-mode",children:"URL parameters, including color mode"}),"\n",(0,i.jsxs)(n.p,{children:["The embed URL has some of the same parameters as the ",(0,i.jsx)(n.a,{href:"/xstate-zh/docs/url",children:"machine URL"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"machineId"}),": the unique ID for the machine. For example, ",(0,i.jsx)(n.code,{children:"machineId=491a4c60-5300-4e22-92cf-8a32a8ffffca"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"mode"}),": the current machine mode. For example, ",(0,i.jsx)(n.code,{children:"mode=Design"})," or ",(0,i.jsx)(n.code,{children:"mode=Simulate"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"colorMode"}),": the color mode for the embedded machine. For example, ",(0,i.jsx)(n.code,{children:"colorMode=light"})," or ",(0,i.jsx)(n.code,{children:"colorMode=dark"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the color mode will be the same as your chosen Stately Studio color mode. Add ",(0,i.jsx)(n.code,{children:"&colorMode=light"})," or ",(0,i.jsx)(n.code,{children:"&colorMode=dark"})," to the URL to force that color mode."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var i=o(67294);const t={},d=i.createContext(t);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);