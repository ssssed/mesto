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
  addForm,
  userNameInput,
  userJobInput,
  formLists,
  formValidators,
  avatarIcon,
  modalEditSubmitBtn,
  modalAddSubmitBtn,
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
  userAvatar: ".profile__img",
});

api.renderProfile().then((result) => {
  userInfo.setUserInfo(result.name, result.about, result._id);
  userInfo.getUserInfo();
  api.getCards();
});

const popupWithImage = new PopupWithImage(".opencard");
popupWithImage.setEventListeners();
const renderCards = new Section(
  {
    data: api.getCards(),
    render: (item) => {
      const cardElement = createCard(
        item,
        ".template-card",
        userInfo.getUserInfo().id,
        api
      );
      renderCards.addItem(cardElement);
    },
  },
  ".elements"
);

const editPopupWithForm = new PopupWithForm(
  ".modal-edit__inner",
  ".modal-edit",
  () => {
    userInfo.setUserInfo(userNameInput.value, userJobInput.value);
    editPopupWithForm.close();
  }
);
editPopupWithForm.setEventListeners();
const addPopupWithForm = new PopupWithForm(
  ".modal-add__inner",
  ".modal-add",
  (data) => {
    modalAddSubmitBtn.textContent = "Создаю...";
    api
      .postCard(data.inputTitle, data.inputLink)
      .then((res) => {
        const card = createCard(
          res,
          ".template-card",
          userInfo.getUserInfo().id,
          api
        );
        renderCards.addItem(card, "new");
        addPopupWithForm.close();
      })
      .finally(() => (modalAddSubmitBtn.textContent = "Создать"))
      .catch((error) => alert(error));
  }
);

const changeAvatarPopupWithForm = new PopupWithForm(
  ".modal-avatar__inner",
  ".modal-avatar",
  (data) => {
    api.changeAvatar(data.inputAvatarLink);
    userInfo.updateUserAvatar(data.inputAvatarLink);
    changeAvatarPopupWithForm.close();
  }
);
changeAvatarPopupWithForm.setEventListeners();

renderCards.renderItems();
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

avatarIcon.addEventListener("click", () => {
  changeAvatarPopupWithForm.open();
});

// modalAvatarCloseBtn.addEventListener("click", () => {
//   changeAvatarPopupWithForm.close();
// });

export function createCard(data, templateClass, id, api) {
  const newCard = new Card(data, templateClass, id, api, () => {
    popupWithImage.open(data.name, data.link);
  });
  return newCard.generateCard();
}
