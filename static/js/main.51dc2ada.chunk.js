(this.webpackJsonptodolist_redux=this.webpackJsonptodolist_redux||[]).push([[0],{14:function(e,t,i){},20:function(e,t,i){},27:function(e,t,i){},29:function(e,t,i){"use strict";i.r(t);i(0);var c=i(7),n=i.n(c),s=(i(20),i(14),i(4)),a=function(e){return{type:"SET_INPUT",payload:e}},o=function(e){return{type:"UPDATE_TODO",payload:e}},r=function(e){return{type:"SET_QUERY",payload:e}},l=i(8),u=i(9),O=(i(27),i(2));var b=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.itemsList})),i=Object(s.c)((function(e){return e.query})),c=Object(s.c)((function(e){return e.currentItem.text})),n=t.filter((function(e){return e.text.includes(c)})).map((function(t){return Object(O.jsxs)("div",{className:"todo",id:t.key,children:[Object(O.jsx)("input",{className:"checkbox",type:"checkbox",checked:t.isCompleted,onClick:function(i){return e({type:"SET_COMPLETE",payload:{toggle:!t.isCompleted,key:t.key}})}}),Object(O.jsx)("div",{className:"list",style:t.isCompleted?{backgroundColor:"#0cf714"}:{backgroundColor:"#8566aa"},children:Object(O.jsxs)("p",{children:[Object(O.jsx)("input",{type:"text",id:t.key,Value:t.text,disabled:t.isDisabled,onChange:function(t){return e(r(t.target.value))}}),t.isDisabled&&Object(O.jsx)("span1",{children:Object(O.jsx)(l.a,{className:"faedit",onClick:function(){return e({type:"SET_DISABLE",payload:{toggleDisable:!1,key:t.key,sameText:t.text}})},icon:u.b})}),!t.isDisabled&&Object(O.jsx)("span1",{children:Object(O.jsx)(l.a,{className:"faedit",onClick:function(c){""!==i&&e(o({text:i,key:t.key,toggleDisable:!0})),""===i&&e(o({text:"",key:t.key,toggleDisable:!1})),e(r(""))},icon:u.a})}),Object(O.jsx)("span",{children:Object(O.jsx)(l.a,{className:"fadelete",onClick:function(){return e({type:"DELETE_TODO",payload:t.key})},icon:u.c})})]})})]})}));return Object(O.jsx)("div",{children:n})};var d=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.currentItem})),i=!0;return i=""===t.text&&""===t.text.trim(),console.log(t.text),console.log(i),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("h1",{children:"TODO List"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",placeholder:"Enter / Search",value:t.text,onChange:function(t){t.target.value.length>-1&&e(a(t.target.value))}}),Object(O.jsx)("button",{disabled:i,onClick:function(){e({type:"ADD_TODO",payload:{text:t.text,key:t.key,isDisabled:t.isDisabled,isCompleted:t.completed}}),e(a(""))},children:"+"}),Object(O.jsx)(b,{})]})})},j=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,30)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),c(e),n(e),s(e),a(e)}))},m=i(15),y=i(5),x=i(3),p={itemsList:function(){var e=localStorage.getItem("todoList"),t=[];return e&&(t=JSON.parse(e)),t}(),currentItem:{text:"",key:""},query:""},g=Object(m.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,i=t.type,c=t.payload;switch(i){case"SET_INPUT":return Object(x.a)(Object(x.a)({},e),{},{currentItem:{text:c,key:Date.now(),isDisabled:!0,completed:!1}});case"ADD_TODO":if(""!==c.text&&""!==c.text.trim())return localStorage.setItem("todoList",JSON.stringify([].concat(Object(y.a)(e.itemsList),[c]))),Object(x.a)(Object(x.a)({},e),{},{itemsList:[].concat(Object(y.a)(e.itemsList),[c])});case"UPDATE_TODO":return e.itemsList.map((function(e){e.key===c.key&&(c.toggleDisable?e.text=c.text:alert("TODO FIELD CANNOT BE EMPTY"),e.isDisabled=c.toggleDisable)})),localStorage.setItem("todoList",JSON.stringify(Object(y.a)(e.itemsList))),Object(x.a)(Object(x.a)({},e),{},{itemsList:Object(y.a)(e.itemsList)});case"DELETE_TODO":var n=e.itemsList.filter((function(e){return e.key!==c}));return localStorage.setItem("todoList",JSON.stringify(n)),Object(x.a)(Object(x.a)({},e),{},{itemsList:n});case"SET_DISABLE":return e.itemsList.map((function(e){e.key===c.key&&(e.isDisabled=c.toggleDisable)})),Object(x.a)(Object(x.a)({},e),{},{itemsList:Object(y.a)(e.itemsList),query:c.sameText});case"SET_QUERY":return Object(x.a)(Object(x.a)({},e),{},{query:c});case"SET_COMPLETE":return e.itemsList.map((function(e){e.key===c.key&&(e.isCompleted=c.toggle)})),localStorage.setItem("todoList",JSON.stringify(Object(y.a)(e.itemsList))),Object(x.a)(Object(x.a)({},e),{},{itemsList:Object(y.a)(e.itemsList)});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=g;n.a.render(Object(O.jsx)(s.a,{store:f,children:Object(O.jsx)(d,{})}),document.getElementById("root")),j()}},[[29,1,2]]]);
//# sourceMappingURL=main.51dc2ada.chunk.js.map