import "./index.css";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
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
} from "../utils/constants.js";
const popupWithImage = new PopupWithImage(".opencard");
popupWithImage.setEventListeners();

const renderCards = new Section(
  {
    data: initialCards,
    render: (item) => {
      const cardElement = createCard(item.name, item.link, ".template-card");
      renderCards.addItem(cardElement);
    },
  },
  ".elements"
);

renderCards.renderItems();

const userInfo = new UserInfo({
  userName: ".profile__name",
  userJob: ".profile__job",
});

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
    renderCards.addItem(
      createCard(addInputName.value, addInputLink.value, ".template-card")
    );
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

function createCard(title, link, templateClass) {
  const newCard = new Card({ name: title, link: link }, templateClass, () => {
    popupWithImage.open(title, link);
  });
  return newCard.generateCard();
}
