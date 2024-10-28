"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5971],{93617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(85893),o=n(11151);const s={title:"Usage with Immer"},a=void 0,r={id:"immer",title:"Usage with Immer",description:"Immer is a library that makes it more convenient to work with updating data immutably. It can be used with XState to immutably update context in assignments.",source:"@site/docs/immer.mdx",sourceDirName:".",slug:"/immer",permalink:"/xstate-zh/docs/immer",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/immer.mdx",tags:[],version:"current",frontMatter:{title:"Usage with Immer"},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/xstate-zh/docs/testing"},next:{title:"\u8f6f\u4ef6\u5305",permalink:"/xstate-zh/docs/category/xstate-packages"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Immer usage",id:"immer-usage",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{TabItem:n,Tabs:s}=t;return n||h("TabItem",!0),s||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://immerjs.github.io/immer/",children:"Immer"})," is a library that makes it more convenient to work with updating data immutably. It can be used with XState to immutably update ",(0,i.jsx)(t.code,{children:"context"})," in assignments."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["It is recommended to use Immer directly with XState instead of the ",(0,i.jsx)(t.code,{children:"@xstate/immer"})," package, which is deprecated."]})}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["Install the latest versions of ",(0,i.jsx)(t.code,{children:"xstate"})," and ",(0,i.jsx)(t.code,{children:"immer"})," from npm:"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)(n,{value:"npm",label:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install xstate immer\n"})})}),(0,i.jsx)(n,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pnpm install xstate immer\n"})})}),(0,i.jsx)(n,{value:"yarn",label:"yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add xstate immer\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://immerjs.github.io/immer/installation",children:"the Immer installation docs"})," for more information."]}),"\n",(0,i.jsx)(t.h2,{id:"immer-usage",children:"Immer usage"}),"\n",(0,i.jsxs)(t.p,{children:["XState already allows you to immutably update ",(0,i.jsx)(t.code,{children:"context"})," partially or completely in ",(0,i.jsx)(t.a,{href:"/docs/actions#assign-action",children:"assign actions"}),". However, for more complex scenarios, you may want to use Immer to update ",(0,i.jsx)(t.code,{children:"context"})," in a less verbose way."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { createMachine, assign } from 'xstate';\n// highlight-next-line\nimport { produce } from 'immer';\n\nconst machine = createMachine({\n  id: 'todos',\n  context: {\n    todos: [],\n    filter: 'all'\n  },\n  // ...\n  on: {\n    'todo.complete': {\n      // highlight-start\n      // Using Immer to update a single context property\n      actions: assign({\n        todos: ({ context, event }) => produce(context.todos, draftTodos => {\n          const todo = draftTodos.find(t => t.id === event.todo.id);\n          todo.completed = true;\n        })\n      })\n      // highlight-end\n    },\n    'todos.add': {\n      // highlight-start\n      // Using Immer to update multiple context properties\n      actions: assign(({ context, event }) => produce(context, draftContext => {\n        draftContext.todos.push({\n          id: event.todo.id,\n          description: event.todo.description,\n          completed: false\n        });\n\n        if (draftContext.filter === 'all') {\n          draftContext.filter = 'active';\n        }\n      }))\n      // highlight-end\n    }\n  }\n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);