"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5341],{77799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=n(85893),r=n(11151),a=n(65099),l=n(85162);const i={title:"Stately Sky \u5165\u95e8\u6307\u5357"},c="Stately Sky \u5165\u95e8\u6307\u5357 \ud83c\udf24\ufe0f",o={id:"stately-sky-getting-started",title:"Stately Sky \u5165\u95e8\u6307\u5357",description:"\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 XState\u3001Vite \u548c React \u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684\u4ea4\u901a\u706f\u72b6\u6001\u673a\u5de5\u4f5c\u6d41\u3002",source:"@site/docs/stately-sky-getting-started.mdx",sourceDirName:".",slug:"/stately-sky-getting-started",permalink:"/xstate-zh/docs/stately-sky-getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/stately-sky-getting-started.mdx",tags:[],version:"current",frontMatter:{title:"Stately Sky \u5165\u95e8\u6307\u5357"},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee",permalink:"/xstate-zh/docs/projects"},next:{title:"Stately Sky \u5165\u95e8\u6307\u5357",permalink:"/xstate-zh/docs/stately-sky-getting-started"}},d={},h=[{value:"\u60a8\u9700\u8981\u51c6\u5907\u7684",id:"\u60a8\u9700\u8981\u51c6\u5907\u7684",level:2},{value:"\u5165\u95e8\u89c6\u9891",id:"\u5165\u95e8\u89c6\u9891",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u4f7f\u7528 Stately \u521b\u5efa\u4e00\u4e2a\u72b6\u6001\u673a",id:"\u7b2c\u4e00\u6b65\u4f7f\u7528-stately-\u521b\u5efa\u4e00\u4e2a\u72b6\u6001\u673a",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa API \u5bc6\u94a5",id:"\u7b2c\u4e8c\u6b65\u521b\u5efa-api-\u5bc6\u94a5",level:2},{value:"\u7b2c\u4e09\u6b65\uff1a\u5c06\u72b6\u6001\u673a\u90e8\u7f72\u5230 Sky",id:"\u7b2c\u4e09\u6b65\u5c06\u72b6\u6001\u673a\u90e8\u7f72\u5230-sky",level:2},{value:"\u7b2c\u56db\u6b65\uff1a\u5728\u542f\u52a8\u9879\u76ee\u4e2d\u6dfb\u52a0 actor",id:"\u7b2c\u56db\u6b65\u5728\u542f\u52a8\u9879\u76ee\u4e2d\u6dfb\u52a0-actor",level:2},{value:"\u7b2c\u4e94\u6b65\uff1a\u4ece Sky \u83b7\u53d6\u914d\u7f6e",id:"\u7b2c\u4e94\u6b65\u4ece-sky-\u83b7\u53d6\u914d\u7f6e",level:2},{value:"\u5b8c\u6210",id:"\u5b8c\u6210",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{EmbedMachine:i,YouTube:c}=t;return i||x("EmbedMachine",!0),c||x("YouTube",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"stately-sky-\u5165\u95e8\u6307\u5357-\ufe0f",children:["Stately Sky \u5165\u95e8\u6307\u5357 ",(0,s.jsx)(t.span,{role:"img","aria-label":"sun behind small cloud",children:"\ud83c\udf24\ufe0f"})]}),"\n",(0,s.jsxs)(t.p,{children:["\u672c\u6307\u5357\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/xstate",children:"XState"}),"\u3001",(0,s.jsx)(t.a,{href:"https://vitejs.dev/",children:"Vite"})," \u548c ",(0,s.jsx)(t.a,{href:"https://reactjs.org/",children:"React"})," \u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684\u4ea4\u901a\u706f\u72b6\u6001\u673a\u5de5\u4f5c\u6d41\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u8bf7\u6ce8\u610f\uff0cSky \u76ee\u524d\u5904\u4e8e\u6d4b\u8bd5\u9636\u6bb5\uff0c\u53d8\u5316\u8f83\u5feb\u3002"})}),"\n",(0,s.jsx)(t.h2,{id:"\u60a8\u9700\u8981\u51c6\u5907\u7684",children:"\u60a8\u9700\u8981\u51c6\u5907\u7684"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4e00\u4e2a ",(0,s.jsx)(t.a,{href:"https://stately.ai",children:"Stately"})," \u8d26\u6237\uff0c\u5e76\u62e5\u6709 ",(0,s.jsx)(t.a,{href:"https://stately.ai/pricing",children:"Pro\u3001\u56e2\u961f\u6216\u4f01\u4e1a\u8ba2\u9605"}),"\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u6211\u4eec\u7684 ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/sky-starter-app",children:"Stately Sky \u5165\u95e8\u9879\u76ee"}),"\u3002\u5c06\u4ed3\u5e93\u514b\u9686\u5230\u60a8\u7684\u672c\u5730\u673a\u5668\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"studio",children:(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u7684\u9ad8\u7ea7\u7528\u6237\u5728\u6d4b\u8bd5\u9636\u6bb5\u53ef\u4ee5\u65e0\u9650\u5236\u4f7f\u7528 Stately Sky\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u514d\u8d39\u8bd5\u7528\u4f53\u9a8c Stately Studio \u7684\u9ad8\u7ea7\u8ba1\u5212\u3002",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/studio-pro-plan",children:"\u67e5\u770b\u6211\u4eec\u7684 Pro \u8ba1\u5212\u529f\u80fd"}),"\u3001",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/studio-team-plan",children:"\u56e2\u961f\u8ba1\u5212"}),"\u3001",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/studio-enterprise-plan",children:"\u4f01\u4e1a\u8ba1\u5212"})," \u6216 ",(0,s.jsx)(t.a,{href:"https://stately.ai/registry/billing",children:"\u5347\u7ea7\u60a8\u7684\u73b0\u6709\u8ba1\u5212"}),"\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"\u5165\u95e8\u89c6\u9891",children:"\u5165\u95e8\u89c6\u9891"}),"\n",(0,s.jsx)(c,{id:"JJHC0UyGsrQ"}),"\n",(0,s.jsx)(t.h2,{id:"\u7b2c\u4e00\u6b65\u4f7f\u7528-stately-\u521b\u5efa\u4e00\u4e2a\u72b6\u6001\u673a",children:"\u7b2c\u4e00\u6b65\uff1a\u4f7f\u7528 Stately \u521b\u5efa\u4e00\u4e2a\u72b6\u6001\u673a"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728 ",(0,s.jsx)(t.a,{href:"https://stately.ai/editor",children:"Stately \u7f16\u8f91\u5668"})," \u4e2d\u521b\u5efa\u4e00\u4e2a\u9879\u76ee\u5e76\u7f16\u5199\u60a8\u60f3\u8981\u7684\u72b6\u6001\u548c\u8f6c\u6362\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u4ea4\u901a\u706f\u72b6\u6001\u673a\uff0c\u5305\u542b\u4e09\u4e2a\u72b6\u6001\uff1a",(0,s.jsx)(t.code,{children:"green"}),"\u3001",(0,s.jsx)(t.code,{children:"yellow"})," \u548c ",(0,s.jsx)(t.code,{children:"red"}),"\u3002\u60a8\u53ef\u4ee5\u5206\u53c9 ",(0,s.jsx)(t.a,{href:"https://stately.ai/registry/editor/eb3e89f5-5936-439f-8254-2f6ea4303659?machineId=15fd8071-b80c-4a6f-b9f5-60b6cf578ee5",children:"\u6211\u4eec\u7684\u4ea4\u901a\u706f\u793a\u4f8b"})," \u8fdb\u884c\u6d4b\u8bd5\u3002\u67e5\u770b ",(0,s.jsx)(t.a,{href:"https://sky-starter.stately.ai/?page=trafficlight",children:"\u8fd9\u4e2a\u4ea4\u901a\u706f\u72b6\u6001\u673a\u7684\u90e8\u7f72\u7248\u672c"}),"\u3002"]}),"\n",(0,s.jsx)(i,{embedURL:"https://stately.ai/registry/editor/embed/eb3e89f5-5936-439f-8254-2f6ea4303659?machineId=15fd8071-b80c-4a6f-b9f5-60b6cf578ee5",name:"Traffic light"}),"\n",(0,s.jsx)(t.admonition,{type:"xstate",children:(0,s.jsxs)(t.p,{children:["Sky \u4ec5\u652f\u6301 ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/xstate",children:"XState"})," V5 \u72b6\u6001\u673a\u3002",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/migration",children:"XState V5 \u7684\u53d8\u5316"})," \u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\uff0c\u5e76\u66f4\u8d34\u8fd1 ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/actor-model",children:"Actor \u6a21\u578b"}),"\uff0c\u4f7f Sky \u80fd\u591f\u53ef\u9760\u5730\u90e8\u7f72\u80fd\u591f\u6709\u6548\u901a\u4fe1\u5176\u72b6\u6001\u7684\u72b6\u6001\u673a\u3002"]})}),"\n",(0,s.jsxs)(t.admonition,{type:"typescript",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"XState v5 \u9700\u8981 TypeScript \u7248\u672c 5.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"})}),(0,s.jsxs)(t.p,{children:["\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u6548\u679c\uff0c\u8bf7\u4f7f\u7528\u6700\u65b0\u7684 TypeScript \u7248\u672c\u3002",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/typescript",children:"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e XState \u548c TypeScript \u7684\u4fe1\u606f"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u7b2c\u4e8c\u6b65\u521b\u5efa-api-\u5bc6\u94a5",children:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa API \u5bc6\u94a5"}),"\n",(0,s.jsx)(t.p,{children:"\u521b\u5efa\u72b6\u6001\u673a\u540e\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a API \u5bc6\u94a5\u4ee5\u5c06\u5176\u90e8\u7f72\u5230 Sky\u3002"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4f7f\u7528\u7f16\u8f91\u5668\u53f3\u4e0a\u89d2\u7684 ",(0,s.jsx)(t.strong,{children:"Deploy"})," \u6309\u94ae\u6253\u5f00 Stately Sky \u9009\u9879\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(t.strong,{children:"Create API Key"})," \u6309\u94ae\u751f\u6210\u4e00\u4e2a API \u5bc6\u94a5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stately Sky \u6a21\u6001\u6846\u663e\u793a\u5c1a\u672a\u521b\u5efa API \u5bc6\u94a5\u3002\u6709\u4e00\u4e2a\u6309\u94ae\u53ef\u4ee5\u521b\u5efa API \u5bc6\u94a5\u3002",src:n(837).Z+"",width:"2000",height:"1129"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"\u786e\u4fdd\u590d\u5236\u8be5 API \u5bc6\u94a5\u5e76\u5c06\u5176\u5b89\u5168\u4fdd\u5b58\u3002\u60a8\u7a0d\u540e\u4f1a\u9700\u8981\u5b83\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u9875\u9762\u5e94\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stately Sky \u6a21\u6001\u6846\u663e\u793a API \u5bc6\u94a5\u5728\u4e00\u4e2a\u8f93\u5165\u6846\u4e2d\uff0c\u9690\u85cf\u5728\u5bc6\u7801\u70b9\u540e\u9762\u3002\u6709\u9009\u9879\u53ef\u4ee5\u91cd\u65b0\u751f\u6210\u3001\u5220\u9664\u3001\u663e\u793a\u6216\u590d\u5236 API \u5bc6\u94a5\u5230\u526a\u8d34\u677f\u3002",src:n(71079).Z+"",width:"2000",height:"1129"})}),"\n",(0,s.jsx)(t.h2,{id:"\u7b2c\u4e09\u6b65\u5c06\u72b6\u6001\u673a\u90e8\u7f72\u5230-sky",children:"\u7b2c\u4e09\u6b65\uff1a\u5c06\u72b6\u6001\u673a\u90e8\u7f72\u5230 Sky"}),"\n",(0,s.jsx)(t.p,{children:"\u751f\u6210 API \u5bc6\u94a5\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u72b6\u6001\u673a\u4f5c\u4e3a\u5de5\u4f5c\u6d41\u90e8\u7f72\u5230 Sky\u3002"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4f7f\u7528 ",(0,s.jsxs)(t.strong,{children:["Deploy to Sky ",(0,s.jsx)(t.span,{role:"img","aria-label":"sun behind small cloud",children:"\ud83c\udf24\ufe0f"})]})," \u6309\u94ae\u5f00\u59cb\u90e8\u7f72\u8fc7\u7a0b\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5f53\u5de5\u4f5c\u6d41\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5b83\u5c06\u5217\u5728 ",(0,s.jsx)(t.strong,{children:"Existing deploys"})," \u4e0b\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(t.strong,{children:"Copy URL"})," \u5c06 URL \u590d\u5236\u5230\u526a\u8d34\u677f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u60a8\u9700\u8981\u5f15\u7528\u542f\u52a8\u9879\u76ee\u4e2d\u7684\u5de5\u4f5c\u6d41 URL\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Stately Sky \u6a21\u6001\u6846\u663e\u793a\u4ea4\u901a\u706f\u5de5\u4f5c\u6d41\u5217\u5728\u73b0\u6709\u90e8\u7f72\u4e0b\u3002\u5de5\u4f5c\u6d41\u6709\u81ea\u5df1\u7684 URL\uff0c\u5e76\u6709\u9009\u9879\u53ef\u4ee5\u590d\u5236 URL \u6216\u5220\u9664\u3002",src:n(56332).Z+"",width:"2000",height:"1129"})}),"\n",(0,s.jsx)(t.h2,{id:"\u7b2c\u56db\u6b65\u5728\u542f\u52a8\u9879\u76ee\u4e2d\u6dfb\u52a0-actor",children:"\u7b2c\u56db\u6b65\uff1a\u5728\u542f\u52a8\u9879\u76ee\u4e2d\u6dfb\u52a0 actor"}),"\n",(0,s.jsx)(t.p,{children:"\u6dfb\u52a0 API \u5bc6\u94a5\u540e\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a actor\u3002"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5728\u542f\u52a8\u9879\u76ee\u7684 ",(0,s.jsx)(t.code,{children:"src"})," \u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u3002\u6211\u4eec\u5c06\u5176\u547d\u540d\u4e3a ",(0,s.jsx)(t.code,{children:"trafficLightActor.ts"}),"\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5728\u65b0\u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165 ",(0,s.jsx)(t.code,{children:"actorFromStately"})," \u51fd\u6570\uff0c\u5e76\u4f7f\u7528\u63d0\u4f9b\u7684 URL \u548c\u60a8\u81ea\u5df1\u7684\u4f1a\u8bdd ID \u521d\u59cb\u5316 actor\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { actorFromStately } from '@statelyai/sky';\n\nconst actor = actorFromStately({\n  apiKey: '\u5728\u6b64\u7c98\u8d34\u60a8\u7684 API \u5bc6\u94a5',\n  url: '\u5728\u6b64\u7c98\u8d34\u60a8\u7684 Sky URL',\n  sessionId: '\u60a8\u7684\u4f1a\u8bdd ID',\n});\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSky \u662f\u591a\u4eba\u6a21\u5f0f\u3002\n\u4f1a\u8bdd ID \u7528\u4e8e\u5206\u7247\u591a\u4eba\u4f1a\u8bdd\u3002\u6bcf\u4e2a actor \u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u4f1a\u8bdd ID\u3002"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4f7f\u7528\u5171\u4eab\u7684\u4f1a\u8bdd ID \u5141\u8bb8\u591a\u4e2a\u7528\u6237\u5f15\u7528\u540c\u4e00\u4e2a actor\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u5982\u679c\u60a8\u5e0c\u671b\u7528\u6237\u9694\u79bb\uff0c\u8bf7\u4e3a\u6bcf\u4e2a\u7528\u6237\u4f7f\u7528\u552f\u4e00\u7684\u4f1a\u8bdd ID\u3002"}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u7b2c\u4e94\u6b65\u4ece-sky-\u83b7\u53d6\u914d\u7f6e",children:"\u7b2c\u4e94\u6b65\uff1a\u4ece Sky \u83b7\u53d6\u914d\u7f6e"}),"\n",(0,s.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86 actor\uff0c\u6211\u4eec\u9700\u8981\u4ece Sky \u83b7\u53d6\u914d\u7f6e\u3002\u8fd9\u6837\u505a\u5c06\u4e0b\u8f7d\u5e76\u751f\u6210\u6211\u4eec\u7684\u4ed3\u5e93\u4e2d\u7684\u72b6\u6001\u673a\u914d\u7f6e\u6587\u4ef6\uff0c\u4f7f\u6211\u4eec\u5728\u4e0e\u8fd0\u884c\u7684 actor \u4ea4\u4e92\u65f6\u5177\u6709\u7c7b\u578b\u5b89\u5168\u6027\uff01"}),"\n",(0,s.jsxs)(t.p,{children:["\u8981\u83b7\u53d6\u914d\u7f6e\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/developer-tools#xstate-cli-command-line-interface",children:"XState CLI \u5de5\u5177"})," \u548c ",(0,s.jsx)(t.code,{children:"package.json"})," \u4e2d\u5df2\u6709\u7684 ",(0,s.jsx)(t.code,{children:"sky"})," \u811a\u672c\u3002\u6b64\u811a\u672c\u5728 ",(0,s.jsx)(t.code,{children:"src"})," \u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u4e0a\u8fd0\u884c\u547d\u4ee4\uff0c\u4ee5\u67e5\u627e\u4e0e\u4efb\u4f55\u5df2\u521d\u59cb\u5316\u7684 actor \u5173\u8054\u7684\u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"package.json",src:n(28454).Z+"",width:"2564",height:"1830"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u5305\u7ba1\u7406\u5668\u8fd0\u884c ",(0,s.jsx)(t.code,{children:"sky"})," \u547d\u4ee4\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run sky\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn sky\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm run sky\n"})})})]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\u4e00\u65e6 ",(0,s.jsx)(t.code,{children:"sky"})," \u547d\u4ee4\u5b8c\u6210\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4e00\u4e2a\u5e26\u6709\u66f4\u65b0\u5bfc\u5165\u7684\u7b2c\u4e8c\u4e2a ",(0,s.jsx)(t.code,{children:"skyConfig"})," \u53c2\u6570\u4f20\u9012\u7ed9 ",(0,s.jsx)(t.code,{children:"actorFromStately"})," \u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5728\u60a8\u7684 ",(0,s.jsx)(t.code,{children:"src"})," \u76ee\u5f55\u4e2d\uff0c\u4e00\u4e2a\u65b0\u7684 TypeScript \u6587\u4ef6\uff0c\u4ee5 Studio \u4e2d\u7684 actor \u547d\u540d\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b83\u662f ",(0,s.jsx)(t.code,{children:"trafficLightActor.sky.ts"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u60a8\u4f1a\u5728 ",(0,s.jsx)(t.code,{children:"sky.ts"})," \u6587\u4ef6\u4e2d\u770b\u5230\u4e00\u4e2a\u8b66\u544a\uff0c\u63d0\u793a\u8be5\u6587\u4ef6\u662f\u751f\u6210\u7684\u3002\u60a8\u4e0d\u5e94\u624b\u52a8\u7f16\u8f91\u8fd9\u4e9b\u6587\u4ef6\uff0c\u56e0\u4e3a\u4efb\u4f55\u672c\u5730\u66f4\u6539\u90fd\u4e0d\u4f1a\u53cd\u6620\u5728 Sky \u4e2d\u8fd0\u884c\u7684\u5185\u5bb9\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd0\u884c ",(0,s.jsx)(t.code,{children:"xstate sky"})," \u53ea\u4f1a\u5f71\u54cd\u5c1a\u672a\u83b7\u53d6\u7684\u6587\u4ef6\u3002\u5982\u679c\u60a8\u5728 Studio \u4e2d\u5bf9\u72b6\u6001\u673a\u8fdb\u884c\u4e86\u66f4\u6539\uff0c\u60a8\u9700\u8981\u5220\u9664\u751f\u6210\u7684\u6587\u4ef6 ",(0,s.jsx)(t.code,{children:"yourFile.sky.ts"})," \u5e76\u518d\u6b21\u8fd0\u884c\u547d\u4ee4\u3002\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,s.jsx)(t.code,{children:"xstate sky --refetch"})," \u5f3a\u5236\u91cd\u65b0\u83b7\u53d6\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["\u5c06\u751f\u6210\u7684 ",(0,s.jsx)(t.code,{children:"sky.ts"})," \u6587\u4ef6\u6dfb\u52a0\u5230\u6e90\u4ee3\u7801\u7ba1\u7406\u4e2d\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"\u5b8c\u6210",children:"\u5b8c\u6210"}),"\n",(0,s.jsxs)(t.p,{children:["\u5c31\u662f\u8fd9\u6837\uff01\u60a8\u73b0\u5728\u53ef\u4ee5\u50cf\u4e0e\u672c\u5730 actor \u4e00\u6837\u4e0e\u8fd0\u884c\u7684 actor \u4ea4\u4e92\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"send()"})," \u51fd\u6570\u53d1\u9001\u4e8b\u4ef6\u3002Sky \u4ecd\u5904\u4e8e\u65e9\u671f\u9636\u6bb5\uff0c\u56e0\u6b64\u6709\u4e00\u4e9b\u9650\u5236\u548c\u9700\u8981\u8bb0\u4f4f\u7684\u4e8b\u9879\u3002\u5177\u4f53\u6765\u8bf4\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4ec5\u652f\u6301 XState V5 \u72b6\u6001\u673a\u3002"}),"\n",(0,s.jsxs)(t.li,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f React Native\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/sky/issues/6#issuecomment-1766967479",children:"\u6b64\u8bc4\u8bba"})," \u4ee5\u89e3\u51b3\u95ee\u9898\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var s=n(90512);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,l),hidden:n,children:t})}},70989:(e,t,n)=>{n.d(t,{Y:()=>p});var s=n(67294),r=n(16550),a=n(20469),l=n(91980),i=n(67392),c=n(50012);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??o(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[p,x]=u({queryString:n,groupId:r}),[y,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=p??y;return h({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),x(e),j(e)}),[x,j,l]),tabValues:l}}},65099:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(67294),r=n(90512),a=n(12466),l=n(70989),i=n(72389);const c={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var o=n(85893);function d(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),r=i[n].value;r!==s&&(h(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:p,onClick:u,...a,className:(0,r.Z)("tabs__item",c.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"padding-top--s"}):null}return(0,o.jsx)("div",{className:"padding-top--s",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function u(e){const t=(0,l.Y)(e);return(0,o.jsxs)("div",{className:(0,r.Z)("tabs-container",c.tabList),children:[(0,o.jsx)(d,{...e,...t}),(0,o.jsx)(h,{...e,...t})]})}function p(e){const t=(0,i.Z)();return(0,o.jsx)(u,{...e},String(t))}},28454:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/code-sky-cmd-0ec7ac0233adadf2f0a46a599fc0fc75.png"},71079:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/editor-api-key-45af39a2dc4baf06596d28092b4c873c.png"},56332:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/editor-deployed-workflow-4bfaf5c8dcae41207e634b441c63fdc3.png"},837:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/editor-no-api-key-48d8abc6a96d5f65f19d5d5abb6364b3.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var s=n(67294);const r={},a=s.createContext(r);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);