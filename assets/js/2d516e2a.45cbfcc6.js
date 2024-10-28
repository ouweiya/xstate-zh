"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3010],{3277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=n(85893),i=n(11151);const s={title:"Generate test paths and create machines faster than ever before",description:"It\u2019s been a while since our last changelog update, so let\u2019s get right to it!",authors:["laura"],tags:["changelog","new","improved","fixed"],date:new Date("2023-11-03T00:00:00.000Z"),slug:"2023-11-03-generate-test-paths-and-create-machines-faster",image:"/blog/2023-11-03-generate-test-paths-and-create-machines-faster.png"},r=void 0,o={permalink:"/xstate-zh/blog/2023-11-03-generate-test-paths-and-create-machines-faster",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-11-03-generate-test-paths-and-create-machines-faster/index.mdx",source:"@site/blog/2023-11-03-generate-test-paths-and-create-machines-faster/index.mdx",title:"Generate test paths and create machines faster than ever before",description:"It\u2019s been a while since our last changelog update, so let\u2019s get right to it!",date:"2023-11-03T00:00:00.000Z",formattedDate:"November 3, 2023",tags:[{label:"changelog",permalink:"/xstate-zh/blog/tags/changelog"},{label:"new",permalink:"/xstate-zh/blog/tags/new"},{label:"improved",permalink:"/xstate-zh/blog/tags/improved"},{label:"fixed",permalink:"/xstate-zh/blog/tags/fixed"}],readingTime:4.115,hasTruncateMarker:!0,authors:[{name:"Laura Kalbag",title:"Stately Team",url:"https://github.com/laurakalbag",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/laura.png",key:"laura"}],frontMatter:{title:"Generate test paths and create machines faster than ever before",description:"It\u2019s been a while since our last changelog update, so let\u2019s get right to it!",authors:["laura"],tags:["changelog","new","improved","fixed"],date:"2023-11-03T00:00:00.000Z",slug:"2023-11-03-generate-test-paths-and-create-machines-faster",image:"/blog/2023-11-03-generate-test-paths-and-create-machines-faster.png"},unlisted:!1,prevItem:{title:"Introducing Stately Sky",permalink:"/xstate-zh/blog/2023-11-13-introducing-stately-sky"}},l={authorsImageUrls:[void 0]},h=[{value:"Generate test path code from your machines",id:"generate-test-path-code-from-your-machines",level:2},{value:"Editor UI improvements",id:"editor-ui-improvements",level:2},{value:"Creating new machines is easier than ever!",id:"creating-new-machines-is-easier-than-ever",level:2},{value:"Improvements to internal and external transitions",id:"improvements-to-internal-and-external-transitions",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Services",id:"services",level:2}];function c(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"It\u2019s been a while since our last changelog update, so let\u2019s get right to it!"}),"\n","\n",(0,a.jsx)(t.h2,{id:"generate-test-path-code-from-your-machines",children:"Generate test path code from your machines"}),"\n",(0,a.jsx)(t.p,{children:"You can now generate test path code for your state machines, which you can use to implement tests:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Choose between the shortest or simplest path generation strategies"}),"\n",(0,a.jsx)(t.li,{children:"Choose between default and Playwright test code templates (more to come, including Puppeteer, Cypress, and even other languages)"}),"\n",(0,a.jsx)(t.li,{children:"Optional AI-generated test titles and descriptions"}),"\n",(0,a.jsx)(t.li,{children:"Optional transition coverage"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This feature is in beta, and we\u2019d love to get your feedback on ",(0,a.jsx)(t.a,{href:"https://discord.stately.ai",children:"our Discord server"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The test generation panel showing options of shortest paths and normal paths, a custom testing framework and toggles selected for deduplicate paths and prefer transition coverage.",src:n(77447).Z+"",width:"1060",height:"600"})}),"\n",(0,a.jsx)(t.h2,{id:"editor-ui-improvements",children:"Editor UI improvements"}),"\n",(0,a.jsxs)(t.p,{children:["As shown in the preview above, we\u2019ve started improving the editor UI, and this is just the first phase! We\u2019ve added a secondary header and bottom status bar where you\u2019ll now find the version history. The left and right panels are now adjustable full-height panels. You can now find the machine in the new ",(0,a.jsx)(t.strong,{children:"Project"})," panel on the left. We\u2019ve also moved the ",(0,a.jsx)(t.strong,{children:"Events"})," schema into a panel in the right toolbox and the context schema into the ",(0,a.jsx)(t.strong,{children:"Context"})," toolbox panel."]}),"\n",(0,a.jsx)(t.h2,{id:"creating-new-machines-is-easier-than-ever",children:"Creating new machines is easier than ever!"}),"\n",(0,a.jsx)(t.p,{children:"Now, when you add a new machine, you can quickly create a machine from a blank canvas, the starter template, import from code, or generate with AI."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Modal saying How would you like to start? With options for a blank canvas, starter template, import code, and generate from AI.",src:n(22553).Z+"",width:"1440",height:"810"})}),"\n",(0,a.jsx)(t.h2,{id:"improvements-to-internal-and-external-transitions",children:"Improvements to internal and external transitions"}),"\n",(0,a.jsx)(t.p,{children:"Transitions in the editor now have three values:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Internal"}),"\n",(0,a.jsx)(t.li,{children:"External"}),"\n",(0,a.jsx)(t.li,{children:"Auto"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You can set internal or external explicitly or leave them as auto. In the future, we\u2019ll provide smarter options for how XState behaves for auto values."}),"\n",(0,a.jsx)(t.p,{children:"When exporting to code, we only include the internal property on transitions you have explicitly set to internal. Transitions set to auto ones will be omitted and fall back to default XState behavior in the run time."}),"\n",(0,a.jsx)(t.h2,{id:"improvements",children:"Improvements"}),"\n",(0,a.jsx)(t.p,{children:"Recently we\u2019ve been focusing a lot on performance, especially for large machines with more than 100 states and events. We\u2019ve made it easier to interact with states and events in these large machines, especially when you\u2019re zoomed in."}),"\n",(0,a.jsx)(t.p,{children:"We now persist some of your editor preferences on your local device, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Show/hide UI"}),"\n",(0,a.jsx)(t.li,{children:"Show metadata on canvas"}),"\n",(0,a.jsx)(t.li,{children:"Show grid"}),"\n",(0,a.jsx)(t.li,{children:"Show left panel"}),"\n",(0,a.jsx)(t.li,{children:"Your last used code panel settings"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"And there\u2019s more!"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"When team-owned machines are auto-saved, we now show the user\u2019s avatar instead of the Bot avatar."}),"\n",(0,a.jsx)(t.li,{children:"The code editor is now improved for better usability and performance."}),"\n",(0,a.jsx)(t.li,{children:"Long machine names now overflow more gracefully."}),"\n",(0,a.jsx)(t.li,{children:"You can now give your new machine a name when forking an existing machine."}),"\n",(0,a.jsx)(t.li,{children:"We have improved the heuristics for showing paths in large machines."}),"\n",(0,a.jsx)(t.li,{children:"You can now import code even if you are not logged into Stately."}),"\n",(0,a.jsx)(t.li,{children:"We now prevent you from accidentally deleting used events from the event schema."}),"\n",(0,a.jsx)(t.li,{children:"Pro users can now select individual files and folders to import when importing a project from GitHub. You can also modify those selections at a later time."}),"\n",(0,a.jsx)(t.li,{children:"You can now save a new machine to a project from the Code panel before exporting your machine as code."}),"\n",(0,a.jsx)(t.li,{children:"The name of the machine you\u2019re saving is now shown in the Save machine modal when saving from the top bar or the right-side code panel."}),"\n",(0,a.jsx)(t.li,{children:"You can now provide your own GitHub token for authentication."}),"\n",(0,a.jsx)(t.li,{children:"We have improved the color of draglines in light mode to make them easier to see."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Fit to content now works again in embed mode."}),"\n",(0,a.jsx)(t.li,{children:"We\u2019ve brought back the control buttons in embed mode."}),"\n",(0,a.jsx)(t.li,{children:"States and events will now correctly focus when created."}),"\n",(0,a.jsx)(t.li,{children:"Draglines now show even when you\u2019re panned far away."}),"\n",(0,a.jsx)(t.li,{children:"Zooming in now works when your zoom level is less than 10%."}),"\n",(0,a.jsx)(t.li,{children:"We\u2019ve added the option to add colors from the right-click menu for Pro users again."}),"\n",(0,a.jsx)(t.li,{children:"We fixed an issue where sometimes clicking on a button on the canvas didn\u2019t register."}),"\n",(0,a.jsx)(t.li,{children:"The context property is now correctly validated in the context schema."}),"\n",(0,a.jsx)(t.li,{children:"We fixed a bug in exporting expressions."}),"\n",(0,a.jsx)(t.li,{children:"We fixed a bug where creating a new machine from AI generation overwrote the current machine."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"services",children:"Services"}),"\n",(0,a.jsxs)(t.p,{children:["You might have also spotted a new ",(0,a.jsx)(t.strong,{children:"Services"})," option on our Billing page. Don\u2019t hesitate to ",(0,a.jsx)(t.a,{href:"mailto:support@stately.ai",children:"get in touch with us by email"})," if you\u2019re interested in any of the following:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Consultancy on state management and/or using XState in your team"}),"\n",(0,a.jsx)(t.li,{children:"Workshops for XState V4 and XState V5 beta"}),"\n",(0,a.jsx)(t.li,{children:"Custom solutions for state machine logic and model-based testing"}),"\n",(0,a.jsx)(t.li,{children:"Priority support"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We\u2019d love to hear from you!"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},22553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-machine-9a913ea50ef3332d8eb9a409e1f51ed8.png"},77447:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-generation-1fda099f8745c72d7519a8f5eaa3feff.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);