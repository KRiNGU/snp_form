(this.webpackJsonpsnp_form=this.webpackJsonpsnp_form||[]).push([[0],[,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a,n,l,i,s,o,r,d=c(0),u=c.n(d),j=c(4),b=c.n(j),O=(c(14),c(15),c(2)),m=(c(20),c(1)),f=function(){var e=Object(O.c)((function(e){return e.name})),t=Object(O.c)((function(e){return e.secondName})),c=Object(O.c)((function(e){return e.patronymic})),a=Object(O.c)((function(e){return e.dateOfBirth})),n=Object(O.c)((function(e){return e.email})),l=Object(O.c)((function(e){return e.sex})),i=Object(O.c)((function(e){return e.advertising}));return Object(m.jsxs)("div",{className:"document",children:[Object(m.jsx)("p",{children:"\u0414\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b \u043e \u0432\u0430\u0441"}),Object(m.jsxs)("ul",{className:"data__list",children:[Object(m.jsxs)("li",{className:"data-list__field",children:["\u0424\u0430\u043c\u0438\u043b\u0438\u044f : ",t]}),Object(m.jsxs)("li",{className:"data-list__field",children:["\u0418\u043c\u044f : ",e]}),Object(m.jsxs)("li",{className:"data-list__field",children:["\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e : ",c]}),Object(m.jsxs)("li",{className:"data-list__field",children:["\u041f\u043e\u043b : ",l]}),Object(m.jsxs)("li",{className:"data-list__field",children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f : ",a]}),Object(m.jsxs)("li",{className:"data-list__field",children:["Email : ",n]}),Object(m.jsxs)("li",{className:"data-list__field",children:["\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 : ",i?"\u0414\u0430":"\u041d\u0435\u0442"]})]})]})},h=Object(d.memo)(f),v=c(3),x=c(5),p={name:null!==(a=localStorage.getItem("name"))&&void 0!==a?a:"",secondName:null!==(n=localStorage.getItem("secondName"))&&void 0!==n?n:"",patronymic:null!==(l=localStorage.getItem("patronymic"))&&void 0!==l?l:"",sex:null!==(i=localStorage.getItem("sex"))&&void 0!==i?i:"",dateOfBirth:null!==(s=localStorage.getItem("dateOfBirth"))&&void 0!==s?s:"",email:null!==(o=localStorage.getItem("email"))&&void 0!==o?o:"",advertising:JSON.parse(null!==(r=localStorage.getItem("advertising"))&&void 0!==r&&r)},g=Object(x.b)({name:"fields",initialState:p,reducers:{changeValue:function(e,t){var c=t.payload,a=c.id,n=c.value;e[a]=n}}}),_=g.actions,N=g.reducer,S=_.changeValue,y=N,E=(c(7),c(22),function(e){var t,c=e.id,a=e.placeholder,n=e.necessarily,l=Object(d.useState)(JSON.parse(null!==(t=localStorage.getItem(c))&&void 0!==t&&t)),i=Object(v.a)(l,2),s=i[0],o=i[1],r=Object(O.b)(),u=Object(d.useCallback)((function(){r(S({id:c,value:!s})),o(!s)}),[r,o,c,s]);return Object(d.useEffect)((function(){localStorage.setItem(c,JSON.stringify(s))}),[c,s]),Object(m.jsx)("div",{className:"checkbox",children:Object(m.jsxs)("label",{className:"checkbox-label",children:[a,n&&Object(m.jsx)("span",{className:"necessarily",children:"*"}),Object(m.jsx)("input",{className:"field checkbox__field",type:"checkbox",onChange:u,checked:s})," "]})})}),I=Object(d.memo)(E),C=(c(23),function(e){var t,c=e.id,a=e.validityFunction,n=e.placeholder,l=e.necessarily,i=Object(d.useState)(null!==(t=localStorage.getItem(c))&&void 0!==t?t:""),s=Object(v.a)(i,2),o=s[0],r=s[1],u=Object(d.useState)(""),j=Object(v.a)(u,2),b=j[0],f=j[1],h=Object(O.b)(),x=Object(d.useCallback)((function(e){f(a(e))}),[a]),p=Object(d.useCallback)((function(e){var t=e.target.value;h(S({id:c,value:t})),r(t),x(t)}),[h,c,x]),g=Object(d.useCallback)((function(e){x(e.target.value)}),[x]);return Object(d.useEffect)((function(){localStorage.setItem(c,o)}),[c,o]),Object(m.jsxs)("div",{className:"input",children:[Object(m.jsxs)("label",{className:"header-label",children:[n,l&&Object(m.jsx)("span",{className:"necessarily",children:" *"})]}),Object(m.jsx)("input",{onBlur:g,className:"field input__field",type:"text",onChange:p,value:o}),Object(m.jsx)("label",{className:"input__error",children:b})]})}),k=Object(d.memo)(C),F=(c(24),function(e){var t,c=e.id,a=e.placeholder,n=e.options,l=Object(O.b)(),i=Object(d.useState)(null!==(t=localStorage.getItem(c))&&void 0!==t?t:a),s=Object(v.a)(i,2),o=s[0],r=s[1],u=Object(d.useCallback)((function(e){var t=e.target.value;l(S({id:c,value:t})),r(t)}),[r,l,c]);return Object(d.useEffect)((function(){localStorage.setItem(c,o)}),[c,o]),Object(m.jsxs)("div",{className:"select",children:[Object(m.jsx)("label",{className:"header-label",children:a}),Object(m.jsxs)("select",{className:"field select-field",value:o,onChange:u,children:[Object(m.jsx)("option",{value:"",className:"select__option",children:"-"}),n.map((function(e){return Object(m.jsx)("option",{className:"select__option",value:e,children:e},e)}))]})]})}),B=Object(d.memo)(F),T=(c(25),{secondName:function(e){return 0===e.length?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e":/^[a-zA-Z\u0430-\u044f\u0410-\u042f\-'/]+$/.test(e)?/^[A-Z\u0410-\u042f]/.test(e)?"":"\u041f\u0435\u0440\u0432\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439":"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, \u0441\u0438\u043c\u0432\u043e\u043b - \u0438\u043b\u0438 \u0441\u0438\u043c\u0432\u043e\u043b '"},name:function(e){return 0===e.length?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f":/^[a-zA-Z\u0430-\u044f\u0410-\u042f\-'/]+$/.test(e)?/^[A-Z\u0410-\u042f]/.test(e)?"":"\u041f\u0435\u0440\u0432\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0438\u043c\u0435\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439":"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, \u0441\u0438\u043c\u0432\u043e\u043b - \u0438\u043b\u0438 \u0441\u0438\u043c\u0432\u043e\u043b '"},patronymic:function(e){return/^[a-zA-Z\u0430-\u044f\u0410-\u042f\-'/]+$/.test(e)?/^[A-Z\u0410-\u042f]/.test(e)?"":"\u041f\u0435\u0440\u0432\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439":"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, \u0441\u0438\u043c\u0432\u043e\u043b - \u0438\u043b\u0438 \u0441\u0438\u043c\u0432\u043e\u043b '"},dateOfBirth:function(e){return/^\d\d\.\d\d\.\d\d\d\d$/.test(e)?/^(0[1-9]|[12]\d|3[01])\.[0-1]\d\.(2[09]|19)\d\d$/.test(e)?"":"\u0422\u0430\u043a\u0430\u044f \u0434\u0430\u0442\u0430 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413"},email:function(e){return/\w+@\w+\.\w+/.test(e)?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email"}}),A=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"\u0424\u043e\u0440\u043c\u0430 \u0432\u0432\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),Object(m.jsxs)("form",{className:"form",children:[Object(m.jsx)(k,{id:"secondName",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",validityFunction:T.secondName,necessarily:!0}),Object(m.jsx)(k,{id:"name",placeholder:"\u0418\u043c\u044f",validityFunction:T.name,necessarily:!0}),Object(m.jsx)(k,{id:"patronymic",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",validityFunction:T.patronymic}),Object(m.jsx)(B,{id:"sex",placeholder:"\u041f\u043e\u043b",options:["\u041c\u0443\u0436\u0447\u0438\u043d\u0430","\u0416\u0435\u043d\u0449\u0438\u043d\u0430"],optional:!1}),Object(m.jsx)(k,{id:"dateOfBirth",placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",validityFunction:T.dateOfBirth}),Object(m.jsx)(k,{id:"email",placeholder:"Email",validityFunction:T.email}),Object(m.jsx)(I,{id:"advertising",placeholder:"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0440\u0435\u043a\u043b\u0430\u043c\u044b"})]})]})},D=Object(d.memo)(A),Z=function(){return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(D,{}),Object(m.jsx)(h,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),l(e),i(e)}))},J=Object(x.a)({reducer:y,devTools:"production"!==Object({NODE_ENV:"production",PUBLIC_URL:"/snp_form",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).NODE_EN});b.a.render(Object(m.jsx)(O.a,{store:J,children:Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(Z,{})})}),document.getElementById("root")),w()}],[[26,1,2]]]);
//# sourceMappingURL=main.c973e605.chunk.js.map