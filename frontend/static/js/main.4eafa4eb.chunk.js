(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),i=n.n(c),o=n(8),r=(n(28),n(22)),l=n(2),u=n(3),d=n.p+"static/media/header_logo.03b78ada.svg",p=n(0),j=function(e){var t=e.email,n=e.onSignOut;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(p.jsxs)("div",{className:"header__info",children:[Object(p.jsx)(u.b,{exact:!0,path:"/signin",children:Object(p.jsx)(o.b,{to:"signup",className:"header__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(p.jsx)(u.b,{exact:!0,path:"/signup",children:Object(p.jsx)(o.b,{to:"signin",className:"header__title",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(p.jsxs)(u.b,{exact:!0,path:"/",children:[Object(p.jsx)("p",{className:"header__email",children:t}),Object(p.jsx)("button",{onClick:n,className:"header__signout",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})},m=n.p+"static/media/pen.8667ac4a.svg",h=n.p+"static/media/plus-button.d86bb2ed.svg",b=n.p+"static/media/delete.a274c87c.svg",_=Object(a.createContext)();var f=function(e){var t=e.item,n=e.onCardClick,a=e.onCardLike,c=e.onClickDeleteCard,i=s.a.useContext(_),o=t.owner===i._id,r="element__delete ".concat(o?"element__delete_active":"element__delete"),l=t.likes.some((function(e){return e===i._id})),u="element__like ".concat(l?"element__like_active":"");return Object(p.jsxs)("article",{className:"element",children:[Object(p.jsxs)("div",{className:"element__picture",children:[Object(p.jsx)("img",{src:t.link,alt:t.name,className:"element__image",onClick:function(){n(t)}}),Object(p.jsx)("button",{type:"reset",className:r,style:{backgroundImage:"url(".concat(b,")")},onClick:function(){c(t)}})]}),Object(p.jsxs)("div",{className:"element__text-container",children:[Object(p.jsx)("h3",{className:"element__name",children:t.name}),Object(p.jsxs)("div",{className:"element__like-container",children:[Object(p.jsx)("button",{type:"button",className:u,onClick:function(){a(t)}}),Object(p.jsx)("p",{className:"element__like-amount",children:t.likes.length})]})]})]})},O=function(e){var t=s.a.useContext(_);return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{onClick:e.onEditAvatar,className:"profile__avatar-container",children:Object(p.jsx)("img",{src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__button-container",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{type:"button",onClick:e.onEditProfile,className:"profile__edit-button",children:Object(p.jsx)("img",{src:m,alt:"\u0438\u0437\u043c\u0435\u0438\u0442\u044c"})})]}),Object(p.jsx)("p",{className:"profile__text",children:t.about})]}),Object(p.jsx)("button",{type:"button",onClick:e.onAddPlace,className:"profile__plus",children:Object(p.jsx)("img",{src:h,alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__plus-img"})})]}),Object(p.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(p.jsx)(f,{item:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onClickDeleteCard:e.onClickDeleteCard},t._id)}))})]})},g=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__text",children:"\xa9 2021 Mesto Russia"})})};var x=function(e){var t=e.item,n=e.onClose;return Object(p.jsx)("div",{className:"popup popup_image ".concat(t?"popup_visible":""),children:Object(p.jsxs)("div",{className:"popup__image-content",children:[Object(p.jsx)("button",{type:"button",className:"popup__image-content popup__close-button popup__image-close",onClick:n}),Object(p.jsx)("img",{src:t?t.link:"",alt:t?t.name:"",className:"popup__image-content popup__image-pic"}),Object(p.jsx)("h3",{className:"popup__image-content popup__image-text",children:t?t.name:""})]})})},v=n(13),C=n(14),k=new(function(){function e(t){Object(v.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(C.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",credentials:"include",headers:this._headers}).then(this._getResponse)}},{key:"getCardsInfo",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",credentials:"include",headers:this._headers}).then(this._getResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._getResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",credentials:"include",headers:this._headers}).then(this._getResponse)}},{key:"toggleLike",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",credentials:"include",headers:this._headers}).then(this._getResponse)}}]),e}())({url:"https://api.romus.mesto.nomoredomains.work",headers:{Authorization:"Bearer ".concat(document.cookie.search("jwt").value),"Content-Type":"application/json"}}),N=function(e){return Object(p.jsxs)("div",{className:"popup ".concat(e.isOpen?"popup_visible":""),children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),Object(p.jsxs)("div",{className:"popup__content",children:[Object(p.jsx)("h2",{className:"popup__header",children:e.title}),Object(p.jsxs)("form",{name:e.name,className:"popup__form",onSubmit:e.onSubmit,children:[e.children,Object(p.jsx)("button",{type:"submit",className:"popup__save ".concat(e.isDisabled&&"popup__save_disabled"),children:e.buttonText})]})]})]})};var y=function(e){var t=s.a.useContext(_),n=s.a.useState(""),a=Object(l.a)(n,2),c=a[0],i=a[1],o=s.a.useState(""),r=Object(l.a)(o,2),u=r[0],d=r[1];return s.a.useEffect((function(){i(t.name),d(t.about)}),[t,e.isOpen]),Object(p.jsxs)(N,{name:"edit_form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",id:"name",className:"popup__input popup__input_type_name",name:"name",minLength:"2",maxLength:"40",required:!0,placeholder:"\u0418\u043c\u044f",value:c||"",onChange:function(e){i(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"name-error"}),Object(p.jsx)("input",{type:"text",id:"text",className:"popup__input popup__input_type_text",name:"job",minLength:"2",maxLength:"200",required:!0,placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",value:u||"",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"text-error"})]})};var S=function(e){var t=s.a.useRef();return Object(p.jsxs)(N,{name:"edit-avatar_form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(p.jsx)("input",{ref:t,type:"url",id:"avatar-link",className:"popup__input popup__input_type_link",minLength:"2",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link"}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"avatar-link-error"})]})};var E=function(e){var t=s.a.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],i=s.a.useState(""),o=Object(l.a)(i,2),r=o[0],u=o[1];return Object(p.jsxs)(N,{name:"add-card_form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:r,link:a}),u(""),c("")},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(p.jsx)("input",{type:"text",id:"card-name",className:"popup__input popup__input_type_card",minLength:"2",maxLength:"30",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",value:r||"",onChange:function(e){u(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"card-name-error"}),Object(p.jsx)("input",{type:"url",id:"link",className:"popup__input popup__input_type_link",minLength:"2",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",value:a||"",onChange:function(e){c(e.target.value)}}),Object(p.jsx)("span",{className:"input-error input-error_valid",id:"link-error"})]})};var L=function(e){return Object(p.jsx)(N,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",closePopupClickOverlay:e.closePopupClickOverlay,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.deleteCard)},isOpen:e.isOpen,onClose:e.onClose})};var T=function(e){var t=e.onLogin,n=s.a.useState(""),a=Object(l.a)(n,2),c=a[0],i=a[1],o=s.a.useState(""),r=Object(l.a)(o,2),u=r[0],d=r[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t({password:u,email:c})},children:[Object(p.jsx)("input",{type:"email",id:"email",className:"login__input",placeholder:"Email",onChange:function(e){i(e.target.value)},value:c}),Object(p.jsx)("input",{type:"password",id:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){d(e.target.value)},value:u}),Object(p.jsx)("button",{className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var w=function(e){var t=e.onRegister,n=s.a.useState(""),a=Object(l.a)(n,2),c=a[0],i=a[1],r=s.a.useState(""),u=Object(l.a)(r,2),d=u[0],j=u[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f "}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t({password:c,email:d})},children:[Object(p.jsx)("input",{type:"email",id:"email",className:"login__input",placeholder:"Email",onChange:function(e){j(e.target.value)},value:d}),Object(p.jsx)("input",{type:"password",id:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){i(e.target.value)},value:c}),Object(p.jsx)("button",{type:"submit",className:"login__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsx)("div",{className:"login__link",children:Object(p.jsx)(o.b,{className:"login__link_sign",to:"signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})]})},P=n.p+"static/media/successReg.1b6082f8.svg",R=n.p+"static/media/failedReg.df8eddf6.svg";var U=function(e){var t=e.isOpen,n=e.onClose,a=e.message;return Object(p.jsx)("div",{className:"popup ".concat(t?"popup_visible":""),children:Object(p.jsxs)("div",{className:"popup__content popup__info",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button popup__info_close",onClick:n}),Object(p.jsx)("img",{src:a.image,alt:a.text,className:"popup__info_image"}),Object(p.jsxs)("p",{className:"popup__info_text",children:[" ",a.text," "]})]})})},D=n(23),A=n(21),I=["component"];var J=function(e){var t=e.component,n=Object(A.a)(e,I);return Object(p.jsx)(u.b,{children:function(){return n.isLoggedIn?Object(p.jsx)(t,Object(D.a)({},n)):Object(p.jsx)(u.a,{to:"/signin"})}})},q=new(function(){function e(t){var n=t.baseUrl;Object(v.a)(this,e),this._baseUrl=n}return Object(C.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}},{key:"register",value:function(e,t){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(this._getResponse)}},{key:"login",value:function(e,t){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(this._getResponse)}},{key:"checkToken",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(this._getResponse)}}]),e}())({baseUrl:"https://api.romus.mesto.nomoredomains.work"}),F=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),i=Object(l.a)(c,2),o=i[0],d=i[1],m=s.a.useState(!1),h=Object(l.a)(m,2),b=h[0],f=h[1],v=s.a.useState(!1),C=Object(l.a)(v,2),N=C[0],D=C[1],A=s.a.useState(null),I=Object(l.a)(A,2),F=I[0],B=I[1],G=s.a.useState({}),H=Object(l.a)(G,2),M=H[0],z=H[1],K=s.a.useState({}),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=s.a.useState([]),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=s.a.useState(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],se=s.a.useState(!1),ce=Object(l.a)(se,2),ie=ce[0],oe=ce[1],re=s.a.useState({image:"",text:""}),le=Object(l.a)(re,2),ue=le[0],de=le[1],pe=s.a.useState("email"),je=Object(l.a)(pe,2),me=je[0],he=je[1],be=Object(u.g)();var _e=function(){a(!1),d(!1),f(!1),B(null),z(null),D(!1),oe(!1)};function fe(){var e=document.cookie.valueOf("jwt");e&&(console.log(e),q.checkToken(e).then((function(e){he(e.data.email),ae(!0),be.push("/")})).catch((function(e){console.log(e)})))}s.a.useEffect((function(){ne&&Promise.all([k.getUserInfo(),k.getCardsInfo()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];W(n.data),$(a.data)})).catch((function(e){return console.log(e)}))}),[ne]),s.a.useEffect((function(){fe()})),s.a.useEffect((function(){var e=function(e){e.target.classList.contains("popup")&&_e()};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]),s.a.useEffect((function(){var e=function(e){"Escape"===e.key&&_e()};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]);s.a.useEffect((function(){document.cookie.includes("jwt")&&be.push("/")}),[be]),s.a.useEffect((function(){fe()}));return Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(_.Provider,{value:V,children:[Object(p.jsx)(j,{email:me,onSignOut:function(e){document.cookie.replace(""),ae(!1),be.push("/signin")}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(J,{exact:!0,path:"/",isLoggedIn:ne,component:O,onEditAvatar:function(){return f(!0)},onEditProfile:function(){return a(!0)},onAddPlace:function(){return d(!0)},onCardClick:function(e){B(e)},cards:Z,onCardLike:function(e){var t=e.likes.some((function(e){return e===V._id}));k.toggleLike(e._id,!t).then((function(t){$((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){return console.log(e)}))},onClickDeleteCard:function(e){D(!0),z(e)}}),Object(p.jsx)(u.b,{path:"/signin",children:Object(p.jsx)(T,{onLogin:function(e){var t=e.password,n=e.email;q.login(t,n).then((function(e){console.log(e.message),"\u0412\u0445\u043e\u0434 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e"===e.message&&(ae(!0),be.push("/"),he(n))})).catch((function(e){oe(!0),de({image:R,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})}))}})}),Object(p.jsx)(u.b,{path:"/signup",children:Object(p.jsx)(w,{onRegister:function(e){var t=e.password,n=e.email;q.register(t,n).then((function(e){(e.data._id||400!==e.statusCode)&&(he(e.data.email),be.push("/signin"),de({image:P,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}))})).catch((function(e){de({image:R,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})})).finally((function(){oe(!0)}))}})}),Object(p.jsx)(u.b,{path:"*",children:ne?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/signin"})})]}),ne&&Object(p.jsx)(g,{}),Object(p.jsx)(y,{isOpen:n,onClose:_e,onUpdateUser:function(e){k.setUserInfo(e).then((function(e){W(e.data),_e()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(S,{isOpen:b,onClose:_e,onUpdateAvatar:function(e){k.editAvatar(e).then((function(e){W(e),_e()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(E,{isOpen:o,onClose:_e,onAddPlace:function(e){k.addCard(e).then((function(e){$([e.data].concat(Object(r.a)(Z))),_e()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(L,{onClose:_e,onDeleteCard:function(e){k.deleteCard(e._id).then((function(){$((function(t){return t.filter((function(t){return t._id!==e._id}))})),_e()})).catch((function(e){return console.log(e)}))},isOpen:N,deleteCard:M}),Object(p.jsx)(x,{item:F,onClose:_e}),Object(p.jsx)(U,{isOpen:ie,onClose:_e,message:ue})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(F,{})})}),document.getElementById("root")),B()}},[[38,1,2]]]);
//# sourceMappingURL=main.4eafa4eb.chunk.js.map