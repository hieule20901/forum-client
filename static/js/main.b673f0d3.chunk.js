(this["webpackJsonpforum-client"]=this["webpackJsonpforum-client"]||[]).push([[0],{118:function(e,a,t){e.exports=t.p+"static/media/background.03a4debe.jpg"},141:function(e,a,t){e.exports=t(172)},172:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),o=t.n(c),i=t(122),l=t(43),s=t(15),u=t(17),m=t(205),p=t(19),d=t(217),f=t(218),b=t(210),g=t(127),E=t(229),h=t(216),v=t(230),O=t(125),j=t(114),y=t.n(j),S=t(115),w=t.n(S),k=t(86),x=t.n(k),N=t(84),C=t.n(N),T=t(85),R=t.n(T),_=t(75),P=t.n(_),B=t(208),A=t(227),I=t(215),W=t(174),L=t(212),z=t(128),M=t(12),U=t.n(M),D=t(25),G=t(14),F=t(26),q=t.n(F),H=t(225),X=t(211),J=t(228),K=t(214),V=t(213),$=t(209),Q=t(226),Y=Object(m.a)((function(e){return{root:{textAlign:"left"},form:{width:"100%",marginTop:e.spacing(1)},buttonMargin:{margin:e.spacing(1,0,2)}}}));var Z=function(e){var a=Y(),t=Object(n.useState)({name:"",email:"",password:""}),c=Object(s.a)(t,2),o=c[0],i=c[1],l=Object(n.useState)(null),m=Object(s.a)(l,2),p=m[0],d=m[1],f=function(e){var a=e.target,t=a.name,n=a.value;i(Object(G.a)(Object(G.a)({},o),{},Object(u.a)({},t,n)))},b=function(){var e=Object(D.a)(U.a.mark((function e(a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,q.a.post("http://localhost:5000/auth/register",o);case 4:d(!0),i({name:"",email:"",password:""}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),d(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(B.a,{component:"main",maxWidth:"xs"},r.a.createElement($.a,null),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Create your account"),!0===p?r.a.createElement(Q.a,{severity:"success"},"Register successfully!"):!1===p?r.a.createElement(Q.a,{severity:"error"},"Register failed!"):null,r.a.createElement("form",{className:a.form,onSubmit:b},r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Full Name",name:"name",value:o.name,onChange:f,autoFocus:!0}),r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",type:"email",name:"email",value:o.email,onChange:f}),r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",id:"password",label:"Password",name:"password",value:o.password,onChange:f}),r.a.createElement(X.a,{control:r.a.createElement(J.a,{value:"remember",color:"primary"}),labelPlacement:"end",label:"I accept the Terms of Use & Private Policy",className:a.removePadding}),r.a.createElement(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.buttonMargin},"Sign Up"),r.a.createElement(V.a,{container:!0},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(K.a,{href:"#",variant:"body2",onClick:e.closeModal},"Already a member? Sign In")))))},ee=Object(m.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{padding:e.spacing(3),borderRadius:12},menuButton:{marginLeft:e.spacing(2),border:"2px solid",borderRadius:12}}}));function ae(){var e=ee(),a=r.a.useState(!1),t=Object(s.a)(a,2),n=t[0],c=t[1],o=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement(L.a,{onClick:function(){c(!0)},size:"small",variant:"outlined",color:"inherit",className:e.menuButton},"Getting Started"),r.a.createElement(A.a,{className:e.modal,open:n,onClose:o,closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500}},r.a.createElement(W.a,{in:n},r.a.createElement(z.a,{className:e.paper,elevation:3},r.a.createElement(Z,{closeModal:o})))))}var te=t(77),ne=t.n(te),re=function(e){return ne.a.set("token",e)},ce=function(){return ne.a.get("token")},oe=function(){return ne.a.remove("token")};function ie(){return{type:"AUTH",payload:!!ce()}}var le=t(18),se=Object(m.a)((function(e){return{grow:{flexGrow:1,marginBottom:e.spacing(4)},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ue(){var e=se(),a=Object(le.b)(),t=Object(le.c)((function(e){return e.authState})),c=r.a.useState(null),o=Object(s.a)(c,2),i=o[0],l=o[1],u=r.a.useState(null),m=Object(s.a)(u,2),p=m[0],j=m[1],S=Boolean(i),k=Boolean(p),N=function(e){l(e.currentTarget)},T=function(){j(null)},_=function(){l(null),T()},A="primary-search-account-menu",I=r.a.createElement(O.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:A,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:S,onClose:_},r.a.createElement(v.a,{onClick:_},"My account"),r.a.createElement(v.a,{onClick:function(){a({type:"LOG_OUT"}),l(null),T()}},"Logout")),W=r.a.createElement(O.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:k,onClose:T},r.a.createElement(v.a,null,r.a.createElement(b.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(h.a,{badgeContent:4,color:"secondary"},r.a.createElement(C.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(v.a,null,r.a.createElement(b.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(h.a,{badgeContent:11,color:"secondary"},r.a.createElement(R.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(v.a,{onClick:N},r.a.createElement(b.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(x.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(d.a,{position:"fixed"},r.a.createElement(B.a,null,r.a.createElement(f.a,null,r.a.createElement(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(y.a,null)),r.a.createElement(g.a,{className:e.title,variant:"h6",noWrap:!0},"Social Media"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(w.a,null)),r.a.createElement(E.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),t.isAuth?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(b.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(h.a,{badgeContent:4,color:"secondary"},r.a.createElement(C.a,null))),r.a.createElement(b.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(h.a,{badgeContent:17,color:"secondary"},r.a.createElement(R.a,null))),r.a.createElement(b.a,{edge:"end","aria-label":"account of current user","aria-controls":A,"aria-haspopup":"true",onClick:N,color:"inherit"},r.a.createElement(x.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(b.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit"},r.a.createElement(P.a,null)))," "):r.a.createElement(ae,null)))),W,I)}var me=t(223),pe=Object(m.a)((function(e){return{root:{textAlign:"left"},loginPaper:{borderRadius:12,padding:e.spacing(4),marginTop:e.spacing(10),position:"fixed",maxWidth:"25vw"},form:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},submit:{margin:e.spacing(1.5,0,1),borderRadius:14},centerText:{textAlign:"center",fontWeight:300}}}));var de=function(){var e=pe(),a=Object(le.b)(),t=Object(n.useState)(null),c=Object(s.a)(t,2),o=c[0],i=c[1],l=Object(n.useState)({email:"",password:""}),m=Object(s.a)(l,2),p=m[0],d=m[1],f=function(e){var a=e.target,t=a.name,n=a.value;d(Object(G.a)(Object(G.a)({},p),{},Object(u.a)({},t,n)))},b=function(){var e=Object(D.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,q.a.post("https://nodejs-forum-api.herokuapp.com/auth/login",p);case 4:n=e.sent,a({type:"SET_TOKEN",token:n.data}),a(ie()),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),i(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(z.a,{className:e.loginPaper,elevation:1},r.a.createElement($.a,null),r.a.createElement(g.a,{component:"h1",variant:"h5"},"Sign in"),!1===o?r.a.createElement(Q.a,{severity:"error"},"Login failed!"):null,r.a.createElement("form",{onSubmit:b,className:e.form},r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:p.email,onChange:f,autoFocus:!0}),r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"password",id:"password",label:"Password",value:p.password,onChange:f,name:"password"}),r.a.createElement(X.a,{control:r.a.createElement(J.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign in"),r.a.createElement(K.a,{href:"#",variant:"body2"},"Forgot password?")))},fe=t(219),be=t(221),ge=t(220),Ee=t(231),he=t(76),ve=t.n(he),Oe=Object(m.a)((function(e){return{buttonMargin:{marginTop:e.spacing(2),marginBottom:e.spacing(1)}}}));var je=function(){var e=Oe(),a=Object(le.c)((function(e){return e.authState})),t=Object(le.b)(),c=Object(n.useState)({author:"",title:"",content:""}),o=Object(s.a)(c,2),i=o[0],l=o[1],m=Object(n.useState)(null),p=Object(s.a)(m,2),d=p[0],f=p[1],b=function(e){var t=e.target,n=t.name,r=t.value,c=ve()(a.token)._id;l(Object(G.a)(Object(G.a)({},i),{},Object(u.a)({author:c},n,r)))},E=function(){var e=Object(D.a)(U.a.mark((function e(a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,q.a.post("https://nodejs-forum-api.herokuapp.com"+"/users/".concat(i.author,"/posts"),i);case 4:t({type:"GET_POSTS"}),l({author:"",title:"",content:""}),f(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),f(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{className:e.form,onSubmit:E},r.a.createElement(g.a,{variant:"h6"},"New Discussion"),!0===d?r.a.createElement(Q.a,{severity:"success"},"Post successfully!"):!1===d?r.a.createElement(Q.a,{severity:"error"},"Post failed!"):null,r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",value:i.title,onChange:b,autoFocus:!0}),r.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"content",label:"Content",name:"content",value:i.content,onChange:b,autoFocus:!0}),r.a.createElement(L.a,{className:e.buttonMargin,type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Post")))},ye=t(116),Se=t.n(ye),we=Object(m.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{padding:e.spacing(3),borderRadius:12},menuButton:{marginLeft:e.spacing(2),border:"2px solid",borderRadius:12},paperButton:{padding:e.spacing(2),margin:e.spacing(2),borderRadius:12,fontSize:16,fontWeight:"bold",lineHeight:1.325},icon:{fontSize:40,color:"#fff"}}}));function ke(){var e=we(),a=r.a.useState(!1),t=Object(s.a)(a,2),n=t[0],c=t[1],o=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement(L.a,{className:e.paperButton,variant:"contained",color:"secondary",onClick:function(){c(!0)},startIcon:r.a.createElement(Se.a,{className:e.icon})},"Discussion"),r.a.createElement(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:n,onClose:o,closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500}},r.a.createElement(W.a,{in:n},r.a.createElement(z.a,{className:e.paper,elevation:3},r.a.createElement(je,{closeModal:o})))))}var xe=t(117),Ne=t.n(xe);function Ce(){return ve()(ce())}var Te=Object(m.a)((function(e){return{}}));function Re(){var e=Te(),a=Object(n.useState)({}),t=Object(s.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)(null),l=Object(s.a)(i,2),u=l[0],m=l[1],p=Ce(),d=function(){var e=Object(D.a)(U.a.mark((function e(a){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(t=new FormData).append("image",c,c.name),e.prev=3,e.next=6,q.a.put("https://nodejs-forum-api.herokuapp.com"+"/users/".concat(p._id,"/avatar"),t);case 6:o({}),m(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),m(!1);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:d},!0===u?r.a.createElement(Q.a,{severity:"success"},"Updated successfully!"):!1===u?r.a.createElement(Q.a,{severity:"error"},"Updated failed!"):null,r.a.createElement("input",{type:"file",onChange:function(e){var a=e.target.files[0];o(a)},required:!0}),r.a.createElement(L.a,{variant:"contained",color:"secondary",className:e.button,type:"submit"},"Update Photo")))}var _e=Object(m.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{padding:e.spacing(3),borderRadius:12},menuButton:{marginLeft:e.spacing(2),border:"2px solid",borderRadius:12},paperButton:{padding:e.spacing(2),marginLeft:e.spacing(2),borderRadius:12,fontSize:16,fontWeight:"bold",lineHeight:1.325},icon:{fontSize:40,color:"#fff"}}}));function Pe(){var e=_e(),a=r.a.useState(!1),t=Object(s.a)(a,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(L.a,{className:e.paperButton,variant:"outlined",color:"secondary",onClick:function(){c(!0)},startIcon:r.a.createElement(Ne.a,{color:"secondary"})},"Photo"),r.a.createElement(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:n,onClose:function(){c(!1)},closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500}},r.a.createElement(W.a,{in:n},r.a.createElement(z.a,{className:e.paper,elevation:3},r.a.createElement(Re,null)))))}var Be=t(118),Ae=t.n(Be),Ie=Object(m.a)((function(e){return{root:{maxWidth:345,borderRadius:12,marginTop:e.spacing(10),position:"fixed"},background:{height:200,width:"100%"},large:{height:e.spacing(14),width:e.spacing(14),margin:"-18% auto 1%"},center:{textAlign:"center"},paperButton:{padding:e.spacing(2),marginLeft:e.spacing(2),backgroundColor:"#fff",borderRadius:12,fontSize:16,fontWeight:"bold",lineHeight:1.325},upload:{borderRadius:12}}}));function We(){var e=Ie(),a=Object(n.useState)({}),t=Object(s.a)(a,2),c=t[0],o=t[1],i=Ce();return Object(n.useEffect)((function(){(function(){var e=Object(D.a)(U.a.mark((function e(a){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q()("https://nodejs-forum-api.herokuapp.com"+"/users/".concat(a));case 3:t=e.sent,o(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}})()(i._id)})),r.a.createElement(fe.a,{className:e.root},r.a.createElement("img",{className:e.background,src:Ae.a,alt:""}),r.a.createElement(Ee.a,{alt:c.name,className:e.large,src:c.image}),r.a.createElement(ge.a,{className:e.center},r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},c.name),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),r.a.createElement(be.a,null,r.a.createElement(Pe,null),r.a.createElement(ke,null)))}var Le=Object(m.a)((function(e){var a;return{appBar:{top:"auto",bottom:0},container:{display:"flex",alignItems:"center",justifyContent:"center"},button:(a={margin:e.spacing(1.5,0,1),borderRadius:14},Object(u.a)(a,"margin",e.spacing(1)),Object(u.a)(a,"width","30%"),a)}}));function ze(){var e=Le();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{position:"fixed",color:"#fff",className:e.appBar},r.a.createElement(f.a,null,r.a.createElement(B.a,{className:e.container},r.a.createElement(L.a,{variant:"outlined",color:"primary",className:e.button},"Sign in"),r.a.createElement(L.a,{variant:"contained",color:"primary",className:e.button},"Sign up")))))}var Me=t(119),Ue=t.n(Me),De=t(120),Ge=t.n(De),Fe=Object(m.a)((function(e){return{subPaper:{padding:e.spacing(3),borderRadius:12,margin:e.spacing(3)},center:{display:"flex",alignItems:"center",justifyContent:"center",padding:0},title:{lineHeight:1.5,fontWeight:700},content:{fontWeight:400,fontSize:"16px",lineHeight:"20px"},alignPost:{textAlign:"left"},large:{width:e.spacing(7),height:e.spacing(7)}}}));var qe=function(e){var a=Object(le.c)((function(e){return e.authState})),t=Fe(),c=Object(n.useState)(null),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Boolean(i),m=function(e){l(e.currentTarget)},p=function(){l(null)};return r.a.createElement(z.a,{className:t.subPaper,elevation:2},r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{item:!0,xs:2,className:t.center},r.a.createElement(Ee.a,{alt:e.author.name,className:t.large,src:e.author.image})),r.a.createElement(V.a,{item:!0,xs:7},r.a.createElement("div",{className:t.alignPost},r.a.createElement(g.a,{className:t.title,variant:"h6"},e.title),r.a.createElement(g.a,{className:t.content,variant:"body1"},e.content))),r.a.createElement(V.a,{item:!0,xs:2,className:t.center},r.a.createElement(b.a,{color:"inherit"},r.a.createElement(Ue.a,{fontSize:"small",color:"secondary"})),r.a.createElement(b.a,{color:"inherit"},r.a.createElement(Ge.a,{fontSize:"small",color:"secondary"}))),r.a.createElement(V.a,{item:!0,xs:1,className:t.center},r.a.createElement(b.a,{onClick:m,color:"inherit"},r.a.createElement(P.a,{fontSize:"small",color:"action",onClick:m}))),r.a.createElement("div",null,r.a.createElement(O.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:p},a.isAuth&&e.author._id===Ce()._id?r.a.createElement("div",null,r.a.createElement(v.a,{onClick:p},"Edit"),r.a.createElement(v.a,{onClick:p},"Delete")):r.a.createElement(v.a,null,"See More")))))},He=t(222),Xe=Object(m.a)((function(e){return{root:{marginTop:e.spacing(3)}}}));function Je(){var e=Xe();return r.a.createElement(He.a,{disableShrink:!0,className:e.root})}var Ke=Object(m.a)((function(e){return{paperList:{padding:e.spacing(2),borderRadius:12,minHeight:"120vh",textAlign:"center",marginTop:e.spacing(10)}}}));function Ve(){var e=Ke(),a=Object(le.c)((function(e){return e.postState})),t=Object(le.b)();return Object(n.useEffect)((function(){t({type:"GET_POSTS"})}),[]),r.a.createElement(z.a,{className:e.paperList,elevation:1},a.loading?r.a.createElement(Je,null):a.posts.map((function(e){return r.a.createElement(qe,{key:e._id,title:e.title,content:e.content,author:e.author})})))}var $e=Object(m.a)((function(e){var a;return{appBar:{top:"auto",bottom:0},container:{display:"flex",alignItems:"center",justifyContent:"center"},button:(a={margin:e.spacing(1.5,0,1),borderRadius:14},Object(u.a)(a,"margin",e.spacing(1)),Object(u.a)(a,"width","30%"),a)}}));function Qe(){var e=$e();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{position:"fixed",color:"#fff",className:e.appBar},r.a.createElement(f.a,null,r.a.createElement(B.a,{className:e.container},r.a.createElement(L.a,{variant:"contained",color:"primary",className:e.button},"Start Discussion")))))}var Ye=function(){var e=Object(me.a)("(min-width:960px)"),a=Object(le.c)((function(e){return e.authState}));return r.a.createElement("div",null,r.a.createElement(B.a,null,e?r.a.createElement(V.a,{container:!0,spacing:6},r.a.createElement(V.a,{item:!0,md:4,sm:12},a.isAuth?r.a.createElement(We,null):r.a.createElement(de,null)),r.a.createElement(V.a,{item:!0,md:8,sm:12},r.a.createElement(Ve,null))):r.a.createElement("div",null,r.a.createElement(Ve,null),a.isAuth?r.a.createElement(Qe,null):r.a.createElement(ze,null))))},Ze=t(124),ea=t(224),aa=t(121),ta=t.n(aa),na=Object(Ze.a)({palette:{primary:ta.a,secondary:{main:"#536dfe"}}});var ra=function(){var e=Object(le.b)();return Object(n.useEffect)((function(){e(ie())})),r.a.createElement(ea.a,{theme:na},r.a.createElement(i.a,{basename:"/forum-client"},r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",component:Ye})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ca=t(35),oa=t(126),ia={loading:!1,posts:[],error:null},la={loading:!1,isAuth:!!ce(),token:null},sa=Object(ca.c)({postState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ia,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_POSTS":return Object(G.a)(Object(G.a)({},e),{},{loading:!0});case"GET_POSTS_SUCCESS":return Object(G.a)(Object(G.a)({},e),{},{loading:!1,posts:a.payload});case"GET_POSTS_FAILURE":return Object(G.a)(Object(G.a)({},e),{},{loading:!1,posts:[],error:a.payload});default:return e}},authState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:la,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TOKEN":return re(a.token),Object(G.a)(Object(G.a)({},e),{},{isAuth:!0,token:a.token});case"AUTH":return Object(G.a)(Object(G.a)({},e),{},{isAuth:a.payload,token:ce()});case"REGISTER":return Object(G.a)(Object(G.a)({},e),{},{loading:!0});case"REGISTER_FAIL":case"REGISTER_SUCCESS":return Object(G.a)(Object(G.a)({},e),{},{loading:!1});case"LOG_OUT":return oe(),Object(G.a)(Object(G.a)({},e),{},{isAuth:!1,token:null});default:return e}}}),ua=t(39),ma={getPosts:function(){var e=Object(D.a)(U.a.mark((function e(){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("https://nodejs-forum-api.herokuapp.com/posts");case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),getPost:function(){var e=Object(D.a)(U.a.mark((function e(a){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("https://nodejs-forum-api.herokuapp.com"+"/posts/".concat(a));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()},pa=U.a.mark(fa),da=U.a.mark(ba);function fa(){var e;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ua.b)(ma.getPosts);case 3:return e=a.sent,a.next=6,Object(ua.d)({type:"GET_POSTS_SUCCESS",payload:e.data});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(ua.d)({type:"GET_POSTS_FAILURE",payload:a.t0});case 12:case"end":return a.stop()}}),pa,null,[[0,8]])}function ba(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ua.a)([Object(ua.e)("GET_POSTS",fa)]);case 2:case"end":return e.stop()}}),da)}var ga=U.a.mark(Ea);function Ea(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ua.a)([Object(ua.c)(ba)]);case 2:case"end":return e.stop()}}),ga)}var ha=Object(oa.a)(),va=Object(ca.e)(sa,Object(ca.d)(Object(ca.a)(ha),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));ha.run(Ea);var Oa=va;o.a.render(r.a.createElement(le.a,{store:Oa},r.a.createElement(ra,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[141,1,2]]]);
//# sourceMappingURL=main.b673f0d3.chunk.js.map