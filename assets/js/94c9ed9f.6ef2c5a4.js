"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3398],{1760:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(85893),o=n(11151);const i={title:"Introducing Stately Inspector",description:"Stately Inspector is a universal tool that enables you to visually inspect the state of any application, frontend or backend, with the visualization of Stately\u2019s editor.",authors:["david"],tags:["inspector","stately","xstate","actors","devtools"],date:new Date("2024-01-15T00:00:00.000Z"),slug:"2024-01-15-stately-inspector",image:"/blog/2024-01-15-introducing-stately-inspector.png"},a=void 0,r={permalink:"/xstate-zh/blog/2024-01-15-stately-inspector",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2024-01-15-introducing-stately-inspector/index.mdx",source:"@site/blog/2024-01-15-introducing-stately-inspector/index.mdx",title:"Introducing Stately Inspector",description:"Stately Inspector is a universal tool that enables you to visually inspect the state of any application, frontend or backend, with the visualization of Stately\u2019s editor.",date:"2024-01-15T00:00:00.000Z",formattedDate:"January 15, 2024",tags:[{label:"inspector",permalink:"/xstate-zh/blog/tags/inspector"},{label:"stately",permalink:"/xstate-zh/blog/tags/stately"},{label:"xstate",permalink:"/xstate-zh/blog/tags/xstate"},{label:"actors",permalink:"/xstate-zh/blog/tags/actors"},{label:"devtools",permalink:"/xstate-zh/blog/tags/devtools"}],readingTime:3.6,hasTruncateMarker:!0,authors:[{name:"David Khourshid",title:"Stately Team",url:"https://github.com/davidkpiano",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/david.png",key:"david"}],frontMatter:{title:"Introducing Stately Inspector",description:"Stately Inspector is a universal tool that enables you to visually inspect the state of any application, frontend or backend, with the visualization of Stately\u2019s editor.",authors:["david"],tags:["inspector","stately","xstate","actors","devtools"],date:"2024-01-15T00:00:00.000Z",slug:"2024-01-15-stately-inspector",image:"/blog/2024-01-15-introducing-stately-inspector.png"},unlisted:!1,prevItem:{title:"Stately Office Hours 79",permalink:"/xstate-zh/blog/2024-01-19-office-hours"},nextItem:{title:"XState: Exploring actors live stream",permalink:"/xstate-zh/blog/2024-01-12-xstate-exploring-actors"}},c={authorsImageUrls:[void 0]},l=[{value:"What is Stately Inspector?",id:"what-is-stately-inspector",level:2},{value:"Installing Stately Inspect",id:"installing-stately-inspect",level:2},{value:"Sending inspection events",id:"sending-inspection-events",level:2},{value:"Coming soon",id:"coming-soon",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...t.components},{ThemedImage:n,YouTube:i}=e;return n||p("ThemedImage",!0),i||p("YouTube",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["One of the most popular features of our legacy Stately Viz was its ability to inspect your app in real-time using the previous ",(0,s.jsx)(e.code,{children:"@xstate/inspect"})," and Stately Viz tools. We wanted to bring this functionality into a universal tool that enables you to visually inspect the state of any application, frontend or backend, with the visualization of ",(0,s.jsx)(e.a,{href:"https://state.new",children:"Stately\u2019s editor"}),". So we built Stately Inspector."]}),"\n",(0,s.jsx)(e.h2,{id:"what-is-stately-inspector",children:"What is Stately Inspector?"}),"\n",(0,s.jsx)(e.p,{children:"Stately Inspector is a tool that allows you to inspect your application\u2019s state visually. It primarily works with frontend applications using XState but can also work with backend code and code that uses any state management solution."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.youtube.com/live/-Jf9N-EaUx0?feature=shared&t=408",children:"Watch a demo of Stately Inspector in our most recent office hours"}),":"]}),"\n",(0,s.jsx)(i,{id:"-Jf9N-EaUx0"}),"\n",(0,s.jsx)(e.h2,{id:"installing-stately-inspect",children:"Installing Stately Inspect"}),"\n",(0,s.jsxs)(e.p,{children:["To inspect applications with Stately Inspector, install ",(0,s.jsx)(e.a,{href:"https://github.com/statelyai/inspect",children:"Stately Inspect"})," from npm via ",(0,s.jsx)(e.code,{children:"@statelyai/inspect"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install @statelyai/inspect\n"})}),"\n",(0,s.jsx)(e.p,{children:"Then, import the relevant inspector creator into your app. The creator is used to create an inspector (e.g., a browser or WebSocket inspector) to connect to XState actors and/or manually send inspection events to Stately Inspector:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { createActor } from 'xstate';\n// highlight-next-line\nimport { createBrowserInspector } from '@statelyai/inspect';\nimport { machine } from './machine';\n\n// highlight-next-line\nconst inspector = createBrowserInspector();\n\n// ...\n\nconst actor = createActor(machine, {\n  // highlight-next-line\n  inspect: inspector.inspect,\n  // ... other actor options\n});\n\nactor.start();\n"})}),"\n",(0,s.jsx)(e.p,{children:"Now, when you run your app, you should see a new tab or popup open in your browser that looks something like this:"}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(n,{alt:"The Stately Inspector view, showing a state machine for the pizza ordering process. The current state and available event is highlighted in green.",sources:{light:"/blog/2024-01-15-introducing-stately-inspector/inspector.png",dark:"/blog/2024-01-15-introducing-stately-inspector/inspector-dm.png"}})}),"\n",(0,s.jsx)(e.h2,{id:"sending-inspection-events",children:"Sending inspection events"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"@statelyai/inspect"})," package will send inspection events to the connected Stately Inspector. There are currently three kinds of events sent:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Actor creation events"}),"\n",(0,s.jsx)(e.li,{children:"Actor-to-actor communication events"}),"\n",(0,s.jsx)(e.li,{children:"Actor snapshot changes"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["When you pass in the ",(0,s.jsx)(e.code,{children:"inspect"})," option to the actor options in XState\u2019s ",(0,s.jsx)(e.code,{children:"createActor(machine, options)"})," function, it will automatically send all of these inspection events."]}),"\n",(0,s.jsx)(e.p,{children:"For usage with other state management solutions, you can manually send inspection events using the following methods:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"inspector.actor(actor, snapshot, info)"})," - send actor creation events"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"inspector.event(actor, event, info)"})," - send actor-to-actor communication events"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"inspector.snapshot(actor, snapshot, info)"})," - send actor snapshot changes"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { createBrowserInspector } from '@statelyai/inspect';\n\nconst inspector = createBrowserInspector();\n\n// Imagine a todo app...\ninspector.actor('todos');\n\n// When a todo is created\ninspector.actor('todo-1', {\n  context: { status: 'active' }\n});\n\n// When a user completes a todo\ninspector.event('todo-1', { type: 'todo.complete' });\n\n// When a todo changes\ninspector.snapshot('todo-1', {\n  context: { status: 'completed' }\n});\n\n// When the todos actor (not the user) sends an event to a todo\ninspector.event('todo-1', { type: 'todo.update' }, {\n  source: 'todos'\n});\n\n// ... etc.\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"The above is a contrived example demonstrating how you can instrument inspector events at any time from any part of your app. The three types of inspection events contain everything that Stately Inspector needs to generate two kinds of real-time diagrams automatically:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"State machine diagrams"})," (if a state machine definition is provided)"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"Sequence diagrams"})}),"\n"]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(n,{alt:"The Stately Inspector view, showing a state machine and a sequence diagram for the pizza ordering process side-by-side.",sources:{light:"/blog/2024-01-15-introducing-stately-inspector/machine-and-sequence-diagram.png",dark:"/blog/2024-01-15-introducing-stately-inspector/machine-and-sequence-diagram-dm.png"}})}),"\n",(0,s.jsx)(e.h2,{id:"coming-soon",children:"Coming soon"}),"\n",(0,s.jsxs)(e.p,{children:["The goal of Stately Inspector is to be a universal tool that enables you to visually inspect the state of any application, frontend or backend. Right now, it\u2019s optimized for XState (with ",(0,s.jsx)(e.code,{children:"inspector.inspect"}),") or non-XState (with ",(0,s.jsx)(e.code,{children:"inspector.actor(...)"}),", ",(0,s.jsx)(e.code,{children:"inspector.event(...)"}),", ",(0,s.jsx)(e.code,{children:"inspector.snapshot(...)"}),") state management solutions in frontend applications. We would love your feedback so that we can prioritize:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/387",children:"A websocket inspector creator"})}),": inspect frontend and/or backend applications remotely."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/388",children:"Bidirectional communication"})}),": send events from Stately Inspector to your live application."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/389",children:"Middleware for popular libraries"})}),": e.g., Redux, MobX, Zustand, and more."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/390",children:"Sync with Stately Studio"})}),": enrich inspected machines with information (layouts, colors, assets, annotations, etc.) from Stately Studio."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/391",children:"Analytics"})}),": view real-time analytics of flows in your application."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://discord.stately.ai",children:"Let us know your thoughts on our Discord server"})," or ",(0,s.jsx)(e.a,{href:"https://feedback.stately.ai",children:"submit a feature request on our GitHub board"}),". Want to be the first to know about upcoming features? Subscribe to our ",(0,s.jsx)(e.a,{href:"https://www.youtube.com/@Statelyai",children:"YouTube channel"})," or ",(0,s.jsx)(e.a,{href:"https://www.linkedin.com/company/statelyai/",children:"follow us on LinkedIn"})," to avoid missing our next office hours live stream."]})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}function p(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>a});var s=n(67294);const o={},i=s.createContext(o);function a(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);