"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5341],{77799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=n(85893),r=n(11151),a=n(65099),i=n(85162);const l={title:"Stately Sky getting started"},o="Getting started with Stately Sky \ud83c\udf24\ufe0f",c={id:"stately-sky-getting-started",title:"Stately Sky getting started",description:"This guide will walk you through deploying a simple traffic light state machine workflow with Stately Sky using XState, Vite and React.",source:"@site/docs/stately-sky-getting-started.mdx",sourceDirName:".",slug:"/stately-sky-getting-started",permalink:"/xstate-zh/docs/stately-sky-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/stately-sky-getting-started.mdx",tags:[],version:"current",frontMatter:{title:"Stately Sky getting started"},sidebar:"tutorialSidebar",previous:{title:"Projects",permalink:"/xstate-zh/docs/projects"},next:{title:"Stately Sky getting started",permalink:"/xstate-zh/docs/stately-sky-getting-started"}},d={},h=[{value:"What you\u2019ll need",id:"what-youll-need",level:2},{value:"Getting started video",id:"getting-started-video",level:2},{value:"Step 1: Create a machine with Stately",id:"step-1-create-a-machine-with-stately",level:2},{value:"Step 2: Create an API key",id:"step-2-create-an-api-key",level:2},{value:"Step 3: Deploy your machine to Sky",id:"step-3-deploy-your-machine-to-sky",level:2},{value:"Step 4: Add the actor in the starter project",id:"step-4-add-the-actor-in-the-starter-project",level:2},{value:"Step 5: Fetching the config from Sky",id:"step-5-fetching-the-config-from-sky",level:2},{value:"Finishing up",id:"finishing-up",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{EmbedMachine:l,YouTube:o}=t;return l||y("EmbedMachine",!0),o||y("YouTube",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"getting-started-with-stately-sky-\ufe0f",children:["Getting started with Stately Sky ",(0,s.jsx)(t.span,{role:"img","aria-label":"sun behind small cloud",children:"\ud83c\udf24\ufe0f"})]}),"\n",(0,s.jsxs)(t.p,{children:["This guide will walk you through deploying a simple traffic light state machine workflow with Stately Sky using ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/xstate",children:"XState"}),", ",(0,s.jsx)(t.a,{href:"https://vitejs.dev/",children:"Vite"})," and ",(0,s.jsx)(t.a,{href:"https://reactjs.org/",children:"React"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Please note that Sky is currently in beta and will be changing rapidly."})}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What you\u2019ll need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://stately.ai",children:"Stately"})," account with a ",(0,s.jsx)(t.a,{href:"https://stately.ai/pricing",children:"Pro, Team, or Enterprise subscription"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Our ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/sky-starter-app",children:"Stately Sky starter project"}),". Clone the repo to your local machine."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"studio",children:(0,s.jsxs)(t.p,{children:["Our premium users get unlimited use of Stately Sky while it\u2019s in beta. You can try Stately Studio\u2019s premium plans with a free trial. ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/studio-pro-plan",children:"Check out the features on our Pro plan"}),", ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/studio-team-plan",children:"Team plan"}),", ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/studio-enterprise-plan",children:"Enterprise plan"})," or ",(0,s.jsx)(t.a,{href:"https://stately.ai/registry/billing",children:"upgrade your existing plan"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"getting-started-video",children:"Getting started video"}),"\n",(0,s.jsx)(o,{id:"JJHC0UyGsrQ"}),"\n",(0,s.jsx)(t.h2,{id:"step-1-create-a-machine-with-stately",children:"Step 1: Create a machine with Stately"}),"\n",(0,s.jsxs)(t.p,{children:["Create a project and compose your machine in the ",(0,s.jsx)(t.a,{href:"https://stately.ai/editor",children:"Stately editor"})," with the transitions and states you want."]}),"\n",(0,s.jsxs)(t.p,{children:["For this example, we\u2019ll create a simple traffic light machine with three states: ",(0,s.jsx)(t.code,{children:"green"}),", ",(0,s.jsx)(t.code,{children:"yellow"}),", and ",(0,s.jsx)(t.code,{children:"red"}),". Feel free to fork ",(0,s.jsx)(t.a,{href:"https://stately.ai/registry/editor/eb3e89f5-5936-439f-8254-2f6ea4303659?machineId=15fd8071-b80c-4a6f-b9f5-60b6cf578ee5",children:"our traffic light example"})," to test. Check out a ",(0,s.jsx)(t.a,{href:"https://sky-starter.stately.ai/?page=trafficlight",children:"deployed version of this traffic light machine"}),"."]}),"\n",(0,s.jsx)(l,{embedURL:"https://stately.ai/registry/editor/embed/eb3e89f5-5936-439f-8254-2f6ea4303659?machineId=15fd8071-b80c-4a6f-b9f5-60b6cf578ee5",name:"Traffic light"}),"\n",(0,s.jsx)(t.admonition,{type:"xstate",children:(0,s.jsxs)(t.p,{children:["Sky only supports ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/xstate",children:"XState"})," V5 machines. The ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/migration",children:"changes in XState V5"})," provide both a better developer experience and adhere to the ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/actor-model",children:"Actor Model"})," more closely, allowing Sky to capably deploy machines that reliably communicate their state."]})}),"\n",(0,s.jsxs)(t.admonition,{type:"typescript",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"XState v5 requires TypeScript version 5.0 or greater."})}),(0,s.jsxs)(t.p,{children:["For best results, use the latest TypeScript version. ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/typescript",children:"Read more about XState and TypeScript"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-create-an-api-key",children:"Step 2: Create an API key"}),"\n",(0,s.jsx)(t.p,{children:"After creating your machine, you\u2019ll need to create an API key to deploy it to Sky."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Use the ",(0,s.jsx)(t.strong,{children:"Deploy"})," button in the top right corner of the editor to open the Stately Sky options."]}),"\n",(0,s.jsxs)(t.li,{children:["Use the ",(0,s.jsx)(t.strong,{children:"Create API Key"})," button to generate an API key."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stately Sky modal showing no API key created yet. There is a button to Create API Key.",src:n(837).Z+"",width:"2000",height:"1129"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Be sure to copy that API key and save it somewhere safe. You\u2019ll need it later."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The page should look like this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stately Sky modal shows the API key in an input hidden behind password dots. There are options to Regenerate, Delete, Reveal, or copy the API key to the clipboard.",src:n(71079).Z+"",width:"2000",height:"1129"})}),"\n",(0,s.jsx)(t.h2,{id:"step-3-deploy-your-machine-to-sky",children:"Step 3: Deploy your machine to Sky"}),"\n",(0,s.jsx)(t.p,{children:"Once you have generated the API key, you can deploy your machine to Sky as a workflow."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Use the ",(0,s.jsxs)(t.strong,{children:["Deploy to Sky ",(0,s.jsx)(t.span,{role:"img","aria-label":"sun behind small cloud",children:"\ud83c\udf24\ufe0f"})]})," button to start the deployment process."]}),"\n",(0,s.jsxs)(t.li,{children:["When the workflow is deployed, it will be listed under ",(0,s.jsx)(t.strong,{children:"Existing deploys"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.strong,{children:"Copy URL"})," to copy to the URL to your clipboard."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You\u2019ll need the workflow\u2019s URL to reference it from the starter project."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stately Sky modal shows the Traffic light workflow listed under Existing deploys. The workflow has its own URL with the options to Copy URL or delete alongside.",src:n(56332).Z+"",width:"2000",height:"1129"})}),"\n",(0,s.jsx)(t.h2,{id:"step-4-add-the-actor-in-the-starter-project",children:"Step 4: Add the actor in the starter project"}),"\n",(0,s.jsx)(t.p,{children:"After adding the API key, you\u2019ll need to create an actor."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a new file in the ",(0,s.jsx)(t.code,{children:"src"})," directory of the starter project. We named ours ",(0,s.jsx)(t.code,{children:"trafficLightActor.ts"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["In your new file, import the ",(0,s.jsx)(t.code,{children:"actorFromStately"})," function and initialize the actor with the provided URL and your own session ID:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { actorFromStately } from '@statelyai/sky';\n\nconst actor = actorFromStately({\n  apiKey: 'paste your API key here',\n  url: 'paste your Sky url here',\n  sessionId: 'your session id here',\n});\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"By default, Sky is multiplayer.\nThe session ID is used to shard the multiplayer session. Each actor has a unique session ID."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Use a shared session ID to allow multiple users to reference the same actor."}),"\n",(0,s.jsx)(t.li,{children:"If you want users isolated, use a unique session ID for each user."}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"step-5-fetching-the-config-from-sky",children:"Step 5: Fetching the config from Sky"}),"\n",(0,s.jsx)(t.p,{children:"Now that we\u2019ve created the actor, we need to fetch the config from Sky. Doing so will download and generate the machine configuration file in our repo, giving us type safety when interacting with the running actor!"}),"\n",(0,s.jsxs)(t.p,{children:["To fetch the config, we\u2019ll use the ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/developer-tools#xstate-cli-command-line-interface",children:"XState CLI tool"})," and the ",(0,s.jsx)(t.code,{children:"sky"})," script already in our ",(0,s.jsx)(t.code,{children:"package.json"}),". This script runs the command over all the files in the ",(0,s.jsx)(t.code,{children:"src"})," repo to find configs associated with any initialized actors."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"package.json",src:n(28454).Z+"",width:"2564",height:"1830"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Using your package manager of choice, run the ",(0,s.jsx)(t.code,{children:"sky"})," command:"]}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(i.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run sky\n"})})}),(0,s.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn sky\n"})})}),(0,s.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm run sky\n"})})})]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Once the ",(0,s.jsx)(t.code,{children:"sky"})," command has completed, you should see:"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["a second ",(0,s.jsx)(t.code,{children:"skyConfig"})," argument with updated imports passed to the ",(0,s.jsx)(t.code,{children:"actorFromStately"})," function."]}),"\n",(0,s.jsxs)(t.li,{children:["a new TypeScript file in your ",(0,s.jsx)(t.code,{children:"src"})," directory, named after the actor in the Studio. In our case, it\u2019s ",(0,s.jsx)(t.code,{children:"trafficLightActor.sky.ts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You\u2019ll notice a warning in the ",(0,s.jsx)(t.code,{children:"sky.ts"})," file that the file is generated. You should not manually edit these files as any local changes will not reflect what\u2019s running in Sky."]}),"\n",(0,s.jsxs)(t.p,{children:["Running ",(0,s.jsx)(t.code,{children:"xstate sky"})," will only affect a file if it hasn\u2019t already been fetched. If you make changes to the machine in the Studio, you\u2019ll need to delete the generated file ",(0,s.jsx)(t.code,{children:"yourFile.sky.ts"})," and run the command again. Alternatively, you can force the refetch by running ",(0,s.jsx)(t.code,{children:"xstate sky --refetch"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Add your generated ",(0,s.jsx)(t.code,{children:"sky.ts"})," files to source control."]})}),"\n",(0,s.jsx)(t.h2,{id:"finishing-up",children:"Finishing up"}),"\n",(0,s.jsxs)(t.p,{children:["And that\u2019s it! You can now interact with your running actor in much the same way you would with local actors, like sending events with the ",(0,s.jsx)(t.code,{children:"send()"})," function. Sky is still in its early days, so there are some limitations and things to remember. Specifically:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Only XState V5 machines are supported."}),"\n",(0,s.jsxs)(t.li,{children:["If you're using React Native, see ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/sky/issues/6#issuecomment-1766967479",children:"this comment"})," if you're having issues."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function y(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(90512);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},70989:(e,t,n)=>{n.d(t,{Y:()=>p});var s=n(67294),r=n(16550),a=n(20469),i=n(91980),l=n(67392),o=n(50012);function c(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[p,y]=u({queryString:n,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,o.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=p??f;return h({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),y(e),m(e)}),[y,m,i]),tabValues:i}}},65099:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(67294),r=n(90512),a=n(12466),i=n(70989),l=n(72389);const o={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var c=n(85893);function d(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),r=l[n].value;r!==s&&(h(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:p,onClick:u,...a,className:(0,r.Z)("tabs__item",o.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"padding-top--s"}):null}return(0,c.jsx)("div",{className:"padding-top--s",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function u(e){const t=(0,i.Y)(e);return(0,c.jsxs)("div",{className:(0,r.Z)("tabs-container",o.tabList),children:[(0,c.jsx)(d,{...e,...t}),(0,c.jsx)(h,{...e,...t})]})}function p(e){const t=(0,l.Z)();return(0,c.jsx)(u,{...e},String(t))}},28454:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/code-sky-cmd-0ec7ac0233adadf2f0a46a599fc0fc75.png"},71079:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/editor-api-key-45af39a2dc4baf06596d28092b4c873c.png"},56332:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/editor-deployed-workflow-4bfaf5c8dcae41207e634b441c63fdc3.png"},837:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/editor-no-api-key-48d8abc6a96d5f65f19d5d5abb6364b3.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(67294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);