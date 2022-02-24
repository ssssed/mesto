import "./index.css";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from "../components/Api.js";
import {
  editBtn,
  editForm,
  addBtn,
  addInputName,
  addInputLink,
  addForm,
  initialCards,
  userNameInput,
  userJobInput,
  formLists,
  formValidators,
  deliteModal,
  deleteModalBtn,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort36/cards",
  profileUrl: "https://nomoreparties.co/v1/cohort36/users/me",
  headers: {
    authorization: "5b005959-c919-4ebc-988e-c1e91f53093c",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  userName: ".profile__name",
  userJob: ".profile__job",
});

api.renderProfile().then((result) => {
  userInfo.setUserInfo(result.name, result.about, result._id);
  userInfo.getUserInfo();
  api.renderCard(".elements", ".template-card");
});

const popupWithImage = new PopupWithImage(".opencard");
popupWithImage.setEventListeners();
const renderCards = new Section(
  {
    data: initialCards,
    render: (item) => {
      const cardElement = createCard(
        item.name,
        item.link,
        item.likes,
        ".template-card",
        userInfo.getUserInfo
      );
      renderCards.addItem(cardElement);
    },
  },
  ".elements"
);

renderCards.renderItems();

const editPopupWithForm = new PopupWithForm(
  ".modal-edit__inner",
  ".modal-edit",
  (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(userNameInput.value, userJobInput.value);
    editPopupWithForm.close();
  }
);
editPopupWithForm.setEventListeners();
const addPopupWithForm = new PopupWithForm(
  ".modal-add__inner",
  ".modal-add",
  (evt) => {
    evt.preventDefault();
    initialCards.push({
      name: addInputName.value,
      link: addInputLink.value,
      likes: [],
    });
    renderCards.addItem(
      createCard(
        addInputName.value,
        addInputLink.value,
        [],
        ".template-card",
        userInfo.getUserInfo().id
      )
    );
    api.postCard(addInputName.value, addInputLink.value); // Выкладываю на сервер картинку
    addPopupWithForm.close();
  }
);
addPopupWithForm.setEventListeners();

formLists.forEach((formElement) => {
  const formValidator = new FormValidator(
    {
      formSelector: ".modal__inner",
      inputSelector: ".modal__input",
      submitButtonSelector: ".modal__save",
      inactiveButtonClass: "modal__save_active",
      inputErrorClass: "modal__input_type_error",
    },
    formElement
  );
  const formName = formElement.name;
  formValidators[formName] = formValidator;
  formValidators[formName].enableValidation();
});

editBtn.addEventListener("click", (evt) => {
  const data = userInfo.getUserInfo();
  userNameInput.value = data.userName;
  userJobInput.value = data.userDescription;
  formValidators[editForm.name].resetValidation();
  editPopupWithForm.open();
});

addBtn.addEventListener("click", (evt) => {
  formValidators[addForm.name].resetValidation();
  addPopupWithForm.open();
});
export function createCard(title, link, countLike, templateClass, id) {
  // console.log(countLike.length);
  const newCard = new Card(
    { name: title, link: link },
    templateClass,
    countLike,
    id,
    () => {
      popupWithImage.open(title, link);
    }
  );
  return newCard.generateCard();
}
