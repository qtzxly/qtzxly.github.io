import{u as a,c as r,w as n,_ as l,o as i,a as e,b as o}from"./app-65cc71ad.js";const p=e("div",{class:"prose m-auto slide-enter-content"},[e("p",null,[o("In ESM, you might found your old friends "),e("code",null,"__dirname"),o(" and "),e("code",null,"__filename"),o(" are no longer available. When you search for "),e("a",{href:"https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag",target:"_blank",rel:"noopener"},"solutions"),o(", you will find that you will need to parse "),e("code",null,"import.meta.url"),o(" to get the equivalents. While most of the solutions only show you the way to get them in ESM only, If you like me, who write modules in TypeScript and transpile to both CJS and ESM at the same time using tools like "),e("a",{href:"https://tsup.egoist.sh/",target:"_blank",rel:"noopener"},[e("code",null,"tsup")]),o(". Here is the isomorphic solution:")]),e("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark",style:{"background-color":"#ffffff","--s-dark-bg":"#121212",color:"#393a34","--s-dark":"#dbd7caee"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1E754F","--s-dark":"#4D9375"}},"import"),e("span",{style:{color:"#999999","--s-dark":"#666666"}}," {"),e("span",{style:{color:"#B07D48","--s-dark":"#BD976A"}}," dirname"),e("span",{style:{color:"#999999","--s-dark":"#666666"}}," }"),e("span",{style:{color:"#1E754F","--s-dark":"#4D9375"}}," from"),e("span",{style:{color:"#B5695999","--s-dark":"#C98A7D99"}}," '"),e("span",{style:{color:"#B56959","--s-dark":"#C98A7D"}},"node:path"),e("span",{style:{color:"#B5695999","--s-dark":"#C98A7D99"}},"'")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1E754F","--s-dark":"#4D9375"}},"import"),e("span",{style:{color:"#999999","--s-dark":"#666666"}}," {"),e("span",{style:{color:"#B07D48","--s-dark":"#BD976A"}}," fileURLToPath"),e("span",{style:{color:"#999999","--s-dark":"#666666"}}," }"),e("span",{style:{color:"#1E754F","--s-dark":"#4D9375"}}," from"),e("span",{style:{color:"#B5695999","--s-dark":"#C98A7D99"}}," '"),e("span",{style:{color:"#B56959","--s-dark":"#C98A7D"}},"node:url"),e("span",{style:{color:"#B5695999","--s-dark":"#C98A7D99"}},"'")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959","--s-dark":"#CB7676"}},"const"),e("span",{style:{color:"#B07D48","--s-dark":"#BD976A"}}," _dirname"),e("span",{style:{color:"#999999","--s-dark":"#666666"}}," ="),e("span",{style:{color:"#AB5959","--s-dark":"#CB7676"}}," typeof"),e("span",{style:{color:"#B07D48","--s-dark":"#BD976A"}}," __dirname"),e("span",{style:{color:"#AB5959","--s-dark":"#CB7676"}}," !=="),e("span",{style:{color:"#B5695999","--s-dark":"#C98A7D99"}}," '"),e("span",{style:{color:"#B56959","--s-dark":"#C98A7D"}},"undefined"),e("span",{style:{color:"#B5695999","--s-dark":"#C98A7D99"}},"'")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959","--s-dark":"#CB7676"}},"  ?"),e("span",{style:{color:"#B07D48","--s-dark":"#BD976A"}}," __dirname")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959","--s-dark":"#CB7676"}},"  :"),e("span",{style:{color:"#59873A","--s-dark":"#80A665"}}," dirname"),e("span",{style:{color:"#999999","--s-dark":"#666666"}},"("),e("span",{style:{color:"#59873A","--s-dark":"#80A665"}},"fileURLToPath"),e("span",{style:{color:"#999999","--s-dark":"#666666"}},"("),e("span",{style:{color:"#1E754F","--s-dark":"#4D9375"}},"import"),e("span",{style:{color:"#999999","--s-dark":"#666666"}},"."),e("span",{style:{color:"#998418","--s-dark":"#B8A965"}},"meta"),e("span",{style:{color:"#999999","--s-dark":"#666666"}},"."),e("span",{style:{color:"#B07D48","--s-dark":"#BD976A"}},"url"),e("span",{style:{color:"#999999","--s-dark":"#666666"}},"))")]),o(`
`),e("span",{class:"line"})])])],-1),k={__name:"isomorphic-dirname copy",setup(c){const s={title:"Isomorphic `__dirname`",date:"2021-08-30T16:00:00.000Z",lang:"en",duration:"1min",type:"note",image:"https://antfu.me/og/isomorphic-dirname copy.png",meta:[{property:"og:title",content:"Isomorphic `__dirname`"},{name:"twitter:title",content:"Isomorphic `__dirname`"},{property:"og:image",content:"https://antfu.me/og/isomorphic-dirname copy.png"},{name:"twitter:image",content:"https://antfu.me/og/isomorphic-dirname copy.png"},{name:"twitter:card",content:"summary_large_image"}]};return a({title:"Isomorphic `__dirname`",meta:[{property:"og:title",content:"Isomorphic `__dirname`"},{name:"twitter:title",content:"Isomorphic `__dirname`"},{property:"og:image",content:"https://antfu.me/og/isomorphic-dirname copy.png"},{name:"twitter:image",content:"https://antfu.me/og/isomorphic-dirname copy.png"},{name:"twitter:card",content:"summary_large_image"}]}),(m,y)=>{const t=l;return i(),r(t,{frontmatter:s},{default:n(()=>[p]),_:1})}}};export{k as default};