"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5971],{93617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(85893),i=n(11151);const s={title:"\u4e0e Immer \u4e00\u8d77\u4f7f\u7528"},r=void 0,a={id:"immer",title:"\u4e0e Immer \u4e00\u8d77\u4f7f\u7528",description:"Immer \u662f\u4e00\u4e2a\u4f7f\u4e0d\u53ef\u53d8\u6570\u636e\u66f4\u65b0\u66f4\u65b9\u4fbf\u7684\u5e93\u3002\u5b83\u53ef\u4ee5\u4e0e XState \u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u4e0d\u53ef\u53d8\u7684\u65b9\u5f0f\u66f4\u65b0 context\u3002",source:"@site/docs/immer.mdx",sourceDirName:".",slug:"/immer",permalink:"/xstate-zh/docs/immer",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/immer.mdx",tags:[],version:"current",frontMatter:{title:"\u4e0e Immer \u4e00\u8d77\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u6d4b\u8bd5",permalink:"/xstate-zh/docs/testing"},next:{title:"\u8f6f\u4ef6\u5305",permalink:"/xstate-zh/docs/category/xstate-packages"}},c={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Immer \u7528\u6cd5",id:"immer-\u7528\u6cd5",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{TabItem:n,Tabs:s}=t;return n||h("TabItem",!0),s||h("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://immerjs.github.io/immer/",children:"Immer"})," \u662f\u4e00\u4e2a\u4f7f\u4e0d\u53ef\u53d8\u6570\u636e\u66f4\u65b0\u66f4\u65b9\u4fbf\u7684\u5e93\u3002\u5b83\u53ef\u4ee5\u4e0e XState \u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u4e0d\u53ef\u53d8\u7684\u65b9\u5f0f\u66f4\u65b0 ",(0,o.jsx)(t.code,{children:"context"}),"\u3002"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["\u5efa\u8bae\u76f4\u63a5\u5c06 Immer \u4e0e XState \u4e00\u8d77\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5df2\u5f03\u7528\u7684 ",(0,o.jsx)(t.code,{children:"@xstate/immer"})," \u5305\u3002"]})}),"\n",(0,o.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(t.p,{children:["\u4ece npm \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 ",(0,o.jsx)(t.code,{children:"xstate"})," \u548c ",(0,o.jsx)(t.code,{children:"immer"}),"\uff1a"]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)(n,{value:"npm",label:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install xstate immer\n"})})}),(0,o.jsx)(n,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pnpm install xstate immer\n"})})}),(0,o.jsx)(n,{value:"yarn",label:"yarn",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add xstate immer\n"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.jsx)(t.a,{href:"https://immerjs.github.io/immer/installation",children:"Immer \u5b89\u88c5\u6587\u6863"}),"\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"immer-\u7528\u6cd5",children:"Immer \u7528\u6cd5"}),"\n",(0,o.jsxs)(t.p,{children:["XState \u5df2\u7ecf\u5141\u8bb8\u60a8\u5728 ",(0,o.jsx)(t.a,{href:"/docs/actions#assign-action",children:"assign actions"})," \u4e2d\u90e8\u5206\u6216\u5b8c\u5168\u4e0d\u53ef\u53d8\u5730\u66f4\u65b0 ",(0,o.jsx)(t.code,{children:"context"}),"\u3002\u4f46\u662f\uff0c\u5bf9\u4e8e\u66f4\u590d\u6742\u7684\u573a\u666f\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528 Immer \u4ee5\u4e00\u79cd\u66f4\u7b80\u6d01\u7684\u65b9\u5f0f\u66f4\u65b0 ",(0,o.jsx)(t.code,{children:"context"}),"\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { createMachine, assign } from 'xstate';\n// highlight-next-line\nimport { produce } from 'immer';\n\nconst machine = createMachine({\n  id: 'todos',\n  context: {\n    todos: [],\n    filter: 'all'\n  },\n  // ...\n  on: {\n    'todo.complete': {\n      // highlight-start\n      // \u4f7f\u7528 Immer \u66f4\u65b0\u5355\u4e2a context \u5c5e\u6027\n      actions: assign({\n        todos: ({ context, event }) => produce(context.todos, draftTodos => {\n          const todo = draftTodos.find(t => t.id === event.todo.id);\n          todo.completed = true;\n        })\n      })\n      // highlight-end\n        },\n        'todos.add': {\n      // highlight-start\n      // \u4f7f\u7528 Immer \u66f4\u65b0\u591a\u4e2a context \u5c5e\u6027\n      actions: assign(({ context, event }) => produce(context, draftContext => {\n        draftContext.todos.push({\n          id: event.todo.id,\n          description: event.todo.description,\n          completed: false\n        });\n\n        if (draftContext.filter === 'all') {\n          draftContext.filter = 'active';\n        }\n      }))\n      // highlight-end\n    }\n  }\n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(67294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);