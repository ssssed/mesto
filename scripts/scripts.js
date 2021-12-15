const editBtn = document.querySelector(".profile__edit");
const modalEditProfile = document.querySelector(".modal-edit");
const modalAddCard = document.querySelector(".modal-add");
const editForm = document.querySelector(".modal-edit__inner");
const closeEditBtn = document.querySelector(".modal-edit__close-btn");
const closeAddBtn = document.querySelector(".modal-add__close-btn");
const addBtn = document.querySelector(".profile__add");
const addInputName = document.getElementById("placename");
const addInputLink = document.getElementById("imglink");
const addForm = document.querySelector(".modal-add__inner");
const template = document.querySelector(".template");
const listCards = document.querySelector(".elements");
const modalOpenCard = document.querySelector(".opencard");
const closeCardBtn = document.querySelector(".opencard__close-btn");
const modalCardImg = document.querySelector(".opencard__img");
const modalCardName = document.querySelector(".opencard__title");
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
const userNameInput = document.getElementById("name");
const profileName = document.querySelector(".profile__name");
const userJobInput = document.getElementById("job");
const profileJob = document.querySelector(".profile__job");

editBtn.addEventListener("click", (evt) => {
  openPopup(modalEditProfile);
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileJob.textContent;
});

addBtn.addEventListener("click", (evt) => {
  openPopup(modalAddCard);
  addInputName.value = "";
  addInputLink.value = "";
});

closeEditBtn.addEventListener("click", (evt) => {
  closePopup(modalEditProfile);
});

closeAddBtn.addEventListener("click", (evt) => {
  closePopup(modalAddCard);
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
}

function closePopup(popup) {
  popup.classList.remove("modal_active");
}

function createCard(title, address) {
  const newItem = template.content.cloneNode(true).querySelector(".card");
  newItem.querySelector(".card__title").textContent = title;
  newItem.querySelector(".card__img").alt = title;
  newItem.querySelector(".card__img").src = address;
  newItem.querySelector(".card__trash").addEventListener("click", (evt) => {
      evt.target.closest(".card").remove();
    });
    newItem.querySelector(".card__like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like_active");
    });
    newItem.querySelector(".card__img").addEventListener("click", (evt) => {
    openCardPopup(title, address);
  });
  return newItem;
}

function renderCard(list, title, address) {
  return list.append(createCard(title, address));
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
  closePopup(modalEditProfile);
}

loadingCards();

closeCardBtn.addEventListener("click", (evt) => {
  closePopup(modalOpenCard);
});