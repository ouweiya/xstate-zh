"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[4073],{6841:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var s=a(85893),n=a(11151);const i={title:"\u5c06\u72b6\u6001\u673a\u8fc1\u79fb\u5230 XState v5",description:"\u8fc1\u79fb\u73b0\u6709 XState v4 \u72b6\u6001\u673a\u5230 XState v5 \u7684\u6307\u5357",tags:["stately","studio","\u91cd\u5927\u53d8\u5316","\u8fc1\u79fb","XState v5","\u72b6\u6001\u673a","xstate"],authors:["kevin"],date:new Date("2024-02-02T00:00:00.000Z"),slug:"2024-02-02-migrating-machines-to-xstate-v5",image:"/blog/2024-02-02-migrating-machines-to-xstate-v5.png"},o=void 0,l={permalink:"/xstate-zh/blog/2024-02-02-migrating-machines-to-xstate-v5",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2024-02-02-migrating-machines-to-xstate-v5/index.mdx",source:"@site/blog/2024-02-02-migrating-machines-to-xstate-v5/index.mdx",title:"\u5c06\u72b6\u6001\u673a\u8fc1\u79fb\u5230 XState v5",description:"\u8fc1\u79fb\u73b0\u6709 XState v4 \u72b6\u6001\u673a\u5230 XState v5 \u7684\u6307\u5357",date:"2024-02-02T00:00:00.000Z",formattedDate:"February 2, 2024",tags:[{label:"stately",permalink:"/xstate-zh/blog/tags/stately"},{label:"studio",permalink:"/xstate-zh/blog/tags/studio"},{label:"\u91cd\u5927\u53d8\u5316",permalink:"/xstate-zh/blog/tags/\u91cd\u5927\u53d8\u5316"},{label:"\u8fc1\u79fb",permalink:"/xstate-zh/blog/tags/\u8fc1\u79fb"},{label:"XState v5",permalink:"/xstate-zh/blog/tags/x-state-v-5"},{label:"\u72b6\u6001\u673a",permalink:"/xstate-zh/blog/tags/\u72b6\u6001\u673a"},{label:"xstate",permalink:"/xstate-zh/blog/tags/xstate"}],readingTime:22.12,hasTruncateMarker:!0,authors:[{name:"Kevin Maes",title:"Stately Team",url:"https://github.com/kevinmaes",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/kevin.png",key:"kevin"}],frontMatter:{title:"\u5c06\u72b6\u6001\u673a\u8fc1\u79fb\u5230 XState v5",description:"\u8fc1\u79fb\u73b0\u6709 XState v4 \u72b6\u6001\u673a\u5230 XState v5 \u7684\u6307\u5357",tags:["stately","studio","\u91cd\u5927\u53d8\u5316","\u8fc1\u79fb","XState v5","\u72b6\u6001\u673a","xstate"],authors:["kevin"],date:"2024-02-02T00:00:00.000Z",slug:"2024-02-02-migrating-machines-to-xstate-v5",image:"/blog/2024-02-02-migrating-machines-to-xstate-v5.png"},unlisted:!1,prevItem:{title:"\u4ece GitHub \u7f16\u8f91\u72b6\u6001\u673a\u800c\u65e0\u9700\u89e6\u78b0\u4efb\u4f55\u4ee3\u7801",permalink:"/xstate-zh/blog/2024-02-07-single-file-pr"},nextItem:{title:"Changelog Week 5 2024",permalink:"/xstate-zh/blog/2024-01-30-changelog"}},r={authorsImageUrls:[void 0]},g=[];function c(t){const e={a:"a",p:"p",...(0,n.a)(),...t.components};return(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u6700\u8fd1",(0,s.jsx)(e.a,{href:"/blog/2023-12-01-xstate-v5",children:"\u5ba3\u5e03\u53d1\u5e03 XState v5"}),"! \u5728\u5176\u6d4b\u8bd5\u9636\u6bb5\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a",(0,s.jsx)(e.a,{href:"/docs/migration",children:"\u8fc1\u79fb\u6307\u5357"}),"\uff0c\u4e13\u95e8\u6307\u51fa\u91cd\u5927\u53d8\u5316\uff0c\u5e76\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u6709\u5173 API \u66f4\u6539\u7684\u6301\u7eed\u66f4\u65b0\u3002\u672c\u7bc7\u6587\u7ae0\u662f\u4ece v4 \u8fc1\u79fb\u5230 v5 \u7684\u73b0\u6709 XState \u72b6\u6001\u673a\u7684\u6307\u5357\uff0c\u65e8\u5728\u4f5c\u4e3a\u8fc1\u79fb\u6307\u5357\u7684\u9010\u6b65\u4f34\u4fa3\u3002\u5b83\u8fd8\u4fa7\u91cd\u4e8e\u8fc1\u79fb",(0,s.jsx)(e.a,{href:"/docs/typescript",children:"\u4f7f\u7528 TypeScript \u7684 XState \u72b6\u6001\u673a"}),"\u3002"]})}function m(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>l,a:()=>o});var s=a(67294);const n={},i=s.createContext(n);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);