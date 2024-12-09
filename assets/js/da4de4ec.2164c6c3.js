"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[6025],{96824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const c={title:"Events and transitions(\u4e8b\u4ef6\u548c\u8f6c\u6362)"},r=void 0,a={id:"transitions",title:"Events and transitions(\u4e8b\u4ef6\u548c\u8f6c\u6362)",description:"\u8f6c\u6362\u662f\u4ece\u4e00\u4e2a\u6709\u9650\u72b6\u6001\u5230\u53e6\u4e00\u4e2a\u6709\u9650\u72b6\u6001\u7684\u53d8\u5316\uff0c\u7531\u4e8b\u4ef6\u89e6\u53d1\u3002",source:"@site/docs/transitions.mdx",sourceDirName:".",slug:"/transitions",permalink:"/xstate-zh/docs/transitions",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/transitions.mdx",tags:[],version:"current",frontMatter:{title:"Events and transitions(\u4e8b\u4ef6\u548c\u8f6c\u6362)"},sidebar:"tutorialSidebar",previous:{title:"Output(\u8f93\u51fa)",permalink:"/xstate-zh/docs/output"},next:{title:"Eventless (always) transitions(\u65e0\u4e8b\u4ef6(\u59cb\u7ec8)\u8f6c\u6362)",permalink:"/xstate-zh/docs/eventless-transitions"}},d={},l=[{value:"\u4e8b\u4ef6\u5bf9\u8c61",id:"\u4e8b\u4ef6\u5bf9\u8c61",level:2},{value:"\u9009\u62e9\u8f6c\u6362",id:"\u9009\u62e9\u8f6c\u6362",level:2},{value:"\u81ea\u8f6c\u6362",id:"self-transitions",level:2},{value:"\u72b6\u6001\u4e4b\u95f4\u7684\u8f6c\u6362",id:"\u72b6\u6001\u4e4b\u95f4\u7684\u8f6c\u6362",level:2},{value:"\u7236\u72b6\u6001\u5230\u5b50\u72b6\u6001\u7684\u8f6c\u6362",id:"\u7236\u72b6\u6001\u5230\u5b50\u72b6\u6001\u7684\u8f6c\u6362",level:2},{value:"\u91cd\u65b0\u8fdb\u5165",id:"\u91cd\u65b0\u8fdb\u5165",level:2},{value:"\u8f6c\u6362\u5230\u4efb\u4f55\u72b6\u6001",id:"\u8f6c\u6362\u5230\u4efb\u4f55\u72b6\u6001",level:2},{value:"\u7981\u6b62\u8f6c\u6362",id:"\u7981\u6b62\u8f6c\u6362",level:2},{value:"\u901a\u914d\u7b26\u8f6c\u6362",id:"\u901a\u914d\u7b26\u8f6c\u6362",level:2},{value:"\u90e8\u5206\u901a\u914d\u7b26\u8f6c\u6362",id:"\u90e8\u5206\u901a\u914d\u7b26\u8f6c\u6362",level:2},{value:"\u6709\u6548\u7684\u901a\u914d\u7b26\u793a\u4f8b",id:"\u6709\u6548\u7684\u901a\u914d\u7b26\u793a\u4f8b",level:3},{value:"\u65e0\u6548\u7684\u901a\u914d\u7b26",id:"\u65e0\u6548\u7684\u901a\u914d\u7b26",level:3},{value:"\u5e76\u884c\u72b6\u6001\u4e2d\u7684\u591a\u4e2a\u8f6c\u6362",id:"\u5e76\u884c\u72b6\u6001\u4e2d\u7684\u591a\u4e2a\u8f6c\u6362",level:2},{value:"\u5176\u4ed6\u8f6c\u6362",id:"\u5176\u4ed6\u8f6c\u6362",level:2},{value:"\u8f6c\u6362\u63cf\u8ff0",id:"\u8f6c\u6362\u63cf\u8ff0",level:2},{value:"\u7b80\u5199",id:"\u7b80\u5199",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"faqs",level:2},{value:"\u8f6c\u6362\u901f\u67e5\u8868",id:"\u8f6c\u6362\u901f\u67e5\u8868",level:2},{value:"\u901f\u67e5\u8868\uff1a\u4e8b\u4ef6\u5bf9\u8c61",id:"\u901f\u67e5\u8868\u4e8b\u4ef6\u5bf9\u8c61",level:3},{value:"\u901f\u67e5\u8868\uff1a\u8f6c\u6362\u76ee\u6807",id:"\u901f\u67e5\u8868\u8f6c\u6362\u76ee\u6807",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t,EmbedMachine:c}=n;return t||x("Details",!0),c||x("EmbedMachine",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8f6c\u6362"}),"\u662f\u4ece\u4e00\u4e2a\u6709\u9650\u72b6\u6001\u5230\u53e6\u4e00\u4e2a\u6709\u9650\u72b6\u6001\u7684\u53d8\u5316\uff0c\u7531\u4e8b\u4ef6\u89e6\u53d1\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4e8b\u4ef6"}),"\u662f\u4e00\u4e2a\u4fe1\u53f7\u3001\u89e6\u53d1\u5668\u6216\u6d88\u606f\uff0c\u4f1a\u5bfc\u81f4\u8f6c\u6362\u3002\u5f53\u4e00\u4e2a actor \u63a5\u6536\u5230\u4e00\u4e2a\u4e8b\u4ef6\u65f6\uff0c\u5b83\u7684\u72b6\u6001\u673a\u5c06\u786e\u5b9a\u5f53\u524d\u72b6\u6001\u4e0b\u662f\u5426\u6709\u4efb\u4f55\u542f\u7528\u7684\u8f6c\u6362\u3002\u5982\u679c\u5b58\u5728\u542f\u7528\u7684\u8f6c\u6362\uff0c\u72b6\u6001\u673a\u5c06\u6267\u884c\u8fd9\u4e9b\u8f6c\u6362\u5e76\u6267\u884c\u5176\u52a8\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"studio",children:(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728\u6211\u4eec\u7684\u62d6\u653e\u5f0f Stately \u7f16\u8f91\u5668\u4e2d\u53ef\u89c6\u5316\u60a8\u7684\u72b6\u6001\u673a\u5e76\u8f7b\u677e\u6dfb\u52a0\u8f6c\u6362\u3002 ",(0,s.jsx)(n.a,{href:"/docs/editor-states-and-transitions/#transitions-and-events",children:"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e Stately \u7f16\u8f91\u5668\u4e2d\u7684\u8f6c\u6362"}),"\u3002"]})}),"\n",(0,s.jsx)(c,{name:"Video player",embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=9630e3b7-9f8e-4dc9-8b55-661f854d28b7&mode=Simulate"}),"\n",(0,s.jsxs)(n.p,{children:["\u8f6c\u6362\u662f\u201c\u786e\u5b9a\u6027\u7684\u201d\uff1b\u6bcf\u79cd\u72b6\u6001\u548c\u4e8b\u4ef6\u7684\u7ec4\u5408\u603b\u662f\u6307\u5411\u76f8\u540c\u7684\u4e0b\u4e00\u4e2a\u72b6\u6001\u3002\u5f53\u72b6\u6001\u673a\u63a5\u6536\u5230\u4e00\u4e2a\u4e8b\u4ef6\u65f6\uff0c\u53ea\u4f1a\u68c0\u67e5\u6d3b\u52a8\u7684\u6709\u9650\u72b6\u6001\uff0c\u770b\u770b\u5b83\u4eec\u662f\u5426\u6709\u8be5\u4e8b\u4ef6\u7684\u8f6c\u6362\u3002\u8fd9\u4e9b\u8f6c\u6362\u79f0\u4e3a",(0,s.jsx)(n.strong,{children:"\u542f\u7528\u8f6c\u6362"}),"\u3002\u5982\u679c\u5b58\u5728\u542f\u7528\u7684\u8f6c\u6362\uff0c\u72b6\u6001\u673a\u5c06\u6267\u884c\u8f6c\u6362\u7684\u52a8\u4f5c\uff0c\u7136\u540e\u8f6c\u6362\u5230\u76ee\u6807\u72b6\u6001\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8f6c\u6362\u7531\u72b6\u6001\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"on:"})," \u8868\u793a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\nconst feedbackMachine = createMachine({\n  id: 'feedback',\n  initial: 'question',\n  states: {\n    question: {\n      on: {\n        'feedback.good': {\n          target: 'thanks'\n        }\n      }\n    },\n    thanks: {}\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8b\u4ef6\u5bf9\u8c61",children:"\u4e8b\u4ef6\u5bf9\u8c61"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 XState \u4e2d\uff0c\u4e8b\u4ef6\u7531\u5177\u6709 ",(0,s.jsx)(n.code,{children:"type"})," \u5c5e\u6027\u548c\u53ef\u9009\u8d1f\u8f7d\u7684\u4e8b\u4ef6\u5bf9\u8c61\u8868\u793a\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," \u5c5e\u6027\u662f\u4e00\u4e2a\u8868\u793a\u4e8b\u4ef6\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u8d1f\u8f7d\u662f\u4e00\u4e2a\u5305\u542b\u6709\u5173\u4e8b\u4ef6\u7684\u9644\u52a0\u6570\u636e\u7684\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"feedbackActor.send({\n  // \u4e8b\u4ef6\u7c7b\u578b\n  type: 'feedback.update',\n  // \u9644\u52a0\u8d1f\u8f7d\n  feedback: 'This is great!',\n  rating: 5,\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9009\u62e9\u8f6c\u6362",children:"\u9009\u62e9\u8f6c\u6362"}),"\n",(0,s.jsx)(n.p,{children:"\u8f6c\u6362\u662f\u901a\u8fc7\u9996\u5148\u68c0\u67e5\u6700\u6df1\u7684\u5b50\u72b6\u6001\u6765\u9009\u62e9\u7684\u3002\u5982\u679c\u8f6c\u6362\u88ab\u542f\u7528\uff08\u5373\u5176\u5b88\u536b\u901a\u8fc7\uff09\uff0c\u5b83\u5c06\u88ab\u6267\u884c\u3002\u5982\u679c\u6ca1\u6709\uff0c\u7236\u72b6\u6001\u5c06\u88ab\u68c0\u67e5\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ece\u6700\u6df1\u7684\u6d3b\u52a8\u72b6\u6001\u8282\u70b9\uff08\u5373\u539f\u5b50\u72b6\u6001\u8282\u70b9\uff09\u5f00\u59cb"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u8f6c\u6362\u88ab\u542f\u7528\uff08\u6ca1\u6709 ",(0,s.jsx)(n.code,{children:"guard"})," \u6216\u5176 ",(0,s.jsx)(n.code,{children:"guard"})," \u8bc4\u4f30\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\uff09\uff0c\u5219\u9009\u62e9\u5b83\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u6ca1\u6709\u8f6c\u6362\u88ab\u542f\u7528\uff0c\u5219\u4e0a\u5347\u5230\u7236\u72b6\u6001\u8282\u70b9\u5e76\u91cd\u590d\u7b2c1\u6b65\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6700\u540e\uff0c\u5982\u679c\u6ca1\u6709\u8f6c\u6362\u88ab\u542f\u7528\uff0c\u5219\u4e0d\u4f1a\u8fdb\u884c\u4efb\u4f55\u8f6c\u6362\uff0c\u72b6\u6001\u4e5f\u4e0d\u4f1a\u6539\u53d8\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"self-transitions",children:"\u81ea\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u72b6\u6001\u53ef\u4ee5\u8f6c\u6362\u5230\u81ea\u8eab\u3002\u8fd9\u88ab\u79f0\u4e3a",(0,s.jsx)(n.strong,{children:"\u81ea\u8f6c\u6362"}),"\uff0c\u5bf9\u4e8e\u5728\u4e0d\u6539\u53d8\u6709\u9650\u72b6\u6001\u7684\u60c5\u51b5\u4e0b\u66f4\u6539\u4e0a\u4e0b\u6587\u548c/\u6216\u6267\u884c\u64cd\u4f5c\u975e\u5e38\u6709\u7528\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u81ea\u8f6c\u6362\u6765\u91cd\u65b0\u542f\u52a8\u4e00\u4e2a\u72b6\u6001\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6839\u81ea\u8f6c\u6362\uff1a"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine, assign } from 'xstate';\n\nconst machine = createMachine({\n  context: { count: 0 },\n  // highlight-start\n  on: {\n    someEvent: {\n      // \u6ca1\u6709\u76ee\u6807\n      actions: assign({\n        count: ({context}) => context.count + 1,\n      })\n    }\n  }\n  // highlight-end\n});\n"})}),"\n",(0,s.jsx)(c,{embedURL:"https://stately.ai/registry/editor/embed/c447d996-cef1-421d-a422-8be695668764?mode=design&machineId=91da1d57-b146-48fd-82ce-a9dd28b7261a",title:"Root self-transition"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u72b6\u6001\u4e0a\u7684\u81ea\u8f6c\u6362\uff1a"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine, assign } from 'xstate';\n\nconst machine = createMachine({\n  context: { count: 0 },\n  initial: 'inactive',\n  states: {\n    inactive: {\n      on: { activate: { target: 'active' } }\n    },\n    active: {\n      // highlight-start\n      on: {\n        someEvent: {\n          // No target\n          actions: assign({\n            count: ({context}) => context.count + 1,\n          })\n        }\n      }\n      // highlight-end\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(c,{embedURL:"https://stately.ai/registry/editor/embed/c447d996-cef1-421d-a422-8be695668764?mode=design&machineId=8763e570-3535-42b3-a2a2-8edd82d1207a",title:"Self-transition on state"}),"\n",(0,s.jsx)(n.admonition,{type:"studio",children:(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 Stately \u7f16\u8f91\u5668\u4e2d\u8f7b\u677e\u53ef\u89c6\u5316\u81ea\u8f6c\u6362\u3002 ",(0,s.jsx)(n.a,{href:"/docs/editor-states-and-transitions/#self-transitions",children:"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e Stately \u7f16\u8f91\u5668\u4e2d\u7684\u81ea\u8f6c\u6362"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u72b6\u6001\u4e4b\u95f4\u7684\u8f6c\u6362",children:"\u72b6\u6001\u4e4b\u95f4\u7684\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u8f6c\u6362\u53d1\u751f\u5728\u4e24\u4e2a\u5144\u5f1f\u72b6\u6001\u4e4b\u95f4\u3002\u8fd9\u4e9b\u8f6c\u6362\u901a\u8fc7\u5c06 ",(0,s.jsx)(n.code,{children:"target"})," \u8bbe\u7f6e\u4e3a\u5144\u5f1f\u72b6\u6001\u7684\u952e\u6765\u5b9a\u4e49\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const feedbackMachine = createMachine({\n  // ...\n  states: {\n    form: {\n      on: {\n        submit: {\n          // highlight-start\n            // \u76ee\u6807\u662f\u5144\u5f1f\u72b6\u6001\u7684\u952e\n          target: 'submitting',\n          // highlight-end\n        },\n      },\n    },\n    // highlight-next-line\n    submitting: {\n      // ...\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7236\u72b6\u6001\u5230\u5b50\u72b6\u6001\u7684\u8f6c\u6362",children:"\u7236\u72b6\u6001\u5230\u5b50\u72b6\u6001\u7684\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u72b6\u6001\u673a actor \u63a5\u6536\u5230\u4e00\u4e2a\u4e8b\u4ef6\u65f6\uff0c\u5b83\u5c06\u9996\u5148\u68c0\u67e5\u6700\u6df1\u7684\uff08",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/state-machines-and-statecharts#atomic-states",children:"\u539f\u5b50"}),"\uff09\u72b6\u6001\u662f\u5426\u6709\u4efb\u4f55\u542f\u7528\u7684\u8f6c\u6362\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219\u68c0\u67e5\u7236\u72b6\u6001\uff0c\u4f9d\u6b64\u7c7b\u63a8\uff0c\u76f4\u5230\u72b6\u6001\u673a\u5230\u8fbe\u6839\u72b6\u6001\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u60a8\u5e0c\u671b\u4e8b\u4ef6\u8f6c\u6362\u5230\u67d0\u4e2a\u72b6\u6001\uff0c\u800c\u4e0d\u7ba1\u54ea\u4e2a\u5144\u5f1f\u72b6\u6001\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\uff0c\u4e00\u4e2a\u6709\u7528\u7684\u6a21\u5f0f\u662f\u4ece\u7236\u72b6\u6001\u8f6c\u6362\u5230\u5b50\u72b6\u6001\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u72b6\u6001\u673a\u5c06\u5728 ",(0,s.jsx)(n.code,{children:"mode.reset"})," \u4e8b\u4ef6\u4e0a\u8f6c\u6362\u5230 ",(0,s.jsx)(n.code,{children:"colorMode.system"})," \u72b6\u6001\uff0c\u800c\u4e0d\u7ba1\u5b83\u5f53\u524d\u5904\u4e8e\u54ea\u4e2a\u72b6\u6001\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst machine = createMachine({\n  id: 'colorMode',\n  initial: 'system',\n  states: {\n    system: {},\n    auto: {},\n    light: {\n      on: {\n        'mode.toggle': { target: 'dark' }\n      }\n    },\n    dark: {\n      on: {\n        'mode.toggle': { target: 'light' }\n      }\n    }\n  },\n  on: {\n    'mode.reset': {\n      // highlight-next-line\n      target: '.system'\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u91cd\u65b0\u8fdb\u5165",children:"\u91cd\u65b0\u8fdb\u5165"}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u72b6\u6001\u673a\u4ece\u67d0\u4e2a\u72b6\u6001\u8f6c\u6362\u5230\u76f8\u540c\u72b6\u6001\u6216\u4ece\u7236\u72b6\u6001\u8f6c\u6362\u5230\u8be5\u7236\u72b6\u6001\u7684\u5b50\u72b6\u6001\uff08\u5b50\u3001\u5b59\u7b49\uff09\u65f6\uff0c\u5b83\u4e0d\u4f1a\u91cd\u65b0\u8fdb\u5165\u8be5\u72b6\u6001\uff1b\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4e0d\u4f1a\u6267\u884c\u7236\u72b6\u6001\u7684",(0,s.jsxs)(n.a,{href:"/xstate-zh/docs/actions",children:[(0,s.jsx)(n.code,{children:"exit"}),"\u548c",(0,s.jsx)(n.code,{children:"entry"}),"\u52a8\u4f5c"]}),"\u3002\u5b83\u4e0d\u4f1a\u505c\u6b62\u73b0\u6709\u7684\u88ab\u8c03\u7528\u7684 actor\uff0c\u4e5f\u4e0d\u4f1a\u542f\u52a8\u65b0\u7684\u88ab\u8c03\u7528\u7684 actor\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u53ef\u4ee5\u901a\u8fc7\u8f6c\u6362\u7684",(0,s.jsx)(n.code,{children:"reenter"}),"\u5c5e\u6027\u6765\u66f4\u6539\uff1a\u5982\u679c\u60a8\u5e0c\u671b\u7236\u72b6\u6001\u91cd\u65b0\u8fdb\u5165\uff0c\u53ef\u4ee5\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"reenter: true"}),"\u3002\u8fd9\u5c06\u5bfc\u81f4\u72b6\u6001\u5728\u8f6c\u6362\u5230\u81ea\u8eab\u6216\u5b50\u72b6\u6001\u65f6\u91cd\u65b0\u8fdb\u5165\uff0c\u6267\u884c\u72b6\u6001\u7684",(0,s.jsx)(n.code,{children:"exit"}),"\u548c",(0,s.jsx)(n.code,{children:"entry"}),"\u52a8\u4f5c\u3002\u5b83\u5c06\u505c\u6b62\u73b0\u6709\u7684\u88ab\u8c03\u7528\u7684 actor\uff0c\u5e76\u542f\u52a8\u65b0\u7684\u88ab\u8c03\u7528\u7684 actor\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5728 XState v4 \u4e2d\uff0c\u91cd\u65b0\u8fdb\u5165\u7684\u8f6c\u6362\u88ab\u79f0\u4e3a",(0,s.jsx)(n.strong,{children:"\u5916\u90e8\u8f6c\u6362"}),"\uff0c\u9ed8\u8ba4\u7684\u8f6c\u6362\u88ab\u79f0\u4e3a",(0,s.jsx)(n.strong,{children:"\u5185\u90e8\u8f6c\u6362"}),"\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"reenter: true"}),"\u7684\u81ea\u8f6c\u6362\uff1a"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst machine = createMachine({\n  initial: 'someState',\n  states: {\n    someState: {\n      entry: () => console.log('someState entered'),\n      exit: () => console.log('someState exited'),\n      on: {\n        'event.normal': {\n          target: 'someState', // \u6216\u6ca1\u6709\u76ee\u6807\n        },\n        'event.thatReenters': {\n          target: 'someState', // \u6216\u6ca1\u6709\u76ee\u6807\n          reenter: true,\n        }\n      }\n    }\n  }\n});\n\nconst actor = createActor(machine);\nactor.start();\n\nactor.send({ type: 'event.normal' });\n// \u4e0d\u4f1a\u8bb0\u5f55\u4efb\u4f55\u5185\u5bb9\n\nactor.send({ type: 'event.thatReenters' });\n// \u8bb0\u5f55:\n// \"someState exited\"\n// \"someState entered\"\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u7236\u5b50\uff08\u6216\u540e\u4ee3\uff09\u8f6c\u6362\u4e0e ",(0,s.jsx)(n.code,{children:"reenter: true"}),"\uff1a"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const machine = createMachine({\n  initial: 'parentState',\n  states: {\n    parentState: {\n      entry: () => console.log('parentState entered'),\n      exit: () => console.log('parentState exited'),\n      on: {\n        'event.normal': {\n          target: '.someChildState'\n        },\n        'event.thatReenters': {\n          target: '.otherChildState',\n          reenter: true\n        }\n      },\n      initial: 'someChildState',\n      states: {\n        someChildState: {\n          entry: () => console.log('someChildState entered'),\n          exit: () => console.log('someChildState exited')\n        },\n        otherChildState: {\n          entry: () => console.log('otherChildState entered'),\n          exit: () => console.log('otherChildState exited')\n        }\n      }\n    }\n  }\n});\n\nconst actor1 = createActor(machine);\nactor1.start();\nactor1.send({ type: 'event.normal' });\n// Logs:\n// \"someChildState exited\"\n// \"someChildState entered\"\n\nconst actor2 = createActor(machine);\nactor2.start();\nconsole.log('---');\nactor2.send({ type: 'event.thatReenters' });\n// Logs:\n// \"someChildState exited\"\n// \"parentState exited\"\n// \"parentState entered\"\n// \"otherChildState entered\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6c\u6362\u5230\u4efb\u4f55\u72b6\u6001",children:"\u8f6c\u6362\u5230\u4efb\u4f55\u72b6\u6001"}),"\n",(0,s.jsxs)(n.p,{children:["\u5144\u5f1f\u540e\u4ee3\u72b6\u6001\uff1a",(0,s.jsx)(n.code,{children:"{ target: 'sibling.child.grandchild' }"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7236\u72b6\u6001\u5230\u540e\u4ee3\u72b6\u6001\uff1a",(0,s.jsx)(n.code,{children:"{ target: '.child.grandchild' }"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u72b6\u6001\u5230\u4efb\u4f55\u72b6\u6001\uff1a",(0,s.jsx)(n.code,{children:"{ target: '#specificState' }"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u7981\u6b62\u8f6c\u6362",children:"\u7981\u6b62\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"{ on: { forbidden: {} } }"})}),"\n",(0,s.jsx)(n.li,{children:"\u4e0e\u7701\u7565\u8f6c\u6362\u4e0d\u540c\uff1b\u8f6c\u6362\u9009\u62e9\u7b97\u6cd5\u5c06\u505c\u6b62\u67e5\u627e"}),"\n",(0,s.jsxs)(n.li,{children:["\u7b49\u540c\u4e8e ",(0,s.jsx)(n.code,{children:"{ on: { forbidden: { target: undefined } } }"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u901a\u914d\u7b26\u8f6c\u6362",children:"\u901a\u914d\u7b26\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u914d\u7b26\u8f6c\u6362\u662f\u4e00\u79cd\u5c06\u5339\u914d\u4efb\u4f55\u4e8b\u4ef6\u7684\u8f6c\u6362\u3002\u4e8b\u4ef6\u63cf\u8ff0\u7b26\uff08",(0,s.jsx)(n.code,{children:"on: {...}"})," \u5bf9\u8c61\u7684\u952e\uff09\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"*"})," \u901a\u914d\u7b26\u5b57\u7b26\u4f5c\u4e3a\u4e8b\u4ef6\u7c7b\u578b\u5b9a\u4e49\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  initial: 'asleep',\n  states: {\n    asleep: {\n      on: {\n        // highlight-start\n        // \u6b64\u8f6c\u6362\u5c06\u5339\u914d\u4efb\u4f55\u4e8b\u4ef6\n        '*': { target: 'awake' },\n        // highlight-end\n      },\n    },\n    awake: {},\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u914d\u7b26\u8f6c\u6362\u975e\u5e38\u6709\u7528\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5904\u7406\u672a\u88ab\u4efb\u4f55\u5176\u4ed6\u8f6c\u6362\u5904\u7406\u7684\u4e8b\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4f5c\u4e3a\u5904\u7406\u72b6\u6001\u4e2d\u4efb\u4f55\u4e8b\u4ef6\u7684\u201c\u6355\u83b7\u6240\u6709\u201d\u8f6c\u6362\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u914d\u7b26\u8f6c\u6362\u7684\u4f18\u5148\u7ea7\u6700\u4f4e\uff1b\u5b83\u53ea\u6709\u5728\u6ca1\u6709\u5176\u4ed6\u8f6c\u6362\u88ab\u542f\u7528\u65f6\u624d\u4f1a\u88ab\u6267\u884c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u90e8\u5206\u901a\u914d\u7b26\u8f6c\u6362",children:"\u90e8\u5206\u901a\u914d\u7b26\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.p,{children:["\u90e8\u5206\u901a\u914d\u7b26\u8f6c\u6362\u662f\u4e00\u79cd\u5339\u914d\u4efb\u4f55\u4ee5\u7279\u5b9a\u524d\u7f00\u5f00\u5934\u7684\u4e8b\u4ef6\u7684\u8f6c\u6362\u3002\u4e8b\u4ef6\u63cf\u8ff0\u7b26\u901a\u8fc7\u5728\u4e8b\u4ef6\u7c7b\u578b\u540e\u4f7f\u7528\u70b9\uff08",(0,s.jsx)(n.code,{children:"."}),"\uff09\u548c\u901a\u914d\u7b26\u5b57\u7b26\uff08",(0,s.jsx)(n.code,{children:"*"}),"\uff09\u6765\u5b9a\u4e49\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  initial: 'prompt',\n  states: {\n    prompt: {\n      on: {\n        // highlight-start\n        // \u8fd9\u5c06\u5339\u914d 'feedback' \u4e8b\u4ef6\u4ee5\u53ca\n        // \u4efb\u4f55\u4ee5 'feedback.' \u5f00\u5934\u7684\u4e8b\u4ef6\uff0c\u4f8b\u5982\uff1a\n        // 'feedback.good', 'feedback.bad' \u7b49\u3002\n        'feedback.*': { target: 'form' },\n        // highlight-end\n      },\n    },\n    form: {},\n    // ...\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u914d\u7b26\u5b57\u7b26 (",(0,s.jsx)(n.code,{children:"*"}),") \u53ea\u80fd\u5728\u4e8b\u4ef6\u63cf\u8ff0\u7b26\u7684\u540e\u7f00\u4e2d\u4f7f\u7528\uff0c\u7d27\u8ddf\u5728\u70b9 (",(0,s.jsx)(n.code,{children:"."}),") \u4e4b\u540e\uff1a"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6709\u6548\u7684\u901a\u914d\u7b26\u793a\u4f8b",children:"\u6709\u6548\u7684\u901a\u914d\u7b26\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," ",(0,s.jsx)(n.code,{children:"mouse.*"}),": \u5339\u914d ",(0,s.jsx)(n.code,{children:"mouse"}),", ",(0,s.jsx)(n.code,{children:"mouse.click"}),", ",(0,s.jsx)(n.code,{children:"mouse.move"})," \u7b49\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," ",(0,s.jsx)(n.code,{children:"mouse.click.*"}),": \u5339\u914d ",(0,s.jsx)(n.code,{children:"mouse.click"}),", ",(0,s.jsx)(n.code,{children:"mouse.click.left"}),", ",(0,s.jsx)(n.code,{children:"mouse.click.right"})," \u7b49\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u65e0\u6548\u7684\u901a\u914d\u7b26",children:"\u65e0\u6548\u7684\u901a\u914d\u7b26"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," ",(0,s.jsx)(n.del,{children:(0,s.jsx)(n.code,{children:"mouse*"})}),": \u65e0\u6548\uff1b\u4e0d\u5339\u914d\u4efb\u4f55\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," ",(0,s.jsx)(n.del,{children:(0,s.jsx)(n.code,{children:"mouse.*.click"})}),": \u65e0\u6548\uff1b",(0,s.jsx)(n.code,{children:"*"})," \u4e0d\u80fd\u5728\u4e8b\u4ef6\u63cf\u8ff0\u7b26\u7684\u4e2d\u95f4\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," ",(0,s.jsx)(n.del,{children:(0,s.jsx)(n.code,{children:"*.click"})}),": \u65e0\u6548\uff1b",(0,s.jsx)(n.code,{children:"*"})," \u4e0d\u80fd\u5728\u4e8b\u4ef6\u63cf\u8ff0\u7b26\u7684\u524d\u7f00\u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," ",(0,s.jsx)(n.del,{children:(0,s.jsx)(n.code,{children:"mouse.click*"})}),": \u65e0\u6548\uff1b\u4e0d\u5339\u914d\u4efb\u4f55\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," ",(0,s.jsx)(n.del,{children:(0,s.jsx)(n.code,{children:"mouse.*.*"})}),": \u65e0\u6548\uff1b",(0,s.jsx)(n.code,{children:"*"})," \u4e0d\u80fd\u5728\u4e8b\u4ef6\u63cf\u8ff0\u7b26\u7684\u4e2d\u95f4\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e76\u884c\u72b6\u6001\u4e2d\u7684\u591a\u4e2a\u8f6c\u6362",children:"\u5e76\u884c\u72b6\u6001\u4e2d\u7684\u591a\u4e2a\u8f6c\u6362"}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4e8e\u5e76\u884c\u72b6\u6001\u5177\u6709\u591a\u4e2a\u53ef\u4ee5\u540c\u65f6\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684\u533a\u57df\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u540c\u65f6\u542f\u7528\u591a\u4e2a\u8f6c\u6362\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06\u6267\u884c\u6240\u6709\u542f\u7528\u7684\u8f6c\u6362\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u591a\u4e2a\u76ee\u6807\u88ab\u6307\u5b9a\u4e3a\u5b57\u7b26\u4e32\u6570\u7ec4\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u5373\u5c06\u63a8\u51fa\u2026 \u793a\u4f8b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5176\u4ed6\u8f6c\u6362",children:"\u5176\u4ed6\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/xstate-zh/docs/eventless-transitions",children:(0,s.jsx)(n.strong,{children:"\u65e0\u4e8b\u4ef6\uff08always\uff09\u8f6c\u6362"})})," \u662f\u6ca1\u6709\u4e8b\u4ef6\u7684\u8f6c\u6362\u3002\u8fd9\u4e9b\u8f6c\u6362\u5728\u5176\u72b6\u6001\u4e2d\u7684\u4efb\u4f55\u8f6c\u6362\u542f\u7528\u540e",(0,s.jsx)(n.em,{children:"\u603b\u662f"}),"\u88ab\u6267\u884c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/xstate-zh/docs/delayed-transitions",children:(0,s.jsx)(n.strong,{children:"\u5ef6\u8fdf\uff08after\uff09\u8f6c\u6362"})})," \u662f\u5728\u6307\u5b9a\u6301\u7eed\u65f6\u95f4\u540e\u542f\u7528\u7684\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6c\u6362\u63cf\u8ff0",children:"\u8f6c\u6362\u63cf\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5411\u8f6c\u6362\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:".description"})," \u5b57\u7b26\u4e32\u4ee5\u63cf\u8ff0\u8f6c\u6362\u3002\u8fd9\u5bf9\u4e8e\u5728\u53ef\u89c6\u5316\u72b6\u6001\u673a\u4e2d\u89e3\u91ca\u8f6c\u6362\u7684\u76ee\u7684\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  // ...\n  on: {\n    exit: {\n      // highlight-next-line\n      description: 'Closes the feedback form',\n      target: '.closed',\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7b80\u5199",children:"\u7b80\u5199"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u8f6c\u6362\u53ea\u6307\u5b9a\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"target"}),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u76ee\u6807\u4f5c\u4e3a\u7b80\u5199\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u8f6c\u6362\u5bf9\u8c61\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst feedbackMachine = createMachine({\n  initial: 'prompt',\n  states: {\n    prompt: {\n      on: {\n        // highlight-start\n        // \u8fd9\u662f\u4ee5\u4e0b\u5185\u5bb9\u7684\u7b80\u5199\uff1a\n        // 'feedback': { target: 'form' }\n        'feedback.good': 'thanks',\n        // highlight-end\n      },\n    },\n    thanks: {},\n    // ...\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5b57\u7b26\u4e32\u76ee\u6807\u7b80\u5199\u5bf9\u4e8e\u5feb\u901f\u539f\u578b\u8bbe\u8ba1\u72b6\u6001\u673a\u975e\u5e38\u6709\u7528\u3002\u901a\u5e38\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u5b8c\u6574\u7684\u8f6c\u6362\u5bf9\u8c61\u8bed\u6cd5\uff0c\u56e0\u4e3a\u5b83\u5c06\u4e0e\u6240\u6709\u5176\u4ed6\u8f6c\u6362\u5bf9\u8c61\u4fdd\u6301\u4e00\u81f4\uff0c\u5e76\u4e14\u5c06\u6765\u66f4\u5bb9\u6613\u5411\u8f6c\u6362\u6dfb\u52a0\u52a8\u4f5c\u3001\u5b88\u536b\u548c\u5176\u4ed6\u5c5e\u6027\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,s.jsxs)(n.admonition,{type:"typescript",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"XState v5 \u9700\u8981 TypeScript \u7248\u672c 5.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"})}),(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u6548\u679c\uff0c\u8bf7\u4f7f\u7528\u6700\u65b0\u7684 TypeScript \u7248\u672c\u3002",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/typescript",children:"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e XState \u548c TypeScript \u7684\u4fe1\u606f"})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u8f6c\u6362\u4e3b\u8981\u4f7f\u7528\u5b83\u4eec\u542f\u7528\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { setup } from 'xstate';\n\nconst machine = setup({\n  types: {\n    // highlight-start\n    events: {} as\n      | { type: 'greet'; message: string }\n      | { type: 'submit' }\n    // highlight-end\n  }\n}).createMachine({\n  // ...\n  on: {\n    greet: {\n      actions: ({ event }) => {\n        event.type; // 'greet'\n        event.message; // string\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:"\u5982\u4f55\u76d1\u542c\u53d1\u9001\u7ed9 actor \u7684\u4e8b\u4ef6\uff1f"})}),(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/xstate-zh/docs/inspection",children:"inspection API"})," \u6765\u76d1\u542c actor \u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u68c0\u67e5\u4e8b\u4ef6\u3002",(0,s.jsx)(n.code,{children:"@xstate.event"})," \u68c0\u67e5\u4e8b\u4ef6\u5305\u542b\u4ece\u4e00\u4e2a actor \u53d1\u9001\u5230\u53e6\u4e00\u4e2a actor\uff08\u6216\u81ea\u8eab\uff09\u7684\u4e8b\u4ef6\u4fe1\u606f\uff1a"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createActor } from 'xstate';\nimport { someMachine } from './someMachine';\n\nconst actor = createActor(someMachine, {\n  inspect: (inspectionEvent) => {\n    if (inspectionEvent.type === '@xstate.event') {\n      // highlight-start\n      // \u4ece\u4e00\u4e2a actor \u53d1\u9001\u5230\u53e6\u4e00\u4e2a actor \u7684\u4e8b\u4ef6\u5bf9\u8c61\n      console.log(inspectionEvent.event);\n      // highlight-end\n    }\n  }\n});\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8f6c\u6362\u901f\u67e5\u8868",children:"\u8f6c\u6362\u901f\u67e5\u8868"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684 XState \u4e8b\u4ef6\u548c\u8f6c\u6362\u901f\u67e5\u8868\u5feb\u901f\u5165\u95e8\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u901f\u67e5\u8868\u4e8b\u4ef6\u5bf9\u8c61",children:"\u901f\u67e5\u8868\uff1a\u4e8b\u4ef6\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"feedbackActor.send({\n  // \u4e8b\u4ef6\u7c7b\u578b\n  type: 'feedback.update',\n  // \u4e8b\u4ef6\u8d1f\u8f7d\n  feedback: 'A+ would use state machines again',\n  rating: 5,\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u901f\u67e5\u8868\u8f6c\u6362\u76ee\u6807",children:"\u901f\u67e5\u8868\uff1a\u8f6c\u6362\u76ee\u6807"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const machine = createMachine({\n  initial: 'a',\n  states: {\n    a: {\n      on: {\n        // \u5144\u5f1f\u72b6\u6001\u76ee\u6807\n        event: {\n          target: 'b',\n        },\n        // \u5144\u5f1f\u5b50\u72b6\u6001\u76ee\u6807\n        otherEvent: {\n          target: 'b.c',\n        },\n      },\n    },\n    b: {\n      on: {\n        // ID\u76ee\u6807\n        event: {\n          target: '#c',\n        },\n      },\n    },\n    c: {\n      id: 'c',\n      on: {\n        // \u5b50\u72b6\u6001\u76ee\u6807\n        event: {\n          target: '.child',\n        },\n      },\n      initial: 'child',\n      states: {\n        child: {},\n      },\n    },\n  },\n  on: {\n    // \u5b50\u72b6\u6001\u76ee\u6807\n    someEvent: {\n      target: '.b',\n    },\n  },\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);