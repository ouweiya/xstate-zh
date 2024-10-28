"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4764],{93936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var o=n(85893),s=n(11151);const r={title:"@xstate/store"},i=void 0,c={id:"xstate-store",title:"@xstate/store",description:"XState Store is a small library for simple state management in JavaScript/TypeScript applications. It is meant for updating store data using events for vanilla JavaScript/TypeScript apps, React apps, and more. It is comparable to libraries like Zustand, Redux, and Pinia. For more complex state management, you should use XState instead, or you can use XState Store with XState.",source:"@site/docs/xstate-store.mdx",sourceDirName:".",slug:"/xstate-store",permalink:"/xstate-zh/docs/xstate-store",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/xstate-store.mdx",tags:[],version:"current",frontMatter:{title:"@xstate/store"},sidebar:"tutorialSidebar",previous:{title:"\u8f6f\u4ef6\u5305",permalink:"/xstate-zh/docs/category/xstate-packages"},next:{title:"@xstate/react",permalink:"/xstate-zh/docs/xstate-react"}},a={},h=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Creating a store",id:"creating-a-store",level:2},{value:"Transition functions",id:"transition-functions",level:2},{value:"Emitting events",id:"emitting-events",level:2},{value:"Inspection",id:"inspection",level:2},{value:"Using Immer",id:"using-immer",level:2},{value:"Usage with React",id:"usage-with-react",level:2},{value:"Usage with Solid",id:"usage-with-solid",level:2},{value:"Using XState Store with XState",id:"using-xstate-store-with-xstate",level:2},{value:"Converting stores to state machines",id:"converting-stores-to-state-machines",level:2},{value:"Comparison",id:"comparison",level:2},{value:"Compare to Zustand",id:"compare-to-zustand",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:n,TabItem:r,Tabs:i}=t;return n||u("Details",!0),r||u("TabItem",!0),i||u("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["XState Store is a small library for simple state management in JavaScript/TypeScript applications. It is meant for updating store data using ",(0,o.jsx)(t.strong,{children:"events"})," for vanilla JavaScript/TypeScript apps, React apps, and more. It is comparable to libraries like Zustand, Redux, and Pinia. For more complex state management, you should use ",(0,o.jsx)(t.a,{href:"/xstate-zh/docs/xstate",children:"XState"})," instead, or you can ",(0,o.jsx)(t.a,{href:"#using-xstate-store-with-xstate",children:"use XState Store with XState"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"@xstate/store"})," library requires TypeScript version 5.4 or above."]})}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)(r,{value:"npm",label:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install @xstate/store\n"})})}),(0,o.jsx)(r,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pnpm install @xstate/store\n"})})}),(0,o.jsx)(r,{value:"yarn",label:"yarn",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add @xstate/store\n"})})})]}),"\n",(0,o.jsx)(t.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\n\nconst store = createStore({\n  // Initial context\n  context: { count: 0, name: 'David' },\n  // Transitions\n  on: {\n    inc: {\n      count: (context) => context.count + 1,\n    },\n    add: {\n      count: (context, event: { num: number }) => context.count + event.num,\n    },\n    changeName: {\n      name: (context, event: { newName: string }) => event.newName,\n    },\n  },\n});\n\n// Get the current state (snapshot)\nconsole.log(store.getSnapshot());\n// => {\n//   status: 'active',\n//   context: { count: 0, name: 'David' }\n// }\n\n// Subscribe to snapshot changes\nstore.subscribe((snapshot) => {\n  console.log(snapshot.context);\n});\n\n// Send an event\nstore.send({ type: 'inc' });\n// logs { count: 1, name: 'David' }\n\nstore.send({ type: 'add', num: 10 });\n// logs { count: 11, name: 'David' }\n\nstore.send({ type: 'changeName', newName: 'Jenny' });\n// logs { count: 11, name: 'Jenny' }\n"})}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-store",children:"Creating a store"}),"\n",(0,o.jsxs)(t.p,{children:["To create a store, you need to pass an object to the ",(0,o.jsx)(t.code,{children:"createStore(\u2026)"})," function with the following properties:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["The initial ",(0,o.jsx)(t.code,{children:"context"})]}),"\n",(0,o.jsxs)(t.li,{children:["An ",(0,o.jsx)(t.code,{children:"on"})," object for transitions (event handlers) where:"]}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The keys are the event types (e.g. ",(0,o.jsx)(t.code,{children:'"inc"'}),", ",(0,o.jsx)(t.code,{children:'"add"'}),", ",(0,o.jsx)(t.code,{children:'"changeName"'}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["The values are the ",(0,o.jsx)(t.code,{children:"context"})," updates to apply when the event is sent to the store, as either an object or a function."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Updating ",(0,o.jsx)(t.code,{children:"context"})," in transitions is similar to using the ",(0,o.jsxs)(t.a,{href:"/xstate-zh/docs/context",children:[(0,o.jsx)(t.code,{children:"assign"})," action"]})," in XState. You can update specific ",(0,o.jsx)(t.code,{children:"context"})," properties by using an object:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\n\nconst store = createStore({\n  context: { count: 0, incremented: false /* ... */ },\n  on: {\n    // highlight-start\n    inc: {\n      count: (context, event: { by: number }) => context.count + event.by,\n      // Static values do not need to be wrapped in a function\n      incremented: true,\n    },\n    // highlight-end\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Or you can update the entire ",(0,o.jsx)(t.code,{children:"context"})," by using a function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\n\nconst store = createStore({\n  context: { count: 0, incremented: false /* ... */ },\n  on: {\n    // highlight-start\n    inc: (context, event: { by: number }) => {\n      // ...\n\n      return {\n        count: context.count + event.by,\n        incremented: true,\n      };\n    },\n    // highlight-end\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can spread the ",(0,o.jsx)(t.code,{children:"...context"})," when updating the entire ",(0,o.jsx)(t.code,{children:"context"})," with a function. This is useful when you want to preserve other properties in the ",(0,o.jsx)(t.code,{children:"context"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\n\nconst store = createStore({\n  context: { count: 0, incremented: false /* ... */ },\n  on: {\n    reset: (context, event) => {\n      // highlight-start\n      // You can use `...context` to preserve other properties\n      return {\n        ...context,\n        count: 0,\n      };\n      // highlight-end\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)(t.p,{children:["Note: Deprecated ",(0,o.jsx)("code",{children:"createStore(context, transitions)"})," API"]})}),(0,o.jsxs)(t.p,{children:["The previous version of ",(0,o.jsx)(t.code,{children:"createStore"})," took two arguments: an initial context and an object of event handlers. This API is still supported but deprecated. Here's an example of the old usage:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\n\nconst donutStore = createStore(\n  {\n    donuts: 0,\n    favoriteFlavor: 'chocolate',\n  },\n  {\n    addDonut: (context) => ({ ...context, donuts: context.donuts + 1 }),\n    changeFlavor: (context, event: { flavor: string }) => ({\n      ...context,\n      favoriteFlavor: event.flavor,\n    }),\n    eatAllDonuts: (context) => ({ ...context, donuts: 0 }),\n  },\n);\n"})}),(0,o.jsx)(t.p,{children:"We recommend using the new API for better type inference and more explicit configuration."})]}),"\n",(0,o.jsx)(t.h2,{id:"transition-functions",children:"Transition functions"}),"\n",(0,o.jsxs)(t.p,{children:["A transition function is a function that takes the current ",(0,o.jsx)(t.code,{children:"context"})," and an ",(0,o.jsx)(t.code,{children:"event"})," object, and returns:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The partial or entire ",(0,o.jsx)(t.code,{children:"context"})," object to update (if using a function assigner)"]}),"\n",(0,o.jsx)(t.li,{children:"The context property value to update (if using an object assigner)."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For strong typing, you should specify the payload type of the ",(0,o.jsx)(t.code,{children:"event"})," object in the transition function."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\n\nconst store = createStore({\n  context: { name: 'David', count: 0 },\n  on: {\n    // highlight-start\n    updateName: (context, event: { name: string }) => {\n      return {\n        name: event.name,\n      };\n    },\n    inc: {\n      count: (context, event: { by: number }) => {\n        return context.count + event.by;\n      },\n    },\n    // highlight-end\n  },\n});\n\nstore.send({\n  type: 'updateName',\n  name: 'Jenny', // Strongly-typed as `string`\n});\n\nstore.send({\n  type: 'inc',\n  by: 10, // Strongly-typed as `number`\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"emitting-events",children:"Emitting events"}),"\n",(0,o.jsxs)(t.p,{children:["You can emit events from transitions by using the ",(0,o.jsx)(t.code,{children:"emit"})," method from the 3rd argument of the transition function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\n\nconst store = createStore({\n  types: {\n    // highlight-next-line\n    emitted: {} as { type: 'incremented'; by: number },\n  },\n  context: { count: 0 },\n  on: {\n    // highlight-next-line\n    inc: (context, event: { by: number }, { emit }) => {\n      if (event.by > 0) {\n        // highlight-next-line\n        emit({ type: 'incremented', by: event.by });\n      }\n\n      return {\n        count: context.count + event.by,\n      };\n    },\n  },\n});\n\n// highlight-start\nconst sub = store.on('incremented', (event) => {\n  console.log(`Emitted by ${event.by}`);\n  // => logs \"Emitted by 10\"\n});\n// highlight-end\n\nstore.send({ type: 'inc', by: 10 });\n\n// Stop listening for emitted events\n// highlight-next-line\nsub.unsubscribe();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can listen for emitted events using the ",(0,o.jsx)(t.code,{children:"store.on(...)"})," method, which creates a subscription that you can later unsubscribe from. This method is type-safe, ensuring that you receive the correct event object for the emitted event type you're listening for."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that you can strongly type emitted events in the ",(0,o.jsx)(t.code,{children:"types.emitted"})," property of the store config object, just like in XState. This ensures type safety when emitting and listening for events."]}),"\n",(0,o.jsx)(t.h2,{id:"inspection",children:"Inspection"}),"\n",(0,o.jsxs)(t.p,{children:["Just like with XState, you can use the ",(0,o.jsx)(t.a,{href:"/xstate-zh/docs/inspection",children:"Inspect API"})," to inspect events sent to the store and state transitions within the store by using the .inspect method:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const store = createStore({\n  // ...\n});\n\n// highlight-start\nstore.inspect((inspectionEvent) => {\n  // type: '@xstate.snapshot' or\n  // type: '@xstate.event'\n  console.log(inspectionEvent);\n});\n// highlight-end\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Since the store is automatically started, inspectors will immediately receive the initial state snapshot."})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:".inspect(\u2026)"})," method returns a subscription object:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"const sub = store.inspect((inspectionEvent) => {\n  console.log(inspectionEvent);\n});\n\n// Stop listening for inspection events\nsub.unsubscribe();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can use the ",(0,o.jsx)(t.a,{href:"/xstate-zh/docs/inspector",children:"Stately Inspector"})," to inspect and visualize the state of the store."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// highlight-next-line\nimport { createBrowserInspector } from '@statelyai/inspect';\nimport { createStore } from '@xstate/store';\n\nconst store = createStore({\n  // ...\n});\n\n// highlight-start\nconst inspector = createBrowserInspector({\n  // ...\n});\n// highlight-end\n\n// highlight-next-line\nstore.inspect(inspector);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"using-immer",children:"Using Immer"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use ",(0,o.jsx)(t.a,{href:"https://immerjs.github.io/immer/",children:"Immer"})," to update the ",(0,o.jsx)(t.code,{children:"context"}),", you can do so by passing in the ",(0,o.jsx)(t.code,{children:"produce"})," function as the first argument to ",(0,o.jsx)(t.code,{children:"createStoreWithProducer(producer, \u2026)"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStoreWithProducer } from '@xstate/store';\n// highlight-next-line\nimport { produce } from 'immer';\n\nconst store = createStoreWithProducer(\n  // highlight-start\n  // Producer\n  produce,\n  // highlight-end\n  {\n    context: { count: 0, todos: [] },\n    on: {\n      inc: (context, event: { by: number }) => {\n        // highlight-start\n        // No return; handled by Immer\n        context.count += event.by;\n        // highlight-end\n      },\n      addTodo: (context, event: { todo: string }) => {\n        // highlight-start\n        // No return; handled by Immer\n        context.todos.push(event.todo);\n        // highlight-end\n      },\n    },\n  },\n);\n\n// ...\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note that you cannot use the object assigner syntax when using ",(0,o.jsx)(t.code,{children:"createStoreFromProducer(\u2026)"}),", nor is it even necessary."]}),"\n",(0,o.jsx)(t.h2,{id:"usage-with-react",children:"Usage with React"}),"\n",(0,o.jsxs)(t.p,{children:["If you are using React, you can use the ",(0,o.jsx)(t.code,{children:"useSelector(store, selector)"})," hook to subscribe to the store and get the current state."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { createStore } from '@xstate/store';\n// highlight-next-line\nimport { useSelector } from '@xstate/store/react';\n\n// Create a store\nconst store = createStore({\n  context: { count: 0, name: 'David' },\n  on: {\n    inc: {\n      count: (context) => context.count + 1,\n    },\n  },\n});\n\n// Use the `useSelector` hook to subscribe to the store\nfunction Component(props) {\n  // highlight-next-line\n  const count = useSelector(store, (state) => state.context.count);\n\n  // This component displays the count and has a button to increment it\n  return (\n    <div>\n      // highlight-start Count: {count}\n      <button onClick={() => store.send({ type: 'inc' })}>Increment</button>\n      // highlight-end\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"A store can be shared with multiple components, which will all receive the same snapshot from the store instance. Stores are useful for global state management."}),"\n",(0,o.jsx)(t.h2,{id:"usage-with-solid",children:"Usage with Solid"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Documentation coming soon!"})}),"\n",(0,o.jsx)(t.h2,{id:"using-xstate-store-with-xstate",children:"Using XState Store with XState"}),"\n",(0,o.jsxs)(t.p,{children:["You may notice that stores are very similar to ",(0,o.jsx)(t.a,{href:"/xstate-zh/docs/actors",children:"actors in XState"}),". This is very much by design. XState's actors are very powerful, but may also be too complex for simple use cases, which is why ",(0,o.jsx)(t.code,{children:"@xstate/store"})," exists."]}),"\n",(0,o.jsxs)(t.p,{children:["However, if you have existing XState code, and you enjoy the simplicity of creating store logic with ",(0,o.jsx)(t.code,{children:"@xstate/store"}),", you can use the ",(0,o.jsx)(t.code,{children:"fromStore(context, transitions)"})," actor logic creator to create XState-compatible store logic that can be passed to the ",(0,o.jsx)(t.code,{children:"createActor(storeLogic)"})," function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// highlight-start\nimport { fromStore } from '@xstate/store';\nimport { createActor } from 'xstate';\n// highlight-end\n\n// Instead of:\n// const store = createStore( ... };\nconst storeLogic = fromStore({\n  context: { count: 0, incremented: false /* ... */ },\n  on: {\n    // highlight-start\n    inc: {\n      count: (context, event) => context.count + 1,\n      // Static values do not need to be wrapped in a function\n      incremented: true,\n    },\n    // highlight-end\n  },\n});\n\nconst store = createActor(storeLogic);\nstore.subscribe((snapshot) => {\n  console.log(snapshot);\n});\nstore.start();\n\nstore.send({\n  type: 'inc',\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In short, you can convert ",(0,o.jsx)(t.code,{children:"createStore(\u2026)"})," to ",(0,o.jsx)(t.code,{children:"fromStore(\u2026)"})," just by changing one line of code. Note that ",(0,o.jsx)(t.code,{children:"fromStore(\u2026)"})," returns ",(0,o.jsx)(t.em,{children:"store logic"}),", and not a store actor instance. Store logic is passed to ",(0,o.jsx)(t.code,{children:"createActor(storeLogic)"})," to create a store actor instance:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// Instead of:\n// const store = createStore({\nconst storeLogic = fromStore({\n  context: {\n    // ...\n  },\n  on: {\n    // ...\n  },\n});\n\n// Create the store (actor)\nconst storeActor = createActor(storeLogic);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Using ",(0,o.jsx)(t.code,{children:"fromStore(\u2026)"})," to create store actor logic also has the advantage of allowing you to provide ",(0,o.jsx)(t.code,{children:"input"})," by using a context function that takes in the ",(0,o.jsx)(t.code,{children:"input"})," and ",(0,o.jsx)(t.em,{children:"returns"})," the initial ",(0,o.jsx)(t.code,{children:"context"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { fromStore } from '@xstate/store';\n\n// highlight-start\nconst storeLogic = fromStore({\n  context: (initialCount: number) => ({\n    count: initialCount,\n  }),\n  on: {\n    // highlight-end\n    // ...\n  },\n});\n\nconst actor = createActor(storeLogic, {\n  // highlight-next-line\n  input: 42,\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"converting-stores-to-state-machines",children:"Converting stores to state machines"}),"\n",(0,o.jsx)(t.p,{children:"If you have a store that you want to convert to a state machine in XState, you can convert it in a straightforward way:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Use ",(0,o.jsx)(t.code,{children:"createMachine(\u2026)"})," (imported from ",(0,o.jsx)(t.code,{children:"xstate"}),") instead of ",(0,o.jsx)(t.code,{children:"createStore(\u2026)"})," (imported from ",(0,o.jsx)(t.code,{children:"@xstate/store"}),") to create a state machine."]}),"\n",(0,o.jsxs)(t.li,{children:["Wrap the assignments in an ",(0,o.jsx)(t.code,{children:"assign(\u2026)"})," action creator (imported from ",(0,o.jsx)(t.code,{children:"xstate"}),") and move that to the ",(0,o.jsx)(t.code,{children:"actions"})," property of the transition."]}),"\n",(0,o.jsxs)(t.li,{children:["Destructure ",(0,o.jsx)(t.code,{children:"context"})," and ",(0,o.jsx)(t.code,{children:"event"})," from the first argument instead of them being separate arguments."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For example, here is our store before conversion:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\n// 1. Use `createMachine(\u2026)` instead of `createStore(\u2026)`\nconst store = createStore({\n  context: { count: 0, name: 'David' },\n  on: {\n    inc: {\n      // 2. Wrap the assignments in `assign(\u2026)`\n      // 3. Destructure `context` and `event` from the first argument\n      count: (context, event: { by: number }) => context.count + event.by,\n    },\n  },\n});\n\nconst machine = createMachine({\n  // ...\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"And here is the store as a state machine after conversion:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\n// const store = createStore(\n//   { count: 0, name: 'David' },\n//   {\n//     inc: {\n//       count: (context, event: { by: number }) => context.count + event.by\n//     }\n//   });\n\n// 1. Use `createMachine(\u2026)` instead of `createStore(\u2026)`\nconst machine = createMachine({\n  context: {\n    count: 0,\n    name: 'David',\n  },\n  on: {\n    inc: {\n      // 2. Wrap the assignments in `assign(\u2026)`\n      actions: assign({\n        // 3. Destructure `context` and `event` from the first argument\n        count: ({ context, event }) => context.count + event.by,\n      }),\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For stronger typing, use the ",(0,o.jsxs)(t.a,{href:"/xstate-zh/docs/setup",children:[(0,o.jsx)(t.code,{children:"setup(\u2026)"})," function"]})," to strongly type the ",(0,o.jsx)(t.code,{children:"context"})," and ",(0,o.jsx)(t.code,{children:"events"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { setup } from 'xstate';\n\nconst machine = setup({\n  // highlight-start\n  types: {\n    context: {} as { count: number; name: string },\n    events: {} as { type: 'inc'; by: number },\n  },\n  // highlight-end\n}).createMachine({\n  // Same as the previous example\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"comparison",children:"Comparison"}),"\n",(0,o.jsxs)(t.p,{children:["This section compares XState Store to other popular state management libraries in TypeScript. It is meant for reference purposes only, and not intended to favor one approach over the other. The examples are copied from ",(0,o.jsx)(t.a,{href:"https://docs.pmnd.rs/zustand/getting-started/comparison",children:"Zustand's comparison docs"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"compare-to-zustand",children:"Compare to Zustand"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Zustand"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { create } from 'zustand';\n\ntype State = {\n  count: number;\n};\n\ntype Actions = {\n  increment: (qty: number) => void;\n  decrement: (qty: number) => void;\n};\n\nconst useCountStore = create<State & Actions>((set) => ({\n  count: 0,\n  increment: (qty: number) =>\n    set((state) => ({\n      count: state.count + qty,\n    })),\n  decrement: (qty: number) =>\n    set((state) => ({\n      count: state.count - qty,\n    })),\n}));\n\nconst Component = () => {\n  const count = useCountStore((state) => state.count);\n  const increment = useCountStore((state) => state.increment);\n  const decrement = useCountStore((state) => state.decrement);\n  // ...\n};\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"XState Store"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@xstate/store';\nimport { useSelector } from '@xstate/store/react';\n\nconst store = createStore({\n  context: {\n    count: 0,\n  },\n  on: {\n    increment: (context, { qty }: { qty: number }) => ({\n      count: context.count + qty,\n    }),\n    decrement: (context, { qty }: { qty: number }) => ({\n      count: context.count - qty,\n    }),\n  },\n});\n\nconst Component = () => {\n  const count = useSelector(store, (state) => state.context.count);\n  const increment = (qty) => store.send({ type: 'increment', qty });\n  const decrement = (qty) => store.send({ type: 'decrement', qty });\n  // ...\n};\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var o=n(67294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);