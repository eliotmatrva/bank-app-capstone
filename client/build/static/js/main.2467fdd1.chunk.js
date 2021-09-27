(this["webpackJsonpbad-bank"]=this["webpackJsonpbad-bank"]||[]).push([[0],{200:function(e,t,A){"use strict";A.r(t),A.d(t,"UserContext",(function(){return Q}));var a=A(8),c=A(0),n=A.n(c),s=A(27),r=A.n(s),l=A(87),i=A(5),o=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,204)).then((function(t){var A=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;A(e),a(e),c(e),n(e),s(e)}))},d=A(88),j=A(28),b=(A(58),A(1));function p(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.a,{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#","data-tip":!0,"data-for":"homeTip",children:"BadBank"}),Object(b.jsx)(j.a,{id:"homeTip",place:"top",effect:"solid",children:"Return to the Home Page"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsxs)("li",{className:"nav-item","data-tip":!0,children:[Object(b.jsx)("a",{className:"nav-link",href:"#/CreateAccount/","data-tip":!0,"data-for":"newAccountTip",children:"Create Account"}),Object(b.jsx)(j.a,{id:"newAccountTip",place:"top",effect:"solid",children:"Register a new account"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[Object(b.jsx)("a",{className:"nav-link",href:"#/deposit/","data-tip":!0,"data-for":"depositFundsTip",children:"Deposit"}),Object(b.jsx)(j.a,{id:"depositFundsTip",place:"top",effect:"solid",children:"Deposit funds into your account"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[Object(b.jsx)("a",{className:"nav-link",href:"#/withdraw/","data-tip":!0,"data-for":"withdrawFundsTip",children:"Withdraw"}),Object(b.jsx)(j.a,{id:"withdrawFundsTip",place:"top",effect:"solid",children:"Withdraw funds from your account"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[Object(b.jsx)("a",{className:"nav-link",href:"#/alldata/","data-tip":!0,"data-for":"allDataTip",children:"AllData"}),Object(b.jsx)(j.a,{id:"allDataTip",place:"top",effect:"solid",children:"View details from all accounts"})]})]})})]})})}A(96);var m=A(57),M=A(4),u=A(9);function h(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"card mb-3 "+(e.bgcolor?" bg-"+e.bgcolor:"")+(e.txtcolor?" text-"+e.txtcolor:" text-white"),style:{maxWidth:"18rem"},children:[Object(b.jsx)("div",{className:"card-header",children:e.header}),Object(b.jsxs)("div",{className:"card-body",children:[e.title&&Object(b.jsx)("h5",{className:"card-title",children:e.title}),e.text&&Object(b.jsx)("p",{className:"card-text",children:e.text}),e.body,e.status&&Object(b.jsx)("div",{id:"createStatus",children:e.status})]})]})})}var C=A(18);function w(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:e.children})})}function k(){var e=Object(c.useContext)(Q),t=e.value,A=e.setValue,s=n.a.useState(!0),r=Object(a.a)(s,2),l=r[0],i=r[1],o=n.a.useState(""),d=Object(a.a)(o,2),j=d[0],p=(d[1],n.a.useState("")),k=Object(a.a)(p,2),O=k[0],x=k[1],f=n.a.useState(""),g=Object(a.a)(f,2),v=g[0],z=g[1],S=n.a.useState(""),K=Object(a.a)(S,2),N=K[0],y=K[1],B=Object(M.a)(t.users);console.log("before adding user: ".concat(JSON.stringify(B)));var D=C.b({name:C.c().required("Name is required"),email:C.c().email("Email is invalid").required("Email is required"),password:C.c().min(8,"Password must be at least 8 characters").required("Password is required")});function J(){x(""),z(""),y(""),i(!0)}return Object(b.jsx)(h,{bgcolor:"primary",header:"Create Account",status:j,body:l?Object(b.jsx)(u.d,{initialValues:{name:O,email:v,password:N},validationSchema:D,onSubmit:function(e){B.push(Object(m.a)(Object(m.a)({},e),{},{balance:100})),console.log("After adding user: ".concat(JSON.stringify(B))),A({users:Object(M.a)(B)}),i(!1)},children:function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.b,{label:"Name",name:"name",type:"text",placeholder:"Enter name",className:"form-control",id:"name",autoComplete:"off"}),Object(b.jsx)(u.a,{name:"name",component:w}),Object(b.jsx)(u.b,{label:"Email",name:"email",type:"email",placeholder:"Enter email",className:"form-control",id:"email",autoComplete:"off"}),Object(b.jsx)(u.a,{name:"email",component:w}),Object(b.jsx)(u.b,{label:"Password",name:"password",type:"password",placeholder:"Enter password",className:"form-control",id:"password",autoComplete:"off"}),Object(b.jsx)(u.a,{name:"password",component:w}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-light",children:"Create Account"}),Object(b.jsx)("button",{type:"Reset",className:"btn btn-danger",style:{marginLeft:"2px"},onClick:J,children:"Reset"})]})})}}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h5",{children:"Success"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-light",onClick:J,children:"Add Another Account"})]})})}var O=A(86);function x(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.password}),Object(b.jsx)("td",{children:"$"+e.balance})]})}function f(){var e=Object(c.useContext)(Q),t=e.value,A=(e.setValue,Object(M.a)(t.users));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"All Accounts"}),Object(b.jsxs)(O.a,{bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"tableHeader bg-primary text-white",children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Password"}),Object(b.jsx)("th",{children:"Balance"})]})}),Object(b.jsx)("tbody",{children:A.map((function(e,t){return Object(b.jsx)(x,{name:e.name,email:e.email,password:e.password,balance:e.balance})}))})]})]})}function g(){return Object(b.jsx)(h,{bgcolor:"primary",txtcolor:"white",header:"Welcome to Banco Mal de Mateo",title:"Banco Mal de Mateo",text:"Welcome to Matt's Bad Bank where we siphon off small amounts of money from your account to make ourselves rich!",body:Object(b.jsx)("img",{src:"data:image/png;base64,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ONcJQf6X97M04w6R4niYY/Ic/vkCAObyNv4r2+xSDN1cwjQeyDV9jhcBe63k2yyik+3YLuNfkdrTeh7nNs7g31r1pKB9JmxwWvAL2Dnb33qU62rZpuF4D+/KNvdaPl96896wO2dlnP06Hi29gW/4K7bNNvf93PDG16t4iPvbt1a/iPXZxtzSG9fPlzJu5+rSG9fP9IzbuZ6TS29eP89l3M5rS2xQvtcAJDU9A0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAjMApMAMACkwA0AKzACQAhtT09/ZiXH9wmarjH9pW6bUtE3D2ep8OppoO/fIOvukJtrSLTLOvUO/7VzD8yyvY4M6Ms69DScwg32YyAS2rmNjpDaynC6W8CBzuZ3uXH8kTwBsxYf4AMfRmW3nSHG8yE18i1tyTJ0+ADr4E77IXtl3ihTL3VzEnaknTR0AxzCbd9S0Q6Ro5vMX/DLlhCkDoIPPc3HWVxWk6FbwUeammy7dq5rb8A3O9vCXstqKD7KWO1JNl+qA3ZVbmFpol0jRXM/pad4ZSPMIYGtuYVrRHSJF8nZ2TPOuQJoA+BdOKro7pGgO4xl+Xn2aFE8BzuUrpfeGFM7rHMNdVSepHgBTeLi2QrGkPk/zVlZVm6L6U4CvsX/p/SCFtAPLq1aDqj4COJLbS+8FKaxXeQsvVJmg6iOAb7Nb6X0ghdVJZ7V3A6o9Aji8+osQkipYzThWjP7u1U4IMrP01kvBdXJ8lbtXC4AZpbdeCq/SUVjlKcC+aT+XJGkUXmAX1o32zlUeAVR66CEpiXEcNPo7VwmAN5fecklUOidjlQCYVHq7JQETRn9XA0BqdRNHf1cDQGp1hQLAU31LzaDCdTaqBMCzpbdbEtA1+rsaAFKrWzL6u1YJgGdKb7ckij0CMACkZlAoADwTgFTeau4Z/Z2rBMBPWVp626XwFrBy9HeuEgDr+G7pbZfCm1flztU+Djy/9LZLwa2v9t9wtQC41RcCpaK+x/NV7l7tnIDdvMTJpfeAFFY3p/J/VSao9ggAruOh0vtACusaHqk2QfULg5yQ5hplkkZoJftU6QBAiguDPM5eXhdYKuBcflB1ihTXBuzkdg4pvS+kYK7kzOqTpAgAmMS97Fp4d0iR/IjjWFN9mqovAvZ4lvezrPAOkeJYxKkpDv9UAQA/ZjqLC+4QKY5bmF7tioB9UgUALORQFhTaIVIcl3Iir6aarPq7AH1Wcz1wCFvWv0+kEJZwJrNZn27ClAEA6/kh17IdByZ8ZCEJYBlf4MPcn3bSNO8CbGgKFzGDnWrYKVIET/EfzE71vL+/PAEAMIajOJkZTM74N6T21s0jzOVGHsj1B/IfnFsxgQlMZJxPC6RhWsPzLKGLpXSXXookSZIkSZIkSZIkSZIkSZIkSZKkpjC8TwPuw15MZAIT2cnP9ElNbC1L6WIJXSzkuc3/+qYDYAsOZyYzeUvprZI0Quv5GfOZt+mLhw0dAFvz51zI+NJbIamShfw1/znUDwcPgAYf4YtMLr1ySUn8hAu5c7AfDBYAe3MD7yi9YklJfYtPsGLDGzcOgGO4wdN5Sm3oQWbwm4E3bfia/pnc6uEvtaWp3MMRA28a+AjgIr5Ueo2SMnqd47i979v+ATCDG32XX2pzL3AoT/Z+0xcAb+duti29NknZ/YLDea3ny97/8bdnvoe/FMLb+NfeL3sD4LPsWXpVkmpyCsf3fNHzFGASjzG29Jok1eYBDmJ979WBL+XQ0uuRVKNdWcxDPY8A3sKixJcJl9TsnmJv1jWAP/Lwl8LZk8N6XgScWXolkgqYCR3sSlcNFwmX1GwWsn+Dkzz8pZD2Y5+GH/yVwjqowcTSa5BUyKQGE0qvQVIhk3wEIMW1W8PTfkph7dLgldJrkFTIqw2WlF6DpEKWNOgqvQZJhXQZAFJcXQ1+VXoNkgr5VQf7b/raYZLa1Ivs0uBRFpdeh6QCbqK7AcwvvQ5JBdzYc0agIwa/bKCkNvYau7CqAdzFD0qvRVLN5rCq96zAB3OPZwWQAlnK3izvvS7AfXyz9Hok1ehvWQ59lwbbk4e9MpAUxEKmsgb6rgz0FKexvvSqJNXgFU7pOfzpd0LwRazh2NIrk5RZN6fws95v+l8R4A7eyttLr05SVhdwfd83Ay8JchOTmVp6fZIy6eZCLut/wxYb/HguKznWtwSlNvQK7+ffB9402KH+h1zP9qXXKimpRczc+LO/jUF+8Xvsyz+xtvR6JSXyMhdy4GAf/R/6wf4+XMIHSq9bUkW/5Qr+jpcH/+Gmn+3vw8nM5J2DPk6Q1NxWsYB5fJelQ//KcF7uG88J7MVEJjCRnQwDqYmtZSldLKGLR1jAys39+v8DyHClHCO2oa4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDktMjZUMDY6Mjk6NDcrMDI6MDB1rKgYAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA5LTI2VDA2OjI5OjQ3KzAyOjAwBPEQpAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=",className:"img-fluid",alt:"this is the bank's logo"})})}function v(){var e=n.a.useState(""),t=Object(a.a)(e,2),A=t[0],s=t[1],r=n.a.useState(!1),l=Object(a.a)(r,2),i=(l[0],l[1]),o=Object(c.useContext)(Q),d=o.value,j=o.setValue,p=Object(M.a)(d.users),m=p[0];function k(){console.log("you cleared it")}var O=C.b({withdraw:C.a().min(1,"Must withdraw at least $1").required("Withdraw amount is required").max(m.balance,"You do not have enough money")});return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{bgcolor:"primary",txtcolor:"white",header:"".concat(m.name,"'s current balance:  $").concat(m.balance),title:"",body:Object(b.jsx)(u.d,{initialValues:{withdraw:A},validationSchema:O,onSubmit:function(e){s(e.withdraw),i(m.balance-e.withdraw),p[0].balance=m.balance-e.withdraw,j({users:Object(M.a)(p)}),alert("\ud83d\udcb0\ud83d\udcb8\ud83e\udd11! You withdrew $".concat(e.withdraw))},children:function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:'Enter an amount greater than $1 then click "Withdraw Funds"'}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.b,{label:"Withdraw",name:"withdraw",type:"number",placeholder:"Enter withdraw amount",className:"form-control",id:"withdraw",autoComplete:"off"}),Object(b.jsx)(u.a,{name:"withdraw",component:w}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-light",children:"Withdraw Funds"}),Object(b.jsx)("button",{type:"Reset",className:"btn btn-danger",style:{marginLeft:"2px"},onClick:k,children:"Reset"})]})]})}})})})}function z(){var e=n.a.useState(""),t=Object(a.a)(e,2),A=t[0],s=t[1],r=n.a.useState(!1),l=Object(a.a)(r,2),i=(l[0],l[1]),o=Object(c.useContext)(Q),d=o.value,j=o.setValue,p=Object(M.a)(d.users),m=p[0];function k(){console.log("you cleared it")}var O=C.b({deposit:C.a().min(1,"Must be at least $1 deposit").required("Deposit amount is required")});return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{bgcolor:"primary",txtcolor:"white",header:"".concat(m.name,"'s current balance:  $").concat(m.balance),title:"",body:Object(b.jsx)(u.d,{initialValues:{deposit:A},validationSchema:O,onSubmit:function(e){s(e.deposit),i(m.balance+e.deposit),p[0].balance=m.balance+e.deposit,j({users:Object(M.a)(p)}),alert("Congratulations! You deposited $".concat(e.deposit))},children:function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:'Enter an amount greater than $1 then click "Deposit Funds"'}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.b,{label:"Deposit",name:"deposit",type:"number",placeholder:"Enter deposit amount",className:"form-control",id:"deposit",autoComplete:"off"}),Object(b.jsx)(u.a,{name:"deposit",component:w}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-light",children:"Deposit Funds"}),Object(b.jsx)("button",{type:"Reset",className:"btn btn-danger",style:{marginLeft:"2px"},onClick:k,children:"Reset"})]})]})}})})})}var Q=n.a.createContext(null);function S(){var e=Object(c.useState)({users:[{name:"Mateo Elliott",email:"bigtonkatruhk@aol.com",password:"lasecreta",balance:1e4},{name:"Baynk Cohstoomer",email:"genericdude@bing.com",password:"12345678",balance:50}]}),t=Object(a.a)(e,2),A=t[0],n=t[1];return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(Q.Provider,{value:{value:A,setValue:n},children:[Object(b.jsx)(i.a,{path:"/",exact:!0,component:g}),Object(b.jsx)(i.a,{path:"/CreateAccount/",component:k}),Object(b.jsx)(i.a,{path:"/deposit/",component:z}),Object(b.jsx)(i.a,{path:"/withdraw/",component:v}),Object(b.jsx)(i.a,{path:"/alldata/",component:f})]})]})}r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),o()},58:function(e,t,A){}},[[200,1,2]]]);
//# sourceMappingURL=main.2467fdd1.chunk.js.map