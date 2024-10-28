"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[7353],{53427:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var t=n(85893),s=n(11151);const r={title:"Sources",description:"You can add source code for actors, actions, and guards from the Sources panel. Your source code will be included in your live actors, synced projects, and exported code."},a=void 0,c={id:"sources",title:"Sources",description:"You can add source code for actors, actions, and guards from the Sources panel. Your source code will be included in your live actors, synced projects, and exported code.",source:"@site/docs/sources.mdx",sourceDirName:".",slug:"/sources",permalink:"/xstate-zh/docs/sources",draft:!1,unlisted:!1,editUrl:"https://github.com/statelyai/docs/tree/main/docs/sources.mdx",tags:[],version:"current",frontMatter:{title:"Sources",description:"You can add source code for actors, actions, and guards from the Sources panel. Your source code will be included in your live actors, synced projects, and exported code."},sidebar:"tutorialSidebar",previous:{title:"Generate test paths",permalink:"/xstate-zh/docs/generate-test-paths"},next:{title:"Export as code",permalink:"/xstate-zh/docs/export-as-code"}},d={},i=[{value:"Adding sources",id:"adding-sources",level:2},{value:"Unnamed actions, actors, and guards",id:"unnamed-actions-actors-and-guards",level:3},{value:"Deleting sources",id:"deleting-sources",level:2},{value:"Source templates",id:"source-templates",level:2},{value:"Formatting",id:"formatting",level:2}];function u(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Code:n,PenSquare:r,TextQuote:a}=o;return n||h("Code",!0),r||h("PenSquare",!0),a||h("TextQuote",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["You can add source code for ",(0,t.jsx)(o.a,{href:"/xstate-zh/docs/actors",children:"actors"}),", ",(0,t.jsx)(o.a,{href:"/xstate-zh/docs/actions",children:"actions"}),", and ",(0,t.jsx)(o.a,{href:"/xstate-zh/docs/guards",children:"guards"})," from the ",(0,t.jsx)(n,{size:18})," ",(0,t.jsx)(o.strong,{children:"Sources"})," panel. Your source code will be included in your ",(0,t.jsx)(o.a,{href:"/xstate-zh/docs/stately-sky-getting-started",children:"live actors"}),", ",(0,t.jsx)(o.a,{href:"/xstate-zh/docs/import-from-github",children:"synced projects"}),", and ",(0,t.jsx)(o.a,{href:"/xstate-zh/docs/export-as-code",children:"exported code"})," found in the ",(0,t.jsx)(n,{size:18})," ",(0,t.jsx)(o.strong,{children:"Code"})," panel."]}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["Sources for ",(0,t.jsx)(o.a,{href:"/xstate-zh/docs/delayed-transitions",children:"delayed (after) transitions"})," are coming soon."]})}),"\n",(0,t.jsx)(o.h2,{id:"adding-sources",children:"Adding sources"}),"\n",(0,t.jsxs)(o.p,{children:["You can add sources from the ",(0,t.jsx)(n,{size:18})," ",(0,t.jsx)(o.strong,{children:"Sources"})," panel. Use the ",(0,t.jsx)(r,{size:18})," edit button alongside the action, actor, or guard on the canvas to open its source."]}),"\n",(0,t.jsxs)(o.p,{children:["You can also open the ",(0,t.jsx)(o.strong,{children:"Sources"})," panel without selecting an action, actor, or guard. By default, the ",(0,t.jsx)(o.strong,{children:"Sources"})," panel shows all the sources in the machine, and you can also add new sources without referencing them with an action, actor, or guard. Sources currently referenced in the machine are highlighted in the ",(0,t.jsx)(o.strong,{children:"Sources"})," panel. Unused sources are dimmed."]}),"\n",(0,t.jsx)(o.p,{children:"Each source requires a name (ID) and source code. The ID is used to reference the source code. The source code for the actor, action, or guard will be included in the generated code. Sources have distinct names, so multiple actors, actions, or guards can reference them."}),"\n",(0,t.jsx)(o.h3,{id:"unnamed-actions-actors-and-guards",children:"Unnamed actions, actors, and guards"}),"\n",(0,t.jsx)(o.p,{children:"When importing a machine from your codebase, unnamed actions, actors, and guards are assigned a default name based on its position in your machine config. For example, the following action:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"createMachine({\n  states: {\n    a: {\n      states: {\n        b: {entry: [assign({name: 'laura'})]}\n      }\n    },\n  }\n})\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Would be given a default name of ",(0,t.jsx)(o.code,{children:"inline:(machine).a.b#entry[0]"}),". These default names are not visible in the editor but will be used in the synced or exported code unless you give your action, actor, or guard a name. ",(0,t.jsx)(o.code,{children:"inline:"})," is prepended to the name to make them more readable and easier to find in your code. After first importing your machine, we recommend you give all your actions, actors, and guards a name. Naming is a one-time step, and you can always rename them later."]}),"\n",(0,t.jsx)(o.h2,{id:"deleting-sources",children:"Deleting sources"}),"\n",(0,t.jsx)(o.p,{children:"You can only delete unused sources that any actors, actions, or guards do not reference. This prevents you from accidentally deleting a currently used source in your machine."}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["You can ",(0,t.jsx)(o.strong,{children:"delete all unused sources"})," from the ",(0,t.jsx)(o.strong,{children:"..."})," menu in the top right corner of the ",(0,t.jsx)(o.strong,{children:"Sources"})," panel."]})}),"\n",(0,t.jsx)(o.h2,{id:"source-templates",children:"Source templates"}),"\n",(0,t.jsxs)(o.p,{children:["Each source type has optional logic templates. You can use the template buttons to quickly add the implementation code for XState\u2019s ",(0,t.jsx)(o.a,{href:"/docs/actors#actor-logic-creators",children:"logic creators"}),", ",(0,t.jsx)(o.a,{href:"/docs/guards#higher-level-guards",children:"higher-level guards"}),", and ",(0,t.jsx)(o.a,{href:"/docs/actions",children:"built-in actions"}),", and the correct XState imports will be added to your code for sync or export."]}),"\n",(0,t.jsx)(o.h2,{id:"formatting",children:"Formatting"}),"\n",(0,t.jsxs)(o.p,{children:["You can format your source code with ",(0,t.jsx)(o.a,{href:"https://prettier.io/",children:"Prettier"})," by using the ",(0,t.jsx)(a,{size:18})," format button."]})]})}function l(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function h(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>a});var t=n(67294);const s={},r=t.createContext(s);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);