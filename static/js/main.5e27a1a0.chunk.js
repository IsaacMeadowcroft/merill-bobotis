(this["webpackJsonpmerill-site"]=this["webpackJsonpmerill-site"]||[]).push([[0],{100:function(e,t,i){},104:function(e,t,i){},107:function(e,t,i){},108:function(e,t,i){},109:function(e,t,i){},110:function(e,t,i){},113:function(e,t,i){},114:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),c=i(21),r=i.n(c),a=i(9),d=i(67),l=i.n(d),o=i(81),j=(i(100),i(118)),b=i(119),m=i(82),h=i(120),u=(i(24),i.p+"static/media/LandingPage.ba31465c.jpg"),O=i(2);var x,p=function(e){return e.dimensions.width>=768?Object(O.jsx)(j.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px",paddingTop:"4vh"},id:"Home",children:Object(O.jsxs)(b.a,{md:3,style:{margin:"0px"},children:[Object(O.jsx)(m.a,{md:5,style:{padding:"0px"},children:Object(O.jsx)(h.a,{src:u,fluid:!0})}),Object(O.jsxs)(m.a,{md:4,style:{paddingTop:"4vw"},children:[Object(O.jsx)(b.a,{className:"name",children:"MERILL"}),Object(O.jsx)(b.a,{className:"name",children:"BOBOTIS"}),Object(O.jsx)(b.a,{className:"bar"}),Object(O.jsx)(b.a,{className:"profession",children:"Visual Artist"})]}),Object(O.jsx)(m.a,{md:3,style:{paddingLeft:"17vw",paddingTop:"2vw",paddingRight:"1vw"},id:"Home"})]})}):Object(O.jsxs)(j.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px",paddingTop:"4vh"},id:"Home",children:[Object(O.jsx)(h.a,{src:u,fluid:!0}),Object(O.jsx)(b.a,{className:"name name-mobile",style:{margin:"0px"},children:Object(O.jsx)("p",{className:"text-center",children:"MERILL BOBOTIS"})}),Object(O.jsx)(b.a,{className:"bar-wrapper",style:{margin:"0px"},children:Object(O.jsx)("div",{className:"bar-mobile"})}),Object(O.jsx)(b.a,{className:"name",style:{margin:"0px"},children:Object(O.jsx)("p",{className:"profession-mobile text-center",children:"Visual Artist"})})]})},f=(i(104),i(71),i(129)),g=i(3),v=i(124),I=i(127),y=i(125),C=i(121);!function(e){e[e.SMALL=0]="SMALL",e[e.MEDIUM=1]="MEDIUM",e[e.LARGE=2]="LARGE"}(x||(x={}));var w=i(15);var k=function(e){var t=Object(w.f)(),i=Object(n.useState)(x.SMALL),s=Object(a.a)(i,2),c=s[0],r=s[1],d=e.shopItem.price;return d=c==x.SMALL?e.shopItem.price:c==x.MEDIUM?2*e.shopItem.price:3*e.shopItem.price,Object(O.jsxs)(v.a,Object(g.a)(Object(g.a)({},e),{},{dialogClassName:"modal-90w","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(O.jsx)(v.a.Header,{closeButton:!0,children:Object(O.jsx)(v.a.Title,{id:"contained-modal-title-vcenter",children:e.shopItem.title})}),Object(O.jsx)(v.a.Body,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{sm:12,md:4,children:Object(O.jsxs)(I.a,{fade:!0,children:[Object(O.jsx)(I.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:e.shopItem.image,alt:"First slide"})}),Object(O.jsx)(I.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:e.shopItem.image,alt:"Second slide"})}),Object(O.jsx)(I.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-100",src:e.shopItem.image,alt:"Third slide"})})]})}),Object(O.jsxs)(m.a,{sm:12,md:8,children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("p",{children:e.shopItem.description})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(y.a,{children:Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)(y.a.Check,{defaultChecked:!0,inline:!0,label:"Small",name:"group1",type:"radio",onClick:function(){r(x.SMALL)}}),Object(O.jsx)(y.a.Check,{inline:!0,label:"Medium",name:"group1",type:"radio",onClick:function(){r(x.MEDIUM)}}),Object(O.jsx)(y.a.Check,{inline:!0,label:"Large",name:"group1",type:"radio",onClick:function(){r(x.LARGE)}})]})})}),Object(O.jsxs)("h6",{children:["$",d]}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(m.a,{sm:6,children:Object(O.jsx)(C.a,{variant:"warning",style:{width:"100%"},onClick:function(){return e.addCartItem(e.shopItem.id,c)},children:"Add to Cart"})}),Object(O.jsx)(m.a,{sm:6,children:Object(O.jsx)(C.a,{variant:"dark",style:{width:"100%"},onClick:function(){e.addCartItem(e.shopItem.id,c),t.push("/Cart")},children:"Buy Now"})})]})]})]})})]}))};var L=function(e){var t=Object(n.useState)(!1),i=Object(a.a)(t,2),s=i[0],c=i[1],r=Object(n.useState)(!1),d=Object(a.a)(r,2),l=d[0],o=d[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(f.a,{className:"card-styles",onMouseOver:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:function(){return o(!0)},children:[Object(O.jsx)(f.a.Img,{variant:"top",src:e.shopItem.image,style:s?{filter:"brightness(20%)"}:{filter:"brightness(100%)"},className:"img-size"}),s?Object(O.jsxs)(f.a.ImgOverlay,{children:[Object(O.jsxs)(f.a.Title,{children:[e.shopItem.title.substring(0,35),"..."]}),Object(O.jsxs)(f.a.Text,{children:[e.shopItem.description.substring(0,100),"..."]}),Object(O.jsxs)("h6",{children:["$",e.shopItem.price]})]}):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsx)(k,{shopItem:e.shopItem,show:l,onHide:function(){return o(!1)},dimensions:e.dimensions,scrollPosition:e.scrollPosition,addCartItem:e.addCartItem,removeCartItem:e.removeCartItem})]})};var N=function(e){var t;return Object(O.jsx)(j.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Prints",children:Object(O.jsx)(b.a,{style:{width:"100%",margin:"0px"},children:null===(t=e.shopItems)||void 0===t?void 0:t.map((function(t){return Object(O.jsx)(m.a,{md:4,style:{padding:"0px"},children:Object(O.jsx)(L,{shopItem:t,dimensions:e.dimensions,scrollPosition:e.scrollPosition,addCartItem:e.addCartItem,removeCartItem:e.removeCartItem})})}))})})};i(107);var S=function(e){return Object(O.jsx)(j.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Portfolio"})};i(108);var P=function(e){return Object(O.jsx)(j.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"About"})};i(109);var M=function(e){return Object(O.jsx)(j.a,{fluid:!0,style:{backgroundColor:"black",padding:"0px"},id:"Portfolio"})},A=(i(110),i(86)),E=i(128),T=i(126),z=i(122),B=i(0);var F=function(e){return Object(O.jsx)(E.a,{fixed:"top",variant:"dark",style:{padding:"0px"},children:Object(O.jsxs)(T.a,{navbar:!0,fill:!0,className:e.dimensions.width<=429?"nav-styles-sm":"nav-styles-md",style:e.scrollPosition>100?{backgroundColor:"rgb(39, 39, 39)"}:{backgroundColor:"transparent"},children:[Object(O.jsx)(T.a.Link,{href:"#Home",children:"HOME"}),Object(O.jsx)(T.a.Link,{href:"#Prints",children:"PRINTS"}),Object(O.jsx)(T.a.Link,{href:"#Portfolio",children:"PORTFOLIO"}),Object(O.jsx)(T.a.Link,{href:"#About",children:"ABOUT"}),Object(O.jsx)(T.a.Link,{href:"\\Cart",className:"nav-bag",style:{verticalAlign:"middle",position:"relative",padding:"0px",margin:"0px"},children:Object(O.jsxs)(B.b.Provider,{value:{style:{verticalAlign:"middle",height:"100%",overflow:"visible"}},children:[Object(O.jsx)(A.a,{}),e.cartItems.size>0?Object(O.jsx)("h6",{children:Object(O.jsx)(z.a,{pill:!0,bg:"warning",text:"dark",style:{fontFamily:"Helvetica Neue",position:"absolute",top:"3px",left:"52%"},children:e.cartItems.size})}):Object(O.jsx)(O.Fragment,{})]})})]})})};i(113);var H=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E.a,{bg:"light",children:Object(O.jsx)(j.a,{children:Object(O.jsx)(T.a,{className:"me-auto",children:Object(O.jsx)(T.a.Link,{href:"/merill-site/",children:"Back"})})})}),Object(O.jsx)(j.a,{fluid:!0,id:"Cart",children:Array.from(e.cartItems.keys()).map((function(t){var i,n,s,c,r,a;return Object(O.jsxs)(b.a,{style:{padding:"0px",margin:"0px"},children:[Object(O.jsx)(m.a,{sm:6,style:{padding:"0px",margin:"0px"},children:Object(O.jsx)(h.a,{src:null===(i=e.shopItems)||void 0===i||null===(n=i.find((function(e){return e.id===t.id})))||void 0===n?void 0:n.image})}),Object(O.jsxs)(m.a,{sm:6,style:{padding:"0px",margin:"0px"},children:[Object(O.jsxs)("h5",{children:["ID: ",t.id]}),Object(O.jsxs)("h5",{children:["Size: ",x[t.size]]}),Object(O.jsxs)("h5",{children:["Description:"," ",null===(s=e.shopItems)||void 0===s||null===(c=s.find((function(e){return e.id===t.id})))||void 0===c?void 0:c.description]}),Object(O.jsxs)("h5",{children:["Price: ",null===(r=e.shopItems)||void 0===r||null===(a=r.find((function(e){return e.id===t.id})))||void 0===a?void 0:a.price]}),Object(O.jsxs)("h5",{children:["Quantity: ",e.cartItems.get(t)]}),Object(O.jsx)(b.a,{style:{width:"100%"},children:Object(O.jsx)(C.a,{onClick:function(){return e.removeCartItem(t.id,t.size)},children:"Remove from Cart"})})]})]})}))})]})},R=i(50),D=i(66),U=i(123),J=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var Q=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),i=t[0],s=t[1],c=Object(n.useState)({height:window.innerHeight,width:window.innerWidth}),r=Object(a.a)(c,2),d=r[0],l=r[1],o=Object(n.useState)(new Map([JSON.parse(localStorage.userCart)])),j=Object(a.a)(o,2),b=j[0],m=j[1],h=Object(R.useQuery)("products",J),u=h.data,x=h.isLoading,f=h.error;function g(){s(window.pageYOffset)}function v(){l({height:window.innerHeight,width:window.innerWidth})}function I(e,t){var i=b.get({id:e,size:t});m(i?b.set({id:e,size:t},i+1):b.set({id:e,size:t},1))}function y(e,t){var i=b.get({id:e,size:t});void 0!=i&&(i>1?m(b.set({id:e,size:t},i-1)):1==i&&(b.delete({id:e,size:t}),m(b)))}return Object(n.useEffect)((function(){window.addEventListener("scroll",g)}),[i]),Object(n.useEffect)((function(){window.addEventListener("resize",v)}),[d]),Object(n.useEffect)((function(){localStorage.userCart=JSON.stringify(Array.from(b.entries())),localStorage.setItem("userCart",localStorage.userCart)}),[b.size]),f?Object(O.jsx)("div",{children:"Something went wrong... "}):Object(O.jsx)(D.a,{children:Object(O.jsxs)(w.c,{children:[Object(O.jsxs)(w.a,{exact:!0,path:"/merill-site",children:[Object(O.jsx)(F,{dimensions:d,scrollPosition:i,cartItems:b}),Object(O.jsx)(p,{dimensions:d,scrollPosition:i}),x?Object(O.jsx)(U.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(O.jsx)(N,{dimensions:d,scrollPosition:i,shopItems:u,cartItems:b,addCartItem:I,removeCartItem:y}),Object(O.jsx)(S,{dimensions:d,scrollPosition:i}),Object(O.jsx)(P,{dimensions:d,scrollPosition:i}),Object(O.jsx)(M,{dimensions:d,scrollPosition:i})]}),Object(O.jsx)(w.a,{path:"/Cart",children:x?Object(O.jsx)(U.a,{animation:"border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(O.jsx)(H,{dimensions:d,scrollPosition:i,shopItems:u,cartItems:b,addCartItem:I,removeCartItem:y})})]})})},G=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,130)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),n(e),s(e),c(e),r(e)}))},V=new R.QueryClient;r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(R.QueryClientProvider,{client:V,children:Object(O.jsx)(Q,{})})}),document.getElementById("root")),G()},71:function(e,t,i){}},[[114,1,2]]]);
//# sourceMappingURL=main.5e27a1a0.chunk.js.map