"use strict";(self.webpackChunkstately_docs=self.webpackChunkstately_docs||[]).push([[3029],{71704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=a(85893),n=a(11151);const i={title:"Embed Figma designs in Stately",description:"You can now embed Figma frames in Stately states",tags:["stately","studio","figma","design","statecharts","state machines","xstate"],authors:["nick"],date:new Date("2024-01-24T00:00:00.000Z"),slug:"2024-01-24-embed-figma",image:"/blog/2024-01-24-embed-figma.png"},o=void 0,r={permalink:"/xstate-zh/blog/2024-01-24-embed-figma",editUrl:"https://github.com/statelyai/docs/edit/main/blog/2024-01-24-embed-figma/index.mdx",source:"@site/blog/2024-01-24-embed-figma/index.mdx",title:"Embed Figma designs in Stately",description:"You can now embed Figma frames in Stately states",date:"2024-01-24T00:00:00.000Z",formattedDate:"January 24, 2024",tags:[{label:"stately",permalink:"/xstate-zh/blog/tags/stately"},{label:"studio",permalink:"/xstate-zh/blog/tags/studio"},{label:"figma",permalink:"/xstate-zh/blog/tags/figma"},{label:"design",permalink:"/xstate-zh/blog/tags/design"},{label:"statecharts",permalink:"/xstate-zh/blog/tags/statecharts"},{label:"state machines",permalink:"/xstate-zh/blog/tags/state-machines"},{label:"xstate",permalink:"/xstate-zh/blog/tags/xstate"}],readingTime:4.225,hasTruncateMarker:!0,authors:[{name:"Nick Perich",title:"Stately Team",url:"https://github.com/cirephe",imageURL:"https://ascelcgzufjyvdzuplwo.supabase.co/storage/v1/object/public/avatars/nick.png",key:"nick"}],frontMatter:{title:"Embed Figma designs in Stately",description:"You can now embed Figma frames in Stately states",tags:["stately","studio","figma","design","statecharts","state machines","xstate"],authors:["nick"],date:"2024-01-24T00:00:00.000Z",slug:"2024-01-24-embed-figma",image:"/blog/2024-01-24-embed-figma.png"},unlisted:!1,prevItem:{title:"Building backend workflows with Stately: Credit checking flow",permalink:"/xstate-zh/blog/2024-01-24-building-backend-workflows-credit-checking"},nextItem:{title:"State Machines - What\u2019s in a name?",permalink:"/xstate-zh/blog/2024-01-23-state-machines-whats-in-a-name"}},l={authorsImageUrls:[void 0]},d=[{value:"Improve your team workflows by combining Stately and Figma",id:"improve-your-team-workflows-by-combining-stately-and-figma",level:2},{value:"How to embed Figma frames",id:"how-to-embed-figma-frames",level:2},{value:"Try it out!",id:"try-it-out",level:2}];function c(e){const t={a:"a",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{ThemedImage:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ThemedImage",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["We already kicked off 2024 with several major updates to Stately such as ",(0,s.jsx)(t.a,{href:"/blog/2024-01-15-stately-inspector",children:"inspecting live XState code"}),", ",(0,s.jsx)(t.a,{href:"/blog/2024-01-09-introducing-bidirectional-github-sync",children:"syncing with GitHub"}),", and ",(0,s.jsx)(t.a,{href:"/blog/2024-01-09-introducing-sources",children:"writing code for actions and actors in the Studio"}),". Today we\u2019re excited to announce that we\u2019ve also launched an integration with Figma!"]}),"\n",(0,s.jsx)(t.p,{children:"You can now attach Figma frames to states in Stately."}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(i,{alt:"Three Figma frames displayed in three Stately states for a music player. The ready state shows a record stack app view, following the openAlbum event, the viewingAlbum state shows the Wild Winds album coverart and information, from the viewingAlbum state, there\u2019s a play event that takes you to the playingAlbum state which shows the album list for the Wild Winds album and a player progress bar. The pause event returns from the playingAlbum state to the viewingAlbum state.",sources:{light:"/blog/2024-01-24-embed-figma/figma-light.png",dark:"/blog/2024-01-24-embed-figma/figma-dark.png"}})}),"\n",(0,s.jsx)(t.h2,{id:"improve-your-team-workflows-by-combining-stately-and-figma",children:"Improve your team workflows by combining Stately and Figma"}),"\n",(0,s.jsx)(t.p,{children:"Embedding Figma into Stately can significantly streamline and enhance a team\u2019s workflow."}),"\n",(0,s.jsxs)(t.p,{children:["Being able to view mockups of the states you are discussing makes it easy to ",(0,s.jsx)(t.em,{children:"see"})," what might be missing and to identify potential improvements. It allows team members to view designs directly as part of the app logic itself."]}),"\n",(0,s.jsx)(t.p,{children:"Two examples of how this can work are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Engineers can import state machine code, then designers can fill out images for each state of the actual logic in the code."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Designers, PMs, and other stakeholders can create the expected behavior by embedding Figma frames into a Stately diagram, then engineers can continue adding the functionality from the automatically scaffolded code."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This seamless integration can speed up the design process and ensure all team members are on the same page. Team members can easily share design details, run critiques, and iterate with people across different specializations."}),"\n",(0,s.jsxs)(t.p,{children:["It also ensures that everyone is always looking at the most up-to-date design, as changes made in Figma are reflected in the embedded view. And with ",(0,s.jsx)(t.a,{href:"blog/2024-01-09-introducing-bidirectional-github-sync",children:"GitHub Sync"})," enabled, changes to the code can even automatically update how the Figma frames are organized in Stately."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-embed-figma-frames",children:"How to embed Figma frames"}),"\n",(0,s.jsxs)(t.p,{children:["Figma embedding is part of our ",(0,s.jsx)(t.a,{href:"/docs/studio-pro-plan",children:"Pro plan"}),". You can ",(0,s.jsx)(t.a,{href:"https://stately.ai/pricing",children:"try all our premium features for free with our free trial"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To embed Figma frames in Stately, first you need to authenticate using a personal access token."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens",children:"Get a personal access token"}),' from Figma. Set "File content" to "Allow Read-only access" so Stately can get the images.']}),"\n",(0,s.jsxs)(t.li,{children:["Enter this token in Stately by opening a project, finding the ",(0,s.jsx)(t.strong,{children:"Stately menu"})," in the top left, selecting ",(0,s.jsx)(t.strong,{children:"Account"}),", opening ",(0,s.jsx)(t.strong,{children:"Settings"}),", and clicking the ",(0,s.jsx)(t.strong,{children:"Figma"})," tab."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Then you can link frames to states."}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["In Figma, right click on the frame you want to embed, select ",(0,s.jsx)(t.strong,{children:"Copy/Paste as"}),", then ",(0,s.jsx)(t.strong,{children:"Copy link"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["In Stately, select a state, open the ",(0,s.jsx)(t.strong,{children:"+"})," menu, choose ",(0,s.jsx)(t.strong,{children:"Embed Figma"}),", and paste your link."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.youtube.com/live/c05bOPeinSA?si=qyUlnx7f7_StLDZ_&t=1006",children:"Watch a video of how embedding Figma frames works"})," from our recent Office Hours."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Frame inside Figma showing the menu for copy/paste as, and copy link. Alongside a frame in Stately showing the plus menu and the Embed Figma option.",src:a(24874).Z+"",width:"1600",height:"547"})}),"\n",(0,s.jsx)(t.p,{children:"Now any changes to this frame in Figma will be automatically reflected in Stately after each page load."}),"\n",(0,s.jsx)(t.p,{children:"You can delete the embed or adjust the size of the image by selecting the state and finding the controls at the top right of the embedded image."}),"\n",(0,s.jsx)(t.p,{children:"A few more details to get you rolling:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Stately supports linking to any type of Figma node that you can get, not just frames. But we recommend generally using frames due to how well they correspond to states."}),"\n",(0,s.jsxs)(t.li,{children:["Figma embeds are a new type of ",(0,s.jsx)(t.strong,{children:"asset"})," in Stately. We also support ",(0,s.jsx)(t.a,{href:"/docs/assets",children:"attaching images, videos, documents, and PDFs to states as assets"}),". You can feature a single asset on the canvas at a time. To feature a different asset, open the state details panel and drag that asset to the first position in the assets list."]}),"\n",(0,s.jsx)(t.li,{children:"Stately embeds Figma frames as SVG images. This means fast load times and great scaling quality across different sizes. However, a few features of Figma (like background blur) are not supported in svg exports. When you notice an issue and high visual fidelity is important, you can export the frame as a PNG image and then attach the image itself as an image asset to the Stately state (rather than as a Figma embed from a link). It just won\u2019t be automatically synced."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"try-it-out",children:"Try it out!"}),"\n",(0,s.jsx)(t.p,{children:"We are excited to see what you do with this feature. There is a lot of potential for reducing silos between roles and helping make communication smoother."}),"\n",(0,s.jsxs)(t.p,{children:["Please share your feedback with us on our ",(0,s.jsx)(t.a,{href:"https://discord.stately.ai",children:"social platforms"})," or in our regular ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=-Jf9N-EaUx0&list=PLvWgkXBB3dd6PXbSoctwDXjWX-AQrxhds",children:"office hours live streams"}),". If you want help getting started with embedding Figma frames or getting your team set up with Stately and XState, ",(0,s.jsx)(t.a,{href:"https://stately.ai/pricing#services",children:"the Stately team is available for workshops and consulting"}),", and you can ",(0,s.jsx)(t.a,{href:"https://calendly.com/d/yc8-3hq-rpc/request-a-demo",children:"book a demo call"})," with us to learn more about how Stately can work for your team."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},24874:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/figmatostately-86f0456e3e4ea8ae871c0bb77061fe3f.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var s=a(67294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);