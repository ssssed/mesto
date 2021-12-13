const editBtn = document.querySelector(".profile__edit");
const modalEditProfile = document.querySelector(".modal-edit");
const modalAddCard = document.querySelector(".modal-add");
const form = document.querySelector(".modal__inner");
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

const newName = document.getElementById("name");
const profileName = document.querySelector(".profile__name");
const newJob = document.getElementById("job");
const profileJob = document.querySelector(".profile__job");

editBtn.addEventListener("click", (evt) => {
  openPopup(modalEditProfile);
  newName.value = profileName.textContent;
  newJob.value = profileJob.textContent;
});

addBtn.addEventListener("click", (evt) => {
  openPopup(modalAddCard);
});

closeEditBtn.addEventListener("click", (evt) => {
  closePopup(modalEditProfile);
});

closeAddBtn.addEventListener("click", (evt) => {
  closePopup(modalAddCard);
});

form.addEventListener("submit", (evt) => {
  closePopup(modalEditProfile);
});

addForm.addEventListener("submit", (evt) => {
  closePopup(modalAddCard);
});

function openPopup(popup) {
  popup.classList.add("modal_active");
}

function closePopup(popup) {
  popup.classList.remove("modal_active");
}

function createCard(item, title, address) {
  item.querySelector(".card__title").textContent = title;
  item.querySelector(".card__img").alt = title;
  item.querySelector(".card__img").src = address;
  return item;
}

function renderCard(list, item, title, address) {
  createCard(item, title, address);
  return list.append(item);
}

function openCardPopup(name, link) {
    openPopup(modalOpenCard);
    modalCardImg.src = link;
    modalCardImg.alt = name;
    modalCardName.textContent = name;
}

function loadingCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const newItem = template.content.cloneNode(true).querySelector(".card");
    createCard(newItem, initialCards[i].name, initialCards[i].link);
    newItem.querySelector(".card__trash").addEventListener("click", (evt) => {
      evt.target.closest(".card").remove();
    });
    newItem.querySelector(".card__like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like_active");
    });
    newItem.querySelector(".card__img").addEventListener("click", (evt) => {
      openCardPopup(initialCards[i].name, initialCards[i].link);
    });
    renderCard(listCards, newItem, initialCards[i].name, initialCards[i].link);
  }
}

function profileRename(evt) {
  evt.preventDefault();
  profileName.textContent = newName.value;
  profileJob.textContent = newJob.value;
  closePopup(modalEditProfile);
}

addForm.addEventListener("submit", (e) => {
  
  e.preventDefault();

  const newItem = template.content.cloneNode(true).querySelector(".card");
  createCard(newItem, addInputName.value, addInputLink.value);
  newItem.querySelector(".card__trash").addEventListener("click", (evt) => {
    evt.target.closest(".card").remove();
  });

  newItem.querySelector(".card__like").addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like_active");
  });

  newItem.querySelector(".card__img").addEventListener("click", (evt) => {
    openCardPopup(addInputName.value, newItem.querySelector(".card__img").src)
  });

  renderCard(listCards, newItem, addInputName.value, addInputLink.value);
});

loadingCards();

form.addEventListener("submit", profileRename);

closeCardBtn.addEventListener("click", (evt) => {
  modalOpenCard.classList.remove("modal_active");
});