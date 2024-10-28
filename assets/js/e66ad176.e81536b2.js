"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5275],{53997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const o={title:"Event emitter"},r=void 0,c={id:"event-emitter",title:"Event emitter",description:"Since XState version 5.9.0",source:"@site/docs/event-emitter.mdx",sourceDirName:".",slug:"/event-emitter",permalink:"/xstate-zh/docs/event-emitter",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/event-emitter.mdx",tags:[],version:"current",frontMatter:{title:"Event emitter"},sidebar:"tutorialSidebar",previous:{title:"Tags",permalink:"/xstate-zh/docs/tags"},next:{title:"\u4ee3\u7406",permalink:"/xstate-zh/docs/category/agents"}},a={},l=[{value:"Emitting events from actor logic",id:"emitting-events-from-actor-logic",level:2},{value:"Emit action creator",id:"emit-action-creator",level:2},{value:"Event handlers",id:"event-handlers",level:2},{value:"Wildcard event handlers",id:"wildcard-event-handlers",level:2},{value:"TypeScript",id:"typescript",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Since XState version 5.9.0"})}),"\n",(0,i.jsx)(n.p,{children:"State machines and other types of actor logic in XState have the ability to emit events. This allows external event handlers to be notified of specific events."}),"\n",(0,i.jsxs)(n.p,{children:["With state machines, you can emit events using the ",(0,i.jsx)(n.code,{children:"emit(event)"})," action creator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { setup, emit } from 'xstate';\n\nconst machine = setup({\n  actions: {\n    // highlight-next-line\n    emitEvent: emit({ type: 'notification' })\n  }\n}).createMachine({\n  // ...\n  on: {\n    someEvent: {\n      // highlight-next-line\n      actions: { type: 'emitEvent' }\n    }\n  }\n});\n\nconst actor = createActor(machine);\n\n// highlight-start\nactor.on('notification', (event) => {\n  console.log('Notification received!', event);\n});\n// highlight-end\n\nactor.start();\n\nactor.send({ type: 'someEvent' });\n// Logs:\n// \"Notification received!\"\n// { type: \"notification\" }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"emitting-events-from-actor-logic",children:"Emitting events from actor logic"}),"\n",(0,i.jsxs)(n.p,{children:["For promise actors, transition actors, observable actors, and callback actors, you can use the ",(0,i.jsx)(n.code,{children:"emit"})," method from the arguments to emit events."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Promise actors"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { fromPromise } from 'xstate';\n\n// highlight-next-line\nconst logic = fromPromise(async ({ emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Transition actors"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { fromTransition } from 'xstate';\n\n// highlight-next-line\nconst logic = fromTransition((state, event, { emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n  return state;\n}, {});\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Observable actors"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { fromObservable } from 'xstate';\n\n// highlight-next-line\nconst logic = fromObservable(({ emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Callback actors"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { fromCallback } from 'xstate';\n\n// highlight-next-line\nconst logic = fromCallback(({ emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"emit-action-creator",children:"Emit action creator"}),"\n",(0,i.jsxs)(n.p,{children:["The emit action is a special action that ",(0,i.jsx)(n.em,{children:"emits"})," an event to any external event handlers from state machine logic. The emitted event can be statically or dynamically defined:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { setup, emit } from 'xstate';\n\nconst machine = setup({\n  actions: {\n    // highlight-start\n    // Emitting a statically-defined event\n    emitStaticEvent: emit({\n      type: 'someStaticEvent',\n      data: 42\n    }),\n    // highlight-end\n\n    // highlight-start\n    // Emitting a dynamically-defined event based on context\n    emitDynamicEvent: emit(({ context }) => ({\n      type: 'someDynamicEvent',\n      data: context.someData\n    }))\n    // highlight-end\n  }\n}).createMachine({\n  // ...\n  on: {\n    someEvent: {\n      actions: [\n        { type: 'emitStaticEvent' },\n        { type: 'emitDynamicEvent' }\n      ]\n    }\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"event-handlers",children:"Event handlers"}),"\n",(0,i.jsxs)(n.p,{children:["You can attach event handlers to the actor to listen for emitted events by using ",(0,i.jsx)(n.code,{children:"actor.on(event, handler)"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const someActor = createActor(someMachine);\n\n// highlight-start\nsomeActor.on('someEvent', (emittedEvent) => {\n  // Handle the emitted event\n  console.log(emittedEvent);\n});\n// highlight-end\n\nsomeActor.start();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"actor.on(\u2026)"})," method returns a subscription object. You can call ",(0,i.jsx)(n.code,{children:".unsubscribe()"})," on it to remove the handler:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const someActor = createActor(someMachine);\n\n// highlight-start\nconst subscription = someActor.on('someEvent', (emittedEvent) => {\n  // Handle the emitted event\n  console.log(emittedEvent);\n});\n// highlight-end\n\nsomeActor.start();\n\n// ...\n\n// highlight-start\n// Stop listening for events\nsubscription.unsubscribe();\n// highlight-end\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wildcard-event-handlers",children:"Wildcard event handlers"}),"\n",(0,i.jsxs)(n.p,{children:["You can listen for ",(0,i.jsx)(n.em,{children:"any"})," emitted event by listening for the wildcard ",(0,i.jsx)(n.code,{children:"'*'"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const someActor = createActor(someMachine);\n\nactor.on('*', (emitted) => {\n  console.log(emitted); // Any emitted event\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"emitted"})," event will be typed as the union of all possible events that can be emitted from the machine."]}),"\n",(0,i.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,i.jsxs)(n.p,{children:["You can strongly type emitted events by defining the emitted event types in the ",(0,i.jsx)(n.code,{children:"types.emitted"})," property of the ",(0,i.jsx)(n.code,{children:"setup(\u2026)"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { setup, emit, createActor } from 'xstate';\n\nconst machine = setup({\n  types: {\n    // highlight-start\n    emitted: {} as \n      | { type: 'notification'; message: string; }\n      | { type: 'error'; error: Error; },\n    // highlight-end\n    // ...\n  }\n}).createMachine({\n  // ...\n  on: {\n    someEvent: {\n      actions: [\n        // highlight-start\n        // Strongly typed emitted event\n        emit({ type: 'notification', message: 'Hello' })\n        // highlight-end\n      ]\n    }\n  }\n});\n\nconst actor = createActor(machine);\n\n// highlight-start\n// Strongly typed event handler\nactor.on('notification', (event) => {\n  console.log(event.message); // string\n});\n// highlight-end\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);