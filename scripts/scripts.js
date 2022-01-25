import { Card } from "./Card.js";
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
  openPopup(modalEditProfile);
});

addBtn.addEventListener("click", (evt) => {
  addForm.reset();
  formValidators[addForm.name].resetValidation();
  openPopup(modalAddCard);
});

closeEditBtn.addEventListener("click", () => closePopup(modalEditProfile));

closeAddBtn.addEventListener("click", () => closePopup(modalAddCard));

function createCard(title, link, templateClass) {
  const newCard = new Card({ name: title, link: link }, templateClass);
  return newCard.generateCard();
}

modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closePopup(modal);
    }
  });
});

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  renameProfile();
  closePopup(modalEditProfile);
});

addForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  listCards.prepend(
    createCard(addInputName.value, addInputLink.value, ".template-card")
  );
  closePopup(modalAddCard);
});

function openPopup(popup) {
  popup.classList.add("modal_active");
  document.addEventListener("keydown", handleEscapeKey);
}

function closePopup(popup) {
  document.removeEventListener("keydown", handleEscapeKey);
  popup.classList.remove("modal_active");
}

function openCardPopup(name, link) {
  openPopup(modalOpenCard);
  modalCardImg.src = link;
  modalCardImg.alt = name;
  modalCardName.textContent = name;
}

function renameProfile() {
  profileName.textContent = userNameInput.value;
  profileJob.textContent = userJobInput.value;
}

closeCardBtn.addEventListener("click", (evt) => {
  closePopup(modalOpenCard);
});

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".modal_active");
    closePopup(popup);
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, ".template-card");
  const cardElement = card.generateCard();

  listCards.prepend(cardElement);
});

export { openCardPopup };
