"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4231],{48370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=n(85893),r=n(11151);const c={title:"Persistence(\u6301\u4e45\u5316)"},a=void 0,o={id:"persistence",title:"Persistence(\u6301\u4e45\u5316)",description:"Actors \u53ef\u4ee5\u6301\u4e45\u5316\u5176\u5185\u90e8\u72b6\u6001\u5e76\u5728\u4ee5\u540e\u6062\u590d\u3002\u6301\u4e45\u5316\u662f\u6307\u5c06 actor \u7684\u72b6\u6001\u5b58\u50a8\u5728\u6301\u4e45\u5b58\u50a8\u4e2d\uff0c\u4f8b\u5982 localStorage \u6216\u6570\u636e\u5e93\u3002\u6062\u590d\u662f\u6307\u4ece\u6301\u4e45\u5b58\u50a8\u4e2d\u6062\u590d actor \u7684\u72b6\u6001\u3002",source:"@site/docs/persistence.mdx",sourceDirName:".",slug:"/persistence",permalink:"/xstate-zh/docs/persistence",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/persistence.mdx",tags:[],version:"current",frontMatter:{title:"Persistence(\u6301\u4e45\u5316)"},sidebar:"tutorialSidebar",previous:{title:"History states(\u5386\u53f2\u72b6\u6001)",permalink:"/xstate-zh/docs/history-states"},next:{title:"Tags(\u6807\u7b7e)",permalink:"/xstate-zh/docs/tags"}},i={},d=[{value:"\u6301\u4e45\u5316\u72b6\u6001",id:"\u6301\u4e45\u5316\u72b6\u6001",level:2},{value:"\u6062\u590d\u72b6\u6001",id:"\u6062\u590d\u72b6\u6001",level:2},{value:"\u6df1\u5ea6\u6301\u4e45\u5316",id:"\u6df1\u5ea6\u6301\u4e45\u5316",level:2},{value:"\u6301\u4e45\u5316\u72b6\u6001\u673a\u503c",id:"\u6301\u4e45\u5316\u72b6\u6001\u673a\u503c",level:2},{value:"\u4e8b\u4ef6\u6eaf\u6e90",id:"\u4e8b\u4ef6\u6eaf\u6e90",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u6301\u4e45\u5316\u901f\u67e5\u8868",id:"\u6301\u4e45\u5316\u901f\u67e5\u8868",level:2},{value:"\u901f\u67e5\u8868\uff1a\u6301\u4e45\u5316\u72b6\u6001",id:"\u901f\u67e5\u8868\u6301\u4e45\u5316\u72b6\u6001",level:3},{value:"Cheatsheet: restoring state",id:"cheatsheet-restoring-state",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/xstate-zh/docs/actors",children:"Actors"})," \u53ef\u4ee5\u6301\u4e45\u5316\u5176\u5185\u90e8\u72b6\u6001\u5e76\u5728\u4ee5\u540e\u6062\u590d\u3002",(0,s.jsx)(t.strong,{children:"\u6301\u4e45\u5316"}),"\u662f\u6307\u5c06 actor \u7684\u72b6\u6001\u5b58\u50a8\u5728\u6301\u4e45\u5b58\u50a8\u4e2d\uff0c\u4f8b\u5982 localStorage \u6216\u6570\u636e\u5e93\u3002",(0,s.jsx)(t.strong,{children:"\u6062\u590d"}),"\u662f\u6307\u4ece\u6301\u4e45\u5b58\u50a8\u4e2d\u6062\u590d actor \u7684\u72b6\u6001\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6301\u4e45\u5316\u5bf9\u4e8e\u5728\u6d4f\u89c8\u5668\u91cd\u65b0\u52a0\u8f7d\u65f6\u4fdd\u6301\u72b6\u6001\u975e\u5e38\u6709\u7528\u3002\u5728\u540e\u7aef\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u6301\u4e45\u5316\u5141\u8bb8\u5de5\u4f5c\u6d41\u8de8\u591a\u4e2a\u8bf7\u6c42\uff0c\u80fd\u591f\u5728\u670d\u52a1\u91cd\u542f\u65f6\u5b58\u6d3b\uff0c\u5177\u6709\u5bb9\u9519\u80fd\u529b\uff0c\u80fd\u591f\u8868\u793a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u5e76\u4e14\u53ef\u4ee5\u8fdb\u884c\u5ba1\u8ba1\u548c\u8ffd\u8e2a\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728 XState \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"actor.getPersistedSnapshot()"})," \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u5feb\u7167\uff08\u72b6\u6001\uff09\uff0c\u5e76\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"createActor(behavior, { snapshot: restoredState }).start()"})," \u6062\u590d\u5b83\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const feedbackActor = createActor(feedbackMachine).start();\n\n// \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u72b6\u6001\nconst persistedState = feedbackActor.getPersistedSnapshot();\n\n// \u6301\u4e45\u5316\u72b6\u6001\nlocalStorage.setItem('feedback', JSON.stringify(persistedState));\n\n// \u6062\u590d\u72b6\u6001\nconst restoredState = JSON.parse(localStorage.getItem('feedback'));\n\nconst restoredFeedbackActor = createActor(feedbackMachine, {\n  snapshot: restoredState,\n}).start();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u6301\u4e45\u5316\u72b6\u6001",children:"\u6301\u4e45\u5316\u72b6\u6001"}),"\n",(0,s.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"actor.getPersistedSnapshot()"})," \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u72b6\u6001\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const feedbackActor = createActor(feedbackMachine).start();\n\n// \u83b7\u53d6\u8981\u6301\u4e45\u5316\u7684\u72b6\u6001\nconst persistedState = feedbackActor.getPersistedSnapshot();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5185\u90e8\u72b6\u6001\u53ef\u4ee5\u4ece\u4efb\u4f55 actor \u6301\u4e45\u5316\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u72b6\u6001\u673a\u3002\u8bf7\u6ce8\u610f\uff0c\u6301\u4e45\u5316\u72b6\u6001\u4e0e ",(0,s.jsx)(t.code,{children:"actor.getSnapshot()"})," \u7684\u5feb\u7167\u4e0d\u540c\uff1b\u6301\u4e45\u5316\u72b6\u6001\u8868\u793a actor \u7684\u5185\u90e8\u72b6\u6001\uff0c\u800c\u5feb\u7167\u8868\u793a actor \u6700\u540e\u53d1\u51fa\u7684\u503c\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const promiseActor = fromPromise(() => Promise.resolve(42));\n\n// \u83b7\u53d6\u6700\u540e\u53d1\u51fa\u7684\u503c\nconst snapshot = promiseActor.getSnapshot();\nconsole.log(snapshot);\n// \u8f93\u51fa 42\n\n// \u83b7\u53d6\u6301\u4e45\u5316\u72b6\u6001\nconst persistedState = promiseActor.getPersistedSnapshot();\nconsole.log(persistedState);\n// \u8f93\u51fa { status: 'done', data: 42 }\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u6062\u590d\u72b6\u6001",children:"\u6062\u590d\u72b6\u6001"}),"\n",(0,s.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u6301\u4e45\u5316\u72b6\u6001\u4f20\u9012\u7ed9 ",(0,s.jsx)(t.code,{children:"createActor(logic, { snapshot: restoredState })"})," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u7684 ",(0,s.jsx)(t.code,{children:"state"})," \u9009\u9879\u6765\u6062\u590d actor \u5230\u6301\u4e45\u5316\u72b6\u6001\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// \u83b7\u53d6\u6301\u4e45\u5316\u72b6\u6001\nconst restoredState = JSON.parse(localStorage.getItem('feedback'));\n\n// \u6062\u590d\u72b6\u6001\nconst feedbackActor = createActor(feedbackMachine, {\n  snapshot: restoredState,\n});\n\nfeedbackActor.start();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6765\u81ea\u673a\u5668 actor \u7684\u52a8\u4f5c\u5c06 ",(0,s.jsx)(t.em,{children:"\u4e0d\u4f1a"})," \u88ab\u91cd\u65b0\u6267\u884c\uff0c\u56e0\u4e3a\u5b83\u4eec\u88ab\u5047\u5b9a\u5df2\u7ecf\u6267\u884c\u8fc7\u3002\u7136\u800c\uff0c\u8c03\u7528\u5c06\u88ab\u91cd\u65b0\u542f\u52a8\uff0c\u5e76\u4e14\u751f\u6210\u7684 actor \u5c06\u88ab\u9012\u5f52\u6062\u590d\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u6df1\u5ea6\u6301\u4e45\u5316",children:"\u6df1\u5ea6\u6301\u4e45\u5316"}),"\n",(0,s.jsxs)(t.p,{children:["\u4ece\u673a\u5668 actor \u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001\u662f\u6df1\u5ea6\u7684\uff1b\u6240\u6709 ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/invoke",children:"\u8c03\u7528\u7684"})," \u548c ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/spawn",children:"\u751f\u6210\u7684 actor"})," \u5c06\u88ab\u9012\u5f52\u6301\u4e45\u5316\u548c\u6062\u590d\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const feedbackMachine = createMachine({\n  // ...\n  states: {\n    form: {\n      invoke: {\n        id: 'form',\n        src: formMachine,\n      },\n    },\n  },\n});\n\nconst feedbackActor = createActor(feedbackMachine).start();\n\n// \u6301\u4e45\u5316\u72b6\u6001\nconst persistedState = feedbackActor.getPersistedSnapshot();\nlocalStorage.setItem('feedback', JSON.stringify(persistedState));\n\n//  ...\n\n// \u6062\u590d\u72b6\u6001\nconst restoredState = JSON.parse(localStorage.getItem('feedback'));\n\nconst restoredFeedbackActor = createActor(feedbackMachine, {\n  snapshot: restoredState,\n}).start();\n// \u5c06\u4f1a\u5728\u6301\u4e45\u5316\u72b6\u6001\u4e0b\u6062\u590d feedbackActor \u548c\u8c03\u7528\u7684 form actor\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u6301\u4e45\u5316\u72b6\u6001\u673a\u503c",children:"\u6301\u4e45\u5316\u72b6\u6001\u673a\u503c"}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u53ea\u60f3\u6301\u4e45\u5316\u72b6\u6001\u673a actor \u7684\u6709\u9650\u72b6\u6001 ",(0,s.jsx)(t.code,{children:"value"}),"\uff08\u4ee5\u53ca\u53ef\u9009\u7684 ",(0,s.jsx)(t.code,{children:"context"}),"\uff09\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"machine.resolveState(...)"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { someMachine } from './someMachine';\n\nconst restoredStateValue = localStorage.getItem('someState');\n// \u5047\u8bbe\u8fd9\u662f \"pending\"\n\n// highlight-start\nconst resolvedState = someMachine.resolveState({\n  value: restoredStateValue,\n  // context: { ... }\n});\n// highlight-end\n\n// \u6062\u590d actor\nconst restoredActor = createActor(someMachine, {\n  // highlight-next-line\n  snapshot: resolvedState\n});\n\nrestoredActor.start();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u4e8b\u4ef6\u6eaf\u6e90",children:"\u4e8b\u4ef6\u6eaf\u6e90"}),"\n",(0,s.jsxs)(t.p,{children:["\u6301\u4e45\u5316\u72b6\u6001\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f",(0,s.jsx)(t.strong,{children:"\u4e8b\u4ef6\u6eaf\u6e90"}),"\uff0c\u8fd9\u662f\u4e00\u79cd\u901a\u8fc7\u91cd\u653e\u5bfc\u81f4\u8be5\u72b6\u6001\u7684",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/transitions",children:"\u4e8b\u4ef6"}),"\u6765\u6062\u590d actor \u72b6\u6001\u7684\u65b9\u6cd5\u3002\u4e8b\u4ef6\u6eaf\u6e90\u6bd4\u6301\u4e45\u5316\u72b6\u6001\u66f4\u53ef\u9760\uff0c\u56e0\u4e3a\u5b83\u4e0d\u592a\u5bb9\u6613\u51fa\u73b0",(0,s.jsx)(t.a,{href:"#caveats",children:"\u4e0d\u517c\u5bb9\u72b6\u6001"}),"\uff0c\u5e76\u4e14\u8fd8\u5141\u8bb8\u4f60\u91cd\u653e\u52a8\u4f5c\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5b9e\u73b0\u4e8b\u4ef6\u6eaf\u6e90\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528",(0,s.jsx)(t.a,{href:"/docs/inspection",children:"\u68c0\u67e5 API"}),"\u5728\u4e8b\u4ef6\u53d1\u751f\u65f6\u6301\u4e45\u5316\u4e8b\u4ef6\uff0c\u7136\u540e\u91cd\u653e\u5b83\u4eec\u4ee5\u6062\u590d actor \u7684\u72b6\u6001\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const events = [];\n\nconst someActor = createActor(someMachine, {\n  // \u68c0\u67e5\u5e76\u6301\u4e45\u5316\u4e8b\u4ef6\n  inspect: (inspectionEvent) => {\n    if (inspectionEvent.type === '@xstate.event') {\n      const event = inspectionEvent.event;\n\n      // \u4ec5\u76d1\u542c\u53d1\u9001\u5230\u6839 actor \u7684\u4e8b\u4ef6\n      if (inspectionEvent.actorRef !== someActor) { return; }\n\n      // highlight-next-line\n      events.push(event);\n    }\n  }\n});\n\nsomeActor.start();\n\n// ...\n\n// \u5047\u8bbe\u4e8b\u4ef6\u5b58\u50a8\u5728\u67d0\u4e2a\u5730\u65b9\uff0c\u4f8b\u5982 localStorage\uff0c\n// \u4f60\u53ef\u4ee5\u91cd\u653e\u5b83\u4eec\u6765\u6062\u590d actor \u7684\u72b6\u6001\n\nconst restoredActor = createActor(someMachine);\nrestoredActor.start();\n\n// highlight-start\nfor (const event of events) {\n  // \u91cd\u653e\u4e8b\u4ef6\n  restoredActor.send(event);\n}\n// highlight-end\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001\u65f6\uff0c\u4f60\u5e94\u8be5\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4e0d\u517c\u5bb9\u72b6\u6001\uff1a\u5982\u679c\u673a\u5668\u6216 actor \u903b\u8f91\u53d1\u751f\u53d8\u5316\uff0c\u6062\u590d\u7684\u72b6\u6001\u53ef\u80fd\u4e0e\u65b0\u903b\u8f91\u4e0d\u517c\u5bb9\u3002"}),"\n",(0,s.jsxs)(t.li,{children:["\u91cd\u653e\u52a8\u4f5c\uff1a\u5df2\u7ecf\u6267\u884c\u8fc7\u7684\u52a8\u4f5c\u5c06\u4e0d\u4f1a\u88ab\u91cd\u65b0\u6267\u884c\u3002\u5bf9\u4e8e\u8fd9\u79cd\u60c5\u51b5\uff0c\u63a8\u8350\u4f7f\u7528",(0,s.jsx)(t.a,{href:"#%E4%BA%8B%E4%BB%B6%E6%BA%AF%E6%BA%90",children:"\u4e8b\u4ef6\u6eaf\u6e90"}),"\u3002"]}),"\n",(0,s.jsx)(t.li,{children:"\u5e8f\u5217\u5316\uff1a\u72b6\u6001\u5fc5\u987b\u662f\u53ef\u5e8f\u5217\u5316\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u5fc5\u987b\u662f JSON \u53ef\u5e8f\u5217\u5316\u7684\u3002\u8fd9\u610f\u5473\u7740\u4f60\u4e0d\u80fd\u6301\u4e45\u5316\u51fd\u6570\u3001\u7c7b\u6216\u5176\u4ed6\u4e0d\u53ef\u5e8f\u5217\u5316\u7684\u503c\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u6301\u4e45\u5316\u901f\u67e5\u8868",children:"\u6301\u4e45\u5316\u901f\u67e5\u8868"}),"\n",(0,s.jsx)(t.h3,{id:"\u901f\u67e5\u8868\u6301\u4e45\u5316\u72b6\u6001",children:"\u901f\u67e5\u8868\uff1a\u6301\u4e45\u5316\u72b6\u6001"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const persistedState = actor.getPersistedSnapshot();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"cheatsheet-restoring-state",children:"Cheatsheet: restoring state"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const restoredState = JSON.parse(localStorage.getItem('feedback'));\n\nconst restoredActor = createActor(actorMachine, {\n  snapshot: restoredState,\n}).start();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u8d44\u6e90",children:"\u8d44\u6e90"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/blog/2023-10-02-persisting-state",children:"\u535a\u5ba2: \u5728 XState \u4e2d\u6301\u4e45\u5316\u72b6\u6001"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const r={},c=s.createContext(r);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);