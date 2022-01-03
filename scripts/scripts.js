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

editBtn.addEventListener("click", (evt) => {
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileJob.textContent;
  resetValidation(modalEditProfile);
  openPopup(modalEditProfile);
});

addBtn.addEventListener("click", (evt) => {
  addForm.reset();
  resetValidation(modalAddCard);
  openPopup(modalAddCard);
});

closeEditBtn.addEventListener("click", () => closePopup(modalEditProfile));

closeAddBtn.addEventListener("click", () => closePopup(modalAddCard));

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
  renderCard(listCards, addInputName.value, addInputLink.value);
  closePopup(modalAddCard);
});

function openPopup(popup) {
  popup.classList.add("modal_active");
  document.addEventListener("keydown", escapeHadler);
}

function closePopup(popup) {
  document.removeEventListener("keydown", escapeHadler);
  popup.classList.remove("modal_active");
}

function createCard(title, address) {
  const newItem = template.content.cloneNode(true).querySelector(".card");
  const newItemTitle = newItem.querySelector(".card__title");
  const newItemImg = newItem.querySelector(".card__img");
  newItemTitle.textContent = title;
  newItemImg.alt = title;
  newItemImg.src = address;
  newItemDelete = newItem.querySelector(".card__trash");
  newItemDelete.addEventListener("click", (evt) => {
    evt.target.closest(".card").remove();
  });
  newItemLike = newItem.querySelector(".card__like");
  newItemLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like_active");
  });
  newItemImg.addEventListener("click", () => openCardPopup(title, address));
  return newItem;
}

function renderCard(list, title, address) {
  return list.prepend(createCard(title, address));
}

function openCardPopup(name, link) {
  openPopup(modalOpenCard);
  modalCardImg.src = link;
  modalCardImg.alt = name;
  modalCardName.textContent = name;
}

function loadingCards() {
  for (let i = 0; i < initialCards.length; i++) {
    renderCard(listCards, initialCards[i].name, initialCards[i].link);
  }
}

function renameProfile() {
  profileName.textContent = userNameInput.value;
  profileJob.textContent = userJobInput.value;
}

loadingCards();

closeCardBtn.addEventListener("click", (evt) => {
  closePopup(modalOpenCard);
});

function escapeHadler(evt) {
  const popup = document.querySelector(".modal_active");
  if (evt.key === "Escape") closePopup(popup);
}
