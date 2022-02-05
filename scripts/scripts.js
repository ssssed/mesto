import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithImage } from "./PopupWithImage.js";
const editBtn = document.querySelector(".profile__edit");
const modalEditProfile = document.querySelector(".modal-edit");
const modalAddCard = document.querySelector(".modal-add");
const editForm = document.querySelector(".modal-edit__inner");
const closeEditBtn = document.querySelector(".modal-edit__close-btn");
const closeAddBtn = document.querySelector(".modal-add__close-btn");
const addBtn = document.querySelector(".profile__add");
const addInputName = document.querySelector(".modal__input_type_title");
const addInputLink = document.querySelector(".modal__input_type_link");
const addForm = document.querySelector(".modal-add__inner");
const template = document.querySelector(".template");
const listCards = document.querySelector(".elements");
const modalOpenCard = document.querySelector(".opencard");
const closeCardBtn = document.querySelector(".opencard__close-btn");
const modalCardImg = document.querySelector(".opencard__img");
const modalCardName = document.querySelector(".opencard__title");
const modals = Array.from(document.querySelectorAll(".modal"));
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const userNameInput = document.querySelector(".modal__input_type_name");
const profileName = document.querySelector(".profile__name");
const userJobInput = document.querySelector(".modal__input_type_job");
const profileJob = document.querySelector(".profile__job");
import { FormValidator } from "./FormValidator.js";
const formLists = document.querySelectorAll(".modal__inner");
const formValidators = {};

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

// const modalAdd = new Popup(".modal-add");
// const modalEdit = new Popup(".modal-edit");
// const openCard = new Popup(".opencard");
// modalAdd.setEventListeners();
// modalEdit.setEventListeners();
// openCard.setEventListeners();

const editPopupWithForm = new PopupWithForm(
  ".modal-edit__inner",
  ".modal-edit",
  (evt) => {
    evt.preventDefault();
    renameProfile();
    editPopupWithForm.close();
  }
);
editPopupWithForm.setEventListeners();
const AddPopupWithForm = new PopupWithForm(
  ".modal-add__inner",
  ".modal-add",
  (evt) => {
    evt.preventDefault();
    renderCards.addItem(
      createCard(addInputName.value, addInputLink.value, ".template-card")
    );
    AddPopupWithForm.close();
  }
);
AddPopupWithForm.setEventListeners();

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
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileJob.textContent;
  formValidators[editForm.name].resetValidation();
  editPopupWithForm.open();
});

addBtn.addEventListener("click", (evt) => {
  formValidators[addForm.name].resetValidation();
  AddPopupWithForm.open();
});

function createCard(title, link, templateClass) {
  const newCard = new Card({ name: title, link: link }, templateClass, () => {
    popupWithImage.open(title, link);
  });
  return newCard.generateCard();
}

function renameProfile() {
  profileName.textContent = userNameInput.value;
  profileJob.textContent = userJobInput.value;
}
