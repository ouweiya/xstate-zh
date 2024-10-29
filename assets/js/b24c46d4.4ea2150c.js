"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[7959],{95932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const o={title:"\u5f00\u53d1\u8005\u5de5\u5177",description:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Stately XState CLI\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09\u548c Chrome \u5f00\u53d1\u8005\u5de5\u5177\u7684\u4fe1\u606f\u3002"},l=void 0,r={id:"developer-tools",title:"\u5f00\u53d1\u8005\u5de5\u5177",description:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Stately XState CLI\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09\u548c Chrome \u5f00\u53d1\u8005\u5de5\u5177\u7684\u4fe1\u606f\u3002",source:"@site/docs/developer-tools.mdx",sourceDirName:".",slug:"/developer-tools",permalink:"/xstate-zh/docs/developer-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/developer-tools.mdx",tags:[],version:"current",frontMatter:{title:"\u5f00\u53d1\u8005\u5de5\u5177",description:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Stately XState CLI\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09\u548c Chrome \u5f00\u53d1\u8005\u5de5\u5177\u7684\u4fe1\u606f\u3002"},sidebar:"tutorialSidebar",previous:{title:"Inspector",permalink:"/xstate-zh/docs/inspector"},next:{title:"\u672f\u8bed\u8868",permalink:"/xstate-zh/docs/glossary"}},a={},c=[{value:"XState CLI\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09",id:"xstate-cli\u547d\u4ee4\u884c\u754c\u9762",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:3},{value:"<code>xstate typegen &lt;files&gt;</code>",id:"xstate-typegen-files",level:4},{value:"\u9009\u9879",id:"\u9009\u9879",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"XState \u5f00\u53d1\u8005\u5de5\u5177\u76ee\u524d\u4ec5\u9002\u7528\u4e8e XState \u7248\u672c 4\u3002Typegen \u5728 XState \u7248\u672c 5 \u4e2d\u4e0d\u53d7\u652f\u6301\u3002"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u4e0b\u9762\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6211\u4eec\u7684 ",(0,s.jsx)(t.a,{href:"#xstate-cli-command-line-interface",children:"XState CLI\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09"})," \u7684\u4fe1\u606f\u3002\u6211\u4eec\u8ba1\u5212\u5728\u672a\u6765\u4e3a\u66f4\u591a\u7684 IDE\uff08\u96c6\u6210\u5f00\u53d1\u73af\u5883\uff09\u5236\u4f5c\u6269\u5c55\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"xstate",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/xstate-zh/docs/xstate-vscode-extension",children:"\u5728\u6211\u4eec\u4e13\u95e8\u7684\u9875\u9762\u4e0a\u9605\u8bfb\u5173\u4e8e XState VS Code \u6269\u5c55\u7684\u4fe1\u606f"}),"\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"xstate-cli\u547d\u4ee4\u884c\u754c\u9762",children:"XState CLI\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/statelyai/xstate-tools/tree/master/apps/cli",children:"@xstate/cli\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09\u5305"})," \u5305\u542b\u8fd0\u884c typegen \u7684\u547d\u4ee4\u3002\u8be5\u5305\u76ee\u524d\u5f88\u5c0f\uff0c\u4f46\u6211\u4eec\u8ba1\u5212\u6dfb\u52a0\u66f4\u591a\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd0\u884c ",(0,s.jsx)(t.code,{children:"npm install @xstate/cli"}),"\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u547d\u4ee4",children:"\u547d\u4ee4"}),"\n",(0,s.jsx)(t.h4,{id:"xstate-typegen-files",children:(0,s.jsx)(t.code,{children:"xstate typegen <files>"})}),"\n",(0,s.jsx)(t.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bf9\u4e00\u4e2a glob \u8fd0\u884c typegen\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'xstate typegen "src/**/*.ts?(x)"'})}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd0\u884c typegen \u5c06\u626b\u63cf\u6bcf\u4e2a\u76ee\u6807\u6587\u4ef6\u5e76\u751f\u6210\u4e00\u4e2a\u4f34\u968f\u7684 typegen \u6587\u4ef6\u3002\u5b83\u8fd8\u4f1a\u5c06 typegen \u5bfc\u5165\u5230\u4f60\u7684\u6587\u4ef6\u4e2d\uff0c\u5982 ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/typegen",children:"\u6211\u4eec\u7684 typegen \u6587\u6863"})," \u4e2d\u6240\u8ff0\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"\u786e\u4fdd\u5c06\u4f60\u7684 glob \u7528\u5f15\u53f7\u62ec\u8d77\u6765\u4ee5\u786e\u4fdd\u6b63\u786e\u6267\u884c\u3002\u5982\u679c\u4e0d\u5c06 glob \u7528\u5f15\u53f7\u62ec\u8d77\u6765\uff0c\u5b83\u5c06\u88ab\u89e3\u91ca\u4e3a\u6587\u4ef6\u5217\u8868\uff0c\u800c\u4e0d\u662f glob\uff0c\u8fd9\u5c06\u5bfc\u81f4\u610f\u5916\u7684\u7ed3\u679c\u3002"})}),"\n",(0,s.jsx)(t.h4,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'xstate typegen "src/**/*.ts?(x)" --watch'})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u76d1\u89c6\u6a21\u5f0f\u4e0b\u8fd0\u884c\u4efb\u52a1\uff0c\u76d1\u89c6\u66f4\u6539\u7684\u6587\u4ef6\u5e76\u5bf9\u5176\u8fd0\u884c typegen \u811a\u672c\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var s=n(67294);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);