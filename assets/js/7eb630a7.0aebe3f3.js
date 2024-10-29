"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[9246],{22750:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=i(85893),n=i(11151);const s={title:"Bidirectional GitHub Sync is now here!",description:"Watch our latest office hours live stream where we cover new features including Stately Inspect, GitHub Sync, Sources, and our roadmap for 2024.",tags:["stately","studio","GitHub","sync","git"],authors:["kevin"],date:new Date("2024-01-09T00:00:00.000Z"),slug:"2024-01-09-introducing-bidirectional-github-sync",image:"/blog/2024-01-09-introducing-bidirectional-github-sync.png"},a=void 0,r={permalink:"/xstate-zh/blog/2024-01-09-introducing-bidirectional-github-sync",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2024-01-09-introducing-bidirectional-github-sync/index.mdx",source:"@site/blog/2024-01-09-introducing-bidirectional-github-sync/index.mdx",title:"Bidirectional GitHub Sync is now here!",description:"Watch our latest office hours live stream where we cover new features including Stately Inspect, GitHub Sync, Sources, and our roadmap for 2024.",date:"2024-01-09T00:00:00.000Z",formattedDate:"January 9, 2024",tags:[{label:"stately",permalink:"/xstate-zh/blog/tags/stately"},{label:"studio",permalink:"/xstate-zh/blog/tags/studio"},{label:"GitHub",permalink:"/xstate-zh/blog/tags/git-hub"},{label:"sync",permalink:"/xstate-zh/blog/tags/sync"},{label:"git",permalink:"/xstate-zh/blog/tags/git"}],readingTime:6.725,hasTruncateMarker:!0,authors:[{name:"Kevin Maes",title:"Stately Team",url:"https://github.com/kevinmaes",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/kevin.png",key:"kevin"}],frontMatter:{title:"Bidirectional GitHub Sync is now here!",description:"Watch our latest office hours live stream where we cover new features including Stately Inspect, GitHub Sync, Sources, and our roadmap for 2024.",tags:["stately","studio","GitHub","sync","git"],authors:["kevin"],date:"2024-01-09T00:00:00.000Z",slug:"2024-01-09-introducing-bidirectional-github-sync",image:"/blog/2024-01-09-introducing-bidirectional-github-sync.png"},unlisted:!1,prevItem:{title:"Changelog Week 2 2024",permalink:"/xstate-zh/blog/2024-01-11-changelog"},nextItem:{title:"Unlock bidirectional editing with sources",permalink:"/xstate-zh/blog/2024-01-09-introducing-sources"}},c={authorsImageUrls:[void 0]},l=[{value:"Manual syncing is so 2023",id:"manual-syncing-is-so-2023",level:3},{value:"Project code enhanced by Stately Studio",id:"project-code-enhanced-by-stately-studio",level:3},{value:"Code synced for the entire team",id:"code-synced-for-the-entire-team",level:3},{value:"What\u2019s included in the new GitHub Sync release?",id:"whats-included-in-the-new-github-sync-release",level:2},{value:"A more robust importing process",id:"a-more-robust-importing-process",level:3},{value:"Editing power of Stately Studio",id:"editing-power-of-stately-studio",level:3},{value:"Staying in sync with the GitHub repo",id:"staying-in-sync-with-the-github-repo",level:3},{value:"Creating pull requests back to the repo",id:"creating-pull-requests-back-to-the-repo",level:3},{value:"What\u2019s next?",id:"whats-next",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{ThemedImage:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ThemedImage",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The team at Stately is proud to release an exciting new feature to kick off 2024, ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github",children:"GitHub Sync with Stately Studio"}),"! This feature has been highly requested by users and it prompted us to initially launch ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-changes-to-machines-from-github",children:"GitHub Import"})," as a Pro feature over a year ago. But GitHub Sync goes beyond just importing as it enables a completely bidirectional workflow between GitHub repositories and Stately Studio. View the ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=x-F1TPjz_lI&t=318s",children:"short demo of GitHub Sync"})," from our Office Hours last month."]}),"\n","\n",(0,o.jsx)("p",{children:(0,o.jsx)(i,{alt:"Connect a project to a GitHub repository by clicking the Connect GitHub button.",sources:{light:"/blog/2024-01-09-introducing-bidirectional-github-sync/connect-github-button.png",dark:"/blog/2024-01-09-introducing-bidirectional-github-sync/connect-github-button-dm.png"}})}),"\n",(0,o.jsx)(t.h3,{id:"manual-syncing-is-so-2023",children:"Manual syncing is so 2023"}),"\n",(0,o.jsxs)(t.p,{children:["Adoption of state machines and ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/xstate",children:"XState"})," in the TypeScript/JavaScript community has steadily grown over the years and there are thousands of repositories on GitHub alone that use XState in projects. Stately Studio also continues to gain adoption as its free and premium features make working with state machines and XState even more powerful and intuitive. Until now, users have sought to synchronize work between their repositories and Studio, in either or both directions, but it hasn\u2019t always been easy. This often involved copy/pasting code while ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-code",children:"importing machines to Studio"})," or ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/export-as-code",children:"exporting machines as code"}),", and reconciling multiple sources of truth. GitHub Sync seeks to eliminate those pain points."]}),"\n",(0,o.jsx)(t.h3,{id:"project-code-enhanced-by-stately-studio",children:"Project code enhanced by Stately Studio"}),"\n",(0,o.jsxs)(t.p,{children:["Stately Studio is packed with powerful features like its robust editor for visualizing state machines as diagrams, flow simulation, export options, and test generation. The Studio also allows for easily ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/projects",children:"organizing machines into projects"}),", ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/versions",children:"saving versions"}),", and collaborating with other team members. Many XState users have been able to use the diagramming features of our VSCode extension but now GitHub Sync makes it easier to enjoy all of the Studio features while using any code editor and remaining connected to the GitHub repo as a source of truth."]}),"\n",(0,o.jsx)(t.h3,{id:"code-synced-for-the-entire-team",children:"Code synced for the entire team"}),"\n",(0,o.jsxs)(t.p,{children:["Depending on the type of software being developed or depending on team size, XState may only be used in a portion of the project\u2019s code. The project\u2019s repo may be used by many other team members who aren\u2019t yet using Stately Studio\u2019s features. Changes to the code could be made directly by those contributors to the GitHub repo and they need to be synchronized with the Studio on an ongoing basis. For users on a ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/studio-team-plan",children:"Team plan"})," who already collaborate in the Studio, their machines also need to be synced back to their repos. Git and GitHub already include intuitive tools for merging code and for conflict resolution so the Studio is now able to leverage those to keep everything in sync."]}),"\n",(0,o.jsx)(t.h2,{id:"whats-included-in-the-new-github-sync-release",children:"What\u2019s included in the new GitHub Sync release?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#a-more-robust-importing-process",children:"A more robust importing process"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#the-editing-power-of-stately-studio",children:"The editing power of Stately Studio"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#staying-in-sync-with-the-github-repo",children:"Staying in sync with the GitHub repo"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#creating-pull-requests-back-to-the-repo",children:"Creating pull requests back to the repo"})}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"a-more-robust-importing-process",children:"A more robust importing process"}),"\n",(0,o.jsxs)(t.p,{children:["Importing from a GitHub Repo is now easier and more robust. Users can automatically ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-changes-to-machines-from-github",children:"authorize Stately Studio"})," with a single click or they can choose to use a customized GitHub access token with fine grained repository access and permissions. Access allows users to then choose one of their GitHub repositories, including a specific branch, and then select which files and folders to include for import and even ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-changes-to-machines-from-github",children:"specify a path"})," for ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-changes-to-machines-from-github",children:"new machines created in the Studio"}),". The Studio will identify all of the XState machines in the repo files, extract them, and create a connected project. Connected projects work just like other Studio projects but with additional GitHub-related features."]}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)(i,{alt:"Importing allows users to choose a repository, a branch, and to select individual files or entire folders to sync with Stately Studio.",sources:{light:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-select-files.png",dark:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-select-files-dm.png"}})}),"\n",(0,o.jsx)(t.h3,{id:"editing-power-of-stately-studio",children:"Editing power of Stately Studio"}),"\n",(0,o.jsxs)(t.p,{children:["Once a connected project has been created, its machines can be edited just like with other projects and machines. Use the visual editor to add or modify states and transitions. Effects can be added and a machine\u2019s layout can be automatically or manually adjusted. Flows can be created or modified with AI generation. With a ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/studio-pro-plan",children:"Stately Studio Pro plan"}),", ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/versions#save-a-version",children:"machine versions can be saved"})," and machines can even be run via ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/stately-sky-getting-started",children:"Stately Sky"}),"."]}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)(i,{alt:"Stately Studio has offers powerful free and premium features for working with your state machines after importing them from a GitHub repository, like using Version History.",sources:{light:"/blog/2024-01-09-introducing-bidirectional-github-sync/premium-feature-version-history.png",dark:"/blog/2024-01-09-introducing-bidirectional-github-sync/premium-feature-version-history-dm.png"}})}),"\n",(0,o.jsx)(t.p,{children:"The Studio also provides a number of other features like test generation and export options to code, markdown, or to external editors. But this work can all be in coordination with the underlying GitHub repo."}),"\n",(0,o.jsx)(t.h3,{id:"staying-in-sync-with-the-github-repo",children:"Staying in sync with the GitHub repo"}),"\n",(0,o.jsxs)(t.p,{children:["By default, connected projects will ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-changes-to-machines-from-github",children:"automatically be synchronized with the GitHub repo"})," every time the project loads. New files added to selected folders in the repository will appear in the Studio. We\u2019ll also warn of any deleted files that might cause machines to be deleted in the Studio. It\u2019s possible to opt out of this and to perform syncs manually but we recommend that this still be done fairly often to prevent potential conflicts."]}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)(i,{alt:"By default, connected repos are auto-synced with the GitHub repo but this can be disabled if you want to manually sync instead.",sources:{light:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-auto-sync.png",dark:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-auto-sync-dm.png"}})}),"\n",(0,o.jsxs)(t.p,{children:["A connected project starts out ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-changes-to-machines-from-github",children:"in sync with the branch"})," that was specified during the import process via the project\u2019s ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#auto-sync",children:"auto-sync setting"}),". However, it is also possible to ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-changes-to-machines-from-github",children:"connect to additional repo branches"}),". Under the hood, these branch connections are considered a different version of the connected project and it\u2019s easy to switch between them, add new branches, or delete branch connections."]}),"\n",(0,o.jsxs)(t.p,{children:["At any time, new machines can be added directly to a connected project or existing machines can be moved or forked into a connected project. Those can all be ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#sync-new-machines-created-in-stately-studio",children:"added to the GitHub repo"})," as part of the pull request process."]}),"\n",(0,o.jsx)(t.h3,{id:"creating-pull-requests-back-to-the-repo",children:"Creating pull requests back to the repo"}),"\n",(0,o.jsxs)(t.p,{children:["The key feature required to complete a bidirectional workflow between GitHub and Stately Studio is the ability to ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#create-pull-request",children:"create pull requests"})," back to the original repository and that\u2019s now easy to do directly from the Studio. Connected projects have a GitHub Settings panel where you can manage the GitHub connection to your project, including creating a pull request which can target any other branch in the repository."]}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)(i,{alt:"Connected projects have a GitHub Settings panel where users can create new pull requests targeting any branch in the connected repository.",sources:{light:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-settings.png",dark:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-settings-dm.png"}})}),"\n",(0,o.jsxs)(t.p,{children:["Once a pull request is made, the process becomes the same as it is for any other GitHub pull request where it can be reviewed, modified, approved, and merged. Subsequent changes can be added to existing pull requests with the ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github#update-pull-request",children:"Update pull request feature"}),". This allows for greater productivity in the Studio while knowing that changes will make their way back into the GitHub repo."]}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)(i,{alt:"Pull requests appear on GitHub just as they normally would and can be reviewed, modified, approved, and merged.",sources:{light:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-pull-request.png",dark:"/blog/2024-01-09-introducing-bidirectional-github-sync/github-pull-request-dm.png"}})}),"\n",(0,o.jsx)(t.h2,{id:"whats-next",children:"What\u2019s next?"}),"\n",(0,o.jsxs)(t.p,{children:["We can\u2019t wait for you to try out GitHub Sync with your Studio machines and repositories. If you\u2019re a Pro user you can get started immediately. ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/studio-community-plan",children:"Community plan"})," users can ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/upgrade",children:"get a free trial"})," for our Pro or Team plans during which time you can import machines into Stately Studio to use GitHub Sync along with all of our other ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/studio-pro-plan",children:"Pro features"})," or ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/studio-team-plan",children:"Team features"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["But the fun doesn\u2019t stop there. It will soon be possible to modify file and folder selections after importing from a GitHub repo into a connected project. Another feature we are considering is the ability to convert existing Studio projects into connected projects which would create a new GitHub repository or add new branches to an existing repo. We\u2019d love to hear how ",(0,o.jsx)(t.a,{href:"https://stately.ai/docs/import-from-github",children:"GitHub Sync"})," is working for you and also what ",(0,o.jsx)(t.a,{href:"https://github.com/statelyai/feedback/issues/new/choose",children:"other features would be useful for you"})," and your team."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var o=i(67294);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);