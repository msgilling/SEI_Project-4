(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(44),s=a.n(n),r=(a(98),a(165)),i=a(112),o=a.p+"static/media/NightNDaze.f8117622.png",l=a.p+"static/media/TEXTLOGO1.b0e5c24a.PNG",j=a(33),u=a(1),m=function(){return Object(u.jsx)("section",{className:"home-section is-flex is-justify-content-center",children:Object(u.jsxs)(r.a,{className:"welcome-card is-flex",children:[Object(u.jsxs)(r.a.Header,{className:"welcome-title",children:["Welcome to ",Object(u.jsx)("img",{src:l,alt:"text-logo",id:"text-logo",width:"57%"})]}),Object(u.jsxs)(r.a.Body,{className:"is-flex is-flex-direction-column",children:[Object(u.jsx)("img",{src:o,alt:"logo",id:"iphoneapp-card",width:"300"}),Object(u.jsx)(r.a.Text,{className:"home-text",children:"Weather together with unique social media app!"}),Object(u.jsxs)("div",{className:"is-flex is-justify-content-space-evenly",children:[Object(u.jsx)(i.a,{variant:"dark",id:"login-home-btn",href:"login",children:"Log in"}),Object(u.jsx)(i.a,{variant:"dark",id:"register-home-btn",href:"register",children:"Register"})]}),Object(u.jsxs)("div",{className:"home-footers",children:["Made by \xa0",Object(u.jsx)(j.b,{exact:!0,to:"https://github.com/msgilling",id:"githublink",children:"msgilling"})]})]})]})})},d=a(11),b=a(2),p=a(9),x=a.n(p),f=a(13),h=a(6),O=a(12),g=a.n(O),v=function(e){var t=e.id,a=e.image,c=e.caption;return console.log("_ID ->",t),Object(u.jsx)("div",{children:Object(u.jsx)(r.a,{style:{width:"19rem"},id:"image-card",children:Object(u.jsxs)(j.b,{to:"/images/".concat(t,"/"),children:[Object(u.jsx)(r.a.Img,{src:a,alt:c}),Object(u.jsx)(j.b,{to:"/api/userprofile/".concat(t,"/"),children:Object(u.jsx)(r.a.Title,{className:"card-title"})}),Object(u.jsx)(r.a.Text,{className:"image-footer",children:c})]})})},t)},N=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/images/");case 2:t=e.sent,a=t.data,console.log("response",a),n(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("images on state",a),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"section",id:"index-section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"columns is-flex is-flex-direction-column is-align-items-center",children:a.reverse().map((function(e){return Object(u.jsx)(v,Object(b.a)({},e),e._id)}))})})})})},w=a(161),y=a(164),k=a(162),C=a.p+"static/media/WHITE_LOGO_LANDSCAPE.aa2b14ca.PNG",I=function(){return window.localStorage.getItem("token")},S=function(){var e=I();if(e){var t=e.split(".");if(!(t.length<3)){var a=t[1];return JSON.parse(atob(a))}}},E=function(){var e=S();return e||!1},G=function(){var e=S();if(e)return e.sub},_=function(){var e=Object(d.f)(),t=G();console.log("get user id",t);return console.log("user is authenticated",E()),Object(u.jsx)("div",{className:"navbar-static-top",children:Object(u.jsxs)(w.a,{className:"is-flex is-justify-content-space-between navbar-fixed-top",id:"nav-bg",variant:"dark",sticky:"fixed",fixed:"top",expand:"sm",collaspeOnSelect:!0,children:[Object(u.jsx)(w.a.Brand,{href:"/images/",children:Object(u.jsxs)("figure",{children:[Object(u.jsx)("img",{src:C,width:"100",height:"100"})," "]})}),Object(u.jsx)(w.a.Toggle,{}),Object(u.jsx)(w.a.Collapse,{children:Object(u.jsxs)(y.a,{className:"navbar-nav is-flex is-flex-direction-row",children:[Object(u.jsx)(y.a.Link,{href:"/images/",children:Object(u.jsx)("i",{className:"bi bi-file-image ",id:"icons"})}),E&&Object(u.jsx)(y.a.Link,{href:"/upload",id:"uploadicon",children:Object(u.jsx)("i",{className:"bi bi-plus-square",id:"icons"})}),E&&Object(u.jsx)(y.a.Link,{href:"/userprofile/".concat(t),children:Object(u.jsx)("i",{className:"bi bi-person-square",id:"icons"})}),Object(u.jsx)(k.a,{title:"More",className:"align-items-center",children:E()?Object(u.jsx)("div",{children:Object(u.jsx)(k.a.Item,{onMouseDown:function(){window.localStorage.removeItem("token"),console.log("you logged out"),e.push("/")},className:"logout",id:"nav-links",children:"Log out"})}):Object(u.jsxs)("div",{children:[Object(u.jsx)(k.a.Item,{href:"/login/",id:"nav-links",children:"Log In"}),Object(u.jsx)(k.a.Item,{href:"/register/",id:"nav-links",children:"Register"})]})})]})})]})})},L=a(8),P=a(163),T=a(158),A=a(117),D=function(e){var t=e.handleImageUrl,a=e.value,c=function(){var e=Object(f.a)(x.a.mark((function e(a){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("file",a.target.files[0]),c.append("upload_preset","fa1qsijm"),e.next=5,g.a.post("https://api.cloudinary.com/v1_1/dhzuvbpmd/image/upload",c);case 5:n=e.sent,t(n.data.url);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(P.a.Group,{className:"mb-3",controlId:"formProfileImage",children:a?Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:a,alt:"profileImagePreview"})}):Object(u.jsx)(P.a.Control,{className:"input",type:"file",name:"image",onChange:c})})})},B=function(){var e=Object(d.f)(),t=Object(c.useState)({username:"",email:"",about_me:"",pronouns:"",profile_image:"",password:"",password_confirmation:""}),a=Object(h.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)({username:"",email:"",about_me:"",pronouns:"",profile_image:"",password:"",password_confirmation:""}),j=Object(h.a)(o,2),m=j[0],p=j[1];Object(c.useEffect)((function(){E()&&e.push("/affirmations/")}),[e]);var O=function(e){console.log("event.target.name",e.target.name);var t=Object(b.a)(Object(b.a)({},n),{},Object(L.a)({},e.target.name,e.target.value));s(t)},v=function(){var t=Object(f.a)(x.a.mark((function t(a){var c,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log("its working"),t.prev=2,t.next=5,g.a.post("/api/auth/register/",n);case 5:c=t.sent,s=c.data,console.log("data",s),e.push("/login/"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),p(t.t0.response.data),console.log("err.response",t.t0.response);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}();console.log("ERRORS",m);return Object(u.jsx)("section",{className:"register-form-field is-flex is-justify-content-center",children:Object(u.jsxs)(r.a,{className:"register-form",children:[Object(u.jsxs)(r.a.Header,{className:"welcome-title",children:["Welcome to",Object(u.jsx)("img",{src:l,alt:"text-logo",id:"text-logo",width:"57%"})]}),Object(u.jsx)(r.a.Body,{children:Object(u.jsxs)(P.a,{onSubmit:v,className:"is-flex is-flex-direction-column",children:[Object(u.jsx)(T.a,{className:"mb-3",children:Object(u.jsxs)(P.a.Group,{as:A.a,controlId:"formGridUsername",children:[Object(u.jsx)(P.a.Label,{children:"Username"}),Object(u.jsx)(P.a.Control,{type:"username",name:"username",placeholder:"Enter Username",value:n.username,onChange:O})]})}),Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGroupEmail",children:[Object(u.jsx)(P.a.Label,{children:"Email address"}),Object(u.jsx)(P.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:n.email,onChange:O}),Object(u.jsx)(P.a.Text,{className:"text-muted",children:"Well never share your email with anyone else."})]}),Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formAboutMe",children:[Object(u.jsx)(P.a.Label,{children:"About Me"}),Object(u.jsx)(P.a.Control,{type:"text",name:"about_me",placeholder:"Enter About Me",value:n.about_me,onChange:O})]}),Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formPronouns",children:[Object(u.jsx)(P.a.Label,{children:"Pronouns"}),Object(u.jsx)(P.a.Control,{type:"text",name:"pronouns",placeholder:"Enter Pronouns",value:n.pronouns,onChange:O})]}),Object(u.jsxs)(P.a.Group,{children:[Object(u.jsx)(P.a.Label,{children:"Profile Picture"}),Object(u.jsx)(D,{value:n.profile_image,name:"profile_image",type:"profile_image",handleImageUrl:function(e){s(Object(b.a)(Object(b.a)({},n),{},{profile_image:e}))}})]}),Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGroupPassword",children:[Object(u.jsx)(P.a.Label,{children:"Password"}),Object(u.jsx)(P.a.Control,{type:"password",name:"password",placeholder:"Enter Password",value:n.password,onChange:O})]}),Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGroupPasswordConfirmation",children:[Object(u.jsx)(P.a.Label,{children:"Password Confirmation"}),Object(u.jsx)(P.a.Control,{type:"password",name:"password_confirmation",placeholder:"Enter Password Confirmation",value:n.password_confirmation,onChange:O})]}),Object(u.jsx)(P.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(u.jsx)(P.a.Check,{type:"checkbox",label:"I have read the Terms and Conditions"})}),Object(u.jsx)(i.a,{className:"is-flex is-justify-content-center",variant:"dark",type:"submit",value:"submit",children:"Sign up"})]})})]})})},U=function(){var e=Object(d.f)(),t=Object(c.useState)({email:"",password:""}),a=Object(h.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(h.a)(o,2),j=l[0],m=l[1],p=function(e){var t=Object(b.a)(Object(b.a)({},n),{},Object(L.a)({},e.target.name,e.target.value));s(t)},O=function(){var t=Object(f.a)(x.a.mark((function t(a){var c,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,g.a.post("/api/auth/login/",n);case 4:c=t.sent,s=c.data,console.log("RESPONSE ->",s),r=s.token,window.localStorage.setItem("token",r),e.push("/affirmations/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),m(!0);case 14:case"end":return t.stop()}var r}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return console.log("errors",j),Object(u.jsx)("section",{className:"login-form-field is-flex is-justify-content-center",children:Object(u.jsxs)(r.a,{className:"login-form ",children:[Object(u.jsx)(r.a.Header,{className:"welcome-title",id:"login-welcome",children:"Welcome back!"}),Object(u.jsx)(r.a.Body,{children:Object(u.jsxs)(P.a,{onSubmit:O,className:"is-flex is-flex-direction-column",children:[Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGroupEmail",children:[Object(u.jsx)(P.a.Label,{children:"Email address"}),Object(u.jsx)(P.a.Control,{type:"email",className:"input ".concat(j?"is-danger":""),name:"email",placeholder:"Enter email",value:n.email,onChange:p})]}),Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGroupPassword",children:[Object(u.jsx)(P.a.Label,{children:"Password"}),Object(u.jsx)(P.a.Control,{type:"password",className:"input ".concat(j?"is-danger":""),name:"password",placeholder:"Enter Password",value:n.password,onChange:p})]}),Object(u.jsx)(i.a,{variant:"dark",type:"submit",value:"submit",children:"Log in!"})]})})]})})},R=a(23),M=function(e){var t=e.ImageId,a=e.setAddAComment,n=e.setComments,s=Object(d.f)(),o=Object(c.useState)(!1),l=Object(h.a)(o,2),j=l[0],m=l[1],p=Object(c.useState)({image:t,text:""}),O=Object(h.a)(p,2),v=O[0],N=O[1];console.log("imageid",t);var w=function(){var e=Object(f.a)(x.a.mark((function e(c){var r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,g.a.post("/api/comments/",v,{headers:{Authorization:"Bearer ".concat(I())}});case 4:return s.push("/images/".concat(t,"/")),e.next=7,g.a.get("/api/images/".concat(t,"/"));case 7:r=e.sent,i=r.data,a(!1),n(i.comment_set),console.log("data.comment_set",i.comment_set),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),m(!0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return console.log("errors",j),Object(u.jsx)("section",{className:"comment-form-field is-flex is-justify-content-center",children:Object(u.jsxs)(r.a,{className:"comment-form ",children:[Object(u.jsx)(r.a.Header,{className:"comment-title",children:"Leave a Comment"}),Object(u.jsx)(r.a.Body,{children:Object(u.jsxs)(P.a,{onSubmit:w,className:"is-flex is-flex-direction-column",children:[Object(u.jsx)(P.a.Group,{className:"mb-3",controlId:"formGroupComment",children:Object(u.jsx)(P.a.Control,{type:"comment",name:"text",placeholder:"Type comment here",value:v.text,onChange:function(e){console.log("formData",v);var t=Object(b.a)(Object(b.a)({},v),{},Object(L.a)({},e.target.name,e.target.value));N(t)}})}),Object(u.jsx)(i.a,{variant:"dark",type:"submit",value:"submit",children:"Post"})]})})]})})},F=function(){var e=Object(d.f)(),t=Object(c.useState)({caption:""}),a=Object(h.a)(t,2),n=a[0],s=a[1],o=Object(d.g)().id,l=Object(c.useState)({caption:""}),j=Object(h.a)(l,2),m=j[0],p=j[1];console.log("EDIT ID PARAMS",o),Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/api/images/".concat(o,"/"));case 3:t=e.sent,a=t.data,console.log("DATA",a),s(a),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),p(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),console.log("IMAGE EDIT FORM",n);var O=function(){var t=Object(f.a)(x.a.mark((function t(a){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,g.a.put("/api/images/".concat(o,"/"),n,{headers:{Authorization:"Bearer ".concat(I())}});case 4:e.push("/images/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log("err",t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return console.log("errors",m),Object(u.jsx)("section",{className:"login-form-field is-flex is-justify-content-center",children:Object(u.jsxs)(r.a,{className:"login-form ",children:[Object(u.jsx)(r.a.Header,{className:"welcome-title",children:"Edit Your Caption"}),Object(u.jsx)(r.a.Body,{children:Object(u.jsxs)(P.a,{className:"is-flex is-flex-direction-column",onSubmit:O,children:[Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGroupCaption",children:[Object(u.jsx)(P.a.Label,{children:"Your Caption"}),Object(u.jsx)(P.a.Control,{type:"caption",name:"caption",placeholder:"Enter Caption",value:n.caption,onChange:function(e){console.log("event.target.name",e.target.name);var t=Object(b.a)(Object(b.a)({},n),{},Object(L.a)({},e.target.name,e.target.value));s(t)}})]}),n.caption?Object(u.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(u.jsx)(i.a,{variant:"dark",type:"submit",value:"submit",children:"Upload Changes"})}):Object(u.jsx)("p",{className:"is-flex is-justify-content-center",children:Object(u.jsx)("small",{children:"Please update your caption \ud83d\udd8a"})})]})})]})})},z=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),o=Object(h.a)(s,2),l=o[0],j=o[1],m=Object(c.useState)([]),b=Object(h.a)(m,2),p=b[0],O=b[1],v=Object(c.useState)(!1),N=Object(h.a)(v,2),w=N[0],y=N[1],k=Object(d.f)(),C=Object(d.g)().id;Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/api/images/".concat(C));case 3:t=e.sent,a=t.data,n(a),j(a.comment_set),O(a.owner),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[C]),Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/auth/".concat(C,"/"));case 2:t=e.sent,console.log("response",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}));var E=function(e){var t=S();return!!t&&e===t.sub},G=function(){var e=Object(f.a)(x.a.mark((function e(t,a){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("/api/comments/".concat(t,"/"),{headers:{Authorization:"Bearer ".concat(I())}});case 3:c=l.indexOf(a),Object(R.a)(l.splice(c,1)),j(Object(R.a)(l)),k.push("/images/".concat(C)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("/api/images/".concat(C,"/"),{headers:{Authorization:"Bearer ".concat(I())}});case 3:k.push("/images/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("delete image err",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{className:"is-flex is-justify-content-center is-flex-direction-column",id:"image-show-page",children:[E(a.owner)&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"is-flex",id:"delete-image-btn",children:[Object(u.jsx)(i.a,{className:"delete-image-btn",variant:"outline-dark",onClick:_,children:Object(u.jsx)("p",{children:"Delete"})}),Object(u.jsx)(i.a,{className:"edit-image-btn",variant:"outline-dark",href:"/images/".concat(C,"/edit/"),children:Object(u.jsx)("p",{children:"Edit"})})]})}),Object(u.jsxs)(r.a,{style:{width:"19rem"},id:"image-card",children:[Object(u.jsx)(r.a.Img,{src:a.image,alt:a.caption}),Object(u.jsx)(r.a.Title,{className:"card-title",children:p.username}),Object(u.jsxs)(r.a.Text,{className:"image-footer",children:[a.caption,Object(u.jsx)("i",{className:"bi bi-chat-square-dots",onClick:function(){y(!w)},id:"comment-icons"})]}),w&&Object(u.jsx)(M,{ImageId:a.id,setAddAComment:y,setComments:j}),Object(u.jsx)("hr",{}),l&&l.map((function(e){return E(e.owners)?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"is-flex is-justify-content-space-between",children:[Object(u.jsx)(r.a.Text,{className:"image-footer",children:e.text}),Object(u.jsx)(i.a,{className:"delete-comment-btn",variant:"outline-dark",onClick:function(){return G(e.id,e)},children:Object(u.jsx)("p",{children:"Delete"})})]}),Object(u.jsx)("hr",{})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a.Title,{className:"image-footer",children:e.id},e._id),Object(u.jsx)("div",{className:"is-flex is-justify-content-space-between",children:Object(u.jsx)(r.a.Text,{className:"image-footer",children:e.text})})]})}))]})]},C)},H=(a(111),a.p+"static/media/COLOUR_LOGO_TEXT.1c86465a.PNG"),W=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=(t[0],t[1]),n=Object(c.useState)(null),s=Object(h.a)(n,2),o=s[0],l=s[1],j=Object(c.useState)([]),m=Object(h.a)(j,2),d=(m[0],m[1],G());return console.log("get user id",d),Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t,c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/api/affirmations/");case 3:t=e.sent,c=t.data,n=Math.floor(11*Math.random()),a(c),l(c[n].text),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)("section",{className:"section is-flex is-justify-content-center",children:Object(u.jsxs)(r.a,{style:{width:"19rem"},id:"image-card-aff",children:[Object(u.jsx)(r.a.Img,{src:H,alt:"logo",id:"aff-card-logo"}),Object(u.jsxs)(r.a.Footer,{className:"is-flex is-flex-direction-column",id:"footer-aff",children:[Object(u.jsx)(r.a.Title,{className:"card-title",children:"Welcome back!"}),Object(u.jsx)(r.a.Text,{className:"image-footer",children:o}),Object(u.jsx)(i.a,{variant:"dark",id:"login-home-btn",href:"/images/",children:"Enter"})]})]})})},q=function(){var e=Object(d.f)(),t=Object(c.useState)({image:"",caption:""}),a=Object(h.a)(t,2),n=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(h.a)(o,2),j=l[0],m=l[1];console.log("formdata",n),console.log("token",I());var p=function(){var t=Object(f.a)(x.a.mark((function t(a){var c,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,console.log("formData->",n),t.next=5,g.a.post("/api/images/",n,{headers:{Authorization:"Bearer ".concat(I())}});case 5:c=t.sent,s=c.data,console.log("data.id",s.id),e.push("/images/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),m(t.t0.response.data);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return console.log("ERRORS",j),Object(u.jsx)("section",{className:"login-form-field is-flex is-justify-content-center",children:Object(u.jsxs)(r.a,{className:"login-form ",children:[Object(u.jsx)(r.a.Header,{className:"welcome-title",children:"Image Upload"}),Object(u.jsx)(r.a.Body,{children:Object(u.jsxs)(P.a,{className:"is-flex is-flex-direction-column",onSubmit:p,children:[Object(u.jsxs)(P.a.Group,{children:[Object(u.jsx)(P.a.Label,{children:"Your Image"}),Object(u.jsx)(D,{value:n.image,name:"image",type:"file",handleImageUrl:function(e){s(Object(b.a)(Object(b.a)({},n),{},{image:e}))}})]}),Object(u.jsxs)(P.a.Group,{className:"mb-3",controlId:"formGroupCaption",children:[Object(u.jsx)(P.a.Label,{children:"Your Caption"}),Object(u.jsx)(P.a.Control,{type:"caption",name:"caption",placeholder:"Enter Caption",value:n.caption,onChange:function(e){var t=Object(b.a)(Object(b.a)({},n),{},Object(L.a)({},e.target.name,e.target.value));s(t)}})]}),n.image&&n.caption?Object(u.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(u.jsx)(i.a,{variant:"dark",type:"submit",value:"submit",children:"Upload Image"})}):Object(u.jsx)("p",{className:"is-flex is-justify-content-center",children:Object(u.jsx)("small",{children:"Please select an image and add a caption \ud83d\udcf8"})})]})})]})})},Y=a(159),J=a(160),X=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(h.a)(s,2),o=i[0],l=i[1],m=Object(d.g)().id,b=Object(c.useState)([]),p=Object(h.a)(b,2),O=(p[0],p[1]);return Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/auth/".concat(m,"/"));case 2:t=e.sent,a=t.data,n(a),l(a.Uploads),console.log("data.uploads",a.Uploads);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]),Object(c.useEffect)((function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/images/".concat(m,"/"));case 2:t=e.sent,a=t.data,console.log("response",a),O(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]),Object(u.jsxs)(Y.a,{className:"userprofile-show",children:[Object(u.jsxs)(T.a,{children:[Object(u.jsx)(A.a,{children:Object(u.jsx)(J.a,{src:a.profile_image,roundedCircle:!0,width:"180",className:"profile-image"})}),Object(u.jsxs)(A.a,{className:"user-bio",children:[Object(u.jsx)(T.a,{children:Object(u.jsx)("h1",{className:"username-title",children:a.username})}),Object(u.jsx)(T.a,{children:Object(u.jsx)("h4",{className:"pronouns-text",children:a.pronouns})}),Object(u.jsx)(T.a,{children:Object(u.jsx)("h3",{className:"about-me-text",children:a.about_me})})]})]}),Object(u.jsx)(T.a,{className:"is-flex is-justify-content-center",id:"userprofile-card-show",children:o.reverse().map((function(e){return console.log("userUpload",e),Object(u.jsx)("div",{className:"column is-flex is-justify-content-center",children:Object(u.jsx)(r.a,{style:{width:"12rem"},id:"image-card-profile",className:"columns-is-one-quarter",children:Object(u.jsx)(j.b,{to:"/images/".concat(e.id,"/"),children:Object(u.jsx)(r.a.Img,{src:e.image,alt:e.caption,id:"userprofile-card-img"})})})},m)}))})]})};var K=function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(_,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",component:m}),Object(u.jsx)(d.a,{exact:!0,path:"/home",component:m}),Object(u.jsx)(d.a,{exact:!0,path:"/register/",component:B}),Object(u.jsx)(d.a,{exact:!0,path:"/login/",component:U}),Object(u.jsx)(d.a,{exact:!0,path:"/images/",component:N}),Object(u.jsx)(d.a,{exact:!0,path:"/images/:id/",component:z}),Object(u.jsx)(d.a,{exact:!0,path:"/images/:id/edit",component:F}),Object(u.jsx)(d.a,{exact:!0,path:"/images/:id/comments/",component:M}),Object(u.jsx)(d.a,{exact:!0,path:"/images/:id/comments/edit",component:F}),Object(u.jsx)(d.a,{exact:!0,path:"/affirmations/",component:W}),Object(u.jsx)(d.a,{exact:!0,path:"/upload/",component:q}),Object(u.jsx)(d.a,{exact:!0,path:"/userprofile/:id",component:X})]})]})};a(149),a(152),a(150);s.a.render(Object(u.jsx)(K,{}),document.getElementById("root"))},98:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.ee212c34.chunk.js.map