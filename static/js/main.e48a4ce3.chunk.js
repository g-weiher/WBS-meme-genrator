(this["webpackJsonpmeme-factory"]=this["webpackJsonpmeme-factory"]||[]).push([[0],{21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(13),a=n.n(r),o=(n(21),n(3)),u=n(14),l=n.n(u),j=(n(40),n(15)),b=n.n(j),m=function(e){var t=e.picture,n=Object(s.useState)("Caption1"),i=Object(o.a)(n,2),r=i[0],a=i[1],u=Object(s.useState)("Caption2"),l=Object(o.a)(u,2),j=l[0],m=l[1],O=Object(s.useRef)(),d=Object(s.useState)(null),f=Object(o.a)(d,2),x=f[0],h=f[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{ref:O,className:"current-meme",children:[Object(c.jsx)("img",{src:t}),Object(c.jsx)("textarea",{value:r,onChange:function(e){return a(e.target.value)},className:"text text1"}),Object(c.jsx)("textarea",{value:j,onChange:function(e){return m(e.target.value)},className:"text text2"})]}),Object(c.jsx)("button",{onClick:function(){b.a.toPng(O.current).then((function(e){h(e)})).catch((function(e){console.error("oops, something went wrong!",e)}))},children:"Submit"}),x?Object(c.jsx)("img",{src:x}):null]})},O=function(e){var t=e.memes,n=e.onSelect,i=Object(s.useState)(0),r=Object(o.a)(i,2),a=r[0],u=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"meme-list",children:t.slice(20*a,20*a+20).map((function(e){return Object(c.jsx)("div",{className:"meme-card",onClick:function(){return n(e)},children:Object(c.jsx)("img",{src:e.url})},e.id)}))}),Object(c.jsxs)("div",{className:"meme-list-controls",children:[Object(c.jsx)("button",{disabled:a<=0,onClick:function(){return u(a-1)},children:"-"}),a,Object(c.jsx)("button",{disabled:20*(a+1)>=t.length,onClick:function(){return u(a+1)},children:"+"})]})]})};var d=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)([]),u=Object(o.a)(a,2),j=u[0],b=u[1],d=i.a.createRef();return Object(s.useEffect)((function(){l.a.get("https://api.imgflip.com/get_memes").then((function(e){console.log(e.data.data.memes),b(e.data.data.memes)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=URL.createObjectURL(d.current.files[0]);r(t),console.log(t)},children:[Object(c.jsx)("input",{type:"file",ref:d,id:"input"}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]}),n?Object(c.jsx)(m,{picture:n}):null,Object(c.jsx)(O,{memes:j,onSelect:function(e){console.log(e),r(e.url),window.scrollTo(0,0)}})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),f()}},[[41,1,2]]]);
//# sourceMappingURL=main.e48a4ce3.chunk.js.map