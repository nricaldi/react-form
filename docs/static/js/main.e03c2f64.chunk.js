(this["webpackJsonphook-form"]=this["webpackJsonphook-form"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),m=t.n(r),s=(t(11),t(12),t(2)),o=t(1),c=t(3),i=function(e){var a=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirm:"",submitted:!1}),t=Object(s.a)(a,2),r=t[0],m=t[1],i=" ",u=" ",h=" ",E=" ",g=" ",d=function(a){m(Object(c.a)({},r,Object(o.a)({},a.target.name,a.target.value))),e.setState(Object(c.a)({},r))},f=l.a.createElement("h1",null,"You have not submitted the form");return r.submitted&&(f=l.a.createElement("h1",null,"You have submitted the form")),r.firstName.length>0&&(i=l.a.createElement("h5",{className:"text-danger"},"First name must be at least 2 characters")),r.firstName.length>=2&&(i=""),r.lastName.length>0&&(u=l.a.createElement("h5",{className:"text-danger"},"Last name must be at least 2 characters")),r.lastName.length>=2&&(u=""),r.email.length>0&&(h=l.a.createElement("h5",{className:"text-danger"},"Email must be at least 5 characters.")),r.email.length>=5&&(h=""),r.password.length>0&&(E=l.a.createElement("h5",{className:"text-danger"},"Password must be at least 8 characters.")),r.password.length>=8&&(E=""),r.password.length>0&&r.confirm.length>0&&(g=l.a.createElement("h5",{className:"text-danger"},"Passwords must match.")),r.password===r.confirm&&(g=""),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0===i.length&&0===u.length&&0===h.length&&0===E.length&&0===g.length&&m(Object(c.a)({},r,{submitted:!0,firstName:"",lastName:"",email:"",password:"",confirm:""})),console.log(r)}},f,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstName"},"First Name:"),l.a.createElement("input",{type:"text",name:"firstName",className:"form-control",value:r.firstName,onChange:d}),i),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),l.a.createElement("input",{type:"text",name:"lastName",className:"form-control",value:r.lastName,onChange:d}),u),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"email",name:"email",className:"form-control",value:r.email,onChange:d}),h),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",name:"password",className:"form-control",value:r.password,onChange:d}),E,g),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"confirm"},"Confirm Password:"),l.a.createElement("input",{type:"password",name:"confirm",className:"form-control",value:r.confirm,onChange:d})),l.a.createElement("button",{type:"submit",className:"btn btn-outline btn-outline-danger"},"Submit"))},u=function(e){var a=e.person;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card p-3 mt-3"},l.a.createElement("h1",{className:"font-weight-light"},"Your form data"),l.a.createElement("p",null,l.a.createElement("strong",null,"First Name: ")," ",a.firstName),l.a.createElement("p",null,l.a.createElement("strong",null,"Last Name:")," ",a.lastName),l.a.createElement("p",null,l.a.createElement("strong",null,"Email:")," ",a.email),l.a.createElement("p",null,l.a.createElement("strong",null,"Password:")," Password"),l.a.createElement("p",null,l.a.createElement("strong",null,"Confirm:")," Password")))},h=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],m=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"display-4"},"Hook Form"),l.a.createElement(i,{state:r,setState:m}),l.a.createElement(u,{person:r}))};var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);m.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.e03c2f64.chunk.js.map