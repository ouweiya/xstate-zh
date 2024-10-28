"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3125],{52829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=n(85893),o=n(11151);const c={title:"@xstate/vue"},r=void 0,a={id:"xstate-vue",title:"@xstate/vue",description:"The @xstate/vue package contains utilities for using XState with Vue.",source:"@site/docs/xstate-vue.mdx",sourceDirName:".",slug:"/xstate-vue",permalink:"/xstate-zh/docs/xstate-vue",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/xstate-vue.mdx",tags:[],version:"current",frontMatter:{title:"@xstate/vue"},sidebar:"tutorialSidebar",previous:{title:"@xstate/react",permalink:"/xstate-zh/docs/xstate-react"},next:{title:"@xstate/svelte",permalink:"/xstate-zh/docs/xstate-svelte"}},i={},l=[{value:"Templates",id:"templates",level:2},{value:"Installation",id:"installation",level:2},{value:"API",id:"api",level:2},{value:"<code>useActor(actorLogic, options?)</code>",id:"useactoractorlogic-options",level:3},{value:"Arguments",id:"arguments",level:4},{value:"<code>useMachine(machine, options?)</code>",id:"usemachinemachine-options",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"<code>useActorRef(actorLogic, options?, observer?)</code>",id:"useactorrefactorlogic-options-observer",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>useSelector(actor, selector, compare?, getSnapshot?)</code>",id:"useselectoractor-selector-compare-getsnapshot",level:3},{value:"Arguments",id:"arguments-3",level:4}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{TabItem:n,Tabs:c}=t;return n||u("TabItem",!0),c||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-vue",children:"@xstate/vue package"})," contains utilities for using ",(0,s.jsx)(t.a,{href:"https://github.com/statelyai/xstate",children:"XState"})," with ",(0,s.jsx)(t.a,{href:"https://github.com/vuejs/vue",children:"Vue"}),"."]}),"\n","\n",(0,s.jsx)(t.h2,{id:"templates",children:"Templates"}),"\n",(0,s.jsx)(t.p,{children:"Use the following templates to get started quickly with XState and Vue:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://codesandbox.io/p/devbox/github/statelyai/xstate/tree/main/templates/vue-ts",children:"XState Vue template (CodeSandbox)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://stackblitz.com/github/statelyai/xstate/tree/main/templates/vue-ts?file=%2Fsrc%2FfeedbackMachine.ts",children:"XState Vue template (StackBlitz)"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["Install the latest versions of both ",(0,s.jsx)(t.code,{children:"xstate"})," and ",(0,s.jsx)(t.code,{children:"@xstate/vue"}),". ",(0,s.jsx)(t.code,{children:"xstate"})," is a peer dependency of ",(0,s.jsx)(t.code,{children:"@xstate/vue"}),"."]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)(n,{value:"npm",label:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install xstate @xstate/vue\n"})})}),(0,s.jsx)(n,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm install xstate @xstate/vue\n"})})}),(0,s.jsx)(n,{value:"yarn",label:"yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add xstate @xstate/vue\n"})})})]}),"\n","\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.h3,{id:"useactoractorlogic-options",children:(0,s.jsx)(t.code,{children:"useActor(actorLogic, options?)"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://v3.vuejs.org/guide/composition-api-introduction.html",children:"Vue composition function"})," that creates an actor from the given ",(0,s.jsx)(t.code,{children:"actorLogic"})," and starts an actor ref that runs for the lifetime of the component."]}),"\n",(0,s.jsx)(t.h4,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"actorLogic"})," - An ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/machines",children:"XState machine"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"options"})," (optional) - Actor options"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns"})," ",(0,s.jsx)(t.code,{children:"{ snapshot, send, actorRef }"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"snapshot"})," - Represents the current snapshot (state) of the machine as an XState ",(0,s.jsx)(t.code,{children:"State"})," object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"send"})," - A function that sends events to the running actor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"actorRef"})," - The created actor ref."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"usemachinemachine-options",children:(0,s.jsx)(t.code,{children:"useMachine(machine, options?)"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://v3.vuejs.org/guide/composition-api-introduction.html",children:"Vue composition function"})," that creates an actor from the given ",(0,s.jsx)(t.code,{children:"machine"})," and starts an actor that runs for the lifetime of the component."]}),"\n",(0,s.jsx)(t.h4,{id:"arguments-1",children:"Arguments"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"machine"})," - An ",(0,s.jsx)(t.a,{href:"/xstate-zh/docs/machines",children:"XState machine"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"options"})," (optional) - Actor options"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Returns"})," ",(0,s.jsx)(t.code,{children:"{ snapshot, send, actorRef }"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"snapshot"})," - Represents the current snapshot (state) of the machine as an XState ",(0,s.jsx)(t.code,{children:"State"})," object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"send"})," - A function that sends events to the running actor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"actorRef"})," - The created actor ref."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"useactorrefactorlogic-options-observer",children:(0,s.jsx)(t.code,{children:"useActorRef(actorLogic, options?, observer?)"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://v3.vuejs.org/guide/composition-api-introduction.html",children:"Vue composition function"})," that returns the ",(0,s.jsx)(t.code,{children:"actorRef"})," created from the ",(0,s.jsx)(t.code,{children:"actorLogic"})," with the actor ",(0,s.jsx)(t.code,{children:"options"}),", if specified. It also sets up a subscription to the ",(0,s.jsx)(t.code,{children:"actorRef"})," with the ",(0,s.jsx)(t.code,{children:"observer"}),", if provided."]}),"\n",(0,s.jsx)(t.h4,{id:"arguments-2",children:"Arguments"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"actorLogic"})," - Actor logic"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"options"})," (optional) - Actor options"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"observer"})," (optional) - an observer or listener that listens to snapshot updates:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["an observer (e.g., ",(0,s.jsx)(t.code,{children:"{ next: (snapshot) => {/* ... */} }"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["or a listener (e.g., ",(0,s.jsx)(t.code,{children:"(snapshot) => {/* ... */}"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useActorRef } from '@xstate/vue';\nimport { someMachine } from '../path/to/someMachine';\n\nexport default {\n  setup() {\n    const actorRef = useActorRef(someMachine);\n    return actorRef;\n  },\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"With options + listener:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useInterpret } from '@xstate/vue';\nimport { someMachine } from '../path/to/someMachine';\nexport default {\n  setup() {\n    const actor = useInterpret(\n      someMachine,\n      {\n        actions: {\n          /* ... */\n        },\n      },\n      (state) => {\n        // subscribes to state changes\n        console.log(state.value);\n      },\n    );\n    // ...\n  },\n};\n"})}),"\n",(0,s.jsx)(t.h3,{id:"useselectoractor-selector-compare-getsnapshot",children:(0,s.jsx)(t.code,{children:"useSelector(actor, selector, compare?, getSnapshot?)"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"https://v3.vuejs.org/guide/composition-api-introduction.html",children:"Vue composition function"})," that returns the selected value from the snapshot of an ",(0,s.jsx)(t.code,{children:"actorRef"}),", such as an actor. This hook will only cause a rerender if the selected value changes, as determined by the optional ",(0,s.jsx)(t.code,{children:"compare"})," function."]}),"\n",(0,s.jsx)(t.h4,{id:"arguments-3",children:"Arguments"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"actorRef"})," - an actor or an actor-like object that contains ",(0,s.jsx)(t.code,{children:".send(...)"})," and ",(0,s.jsx)(t.code,{children:".subscribe(...)"})," methods."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"selector"}),' - a function that takes in an actor\u2019s "current state" (snapshot) as an argument and returns the desired selected value.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"compare"})," (optional) - a function that determines if the current selected value is the same as the previous selected value."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getSnapshot"})," (optional) - a function that should return the latest emitted value from the ",(0,s.jsx)(t.code,{children:"actorRef"}),".","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Defaults to attempting to get the ",(0,s.jsx)(t.code,{children:"actor.state"}),", or returning ",(0,s.jsx)(t.code,{children:"undefined"})," if that does not exist. Will automatically pull the state from actors."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useSelector } from '@xstate/vue';\n\nconst selectCount = (snapshot) => snapshot.context.count;\n\nexport default {\n  props: ['actor'],\n  setup(props) {\n    const count = useSelector(props.actor, selectCount);\n    // ...\n    return { count };\n  },\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With ",(0,s.jsx)(t.code,{children:"compare"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useSelector } from '@xstate/vue';\n\nconst selectUser = (state) => state.context.user;\nconst compareUser = (prevUser, nextUser) => prevUser.id === nextUser.id;\n\nexport default {\n  props: ['actor'],\n  setup(props) {\n    const user = useSelector(props.actor, selectUser, compareUser);\n    // ...\n    return { user };\n  },\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With ",(0,s.jsx)(t.code,{children:"useActorRef(...)"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useActorRef, useSelector } from '@xstate/vue';\nimport { someMachine } from '../path/to/someMachine';\n\nconst selectCount = (snapshot) => snapshot.context.count;\n\nexport default {\n  setup() {\n    const actorRef = useActorRef(someMachine);\n    const count = useSelector(actorRef, selectCount);\n    // ...\n    return { count, actorRef };\n  },\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const o={},c=s.createContext(o);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);