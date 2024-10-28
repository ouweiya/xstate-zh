"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3682],{89716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=n(85893),d=n(11151);const l={title:"@xstate/test"},i=void 0,c={id:"xstate-test",title:"@xstate/test",description:"\u6700\u65b0\u7248\u672c\u7684\u57fa\u4e8e\u6a21\u578b\u7684\u6d4b\u8bd5\u5de5\u5177\uff08\u4ee5\u524d\u7684 @xstate/test\uff09\u73b0\u5728\u662f\u6700\u65b0\u7684 @xstate/graph \u5305\u7684\u4e00\u90e8\u5206\u3002",source:"@site/docs/xstate-test.mdx",sourceDirName:".",slug:"/xstate-test",permalink:"/xstate-zh/docs/xstate-test",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/xstate-test.mdx",tags:[],version:"current",frontMatter:{title:"@xstate/test"},sidebar:"tutorialSidebar",previous:{title:"@xstate/graph",permalink:"/xstate-zh/docs/xstate-graph"},next:{title:"\u5f00\u53d1\u8005\u5de5\u5177",permalink:"/xstate-zh/docs/category/developer-tools"}},r={},h=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"API",id:"api",level:2},{value:"<code>createModel(machine, options?)</code>",id:"createmodelmachine-options",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"<code>model.withEvents(eventsMap)</code>",id:"modelwitheventseventsmap",level:4},{value:"<code>testModel.getShortestPathPlans(options?)</code>",id:"testmodelgetshortestpathplansoptions",level:3},{value:"\u9009\u9879",id:"\u9009\u9879",level:4},{value:"<code>testModel.getSimplePathPlans(options?)</code>",id:"testmodelgetsimplepathplansoptions",level:3},{value:"\u9009\u9879",id:"\u9009\u9879-1",level:4},{value:"<code>testModel.getPlanFromEvents(events, options)</code>",id:"testmodelgetplanfromeventsevents-options",level:3},{value:"<code>testModel.testCoverage(options?)</code>",id:"testmodeltestcoverageoptions",level:3},{value:"\u9009\u9879",id:"\u9009\u9879-2",level:4},{value:"<code>testPlan.description</code>",id:"testplandescription",level:3},{value:"<code>testPlan.paths</code>",id:"testplanpaths",level:3},{value:"<code>testPath.description</code>",id:"testpathdescription",level:3},{value:"<code>testPath.test(testContext)</code>",id:"testpathtesttestcontext",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"warningxstate",children:[(0,s.jsxs)(t.p,{children:["\u6700\u65b0\u7248\u672c\u7684\u57fa\u4e8e\u6a21\u578b\u7684\u6d4b\u8bd5\u5de5\u5177\uff08\u4ee5\u524d\u7684 ",(0,s.jsx)(t.code,{children:"@xstate/test"}),"\uff09\u73b0\u5728\u662f\u6700\u65b0\u7684 ",(0,s.jsx)(t.code,{children:"@xstate/graph"})," \u5305\u7684\u4e00\u90e8\u5206\u3002"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"@xstate/graph"})," \u7684\u6587\u6863\uff08\u5305\u62ec\u6d4b\u8bd5\u5de5\u5177\uff09\u5373\u5c06\u53d1\u5e03\uff1b\u4ee5\u4e0b\u6587\u6863\u9002\u7528\u4e8e ",(0,s.jsx)(t.code,{children:"@xstate/test@beta"}),"\u3002"]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-test",children:"@xstate/test \u5305"})," \u5305\u542b\u4e86\u7528\u4e8e\u4fc3\u8fdb\u4efb\u4f55\u8f6f\u4ef6\u7684",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Model-based_testing",children:"\u57fa\u4e8e\u6a21\u578b\u7684\u6d4b\u8bd5"}),"\u7684\u5de5\u5177\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u89c2\u770b\u6f14\u8bb2"}),"\uff1a",(0,s.jsx)(t.a,{href:"https://slides.com/davidkhourshid/mbt",children:"\u5199\u66f4\u5c11\u7684\u6d4b\u8bd5\uff01\u4ece\u81ea\u52a8\u5316\u5230\u81ea\u52a8\u751f\u6210"})," \u5728 React Rally 2019 (",(0,s.jsxs)(t.a,{href:"https://www.youtube.com/watch?v=tpNmPKjPSFQ",children:[(0,s.jsx)(t.span,{role:"img","aria-label":"movie camera",children:"\ud83c\udfa5"})," \u89c6\u9891"]}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5b89\u88c5 ",(0,s.jsx)(t.code,{children:"xstate"})," \u548c ",(0,s.jsx)(t.code,{children:"@xstate/test"}),"\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install xstate @xstate/test\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"\u521b\u5efa\u5c06\u7528\u4e8e\u5efa\u6a21\u88ab\u6d4b\u7cfb\u7edf\uff08SUT\uff09\u7684\u72b6\u6001\u673a\uff1a"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { createMachine } from 'xstate';\n\nconst toggleMachine = createMachine({\n  id: 'toggle',\n  initial: 'inactive',\n  states: {\n    inactive: {\n      on: {\n        TOGGLE: 'active',\n      },\n    },\n    active: {\n      on: {\n        TOGGLE: 'inactive',\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["\u4e3a\u72b6\u6001\u673a\u4e2d\u7684\u6bcf\u4e2a\u72b6\u6001\u6dfb\u52a0\u65ad\u8a00\uff08\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u4f7f\u7528 ",(0,s.jsx)(t.a,{href:"https://github.com/GoogleChrome/puppeteer",children:"Puppeteer"}),"\uff09\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// ...\n\nconst toggleMachine = createMachine({\n  id: 'toggle',\n  initial: 'inactive',\n  states: {\n    inactive: {\n      on: {\n        /* ... */\n      },\n      meta: {\n        test: async (page) => {\n          await page.waitFor('input:checked');\n        },\n      },\n    },\n    active: {\n      on: {\n        /* ... */\n      },\n      meta: {\n        test: async (page) => {\n          await page.waitFor('input:not(:checked)');\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"\u521b\u5efa\u6a21\u578b\uff1a"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { createMachine } from 'xstate';\nimport { createModel } from '@xstate/test';\n\nconst toggleMachine = createMachine(/* ... */);\n\nconst toggleModel = createModel(toggleMachine).withEvents({\n  TOGGLE: {\n    exec: async (page) => {\n      await page.click('input');\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"\u521b\u5efa\u6d4b\u8bd5\u8ba1\u5212\u5e76\u8fd0\u884c\u8986\u76d6\u7387\u6d4b\u8bd5\uff1a"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// ...\n\ndescribe('toggle', () => {\n  const testPlans = toggleModel.getShortestPathPlans();\n\n  testPlans.forEach((plan) => {\n    describe(plan.description, () => {\n      plan.paths.forEach((path) => {\n        it(path.description, async () => {\n            // \u8fdb\u884c\u4efb\u4f55\u8bbe\u7f6e\uff0c\u7136\u540e...\n\n          await path.test(page);\n        });\n      });\n    });\n  });\n\n  it('should have full coverage', () => {\n    return toggleModel.testCoverage();\n  });\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.h3,{id:"createmodelmachine-options",children:(0,s.jsx)(t.code,{children:"createModel(machine, options?)"})}),"\n",(0,s.jsxs)(t.p,{children:["\u57fa\u4e8e\u4f20\u5165\u7684 ",(0,s.jsx)(t.code,{children:"machine"})," \u521b\u5efa\u4e00\u4e2a\u62bd\u8c61\u7684\u6d4b\u8bd5\u6a21\u578b\u3002"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"machine"})}),(0,s.jsx)(t.td,{children:"StateMachine"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u521b\u5efa\u62bd\u8c61\u6a21\u578b\u7684\u72b6\u6001\u673a\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"options?"})}),(0,s.jsx)(t.td,{children:"TestModelOptions"}),(0,s.jsx)(t.td,{children:"\u81ea\u5b9a\u4e49\u62bd\u8c61\u6a21\u578b\u7684\u9009\u9879"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,s.jsxs)(t.p,{children:["\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:"TestModel"})," \u5b9e\u4f8b\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsx)(t.h4,{id:"modelwitheventseventsmap",children:(0,s.jsx)(t.code,{children:"model.withEvents(eventsMap)"})}),"\n",(0,s.jsxs)(t.p,{children:["\u4e3a\u6bcf\u4e2a\u4e8b\u4ef6\u63d0\u4f9b\u6d4b\u8bd5\u7ec6\u8282\u3002",(0,s.jsx)(t.code,{children:"eventsMap"})," \u4e2d\u7684\u6bcf\u4e2a\u952e\u90fd\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u952e\u662f\u4e8b\u4ef6\u7c7b\u578b\uff0c\u5c5e\u6027\u63cf\u8ff0\u4e86\u6bcf\u4e2a\u4e8b\u4ef6\u7684\u6267\u884c\u548c\u6d4b\u8bd5\u7528\u4f8b\uff1a"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"exec"})," (\u51fd\u6570): \u6267\u884c\u4e8b\u4ef6\u7684\u51fd\u6570\u3002\u5b83\u6709\u4e24\u4e2a\u53c2\u6570\uff1a","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"testContext"})," (\u4efb\u610f\u7c7b\u578b): \u4efb\u4f55\u4e0a\u4e0b\u6587\u6d4b\u8bd5\u6570\u636e"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"event"})," (EventObject): \u7531\u6d4b\u8bd5\u6a21\u578b\u53d1\u9001\u7684\u4e8b\u4ef6"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cases?"})," (EventObject[]): \u8be5\u4e8b\u4ef6\u7c7b\u578b\u53ef\u4ee5\u7531\u6d4b\u8bd5\u6a21\u578b\u53d1\u9001\u7684\u793a\u4f8b\u4e8b\u4ef6\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const toggleModel = createModel(toggleMachine).withEvents({\n  TOGGLE: {\n    exec: async (page) => {\n      await page.click('input');\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testmodelgetshortestpathplansoptions",children:(0,s.jsx)(t.code,{children:"testModel.getShortestPathPlans(options?)"})}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de\u57fa\u4e8e\u4ece\u6d4b\u8bd5\u6a21\u578b\u7684\u521d\u59cb\u72b6\u6001\u5230\u6bcf\u4e2a\u5176\u4ed6\u53ef\u8fbe\u72b6\u6001\u7684\u6700\u77ed\u8def\u5f84\u7684\u6d4b\u8bd5\u8ba1\u5212\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filter"})}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsxs)(t.td,{children:["\u63a5\u53d7 ",(0,s.jsx)(t.code,{children:"state"})," \u5e76\u8fd4\u56de ",(0,s.jsx)(t.code,{children:"true"})," \u5982\u679c\u72b6\u6001\u5e94\u8be5\u88ab\u904d\u5386\uff0c\u6216\u8005\u8fd4\u56de ",(0,s.jsx)(t.code,{children:"false"})," \u5982\u679c\u904d\u5386\u5e94\u8be5\u505c\u6b62\u3002"]})]})})]}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u5bf9\u4e8e\u9632\u6b62\u65e0\u9650\u904d\u5386\u548c\u5806\u6808\u6ea2\u51fa\u9519\u8bef\u975e\u5e38\u6709\u7528\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const todosModel = createModel(todosMachine).withEvents({\n  /* ... */\n});\n\nconst plans = todosModel.getShortestPathPlans({\n  // \u544a\u8bc9\u7b97\u6cd5\u5c06\u72b6\u6001/\u4e8b\u4ef6\u90bb\u63a5\u56fe\u9650\u5236\u4e3a\u62e5\u6709\u5c11\u4e8e 5 \u4e2a\u5f85\u529e\u4e8b\u9879\u7684\u72b6\u6001\n  filter: (state) => state.context.todos.length < 5,\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testmodelgetsimplepathplansoptions",children:(0,s.jsx)(t.code,{children:"testModel.getSimplePathPlans(options?)"})}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de\u57fa\u4e8e\u4ece\u6d4b\u8bd5\u6a21\u578b\u7684\u521d\u59cb\u72b6\u6001\u5230\u6bcf\u4e2a\u5176\u4ed6\u53ef\u8fbe\u72b6\u6001\u7684\u7b80\u5355\u8def\u5f84\u7684\u6d4b\u8bd5\u8ba1\u5212\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"\u9009\u9879-1",children:"\u9009\u9879"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filter"})}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsxs)(t.td,{children:["\u63a5\u53d7 ",(0,s.jsx)(t.code,{children:"state"})," \u5e76\u8fd4\u56de ",(0,s.jsx)(t.code,{children:"true"})," \u5982\u679c\u72b6\u6001\u5e94\u8be5\u88ab\u904d\u5386\uff0c\u6216\u8005\u8fd4\u56de ",(0,s.jsx)(t.code,{children:"false"})," \u5982\u679c\u904d\u5386\u5e94\u8be5\u505c\u6b62\u3002"]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"testmodelgetplanfromeventsevents-options",children:(0,s.jsx)(t.code,{children:"testModel.getPlanFromEvents(events, options)"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"events"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EventObject[]"})}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u521b\u5efa\u8ba1\u5212\u7684\u4e8b\u4ef6\u5e8f\u5217"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"options"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"{ target: string }"})}),(0,s.jsxs)(t.td,{children:["\u4e00\u4e2a\u5305\u542b ",(0,s.jsx)(t.code,{children:"target"})," \u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u8be5\u5c5e\u6027\u5e94\u5339\u914d\u4e8b\u4ef6\u7684\u76ee\u6807\u72b6\u6001"]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u5355\u4e2a\u8def\u5f84\u7684\u5355\u4e2a\u6d4b\u8bd5\u8ba1\u5212\u7684\u6570\u7ec4\uff0c\u8be5\u8def\u5f84\u7531 ",(0,s.jsx)(t.code,{children:"events"})," \u751f\u6210\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u6700\u540e\u8fdb\u5165\u7684\u72b6\u6001\u4e0e ",(0,s.jsx)(t.code,{children:"options.target"})," \u4e0d\u5339\u914d\uff0c\u5219\u629b\u51fa\u9519\u8bef\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"testmodeltestcoverageoptions",children:(0,s.jsx)(t.code,{children:"testModel.testCoverage(options?)"})}),"\n",(0,s.jsx)(t.p,{children:"\u6d4b\u8bd5\u5728\u6267\u884c\u7684\u6d4b\u8bd5\u4e2d\u662f\u5426\u8986\u76d6\uff08\u904d\u5386\uff09\u4e86\u6240\u6709\u72b6\u6001\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"\u9009\u9879-2",children:"\u9009\u9879"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53c2\u6570"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filter"})}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsxs)(t.td,{children:["\u63a5\u53d7\u6bcf\u4e2a ",(0,s.jsx)(t.code,{children:"stateNode"})," \u5e76\u8fd4\u56de ",(0,s.jsx)(t.code,{children:"true"})," \u5982\u679c\u8be5\u72b6\u6001\u8282\u70b9\u5e94\u8be5\u88ab\u8986\u76d6\u3002"]})]})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// \u4ec5\u6d4b\u8bd5\u5b9a\u4e49\u4e86 `.meta` \u5c5e\u6027\u7684\u72b6\u6001\u8282\u70b9\u7684\u8986\u76d6\u7387\uff1a\n\ntestModel.testCoverage({\n  filter: (stateNode) => !!stateNode.meta,\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testplandescription",children:(0,s.jsx)(t.code,{children:"testPlan.description"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6d4b\u8bd5\u8ba1\u5212\u7684\u5b57\u7b26\u4e32\u63cf\u8ff0\uff0c\u63cf\u8ff0\u4e86\u8fbe\u5230 ",(0,s.jsx)(t.code,{children:"testPlan.state"})," \u7684\u76ee\u6807\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"testplanpaths",children:(0,s.jsx)(t.code,{children:"testPlan.paths"})}),"\n",(0,s.jsx)(t.p,{children:"\u4ece\u6d4b\u8bd5\u6a21\u578b\u7684\u521d\u59cb\u72b6\u6001\u5230\u6bcf\u4e2a\u5176\u4ed6\u53ef\u8fbe\u72b6\u6001\u7684\u6d4b\u8bd5\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"testpathdescription",children:(0,s.jsx)(t.code,{children:"testPath.description"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6d4b\u8bd5\u8def\u5f84\u7684\u5b57\u7b26\u4e32\u63cf\u8ff0\uff0c\u63cf\u8ff0\u4e86\u4e00\u7cfb\u5217\u5c06\u8fbe\u5230 ",(0,s.jsx)(t.code,{children:"testPath.state"})," \u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"testpathtesttestcontext",children:(0,s.jsx)(t.code,{children:"testPath.test(testContext)"})}),"\n",(0,s.jsxs)(t.p,{children:["\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6267\u884c ",(0,s.jsx)(t.code,{children:"testPath.segments"})," \u4e2d\u7684\u6bcf\u4e00\u6b65\uff1a"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u9a8c\u8bc1 SUT \u5904\u4e8e ",(0,s.jsx)(t.code,{children:"segment.state"})]}),"\n",(0,s.jsxs)(t.li,{children:["\u6267\u884c ",(0,s.jsx)(t.code,{children:"segment.event"})," \u7684\u4e8b\u4ef6"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6700\u540e\uff0c\u9a8c\u8bc1 SUT \u5904\u4e8e\u76ee\u6807 ",(0,s.jsx)(t.code,{children:"testPath.state"}),"\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u7684\u6a21\u578b\u6709\u5d4c\u5957\u72b6\u6001\uff0c\u5728\u9a8c\u8bc1 SUT \u5904\u4e8e\u8be5\u5d4c\u5957\u72b6\u6001\u65f6\uff0c\u6bcf\u4e2a\u7236\u72b6\u6001\u7684 ",(0,s.jsx)(t.code,{children:"meta.test"})," \u65b9\u6cd5\u4e5f\u4f1a\u88ab\u6267\u884c\u3002"]})]})}function a(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(67294);const d={},l=s.createContext(d);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);