import{i,D as l,E as s,o as d,g as c,b as p,t as r,a as m}from"./app-0667357e.js";const u=["data-cal-link"],f=m("div",{"i-ri-calendar-event-fill":""},null,-1),_=i({__name:"CalCom",props:{link:{},title:{}},setup(w){return typeof window<"u"&&(window.Cal=window.Cal||function(...e){const a=function(n,o){n.q.push(o)},t=window.Cal;if(t.loaded||(t.ns={},t.q=t.q||[],document.head.appendChild(document.createElement("script")).src="https://app.cal.com/embed/embed.js",t.loaded=!0),e[0]==="init"){const n=function(){a(n,e)},o=e[1];n.q=n.q||[],typeof o=="string"?(t.ns[o]=n)&&a(n,e):a(t,e);return}a(t,e)},window.Cal("init",{origin:"https://app.cal.com"}),l(()=>{window.Cal("ui",{theme:s.value?"dark":"light",styles:{branding:{brandColor:"#000000"}},hideEventTypeDetails:!1,layout:"month_view"})})),(e,a)=>(d(),c("button",{"data-cal-link":e.link,"btn-gray":"","text-sm":""},[f,p(" "+r(e.title),1)],8,u))}});export{_};