(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{146:function(e,t,n){},160:function(e,t){},162:function(e,t){},176:function(e,t){},178:function(e,t){},206:function(e,t){},208:function(e,t){},209:function(e,t){},214:function(e,t){},216:function(e,t){},222:function(e,t){},224:function(e,t){},243:function(e,t){},255:function(e,t){},258:function(e,t){},275:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(133),s=n.n(i),o=n(17),r=(n(146),n(140)),l=n(4),u=n(7),d=n.p+"static/media/header_logo.03b78ada.svg",p=n(0),j=function(e){var t=e.email,n=e.onSignOut;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(p.jsxs)("div",{className:"header__info",children:[Object(p.jsx)(u.b,{exact:!0,path:"/signin",children:Object(p.jsx)(o.b,{to:"signup",className:"header__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(p.jsx)(u.b,{exact:!0,path:"/signup",children:Object(p.jsx)(o.b,{to:"signin",className:"header__title",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsxs)(u.b,{exact:!0,path:"/",children:[Object(p.jsx)("p",{className:"header__email",children:t}),Object(p.jsx)("button",{onClick:n,className:"header__signout",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})},m=n.p+"static/media/pen.8667ac4a.svg",h=n.p+"static/media/plus-button.d86bb2ed.svg",b=n.p+"static/media/delete.a274c87c.svg",_=Object(a.createContext)();var f=function(e){var t=e.item,n=e.onCardClick,a=e.onCardLike,i=e.onClickDeleteCard,s=c.a.useContext(_),o=t.owner._id===s._id,r="element__delete ".concat(o?"element__delete_active":"element__delete"),l=t.likes.some((function(e){return e._id===s._id})),u="element__like ".concat(l?"element__like_active":"");return Object(p.jsxs)("article",{className:"element",children:[Object(p.jsxs)("div",{className:"element__picture",children:[Object(p.jsx)("img",{src:t.link,alt:t.name,className:"element__image",onClick:function(){n(t)}}),Object(p.jsx)("button",{type:"reset",className:r,style:{backgroundImage:"url(".concat(b,")")},onClick:function(){i(t)}})]}),Object(p.jsxs)("div",{className:"element__text-container",children:[Object(p.jsx)("h3",{className:"element__name",children:t.name}),Object(p.jsxs)("div",{className:"element__like-container",children:[Object(p.jsx)("button",{type:"button",className:u,onClick:function(){a(t)}}),Object(p.jsx)("p",{className:"element__like-amount",children:t.likes.length})]})]})]})},O=function(e){var t=c.a.useContext(_);return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{onClick:e.onEditAvatar,className:"profile__avatar-container",children:Object(p.jsx)("img",{src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__button-container",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{type:"button",onClick:e.onEditProfile,className:"profile__edit-button",children:Object(p.jsx)("img",{src:m,alt:"\u0438\u0437\u043c\u0435\u0438\u0442\u044c"})})]}),Object(p.jsx)("p",{className:"profile__text",children:t.about})]}),Object(p.jsx)("button",{type:"button",onClick:e.onAddPlace,className:"profile__plus",children:Object(p.jsx)("img",{src:h,alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__plus-img"})})]}),Object(p.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(p.jsx)(f,{item:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onClickDeleteCard:e.onClickDeleteCard},t._id)}))})]})},g=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__text",children:"\xa9 2021 Mesto Russia"})})};var x=function(e){var t=e.item,n=e.onClose;return Object(p.jsx)("div",{className:"popup popup_image ".concat(t?"popup_visible":""),children:Object(p.jsxs)("div",{className:"popup__image-content",children:[Object(p.jsx)("button",{type:"button",className:"popup__image-content popup__close-button popup__image-close",onClick:n}),Object(p.jsx)("img",{src:t?t.link:"",alt:t?t.name:"",className:"popup__image-content popup__image-pic"}),Object(p.jsx)("h3",{className:"popup__image-content popup__image-text",children:t?t.name:""})]})})},v=n(136),C=n(137),N=n(138),k=n.n(N),y="https://api.romus.mesto.nomoredomains.work";function S(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}var E=new(function(){function e(t){Object(v.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(C.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",credentials:"include",headers:this._headers}).then(this._getResponse)}},{key:"getCardsInfo",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",credentials:"include",headers:this._headers}).then(this._getResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._getResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",credentials:"include",headers:this._headers}).then(this._getResponse)}},{key:"toggleLike",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",credentials:"include",headers:this._headers}).then(this._getResponse)}}]),e}())({url:y,headers:{Authorization:"Bearer ".concat(document.cookie.valueOf(k.a)),"Content-Type":"application/json"}}),L=function(e){return Object(p.jsxs)("div",{className:"popup ".concat(e.isOpen?"popup_visible":""),children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),Object(p.jsxs)("div",{className:"popup__content",children:[Object(p.jsx)("h2",{className:"popup__header",children:e.title}),Object(p.jsxs)("form",{name:e.name,className:"popup__form",onSubmit:e.onSubmit,children:[e.children,Object(p.jsx)("button",{type:"submit",className:"popup__save ".concat(e.isDisabled&&"popup__save_disabled"),children:e.buttonText})]})]})]})};var w=function(e){var t=c.a.useContext(_),n=c.a.useState(""),a=Object(l.a)(n,2),i=a[0],s=a[1],o=c.a.useState(""),r=Object(l.a)(o,2),u=r[0],d=r[1];return c.a.useEffect((function(){s(t.name),d(t.about)}),[t,e.isOpen]),Object(p.jsxs)(L,{name:"edit_form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:u})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",id:"name",className:"popup__input popup__input_type_name",name:"name",minLength:"2",maxLength:"40",required:!0,placeholder:"\u0418\u043c\u044f",value:i||"",onChange:function(e){s(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"name-error"}),Object(p.jsx)("input",{type:"text",id:"text",className:"popup__input popup__input_type_text",name:"job",minLength:"2",maxLength:"200",required:!0,placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",value:u||"",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"text-error"})]})};var T=function(e){var t=c.a.useRef();return Object(p.jsxs)(L,{name:"edit-avatar_form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{ref:t,type:"url",id:"avatar-link",className:"popup__input popup__input_type_link",minLength:"2",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link"}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"avatar-link-error"})]})};var P=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],i=n[1],s=c.a.useState(""),o=Object(l.a)(s,2),r=o[0],u=o[1];return Object(p.jsxs)(L,{name:"add-card_form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:r,link:a}),u(""),i("")},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",id:"card-name",className:"popup__input popup__input_type_card",minLength:"2",maxLength:"30",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",value:r||"",onChange:function(e){u(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"card-name-error"}),Object(p.jsx)("input",{type:"url",id:"link",className:"popup__input popup__input_type_link",minLength:"2",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",value:a||"",onChange:function(e){i(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"link-error"})]})};var A=function(e){return Object(p.jsx)(L,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",closePopupClickOverlay:e.closePopupClickOverlay,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.deleteCard)},isOpen:e.isOpen,onClose:e.onClose})};var D=function(e){var t=e.onLogin,n=c.a.useState(""),a=Object(l.a)(n,2),i=a[0],s=a[1],o=c.a.useState(""),r=Object(l.a)(o,2),u=r[0],d=r[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t({password:u,email:i})},children:[Object(p.jsx)("input",{type:"email",id:"email",className:"login__input",placeholder:"Email",onChange:function(e){s(e.target.value)},value:i}),Object(p.jsx)("input",{type:"password",id:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){d(e.target.value)},value:u}),Object(p.jsx)("button",{className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var R=function(e){var t=e.onRegister,n=c.a.useState(""),a=Object(l.a)(n,2),i=a[0],s=a[1],r=c.a.useState(""),u=Object(l.a)(r,2),d=u[0],j=u[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f "}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t({password:i,email:d})},children:[Object(p.jsx)("input",{type:"email",id:"email",className:"login__input",placeholder:"Email",onChange:function(e){j(e.target.value)},value:d}),Object(p.jsx)("input",{type:"password",id:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){s(e.target.value)},value:i}),Object(p.jsx)("button",{type:"submit",className:"login__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsx)("div",{className:"login__link",children:Object(p.jsx)(o.b,{className:"login__link_sign",to:"signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})]})},I=n.p+"static/media/successReg.1b6082f8.svg",U=n.p+"static/media/failedReg.df8eddf6.svg";var J=function(e){var t=e.isOpen,n=e.onClose,a=e.message;return Object(p.jsx)("div",{className:"popup ".concat(t?"popup_visible":""),children:Object(p.jsxs)("div",{className:"popup__content popup__info",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button popup__info_close",onClick:n}),Object(p.jsx)("img",{src:a.image,alt:a.text,className:"popup__info_image"}),Object(p.jsxs)("p",{className:"popup__info_text",children:[" ",a.text," "]})]})})},q=n(141),B=n(139),F=["component"];var G=function(e){var t=e.component,n=Object(B.a)(e,F);return Object(p.jsx)(u.b,{children:function(){return n.isLoggedIn?Object(p.jsx)(t,Object(q.a)({},n)):Object(p.jsx)(u.a,{to:"/signin"})}})},z=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=c.a.useState(!1),s=Object(l.a)(i,2),o=s[0],d=s[1],m=c.a.useState(!1),h=Object(l.a)(m,2),b=h[0],f=h[1],v=c.a.useState(!1),C=Object(l.a)(v,2),N=C[0],k=C[1],L=c.a.useState(null),q=Object(l.a)(L,2),B=q[0],F=q[1],z=c.a.useState(null),H=Object(l.a)(z,2),M=H[0],K=H[1],Q=c.a.useState({}),V=Object(l.a)(Q,2),W=V[0],X=V[1],Y=c.a.useState([]),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState(!1),ne=Object(l.a)(te,2),ae=ne[0],ce=ne[1],ie=c.a.useState(!1),se=Object(l.a)(ie,2),oe=se[0],re=se[1],le=c.a.useState({image:"",text:""}),ue=Object(l.a)(le,2),de=ue[0],pe=ue[1],je=c.a.useState("email"),me=Object(l.a)(je,2),he=me[0],be=me[1],_e=Object(u.g)();var fe=function(){a(!1),d(!1),f(!1),F(null),K(null),k(!1),re(!1)};function Oe(){var e;document.cookie.includes("jwt=")&&(console.log(document.cookie),fetch("".concat(y,"/users/me"),{method:"GET",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(S).then((function(e){be(e.data.email),ce(!0),_e.push("/")})).catch((function(e){console.log(e)})))}c.a.useEffect((function(){ae&&Promise.all([E.getUserInfo(),E.getCardsInfo()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];X(n),ee(a)})).catch((function(e){return console.log(e)}))}),[ae]),c.a.useEffect((function(){Oe()})),c.a.useEffect((function(){var e=function(e){e.target.classList.contains("popup")&&fe()};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]),c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&fe()};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),c.a.useEffect((function(){document.cookie.includes("jwt=")&&_e.push("/")}),[_e]);return Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(_.Provider,{value:W,children:[Object(p.jsx)(j,{email:he,onSignOut:function(){localStorage.removeItem("jwt"),ce(!1),_e.push("/signin")}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(G,{exact:!0,path:"/",isLoggedIn:ae,component:O,onEditAvatar:function(){return f(!0)},onEditProfile:function(){return a(!0)},onAddPlace:function(){return d(!0)},onCardClick:function(e){F(e)},cards:$,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===W._id}));E.toggleLike(e._id,!t).then((function(t){ee((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onClickDeleteCard:function(e){k(!0),K(e)}}),Object(p.jsx)(u.b,{path:"/signin",children:Object(p.jsx)(D,{onLogin:function(e){var t=e.password,n=e.email;(function(e,t,n){return fetch("".concat(y,"/signin"),{method:"POST",withCredentials:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(S)})(t,n).then((function(e){console.log(e.message),"\u0412\u0445\u043e\u0434 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e"===e.message&&(Oe(),ce(!0),_e.push("/"),be(n))})).catch((function(e){re(!0),pe({image:U,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})}))}})}),Object(p.jsx)(u.b,{path:"/signup",children:Object(p.jsx)(R,{onRegister:function(e){(function(e,t){return fetch("".concat(y,"/signup"),{method:"POST",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(S)})(e.password,e.email).then((function(e){(e.data._id||400!==e.statusCode)&&(be(e.data.email),_e.push("/signin"),pe({image:I,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}))})).catch((function(e){pe({image:U,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})})).finally((function(){re(!0)}))}})}),Object(p.jsx)(u.b,{path:"*",children:ae?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/signin"})})]}),ae&&Object(p.jsx)(g,{}),Object(p.jsx)(w,{isOpen:n,onClose:fe,onUpdateUser:function(e){E.setUserInfo(e).then((function(e){X(e),fe()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(T,{isOpen:b,onClose:fe,onUpdateAvatar:function(e){E.editAvatar(e).then((function(e){X(e),fe()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(P,{isOpen:o,onClose:fe,onAddPlace:function(e){E.addCard(e).then((function(e){ee([e].concat(Object(r.a)($))),fe()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(A,{onClose:fe,onDeleteCard:function(e){E.deleteCard(e._id).then((function(){ee((function(t){return t.filter((function(t){return t._id!==e._id}))})),fe()})).catch((function(e){return console.log(e)}))},isOpen:N,deleteCard:M}),Object(p.jsx)(x,{item:B,onClose:fe}),Object(p.jsx)(J,{isOpen:oe,onClose:fe,message:de})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(z,{})})}),document.getElementById("root")),H()}},[[275,1,2]]]);
//# sourceMappingURL=main.ac571341.chunk.js.map