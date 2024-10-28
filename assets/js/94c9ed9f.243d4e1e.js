"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3398],{1760:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151);const r={title:"\u4ecb\u7ecd Stately Inspector",description:"Stately Inspector \u662f\u4e00\u4e2a\u901a\u7528\u5de5\u5177\uff0c\u4f7f\u60a8\u80fd\u591f\u901a\u8fc7 Stately \u7f16\u8f91\u5668\u7684\u53ef\u89c6\u5316\u529f\u80fd\uff0c\u76f4\u89c2\u5730\u68c0\u67e5\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\uff08\u524d\u7aef\u6216\u540e\u7aef\uff09\u7684\u72b6\u6001\u3002",authors:["david"],tags:["inspector","stately","xstate","actors","devtools"],date:new Date("2024-01-15T00:00:00.000Z"),slug:"2024-01-15-stately-inspector",image:"/blog/2024-01-15-introducing-stately-inspector.png"},c=void 0,o={permalink:"/xstate-zh/blog/2024-01-15-stately-inspector",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2024-01-15-introducing-stately-inspector/index.mdx",source:"@site/blog/2024-01-15-introducing-stately-inspector/index.mdx",title:"\u4ecb\u7ecd Stately Inspector",description:"Stately Inspector \u662f\u4e00\u4e2a\u901a\u7528\u5de5\u5177\uff0c\u4f7f\u60a8\u80fd\u591f\u901a\u8fc7 Stately \u7f16\u8f91\u5668\u7684\u53ef\u89c6\u5316\u529f\u80fd\uff0c\u76f4\u89c2\u5730\u68c0\u67e5\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\uff08\u524d\u7aef\u6216\u540e\u7aef\uff09\u7684\u72b6\u6001\u3002",date:"2024-01-15T00:00:00.000Z",formattedDate:"January 15, 2024",tags:[{label:"inspector",permalink:"/xstate-zh/blog/tags/inspector"},{label:"stately",permalink:"/xstate-zh/blog/tags/stately"},{label:"xstate",permalink:"/xstate-zh/blog/tags/xstate"},{label:"actors",permalink:"/xstate-zh/blog/tags/actors"},{label:"devtools",permalink:"/xstate-zh/blog/tags/devtools"}],readingTime:5.3,hasTruncateMarker:!0,authors:[{name:"David Khourshid",title:"Stately Team",url:"https://github.com/davidkpiano",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/david.png",key:"david"}],frontMatter:{title:"\u4ecb\u7ecd Stately Inspector",description:"Stately Inspector \u662f\u4e00\u4e2a\u901a\u7528\u5de5\u5177\uff0c\u4f7f\u60a8\u80fd\u591f\u901a\u8fc7 Stately \u7f16\u8f91\u5668\u7684\u53ef\u89c6\u5316\u529f\u80fd\uff0c\u76f4\u89c2\u5730\u68c0\u67e5\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\uff08\u524d\u7aef\u6216\u540e\u7aef\uff09\u7684\u72b6\u6001\u3002",authors:["david"],tags:["inspector","stately","xstate","actors","devtools"],date:"2024-01-15T00:00:00.000Z",slug:"2024-01-15-stately-inspector",image:"/blog/2024-01-15-introducing-stately-inspector.png"},unlisted:!1,prevItem:{title:"Stately Office Hours 79",permalink:"/xstate-zh/blog/2024-01-19-office-hours"},nextItem:{title:"XState: Exploring actors live stream",permalink:"/xstate-zh/blog/2024-01-12-xstate-exploring-actors"}},a={authorsImageUrls:[void 0]},l=[{value:"\u4ec0\u4e48\u662f Stately Inspector\uff1f",id:"\u4ec0\u4e48\u662f-stately-inspector",level:2},{value:"\u5b89\u88c5 Stately Inspect",id:"\u5b89\u88c5-stately-inspect",level:2},{value:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6",id:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6",level:2},{value:"\u5373\u5c06\u63a8\u51fa",id:"\u5373\u5c06\u63a8\u51fa",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...t.components},{ThemedImage:n,YouTube:r}=e;return n||h("ThemedImage",!0),r||h("YouTube",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u65e7\u7248 Stately Viz \u6700\u53d7\u6b22\u8fce\u7684\u529f\u80fd\u4e4b\u4e00\u662f\u80fd\u591f\u4f7f\u7528\u4ee5\u524d\u7684 ",(0,s.jsx)(e.code,{children:"@xstate/inspect"})," \u548c Stately Viz \u5de5\u5177\u5b9e\u65f6\u68c0\u67e5\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u6211\u4eec\u5e0c\u671b\u5c06\u6b64\u529f\u80fd\u5f15\u5165\u4e00\u4e2a\u901a\u7528\u5de5\u5177\uff0c\u4f7f\u60a8\u80fd\u591f\u901a\u8fc7 ",(0,s.jsx)(e.a,{href:"https://state.new",children:"Stately \u7684\u7f16\u8f91\u5668"})," \u7684\u53ef\u89c6\u5316\u529f\u80fd\uff0c\u76f4\u89c2\u5730\u68c0\u67e5\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\uff08\u524d\u7aef\u6216\u540e\u7aef\uff09\u7684\u72b6\u6001\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6784\u5efa\u4e86 Stately Inspector\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f-stately-inspector",children:"\u4ec0\u4e48\u662f Stately Inspector\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"Stately Inspector \u662f\u4e00\u4e2a\u5de5\u5177\uff0c\u5141\u8bb8\u60a8\u76f4\u89c2\u5730\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u3002\u5b83\u4e3b\u8981\u9002\u7528\u4e8e\u4f7f\u7528 XState \u7684\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u4e5f\u53ef\u4ee5\u7528\u4e8e\u540e\u7aef\u4ee3\u7801\u548c\u4f7f\u7528\u4efb\u4f55\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u7684\u4ee3\u7801\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.youtube.com/live/-Jf9N-EaUx0?feature=shared&t=408",children:"\u5728\u6211\u4eec\u6700\u8fd1\u7684\u529e\u516c\u65f6\u95f4\u89c2\u770b Stately Inspector \u7684\u6f14\u793a"}),":"]}),"\n",(0,s.jsx)(r,{id:"-Jf9N-EaUx0"}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88c5-stately-inspect",children:"\u5b89\u88c5 Stately Inspect"}),"\n",(0,s.jsxs)(e.p,{children:["\u8981\u4f7f\u7528 Stately Inspector \u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u4ece npm \u5b89\u88c5 ",(0,s.jsx)(e.a,{href:"https://github.com/statelyai/inspect",children:"Stately Inspect"})," via ",(0,s.jsx)(e.code,{children:"@statelyai/inspect"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install @statelyai/inspect\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u540e\uff0c\u5c06\u76f8\u5173\u7684 inspector \u521b\u5efa\u5668\u5bfc\u5165\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u521b\u5efa\u5668\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a inspector\uff08\u4f8b\u5982\uff0c\u6d4f\u89c8\u5668\u6216 WebSocket inspector\uff09\uff0c\u4ee5\u8fde\u63a5\u5230 XState actors \u548c/\u6216\u624b\u52a8\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6\u5230 Stately Inspector\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { createActor } from 'xstate';\n// highlight-next-line\nimport { createBrowserInspector } from '@statelyai/inspect';\nimport { machine } from './machine';\n\n// highlight-next-line\nconst inspector = createBrowserInspector();\n\n// ...\n\nconst actor = createActor(machine, {\n  // highlight-next-line\n  inspect: inspector.inspect,\n  // ... other actor options\n});\n\nactor.start();\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u73b0\u5728\uff0c\u5f53\u60a8\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u60a8\u5e94\u8be5\u4f1a\u5728\u6d4f\u89c8\u5668\u4e2d\u770b\u5230\u4e00\u4e2a\u65b0\u6807\u7b7e\u9875\u6216\u5f39\u51fa\u7a97\u53e3\uff0c\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(n,{alt:"Stately Inspector \u89c6\u56fe\uff0c\u663e\u793a\u62ab\u8428\u8ba2\u8d2d\u8fc7\u7a0b\u7684\u72b6\u6001\u673a\u3002\u5f53\u524d\u72b6\u6001\u548c\u53ef\u7528\u4e8b\u4ef6\u4ee5\u7eff\u8272\u7a81\u51fa\u663e\u793a\u3002",sources:{light:"/blog/2024-01-15-introducing-stately-inspector/inspector.png",dark:"/blog/2024-01-15-introducing-stately-inspector/inspector-dm.png"}})}),"\n",(0,s.jsx)(e.h2,{id:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6",children:"\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"@statelyai/inspect"})," \u5305\u5c06\u68c0\u67e5\u4e8b\u4ef6\u53d1\u9001\u5230\u8fde\u63a5\u7684 Stately Inspector\u3002\u76ee\u524d\u53d1\u9001\u4e09\u79cd\u7c7b\u578b\u7684\u4e8b\u4ef6\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Actor \u521b\u5efa\u4e8b\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"Actor \u95f4\u901a\u4fe1\u4e8b\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"Actor \u5feb\u7167\u66f4\u6539"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53\u60a8\u5c06 ",(0,s.jsx)(e.code,{children:"inspect"})," \u9009\u9879\u4f20\u9012\u7ed9 XState \u7684 ",(0,s.jsx)(e.code,{children:"createActor(machine, options)"})," \u51fd\u6570\u4e2d\u7684 actor \u9009\u9879\u65f6\uff0c\u5b83\u5c06\u81ea\u52a8\u53d1\u9001\u6240\u6709\u8fd9\u4e9b\u68c0\u67e5\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u5176\u4ed6\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u7684\u4f7f\u7528\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u624b\u52a8\u53d1\u9001\u68c0\u67e5\u4e8b\u4ef6\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"inspector.actor(actor, snapshot, info)"})," - \u53d1\u9001 actor \u521b\u5efa\u4e8b\u4ef6"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"inspector.event(actor, event, info)"})," - \u53d1\u9001 actor \u95f4\u901a\u4fe1\u4e8b\u4ef6"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"inspector.snapshot(actor, snapshot, info)"})," - \u53d1\u9001 actor \u5feb\u7167\u66f4\u6539"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { createBrowserInspector } from '@statelyai/inspect';\n\nconst inspector = createBrowserInspector();\n\n// \u60f3\u8c61\u4e00\u4e2a\u5f85\u529e\u4e8b\u9879\u5e94\u7528...\ninspector.actor('todos');\n\n// \u5f53\u521b\u5efa\u4e00\u4e2a\u5f85\u529e\u4e8b\u9879\u65f6\ninspector.actor('todo-1', {\n  context: { status: 'active' }\n});\n\n// \u5f53\u7528\u6237\u5b8c\u6210\u4e00\u4e2a\u5f85\u529e\u4e8b\u9879\u65f6\ninspector.event('todo-1', { type: 'todo.complete' });\n\n// \u5f53\u5f85\u529e\u4e8b\u9879\u66f4\u6539\u65f6\ninspector.snapshot('todo-1', {\n  context: { status: 'completed' }\n});\n\n// \u5f53 todos actor\uff08\u800c\u4e0d\u662f\u7528\u6237\uff09\u5411\u5f85\u529e\u4e8b\u9879\u53d1\u9001\u4e8b\u4ef6\u65f6\ninspector.event('todo-1', { type: 'todo.update' }, {\n  source: 'todos'\n});\n\n// ... \u7b49\u7b49\u3002\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0a\u662f\u4e00\u4e2a\u4eba\u4e3a\u7684\u793a\u4f8b\uff0c\u6f14\u793a\u4e86\u5982\u4f55\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u4efb\u4f55\u90e8\u5206\u968f\u65f6\u63d2\u5165\u68c0\u67e5\u4e8b\u4ef6\u3002\u8fd9\u4e09\u79cd\u7c7b\u578b\u7684\u68c0\u67e5\u4e8b\u4ef6\u5305\u542b Stately Inspector \u81ea\u52a8\u751f\u6210\u4e24\u79cd\u5b9e\u65f6\u56fe\u6240\u9700\u7684\u6240\u6709\u5185\u5bb9\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u72b6\u6001\u673a\u56fe"}),"\uff08\u5982\u679c\u63d0\u4f9b\u4e86\u72b6\u6001\u673a\u5b9a\u4e49\uff09"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u5e8f\u5217\u56fe"})}),"\n"]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(n,{alt:"Stately Inspector \u89c6\u56fe\uff0c\u663e\u793a\u62ab\u8428\u8ba2\u8d2d\u8fc7\u7a0b\u7684\u72b6\u6001\u673a\u548c\u5e8f\u5217\u56fe\u5e76\u6392\u3002",sources:{light:"/blog/2024-01-15-introducing-stately-inspector/machine-and-sequence-diagram.png",dark:"/blog/2024-01-15-introducing-stately-inspector/machine-and-sequence-diagram-dm.png"}})}),"\n",(0,s.jsx)(e.h2,{id:"\u5373\u5c06\u63a8\u51fa",children:"\u5373\u5c06\u63a8\u51fa"}),"\n",(0,s.jsxs)(e.p,{children:["Stately Inspector \u7684\u76ee\u6807\u662f\u6210\u4e3a\u4e00\u4e2a\u901a\u7528\u5de5\u5177\uff0c\u4f7f\u60a8\u80fd\u591f\u76f4\u89c2\u5730\u68c0\u67e5\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\uff08\u524d\u7aef\u6216\u540e\u7aef\uff09\u7684\u72b6\u6001\u3002\u76ee\u524d\uff0c\u5b83\u9488\u5bf9 XState\uff08\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"inspector.inspect"}),"\uff09\u6216\u975e XState\uff08\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"inspector.actor(...)"}),"\u3001",(0,s.jsx)(e.code,{children:"inspector.event(...)"}),"\u3001",(0,s.jsx)(e.code,{children:"inspector.snapshot(...)"}),"\uff09\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u5728\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8fdb\u884c\u4e86\u4f18\u5316\u3002\u6211\u4eec\u5e0c\u671b\u542c\u53d6\u60a8\u7684\u53cd\u9988\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u4f18\u5148\u8003\u8651\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/387",children:"WebSocket inspector \u521b\u5efa\u5668"})}),"\uff1a\u8fdc\u7a0b\u68c0\u67e5\u524d\u7aef\u548c/\u6216\u540e\u7aef\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/388",children:"\u53cc\u5411\u901a\u4fe1"})}),"\uff1a\u4ece Stately Inspector \u5411\u60a8\u7684\u5b9e\u65f6\u5e94\u7528\u7a0b\u5e8f\u53d1\u9001\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/389",children:"\u6d41\u884c\u5e93\u7684\u4e2d\u95f4\u4ef6"})}),"\uff1a\u4f8b\u5982\uff0cRedux\u3001MobX\u3001Zustand \u7b49\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/390",children:"\u4e0e Stately Studio \u540c\u6b65"})}),"\uff1a\u4f7f\u7528\u6765\u81ea Stately Studio \u7684\u4fe1\u606f\uff08\u5e03\u5c40\u3001\u989c\u8272\u3001\u8d44\u4ea7\u3001\u6ce8\u91ca\u7b49\uff09\u4e30\u5bcc\u68c0\u67e5\u7684\u673a\u5668\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"https://github.com/statelyai/feedback/issues/391",children:"\u5206\u6790"})}),"\uff1a\u67e5\u770b\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6d41\u7a0b\u7684\u5b9e\u65f6\u5206\u6790\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://discord.stately.ai",children:"\u5728\u6211\u4eec\u7684 Discord \u670d\u52a1\u5668\u4e0a\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u60f3\u6cd5"})," \u6216 ",(0,s.jsx)(e.a,{href:"https://feedback.stately.ai",children:"\u5728\u6211\u4eec\u7684 GitHub \u677f\u4e0a\u63d0\u4ea4\u529f\u80fd\u8bf7\u6c42"}),"\u3002\u60f3\u6210\u4e3a\u7b2c\u4e00\u4e2a\u4e86\u89e3\u5373\u5c06\u63a8\u51fa\u7684\u529f\u80fd\u7684\u4eba\u5417\uff1f\u8ba2\u9605\u6211\u4eec\u7684 ",(0,s.jsx)(e.a,{href:"https://www.youtube.com/@Statelyai",children:"YouTube \u9891\u9053"})," \u6216 ",(0,s.jsx)(e.a,{href:"https://www.linkedin.com/company/statelyai/",children:"\u5728 LinkedIn \u4e0a\u5173\u6ce8\u6211\u4eec"}),"\uff0c\u4ee5\u514d\u9519\u8fc7\u6211\u4eec\u7684\u4e0b\u4e00\u6b21\u529e\u516c\u65f6\u95f4\u76f4\u64ad\u3002"]})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}function h(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>c});var s=n(67294);const i={},r=s.createContext(i);function c(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);