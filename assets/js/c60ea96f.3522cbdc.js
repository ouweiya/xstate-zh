"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[8549],{35291:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=s(85893),r=s(11151);const o={title:"Version history"},t="Version history",a={id:"versions",title:"Version history",description:"Version history is helpful if you want to save checkpoints while modeling machines or mirror version changes in the rest of your codebase. New versions can be saved from the current machine using the Version history panel in the lower left of the canvas.",source:"@site/docs/versions.mdx",sourceDirName:".",slug:"/versions",permalink:"/xstate-zh/docs/versions",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/xstate-zh/tree/main/docs/versions.mdx",tags:[],version:"current",frontMatter:{title:"Version history"},sidebar:"tutorialSidebar",previous:{title:"Upgrade your Stately Studio account",permalink:"/xstate-zh/docs/upgrade"},next:{title:"\u9501\u5b9a\u673a\u5668",permalink:"/xstate-zh/docs/lock-machines"}},l={},h=[{value:"Save a version",id:"save-a-version",level:2},{value:"Rename a version",id:"rename-a-version",level:3},{value:"Auto-saved versions",id:"auto-saved-versions",level:2},{value:"Initial versions",id:"initial-versions",level:3},{value:"Generated versions",id:"generated-versions",level:3},{value:"Periodic snapshot versions",id:"periodic-snapshot-versions",level:3},{value:"View a version",id:"view-a-version",level:2},{value:"Restore a version",id:"restore-a-version",level:2},{value:"Create a new machine from a version",id:"create-a-new-machine-from-a-version",level:2},{value:"Delete a version",id:"delete-a-version",level:2},{value:"Team roles and versions",id:"team-roles-and-versions",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{ArchiveRestore:s,Copy:o,History:t,Info:a,Trash:l,X:h}=n;return s||v("ArchiveRestore",!0),o||v("Copy",!0),t||v("History",!0),a||v("Info",!0),l||v("Trash",!0),h||v("X",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"version-history",children:"Version history"}),"\n",(0,i.jsxs)(n.p,{children:["Version history is helpful if you want to save checkpoints while modeling machines or mirror version changes in the rest of your codebase. New versions can be saved from the current machine using the ",(0,i.jsx)(n.strong,{children:"Version history"})," panel in the lower left of the canvas."]}),"\n",(0,i.jsxs)(n.p,{children:["All users can view versions of public machines. Users on our premium plans can view and create versions for machines in team projects and their own machines in ",(0,i.jsx)(n.strong,{children:"My Projects"}),". ",(0,i.jsx)(n.a,{href:"#team-roles-and-versions",children:"Read more about team roles and versions"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"studio",children:(0,i.jsxs)(n.p,{children:["Version history is a premium feature of Stately Studio. You can try Stately Studio\u2019s premium plans with a free trial. ",(0,i.jsx)(n.a,{href:"/xstate-zh/docs/studio-pro-plan",children:"Check out the features on our Pro plan"}),", ",(0,i.jsx)(n.a,{href:"/xstate-zh/docs/studio-team-plan",children:"Team plan"}),", ",(0,i.jsx)(n.a,{href:"/xstate-zh/docs/studio-enterprise-plan",children:"Enterprise plan"})," or ",(0,i.jsx)(n.a,{href:"https://stately.ai/registry/billing",children:"upgrade your existing plan"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"save-a-version",children:"Save a version"}),"\n",(0,i.jsxs)(n.p,{children:["Save a new version of your machine from the ",(0,i.jsx)(t,{size:18})," ",(0,i.jsx)(n.strong,{children:"Version history"})," panel in the lower left corner of the canvas."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Save"})," button will be disabled unless you have changed your machine since you created the latest version."]})}),"\n",(0,i.jsx)(n.p,{children:"Versions are named sequentially by default and have the version creator\u2019s avatar. The version\u2019s timestamp is always shown under the version name."}),"\n",(0,i.jsx)(n.h3,{id:"rename-a-version",children:"Rename a version"}),"\n",(0,i.jsx)(n.p,{children:"You can rename any version after double-clicking or focusing on the version name."}),"\n",(0,i.jsx)(n.h2,{id:"auto-saved-versions",children:"Auto-saved versions"}),"\n",(0,i.jsx)(n.p,{children:"There are some cases where versions will automatically be created for a machine Auto-saved versions are indicated in the list of versions with the Stately bot icon."}),"\n",(0,i.jsx)(n.h3,{id:"initial-versions",children:"Initial versions"}),"\n",(0,i.jsx)(n.p,{children:"An initial version is automatically saved for new machines when:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"you fork a machine from an existing machine or project"}),"\n",(0,i.jsx)(n.li,{children:"you duplicate an existing machine in its project"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These versions are labeled \u201cInitial version\u201d."}),"\n",(0,i.jsx)(n.h3,{id:"generated-versions",children:"Generated versions"}),"\n",(0,i.jsx)(n.p,{children:"An version is also automatically saved for machines when you generate a flow from your existing machine. These versions are labeled with the text description used to generate the flow."}),"\n",(0,i.jsx)(n.h3,{id:"periodic-snapshot-versions",children:"Periodic snapshot versions"}),"\n",(0,i.jsx)(n.p,{children:"To reduce the likelihood of data loss, versions are automatically saved hourly as long as edits have been made to the project machine. These versions are labeled sequentially. They work just like other versions that you can view, restore, or delete."}),"\n",(0,i.jsx)(n.p,{children:"In the version list, these auto-saved versions are hidden by default but you can toggle their visibility to show them along with versions you explicitly save."}),"\n",(0,i.jsx)(n.h2,{id:"view-a-version",children:"View a version"}),"\n",(0,i.jsxs)(n.p,{children:["You can view any version by selecting that version in the ",(0,i.jsx)(n.strong,{children:"Version history"}),". The version will be shown in the Editor and read-only unless you restore that version using the ",(0,i.jsx)(s,{size:18})," ",(0,i.jsx)(n.strong,{children:"Restore"})," button."]}),"\n",(0,i.jsxs)(n.p,{children:["You can return to viewing the current version of your machine from the ",(0,i.jsx)(h,{size:18})," close icon button in the top bar or by selecting ",(0,i.jsx)(n.strong,{children:"Current Version"})," from the ",(0,i.jsx)(n.strong,{children:"Version history"})," panel."]}),"\n",(0,i.jsx)(n.h2,{id:"restore-a-version",children:"Restore a version"}),"\n",(0,i.jsxs)(n.p,{children:["You can restore your current machine to any version from the ",(0,i.jsx)(t,{size:18})," ",(0,i.jsx)(n.strong,{children:"Version history"})," panel using the ",(0,i.jsx)(s,{size:18})," restore icon button or using the ",(0,i.jsx)(s,{size:18})," ",(0,i.jsx)(n.strong,{children:"Restore"})," button in the top bar when ",(0,i.jsx)(n.a,{href:"#view-a-version",children:"viewing a version"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You cannot restore a version when a machine is ",(0,i.jsx)(n.a,{href:"/xstate-zh/docs/lock-machines",children:"locked"}),". Unlock the machine from the machine ",(0,i.jsx)(a,{size:18})," ",(0,i.jsx)(n.strong,{children:"Details"})," panel to re-enable restoring versions."]})}),"\n",(0,i.jsx)(n.h2,{id:"create-a-new-machine-from-a-version",children:"Create a new machine from a version"}),"\n",(0,i.jsxs)(n.p,{children:["You can also create a new machine from a version in your version history using the ",(0,i.jsx)(o,{size:18})," copy button in the top bar when ",(0,i.jsx)(n.a,{href:"#view-a-version",children:"viewing a version"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Your new machine will be created and opened in the same project with the same name appended with \u201c(copy).\u201d"}),"\n",(0,i.jsx)(n.h2,{id:"delete-a-version",children:"Delete a version"}),"\n",(0,i.jsxs)(n.p,{children:["Delete a machine version using the ",(0,i.jsx)(l,{size:18})," trash button in the top bar when ",(0,i.jsx)(n.a,{href:"#view-a-version",children:"viewing a version"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"team-roles-and-versions",children:"Team roles and versions"}),"\n",(0,i.jsx)(n.p,{children:"All team members can view past versions of machines in their team\u2019s projects. Team owners, Admins, and Editors can also create and restore versions. Only Owners and Admins can delete versions."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Capability"}),(0,i.jsx)(n.th,{children:"Owner"}),(0,i.jsx)(n.th,{children:"Admin"}),(0,i.jsx)(n.th,{children:"Editor"}),(0,i.jsx)(n.th,{children:"Viewer"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"View team machine versions"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Create new versions of team machines"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Restore versions of team machines"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," No"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Delete versions of team machines"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"check mark button",children:"\u2705"})," Yes"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," No"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.span,{role:"img","aria-label":"prohibited",children:"\ud83d\udeab"})," No"]})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function v(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var i=s(67294);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);