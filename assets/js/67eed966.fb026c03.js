"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[6962],{97430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(85893),i=n(11151);const s={title:"Introducing Stately Sky",description:"Announcing Stately Sky, the new way to run your state machines in the cloud.",authors:["gavin"],tags:["new","sky","serverless","cloud","run","machines","state","stately"],date:new Date("2023-11-13T00:00:00.000Z"),slug:"2023-11-13-introducing-stately-sky",image:"/blog/2023-11-13-introducing-stately-sky.png"},o=void 0,r={permalink:"/xstate-zh/blog/2023-11-13-introducing-stately-sky",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-11-13-introducing-stately-sky/index.mdx",source:"@site/blog/2023-11-13-introducing-stately-sky/index.mdx",title:"Introducing Stately Sky",description:"Announcing Stately Sky, the new way to run your state machines in the cloud.",date:"2023-11-13T00:00:00.000Z",formattedDate:"November 13, 2023",tags:[{label:"new",permalink:"/xstate-zh/blog/tags/new"},{label:"sky",permalink:"/xstate-zh/blog/tags/sky"},{label:"serverless",permalink:"/xstate-zh/blog/tags/serverless"},{label:"cloud",permalink:"/xstate-zh/blog/tags/cloud"},{label:"run",permalink:"/xstate-zh/blog/tags/run"},{label:"machines",permalink:"/xstate-zh/blog/tags/machines"},{label:"state",permalink:"/xstate-zh/blog/tags/state"},{label:"stately",permalink:"/xstate-zh/blog/tags/stately"}],readingTime:4.265,hasTruncateMarker:!0,authors:[{name:"Gavin Bauman",title:"Stately Team",url:"https://github.com/gavination",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/gavin.png",key:"gavin"}],frontMatter:{title:"Introducing Stately Sky",description:"Announcing Stately Sky, the new way to run your state machines in the cloud.",authors:["gavin"],tags:["new","sky","serverless","cloud","run","machines","state","stately"],date:"2023-11-13T00:00:00.000Z",slug:"2023-11-13-introducing-stately-sky",image:"/blog/2023-11-13-introducing-stately-sky.png"},unlisted:!1,prevItem:{title:"Stately Studio 2.0",permalink:"/xstate-zh/blog/2023-11-20-stately-studio-2-0"},nextItem:{title:"Generate test paths and create machines faster than ever before",permalink:"/xstate-zh/blog/2023-11-03-generate-test-paths-and-create-machines-faster"}},l={authorsImageUrls:[void 0]},c=[{value:"Why Sky: a seamless developer experience without the lock-in",id:"why-sky-a-seamless-developer-experience-without-the-lock-in",level:2},{value:"Multiplayer: batteries included",id:"multiplayer-batteries-included",level:2},{value:"What can you do with Sky?",id:"what-can-you-do-with-sky",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"See Sky in action",id:"see-sky-in-action",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{YouTube:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("YouTube",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The Stately team is very excited to announce a new feature we\u2019ve been working on for quite some time! Join us in welcoming Stately Sky to the Studio. Lovingly built with ",(0,a.jsx)(t.a,{href:"https://www.partykit.io/",children:"PartyKit"}),", Sky is our new serverless platform for running workflows within the Studio. With Sky, users may now run their statecharts as live machines in minutes, complete with XState v5 actors and multiplayer support."]}),"\n","\n",(0,a.jsx)(t.h2,{id:"why-sky-a-seamless-developer-experience-without-the-lock-in",children:"Why Sky: a seamless developer experience without the lock-in"}),"\n",(0,a.jsxs)(t.p,{children:["We know that state machines are extremely powerful for defining app logic, and Sky supercharges the Studio by allowing developers to ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"build and deploy"})})," workflows to the edge, all defined as state machines! Typically, when we think of building workflows or long running processes, we typically think of two possible paths:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"coding against large cloud services with cumbersome development environments, tons of boilerplate, and painful deployment processes"}),"\n",(0,a.jsx)(t.li,{children:"relying on low-code or no-code platforms that tend to be inflexible and require vendor lock-in"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Sky aims to remove the barriers on both ends of the spectrum. We\u2019ve always allowed developers to export their diagrams in the Studio as code, as JSON, and ",(0,a.jsx)(t.a,{href:"https://stately.ai/docs/export-as-code#export-formats",children:"more recently, as stories"}),". There is no vendor lock-in from the Studio. Additionally, deploying workflows couldn\u2019t be easier. Once the user has built and tested their machines in the Studio, they need only to generate an API key and click deploy."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"GIF demonstrating flow generation process",src:n(11701).Z+"",width:"900",height:"574"})}),"\n",(0,a.jsx)(t.p,{children:"After that, developers can interact with their \u201clive actor\u201d in the same way they\u2019ve been able to work with other XState machines. There is an SDK for Sky-based actors, but the syntax is virtually the same, save for the initial connection and configuration:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const actor = actorFromStately(\n  {\n    url: 'url of the running actor',\n    sessionId: 'unique session id for multiplayer',\n  },\n  skyConfig, //provided after initializing sky in your local dev environment\n);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The snippet above is all that\u2019s needed in code to connect an application to the live running actor in Stately Sky. For details on all the configuration steps, check out the ",(0,a.jsx)(t.a,{href:"https://stately.ai/docs/stately-sky-getting-started",children:"\u201cGetting Started\u201d guide"})," that walks through the full setup."]}),"\n",(0,a.jsx)(t.h2,{id:"multiplayer-batteries-included",children:"Multiplayer: batteries included"}),"\n",(0,a.jsxs)(t.p,{children:["Sky removes the complexity of spinning up a running web server in a cloud platform or hosting it on premise. Thanks to ",(0,a.jsx)(t.a,{href:"https://docs.partykit.io/",children:"PartyKit"}),", real-time communication and multiplayer come built-in for the developer. Users don\u2019t have to concern themselves with wrangling and scaling concurrent live connections in Sky. If a client needs to interact with a live actor, they need only the ",(0,a.jsx)(t.code,{children:"sessionId"})," and the rest is handled for them. Both Sky and PartyKit are built using CloudFlare, allowing us to scale with the needs of the user."]}),"\n",(0,a.jsx)(t.h2,{id:"what-can-you-do-with-sky",children:"What can you do with Sky?"}),"\n",(0,a.jsx)(t.p,{children:"Since Sky actors are built using the same tools, the good news is that everything users can build in the editor can work with Sky The developer experience is exactly the same. After connecting to their live actors, users can inspect and send events just like they can with any other XState machine."}),"\n",(0,a.jsx)(t.h3,{id:"use-cases",children:"Use cases"}),"\n",(0,a.jsx)(t.p,{children:"There are several instances where users would benefit from a live actor, particularly one that can accept requests from multiple sources. Running state machines as actors in Sky gives developers the readability of statecharts with the durability and fault tolerance of cloud compute. For example, long-running workflows where time is a serious constraint can be easily implemented and maintained within Sky. Workflows like:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Multiplayer-collaboration sessions, like whiteboarding, document editing, and gaming."}),"\n",(0,a.jsx)(t.li,{children:"Asynchronous workflows, like fetching large amounts of data in the background"}),"\n",(0,a.jsx)(t.li,{children:"Long-running backend processes like medical patient onboarding flows or inventory management"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Diagram showing Stately Sky at the top, which communicates with the Sky SDK inside the user app. Stately Sky also communicates with PartyKit\u2019s state orchestator which in turn talks to the PartyKit Scheduler for delayed transitions and to \u201cmachineHub\u201d, which is built on Cloudflare Workers for platforms for stateless compute.",src:n(55682).Z+"",width:"1000",height:"694"})}),"\n",(0,a.jsx)(t.p,{children:"Sky makes use of Cloudflare and PartyKit to handle the webserver lifecycle, orchestration, and compute. All those details are abstracted away from the user. Sky\u2019s role is to consume user-defined statecharts and publish them as live actors. So, whenever it is time to interact with that live actor, the user would do so with the Sky SDK. That component is the \u201ctie-in\u201d between the live actor and the rest of the user application. The Sky SDK exposes the live actor to receive events no different from a standard XState actor."}),"\n",(0,a.jsx)(t.h2,{id:"see-sky-in-action",children:"See Sky in action"}),"\n",(0,a.jsxs)(t.p,{children:["Feel free to check out the ",(0,a.jsx)(t.a,{href:"https://sky-starter.stately.ai/?page=trafficlight",children:"Stately Sky Starter app for interactive demos built on Sky"}),". They also serve as a great starting point for building your own Sky actors. Our very own Laura Kalbag also built ",(0,a.jsx)(t.a,{href:"https://laurakalbag.github.io/collaborative-sleep-sky/",children:"an interactive collaborative sleep demo built with Sky"}),". Be sure to try the demo with multiple tabs open to simulate different users!"]}),"\n",(0,a.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(t.p,{children:["Check out the resources put together by the team, including our office hours call where we show a preview of Sky in action. For a step-by-step primer, check out the ",(0,a.jsx)(t.a,{href:"https://stately.ai/docs/stately-sky-getting-started",children:"\u201cGetting Started\u201d guide"})," that walks through the full setup."]}),"\n",(0,a.jsx)(s,{id:"_iTjIWq6M1g"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},55682:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/componentDiagram-e021768cfc39828d125174ee6025ac17.png"},11701:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generateFlow-689915a2cbc81bca794f20b09a584efd.gif"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);