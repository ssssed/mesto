(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.name,this._image=e.link,this._likes=e.likes,this._owner=e.owner,this._cardId=e._id,this._cardSelector=n,this._myId=r,this._api=o,this._popupWithConfirm=i,this._handleCardClick=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_like",value:function(){var e=this;this._likeCard.classList.contains("card__like_active")?this._api.deleteLike(this._cardId).then((function(){e._likeCard.classList.toggle("card__like_active"),e._countLikeElement.textContent--})).catch((function(e){alert(e)})):this._api.putLike(this._cardId).then((function(){e._likeCard.classList.toggle("card__like_active"),e._countLikeElement.textContent++})).catch((function(e){alert(e)}))}},{key:"_removeCard",value:function(e){var t=this;this._api.deleteCard(e).then((function(){t._element.remove()})).catch((function(e){alert(e)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImg=this._element.querySelector(".card__img"),this._likeCard=this._element.querySelector(".card__like"),this._deleteCard=this._element.querySelector(".card__trash"),this._element._cardId=this._cardId,this._owner._id!==this._myId&&this._deleteCard.remove(),this._countLikeElement=this._element.querySelector(".card__like-count"),this._countLikeElement.textContent=this._likes.length,this._likes.forEach((function(t){t._id==e._myId&&e._likeCard.classList.add("card__like_active")})),this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._title,this._cardImg.src=this._image,this._cardImg.alt=this._title,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImg.addEventListener("click",(function(){e._handleCardClick(e._title,e._image)})),this._likeCard.addEventListener("click",(function(){e._like()})),this._deleteCard.addEventListener("click",(function(){e._popupWithConfirm.open(e._element)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.render;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._render=o,this._container=document.querySelector(n)}var t,r;return t=e,r=[{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";"default"!=t?this._container.prepend(e):this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.then((function(t){t.forEach((function(t){e._render(t)}))}))}}],r&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscapeKey=this._handleEscapeKey.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("modal_active"),document.addEventListener("keydown",this._handleEscapeKey)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscapeKey),this._popup.classList.remove("modal_active")}},{key:"_handleEscapeKey",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".modal__close-btn").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("modal")&&e.close(e._popup)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._popupForm=document.querySelector(e),r._submitFunction=n,r}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._allInputs=this._popupForm.querySelectorAll(".modal__input"),this._inputListValues={},this._allInputs.forEach((function(t){e._inputListValues[t.id]=t.value})),this._inputListValues}},{key:"close",value:function(){u(d(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;u(d(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._getInputValues())}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){y(g(a.prototype),"open",this).call(this),this._cardLink=document.querySelector(".opencard__img"),this._cardTitle=document.querySelector(".opencard__title"),this._cardTitle.textContent=e,this._cardLink.src=t,this._cardLink.alt=e}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._popupForm=document.querySelector(t),r._submitFunction=n,r}return t=a,(n=[{key:"open",value:function(e){S(j(a.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;S(j(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._card)}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t.userName),this._userInfo=document.querySelector(t.userJob),this._userAvatar=document.querySelector(t.userAvatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userDescription:this._userInfo.textContent,id:this.id,avatar:this._userAvatar}}},{key:"setUserInfo",value:function(e,t,n){this._userName.textContent=e,this._userInfo.textContent=t,this.id=n}},{key:"updateUserAvatar",value:function(e){this._userAvatar.src=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Error: "+e.status+e.statusText)}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"renderProfile",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"updateProfile",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"postCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._getResponseData(e)}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=document.querySelector(".profile__edit"),B=(document.querySelector(".profile__img"),document.querySelector(".modal-edit__inner")),A=document.querySelector(".profile__add"),V=(document.querySelector(".modal__input_type_title"),document.querySelector(".modal__input_type_link"),document.querySelector(".modal-add__inner")),N=document.querySelector(".modal__input_type_name"),F=document.querySelector(".modal__input_type_job"),J=document.querySelectorAll(".modal__inner"),K=(document.querySelector(".modal-delite"),document.querySelector(".modal-delete__inner"),document.querySelector(".modal-delete__submit")),H=(document.querySelector(".modal-delete__close-btn"),{}),W=(document.querySelector(".modal-avatar"),document.querySelector(".modal-avatar__submit")),z=document.querySelector(".modal-avatar__inner"),M=document.querySelector(".profile__img-container"),G=document.querySelector(".modal-edit__save"),Q=document.querySelector(".modal-add__save"),X=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort36",headers:{authorization:"5b005959-c919-4ebc-988e-c1e91f53093c","Content-Type":"application/json"}}),Y=new q({userName:".profile__name",userJob:".profile__job",userAvatar:".profile__img"});X.renderProfile().then((function(e){Y.setUserInfo(e.name,e.about,e._id),Y.updateUserAvatar(e.avatar)})).then((function(){X.getCards()})).catch((function(e){alert(e)}));var Z=new P(".modal-delete",".modal-delete__inner",(function(e){K.textContent="Удаление...",X.deleteCard(e._cardId).then((function(){e.remove(),Z.close()})).catch((function(e){alert(e)})).finally((function(){K.textContent="Да"}))}));Z.setEventListeners();var $=new k(".opencard");$.setEventListeners();var ee=new r({data:X.getCards(),render:function(e){var t=oe(e,".template-card",Y.getUserInfo().id,X,Z);ee.addItem(t)}},".elements"),te=new p(".modal-edit__inner",".modal-edit",(function(e){G.textContent="Сохраняю...",X.updateProfile(e.inputName,e.inputJob).then((function(e){Y.setUserInfo(e.name,e.about),te.close()})).finally((function(){G.textContent="Сохранить"})).catch((function(e){alert(e)}))}));te.setEventListeners();var ne=new p(".modal-add__inner",".modal-add",(function(e){Q.textContent="Создаю...",X.postCard(e.inputTitle,e.inputLink).then((function(e){var t=oe(e,".template-card",Y.getUserInfo().id,X,Z);ee.addItem(t,"new"),ne.close()})).finally((function(){return Q.textContent="Создать"})).catch((function(e){return alert(e)}))})),re=new p(".modal-avatar__inner",".modal-avatar",(function(e){W.textContent="Сохраняю...",X.changeAvatar(e.inputAvatarLink).then((function(e){Y.updateUserAvatar(e.avatar),re.close()})).finally((function(){W.textContent="Да"})).catch((function(e){alert(e)}))}));function oe(e,n,r,o,i){return new t(e,n,r,o,i,(function(){$.open(e.name,e.link)})).generateCard()}re.setEventListeners(),ee.renderItems(),ne.setEventListeners(),J.forEach((function(e){var t=new T({formSelector:".modal__inner",inputSelector:".modal__input",submitButtonSelector:".modal__save",inactiveButtonClass:"modal__save_active",inputErrorClass:"modal__input_type_error"},e),n=e.name;H[n]=t,H[n].enableValidation()})),D.addEventListener("click",(function(e){var t=Y.getUserInfo();N.value=t.userName,F.value=t.userDescription,H[B.name].resetValidation(),te.open()})),A.addEventListener("click",(function(e){H[V.name].resetValidation(),ne.open()})),M.addEventListener("click",(function(){H[z.name].resetValidation(),re.open()}))})();