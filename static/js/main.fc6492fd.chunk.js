(this["webpackJsonpmerill-site"]=this["webpackJsonpmerill-site"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(18),a=n.n(c),s=n(10),d=(n(66),n(85)),l=n(86),o=n(87),j=n(88),b=(n(67),n(52)),u=n(91),h=n(92),O=n(84),x=(n(20),n(0)),p=n(2);var f=function(){var e=Object(i.useState)({height:window.innerHeight,width:window.innerWidth}),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(0),a=Object(s.a)(c,2),d=a[0],l=a[1];function o(){r({height:window.innerHeight,width:window.innerWidth})}function j(){l(window.pageYOffset)}return Object(i.useEffect)((function(){window.addEventListener("resize",o)})),Object(i.useEffect)((function(){window.addEventListener("scroll",j)})),Object(p.jsx)(u.a,{fixed:"top",variant:"dark",style:{padding:"0px"},children:Object(p.jsxs)(h.a,{navbar:!0,fill:!0,className:n.width<=429?"nav-styles-sm":"nav-styles-md",style:d>100?{backgroundColor:"rgb(39, 39, 39)"}:{backgroundColor:"transparent"},children:[Object(p.jsx)(h.a.Link,{href:"#Home",children:"HOME"}),Object(p.jsx)(h.a.Link,{href:"#Prints",children:"PRINTS"}),Object(p.jsx)(h.a.Link,{href:"#Portfolio",children:"PORTFOLIO"}),Object(p.jsx)(h.a.Link,{href:"#About",children:"ABOUT"}),Object(p.jsx)(h.a.Item,{style:{verticalAlign:"middle",position:"relative"},children:Object(p.jsxs)(x.b.Provider,{value:{style:{verticalAlign:"middle",height:"100%",overflow:"visible"}},children:[Object(p.jsx)(b.a,{}),Object(p.jsx)("h6",{children:Object(p.jsx)(O.a,{pill:!0,bg:"warning",text:"dark",style:{position:"absolute",top:"3px",left:"52%"},children:3})})]})})]})})},g=n.p+"static/media/LandingPage.ba31465c.jpg";var m=function(){var e=r.a.useState({height:window.innerHeight,width:window.innerWidth}),t=Object(s.a)(e,2),n=t[0],c=t[1];function a(){c({height:window.innerHeight,width:window.innerWidth})}return Object(i.useEffect)((function(){window.addEventListener("resize",a)}),[]),n.width>=768?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(d.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px",paddingTop:"4vh"},id:"Home",children:Object(p.jsxs)(l.a,{md:3,style:{margin:"0px"},children:[Object(p.jsx)(o.a,{md:5,style:{padding:"0px"},children:Object(p.jsx)(j.a,{src:g,fluid:!0})}),Object(p.jsxs)(o.a,{md:4,style:{paddingTop:"4vw"},children:[Object(p.jsx)(l.a,{className:"name",children:"MERILL"}),Object(p.jsx)(l.a,{className:"name",children:"BOBOTIS"}),Object(p.jsx)(l.a,{className:"bar"}),Object(p.jsx)(l.a,{className:"profession",children:"Visual Artist"})]}),Object(p.jsx)(o.a,{md:3,style:{paddingLeft:"17vw",paddingTop:"2vw",paddingRight:"1vw"},id:"Home"})]})})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)(d.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px",paddingTop:"4vh"},id:"Home",children:[Object(p.jsx)(j.a,{src:g,fluid:!0}),Object(p.jsx)(l.a,{className:"name name-mobile",style:{margin:"0px"},children:Object(p.jsx)("p",{className:"text-center",children:"MERILL BOBOTIS"})}),Object(p.jsx)(l.a,{className:"bar-wrapper",style:{margin:"0px"},children:Object(p.jsx)("div",{className:"bar-mobile"})}),Object(p.jsx)(l.a,{className:"name",style:{margin:"0px"},children:Object(p.jsx)("p",{className:"profession-mobile text-center",children:"Visual Artist"})})]})]})},v=n(4),w=n(38),y=n.n(w),k=n(53),L=(n(75),n(76),n(93)),N=n(89);var C=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(p.jsxs)(L.a,{className:"card-styles",onMouseOver:function(){c(!0)},onMouseLeave:function(){c(!1)},children:[Object(p.jsx)(L.a.Img,{variant:"top",src:g,style:r?{filter:"brightness(20%)"}:{filter:"brightness(100%)"}}),r?Object(p.jsxs)(L.a.ImgOverlay,{children:[Object(p.jsx)(L.a.Title,{children:e.title}),Object(p.jsx)(L.a.Text,{children:e.description.substring(0,50)}),Object(p.jsx)(N.a,{variant:"dark",children:e.price})]}):Object(p.jsx)(p.Fragment,{})]})},T=n(90),P=n(30),I=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var E=function(){var e=Object(P.useQuery)("products",I),t=e.data,n=e.isLoading,i=e.error;return n?Object(p.jsx)(T.a,{animation:"border",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):i?Object(p.jsx)("div",{children:"Something went wrong... "}):Object(p.jsx)(d.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Prints",children:Object(p.jsx)(l.a,{style:{width:"100%",margin:"0px"},children:null===t||void 0===t?void 0:t.map((function(e){return Object(p.jsx)(o.a,{md:4,style:{padding:"0px"},children:Object(p.jsx)(C,Object(v.a)({},e))})}))})})};n(77);var S=function(){return Object(p.jsx)(d.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Portfolio"})};n(78);var H=function(){return Object(p.jsx)(d.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"About"})};n(79);var F=function(){return Object(p.jsx)(d.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Portfolio"})},A=new P.QueryClient;var B=function(){return Object(p.jsxs)(P.QueryClientProvider,{client:A,children:[Object(p.jsx)(m,{}),Object(p.jsx)(E,{}),Object(p.jsx)(S,{}),Object(p.jsx)(H,{}),Object(p.jsx)(F,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),M()}},[[80,1,2]]]);
//# sourceMappingURL=main.fc6492fd.chunk.js.map