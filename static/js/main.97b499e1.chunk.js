(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(24),a(5)),m=a(1),i=a(6),s=a(7),u=a(8),p=a(9),E=a(34),f=a(35),g=function(e){var t=e.item,a="/"===t.url.charAt(0)?t.url:"/".concat(t.url);return r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:a,activeClassName:"active"},r.a.createElement("span",{className:"nav-item-label"},t.name)))},h=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggle=function(e){n.setState((function(e){return{open:!e.open}})),e.preventDefault(),e.stopPropagation()},n.state={open:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item,t=this.state.open?"open":"",n=this.state.open?E.a:f.a;return e.items?r.a.createElement("li",{className:"nav-item has-submenu ".concat(t)},r.a.createElement("a",{href:"#!",role:"button",onClick:this.toggle},r.a.createElement("span",{className:"nav-item-label"},e.name),r.a.createElement(n,{className:"menu-expand-icon"})),this.state.open&&e.items&&r.a.createElement("ul",{className:"nav-submenu"},e.items.map((function(e,t){return r.a.createElement(a,{key:t,item:e})})))):r.a.createElement(g,{item:e})}}]),a}(n.Component);var v=function(e){var t=e.items;return r.a.createElement("div",{className:"pro-sidebar"},r.a.createElement("nav",null,r.a.createElement("ul",{id:"main-menu"},function(e){return e.map((function(e,t){return function(e,t){return e.items?r.a.createElement(h,{item:e,key:t}):r.a.createElement(g,{item:e,key:t})}(e,t)}))}(t.navs))))},d=a(18),b=a.n(d),y=(a(30),{navs:[{name:"home",label:"home",url:"/react-app/"},{name:"Category",label:"Category",items:[{name:"category 1",label:"category 1",url:"/test1"},{name:"category 2",label:"category 2",url:"/test2"}]},{name:"Settings",label:"Settings",url:"/settings"}]});var k=[{name:"category 1",url:"/test1",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"This is for category 1"))}},{name:"category 2",url:"/test2",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"This is for category 2"))}},{name:"Settings",url:"/settings",component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"This is for settings"))}}];function N(e){var t=e.children;return r.a.createElement("main",{id:"primary-content",tabIndex:"-1",role:"main"},t)}var j=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{items:y}),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),r.a.createElement(N,null,r.a.createElement(m.d,null,k.map((function(e,t){return r.a.createElement(m.b,{path:e.url,render:function(){return r.a.createElement(e.component,null)},key:t})})),r.a.createElement(m.a,{from:"/",to:"/react-app/"}))))}}]),a}(n.Component);a(31);var w=function(){return r.a.createElement(o.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.97b499e1.chunk.js.map