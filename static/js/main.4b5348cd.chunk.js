(this.webpackJsonpreact_flask=this.webpackJsonpreact_flask||[]).push([[0],{18:function(t,n,e){},19:function(t,n,e){},23:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),i=e(10),a=e.n(i),c=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),r(t),o(t),i(t),a(t)}))},u=(e(18),e(19),e(1));var s,l,b,d=function(){return Object(u.jsx)("div",{})},f=e(2),h=e(3),j=e(5),p=e(4),O=h.a.button(s||(s=Object(f.a)(["\n  position: absolute;\n  //left: 15%;\n  width: 70%;\n  aspect-ratio: 1/1;\n  background-color: #777777;\n  border-radius: 50%;\n  border: transparent;\n  margin: 0 15%;\n  transition: top ","s;\n"])),(function(t){return t.trans?0:.5})),x=h.a.div(l||(l=Object(f.a)(["\n  position: relative;\n  top: 10%;\n  height: ",";\n  width: 91%;\n"])),(function(t){var n;return(null===(n=t.styleProp)||void 0===n?void 0:n.height)||"20rem"})),v=h.a.div(b||(b=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 90%;\n  border-radius: 5%;\n  text-align: center;\n  background: #777777;\n"])));function g(t){var n=t.content,e=t.FDivRef,r=t.topPxUpd,o=t.topPx;return Object(u.jsx)(O,{style:{top:o+"px"},onClick:function(){e.current.scrollIntoView({behavior:"smooth",block:"center"})},trans:r,children:null===n||void 0===n?void 0:n.text})}function m(t){var n=t.content,e=t.FDivRef,o=t.topPxUpd,i=t.sTopPx,a=t.pxPos;return Object(r.useEffect)((function(){(null===o||o)&&i(e.current.offsetTop-a)}),[a,o]),Object(u.jsx)(x,{ref:e,styleProp:null===n||void 0===n?void 0:n.style,children:Object(u.jsx)(v,{children:null===n||void 0===n?void 0:n.text})})}var w,k,y,P,R,F=h.a.div(w||(w=Object(f.a)(["\n  position: absolute;\n  right: ",";\n  width: 100%;\n  top: 50%;\n  height: 90%;\n  transform: translateY(-50%);\n  border-top-left-radius: 2rem;\n  border-bottom-left-radius: 2rem;\n  box-shadow: 0 0 1rem 0.2rem #00000080;\n  //transition: width 1.5s;\n  background: #ffffff80;\n  backdrop-filter: blur(8px);\n  transition: right 1s cubic-bezier(.25,1.18,.36,1.1);\n"])),(function(t){return t.exp||"-83%"})),T=h.a.div(k||(k=Object(f.a)(["\n  position: absolute;\n  min-height: 100%;\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n\n  overflow: scroll;\n  mask-image: linear-gradient(to bottom, transparent 2%, black 5%, black 95%, transparent 98%);\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]))),S=h.a.div(y||(y=Object(f.a)(["\n  position: fixed;\n  left: 0;\n  width: 4rem;\n  height: 100%;\n  background: #ffffff20;\n"]))),E=h.a.div(P||(P=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n"]))),D=h.a.div(R||(R=Object(f.a)(["\n  position: absolute;\n  left: 4rem;\n  flex: 1 1 auto;\n  width: ","px;\n  min-height: 100%;\n  padding: 10% 0;\n  background: #ffffff20;\n"])),(function(t){return t.wid}));var C=function(){for(var t=Object(r.useRef)(),n=Object(r.useRef)(),e=Object(r.useRef)(),o=Object(r.useState)(0),i=Object(p.a)(o,2),a=i[0],c=i[1],s=Object(r.useState)(!0),l=Object(p.a)(s,2),b=l[0],d=l[1],f=Object(r.useState)("-83%"),h=Object(p.a)(f,2),O=h[0],x=h[1],v=Object(r.useState)(0),w=Object(p.a)(v,2),k=w[0],y=w[1],P={},R={},C=1;C<5;C++){var M=Object(r.useState)(0),U=Object(p.a)(M,2),z=U[0],I=U[1],L=Object(r.useRef)();P["p"+C]={content:C,FDivRef:L,topPxUpd:b,topPx:z},R["p"+C]={content:C,FDivRef:L,topPxUpd:b,sTopPx:I,pxPos:a,FMPStyle:{}}}function W(){var t=R.p1.FDivRef.current.offsetTop,n=e.current.offsetWidth;Object.entries(R).forEach((function(e){var r=Object(p.a)(e,2);r[0];r[1].sTopPx(t),t+=n})),d(!1)}return Object(r.useEffect)((function(){var n=t.current.offsetWidth-e.current.offsetWidth;y(n),W()}),[]),Object(r.useEffect)((function(){console.log(b)}),[b]),Object(u.jsx)(F,{exp:O,onMouseLeave:function(){x(-.97*k+"px"),setTimeout(W,10)},children:Object(u.jsxs)(T,{ref:t,onScroll:function(t){return function(t){c(t.target.scrollTop)}(t)},children:[Object(u.jsx)(S,{ref:e,onClick:function(){return x("-5%")},children:Object(u.jsx)(E,{onMouseEnter:function(){return W()},children:Object.entries(P).map((function(t){var n=Object(p.a)(t,2),e=n[0],r=n[1];return Object(u.jsx)(g,Object(j.a)({},r),e)}))})}),Object(u.jsx)(D,{ref:n,wid:k,onMouseEnter:function(){c(t.current.scrollTop),d(null),setTimeout((function(){d(!0)}),5),x("-5%")},children:Object.entries(R).map((function(t){var n=Object(p.a)(t,2),e=n[0],r=n[1];return Object(u.jsx)(m,Object(j.a)({},r),e)}))})]})})};var M=function(){return Object(u.jsx)("div",{})};var U,z=function(){return Object(u.jsx)("div",{})},I=h.a.div(U||(U=Object(f.a)(["\n  position: fixed;\n  right: 0;\n  width: 30rem;\n  top: 50%;\n  height: 90%;\n  transform: translateY(-50%);\n  //background: #FFFFFFa0;\n  //box-shadow: 0 0 1rem 0.2rem #00000040;\n"])));var L,W,Y,B=function(){return Object(u.jsxs)(I,{children:[Object(u.jsx)(z,{}),Object(u.jsx)(M,{}),Object(u.jsx)(C,{})]})},J=h.a.div(L||(L=Object(f.a)(["\n  position: fixed;\n  top: 50%;\n  left: 0.5%;\n  transform: translateY(-50%);\n  min-height: 5rem;\n  width: 4rem;\n  border-radius: 1rem;\n  background: #ffffff40;\n"]))),_=h.a.div(W||(W=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 1rem 0;\n  mask-image: linear-gradient(to bottom, transparent 5%, black 10%, black 90%, transparent 95%);\n"]))),H=h.a.button(Y||(Y=Object(f.a)(["\n  width: 70%;\n  border: transparent;\n  border-radius: 25%;\n  aspect-ratio: 1/1;\n  background: #dca723;\n  margin: 5% 15%;\n"])));var V,q,A,G=function(){return Object(u.jsx)(J,{children:Object(u.jsx)(_,{children:Object.entries({aa:"aa",bb:"bb"}).map((function(t){var n=Object(p.a)(t,2),e=n[0];n[1];return Object(u.jsx)(H,{children:"aa"},e)}))})})},K=h.a.div(V||(V=Object(f.a)(["\n  position: relative;\n  height: 100%;\n  width: 90%;\n  left: 5%;\n  overflow: scroll;\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: ","px 0px;\n  \n\n  mask-image: linear-gradient(to bottom, transparent 2%, black 4%, black 96%, transparent 98%);\n  \n  ::-webkit-scrollbar {\n    display: none;\n  }\n"])),(function(t){return t.paddingPx})),N=h.a.div(q||(q=Object(f.a)(["\n  position: relative;\n  margin: 1rem;\n  width: ",";\n  height: ",";\n  background: #aaaaaaa0;\n  border-radius: 0.5rem;\n  box-shadow: inset 0.2rem 0.2rem 4px #00000040, inset -0.2rem -0.2rem 4px #ffffff60;\n"])),(function(t){var n;return(null===(n=t.layout)||void 0===n?void 0:n.w)||"10rem"}),(function(t){var n;return(null===(n=t.layout)||void 0===n?void 0:n.h)||"15rem"})),Q=h.a.div(A||(A=Object(f.a)(["\n  position: absolute;\n  top: 2.5%;\n  left: 2.5%;\n  height: 95%;\n  width: 95%;\n  border-radius: 0.2rem;\n  background: ",";\n  transition: 0.2s;\n\n  :hover {\n    top: -8%;\n    left: -5%;\n    width: 110%;\n    height: 110%;\n    border-radius: 0.5rem;\n    background: #e7ded8;\n    box-shadow: 0.5rem 1.2rem 10px #423d3d80;\n  }\n"])),(function(t){var n;return(null===(n=t.layout)||void 0===n?void 0:n.bgi)?'url("'.concat(t.layout.bgi,'")'):"#f6f6f6d0"}));function X(t){var n=t.layout;t.content;return Object(u.jsx)(N,{layout:n,children:Object(u.jsx)(Q,{})})}var Z,$,tt,nt,et=function(){var t=Object(r.useRef)(),n=Object(r.useState)(0),e=Object(p.a)(n,2),o=e[0],i=e[1];return Object(r.useEffect)((function(){i(.05*t.current.offsetHeight)}),[]),Object(u.jsx)(K,{ref:t,paddingPx:o,children:Object.entries({1:{content:{title:"",author:""}},2:{content:{title:"",author:""}},3:{content:{title:"",author:""}},4:{content:{title:"",author:""}},5:{content:{title:"",author:""}},6:{content:{title:"",author:""}},7:{content:{title:"",author:""}},8:{content:{title:"",author:""}},9:{content:{title:"",author:""}},10:{content:{title:"",author:""}},11:{content:{title:"",author:""}},12:{content:{title:"",author:""}},13:{content:{title:"",author:""}},14:{content:{title:"",author:""}},15:{content:{title:"",author:""}},16:{content:{title:"",author:""}},17:{content:{title:"",author:""}},18:{content:{title:"",author:""}},19:{content:{title:"",author:""}},20:{content:{title:"",author:""}},21:{content:{title:"",author:""}},22:{content:{title:"",author:""}},23:{content:{title:"",author:""}},24:{content:{title:"",author:""}},25:{content:{title:"",author:""}},26:{content:{title:"",author:""}},27:{content:{title:"",author:""}},28:{content:{title:"",author:""}},29:{content:{title:"",author:""}},30:{content:{title:"",author:""}}}).map((function(t){var n=Object(p.a)(t,2),e=n[0],r=n[1];return Object(u.jsx)(X,Object(j.a)({},r),e)}))})},rt=h.a.div(Z||(Z=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  //opacity: 0;\n"]))),ot=h.a.div($||($=Object(f.a)(["\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  height: 90%;\n  background: #ffffff20;\n  border: silver 10px;\n  border-radius: 0.5rem;\n"]))),it=h.a.div(tt||(tt=Object(f.a)(["\n  position: absolute;\n  height: ",";\n  width: ",";\n  left: ",";\n  top: ",";\n  ","\n  box-sizing: border-box;\n  padding: 0.5rem 0.5rem 0.5rem 0.5rem;\n"])),(function(t){return t.layout.h||"60%"}),(function(t){return t.layout.w||"60%"}),(function(t){return t.layout.x+"%"||!1}),(function(t){return t.layout.y+"%"||!1}),(function(t){return t.layout.float?"float: ".concat(t.layout.float,";"):""})),at=h.a.div(nt||(nt=Object(f.a)(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border-radius: 0.5rem;\n  backdrop-filter: blur(10px);\n  background: rgba(224, 213, 213, 0.63);\n"])));function ct(t){var n=t.layout,e=t.content;t.cdRef,t.index;return Object(u.jsx)(it,{layout:n,children:Object(u.jsx)(at,{children:null===e||void 0===e?void 0:e.child})})}var ut=function(){var t={a:{layout:{w:"80%",h:"100%",x:0,y:0},cdRef:Object(r.useRef)(),content:{child:Object(u.jsx)(et,{})}},b:{layout:{w:"20%",h:"10%",x:80,y:0},cdRef:Object(r.useRef)()},c:{layout:{w:"20%",h:"60%",x:80,y:10},cdRef:Object(r.useRef)()}};return Object(u.jsx)(rt,{children:Object(u.jsx)(ot,{children:Object.entries(t).map((function(t){var n=Object(p.a)(t,2),e=n[0],r=n[1];return Object(u.jsx)(ct,Object(j.a)({},r),e)}))})})};a.a.render(Object(u.jsxs)(o.a.StrictMode,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(ut,{}),Object(u.jsx)(G,{}),Object(u.jsx)(B,{})]}),document.getElementById("root")),c()}},[[23,1,2]]]);
//# sourceMappingURL=main.4b5348cd.chunk.js.map