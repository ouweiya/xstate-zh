"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[8674],{57765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=t(85893),r=t(11151);const c={title:"Callback Actors(\u56de\u8c03\u6267\u884c\u8005)"},i=void 0,a={id:"callback-actors",title:"Callback Actors(\u56de\u8c03\u6267\u884c\u8005)",description:"\u56de\u8c03\u6f14\u5458\u662f\u5176\u903b\u8f91\u7531\u4e00\u4e2a\u51fd\u6570\u8868\u793a\u7684\u6f14\u5458\uff0c\u8be5\u51fd\u6570\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001\u4e8b\u4ef6\uff08\u901a\u8fc7 sendBack(...)\uff09\u201c\u56de\u8c03\u201d\u5230\u7236\u6f14\u5458\u3002\u5b83\u8fd8\u53ef\u4ee5\u901a\u8fc7 receive(...) \u4ece\u5176\u4ed6\u6f14\u5458\u63a5\u6536\u4e8b\u4ef6\u3002",source:"@site/docs/callback-actors.mdx",sourceDirName:".",slug:"/callback-actors",permalink:"/xstate-zh/docs/callback-actors",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/callback-actors.mdx",tags:[],version:"current",frontMatter:{title:"Callback Actors(\u56de\u8c03\u6267\u884c\u8005)"},sidebar:"tutorialSidebar",previous:{title:"Transition Actors(\u8f6c\u6362\u6267\u884c\u8005)",permalink:"/xstate-zh/docs/transition-actors"},next:{title:"Observable Actors(\u53ef\u89c2\u5bdf\u6267\u884c\u8005)",permalink:"/xstate-zh/docs/observable-actors"}},l={},o=[{value:"\u56de\u8c03\u6f14\u5458\u529f\u80fd",id:"\u56de\u8c03\u6f14\u5458\u529f\u80fd",level:2},{value:"\u56de\u8c03\u6f14\u5458\u903b\u8f91",id:"\u56de\u8c03\u6f14\u5458\u903b\u8f91",level:2},{value:"\u56de\u8c03\u6f14\u5458\u8f93\u5165",id:"\u56de\u8c03\u6f14\u5458\u8f93\u5165",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u56de\u8c03\u6f14\u5458\u662f\u5176\u903b\u8f91\u7531\u4e00\u4e2a\u51fd\u6570\u8868\u793a\u7684\u6f14\u5458\uff0c\u8be5\u51fd\u6570\u53ef\u4ee5\u901a\u8fc7\u53d1\u9001\u4e8b\u4ef6\uff08\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"sendBack(...)"}),"\uff09\u201c\u56de\u8c03\u201d\u5230\u7236\u6f14\u5458\u3002\u5b83\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"receive(...)"})," \u4ece\u5176\u4ed6\u6f14\u5458\u63a5\u6536\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u56de\u8c03\u6f14\u5458\u529f\u80fd",children:"\u56de\u8c03\u6f14\u5458\u529f\u80fd"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u529f\u80fd"}),(0,s.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})}),(0,s.jsx)(n.td,{children:"\u63a5\u6536\u4e8b\u4ef6"}),(0,s.jsxs)(n.td,{children:["\u56de\u8c03\u6f14\u5458\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"receive(event => {...})"})," \u51fd\u6570\u63a5\u6536\u4e8b\u4ef6\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})}),(0,s.jsx)(n.td,{children:"\u53d1\u9001\u4e8b\u4ef6"}),(0,s.jsxs)(n.td,{children:["\u56de\u8c03\u6f14\u5458\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"sendBack(event)"})," \u5411\u5176\u7236\u6f14\u5458\u53d1\u9001\u4e8b\u4ef6\uff0c\u6216\u5411\u5176\u6709\u5f15\u7528\u7684\u5176\u4ed6\u6f14\u5458\u53d1\u9001\u4e8b\u4ef6\uff0c\u4f8b\u5982\u90a3\u4e9b\u5728\u5176 ",(0,s.jsx)(n.code,{children:"input"})," \u4e2d\u63d0\u4f9b\u7684\u6f14\u5458\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.span,{role:"img","aria-label":"cross mark",children:"\u274c"})}),(0,s.jsx)(n.td,{children:"\u751f\u6210\u6f14\u5458"}),(0,s.jsx)(n.td,{children:"\u56de\u8c03\u6f14\u5458\u76ee\u524d\u4e0d\u80fd\u751f\u6210\u65b0\u6f14\u5458\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})}),(0,s.jsx)(n.td,{children:"\u8f93\u5165"}),(0,s.jsxs)(n.td,{children:["\u60a8\u53ef\u4ee5\u5411\u56de\u8c03\u6f14\u5458\u63d0\u4f9b ",(0,s.jsx)(n.code,{children:"input"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.span,{role:"img","aria-label":"cross mark",children:"\u274c"})}),(0,s.jsx)(n.td,{children:"\u8f93\u51fa"}),(0,s.jsx)(n.td,{children:"\u56de\u8c03\u6f14\u5458\u76ee\u524d\u4e0d\u4ea7\u751f\u8f93\u51fa\u2014\u2014\u5b83\u4eec\u4f1a\u65e0\u9650\u671f\u5730\u6d3b\u52a8\uff0c\u76f4\u5230\u5b83\u4eec\u88ab\u505c\u6b62\u6216\u53d1\u751f\u9519\u8bef\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u56de\u8c03\u6f14\u5458\u903b\u8f91",children:"\u56de\u8c03\u6f14\u5458\u903b\u8f91"}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"fromCallback(...)"})," \u6f14\u5458\u903b\u8f91\u521b\u5efa\u5668\u5b9a\u4e49\u56de\u8c03\u6f14\u5458\u903b\u8f91\uff0c\u8be5\u521b\u5efa\u5668\u63a5\u53d7\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u5e76\u8fd4\u56de\u53ef\u7528\u4e8e\u521b\u5efa\u56de\u8c03\u6f14\u5458\u7684\u6f14\u5458\u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createActor, createMachine, fromCallback, sendTo, setup } from 'xstate';\n\nconst resizeLogic = fromCallback(({ sendBack, receive }) => {\n  const resizeHandler = (event) => {\n    sendBack(event);\n  };\n\n  window.addEventListener('resize', resizeHandler);\n\n  const removeListener = () => {\n    window.removeEventListener('resize', resizeHandler);\n  }\n\n  receive(event => {\n    if (event.type === 'stopListening') {\n      console.log('Stopping listening');\n      removeListener();\n    }\n  })\n\n  // \u6e05\u7406\u51fd\u6570\n  return () => {\n    console.log('Cleaning up');\n    removeListener();\n  }\n});\n\nconst machine = setup({\n  actors: {\n    resizeLogic\n  }\n}).createMachine({\n  invoke: {\n    id: 'resize',\n    src: 'resizeLogic'\n  },\n  on: {\n    stop: {\n      actions: sendTo('resize', { type: 'stopListening' })\n    }\n  }\n});\n\nconst actor = createActor(machine);\nactor.start();\n\nactor.send({ type: 'stop' });\n// \u4ece\u56de\u8c03\u6f14\u5458\u65e5\u5fd7 \"Stopping listening\"\n\nactor.stop();\n// \u4ece\u56de\u8c03\u6f14\u5458\u65e5\u5fd7 \"Cleaning up\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u56de\u8c03\u6f14\u5458\u8f93\u5165",children:"\u56de\u8c03\u6f14\u5458\u8f93\u5165"}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728\u521b\u5efa\u56de\u8c03\u6f14\u5458\u65f6\u4f20\u9012 ",(0,s.jsx)(n.code,{children:"input"}),"\uff0c\u5b83\u4f1a\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684 ",(0,s.jsx)(n.code,{children:"input"})," \u5c5e\u6027\u4f20\u9012\u7ed9\u56de\u8c03\u6f14\u5458\u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import {\n  fromCallback,\n  createActor,\n  setup,\n  type EventObject\n} from 'xstate';\n\nconst resizeLogic = fromCallback<EventObject, { defaultSize: number }>(({\n  sendBack,\n  receive,\n  input // \u7c7b\u578b\u4e3a { defaultSize: number }\n}) => {\n  input.defaultSize; // 100\n  // ...\n});\n\nconst machine = setup({\n  actors: {\n    resizeLogic\n  }\n}).createMachine({\n  // ...\n  invoke: {\n    src: 'resizeLogic',\n    input: {\n      defaultSize: 100\n    }\n  }\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);