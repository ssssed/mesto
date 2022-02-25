(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscapeKey=this._handleEscapeKey.bind(this)}var n,r;return n=t,(r=[{key:"open",value:function(){this._popup.classList.add("modal_active"),document.addEventListener("keydown",this._handleEscapeKey)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscapeKey),this._popup.classList.remove("modal_active")}},{key:"_handleEscapeKey",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".modal__close-btn").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("modal")&&e.close(e._popup)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelector(".profile__edit"),r=document.querySelector(".modal-edit__inner"),o=document.querySelector(".profile__add"),i=(document.querySelector(".modal__input_type_title"),document.querySelector(".modal__input_type_link"),document.querySelector(".modal-add__inner")),a=document.querySelector(".modal__input_type_name"),u=document.querySelector(".modal__input_type_job"),c=document.querySelectorAll(".modal__inner"),s=(document.querySelector(".modal-delite"),document.querySelector(".modal-delete__submit")),l=document.querySelector(".modal-delete__close-btn"),f={},d=(document.querySelector(".modal-avatar"),document.querySelector(".modal-avatar__submit"),document.querySelector(".modal-avatar__inner"),document.querySelector(".profile__img-container")),p=(document.querySelector(".modal-edit__save"),document.querySelector(".modal-add__save"));function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._image=t.link,this._likes=t.likes,this._owner=t.owner,this._cardId=t._id,this._cardSelector=n,this._myId=r,this._api=o,this._handleCardClick=i}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_like",value:function(){this._likeCard.classList.toggle("card__like_active"),this._countLikeElement=this._element.querySelector(".card__like-count"),this._likeCard.classList.contains("card__like_active")?(this._api.putLike(this._cardId),this._countLikeElement.textContent++):(this._api.deleteLike(this._cardId),this._countLikeElement.textContent--)}},{key:"_removeCard",value:function(e){this._api.deleteCard(e),this._element.remove()}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImg=this._element.querySelector(".card__img"),this._likeCard=this._element.querySelector(".card__like"),this._deleteCard=this._element.querySelector(".card__trash"),this._owner._id!==this._myId&&this._deleteCard.remove(),this._countLikeElement=this._element.querySelector(".card__like-count"),this._countLikeElement.textContent=this._likes.length,this._likes.forEach((function(t){t._id==e._myId&&e._likeCard.classList.add("card__like_active")})),this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._title,this._cardImg.src=this._image,this._cardImg.alt=this._title,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImg.addEventListener("click",(function(){e._handleCardClick(e._title,e._image)})),this._likeCard.addEventListener("click",(function(){e._like()})),this._deleteCard.addEventListener("click",(function(){var n=new t(".modal-delete");n.open(),s.addEventListener("click",(function(){e._removeCard(e._cardId),n.close()})),l.addEventListener("click",(function(){n.close()}))}))}}])&&h(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.data,o=t.render;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._render=o,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";"default"!=t?this._container.prepend(e):this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.then((function(t){t.forEach((function(t){e._render(t)}))}))}}],n&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._popupForm=document.querySelector(e),r._submitFunction=n,r}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this,t=this._popupForm.querySelectorAll(".modal__input");return this._inputListValues={},t.forEach((function(t){e._inputListValues[t.id]=t.value})),this._inputListValues}},{key:"close",value:function(){k(S(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;k(S(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._getInputValues())}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(t);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function P(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){j(R(a.prototype),"open",this).call(this);var n=document.querySelector(".opencard__img");document.querySelector(".opencard__title").textContent=e,n.src=t,n.alt=e}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(t);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t.userName),this._userInfo=document.querySelector(t.userJob),this._userAvatar=document.querySelector(t.userAvatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userDescription:this._userInfo.textContent,id:this.id}}},{key:"setUserInfo",value:function(e,t,n){this._userName.textContent=e,this._userInfo.textContent=t,this.id=n}},{key:"updateUserAvatar",value:function(e){this._userAvatar.src=e}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._profileUrl=t.profileUrl,this._authorization=t.headers.authorization}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Error: "+e.status+e.statusText)}},{key:"getCards",value:function(){var e=this;return fetch(this._baseUrl,{headers:{authorization:this._authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"renderProfile",value:function(){var e=this;return fetch(this._profileUrl,{headers:{authorization:this._authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"postCard",value:function(e,t){var n=this;return fetch(this._baseUrl,{method:"POST",headers:{"Content-Type":"application/json",authorization:this._authorization},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;fetch("https://mesto.nomoreparties.co/v1/cohort36/cards/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",authorization:this._authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("https://mesto.nomoreparties.co/v1/cohort36/cards/".concat(e,"/likes"),{headers:{authorization:this._authorization},method:"PUT"}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("https://mesto.nomoreparties.co/v1/cohort36/cards/".concat(e,"/likes"),{headers:{authorization:this._authorization},method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return console.log(e),fetch("https://mesto.nomoreparties.co/v1/cohort36/users/me/avatar",{headers:{"Content-Type":"application/json",authorization:this._authorization},method:"PATCH",body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._getResponseData(e)}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort36/cards",profileUrl:"https://nomoreparties.co/v1/cohort36/users/me",headers:{authorization:"5b005959-c919-4ebc-988e-c1e91f53093c","Content-Type":"application/json"}}),V=new x({userName:".profile__name",userJob:".profile__job",userAvatar:".profile__img"});A.renderProfile().then((function(e){V.setUserInfo(e.name,e.about,e._id),V.getUserInfo(),A.getCards()}));var N=new T(".opencard");N.setEventListeners();var F=new m({data:A.getCards(),render:function(e){var t=M(e,".template-card",V.getUserInfo().id,A);F.addItem(t)}},".elements"),K=new C(".modal-edit__inner",".modal-edit",(function(){V.setUserInfo(a.value,u.value),K.close()}));K.setEventListeners();var J=new C(".modal-add__inner",".modal-add",(function(e){p.textContent="Создаю...",A.postCard(e.inputTitle,e.inputLink).then((function(e){var t=M(e,".template-card",V.getUserInfo().id,A);F.addItem(t,"new"),J.close()})).finally((function(){return p.textContent="Создать"})).catch((function(e){return alert(e)}))})),H=new C(".modal-avatar__inner",".modal-avatar",(function(e){A.changeAvatar(e.inputAvatarLink),V.updateUserAvatar(e.inputAvatarLink),H.close()}));function M(e,t,n,r){return new _(e,t,n,r,(function(){N.open(e.name,e.link)})).generateCard()}H.setEventListeners(),F.renderItems(),J.setEventListeners(),c.forEach((function(e){var t=new B({formSelector:".modal__inner",inputSelector:".modal__input",submitButtonSelector:".modal__save",inactiveButtonClass:"modal__save_active",inputErrorClass:"modal__input_type_error"},e),n=e.name;f[n]=t,f[n].enableValidation()})),n.addEventListener("click",(function(e){var t=V.getUserInfo();a.value=t.userName,u.value=t.userDescription,f[r.name].resetValidation(),K.open()})),o.addEventListener("click",(function(e){f[i.name].resetValidation(),J.open()})),d.addEventListener("click",(function(){H.open()}))})();