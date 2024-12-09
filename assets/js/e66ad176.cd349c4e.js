"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5275],{53997:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const r={title:"Event emitter(\u4e8b\u4ef6\u53d1\u5c04\u5668)"},c=void 0,o={id:"event-emitter",title:"Event emitter(\u4e8b\u4ef6\u53d1\u5c04\u5668)",description:"\u81ea XState \u7248\u672c 5.9.0 \u8d77",source:"@site/docs/event-emitter.mdx",sourceDirName:".",slug:"/event-emitter",permalink:"/xstate-zh/docs/event-emitter",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/event-emitter.mdx",tags:[],version:"current",frontMatter:{title:"Event emitter(\u4e8b\u4ef6\u53d1\u5c04\u5668)"},sidebar:"tutorialSidebar",previous:{title:"Tags(\u6807\u7b7e)",permalink:"/xstate-zh/docs/tags"},next:{title:"\u4ee3\u7406",permalink:"/xstate-zh/docs/category/agents"}},a={},l=[{value:"\u4ece actor \u903b\u8f91\u4e2d\u53d1\u5c04\u4e8b\u4ef6",id:"\u4ece-actor-\u903b\u8f91\u4e2d\u53d1\u5c04\u4e8b\u4ef6",level:2},{value:"\u53d1\u5c04\u52a8\u4f5c\u521b\u5efa\u5668",id:"\u53d1\u5c04\u52a8\u4f5c\u521b\u5efa\u5668",level:2},{value:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",id:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",level:2},{value:"\u901a\u914d\u7b26\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",id:"\u901a\u914d\u7b26\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",level:2},{value:"TypeScript",id:"typescript",level:2}];function h(n){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\u81ea XState \u7248\u672c 5.9.0 \u8d77"})}),"\n",(0,i.jsx)(e.p,{children:"XState \u4e2d\u7684\u72b6\u6001\u673a\u548c\u5176\u4ed6\u7c7b\u578b\u7684 actor \u903b\u8f91\u5177\u6709\u53d1\u5c04\u4e8b\u4ef6\u7684\u80fd\u529b\u3002\u8fd9\u5141\u8bb8\u5916\u90e8\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u63a5\u6536\u7279\u5b9a\u4e8b\u4ef6\u7684\u901a\u77e5\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8e\u72b6\u6001\u673a\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"emit(event)"})," \u52a8\u4f5c\u521b\u5efa\u5668\u53d1\u5c04\u4e8b\u4ef6\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { setup, emit } from 'xstate';\n\nconst machine = setup({\n  actions: {\n    // highlight-next-line\n    emitEvent: emit({ type: 'notification' })\n  }\n}).createMachine({\n  // ...\n  on: {\n    someEvent: {\n      // highlight-next-line\n      actions: { type: 'emitEvent' }\n    }\n  }\n});\n\nconst actor = createActor(machine);\n\n// highlight-start\nactor.on('notification', (event) => {\n  console.log('Notification received!', event);\n});\n// highlight-end\n\nactor.start();\n\nactor.send({ type: 'someEvent' });\n// \u65e5\u5fd7:\n// \"Notification received!\"\n// { type: \"notification\" }\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4ece-actor-\u903b\u8f91\u4e2d\u53d1\u5c04\u4e8b\u4ef6",children:"\u4ece actor \u903b\u8f91\u4e2d\u53d1\u5c04\u4e8b\u4ef6"}),"\n",(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8e promise actors\u3001transition actors\u3001observable actors \u548c callback actors\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570\u4e2d\u7684 ",(0,i.jsx)(e.code,{children:"emit"})," \u65b9\u6cd5\u6765\u53d1\u5c04\u4e8b\u4ef6\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Promise actors"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { fromPromise } from 'xstate';\n\n// highlight-next-line\nconst logic = fromPromise(async ({ emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n});\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8f6c\u6362 actors"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { fromTransition } from 'xstate';\n\n// highlight-next-line\nconst logic = fromTransition((state, event, { emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n  return state;\n}, {});\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Observable actors"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { fromObservable } from 'xstate';\n\n// highlight-next-line\nconst logic = fromObservable(({ emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n});\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u56de\u8c03 actors"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { fromCallback } from 'xstate';\n\n// highlight-next-line\nconst logic = fromCallback(({ emit }) => {\n  // ...\n  // highlight-start\n  emit({\n    type: 'emitted',\n    msg: 'hello'\n  });\n  // highlight-end\n  // ...\n});\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53d1\u5c04\u52a8\u4f5c\u521b\u5efa\u5668",children:"\u53d1\u5c04\u52a8\u4f5c\u521b\u5efa\u5668"}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u5c04\u52a8\u4f5c\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u52a8\u4f5c\uff0c\u5b83\u4ece\u72b6\u6001\u673a\u903b\u8f91\u4e2d\u5411\u4efb\u4f55\u5916\u90e8\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u201c\u53d1\u5c04\u201d\u4e00\u4e2a\u4e8b\u4ef6\u3002\u53d1\u5c04\u7684\u4e8b\u4ef6\u53ef\u4ee5\u662f\u9759\u6001\u5b9a\u4e49\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u52a8\u6001\u5b9a\u4e49\u7684\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { setup, emit } from 'xstate';\n\nconst machine = setup({\n  actions: {\n    // highlight-start\n    // \u53d1\u5c04\u4e00\u4e2a\u9759\u6001\u5b9a\u4e49\u7684\u4e8b\u4ef6\n    emitStaticEvent: emit({\n      type: 'someStaticEvent',\n      data: 42\n    }),\n    // highlight-end\n\n    // highlight-start\n    // \u57fa\u4e8e\u4e0a\u4e0b\u6587\u53d1\u5c04\u4e00\u4e2a\u52a8\u6001\u5b9a\u4e49\u7684\u4e8b\u4ef6\n    emitDynamicEvent: emit(({ context }) => ({\n      type: 'someDynamicEvent',\n      data: context.someData\n    }))\n    // highlight-end\n  }\n}).createMachine({\n  // ...\n  on: {\n    someEvent: {\n      actions: [\n        { type: 'emitStaticEvent' },\n        { type: 'emitDynamicEvent' }\n      ]\n    }\n  }\n});\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",children:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"actor.on(event, handler)"})," \u5c06\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u9644\u52a0\u5230 actor \u4ee5\u76d1\u542c\u53d1\u5c04\u7684\u4e8b\u4ef6\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"const someActor = createActor(someMachine);\n\n// highlight-start\nsomeActor.on('someEvent', (emittedEvent) => {\n  // \u5904\u7406\u53d1\u5c04\u7684\u4e8b\u4ef6\n  console.log(emittedEvent);\n});\n// highlight-end\n\nsomeActor.start();\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"actor.on(\u2026)"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u8ba2\u9605\u5bf9\u8c61\u3002\u4f60\u53ef\u4ee5\u8c03\u7528 ",(0,i.jsx)(e.code,{children:".unsubscribe()"})," \u6765\u79fb\u9664\u5904\u7406\u7a0b\u5e8f\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"const someActor = createActor(someMachine);\n\n// highlight-start\nconst subscription = someActor.on('someEvent', (emittedEvent) => {\n  // \u5904\u7406\u53d1\u5c04\u7684\u4e8b\u4ef6\n  console.log(emittedEvent);\n});\n// highlight-end\n\nsomeActor.start();\n\n// ...\n\n// highlight-start\n// \u505c\u6b62\u76d1\u542c\u4e8b\u4ef6\nsubscription.unsubscribe();\n// highlight-end\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u901a\u914d\u7b26\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f",children:"\u901a\u914d\u7b26\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u76d1\u542c\u901a\u914d\u7b26 ",(0,i.jsx)(e.code,{children:"'*'"})," \u6765\u76d1\u542c\u4efb\u4f55\u53d1\u5c04\u7684\u4e8b\u4ef6\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"const someActor = createActor(someMachine);\n\nactor.on('*', (emitted) => {\n  console.log(emitted); // \u4efb\u4f55\u53d1\u5c04\u7684\u4e8b\u4ef6\n});\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u53d1\u5c04\u7684 ",(0,i.jsx)(e.code,{children:"emitted"})," \u4e8b\u4ef6\u5c06\u88ab\u7c7b\u578b\u5316\u4e3a\u53ef\u4ee5\u4ece\u72b6\u6001\u673a\u53d1\u5c04\u7684\u6240\u6709\u53ef\u80fd\u4e8b\u4ef6\u7684\u8054\u5408\u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.jsx)(e.code,{children:"setup(\u2026)"})," \u51fd\u6570\u7684 ",(0,i.jsx)(e.code,{children:"types.emitted"})," \u5c5e\u6027\u4e2d\u5b9a\u4e49\u53d1\u5c04\u4e8b\u4ef6\u7684\u7c7b\u578b\u6765\u5f3a\u7c7b\u578b\u5316\u53d1\u5c04\u7684\u4e8b\u4ef6\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { setup, emit, createActor } from 'xstate';\n\nconst machine = setup({\n  types: {\n    // highlight-start\n    emitted: {} as\n      | { type: 'notification'; message: string; }\n      | { type: 'error'; error: Error; },\n    // highlight-end\n    // ...\n  }\n}).createMachine({\n  // ...\n  on: {\n    someEvent: {\n      actions: [\n        // highlight-start\n        // \u5f3a\u7c7b\u578b\u5316\u7684\u53d1\u5c04\u4e8b\u4ef6\n        emit({ type: 'notification', message: 'Hello' })\n        // highlight-end\n      ]\n    }\n  }\n});\n\nconst actor = createActor(machine);\n\n// highlight-start\n// \u5f3a\u7c7b\u578b\u5316\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\nactor.on('notification', (event) => {\n  console.log(event.message); // string\n});\n// highlight-end\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>c});var i=t(67294);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);