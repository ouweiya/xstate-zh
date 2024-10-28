"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[6503],{85087:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var i=n(85893),l=n(11151);const t={title:"XState \u793a\u4f8b"},r=void 0,a={id:"examples",title:"XState \u793a\u4f8b",description:"XState v5 \u793a\u4f8b\u4e5f\u53ef\u4ee5\u5728 /examples \u76ee\u5f55 \u4e2d\u627e\u5230\u3002\u8bb8\u591a\u793a\u4f8b\u90fd\u6709\u4e00\u4e2a CodeSandbox \u94fe\u63a5\uff0c\u60a8\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u8be5\u793a\u4f8b\u3002",source:"@site/docs/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/xstate-zh/docs/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/examples.mdx",tags:[],version:"current",frontMatter:{title:"XState \u793a\u4f8b"},sidebar:"tutorialSidebar",previous:{title:"\u4ece XState v4 \u8fc1\u79fb\u5230 v5",permalink:"/xstate-zh/docs/migration"},next:{title:"\u6a21\u677f",permalink:"/xstate-zh/docs/templates"}},c={},h=[{value:"\u7b80\u5355\u7684 fetch \u793a\u4f8b",id:"\u7b80\u5355\u7684-fetch-\u793a\u4f8b",level:2},{value:"7GUIs \u8ba1\u6570\u5668 (React)",id:"7guis-\u8ba1\u6570\u5668-react",level:2},{value:"7GUIs \u6e29\u5ea6\u8f6c\u6362\u5668 (React)",id:"7guis-\u6e29\u5ea6\u8f6c\u6362\u5668-react",level:2},{value:"\u7b80\u5355\u5217\u8868 (React)",id:"\u7b80\u5355\u5217\u8868-react",level:2},{value:"\u79d2\u8868",id:"\u79d2\u8868",level:2},{value:"\u4e95\u5b57\u68cb\u6e38\u620f (React)",id:"\u4e95\u5b57\u68cb\u6e38\u620f-react",level:2},{value:"\u62fc\u56fe\u6e38\u620f (React)",id:"\u62fc\u56fe\u6e38\u620f-react",level:2},{value:"TodoMVC (React)",id:"todomvc-react",level:2},{value:"\u5207\u6362",id:"\u5207\u6362",level:2},{value:"Hello world \u5de5\u4f5c\u6d41",id:"hello-world-\u5de5\u4f5c\u6d41",level:2},{value:"\u95ee\u5019\u5de5\u4f5c\u6d41",id:"\u95ee\u5019\u5de5\u4f5c\u6d41",level:2},{value:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u95ee\u5019\u5de5\u4f5c\u6d41",id:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u95ee\u5019\u5de5\u4f5c\u6d41",level:2},{value:"\u89e3\u51b3\u6570\u5b66\u95ee\u9898",id:"\u89e3\u51b3\u6570\u5b66\u95ee\u9898",level:2},{value:"\u5e76\u884c\u6267\u884c\u5de5\u4f5c\u6d41",id:"\u5e76\u884c\u6267\u884c\u5de5\u4f5c\u6d41",level:2},{value:"\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u5de5\u4f5c\u6d41",id:"\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u5de5\u4f5c\u6d41",level:2},{value:"\u5f02\u6b65\u5b50\u6d41\u7a0b\u8c03\u7528\u5de5\u4f5c\u6d41",id:"\u5f02\u6b65\u5b50\u6d41\u7a0b\u8c03\u7528\u5de5\u4f5c\u6d41",level:2},{value:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u8f6c\u6362\uff08\u57fa\u4e8e\u4e8b\u4ef6\u7684\u5f00\u5173\uff09\u5de5\u4f5c\u6d41",id:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u8f6c\u6362\u57fa\u4e8e\u4e8b\u4ef6\u7684\u5f00\u5173\u5de5\u4f5c\u6d41",level:2},{value:"\u7533\u8bf7\u4eba\u8bf7\u6c42\u51b3\u7b56\u5de5\u4f5c\u6d41",id:"\u7533\u8bf7\u4eba\u8bf7\u6c42\u51b3\u7b56\u5de5\u4f5c\u6d41",level:2},{value:"\u8ba2\u5355\u5904\u7406\uff08\u9519\u8bef\u5904\u7406\uff09\u5de5\u4f5c\u6d41",id:"\u8ba2\u5355\u5904\u7406\u9519\u8bef\u5904\u7406\u5de5\u4f5c\u6d41",level:2},{value:"\u76d1\u63a7\u4f5c\u4e1a\u5b8c\u6210\uff08\u8f6e\u8be2\uff09\u5de5\u4f5c\u6d41",id:"\u76d1\u63a7\u4f5c\u4e1a\u5b8c\u6210\u8f6e\u8be2\u5de5\u4f5c\u6d41",level:2},{value:"\u5728\u5de5\u4f5c\u6d41\u5b8c\u6210\u65f6\u53d1\u9001 CloudEvent",id:"\u5728\u5de5\u4f5c\u6d41\u5b8c\u6210\u65f6\u53d1\u9001-cloudevent",level:2},{value:"\u76d1\u63a7\u60a3\u8005\u751f\u547d\u4f53\u5f81\u5de5\u4f5c\u6d41",id:"\u76d1\u63a7\u60a3\u8005\u751f\u547d\u4f53\u5f81\u5de5\u4f5c\u6d41",level:2},{value:"\u5b8c\u6210\u5927\u5b66\u7533\u8bf7\u5de5\u4f5c\u6d41",id:"\u5b8c\u6210\u5927\u5b66\u7533\u8bf7\u5de5\u4f5c\u6d41",level:2},{value:"\u6267\u884c\u5ba2\u6237\u4fe1\u7528\u68c0\u67e5\u5de5\u4f5c\u6d41",id:"\u6267\u884c\u5ba2\u6237\u4fe1\u7528\u68c0\u67e5\u5de5\u4f5c\u6d41",level:2},{value:"\u5904\u7406\u6c7d\u8f66\u62cd\u5356\u51fa\u4ef7\uff08\u5b9a\u65f6\u542f\u52a8\uff09\u5de5\u4f5c\u6d41",id:"\u5904\u7406\u6c7d\u8f66\u62cd\u5356\u51fa\u4ef7\u5b9a\u65f6\u542f\u52a8\u5de5\u4f5c\u6d41",level:2},{value:"\u5b9a\u671f\u68c0\u67e5\u6536\u4ef6\u7bb1\uff08\u57fa\u4e8e cron \u7684\u5de5\u4f5c\u6d41\u542f\u52a8\uff09",id:"\u5b9a\u671f\u68c0\u67e5\u6536\u4ef6\u7bb1\u57fa\u4e8e-cron-\u7684\u5de5\u4f5c\u6d41\u542f\u52a8",level:2},{value:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u5de5\u4f5c\u6d41",id:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u5de5\u4f5c\u6d41",level:2},{value:"\u91cd\u7528\u51fd\u6570\u548c\u4e8b\u4ef6\u5b9a\u4e49\u5de5\u4f5c\u6d41",id:"\u91cd\u7528\u51fd\u6570\u548c\u4e8b\u4ef6\u5b9a\u4e49\u5de5\u4f5c\u6d41",level:2},{value:"\u65b0\u60a3\u8005\u5165\u804c\uff08\u9519\u8bef\u68c0\u67e5\u548c\u91cd\u8bd5\uff09\u5de5\u4f5c\u6d41",id:"\u65b0\u60a3\u8005\u5165\u804c\u9519\u8bef\u68c0\u67e5\u548c\u91cd\u8bd5\u5de5\u4f5c\u6d41",level:2},{value:"\u91c7\u8d2d\u8ba2\u5355\u622a\u6b62\u65e5\u671f\uff08ExecTimeout\uff09\u5de5\u4f5c\u6d41",id:"\u91c7\u8d2d\u8ba2\u5355\u622a\u6b62\u65e5\u671fexectimeout\u5de5\u4f5c\u6d41",level:2},{value:"\u7d2f\u79ef\u623f\u95f4\u8bfb\u6570\u5e76\u521b\u5efa\u53ca\u65f6\u62a5\u544a\uff08ExecTimeout \u548c KeepActive\uff09\u5de5\u4f5c\u6d41",id:"\u7d2f\u79ef\u623f\u95f4\u8bfb\u6570\u5e76\u521b\u5efa\u53ca\u65f6\u62a5\u544aexectimeout-\u548c-keepactive\u5de5\u4f5c\u6d41",level:2},{value:"\u6c7d\u8f66\u751f\u547d\u4f53\u5f81\u68c0\u67e5\uff08SubFlow Repeat\uff09\u5de5\u4f5c\u6d41",id:"\u6c7d\u8f66\u751f\u547d\u4f53\u5f81\u68c0\u67e5subflow-repeat\u5de5\u4f5c\u6d41",level:2},{value:"\u56fe\u4e66\u501f\u9605\u5de5\u4f5c\u6d41",id:"\u56fe\u4e66\u501f\u9605\u5de5\u4f5c\u6d41",level:2},{value:"\u5012\u6c34\u5de5\u4f5c\u6d41",id:"\u5012\u6c34\u5de5\u4f5c\u6d41",level:2},{value:"\u66f4\u591a\u793a\u4f8b\u5373\u5c06\u63a8\u51fa",id:"\u66f4\u591a\u793a\u4f8b\u5373\u5c06\u63a8\u51fa",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["XState v5 \u793a\u4f8b\u4e5f\u53ef\u4ee5\u5728 ",(0,i.jsxs)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples",children:[(0,i.jsx)(s.code,{children:"/examples"})," \u76ee\u5f55"]})," \u4e2d\u627e\u5230\u3002\u8bb8\u591a\u793a\u4f8b\u90fd\u6709\u4e00\u4e2a CodeSandbox \u94fe\u63a5\uff0c\u60a8\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u8be5\u793a\u4f8b\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u7b80\u5355\u7684-fetch-\u793a\u4f8b",children:"\u7b80\u5355\u7684 fetch \u793a\u4f8b"}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684 fetch \u793a\u4f8b\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Parcel"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/fetch",children:"GitHub \u4e0a\u7684\u7b80\u5355 fetch \u793a\u4f8b"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/fetch",children:"CodeSandbox \u4e0a\u7684\u7b80\u5355 fetch \u793a\u4f8b"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"7guis-\u8ba1\u6570\u5668-react",children:"7GUIs \u8ba1\u6570\u5668 (React)"}),"\n",(0,i.jsxs)(s.p,{children:["\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684 ",(0,i.jsx)(s.a,{href:"https://eugenkiss.github.io/7guis/tasks/#counter",children:"7GUIs \u8ba1\u6570\u5668"})," \u5b9e\u73b0\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"React"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/7guis-counter-react",children:"GitHub \u4e0a\u7684 7GUIs \u8ba1\u6570\u5668 (React)"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/react-7guis-counter",children:"CodeSandbox \u4e0a\u7684 7GUIs \u8ba1\u6570\u5668 (React)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"7guis-\u6e29\u5ea6\u8f6c\u6362\u5668-react",children:"7GUIs \u6e29\u5ea6\u8f6c\u6362\u5668 (React)"}),"\n",(0,i.jsxs)(s.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684 ",(0,i.jsx)(s.a,{href:"https://eugenkiss.github.io/7guis/tasks#temp",children:"7GUIs \u6e29\u5ea6\u8f6c\u6362\u5668"})," \u5b9e\u73b0\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"React"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/7guis-temperature-react",children:"GitHub \u4e0a\u7684 7GUIs \u6e29\u5ea6\u8f6c\u6362\u5668 (React)"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/react-7guis-temperature",children:"CodeSandbox \u4e0a\u7684 7GUIs \u6e29\u5ea6\u8f6c\u6362\u5668 (React)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u7b80\u5355\u5217\u8868-react",children:"\u7b80\u5355\u5217\u8868 (React)"}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684 React \u5217\u8868\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"React"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/friends-list-react",children:"GitHub \u4e0a\u7684\u7b80\u5355\u5217\u8868 (React)"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/react-list",children:"CodeSandbox \u4e0a\u7684\u7b80\u5355\u5217\u8868 (React)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u79d2\u8868",children:"\u79d2\u8868"}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684\u7b80\u5355\u79d2\u8868\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/stopwatch",children:"GitHub \u4e0a\u7684\u79d2\u8868"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/stopwatch",children:"CodeSandbox \u4e0a\u7684\u79d2\u8868"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4e95\u5b57\u68cb\u6e38\u620f-react",children:"\u4e95\u5b57\u68cb\u6e38\u620f (React)"}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684\u4e95\u5b57\u68cb\u6e38\u620f\u5b9e\u73b0\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"React"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/tic-tac-toe-react",children:"GitHub \u4e0a\u7684\u4e95\u5b57\u68cb\u6e38\u620f (React)"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/react-tic-tac-toe",children:"CodeSandbox \u4e0a\u7684\u4e95\u5b57\u68cb\u6e38\u620f (React)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u62fc\u56fe\u6e38\u620f-react",children:"\u62fc\u56fe\u6e38\u620f (React)"}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684\u7b80\u5355\u62fc\u56fe\u6e38\u620f\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"React"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/tiles",children:"GitHub \u4e0a\u7684\u62fc\u56fe\u6e38\u620f (React)"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/tiles",children:"CodeSandbox \u4e0a\u7684\u62fc\u56fe\u6e38\u620f (React)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"todomvc-react",children:"TodoMVC (React)"}),"\n",(0,i.jsxs)(s.p,{children:["\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684 ",(0,i.jsx)(s.a,{href:"https://todomvc.com/",children:"TodoMVC"})," \u5b9e\u73b0\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"React"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/todomvc-react",children:"GitHub \u4e0a\u7684 TodoMVC (React)"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/todomvc-react",children:"CodeSandbox \u4e0a\u7684 TodoMVC (React)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u5207\u6362",children:"\u5207\u6362"}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\u7684\u7b80\u5355\u5207\u6362\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"TypeScript"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Vite"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/toggle",children:"GitHub \u4e0a\u7684\u5207\u6362"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://codesandbox.io/p/sandbox/github/statelyai/xstate/tree/main/examples/toggle",children:"CodeSandbox \u4e0a\u7684\u5207\u6362"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"hello-world-\u5de5\u4f5c\u6d41",children:"Hello world \u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Hello-World-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668 hello world \u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-hello",children:"GitHub \u4e0a\u7684 Hello world \u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u95ee\u5019\u5de5\u4f5c\u6d41",children:"\u95ee\u5019\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Greeting-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u95ee\u5019\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-greeting",children:"GitHub \u4e0a\u7684\u95ee\u5019\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u95ee\u5019\u5de5\u4f5c\u6d41",children:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u95ee\u5019\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Event-Based-Greeting-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u57fa\u4e8e\u4e8b\u4ef6\u7684\u95ee\u5019\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-event-greeting",children:"GitHub \u4e0a\u7684\u57fa\u4e8e\u4e8b\u4ef6\u7684\u95ee\u5019\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u89e3\u51b3\u6570\u5b66\u95ee\u9898",children:"\u89e3\u51b3\u6570\u5b66\u95ee\u9898"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Solving-Math-Problems-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u6570\u5b66\u95ee\u9898\u89e3\u51b3\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-math-problem",children:"GitHub \u4e0a\u7684\u89e3\u51b3\u6570\u5b66\u95ee\u9898"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5e76\u884c\u6267\u884c\u5de5\u4f5c\u6d41",children:"\u5e76\u884c\u6267\u884c\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Parallel-Execution-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5e76\u884c\u6267\u884c\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-parallel",children:"GitHub \u4e0a\u7684\u5e76\u884c\u6267\u884c\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u5de5\u4f5c\u6d41",children:"\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Async-Function-Invocation-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-async-function",children:"GitHub \u4e0a\u7684\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5f02\u6b65\u5b50\u6d41\u7a0b\u8c03\u7528\u5de5\u4f5c\u6d41",children:"\u5f02\u6b65\u5b50\u6d41\u7a0b\u8c03\u7528\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Async-SubFlow-Invocation-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5f02\u6b65\u5b50\u6d41\u7a0b\u8c03\u7528\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-async-subflow",children:"GitHub \u4e0a\u7684\u5f02\u6b65\u5b50\u6d41\u7a0b\u8c03\u7528\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u8f6c\u6362\u57fa\u4e8e\u4e8b\u4ef6\u7684\u5f00\u5173\u5de5\u4f5c\u6d41",children:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u8f6c\u6362\uff08\u57fa\u4e8e\u4e8b\u4ef6\u7684\u5f00\u5173\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Event-Based-Transitions-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u57fa\u4e8e\u4e8b\u4ef6\u7684\u8f6c\u6362\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-event-based",children:"GitHub \u4e0a\u7684\u57fa\u4e8e\u4e8b\u4ef6\u7684\u8f6c\u6362\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u7533\u8bf7\u4eba\u8bf7\u6c42\u51b3\u7b56\u5de5\u4f5c\u6d41",children:"\u7533\u8bf7\u4eba\u8bf7\u6c42\u51b3\u7b56\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Applicant-Request-Decision-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u7533\u8bf7\u4eba\u8bf7\u6c42\u51b3\u7b56\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-applicant-request",children:"GitHub \u4e0a\u7684\u7533\u8bf7\u4eba\u8bf7\u6c42\u51b3\u7b56\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u8ba2\u5355\u5904\u7406\u9519\u8bef\u5904\u7406\u5de5\u4f5c\u6d41",children:"\u8ba2\u5355\u5904\u7406\uff08\u9519\u8bef\u5904\u7406\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Provision-Orders-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u8ba2\u5355\u5904\u7406\uff08\u9519\u8bef\u5904\u7406\uff09\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-provision-orders",children:"GitHub \u4e0a\u7684\u8ba2\u5355\u5904\u7406\uff08\u9519\u8bef\u5904\u7406\uff09\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u76d1\u63a7\u4f5c\u4e1a\u5b8c\u6210\u8f6e\u8be2\u5de5\u4f5c\u6d41",children:"\u76d1\u63a7\u4f5c\u4e1a\u5b8c\u6210\uff08\u8f6e\u8be2\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Monitor-Job-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u76d1\u63a7\u4f5c\u4e1a\u5b8c\u6210\uff08\u8f6e\u8be2\uff09\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-monitor-job",children:"GitHub \u4e0a\u7684\u76d1\u63a7\u4f5c\u4e1a\u5b8c\u6210\uff08\u8f6e\u8be2\uff09\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5728\u5de5\u4f5c\u6d41\u5b8c\u6210\u65f6\u53d1\u9001-cloudevent",children:"\u5728\u5de5\u4f5c\u6d41\u5b8c\u6210\u65f6\u53d1\u9001 CloudEvent"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Send-CloudEvent-On-Workflow-Completion-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5728\u5de5\u4f5c\u6d41\u5b8c\u6210\u65f6\u53d1\u9001 CloudEvent \u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-send-cloudevent",children:"GitHub \u4e0a\u7684\u5728\u5de5\u4f5c\u6d41\u5b8c\u6210\u65f6\u53d1\u9001 CloudEvent"})}),"\n",(0,i.jsx)(s.h2,{id:"\u76d1\u63a7\u60a3\u8005\u751f\u547d\u4f53\u5f81\u5de5\u4f5c\u6d41",children:"\u76d1\u63a7\u60a3\u8005\u751f\u547d\u4f53\u5f81\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Monitor-Patient-Vital-Signs-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u76d1\u63a7\u60a3\u8005\u751f\u547d\u4f53\u5f81\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-monitor-patient",children:"GitHub \u4e0a\u7684\u76d1\u63a7\u60a3\u8005\u751f\u547d\u4f53\u5f81\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5b8c\u6210\u5927\u5b66\u7533\u8bf7\u5de5\u4f5c\u6d41",children:"\u5b8c\u6210\u5927\u5b66\u7533\u8bf7\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Finalize-College-Application-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5b8c\u6210\u5927\u5b66\u7533\u8bf7\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-finalize-college-app",children:"GitHub \u4e0a\u7684\u5b8c\u6210\u5927\u5b66\u7533\u8bf7\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u6267\u884c\u5ba2\u6237\u4fe1\u7528\u68c0\u67e5\u5de5\u4f5c\u6d41",children:"\u6267\u884c\u5ba2\u6237\u4fe1\u7528\u68c0\u67e5\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Perform-Customer-Credit-Check-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u6267\u884c\u5ba2\u6237\u4fe1\u7528\u68c0\u67e5\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-credit-check",children:"GitHub \u4e0a\u7684\u6267\u884c\u5ba2\u6237\u4fe1\u7528\u68c0\u67e5\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5904\u7406\u6c7d\u8f66\u62cd\u5356\u51fa\u4ef7\u5b9a\u65f6\u542f\u52a8\u5de5\u4f5c\u6d41",children:"\u5904\u7406\u6c7d\u8f66\u62cd\u5356\u51fa\u4ef7\uff08\u5b9a\u65f6\u542f\u52a8\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Handle-Car-Auction-Bids-Example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5904\u7406\u6c7d\u8f66\u62cd\u5356\u51fa\u4ef7\uff08\u5b9a\u65f6\u542f\u52a8\uff09\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-car-auction-bids",children:"GitHub \u4e0a\u7684\u5904\u7406\u6c7d\u8f66\u62cd\u5356\u51fa\u4ef7\uff08\u5b9a\u65f6\u542f\u52a8\uff09\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5b9a\u671f\u68c0\u67e5\u6536\u4ef6\u7bb1\u57fa\u4e8e-cron-\u7684\u5de5\u4f5c\u6d41\u542f\u52a8",children:"\u5b9a\u671f\u68c0\u67e5\u6536\u4ef6\u7bb1\uff08\u57fa\u4e8e cron \u7684\u5de5\u4f5c\u6d41\u542f\u52a8\uff09"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Check-Inbox-Periodically",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5b9a\u671f\u68c0\u67e5\u6536\u4ef6\u7bb1\uff08\u57fa\u4e8e cron \u7684\u5de5\u4f5c\u6d41\u542f\u52a8\uff09\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-check-inbox",children:"GitHub \u4e0a\u7684\u5b9a\u671f\u68c0\u67e5\u6536\u4ef6\u7bb1\uff08\u57fa\u4e8e cron \u7684\u5de5\u4f5c\u6d41\u542f\u52a8\uff09"})}),"\n",(0,i.jsx)(s.h2,{id:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u5de5\u4f5c\u6d41",children:"\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Event-Based-Service-Invocation",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-event-based-service",children:"GitHub \u4e0a\u7684\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u91cd\u7528\u51fd\u6570\u548c\u4e8b\u4ef6\u5b9a\u4e49\u5de5\u4f5c\u6d41",children:"\u91cd\u7528\u51fd\u6570\u548c\u4e8b\u4ef6\u5b9a\u4e49\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Reusing-Function-And-Event-Definitions",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u91cd\u7528\u51fd\u6570\u548c\u4e8b\u4ef6\u5b9a\u4e49\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-reusing-functions",children:"GitHub \u4e0a\u7684\u91cd\u7528\u51fd\u6570\u548c\u4e8b\u4ef6\u5b9a\u4e49\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u65b0\u60a3\u8005\u5165\u804c\u9519\u8bef\u68c0\u67e5\u548c\u91cd\u8bd5\u5de5\u4f5c\u6d41",children:"\u65b0\u60a3\u8005\u5165\u804c\uff08\u9519\u8bef\u68c0\u67e5\u548c\u91cd\u8bd5\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#new-patient-onboarding",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u65b0\u60a3\u8005\u5165\u804c\uff08\u9519\u8bef\u68c0\u67e5\u548c\u91cd\u8bd5\uff09\u5de5\u4f5c\u6d41\u3002"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-new-patient-onboarding",children:"GitHub \u4e0a\u7684\u65b0\u60a3\u8005\u5165\u804c\uff08\u9519\u8bef\u68c0\u67e5\u548c\u91cd\u8bd5\uff09\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u91c7\u8d2d\u8ba2\u5355\u622a\u6b62\u65e5\u671fexectimeout\u5de5\u4f5c\u6d41",children:"\u91c7\u8d2d\u8ba2\u5355\u622a\u6b62\u65e5\u671f\uff08ExecTimeout\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#purchase-order-deadline",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u91c7\u8d2d\u8ba2\u5355\u622a\u6b62\u65e5\u671f\uff08ExecTimeout\uff09\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-purchase-order-deadline",children:"GitHub \u4e0a\u7684\u91c7\u8d2d\u8ba2\u5355\u622a\u6b62\u65e5\u671f\uff08ExecTimeout\uff09\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u7d2f\u79ef\u623f\u95f4\u8bfb\u6570\u5e76\u521b\u5efa\u53ca\u65f6\u62a5\u544aexectimeout-\u548c-keepactive\u5de5\u4f5c\u6d41",children:"\u7d2f\u79ef\u623f\u95f4\u8bfb\u6570\u5e76\u521b\u5efa\u53ca\u65f6\u62a5\u544a\uff08ExecTimeout \u548c KeepActive\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#accumulate-room-readings",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u7d2f\u79ef\u623f\u95f4\u8bfb\u6570\u5e76\u521b\u5efa\u53ca\u65f6\u62a5\u544a\uff08ExecTimeout \u548c KeepActive\uff09\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-accumulate-room-readings",children:"GitHub \u4e0a\u7684\u7d2f\u79ef\u623f\u95f4\u8bfb\u6570\u5e76\u521b\u5efa\u53ca\u65f6\u62a5\u544a\uff08ExecTimeout \u548c KeepActive\uff09\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u6c7d\u8f66\u751f\u547d\u4f53\u5f81\u68c0\u67e5subflow-repeat\u5de5\u4f5c\u6d41",children:"\u6c7d\u8f66\u751f\u547d\u4f53\u5f81\u68c0\u67e5\uff08SubFlow Repeat\uff09\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsx)(s.p,{children:"\u5f53\u6c7d\u8f66\u62cd\u5356\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\u5b58\u50a8\u5355\u4e2a\u51fa\u4ef7\u3002"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#handle-car-auction-bids-example",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u6c7d\u8f66\u751f\u547d\u4f53\u5f81\u68c0\u67e5\uff08SubFlow Repeat\uff09\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-car-vitals",children:"GitHub \u4e0a\u7684\u6c7d\u8f66\u751f\u547d\u4f53\u5f81\u68c0\u67e5\uff08SubFlow Repeat\uff09\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u56fe\u4e66\u501f\u9605\u5de5\u4f5c\u6d41",children:"\u56fe\u4e66\u501f\u9605\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#book-lending",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u56fe\u4e66\u501f\u9605\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-book-lending",children:"GitHub \u4e0a\u7684\u56fe\u4e66\u501f\u9605\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5012\u6c34\u5de5\u4f5c\u6d41",children:"\u5012\u6c34\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsxs)(s.p,{children:["\u6765\u81ea ",(0,i.jsx)(s.a,{href:"https://github.com/serverlessworkflow/specification/tree/main/examples#Filling-a-glass-of-water",children:"CNCF Serverless Workflow \u793a\u4f8b"})," \u7684\u65e0\u670d\u52a1\u5668\u5012\u6c34\u5de5\u4f5c\u6d41\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6280\u672f\u6784\u5efa\uff1a"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"XState v5"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples/workflow-filling-water",children:"GitHub \u4e0a\u7684\u5012\u6c34\u5de5\u4f5c\u6d41"})}),"\n",(0,i.jsx)(s.h2,{id:"\u66f4\u591a\u793a\u4f8b\u5373\u5c06\u63a8\u51fa",children:"\u66f4\u591a\u793a\u4f8b\u5373\u5c06\u63a8\u51fa"}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u6709\u4efb\u4f55\u60f3\u8ba9\u6211\u4eec\u5236\u4f5c\u7684\u793a\u4f8b\uff0c\u8bf7 ",(0,i.jsx)(s.a,{href:"https://feedback.stately.ai/examples",children:"\u5411\u6211\u4eec\u7684\u53cd\u9988\u677f\u6dfb\u52a0\u8bf7\u6c42"})," \u6216\u8005\u4e3a\u73b0\u6709\u5efa\u8bae\u6295\u7968\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u6709\u60f3\u8981\u5206\u4eab\u7684\u793a\u4f8b\uff0c\u8bf7 ",(0,i.jsx)(s.a,{href:"https://github.com/statelyai/xstate/tree/main/examples#contributing-an-example",children:"\u5c06\u60a8\u7684\u793a\u4f8b\u8d21\u732e\u7ed9 XState \u4ed3\u5e93"}),"\u3002"]})]})}function x(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var i=n(67294);const l={},t=i.createContext(l);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);