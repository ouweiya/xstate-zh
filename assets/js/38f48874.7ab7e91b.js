"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4725],{53282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var i=n(85893),s=n(11151);const c={title:"\u521d\u59cb\u72b6\u6001"},r=void 0,a={id:"initial-states",title:"\u521d\u59cb\u72b6\u6001",description:"\u5f53\u72b6\u6001\u673a\u542f\u52a8\u65f6\uff0c\u5b83\u9996\u5148\u8fdb\u5165\u521d\u59cb\u72b6\u6001\u3002\u4e00\u4e2a\u72b6\u6001\u673a\u53ea\u80fd\u6709\u4e00\u4e2a\u9876\u7ea7\u521d\u59cb\u72b6\u6001\uff1b\u5982\u679c\u6709\u591a\u4e2a\u521d\u59cb\u72b6\u6001\uff0c\u72b6\u6001\u673a\u5c06\u4e0d\u77e5\u9053\u4ece\u54ea\u91cc\u5f00\u59cb\uff01",source:"@site/docs/initial-states.mdx",sourceDirName:".",slug:"/initial-states",permalink:"/xstate-zh/docs/initial-states",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/initial-states.mdx",tags:[],version:"current",frontMatter:{title:"\u521d\u59cb\u72b6\u6001"},sidebar:"tutorialSidebar",previous:{title:"\u5b88\u536b",permalink:"/xstate-zh/docs/guards"},next:{title:"\u6709\u9650\u72b6\u6001",permalink:"/xstate-zh/docs/finite-states"}},o={},d=[{value:"\u6307\u5b9a\u521d\u59cb\u72b6\u6001",id:"\u6307\u5b9a\u521d\u59cb\u72b6\u6001",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{EmbedMachine:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("EmbedMachine",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["\u5f53\u72b6\u6001\u673a\u542f\u52a8\u65f6\uff0c\u5b83\u9996\u5148\u8fdb\u5165",(0,i.jsx)(t.strong,{children:"\u521d\u59cb\u72b6\u6001"}),"\u3002\u4e00\u4e2a\u72b6\u6001\u673a\u53ea\u80fd\u6709\u4e00\u4e2a\u9876\u7ea7\u521d\u59cb\u72b6\u6001\uff1b\u5982\u679c\u6709\u591a\u4e2a\u521d\u59cb\u72b6\u6001\uff0c\u72b6\u6001\u673a\u5c06\u4e0d\u77e5\u9053\u4ece\u54ea\u91cc\u5f00\u59cb\uff01"]}),"\n",(0,i.jsxs)(t.p,{children:["\u5728 XState \u4e2d\uff0c\u521d\u59cb\u72b6\u6001\u7531\u673a\u5668\u914d\u7f6e\u4e2d\u7684 ",(0,i.jsx)(t.code,{children:"initial"})," \u5c5e\u6027\u5b9a\u4e49\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const feedbackMachine = createMachine({\n  id: 'feedback',\n\n  // highlight-start\n  // \u521d\u59cb\u72b6\u6001\n  initial: 'prompt',\n  // highlight-end\n\n  // \u6709\u9650\u72b6\u6001\n  states: {\n    // highlight-next-line\n    prompt: {\n      /* ... */\n    },\n    // ...\n  },\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5728\u6211\u4eec\u7684\u89c6\u9891\u64ad\u653e\u5668\u4e2d\uff0cpaused \u662f\u521d\u59cb\u72b6\u6001\uff0c\u56e0\u4e3a\u89c6\u9891\u64ad\u653e\u5668\u9ed8\u8ba4\u662f\u6682\u505c\u7684\uff0c\u9700\u8981\u7528\u6237\u4ea4\u4e92\u624d\u80fd\u5f00\u59cb\u64ad\u653e\u3002"}),"\n",(0,i.jsx)(t.admonition,{type:"video",children:(0,i.jsxs)(t.p,{children:["\u89c2\u770b\u6211\u4eec\u7684 ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=goCpmgyrjL0&list=PLvWgkXBB3dd4I_l-djWVU2UGPyBgKfnTQ&index=3",children:"\u201c\u4ec0\u4e48\u662f\u521d\u59cb\u72b6\u6001\uff1f\u201d \u89c6\u9891\u5728 YouTube \u4e0a"})," (1\u520617\u79d2)\u3002"]})}),"\n",(0,i.jsx)(n,{name:"\u89c6\u9891\u64ad\u653e\u5668",embedURL:"https://stately.ai/registry/editor/embed/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=3ebc8874-2294-480b-a06e-74845337cd8d"}),"\n",(0,i.jsx)(t.h2,{id:"\u6307\u5b9a\u521d\u59cb\u72b6\u6001",children:"\u6307\u5b9a\u521d\u59cb\u72b6\u6001"}),"\n",(0,i.jsxs)(t.p,{children:["\u901a\u5e38\uff0c\u4e00\u4e2a\u72b6\u6001\u673a\u4f1a\u6709\u591a\u4e2a\u5b83\u53ef\u4ee5\u5904\u4e8e\u7684",(0,i.jsx)(t.a,{href:"/xstate-zh/docs/finite-states",children:"\u6709\u9650\u72b6\u6001"}),"\u3002\u673a\u5668\u914d\u7f6e\u4e2d\u7684 ",(0,i.jsx)(t.code,{children:"initial"})," \u5c5e\u6027\u6307\u5b9a\u4e86\u673a\u5668\u5e94\u8be5\u542f\u52a8\u7684\u521d\u59cb\u72b6\u6001\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/xstate-zh/docs/parent-states",children:"\u7236\u72b6\u6001"}),"\u4e5f\u5fc5\u987b\u5728\u5b83\u4eec\u7684 ",(0,i.jsx)(t.code,{children:"initial"})," \u5c5e\u6027\u4e2d\u6307\u5b9a\u4e00\u4e2a\u521d\u59cb\u72b6\u6001\u3002\u4ee5\u4e0b\u7684 ",(0,i.jsx)(t.code,{children:"trafficLightMachine"})," \u5c06\u4ece ",(0,i.jsx)(t.code,{children:"'green'"})," \u72b6\u6001\u5f00\u59cb\uff0c\u56e0\u4e3a\u5b83\u5728\u673a\u5668\u914d\u7f6e\u7684 ",(0,i.jsx)(t.code,{children:"initial"})," \u5c5e\u6027\u4e2d\u6307\u5b9a\u4e86\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u5f53\u673a\u5668\u5230\u8fbe ",(0,i.jsx)(t.code,{children:"'red'"})," \u7236\u72b6\u6001\u65f6\uff0c\u5b83\u4e5f\u4f1a\u5904\u4e8e ",(0,i.jsx)(t.code,{children:"'red.walk'"})," \u72b6\u6001\uff0c\u56e0\u4e3a\u5b83\u5728 ",(0,i.jsx)(t.code,{children:"'red'"})," \u72b6\u6001\u7684 ",(0,i.jsx)(t.code,{children:"initial"})," \u5c5e\u6027\u4e2d\u6307\u5b9a\u4e86\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst trafficLightMachine = createMachine({\n  // highlight-next-line\n  initial: 'green',\n  states: {\n    green: {/* ... */},\n    yellow: {/* ... */},\n    red: {\n      // highlight-next-line\n      initial: 'walk',\n      states: {\n        walk: {/* ... */},\n        wait: {/* ... */},\n        stop: {/* ... */},\n      }\n    },\n  }\n});\n\nconst trafficLightActor = createActor(trafficLightMachine);\n\ntrafficLightActor.subscribe(state => {\n  console.log(state.value);\n});\n\ntrafficLightActor.start();\n// logs 'green'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const s={},c=i.createContext(s);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);