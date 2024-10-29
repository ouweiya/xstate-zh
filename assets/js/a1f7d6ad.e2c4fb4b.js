"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[6790],{4324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(85893),c=t(11151);const o={title:"@xstate/react"},r=void 0,a={id:"xstate-react",title:"@xstate/react",description:"@xstate/react \u5305 \u5305\u542b\u7528\u4e8e\u5728 React \u4e2d\u4f7f\u7528 XState \u7684\u94a9\u5b50\u548c\u8f85\u52a9\u51fd\u6570\u3002",source:"@site/docs/xstate-react.mdx",sourceDirName:".",slug:"/xstate-react",permalink:"/xstate-zh/docs/xstate-react",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/xstate-react.mdx",tags:[],version:"current",frontMatter:{title:"@xstate/react"},sidebar:"tutorialSidebar",previous:{title:"@xstate/store",permalink:"/xstate-zh/docs/xstate-store"},next:{title:"@xstate/vue",permalink:"/xstate-zh/docs/xstate-vue"}},i={},l=[{value:"\u6a21\u677f",id:"\u6a21\u677f",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"API",id:"api",level:2},{value:"<code>useActor(actorLogic, options?)</code>",id:"useactoractorlogic-options",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"<code>useMachine(machine, options?)</code>",id:"usemachinemachine-options",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"<code>useActorRef(machine, options?)</code>",id:"useactorrefmachine-options",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"<code>useSelector(actorRef, selector, compare?, getSnapshot?)</code>",id:"useselectoractorref-selector-compare-getsnapshot",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4},{value:"<code>createActorContext(logic)</code>",id:"createactorcontextlogic",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:4},{value:"\u6d45\u6bd4\u8f83",id:"\u6d45\u6bd4\u8f83",level:3},{value:"\u914d\u7f6e\u72b6\u6001\u673a",id:"\u914d\u7f6e\u72b6\u6001\u673a",level:2},{value:"\u8f93\u5165",id:"\u8f93\u5165",level:2},{value:"\u5339\u914d\u72b6\u6001",id:"\u5339\u914d\u72b6\u6001",level:2},{value:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001",id:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001",level:2},{value:"Actor \u5f15\u7528",id:"actor-\u5f15\u7528",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components},{TabItem:t,Tabs:o}=n;return t||x("TabItem",!0),o||x("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-react",children:"@xstate/react \u5305"})," \u5305\u542b\u7528\u4e8e\u5728 ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/react/",children:"React"})," \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://github.com/statelyai/xstate",children:"XState"})," \u7684\u94a9\u5b50\u548c\u8f85\u52a9\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6a21\u677f",children:"\u6a21\u677f"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u6a21\u677f\u53ef\u4ee5\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 XState \u548c React\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://codesandbox.io/p/devbox/github/statelyai/xstate/tree/main/templates/react-ts",children:"XState React \u6a21\u677f (CodeSandbox)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stackblitz.com/github/statelyai/xstate/tree/main/templates/react-ts?file=%2Fsrc%2FfeedbackMachine.ts",children:"XState React \u6a21\u677f (StackBlitz)"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 ",(0,s.jsx)(n.code,{children:"xstate"})," \u548c ",(0,s.jsx)(n.code,{children:"@xstate/react"}),"\u3002",(0,s.jsx)(n.code,{children:"xstate"})," \u662f ",(0,s.jsx)(n.code,{children:"@xstate/react"})," \u7684\u4e00\u4e2a\u5bf9\u7b49\u4f9d\u8d56\u3002"]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)(t,{value:"npm",label:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install xstate @xstate/react\n"})})}),(0,s.jsx)(t,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm install xstate @xstate/react\n"})})}),(0,s.jsx)(t,{value:"yarn",label:"yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add xstate @xstate/react\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"studio",children:(0,s.jsxs)(n.p,{children:["\u60f3\u8981\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 React \u5417\uff1f\u8bd5\u8bd5 ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/generate-react",children:"Stately Studio \u4e2d\u7684\u751f\u6210 React \u5e94\u7528\u529f\u80fd"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u5373\u5c06\u63a8\u51fa"})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"useactoractorlogic-options",children:(0,s.jsx)(n.code,{children:"useActor(actorLogic, options?)"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a ",(0,s.jsx)(n.a,{href:"https://reactjs.org/hooks",children:"React hook"}),"\uff0c\u5b83\u4ece\u7ed9\u5b9a\u7684 ",(0,s.jsx)(n.code,{children:"actorLogic"})," \u521b\u5efa\u4e00\u4e2a actor\uff0c\u5e76\u542f\u52a8\u4e00\u4e2a\u5728\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u5185\u8fd0\u884c\u7684 actor\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"actorLogic"})," - \u7528\u4e8e\u521b\u5efa actor \u7684\u903b\u8f91\uff1b\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"createMachine(...)"}),"\uff0c",(0,s.jsx)(n.code,{children:"fromPromise(...)"})," \u7b49\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options?"})," (\u53ef\u9009) - Actor \u9009\u9879\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})," \u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"[snapshot, send, actorRef]"})," \u5143\u7ec4\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snapshot"})," - \u8868\u793a actor \u7684\u5f53\u524d\u72b6\u6001\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"send"})," - \u4e00\u4e2a\u5411\u8fd0\u884c\u4e2d\u7684 actor \u53d1\u9001\u4e8b\u4ef6\u7684\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"actorRef"})," - \u542f\u52a8\u7684 actor\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { fromPromise } from 'xstate';\nimport { useActor } from '@xstate/react';\n\nconst promiseLogic = fromPromise(async () => {\n  const data = await getData(/* ... */);\n\n  return data;\n});\n\nfunction Component() {\n  // highlight-next-line\n  const [state, send] = useActor(promiseLogic);\n\n  if (state.status === 'done') {\n    return <div>{state.output}</div>;\n  }\n\n  if (state.status === 'active') {\n    return <div>Loading...</div>;\n  }\n\n  return null;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usemachinemachine-options",children:(0,s.jsx)(n.code,{children:"useMachine(machine, options?)"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a ",(0,s.jsx)(n.a,{href:"https://reactjs.org/hooks",children:"React hook"}),"\uff0c\u5b83\u4ece\u7ed9\u5b9a\u7684 ",(0,s.jsx)(n.code,{children:"machine"})," \u521b\u5efa\u4e00\u4e2a actor\uff0c\u5e76\u542f\u52a8\u4e00\u4e2a\u5728\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u5185\u8fd0\u884c\u7684 actor\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u6570-1",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"machine"})," - \u4e00\u4e2a ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/machines",children:"XState machine"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options?"})," (\u53ef\u9009) - Actor \u9009\u9879\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})," \u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"[snapshot, send, actorRef]"})," \u5143\u7ec4\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snapshot"})," - \u8868\u793a\u673a\u5668\u7684\u5f53\u524d\u72b6\u6001\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"send"})," - \u4e00\u4e2a\u5411\u8fd0\u884c\u4e2d\u7684 actor \u53d1\u9001\u4e8b\u4ef6\u7684\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"actorRef"})," - \u542f\u52a8\u7684 actor\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useMachine } from '@xstate/react';\n\nfunction Component() {\n  const [snapshot, send] = useMachine(machine);\n\n  // \u63d0\u4f9b\u4e86\u5b9e\u73b0\u7684\u673a\u5668\n  // \u5c06\u4fdd\u6301\u63d0\u4f9b\u7684\u5b9e\u73b0\u662f\u6700\u65b0\u7684\n  const [snapshot, send] = useMachine(\n    machine.provide({\n      actions: {\n        doSomething: ({ context }) => {\n          // ...\n        },\n      },\n    }),\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useactorrefmachine-options",children:(0,s.jsx)(n.code,{children:"useActorRef(machine, options?)"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a React hook\uff0c\u5b83\u8fd4\u56de\u4ece ",(0,s.jsx)(n.code,{children:"machine"})," \u521b\u5efa\u7684 ",(0,s.jsx)(n.code,{children:"actorRef"}),"\uff0c\u5e76\u5e26\u6709\u4f20\u9012\u7ed9 ",(0,s.jsx)(n.code,{children:"createActor(logic, options)"})," \u7684 actor ",(0,s.jsx)(n.code,{children:"options"}),"\uff08\u5982\u679c\u6307\u5b9a\uff09\u3002\u5b83\u542f\u52a8 actor ref \u5e76\u5728\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u5185\u8fd0\u884c\u5b83\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useActorRef(...)"})," hook \u5728\u4f60\u9700\u8981\u7ec6\u7c92\u5ea6\u63a7\u5236\u65f6\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\u6dfb\u52a0\u65e5\u5fd7\u8bb0\u5f55\u6216\u6700\u5c0f\u5316\u91cd\u65b0\u6e32\u67d3\u3002\u4e0e ",(0,s.jsx)(n.code,{children:"useActor(...)"})," \u4e0d\u540c\uff0c\u540e\u8005\u4f1a\u5c06\u673a\u5668\u7684\u6bcf\u6b21\u66f4\u65b0\u5237\u65b0\u5230 React \u7ec4\u4ef6\uff0c",(0,s.jsx)(n.code,{children:"useActorRef(...)"})," \u5219\u8fd4\u56de\u4e00\u4e2a\u9759\u6001\u5f15\u7528\uff08\u4ec5\u6307\u5411\u673a\u5668 actor\uff09\uff0c\u5176\u72b6\u6001\u53d8\u5316\u65f6\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"useSelector(...)"})," hook \u4ece ",(0,s.jsx)(n.code,{children:"actorRef"})," \u7684\u5feb\u7167\u4e2d\u9009\u62e9\u90e8\u5206\u6570\u636e\uff0c\u6bcf\u5f53\u5b83\u66f4\u65b0\u65f6\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u6570-2",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"actorLogic"})," - \u7528\u4e8e\u521b\u5efa actor \u7684\u903b\u8f91\uff1b\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"createMachine(...)"}),"\uff0c",(0,s.jsx)(n.code,{children:"fromPromise(...)"})," \u7b49\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options?"})," (\u53ef\u9009) - Actor \u9009\u9879\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useActorRef } from '@xstate/react';\nimport { someMachine } from '../path/to/someMachine';\n\nconst App = () => {\n  const actorRef = useActorRef(someMachine);\n\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u4f9b\u673a\u5668\u5b9e\u73b0\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// ...\n\nconst App = () => {\n  const actorRef = useActorRef(\n    someMachine.provide({\n      actions: {\n        // ...\n      },\n    }),\n  );\n\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"useselectoractorref-selector-compare-getsnapshot",children:(0,s.jsx)(n.code,{children:"useSelector(actorRef, selector, compare?, getSnapshot?)"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a React hook\uff0c\u5b83\u4ece ",(0,s.jsx)(n.code,{children:"actorRef"})," \u7684\u5feb\u7167\u4e2d\u8fd4\u56de\u9009\u5b9a\u7684\u503c\uff0c\u4f8b\u5982 actor ref\u3002\u53ea\u6709\u5f53\u9009\u5b9a\u7684\u503c\u6539\u53d8\u65f6\uff0c\u6b64 hook \u624d\u4f1a\u5bfc\u81f4\u91cd\u65b0\u6e32\u67d3\uff0c\u8fd9\u7531\u53ef\u9009\u7684 ",(0,s.jsx)(n.code,{children:"compare"})," \u51fd\u6570\u51b3\u5b9a\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u6570-3",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"actorRef"})," - \u4e00\u4e2a actor ref"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"selector"})," - \u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5c06 actor \u7684\u5feb\u7167\u4f5c\u4e3a\u53c2\u6570\u5e76\u8fd4\u56de\u6240\u9700\u7684\u9009\u5b9a\u503c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"compare"})," (\u53ef\u9009) - \u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u786e\u5b9a\u5f53\u524d\u9009\u5b9a\u7684\u503c\u662f\u5426\u4e0e\u4e4b\u524d\u7684\u9009\u5b9a\u503c\u76f8\u540c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getSnapshot"})," (\u53ef\u9009) - \u4e00\u4e2a\u51fd\u6570\uff0c\u5e94\u8be5\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"actor"})," \u6700\u65b0\u53d1\u51fa\u7684\u503c\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5c1d\u8bd5\u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"actor.state"}),"\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"undefined"}),"\u3002\u5c06\u81ea\u52a8\u4ece actor refs \u4e2d\u63d0\u53d6\u72b6\u6001\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u793a\u4f8b-3",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useSelector } from '@xstate/react';\n\n// \u63d0\u793a\uff1a\u5c3d\u53ef\u80fd\u5728\u5916\u90e8\u5b9a\u4e49\u9009\u62e9\u5668\u4ee5\u4f18\u5316\u9009\u62e9\u5668\nconst selectCount = (snapshot) => snapshot.context.count;\n\nconst App = ({ actorRef }) => {\n  const count = useSelector(actorRef, selectCount);\n\n  // ...\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"compare"})," \u51fd\u6570\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// ...\n\nconst selectUser = (snapshot) => snapshot.context.user;\nconst compareUser = (prevUser, nextUser) => prevUser.id === nextUser.id;\n\nconst App = ({ actorRef }) => {\n  const user = useSelector(actorRef, selectUser, compareUser);\n\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"createactorcontextlogic",children:(0,s.jsx)(n.code,{children:"createActorContext(logic)"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(n.a,{href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context",children:"React Context \u5bf9\u8c61"}),"\uff0c\u5b83\u4ece\u63d0\u4f9b\u7684 actor ",(0,s.jsx)(n.code,{children:"logic"})," \u521b\u5efa\u4e00\u4e2a actor\uff0c\u5e76\u901a\u8fc7 React Context \u4f7f\u8be5 actor \u53ef\u7528\u3002\u5b83\u5305\u542b\u7528\u4e8e\u8bbf\u95ee\u72b6\u6001\u548c actor \u5f15\u7528\u7684\u8f85\u52a9\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u6570-4",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logic"})," - Actor \u903b\u8f91\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/machines",children:"XState machine"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\u7684 React Context \u5bf9\u8c61\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Provider"})," - \u4e00\u4e2a React Context Provider \u7ec4\u4ef6\uff0c\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"logic"})," - Actor \u903b\u8f91\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/machines",children:"XState machine"}),"\uff0c\u5fc5\u987b\u4e0e\u4f20\u9012\u7ed9 ",(0,s.jsx)(n.code,{children:"createActorContext(...)"})," \u7684 actor \u903b\u8f91\u7c7b\u578b\u76f8\u540c"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useSelector(selector, compare?)"})," - \u4e00\u4e2a React hook\uff0c\u63a5\u53d7\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"selector"})," \u51fd\u6570\u548c\u53ef\u9009\u7684 ",(0,s.jsx)(n.code,{children:"compare"})," \u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4ece actor \u5feb\u7167\u4e2d\u9009\u5b9a\u7684\u503c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useActorRef()"})," - \u4e00\u4e2a React hook\uff0c\u8fd4\u56de\u4ece actor ",(0,s.jsx)(n.code,{children:"logic"})," \u521b\u5efa\u7684 actor \u5f15\u7528"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a actor \u521b\u5efa\u4e00\u4e2a React Context \u5e76\u5728\u5e94\u7528\u8303\u56f4\u5185\u63d0\u4f9b\u5b83\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { createActorContext } from '@xstate/react';\nimport { someMachine } from '../path/to/someMachine';\n\nconst SomeMachineContext = createActorContext(someMachine);\n\nfunction App() {\n  return (\n    <SomeMachineContext.Provider>\n      <SomeComponent />\n    </SomeMachineContext.Provider>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528 actor\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { SomeMachineContext } from '../path/to/SomeMachineContext';\n\nfunction SomeComponent() {\n  const count = SomeMachineContext.useSelector((state) => state.context.count);\n  const someActorRef = SomeMachineContext.useActorRef();\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => someActorRef.send({ type: 'inc' })}>\n        Increment\n      </button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u4f9b\u7c7b\u4f3c\u7684\u673a\u5668\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { SomeMachineContext } from '../path/to/SomeMachineContext';\nimport { someMachine } from '../path/to/someMachine';\n\nfunction SomeComponent() {\n  return (\n    <SomeMachineContext.Provider\n      logic={someMachine.provide({\n        actions: {\n          someAction: differentImplementation,\n        },\n        // ... \u66f4\u591a\u5b9e\u73b0\n      })}\n    >\n      <SomeOtherComponent />\n    </SomeMachineContext.Provider>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6d45\u6bd4\u8f83",children:"\u6d45\u6bd4\u8f83"}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u7684\u6bd4\u8f83\u662f\u4e25\u683c\u5f15\u7528\u6bd4\u8f83 (",(0,s.jsx)(n.code,{children:"==="}),")\u3002\u5982\u679c\u4f60\u7684\u9009\u62e9\u5668\u8fd4\u56de\u975e\u539f\u59cb\u503c\uff0c\u4f8b\u5982\u5bf9\u8c61\u6216\u6570\u7ec4\uff0c\u4f60\u5e94\u8be5\u8bb0\u4f4f\u8fd9\u4e00\u70b9\uff0c\u5e76\u8fd4\u56de\u76f8\u540c\u7684\u5f15\u7528\uff0c\u6216\u8005\u63d0\u4f9b\u6d45\u6bd4\u8f83\u6216\u6df1\u6bd4\u8f83\u5668\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"shallowEqual(...)"})," \u6bd4\u8f83\u5668\u51fd\u6570\u53ef\u7528\u4e8e\u6d45\u6bd4\u8f83\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useSelector, shallowEqual } from '@xstate/react';\n\n// ...\n\nconst selectUser = (state) => state.context.user;\n\nconst App = ({ actorRef }) => {\n  // shallowEqual \u6bd4\u8f83\u5668\u7528\u4e8e\u6bd4\u8f83\u5bf9\u8c61\uff0c\u5373\u4f7f\u5bf9\u8c61\u7684\u5f15\u7528\u53ef\u80fd\u4f1a\u6539\u53d8\uff0c\u4f46\u6d45\u5c42\u5bf9\u8c61\u503c\u662f\u76f8\u7b49\u7684\n  const user = useSelector(actorRef, selectUser, shallowEqual);\n\n  // ...\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"useActorRef(...)"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useActorRef, useSelector } from '@xstate/react';\nimport { someMachine } from '../path/to/someMachine';\n\nconst selectCount = (state) => state.context.count;\n\nconst App = () => {\n  const actorRef = useActorRef(someMachine);\n  const count = useSelector(actorRef, selectCount);\n\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u72b6\u6001\u673a",children:"\u914d\u7f6e\u72b6\u6001\u673a"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,s.jsx)(n.code,{children:"machine.provide(implementations)"})," \u4e2d\u63d0\u4f9b\u4e0d\u540c\u7684\u5b9e\u73b0\u6765\u5b9a\u5236\u73b0\u6709\u7684\u72b6\u6001\u673a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\uff1a",(0,s.jsx)(n.code,{children:"'fetchData'"})," actor \u5f15\u7528\u548c ",(0,s.jsx)(n.code,{children:"'notifySuccess'"})," \u52a8\u4f5c\u90fd\u662f\u53ef\u914d\u7f6e\u7684\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const fetchMachine = createMachine({\n  id: 'fetch',\n  initial: 'idle',\n  context: {\n    data: undefined,\n    error: undefined,\n  },\n  states: {\n    idle: {\n      on: { FETCH: 'loading' },\n    },\n    loading: {\n      invoke: {\n        src: 'fetchData',\n        onDone: {\n          target: 'success',\n          actions: assign({\n            data: ({ event }) => event.output,\n          }),\n        },\n        onError: {\n          target: 'failure',\n          actions: assign({\n            error: ({ event }) => event.error,\n          }),\n        },\n      },\n    },\n    success: {\n      entry: 'notifySuccess',\n      type: 'final',\n    },\n    failure: {\n      on: {\n        RETRY: 'loading',\n      },\n    },\n  },\n});\n\nconst Fetcher = ({ onResolve }) => {\n  const [state, send] = useMachine(\n    fetchMachine.provide({\n      actions: {\n        notifySuccess: ({ context }) => onResolve(context.data),\n      },\n      actors: {\n        fetchData: fromPromise(() =>\n          fetch(`some/api/${e.query}`).then((res) => res.json()),\n        ),\n      },\n    }),\n  );\n\n  switch (state.value) {\n    case 'idle':\n      return (\n        <button onClick={() => send({ type: 'FETCH', query: 'something' })}>\n          \u641c\u7d22\u67d0\u7269\n        </button>\n      );\n        case 'loading':\n      return <div>\u641c\u7d22\u4e2d...</div>;\n        case 'success':\n      return <div>\u6210\u529f\uff01\u6570\u636e\uff1a{state.context.data}</div>;\n    case 'failure':\n      return (\n        <>\n          <p>{state.context.error.message}</p>\n          <button onClick={() => send({ type: 'RETRY' })}>\u91cd\u8bd5</button>\n        </>\n      );\n    default:\n      return null;\n  }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8f93\u5165",children:"\u8f93\u5165"}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5411 actors \u63d0\u4f9b\u8f93\u5165"}),"\n",(0,s.jsx)(n.h2,{id:"\u5339\u914d\u72b6\u6001",children:"\u5339\u914d\u72b6\u6001"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/parent-states",children:"\u5206\u5c42"}),"\u548c",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/parallel-states",children:"\u5e76\u884c"}),"\u72b6\u6001\u673a\u65f6\uff0c\u72b6\u6001\u503c\u5c06\u662f\u5bf9\u8c61\u800c\u4e0d\u662f\u5b57\u7b26\u4e32\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u4f7f\u7528",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/states#statematchesstatevalue",children:(0,s.jsx)(n.code,{children:"state.matches(...)"})}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"if/else if/else"})," \u8bed\u53e5\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// ...\nif (state.matches('idle')) {\n  return /* ... */;\n} else if (state.matches({ loading: 'user' })) {\n  return /* ... */;\n} else if (state.matches({ loading: 'friends' })) {\n  return /* ... */;\n} else {\n  return null;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"switch"}),"\uff0c\u4f46\u6211\u4eec\u5fc5\u987b\u8c03\u6574\u6211\u4eec\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u5c06 ",(0,s.jsx)(n.code,{children:"switch"})," \u7684\u8868\u8fbe\u5f0f\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6bcf\u4e2a ",(0,s.jsx)(n.code,{children:"case"})," \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/states#statematchesstatevalue",children:(0,s.jsx)(n.code,{children:"state.matches(...)"})})," \u4f5c\u4e3a\u8c13\u8bcd\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"switch (true) {\n  case state.matches('idle'):\n    return /* ... */;\n  case state.matches({ loading: 'user' }):\n    return /* ... */;\n  case state.matches({ loading: 'friends' }):\n    return /* ... */;\n  default:\n    return null;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u8003\u8651\u5728\u6e32\u67d3\u7684 JSX \u4e2d\u4f7f\u7528\u4e09\u5143\u8868\u8fbe\u5f0f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const Loader = () => {\n  const [state, send] = useMachine(/* ... */);\n\n  return (\n    <div>\n      {state.matches('idle') ? (\n        <Loader.Idle />\n      ) : state.matches({ loading: 'user' }) ? (\n        <Loader.LoadingUser />\n      ) : state.matches({ loading: 'friends' }) ? (\n        <Loader.LoadingFriends />\n      ) : null}\n    </div>\n  );\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001",children:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,s.jsx)(n.code,{children:"useMachine(...)"})," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"options.snapshot"})," \u6765\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// ...\n\n// \u4ece\u67d0\u5904\u83b7\u53d6\u6301\u4e45\u5316\u7684\u72b6\u6001\u914d\u7f6e\u5bf9\u8c61\uff0c\u4f8b\u5982 localStorage\nconst persistedState = JSON.parse(localStorage.getItem('some-persisted-state-key'));\n\nconst App = () => {\n  const [state, send] = useMachine(someMachine, {\n    snapshot: persistedState // \u5728\u6b64\u5904\u63d0\u4f9b\u6301\u4e45\u5316\u7684\u72b6\u6001\u914d\u7f6e\u5bf9\u8c61\n  });\n\n  // state \u5c06\u6700\u521d\u662f\u6301\u4e45\u5316\u7684\u72b6\u6001\uff0c\u800c\u4e0d\u662f\u673a\u5668\u7684 initialState\n\n  return (/* ... */)\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"actor-\u5f15\u7528",children:"Actor \u5f15\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"useMachine(machine)"})," \u4e2d\u521b\u5efa\u7684 ",(0,s.jsx)(n.code,{children:"actorRef"})," \u53ef\u4ee5\u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u8fd4\u56de\u503c\u5f15\u7528\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//                  vvvvvvvv\nconst [state, send, actorRef] = useMachine(someMachine);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsxs)(n.a,{href:"https://reactjs.org/docs/hooks-effect.html",children:[(0,s.jsx)(n.code,{children:"useEffect"})," hook"]})," \u8ba2\u9605\u8be5 actor ref \u7684\u72b6\u6001\u53d8\u5316\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// ...\n\nuseEffect(() => {\n  const subscription = actorRef.subscribe((snapshot) => {\n    // \u7b80\u5355\u65e5\u5fd7\u8bb0\u5f55\n    console.log(snapshot);\n  });\n\n  return subscription.unsubscribe;\n}, [actorRef]); // \u6ce8\u610f\uff1aactor ref \u4e0d\u5e94\u66f4\u6539\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8d44\u6e90",children:"\u8d44\u6e90"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u5373\u5c06\u63a8\u51fa"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const c={},o=s.createContext(c);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);