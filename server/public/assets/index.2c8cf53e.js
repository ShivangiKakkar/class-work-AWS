import{o as d,c as u,a as t,d as f,t as m,b as p,e as A,f as N,g as H,r as R,h as S,u as r,i as l,w as h,p as P,j as O,k as j,l as T,F as I,m as U,n as b,R as g,q as V,s as W}from"./vendor.82677934.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};q();const F="modulepreload",C={},M="/",K=function(n,o){return!o||o.length===0?n():Promise.all(o.map(a=>{if(a=`${M}${a}`,a in C)return;C[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":F,s||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),s)return new Promise((L,E)=>{c.addEventListener("load",L),c.addEventListener("error",E)})})).then(()=>n())};var k=(e,n)=>{const o=e.__vccOpts||e;for(const[a,s]of n)o[a]=s;return o};const D={},J={class:"section"},z=t("h1",null,"Home Page",-1),Y=[z];function G(e,n){return d(),u("div",J,Y)}var Q=k(D,[["render",G]]);const X={class:"section"},Z={class:"title"},v=f({props:{title:{type:String,default:"Hello World"}},setup(e){const n=e;return(o,a)=>(d(),u("div",X,[t("h1",Z,m(n.title),1)]))}}),tt={class:"section"},st=t("h1",{class:"title"},"Login Page",-1),et=t("span",{class:"icon"},[t("i",{class:"fa fa-sign-in"})],-1),nt=t("span",null,"Login",-1),ot=[et,nt],at=p(" \xA0 "),it=t("span",{class:"icon"},[t("i",{class:"fa fa-sign-in"})],-1),rt=t("span",null,"Bad Login",-1),ct=[it,rt],lt=f({setup(e){function n(){x("Shivangi Kakkar","coffee")}function o(){x("joebiden","birdsinging")}return(a,s)=>(d(),u("div",tt,[st,t("button",{class:"button is-primary",onClick:o},ot),at,t("button",{class:"button is-warning",onClick:n},ct)]))}}),dt=[{path:"/",component:Q},{path:"/about",component:v,props:{title:"About Page!"}},{path:"/contact",component:v,props:{title:"Contact Page"}},{path:"/login",component:lt},{path:"/signup",component:v,props:{title:"Signup Page"}},{path:"/wall",component:()=>K(()=>import("./Wall.587ed45b.js"),["assets/Wall.587ed45b.js","assets/Wall.a0b51b7e.css","assets/vendor.82677934.js"])},{path:"/hidden",component:v,props:{title:"Hidden Page"}}],y=A({history:N(),routes:dt,linkActiveClass:"is-active"});y.beforeEach((e,n)=>{_.destinationUrl==null&&_.destinationUrl==e.path,console.log({to:e});const o=["/messages","/feed","/wall","/hidden"];if(console.log({protectedUrls:o}),o.includes(e.path)&&(console.log("requires login"),!_.user))return"/login"});const ut=[{firstname:"Shivangi",lastname:"Kakkar",handle:"shivangikakkar",password:"coffeee",email:"shivangikakkar15@gmail.com",pic:"https://randomuser.me/api/portraits/women/21.jpg",id:1},{firstname:"Vladimir",lastname:"Putin",handle:"russian_dictator",password:"long table",email:"vladimirputin.com",pic:"https://randomuser.me/api/portraits/men/8.jpg",id:2},{firstname:"Joe",lastname:"Biden",handle:"joebiden",password:"birdsinging",email:"joebiden.com",pic:"https://randomuser.me/api/portraits/men/76.jpg",id:3}],B=H("messages",{state:()=>({notifications:[{type:"primary",message:"This is primary notification"},{type:"link",message:"This is a link notification"},{type:"success",message:"Yayy you did it!"},{type:"warning",message:"Oee! Watch out!"},{type:"danger",message:"I cant believe you just did that!"}]}),actions:{close(e){this.notifications.splice(e,1)}}}),$=R({user:null,destinationUrl:null});async function x(e,n){var s;const o=ut.find(i=>i.handle===e),a=B();try{if(!o)throw{message:"User not found!"};if(o.password!==n)throw{message:"Incorrect Password"};a.notifications.push({type:"success",message:`Welcome back ${o.firstname}`}),$.user=o,y.push((s=$.destinationUrl)!=null?s:"/wall")}catch(i){a.notifications.push({type:"danger",message:i.message}),console.table(a.notifications)}}function _t(){$.user=null,y.push("/login")}var _=$;const w=e=>(P("data-v-61bba6b6"),e=e(),O(),e),pt={key:0,class:"buttons"},ht=w(()=>t("strong",null,"Sign up",-1)),mt=p(" Log in "),ft={key:1,class:"buttons"},gt={class:"avatar"},vt=["src"],bt=w(()=>t("br",null,null,-1)),$t=w(()=>t("strong",null,"Log Out",-1)),yt=[$t],kt=f({setup(e){return(n,o)=>{const a=S("router-link");return r(_).user?(d(),u("div",ft,[t("div",gt,[t("img",{src:r(_).user.pic},null,8,vt),t("div",null,[t("strong",null,m(r(_).user.firstname)+" "+m(r(_).user.lastname),1),bt,t("i",null,m(r(_).user.email),1)])]),t("a",{class:"button is-primary",onClick:o[0]||(o[0]=s=>r(_t)())},yt)])):(d(),u("div",pt,[l(a,{class:"button is-primary",to:"/signup"},{default:h(()=>[ht]),_:1}),l(a,{class:"button is-light",to:"/login"},{default:h(()=>[mt]),_:1})]))}}});var wt=k(kt,[["__scopeId","data-v-61bba6b6"]]);const Lt=e=>(P("data-v-2b2dc523"),e=e(),O(),e),Ct=Lt(()=>t("span",{class:"icon"},[t("i",{class:"fas fa-bell"})],-1)),xt={key:0,class:"tag is-danger"},St={class:"navbar-dropdown"},Pt=["onClick"],Ot=f({setup(e){const n=B(),o=j(!1);return(a,s)=>(d(),u("div",{class:b(["navbar-item has-dropdown",{"is-active":o.value}])},[t("a",{class:"navbar-link",onClick:s[0]||(s[0]=i=>o.value=!o.value)},[Ct,r(n).notifications.length?(d(),u("span",xt,m(r(n).notifications.length),1)):T("",!0)]),t("div",St,[(d(!0),u(I,null,U(r(n).notifications,(i,c)=>(d(),u("div",{class:b(`notification is-light is-${i.type}`)},[t("button",{class:"delete",onClick:L=>r(n).close(c)},null,8,Pt),p(" "+m(i.message),1)],2))),256))])],2))}});var jt=k(Ot,[["__scopeId","data-v-2b2dc523"]]);const It={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},Bt={class:"container"},Et={class:"navbar-brand"},At=t("a",{class:"navbar-item",href:"https://bulma.io"},[t("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Nt=t("span",{"aria-hidden":"true"},null,-1),Ht=t("span",{"aria-hidden":"true"},null,-1),Rt=t("span",{"aria-hidden":"true"},null,-1),Tt=[Nt,Ht,Rt],Ut={class:"navbar-start"},Vt=p(" Home "),Wt=p(" Wall "),qt={class:"navbar-item has-dropdown is-hoverable"},Ft=t("a",{class:"navbar-link"}," More ",-1),Mt={class:"navbar-dropdown"},Kt=p(" About "),Dt=p(" Jobs "),Jt=p(" Contact "),zt=t("hr",{class:"navbar-divider"},null,-1),Yt=t("a",{class:"navbar-item"}," Report an issue ",-1),Gt={class:"navbar-end"},Qt={class:"navbar-item"},Xt=t("div",{class:"navbar-item"},[t("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[t("span",{class:"icon"},[t("i",{class:"fab fa-twitter"})]),t("span",null," Tweet ")])],-1),Zt=f({setup(e){const n=j(!1);return(o,a)=>(d(),u("nav",It,[t("div",Bt,[t("div",Et,[At,t("a",{role:"button",class:b(["navbar-burger",{"is-active":n.value}]),"aria-label":"menu","aria-expanded":"false",onClick:a[0]||(a[0]=s=>n.value=!n.value)},Tt,2)]),t("div",{id:"navbarBasicExample",class:b(["navbar-menu",{"is-active":n.value}])},[t("div",Ut,[l(r(g),{class:"navbar-item",to:"/"},{default:h(()=>[Vt]),_:1}),l(r(g),{class:"navbar-item",to:"/wall"},{default:h(()=>[Wt]),_:1}),t("div",qt,[Ft,t("div",Mt,[l(r(g),{class:"navbar-item",to:"/about"},{default:h(()=>[Kt]),_:1}),l(r(g),{class:"navbar-item",to:"/jobs"},{default:h(()=>[Dt]),_:1}),l(r(g),{class:"navbar-item",to:"/contact"},{default:h(()=>[Jt]),_:1}),zt,Yt])])]),t("div",Gt,[t("div",Qt,[l(wt)]),l(jt),Xt])],2)])]))}}),ts={class:"container"},ss=f({setup(e){return(n,o)=>{const a=S("router-view");return d(),u(I,null,[l(Zt),t("div",ts,[l(a)])],64)}}});V(ss).use(y).use(W()).mount("#app");
