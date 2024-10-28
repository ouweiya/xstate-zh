"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3945],{90872:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(85893),s=a(11151);const n={title:"\u4ec0\u4e48\u662fActor\u6a21\u578b\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528\u5b83\uff1f",description:"\u5728Stately\uff0cActor\u6a21\u578b\u662f\u6211\u4eec\u6700\u559c\u6b22\u7684\u7f16\u7a0b\u8303\u5f0f\u4e4b\u4e00\uff0c\u6211\u4eec\u8ba4\u4e3a\u8fd9\u662f\u6709\u5145\u5206\u7406\u7531\u7684\uff01",tags:["actor model","modeling","statechart","tutorials","state machine","typescript","blog"],authors:["gavin"],slug:"what-is-the-actor-model",image:"/blog/2023-5-30-what-is-the-actor-model-and-when-should-i-use-it.png",date:new Date("2023-05-30T00:00:00.000Z")},r=void 0,i={permalink:"/xstate-zh/blog/what-is-the-actor-model",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2023-5-30-what-is-the-actor-model-and-when-should-i-use-it/index.mdx",source:"@site/blog/2023-5-30-what-is-the-actor-model-and-when-should-i-use-it/index.mdx",title:"\u4ec0\u4e48\u662fActor\u6a21\u578b\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528\u5b83\uff1f",description:"\u5728Stately\uff0cActor\u6a21\u578b\u662f\u6211\u4eec\u6700\u559c\u6b22\u7684\u7f16\u7a0b\u8303\u5f0f\u4e4b\u4e00\uff0c\u6211\u4eec\u8ba4\u4e3a\u8fd9\u662f\u6709\u5145\u5206\u7406\u7531\u7684\uff01",date:"2023-05-30T00:00:00.000Z",formattedDate:"May 30, 2023",tags:[{label:"actor model",permalink:"/xstate-zh/blog/tags/actor-model"},{label:"modeling",permalink:"/xstate-zh/blog/tags/modeling"},{label:"statechart",permalink:"/xstate-zh/blog/tags/statechart"},{label:"tutorials",permalink:"/xstate-zh/blog/tags/tutorials"},{label:"state machine",permalink:"/xstate-zh/blog/tags/state-machine"},{label:"typescript",permalink:"/xstate-zh/blog/tags/typescript"},{label:"blog",permalink:"/xstate-zh/blog/tags/blog"}],readingTime:6.505,hasTruncateMarker:!0,authors:[{name:"Gavin Bauman",title:"Stately Team",url:"https://github.com/gavination",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/gavin.png",key:"gavin"}],frontMatter:{title:"\u4ec0\u4e48\u662fActor\u6a21\u578b\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528\u5b83\uff1f",description:"\u5728Stately\uff0cActor\u6a21\u578b\u662f\u6211\u4eec\u6700\u559c\u6b22\u7684\u7f16\u7a0b\u8303\u5f0f\u4e4b\u4e00\uff0c\u6211\u4eec\u8ba4\u4e3a\u8fd9\u662f\u6709\u5145\u5206\u7406\u7531\u7684\uff01",tags:["actor model","modeling","statechart","tutorials","state machine","typescript","blog"],authors:["gavin"],slug:"what-is-the-actor-model",image:"/blog/2023-5-30-what-is-the-actor-model-and-when-should-i-use-it.png",date:"2023-05-30T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Generate test paths and create machines faster than ever before",permalink:"/xstate-zh/blog/2023-11-03-generate-test-paths-and-create-machines-faster"}},l={authorsImageUrls:[void 0]},c=[];function h(t){const e={a:"a",p:"p",...(0,s.a)(),...t.components};return(0,o.jsxs)(e.p,{children:["\u5728Stately\uff0c ",(0,o.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Actor_model",children:"Actor\u6a21\u578b"})," \u662f\u6211\u4eec\u6700\u559c\u6b22\u7684\u7f16\u7a0b\u8303\u5f0f\u4e4b\u4e00\uff0c\u6211\u4eec\u8ba4\u4e3a\u8fd9\u662f\u6709\u5145\u5206\u7406\u7531\u7684\uff01Actor\u6a21\u578b\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u4f7f\u7528_actors_\u8fdb\u884c\u901a\u4fe1\u6765\u6784\u5efa\u53ef\u9760\u7684\u57fa\u4e8e\u6d88\u606f\u7684\u7cfb\u7edf\u3002\u8fd9\u4e0e\u72b6\u6001\u673a\u548c\u72b6\u6001\u56fe\u975e\u5e38\u5951\u5408\uff0c\u5b83\u4eec\u4e5f\u53ef\u4ee5\u5efa\u6a21\u4e3aactors\u5e76\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u8fdb\u884c\u901a\u4fe1\u3002\u7ee7\u7eed\u9605\u8bfb\u4ee5\u4e86\u89e3\u4ec0\u4e48\u662fActor\u6a21\u578b\uff0c\u5b83\u8bd5\u56fe\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u5b83\u6765\u53ef\u9760\u5730\u8de8\u4e0d\u540c\u5b9e\u4f53\u8fdb\u884c\u901a\u4fe1\u3002"]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(h,{...t})}):h(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>i,a:()=>r});var o=a(67294);const s={},n=o.createContext(s);function r(t){const e=o.useContext(n);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(n.Provider,{value:e},t.children)}}}]);