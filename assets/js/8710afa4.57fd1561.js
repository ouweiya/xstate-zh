"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[606],{67390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=t(85893),r=t(11151);const c={title:"Inspector"},o="Stately Inspector",i={id:"inspector",title:"Inspector",description:"Stately Inspector \u662f\u4e00\u4e2a\u5141\u8bb8\u60a8\u76f4\u89c2\u5730\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u7684\u5de5\u5177\u3002\u5b83\u4e3b\u8981\u9002\u7528\u4e8e\u4f7f\u7528 XState \u7684\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4e0e\u540e\u7aef\u4ee3\u7801\u548c\u4f7f\u7528\u4efb\u4f55\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u7684\u4ee3\u7801\u4e00\u8d77\u4f7f\u7528\u3002",source:"@site/docs/inspector.mdx",sourceDirName:".",slug:"/inspector",permalink:"/xstate-zh/docs/inspector",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/inspector.mdx",tags:[],version:"current",frontMatter:{title:"Inspector"},sidebar:"tutorialSidebar",previous:{title:"Visualizer",permalink:"/xstate-zh/docs/visualizer"},next:{title:"Developer tools",permalink:"/xstate-zh/docs/developer-tools"}},l={},a=[{value:"\u5b89\u88c5 Stately Inspector",id:"\u5b89\u88c5-stately-inspector",level:2},{value:"Inspector \u9009\u9879",id:"inspector-\u9009\u9879",level:2},{value:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6",id:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"stately-inspector",children:"Stately Inspector"}),"\n",(0,s.jsx)(n.p,{children:"Stately Inspector \u662f\u4e00\u4e2a\u5141\u8bb8\u60a8\u76f4\u89c2\u5730\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u7684\u5de5\u5177\u3002\u5b83\u4e3b\u8981\u9002\u7528\u4e8e\u4f7f\u7528 XState \u7684\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4e0e\u540e\u7aef\u4ee3\u7801\u548c\u4f7f\u7528\u4efb\u4f55\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u7684\u4ee3\u7801\u4e00\u8d77\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"new",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/blog/2024-01-15-stately-inspector/",children:"\u9605\u8bfb\u6211\u4eec\u5173\u4e8e Stately Inspector \u7684\u6700\u65b0\u53d1\u5e03\u535a\u5ba2"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5-stately-inspector",children:"\u5b89\u88c5 Stately Inspector"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u4f7f\u7528 Stately Inspector \u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u4ece npm \u5b89\u88c5 ",(0,s.jsx)(n.a,{href:"https://github.com/statelyai/inspect",children:"Stately Inspect"})," via ",(0,s.jsx)(n.code,{children:"@statelyai/inspect"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @statelyai/inspect\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u5c06\u76f8\u5173\u7684 inspector \u521b\u5efa\u5668\u5bfc\u5165\u5230\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u521b\u5efa\u5668\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a inspector\uff08\u4f8b\u5982\uff0c\u6d4f\u89c8\u5668\u6216 WebSocket inspector\uff09\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8fde\u63a5\u5230 XState actors \u548c/\u6216\u624b\u52a8\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6\u5230 Stately Inspector\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createActor } from 'xstate';\n// highlight-next-line\nimport { createBrowserInspector } from '@statelyai/inspect';\nimport { machine } from './machine';\n\n// highlight-next-line\nconst { inspect } = createBrowserInspector();\n\n// ...\n\nconst actor = createActor(machine, {\n  // highlight-next-line\n  inspect,\n  // ... other actor options\n});\n\nactor.start();\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u60a8\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5c06\u4f1a\u6253\u5f00\u4e00\u4e2a\u5305\u542b Inspector \u7684\u65b0\u6807\u7b7e\u9875\u6216\u5f39\u51fa\u7a97\u53e3\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u6d4f\u89c8\u5668 inspector \u65f6\uff0c\u8bf7\u786e\u4fdd\u6d4f\u89c8\u5668\u7684\u5f39\u51fa\u7a97\u53e3\u672a\u88ab\u963b\u6b62\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"inspector-\u9009\u9879",children:"Inspector \u9009\u9879"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u9009\u9879\u4f20\u9012\u7ed9\u6d4f\u89c8\u5668 inspector\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filter"})," - \u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7\u4e00\u4e2a\u68c0\u67e5\u4e8b\u4ef6\u5e76\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u5982\u679c\u8be5\u4e8b\u4ef6\u5e94\u53d1\u9001\u5230 Stately Inspector\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"serialize"})," - \u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7\u4e00\u4e2a\u68c0\u67e5\u4e8b\u4ef6\u5e76\u5141\u8bb8\u60a8\u5728\u53d1\u9001\u5230 Stately Inspector \u4e4b\u524d\u5bf9\u5176\u8fdb\u884c\u5e8f\u5217\u5316\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"autoStart"})," - \u662f\u5426\u81ea\u52a8\u542f\u52a8 inspector\u3002\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"autoStart: false"}),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"inspector.start()"})," \u6765\u542f\u52a8 inspector\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," - \u8981\u6253\u5f00\u7684 Stately Inspector \u7684 URL\u3002\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"https://stately.ai/inspector"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"iframe"})," - \u7528\u4e8e inspector \u7684 ",(0,s.jsx)(n.code,{children:"<iframe>"})," \u5143\u7d20\u3002\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b\u7528\u6cd5:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createBrowserInspector } from '@statelyai/inspect';\n\nconst inspector = createBrowserInspector({\n  filter: (inspEvent) => {\n    if (inspEvent.type === '@xstate.event') {\n      // \u8df3\u8fc7\u9f20\u6807\u62d6\u52a8\u4e8b\u4ef6\n      return inspEvent.event.type !== 'mouse.drag';\n    }\n    return true;\n  },\n  iframe: document.getElementById('inspector-iframe')\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6",children:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@statelyai/inspect"})," \u5305\u5c06\u4f1a\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6\u5230\u8fde\u63a5\u7684 Stately Inspector\u3002\u76ee\u524d\u6709\u4e09\u79cd\u7c7b\u578b\u7684\u4e8b\u4ef6\u4f1a\u88ab\u53d1\u9001\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Actor \u521b\u5efa\u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"Actor \u4e4b\u95f4\u7684\u901a\u4fe1\u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"Actor \u5feb\u7167\u53d8\u5316"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u60a8\u5728 XState \u7684 ",(0,s.jsx)(n.code,{children:"createActor(machine, options)"})," \u51fd\u6570\u4e2d\u4f20\u9012 ",(0,s.jsx)(n.code,{children:"inspect"})," \u9009\u9879\u65f6\uff0c\u5b83\u5c06\u81ea\u52a8\u53d1\u9001\u6240\u6709\u8fd9\u4e9b\u68c0\u67e5\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u5176\u4ed6\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u624b\u52a8\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inspector.actor(actor, snapshot, info)"})," - \u53d1\u9001 actor \u521b\u5efa\u4e8b\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inspector.event(actor, event, info)"})," - \u53d1\u9001 actor \u4e4b\u95f4\u7684\u901a\u4fe1\u4e8b\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inspector.snapshot(actor, snapshot, info)"})," - \u53d1\u9001 actor \u5feb\u7167\u53d8\u5316"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createBrowserInspector } from '@statelyai/inspect';\n\nconst inspector = createBrowserInspector();\n\n// \u60f3\u8c61\u4e00\u4e2a\u5f85\u529e\u4e8b\u9879\u5e94\u7528...\ninspector.actor('todos');\n\n// \u5f53\u521b\u5efa\u4e00\u4e2a\u5f85\u529e\u4e8b\u9879\u65f6\ninspector.actor('todo-1', {\n  context: { status: 'active' }\n});\n\n// \u5f53\u7528\u6237\u5b8c\u6210\u4e00\u4e2a\u5f85\u529e\u4e8b\u9879\u65f6\ninspector.event('todo-1', { type: 'todo.complete' });\n\n// \u5f53\u5f85\u529e\u4e8b\u9879\u53d1\u751f\u53d8\u5316\u65f6\ninspector.snapshot('todo-1', {\n  context: { status: 'completed' }\n});\n\n// \u5f53 todos actor\uff08\u800c\u4e0d\u662f\u7528\u6237\uff09\u5411\u5f85\u529e\u4e8b\u9879\u53d1\u9001\u4e8b\u4ef6\u65f6\ninspector.event('todo-1', { type: 'todo.update' }, {\n  source: 'todos'\n});\n\n// ... etc.\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e09\u79cd\u7c7b\u578b\u7684\u68c0\u67e5\u4e8b\u4ef6\u5305\u542b\u4e86 Stately Inspector \u751f\u6210\u4e24\u79cd\u5b9e\u65f6\u56fe\u8868\u6240\u9700\u7684\u6240\u6709\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u72b6\u6001\u673a\u56fe"}),"\uff08\u5982\u679c\u63d0\u4f9b\u4e86\u72b6\u6001\u673a\u5b9a\u4e49\uff09"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u5e8f\u5217\u56fe"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(67294);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);