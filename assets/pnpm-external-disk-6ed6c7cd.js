import{u as o,c as s,w as r,_ as p,o as l,a as e,d as t}from"./app-b266d4ec.js";const i=e("div",{class:"prose m-auto slide-enter-content"},[e("p",null,[t("If you tried to use "),e("a",{href:"https://pnpm.io/",target:"_blank",rel:"noopener"},"pnpm"),t(" to install a project on an external disk, it may not work right away because pnpm is heavily relying on symlinks, which doesn’t work cross mount points. To workaround this, you can add the following config to your "),e("code",null,".npmrc"),t(":")]),e("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"background-color":"#ffffff","--s-dark-bg":"#121212",color:"#393a34","--s-dark":"#dbd7caee"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1E754F","--s-dark":"#4D9375"}},"package-import-method"),e("span",{style:{color:"#999999","--s-dark":"#666666"}},"="),e("span",{style:{color:"#393A34","--s-dark":"#DBD7CAEE"}},"copy")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F","--s-dark":"#4D9375"}},"prefer-symlinked-executables"),e("span",{style:{color:"#999999","--s-dark":"#666666"}},"="),e("span",{style:{color:"#393A34","--s-dark":"#DBD7CAEE"}},"false")]),t(`
`),e("span",{class:"line"})])]),e("p",null,[t("This will make pnpm copy the files instead of symlinking them. And expose the executables in "),e("code",null,"node_modules/.bin"),t(" correctly.")])],-1),u={__name:"pnpm-external-disk",setup(c){const n={title:"pnpm on External disk",date:"2023-07-13T12:00:00.000Z",lang:"en",duration:"1min",type:"note",image:"https://antfu.me/og/pnpm-external-disk.png",meta:[{property:"og:title",content:"pnpm on External disk"},{name:"twitter:title",content:"pnpm on External disk"},{property:"og:image",content:"https://antfu.me/og/pnpm-external-disk.png"},{name:"twitter:image",content:"https://antfu.me/og/pnpm-external-disk.png"},{name:"twitter:card",content:"summary_large_image"}]};return o({title:"pnpm on External disk",meta:[{property:"og:title",content:"pnpm on External disk"},{name:"twitter:title",content:"pnpm on External disk"},{property:"og:image",content:"https://antfu.me/og/pnpm-external-disk.png"},{name:"twitter:image",content:"https://antfu.me/og/pnpm-external-disk.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,k)=>{const a=p;return l(),s(a,{frontmatter:n},{default:r(()=>[i]),_:1})}}};export{u as default};