import "./index.css";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirmDelete } from "../components/PopupWithConfirmDelete.js";
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
  modalDeleteForm,
  deliteModal,
  deleteModalBtn,
  profileImg,
  modalAvatarSubmitBtn,
  modalAvatarForm,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort36",
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

Promise.all([api.getCards(), api.renderProfile()]).then(([cards,userData]) => {
  userInfo.setUserInfo(userData.name, userData.about, userData._id);
  userInfo.updateUserAvatar(userData.avatar);
  renderCards.renderItems(cards);
}).catch((err) => {alert(err)});

const popupWithConfirmDelete = new PopupWithConfirmDelete(
  ".modal-delete",
  (card) => {
    deleteModalBtn.textContent = "Удаление...";
    api
      .deleteCard(card._cardId)
      .then(() => {
        card.remove();
        popupWithConfirmDelete.close();
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        deleteModalBtn.textContent = "Да";
      });
  }
);
popupWithConfirmDelete.setEventListeners();
const popupWithImage = new PopupWithImage(".opencard");
popupWithImage.setEventListeners();
const renderCards = new Section(
  {
    render: (item) => {
      const cardElement = createCard(
        item,
        ".template-card",
        userInfo.getUserInfo().id,
        api,
        popupWithConfirmDelete
      );
      renderCards.addItem(cardElement);
    },
  },
  ".elements"
);

const editPopupWithForm = new PopupWithForm(
  ".modal-edit",
  (res) => {
    modalEditSubmitBtn.textContent = "Сохраняю...";
    api
      .updateProfile(res.inputName, res.inputJob)
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about, res._id);
        editPopupWithForm.close();
      })
      .finally(() => {
        modalEditSubmitBtn.textContent = "Сохранить";
      })
      .catch((err) => {
        alert(err);
      });
  }
);
editPopupWithForm.setEventListeners();
const addPopupWithForm = new PopupWithForm(
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
          api,
          popupWithConfirmDelete
        );
        renderCards.addItem(card, "new");
        addPopupWithForm.close();
      })
      .finally(() => (modalAddSubmitBtn.textContent = "Создать"))
      .catch((error) => alert(error));
  }
);

const changeAvatarPopupWithForm = new PopupWithForm(
  ".modal-avatar",
  (data) => {
    modalAvatarSubmitBtn.textContent = "Сохраняю...";
    api
      .changeAvatar(data.inputAvatarLink)
      .then((res) => {
        userInfo.updateUserAvatar(res.avatar);
        changeAvatarPopupWithForm.close();
      })
      .finally(() => {
        modalAvatarSubmitBtn.textContent = "Сохранить";
      })
      .catch((err) => {
        alert(err);
      });
  }
);
changeAvatarPopupWithForm.setEventListeners();

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
  formValidators[modalAvatarForm.name].resetValidation();
  changeAvatarPopupWithForm.open();
});

export function createCard(data, templateClass, id, api, popupWithConfirm) {
  const newCard = new Card(
    data,
    templateClass,
    id,
    api,
    popupWithConfirm,
    () => {
      popupWithImage.open(data.name, data.link);
    }
  );
  return newCard.generateCard();
}
