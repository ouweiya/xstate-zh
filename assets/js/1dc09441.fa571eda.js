"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[2528],{86711:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(85893),i=n(11151);const r={title:"\u6d4b\u8bd5",description:"\u5982\u4f55\u6d4b\u8bd5 XState \u4e2d\u7684\u72b6\u6001\u673a\u548c actor \u903b\u8f91"},a=void 0,c={id:"testing",title:"\u6d4b\u8bd5",description:"\u5982\u4f55\u6d4b\u8bd5 XState \u4e2d\u7684\u72b6\u6001\u673a\u548c actor \u903b\u8f91",source:"@site/docs/testing.mdx",sourceDirName:".",slug:"/testing",permalink:"/xstate-zh/docs/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/testing.mdx",tags:[],version:"current",frontMatter:{title:"\u6d4b\u8bd5",description:"\u5982\u4f55\u6d4b\u8bd5 XState \u4e2d\u7684\u72b6\u6001\u673a\u548c actor \u903b\u8f91"},sidebar:"tutorialSidebar",previous:{title:"\u6307\u5357",permalink:"/xstate-zh/docs/category/guides"},next:{title:"\u4e0e Immer \u4e00\u8d77\u4f7f\u7528",permalink:"/xstate-zh/docs/immer"}},o={},l=[{value:"\u6d4b\u8bd5\u903b\u8f91",id:"\u6d4b\u8bd5\u903b\u8f91",level:2},{value:"\u6d4b\u8bd5 actor",id:"\u6d4b\u8bd5-actor",level:2},{value:"\u6a21\u62df\u6548\u679c",id:"\u6a21\u62df\u6548\u679c",level:2},{value:"\u4f7f\u7528 <code>@xstate/test</code>",id:"\u4f7f\u7528-xstatetest",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6d4b\u8bd5\u903b\u8f91",children:"\u6d4b\u8bd5\u903b\u8f91"}),"\n",(0,s.jsxs)(e.p,{children:["\u6d4b\u8bd5 actor \u903b\u8f91\u5bf9\u4e8e\u786e\u4fdd\u903b\u8f91\u6b63\u786e\u6027\u548c\u9884\u671f\u884c\u4e3a\u975e\u5e38\u91cd\u8981\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u6d4b\u8bd5\u5e93\u548c\u5de5\u5177\u6765\u6d4b\u8bd5\u60a8\u7684\u72b6\u6001\u673a\u548c actor\u3002\u5728\u4e3a\u72b6\u6001\u673a\u548c actor \u7f16\u5199\u6d4b\u8bd5\u65f6\uff0c\u60a8\u5e94\u8be5\u9075\u5faa ",(0,s.jsx)(e.strong,{children:"\u5b89\u6392\u3001\u6267\u884c\u3001\u65ad\u8a00"})," \u6a21\u5f0f\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5b89\u6392"})," - \u901a\u8fc7\u521b\u5efa actor \u903b\u8f91\uff08\u4f8b\u5982\u72b6\u6001\u673a\uff09\u548c\u4ece actor \u903b\u8f91\u521b\u5efa actor \u6765\u8bbe\u7f6e\u6d4b\u8bd5\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6267\u884c"})," - \u5411 actor \u53d1\u9001\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u65ad\u8a00"})," - \u65ad\u8a00 actor \u8fbe\u5230\u9884\u671f\u72b6\u6001\u548c/\u6216\u6267\u884c\u9884\u671f\u7684\u526f\u4f5c\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { setup, createActor } from 'xstate';\nimport { test, expect } from 'vitest';\n\ntest('some actor', async () => {\n  const notifiedMessages: string[] = [];\n\n    // 1. \u5b89\u6392\n  const machine = setup({\n    actions: {\n      notify: (_, params) => {\n        notifiedMessages.push(params.message);\n      }\n    }\n  }).createMachine({\n    initial: 'inactive',\n    states: {\n      inactive: {\n        on: { toggle: { target: 'active' } }\n      },\n      active: {\n        entry: { type: 'notify', params: { message: 'Active!' } },\n        on: { toggle: { target: 'inactive' } }\n      }\n    }\n  });\n\n  const actor = createActor(machine);\n\n  // 2. \u6267\u884c\n  actor.start();\n  actor.send({ type: 'toggle' }); // => \u5e94\u8be5\u5904\u4e8e 'active' \u72b6\u6001\n  actor.send({ type: 'toggle' }); // => \u5e94\u8be5\u5904\u4e8e 'inactive' \u72b6\u6001\n  actor.send({ type: 'toggle' }); // => \u5e94\u8be5\u5904\u4e8e 'active' \u72b6\u6001\n\n  // 3. \u65ad\u8a00\n  expect(actor.getSnapshot().value).toBe('active');\n  expect(notifiedMessages).toEqual(['Active!', 'Active!']);\n});\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"studio",children:(0,s.jsxs)(e.p,{children:["\u60a8\u73b0\u5728\u53ef\u4ee5\u5728 Stately Studio \u4e2d",(0,s.jsx)(e.a,{href:"/xstate-zh/docs/generate-test-paths",children:"\u4ece\u72b6\u6001\u673a\u751f\u6210\u6d4b\u8bd5\u8def\u5f84"}),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u514d\u8d39\u8bd5\u7528\u6765\u4f53\u9a8c Stately Studio \u7684\u9ad8\u7ea7\u8ba1\u5212\u3002",(0,s.jsx)(e.a,{href:"/xstate-zh/docs/studio-pro-plan",children:"\u67e5\u770b\u6211\u4eec\u4e13\u4e1a\u8ba1\u5212\u7684\u529f\u80fd"}),"\u3001",(0,s.jsx)(e.a,{href:"/xstate-zh/docs/studio-team-plan",children:"\u56e2\u961f\u8ba1\u5212"}),"\u3001",(0,s.jsx)(e.a,{href:"/xstate-zh/docs/studio-enterprise-plan",children:"\u4f01\u4e1a\u8ba1\u5212"}),"\u6216",(0,s.jsx)(e.a,{href:"https://stately.ai/registry/billing",children:"\u5347\u7ea7\u60a8\u73b0\u6709\u7684\u8ba1\u5212"}),"\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u6d4b\u8bd5-actor",children:"\u6d4b\u8bd5 actor"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"\u5373\u5c06\u63a8\u51fa"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6a21\u62df\u6548\u679c",children:"\u6a21\u62df\u6548\u679c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"\u5373\u5c06\u63a8\u51fa"})}),"\n",(0,s.jsxs)(e.h2,{id:"\u4f7f\u7528-xstatetest",children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"@xstate/test"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"\u5373\u5c06\u63a8\u51fa"})})]})}function h(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);