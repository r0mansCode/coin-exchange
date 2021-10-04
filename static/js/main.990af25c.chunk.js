(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{37:function(e,n,t){},59:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var c,a,r,i,s,o=t(1),l=t.n(o),j=t(25),b=t.n(j),h=(t(37),t(15)),d=t(5),u=t.n(d),p=t(13),f=t(8),O=t(2),m=t(3),x=t(0),g=m.a.td(c||(c=Object(O.a)(["\n    border: 1px solid #cccccc;\n    width 14vw;\n"]))),v=Object(m.a)(g)(a||(a=Object(O.a)(["\n    width: 34vw;\n"]))),k=Object(m.a)(g)(r||(r=Object(O.a)(["\n    width: 24vw;\n"]))),w=m.a.button(i||(i=Object(O.a)(["\n    font-size: 1rem;\n    margin: 0 1.5rem 0 1.5rem;\n    border: 1px solid #cccccc;\n    border-radius: 7px;\n"])));function y(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)(k,{children:e.name}),Object(x.jsx)(g,{children:e.ticker}),Object(x.jsxs)(g,{children:["$",e.price]}),Object(x.jsx)(g,{children:e.showBalance?e.balance:"-"}),Object(x.jsx)(v,{children:Object(x.jsxs)("form",{action:"#",method:"POST",children:[Object(x.jsx)(w,{className:"btn btn-info",onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)},children:"Refresh"}),Object(x.jsx)(w,{className:"btn btn-warning",onClick:function(n){n.preventDefault(),e.handleTransaction(!0,e.tickerId)},children:"Buy"}),Object(x.jsx)(w,{className:"btn btn-danger",onClick:function(n){n.preventDefault(),e.handleTransaction(!1,e.tickerId)},children:"Sell"})]})})]})}var B,C,N,S,T=m.a.table(s||(s=Object(O.a)(["\n  border-collapse: collapse;\n  margin: 50px auto 200px auto;\n  display: inline-block;\n  font-size: 1.4rem;\n"])));function D(e){return Object(x.jsxs)(T,{className:"table table-primary table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Ticker"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"Balance"}),Object(x.jsx)("th",{children:"Actions"})]})}),Object(x.jsx)("tbody",{children:e.coinData.map((function(n){var t=n.key,c=n.name,a=n.ticker,r=n.price,i=n.balance;return Object(x.jsx)(y,{handleRefresh:e.handleRefresh,handleTransaction:e.handleTransaction,name:c,tickerId:t,ticker:a,showBalance:e.showBalance,balance:i,price:r},t)}))})]})}var F=m.a.section(B||(B=Object(O.a)(["\n    font-size: 2rem;\n    text-align: center;\n    padding: 1.5rem 0 1.5rem 5rem;\n"]))),I=m.a.div(C||(C=Object(O.a)(["\n    min-width: 250px;\n    margin: 0.5rem 0 0 2.5rem;\n    font-size: 1.5rem;\n    vertical-align: left;\n    text-align: left;\n    "]))),P=m.a.button(N||(N=Object(O.a)(["\n    margin: 1.8px;\n    "]))),R=Object(m.a)(P)(S||(S=Object(O.a)(["\n    width: 150px;\n"]))),z=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function U(e){var n=e.showBalance?"Hide Balance":"Show Balance",t="\xa0";e.showBalance&&(t=Object(x.jsx)(x.Fragment,{children:z.format(e.amount)}));var c="btn "+(e.showBalance?"btn-warning":"btn-info");return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(I,{children:t}),Object(x.jsxs)(F,{children:[Object(x.jsx)(R,{onClick:e.handleBalanceVisibilityChange,className:c,children:n}),Object(x.jsx)(P,{className:"btn btn-success",onClick:e.handleBrrrr,children:Object(x.jsx)("i",{className:"fas fa-helicopter"})})]})]})}var q,E,J,L=t(29),V=t(30),A=t(32),H=t(31),M=t.p+"static/media/logo.6ce24c58.svg",$=m.a.img(q||(q=Object(O.a)(["\n    height: 8rem;\n    pointer-events: none;\n"]))),G=m.a.header(E||(E=Object(O.a)(["\n    background-color: #282c34;\n    min-height: 10vh;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    color: white;\n"]))),K=m.a.h1(J||(J=Object(O.a)(["\n  font-size: 3rem;\n  line-height: 8rem;\n  fold-weight: bold;\n  min-width: 300px;\n"]))),Q=function(e){Object(A.a)(t,e);var n=Object(H.a)(t);function t(){return Object(L.a)(this,t),n.apply(this,arguments)}return Object(V.a)(t,[{key:"render",value:function(){return Object(x.jsxs)(G,{children:[Object(x.jsx)($,{src:M,alt:"React logo"}),Object(x.jsx)(K,{children:"Coin exchange"})]})}}]),t}(o.Component),W=t(7),X=t.n(W);t(59);function Y(e){return Object(x.jsx)("footer",{className:"footer",children:Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:["Powered by ",Object(x.jsx)("a",{className:"link",href:"https://coinpaprika.com/",children:" coinpaprika.com"})]})})})}t(60),t(61);var Z,_=m.a.div(Z||(Z=Object(O.a)(["\n  text-align: center;\n  background-color: rgb(20, 56, 97);\n  color: #cccccc;\n"]))),ee=function(e){return parseFloat(Number(e).toFixed(4))};var ne=function(e){var n=Object(o.useState)(1e4),t=Object(f.a)(n,2),c=t[0],a=t[1],r=Object(o.useState)(!1),i=Object(f.a)(r,2),s=i[0],l=i[1],j=Object(o.useState)([]),b=Object(f.a)(j,2),d=b[0],O=b[1],m=function(){var e=Object(p.a)(u.a.mark((function e(){var n,t,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,6).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(e){return X.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(c);case 8:a=e.sent,r=a.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:ee(n.quotes.USD.price)}})),O(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){0===d.length&&m()}));var g=function(){var e=Object(p.a)(u.a.mark((function e(n){var t,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,X.a.get(t);case 3:c=e.sent,a=ee(c.data.quotes.USD.price),r=d.map((function(e){var t=Object(h.a)({},e);return n===e.key&&(t.price=a),t})),O(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(x.jsxs)(_,{children:[Object(x.jsx)(Q,{}),Object(x.jsx)(U,{amount:c,showBalance:s,handleBrrrr:function(){a((function(e){return e+1200}))},handleBalanceVisibilityChange:function(){l((function(e){return!e}))}}),Object(x.jsx)(D,{coinData:d,showBalance:s,handleTransaction:function(e,n){var t=e?1:-1,c=d.map((function(e){var c=Object(h.a)({},e);return n==e.key&&(c.balance+=t,a((function(e){return e-t*c.price}))),c}));O(c)},handleRefresh:g}),Object(x.jsx)("p",{children:"*The prices are refreshing every few minutes"}),Object(x.jsx)(Y,{})]})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};b.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(ne,{})}),document.getElementById("root")),te()}},[[64,1,2]]]);
//# sourceMappingURL=main.990af25c.chunk.js.map