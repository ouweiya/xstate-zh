"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[6480],{61293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=n(85893),a=n(11151);const c={title:"Tags(\u6807\u7b7e)"},r=void 0,i={id:"tags",title:"Tags(\u6807\u7b7e)",description:"\u72b6\u6001\u8282\u70b9\u53ef\u4ee5\u6709\u6807\u7b7e\uff0c\u8fd9\u4e9b\u6807\u7b7e\u662f\u5e2e\u52a9\u5206\u7ec4\u6216\u5206\u7c7b\u72b6\u6001\u8282\u70b9\u7684\u5b57\u7b26\u4e32\u672f\u8bed\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u201cloading\u201d\u6807\u7b7e\u8868\u793a\u54ea\u4e9b\u72b6\u6001\u8282\u70b9\u4ee3\u8868\u6b63\u5728\u52a0\u8f7d\u6570\u636e\u7684\u72b6\u6001\uff0c\u5e76\u4f7f\u7528 state.hasTag(tag) \u786e\u5b9a\u72b6\u6001\u662f\u5426\u5305\u542b\u90a3\u4e9b\u5e26\u6807\u7b7e\u7684\u72b6\u6001\u8282\u70b9\uff1a",source:"@site/docs/tags.mdx",sourceDirName:".",slug:"/tags",permalink:"/xstate-zh/docs/tags",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/tags.mdx",tags:[],version:"current",frontMatter:{title:"Tags(\u6807\u7b7e)"},sidebar:"tutorialSidebar",previous:{title:"Persistence(\u6301\u4e45\u5316)",permalink:"/xstate-zh/docs/persistence"},next:{title:"Event emitter(\u4e8b\u4ef6\u53d1\u5c04\u5668)",permalink:"/xstate-zh/docs/event-emitter"}},o={},d=[{value:"\u6807\u7b7e\u548c TypeScript",id:"\u6807\u7b7e\u548c-typescript",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u72b6\u6001\u8282\u70b9\u53ef\u4ee5\u6709",(0,s.jsx)(t.strong,{children:"\u6807\u7b7e"}),"\uff0c\u8fd9\u4e9b\u6807\u7b7e\u662f\u5e2e\u52a9\u5206\u7ec4\u6216\u5206\u7c7b\u72b6\u6001\u8282\u70b9\u7684\u5b57\u7b26\u4e32\u672f\u8bed\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u201cloading\u201d\u6807\u7b7e\u8868\u793a\u54ea\u4e9b\u72b6\u6001\u8282\u70b9\u4ee3\u8868\u6b63\u5728\u52a0\u8f7d\u6570\u636e\u7684\u72b6\u6001\uff0c\u5e76\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"state.hasTag(tag)"})," \u786e\u5b9a\u72b6\u6001\u662f\u5426\u5305\u542b\u90a3\u4e9b\u5e26\u6807\u7b7e\u7684\u72b6\u6001\u8282\u70b9\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const feedbackMachine = createMachine({\n  id: 'feedback',\n  initial: 'prompt',\n  states: {\n    prompt: {\n      tags: ['visible'],\n      // ...\n    },\n    form: {\n      tags: ['visible'],\n      // ...\n    },\n    thanks: {\n      tags: ['visible', 'confetti'],\n      // ...\n    },\n    closed: {\n      tags: ['hidden'],\n    },\n  },\n});\n\nconst feedbackActor = createActor(feedbackMachine).start();\n\nconsole.log(feedbackActor..getSnapshot().hasTag('visible'));\n// logs true\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u6807\u7b7e\u548c-typescript",children:"\u6807\u7b7e\u548c TypeScript"}),"\n",(0,s.jsxs)(t.admonition,{type:"typescript",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"XState v5 \u9700\u8981 TypeScript \u7248\u672c 5.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"})}),(0,s.jsxs)(t.p,{children:["\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u6548\u679c\uff0c\u8bf7\u4f7f\u7528\u6700\u65b0\u7684 TypeScript \u7248\u672c\u3002",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/typescript",children:"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e XState \u548c TypeScript \u7684\u4fe1\u606f"})]})]}),"\n",(0,s.jsxs)(t.p,{children:["\u60a8\u53ef\u4ee5\u5728\u673a\u5668\u8bbe\u7f6e\u7684 ",(0,s.jsx)(t.code,{children:"types.tags"})," \u5c5e\u6027\u4e2d\u5f3a\u7c7b\u578b\u5316\u673a\u5668\u7684 ",(0,s.jsx)(t.code,{children:"tags"}),"\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { setup } from 'xstate';\n\nconst machine = setup({\n  types: {\n    // highlight-next-line\n    tags: {} as 'pending' | 'success' | 'error'\n  }\n}).createMachine({\n  // ...\n  states: {\n    loadingUser: {\n      tags: ['pending'], // \u5f3a\u7c7b\u578b\u5316\n    },\n  },\n});\n\nconst actor = createActor(machine).start();\n\nactor\n  .getSnapshot()\n  // \u81ea\u52a8\u5b8c\u6210\n  .hasTag('pending');\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(67294);const a={},c=s.createContext(a);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);