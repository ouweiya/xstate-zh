"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4205],{91171:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var n=s(85893),l=s(11151);const c={title:"@xstate/svelte"},a=void 0,r={id:"xstate-svelte",title:"@xstate/svelte",description:"@xstate/svelte \u5305 \u5305\u542b\u4e86\u5728 Svelte \u4e2d\u4f7f\u7528 XState \u7684\u5de5\u5177\u3002",source:"@site/docs/xstate-svelte.mdx",sourceDirName:".",slug:"/xstate-svelte",permalink:"/xstate-zh/docs/xstate-svelte",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/xstate-svelte.mdx",tags:[],version:"current",frontMatter:{title:"@xstate/svelte"},sidebar:"tutorialSidebar",previous:{title:"@xstate/vue",permalink:"/xstate-zh/docs/xstate-vue"},next:{title:"@xstate/graph",permalink:"/xstate-zh/docs/xstate-graph"}},i={},d=[{value:"\u6a21\u677f",id:"\u6a21\u677f",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"API",id:"api",level:2},{value:"<code>useMachine(machine, options?)</code>",id:"usemachinemachine-options",level:3},{value:"<code>useSelector(actorRef, selector, compare?, getSnapshot?)</code>",id:"useselectoractorref-selector-compare-getsnapshot",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u5339\u914d\u72b6\u6001",id:"\u5339\u914d\u72b6\u6001",level:2},{value:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001",id:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001",level:2}];function o(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{TabItem:s,Tabs:c}=t;return s||x("TabItem",!0),c||x("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-svelte",children:"@xstate/svelte \u5305"})," \u5305\u542b\u4e86\u5728 ",(0,n.jsx)(t.a,{href:"https://github.com/sveltejs/svelte",children:"Svelte"})," \u4e2d\u4f7f\u7528 ",(0,n.jsx)(t.a,{href:"https://github.com/statelyai/xstate",children:"XState"})," \u7684\u5de5\u5177\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u6a21\u677f",children:"\u6a21\u677f"}),"\n",(0,n.jsx)(t.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u6a21\u677f\u53ef\u4ee5\u5feb\u901f\u5f00\u59cb\u4f7f\u7528 XState \u548c Svelte\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://codesandbox.io/p/devbox/github/statelyai/xstate/tree/main/templates/svelte-ts",children:"XState Svelte \u6a21\u677f (CodeSandbox)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://stackblitz.com/github/statelyai/xstate/tree/main/templates/svelte-ts?file=%2Fsrc%2FfeedbackMachine.ts",children:"XState Svelte \u6a21\u677f (StackBlitz)"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,n.jsxs)(t.p,{children:["\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 ",(0,n.jsx)(t.code,{children:"xstate"})," \u548c ",(0,n.jsx)(t.code,{children:"@xstate/svelte"}),"\u3002",(0,n.jsx)(t.code,{children:"xstate"})," \u662f ",(0,n.jsx)(t.code,{children:"@xstate/svelte"})," \u7684\u4e00\u4e2a peer \u4f9d\u8d56\u3002"]}),"\n",(0,n.jsxs)(c,{children:[(0,n.jsx)(s,{value:"npm",label:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install xstate @xstate/svelte\n"})})}),(0,n.jsx)(s,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm install xstate @xstate/svelte\n"})})}),(0,n.jsx)(s,{value:"yarn",label:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add xstate @xstate/svelte\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.h3,{id:"usemachinemachine-options",children:(0,n.jsx)(t.code,{children:"useMachine(machine, options?)"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u4ece\u7ed9\u5b9a\u7684 ",(0,n.jsx)(t.code,{children:"machine"})," \u521b\u5efa\u4e00\u4e2a actor\uff0c\u5e76\u542f\u52a8\u4e00\u4e2a\u5728\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u5185\u8fd0\u884c\u7684 actor\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u53c2\u6570"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"machine"})," - \u4e00\u4e2a ",(0,n.jsx)(t.a,{href:"/xstate-zh/docs/machines",children:"XState \u673a\u5668"}),"\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"options"})," (\u53ef\u9009) - Actor \u9009\u9879"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u8fd4\u56de"})," ",(0,n.jsx)(t.code,{children:"{ snapshot, send, actorRef}"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"snapshot"})," - \u4e00\u4e2a\u8868\u793a\u673a\u5668\u5f53\u524d\u72b6\u6001\u7684 ",(0,n.jsx)(t.a,{href:"https://svelte.dev/docs#svelte_store",children:"Svelte store"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"send"})," - \u4e00\u4e2a\u5411\u8fd0\u884c\u4e2d\u7684 actor ref \u53d1\u9001\u4e8b\u4ef6\u7684\u51fd\u6570\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"actorRef"})," - \u521b\u5efa\u7684 actor ref\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"useselectoractorref-selector-compare-getsnapshot",children:(0,n.jsx)(t.code,{children:"useSelector(actorRef, selector, compare?, getSnapshot?)"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u4ece ",(0,n.jsx)(t.code,{children:"actorRef"})," \u7684\u5feb\u7167\u4e2d\u9009\u62e9\u7684\u503c\u7684 ",(0,n.jsx)(t.a,{href:"https://svelte.dev/docs#svelte_store",children:"Svelte store"}),"\u3002\u53ea\u6709\u5f53\u6240\u9009\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0cstore \u624d\u4f1a\u66f4\u65b0\uff0c\u8fd9\u7531\u53ef\u9009\u7684 ",(0,n.jsx)(t.code,{children:"compare"})," \u51fd\u6570\u786e\u5b9a\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u53c2\u6570"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"actorRef"})," - \u4e00\u4e2a actor ref"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"selector"})," - \u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7 actor \u7684\u5f53\u524d\u72b6\u6001 (",(0,n.jsx)(t.code,{children:"snapshot"}),") \u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u6240\u9700\u7684\u9009\u5b9a\u503c\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"compare"})," (\u53ef\u9009) - \u4e00\u4e2a\u51fd\u6570\uff0c\u7528\u4e8e\u786e\u5b9a\u5f53\u524d\u9009\u5b9a\u503c\u662f\u5426\u4e0e\u4e4b\u524d\u7684\u9009\u5b9a\u503c\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"\u5373\u5c06\u63a8\u51fa"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5339\u914d\u72b6\u6001",children:"\u5339\u914d\u72b6\u6001"}),"\n",(0,n.jsxs)(t.p,{children:["\u5f53\u4f7f\u7528 ",(0,n.jsx)(t.a,{href:"https://xstate.js.org/docs/guides/hierarchical.html",children:"\u5206\u5c42"})," \u548c ",(0,n.jsx)(t.a,{href:"https://xstate.js.org/docs/guides/parallel.html",children:"\u5e76\u884c"})," \u673a\u5668\u65f6\uff0c\u72b6\u6001\u503c\u5c06\u662f\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u5b57\u7b26\u4e32\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6700\u597d\u4f7f\u7528 ",(0,n.jsx)(t.a,{href:"https://xstate.js.org/docs/guides/states.html#state-methods-and-properties",children:(0,n.jsx)(t.code,{children:"state.matches(...)"})}),"\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-svelte",children:"{#if $state.matches('idle')}\n  //\n{:else if $state.matches({ loading: 'user' })}\n  //\n{:else if $state.matches({ loading: 'friends' })}\n  //\n{/if}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001",children:"\u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001"}),"\n",(0,n.jsxs)(t.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"options.snapshot"})," \u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"useMachine(...)"})," \u6301\u4e45\u5316\u548c\u6062\u590d\u72b6\u6001\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// \u4ece\u67d0\u5904\u83b7\u53d6\u6301\u4e45\u5316\u7684\u72b6\u6001\u914d\u7f6e\u5bf9\u8c61\uff0c\u4f8b\u5982 localStorage\n// highlight-start\nconst persistedState = JSON.parse(\n  localStorage.getItem('some-persisted-state-key'),\n);\n// highlight-end\n\nconst { snapshot, send } = useMachine(someMachine, {\n  // highlight-next-line\n  snapshot: persistedState,\n});\n\n// \u72b6\u6001\u5c06\u6700\u521d\u662f\u6301\u4e45\u5316\u7684\u72b6\u6001\uff0c\u800c\u4e0d\u662f\u673a\u5668\u7684 initialState\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(67294);const l={},c=n.createContext(l);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);