"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[5068],{35203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const a={title:"\u5ef6\u8fdf\uff08after\uff09\u8f6c\u6362"},r=void 0,c={id:"delayed-transitions",title:"\u5ef6\u8fdf\uff08after\uff09\u8f6c\u6362",description:"\u5ef6\u8fdf\u8f6c\u6362 \u662f\u5728\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u89e6\u53d1\u7684\u8f6c\u6362\u3002\u5ef6\u8fdf\u8f6c\u6362\u5bf9\u4e8e\u5728\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u4e2d\u6784\u5efa\u8d85\u65f6\u548c\u95f4\u9694\u975e\u5e38\u6709\u7528\u3002\u5982\u679c\u5728\u8ba1\u65f6\u5668\u7ed3\u675f\u4e4b\u524d\u53d1\u751f\u4e86\u53e6\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u5219\u8f6c\u6362\u4e0d\u4f1a\u5b8c\u6210\u3002",source:"@site/docs/delayed-transitions.mdx",sourceDirName:".",slug:"/delayed-transitions",permalink:"/xstate-zh/docs/delayed-transitions",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/delayed-transitions.mdx",tags:[],version:"current",frontMatter:{title:"\u5ef6\u8fdf\uff08after\uff09\u8f6c\u6362"},sidebar:"tutorialSidebar",previous:{title:"\u65e0\u4e8b\u4ef6\uff08always\uff09\u8f6c\u6362",permalink:"/xstate-zh/docs/eventless-transitions"},next:{title:"Actions",permalink:"/xstate-zh/docs/actions"}},d={},l=[{value:"\u5ef6\u8fdf",id:"\u5ef6\u8fdf",level:2},{value:"\u5185\u8054\u5ef6\u8fdf",id:"\u5185\u8054\u5ef6\u8fdf",level:2},{value:"\u5f15\u7528\u5ef6\u8fdf",id:"\u5f15\u7528\u5ef6\u8fdf",level:2},{value:"\u52a8\u6001\u5ef6\u8fdf",id:"\u52a8\u6001\u5ef6\u8fdf",level:2},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u5ef6\u8fdf\u8f6c\u6362\u548c TypeScript",id:"\u5ef6\u8fdf\u8f6c\u6362\u548c-typescript",level:2},{value:"\u5ef6\u8fdf\u8f6c\u6362\u5907\u5fd8\u5355",id:"\u5ef6\u8fdf\u8f6c\u6362\u5907\u5fd8\u5355",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{EmbedMachine:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("EmbedMachine",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5ef6\u8fdf\u8f6c\u6362"})," \u662f\u5728\u8bbe\u5b9a\u7684\u65f6\u95f4\u540e\u89e6\u53d1\u7684\u8f6c\u6362\u3002\u5ef6\u8fdf\u8f6c\u6362\u5bf9\u4e8e\u5728\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u4e2d\u6784\u5efa\u8d85\u65f6\u548c\u95f4\u9694\u975e\u5e38\u6709\u7528\u3002\u5982\u679c\u5728\u8ba1\u65f6\u5668\u7ed3\u675f\u4e4b\u524d\u53d1\u751f\u4e86\u53e6\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u5219\u8f6c\u6362\u4e0d\u4f1a\u5b8c\u6210\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5ef6\u8fdf\u8f6c\u6362\u5728\u72b6\u6001\u8282\u70b9\u7684 ",(0,i.jsx)(n.code,{children:"after"})," \u5c5e\u6027\u4e0a\u5b9a\u4e49\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2a\u6570\u5b57\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u6216\u4e00\u4e2a\u5f15\u7528\u5728 ",(0,i.jsx)(n.code,{children:"delays"})," \u8bbe\u7f6e\u5bf9\u8c61\u4e2d\u5b9a\u4e49\u7684\u5ef6\u8fdf\u7684\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"studio",children:(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 Stately \u7684\u7f16\u8f91\u5668\u4e2d\u8f7b\u677e\u53ef\u89c6\u5316\u548c\u6a21\u62df\u5ef6\u8fdf\u8f6c\u6362\u3002 ",(0,i.jsx)(n.a,{href:"/docs/editor-states-and-transitions/#delayed-after-transitions",children:"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e Stately \u7f16\u8f91\u5668\u4e2d\u7684\u5ef6\u8fdf\u8f6c\u6362"}),"\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createMachine } from 'xstate';\n\nconst pushTheButtonGame = createMachine({\n  initial: 'waitingForButtonPush',\n  states: {\n    waitingForButtonPush: {\n      // highlight-start\n      after: {\n        5000: {\n          target: 'timedOut',\n          actions: 'logThatYouGotTimedOut',\n        },\n      },\n      // highlight-end\n      on: {\n        PUSH_BUTTON: {\n          actions: 'logSuccess',\n          target: 'success',\n        },\n      },\n    },\n    success: {},\n    timedOut: {},\n  },\n});\n"})}),"\n",(0,i.jsx)(t,{embedURL:"https://stately.ai/registry/editor/embed/c447d996-cef1-421d-a422-8be695668764?mode=design&machineId=78c59862-fc40-4b1e-8f9c-42f1b2ddc410",title:"\u6309\u4e0b\u6309\u94ae\u6e38\u620f"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u89c2\u770b\u6211\u4eec\u7684 ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=5RE_eazRhrw&list=PLvWgkXBB3dd4I_l-djWVU2UGPyBgKfnTQ&index=12",children:"\u201c\u5ef6\u8fdf\uff08after\uff09\u8f6c\u6362\u201d \u89c6\u9891\u5728 YouTube \u4e0a"})," (1\u520617\u79d2)\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u5ef6\u8fdf",children:"\u5ef6\u8fdf"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u51e0\u79cd\u65b9\u5f0f\u5b9a\u4e49\u5ef6\u8fdf\uff1a",(0,i.jsx)(n.a,{href:"#inlined-delays",children:"\u5185\u8054"}),"\u3001",(0,i.jsx)(n.a,{href:"#referenced-delays",children:"\u5f15\u7528"})," \u548c\u4f5c\u4e3a\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5185\u8054\u5ef6\u8fdf",children:"\u5185\u8054\u5ef6\u8fdf"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u6307\u5b9a\u5ef6\u8fdf\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u6765\u5b9a\u4e49\u5185\u8054\u5ef6\u8fdf\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const machine = createMachine({\n  initial: 'idle',\n  states: {\n    idle: {\n      after: {\n        1000: { target: 'nextState' },\n      },\n    },\n    nextState: {},\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u5c06\u5728 1000 \u6beb\u79d2\u540e\u8f6c\u6362\u5230 ",(0,i.jsx)(n.code,{children:"nextState"})," \u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5f15\u7528\u5ef6\u8fdf",children:"\u5f15\u7528\u5ef6\u8fdf"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u5b57\u7b26\u4e32\u5ef6\u8fdf\u952e\u5e76\u5355\u72ec\u63d0\u4f9b\u5b9e\u9645\u5ef6\u8fdf\u65f6\u95f4\u6765\u5b9a\u4e49\u5f15\u7528\u5ef6\u8fdf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { setup } from 'xstate';\n\nconst machine = setup({\n  // highlight-start\n  delays: {\n    timeout: 1000,\n  },\n  // highlight-end\n}).createMachine(\n  {\n    initial: 'idle',\n    states: {\n      idle: {\n        after: {\n          // highlight-next-line\n          timeout: { target: 'nextState' },\n        },\n      },\n      nextState: {},\n    },\n  }\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u52a8\u6001\u5ef6\u8fdf",children:"\u52a8\u6001\u5ef6\u8fdf"}),"\n",(0,i.jsx)(n.p,{children:"\u5ef6\u8fdf\u4e5f\u53ef\u4ee5\u52a8\u6001\u5b9a\u4e49\u4e3a\u8fd4\u56de\u5ef6\u8fdf\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u7684\u51fd\u6570\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { setup } from 'xstate';\n\nconst machine = setup({\n  types: {\n    context: {} as {\n      attempts: number\n    }\n  },\n  // highlight-start\n  delays: {\n    timeout: ({ context }) => {\n      return context.attempts * 1000;\n    },\n  },\n  // highlight-end\n}).createMachine({\n  initial: 'attempting',\n  states: {\n    attempting: {\n      after: {\n        // highlight-start\n        timeout: {\n          actions: assign({ attempts: ({ context }) => context.attempts + 1 }),\n          target: 'attempting',\n        },\n        // highlight-end\n      },\n    },\n    // ...\n  },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u72b6\u6001\u9000\u51fa\u65f6\uff0c\u5ef6\u8fdf\u8f6c\u6362\u8ba1\u65f6\u5668\u5c06\u88ab\u53d6\u6d88\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6a21\u62df\u65f6\u949f"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5ef6\u8fdf\u8f6c\u6362\u548c-typescript",children:"\u5ef6\u8fdf\u8f6c\u6362\u548c TypeScript"}),"\n",(0,i.jsxs)(n.admonition,{type:"typescript",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"XState v5 \u9700\u8981 TypeScript \u7248\u672c 5.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"})}),(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u6548\u679c\uff0c\u8bf7\u4f7f\u7528\u6700\u65b0\u7684 TypeScript \u7248\u672c\u3002",(0,i.jsx)(n.a,{href:"/xstate-zh/docs/typescript",children:"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e XState \u548c TypeScript \u7684\u4fe1\u606f"})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.jsx)(n.code,{children:"setup()"})," \u51fd\u6570\u4e2d\u8bbe\u7f6e\u5ef6\u8fdf\u6765\u5f3a\u7c7b\u578b\u5316\u60a8\u7684\u673a\u5668\u7684 ",(0,i.jsx)(n.code,{children:"delays"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { setup } from 'xstate';\n\nconst machine = setup({\n  // highlight-start\n  delays: {\n    shortTimeout: 1000,\n    longTimeout: 5000,\n    eventually: 10_000\n  }\n  // highlight-end\n}).createMachine({\n  after: {\n    shortTimeout: {/* ... */}\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5ef6\u8fdf\u8f6c\u6362\u5907\u5fd8\u5355",children:"\u5ef6\u8fdf\u8f6c\u6362\u5907\u5fd8\u5355"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684 XState \u5ef6\u8fdf\u8f6c\u6362\u5907\u5fd8\u5355\u5feb\u901f\u5165\u95e8\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"createMachine({\n  after: {\n    DELAY: {\n      /* ... */\n    },\n  },\n}).provide({\n  delays: {\n    \u5ef6\u8fdf: 1000, // \u6216\u8868\u8fbe\u5f0f\n  },\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);