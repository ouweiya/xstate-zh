"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4631],{47029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const o={title:"Actions and actors in Stately\u2019s editor",description:"Learn how to use exit actions, entry actions, and transition actions, and invoke actors in Stately\u2019s editor."},a="Actions and actors",r={id:"editor-actions-and-actors",title:"Actions and actors in Stately\u2019s editor",description:"Learn how to use exit actions, entry actions, and transition actions, and invoke actors in Stately\u2019s editor.",source:"@site/docs/editor-actions-and-actors.mdx",sourceDirName:".",slug:"/editor-actions-and-actors",permalink:"/xstate-zh/docs/editor-actions-and-actors",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/editor-actions-and-actors.mdx",tags:[],version:"current",frontMatter:{title:"Actions and actors in Stately\u2019s editor",description:"Learn how to use exit actions, entry actions, and transition actions, and invoke actors in Stately\u2019s editor."},sidebar:"tutorialSidebar",previous:{title:"States and transitions in Stately\u2019s editor",permalink:"/xstate-zh/docs/editor-states-and-transitions"},next:{title:"Design mode",permalink:"/xstate-zh/docs/design-mode"}},c={},d=[{value:"Add actions",id:"add-actions",level:2},{value:"Add action parameters",id:"add-action-parameters",level:3},{value:"Add invoked actors",id:"add-invoked-actors",level:2},{value:"Invoke actors on a state",id:"invoke-actors-on-a-state",level:3},{value:"Invoke done and invoke error events",id:"invoke-done-and-invoke-error-events",level:4},{value:"XState built-in actions",id:"xstate-built-in-actions",level:3},{value:"Spawning actors in Stately\u2019s editor",id:"spawning-actors-in-statelys-editor",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Code:t,Edit:o,EmbedMachine:a,Info:r,MoreHorizontal:c,PlayCircle:d,Plus:l,Trash:h,Zap:j}=n;return t||x("Code",!0),o||x("Edit",!0),a||x("EmbedMachine",!0),r||x("Info",!0),c||x("MoreHorizontal",!0),d||x("PlayCircle",!0),l||x("Plus",!0),h||x("Trash",!0),j||x("Zap",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"actions-and-actors",children:"Actions and actors"}),"\n",(0,s.jsxs)(n.p,{children:["While the state machine is running, it can execute effects called actions. Actions are executed when a transition is triggered. Actions are \u201cfire-and-forget effects\u201d; once the machine has fired the action, it continues processing the transition and forgets the action. You can also fire actions when a state is entered or exited. ",(0,s.jsx)(n.a,{href:"/docs/actions",children:"Read more about actions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["State machines can invoke actors as longer-running processes that can receive events, send events, and change their behavior based on the events they receive. You can invoke actors on entry to a state and stop on exit. ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/actors",children:"Read more about actors"}),"."]}),"\n",(0,s.jsx)(a,{embedURL:"https://stately.ai/registry/editor/embed/c447d996-cef1-421d-a422-8be695668764?code=834448b4-3b8b-4de9-8b2e-353fd2b342de&mode=design&machineId=000b2694-2267-413c-8477-988cc750d581",title:"Demo of actions and actors"}),"\n",(0,s.jsx)(n.h2,{id:"add-actions",children:"Add actions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select a state or transition and use ",(0,s.jsx)(j,{size:18})," ",(0,s.jsx)(n.strong,{children:"Action"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select a state and use ",(0,s.jsx)(l,{size:18})," ",(0,s.jsx)(n.strong,{children:"Entry action"})," or ",(0,s.jsx)(n.strong,{children:"Exit action"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select a state or transition, open the ",(0,s.jsx)(r,{size:18})," ",(0,s.jsx)(n.strong,{children:"Details"})," panel from the right tool menu, and use the ",(0,s.jsx)(l,{size:18})," ",(0,s.jsx)(n.strong,{children:"Effect"})," or ",(0,s.jsx)(l,{size:18})," ",(0,s.jsx)(n.strong,{children:"Action"}),"  button and choose ",(0,s.jsx)(n.strong,{children:"Add entry action"}),", ",(0,s.jsx)(n.strong,{children:"Add exit action"}),", or ",(0,s.jsx)(n.strong,{children:"Add action"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(o,{size:18})," edit icon button to open the ",(0,s.jsx)(t,{size:18})," ",(0,s.jsx)(n.strong,{children:"Sources"})," panel and add custom implementation code. Actions are created as custom actions by default, but you can also use ",(0,s.jsx)(n.a,{href:"#xstate-built-in-actions",children:"XState built-in actions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To remove an action, use the ",(0,s.jsx)("kbd",{children:"Backspace"})," key, ",(0,s.jsx)(n.em,{children:"right-click"})," and choose ",(0,s.jsx)(n.strong,{children:"Delete"}),", or use the ",(0,s.jsx)(h,{size:18})," delete icon button in the ",(0,s.jsx)(n.strong,{children:"Details"})," panel."]}),"\n",(0,s.jsx)(n.h3,{id:"add-action-parameters",children:"Add action parameters"}),"\n",(0,s.jsxs)(n.p,{children:["You can add action parameters by selecting the action and using add ",(0,s.jsx)(l,{size:18})," ",(0,s.jsx)(n.strong,{children:"parameter"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"add-invoked-actors",children:"Add invoked actors"}),"\n",(0,s.jsxs)(n.p,{children:["You can invoke multiple actors on a single state. Top-level final states cannot have invoked actors. ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/invoke",children:"Read more about invoking actors"}),"."]}),"\n",(0,s.jsx)(a,{embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=66f77051-089e-4b0a-9fa9-42e1f7598135",name:"video player"}),"\n",(0,s.jsxs)(n.p,{children:["In the video player above, the\xa0",(0,s.jsx)(n.em,{children:"startVideo"}),"\xa0actor is invoked when the video player is in the\xa0",(0,s.jsx)(n.em,{children:"Opened"}),"\xa0state."]}),"\n",(0,s.jsx)(n.h3,{id:"invoke-actors-on-a-state",children:"Invoke actors on a state"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select a state and use ",(0,s.jsx)(d,{size:18})," ",(0,s.jsx)(n.strong,{children:"Invoke"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select a state, open the state ",(0,s.jsx)(r,{size:18})," ",(0,s.jsx)(n.strong,{children:"Details"})," panel from the right tool menu, and use the ",(0,s.jsx)(l,{size:18})," ",(0,s.jsx)(n.strong,{children:"Effect"})," button and choose ",(0,s.jsx)(n.strong,{children:"Add invoked actor"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(o,{size:18})," edit icon button to open the ",(0,s.jsx)(t,{size:18})," ",(0,s.jsx)(n.strong,{children:"Sources"})," panel and enter the actor\u2019s source logic."]}),"\n",(0,s.jsxs)(n.p,{children:["Provide your actor with an ID so it can be used with the ",(0,s.jsxs)(n.a,{href:"#xstate-built-in-actions",children:[(0,s.jsx)(n.code,{children:"sendTo"})," or ",(0,s.jsx)(n.code,{children:"stop"})," actions"]})," to stop and send events to the actor. You can add actor input by selecting the actor and using add ",(0,s.jsx)(l,{size:18})," ",(0,s.jsx)(n.strong,{children:"input property"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To remove an actor, use the ",(0,s.jsx)("kbd",{children:"Backspace"})," key, ",(0,s.jsx)(n.em,{children:"right-click"})," and choose ",(0,s.jsx)(n.strong,{children:"Delete"}),", or use the ",(0,s.jsx)(h,{size:18})," delete icon button in the ",(0,s.jsx)(n.strong,{children:"Details"})," panel."]}),"\n",(0,s.jsx)(n.h4,{id:"invoke-done-and-invoke-error-events",children:"Invoke done and invoke error events"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Invoke done events"}),"\xa0and ",(0,s.jsx)(n.strong,{children:"invoke error events"})," transition from a state once its invocation has been completed or returns an error. The source state must have an invoked actor to create an invoke done or invoke error event."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select the state with an invoked actor and create a new transition from that state. The first new transition will be created as an invoke done event."}),"\n",(0,s.jsx)(n.li,{children:"Subsequent new transitions will be created as invoke error events."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To change an invoke done or invoke error event back into a regular transition, Use the ",(0,s.jsx)(c,{size:18})," triple dot menu or ",(0,s.jsx)(n.em,{children:"right-click"})," the transition, and from ",(0,s.jsx)(n.strong,{children:"Event type"}),", choose ",(0,s.jsx)(n.strong,{children:"Always"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"xstate-built-in-actions",children:"XState built-in actions"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the following built-in XState actions from the logic templates in the ",(0,s.jsx)(t,{size:18})," ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/xstate-zh/docs/sources",children:"Sources"})})," panel, which will be formatted in your ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/export-as-code",children:"exported code"}),". The options are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/actions/#assign-action",children:"assign"}),": assigns data to the state context."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/actions/#raise-action",children:"raise"}),": raises an event that is received by the same machine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/actions/#log-action",children:"log"}),": an easy way to log messages to the console."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/actions/#send-to-action",children:"sendTo"}),": sends an event to a specific actor."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/actions/#stop-action",children:"stop"}),": stops a child actor."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/xstate-zh/docs/actions",children:"Read more about actions in XState"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/xstate-zh/docs/actors",children:"Read more about actors in XState"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"spawning-actors-in-statelys-editor",children:"Spawning actors in Stately\u2019s editor"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Coming soon"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);