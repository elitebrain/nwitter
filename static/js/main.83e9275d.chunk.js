(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{30:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),u=a(3),o=a(14);a(35),a(37),a(49);o.initializeApp({apiKey:"AIzaSyCkkt8yHtYNazVuOiXpd9BojRnri6yptkk",authDomain:"nwitter-67997.firebaseapp.com",databaseURL:"https://nwitter-67997.firebaseio.com",projectId:"nwitter-67997",storageBucket:"nwitter-67997.appspot.com",messagingSenderId:"216416259280",appId:"1:216416259280:web:27b635b0931e0df5ee62d5"});var s=o,i=o.auth(),m=o.firestore(),p=o.storage(),f=a(15),d=a(2),E=a(5),b=a(13),h=a(10),v=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{className:"navUl"},r.a.createElement("li",null,r.a.createElement(f.b,{to:"/",className:"mr_10px"},r.a.createElement(E.a,{icon:b.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/profile",className:"navLink"},r.a.createElement(E.a,{icon:h.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{className:"mt_10px"},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},g=a(4),w=a.n(g),O=a(9),N=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],m=o[1],p=Object(n.useState)(!1),f=Object(u.a)(p,2),d=f[0],E=f[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),v=h[0],g=h[1],N=function(e){console.log(e.target.name);var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&m(n)},j=function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,i.createUserWithEmailAndPassword(a,s);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,i.signInWithEmailAndPassword(a,s);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"wrapper"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:N,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:s,onChange:N,className:"authInput"}),r.a.createElement("input",{type:"submit",value:d?"Create Account":"Log In",className:"authInput authSubmit"}),v&&r.a.createElement("span",{className:"authError"},v)),r.a.createElement("span",{onClick:function(){return E((function(e){return!e}))},className:"authSwitch"},d?"Sign In":"Create Account"))},j=function(){var e=function(){var e=Object(O.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new s.auth.GoogleAuthProvider:"github"===a&&(n=new s.auth.GithubAuthProvider),e.next=4,i.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(E.a,{icon:b.c,color:"#04AAFF",size:"3x",className:"mb_30px"}),r.a.createElement(N,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(E.a,{icon:b.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(E.a,{icon:b.a}))))},y=a(29),x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],s=l[1],i=Object(n.useState)(t.text),f=Object(u.a)(i,2),d=f[0],b=f[1],v=function(){var e=Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,p.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){return s((function(e){return!e}))},N=function(){var e=Object(O.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.doc("nweets/".concat(t.id)).update({text:d});case 3:s(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(t),r.a.createElement("div",{className:"nweet"},o?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:N,className:"wrapper nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:g,className:"formBtn cancelBtn"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(E.a,{icon:h.d})),r.a.createElement("span",{onClick:g},r.a.createElement(E.a,{icon:h.a})))))},k=a(51),S=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),f=i[0],d=i[1],b=function(){var e=Object(O.a)(w.a.mark((function e(a){var n,r,c,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""==f){e.next=12;break}return r=p.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},m.collection("nweets").add(u),o(""),d("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(E.a,{icon:h.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},className:"opa_0"}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(E.a,{icon:h.c}))))},C=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){m.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(S,{userObj:t}),r.a.createElement("div",{className:"mt_30px"},l.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})})))))},F=function(e){var t=e.userObj,a=e.refreshUser,c=Object(n.useState)(t.displayName||""),l=Object(u.a)(c,2),o=l[0],s=l[1],m=function(){var e=Object(O.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{onSubmit:m,className:"profileForm"},r.a.createElement("input",{type:"text",placeholder:"Display name",value:o,onChange:function(e){var t=e.target.value;s(t)},autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update profile",className:"formBtn mt_10px"})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){return i.signOut()}},"Log Out")))},I=function(e){var t=e.isLoggedin,a=e.userObj,n=e.refreshUser;return r.a.createElement(f.a,null,t&&r.a.createElement(v,{userObj:a}),r.a.createElement(d.d,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(C,{userObj:a})),r.a.createElement(d.b,{exact:!0,path:"/profile"},r.a.createElement(F,{userObj:a,refreshUser:n})),r.a.createElement(d.a,{from:"*",to:"/"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(d.a,{from:"*",to:"/"}))))};var _=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){i.onAuthStateChanged((function(e){m(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(I,{isLoggedin:Boolean(s),userObj:s,refreshUser:function(){var e=i.currentUser;m({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing...")};a(47);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.83e9275d.chunk.js.map