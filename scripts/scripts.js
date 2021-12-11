const anchor = document.querySelector(".profile__edit");
const modal = document.querySelector(".modal");
const modalAdd = document.querySelector(".modaladd");
const form = document.querySelector(".modal__inner");
const closeEditBtn = document.querySelector(".modal__close-btn");
const closeAddBtn = document.querySelector(".modaladd__close-btn");
const save = document.querySelector(".modal__save");
const add = document.querySelector(".profile__add");
const addInputName = document.getElementById("placename");
const addInputLink = document.getElementById("imglink");
const addForm = document.querySelector(".modaladd__inner");
const template = document.querySelector(".template");
const list = document.querySelector(".elements");
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
let newName = document.getElementById("name");
let profileName = document.querySelector(".profile__name");
let newJob = document.getElementById("job");
let profileJob = document.querySelector(".profile__job");

anchor.addEventListener("click", (evt) => {
  modal.classList.add("modal_active");
})

add.addEventListener("click", (evt) => {
  modalAdd.classList.add("modal_active");
})

closeEditBtn.addEventListener("click", (evt) => {
  modal.classList.remove("modal_active");
})

closeAddBtn.addEventListener("click", (evt) => {
  modalAdd.classList.remove("modal_active");
})

form.addEventListener("submit", (evt) => {
  modal.classList.remove("modal_active");
})

addForm.addEventListener("submit", (evt) => {
  modalAdd.classList.remove("modal_active");
})

function initialCard() {
    for (let i = 0; i < initialCards.length; i++) {
        const newItem = template.content.cloneNode(true).querySelector(".card");
        newItem.querySelector(".card__title").textContent = initialCards[i].name;
        newItem.querySelector(".card__img").alt = initialCards[i].name;
        newItem.querySelector(".card__img").src = initialCards[i].link;
        newItem.querySelector(".card__trash").addEventListener("click", (evt) => {
          evt.target.parentElement.remove();
        });
        newItem.querySelector(".card__like").addEventListener("click", (evt) => {
          evt.target.classList.toggle("card__like_active");
        });
        list.append(newItem);
    }
}

function profileRename(evt) {
    evt.preventDefault();
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
}

addForm.addEventListener("submit", e => {
    e.preventDefault();

    const newItem = template.content.cloneNode(true).querySelector(".card");
    newItem.querySelector(".card__title").textContent = addInputName.value;
    newItem.querySelector(".card__img").alt = addInputName.value;
    newItem.querySelector(".card__img").src = addInputLink.value;
    newItem.querySelector(".card__trash").addEventListener("click", (evt) => {
      evt.target.parentElement.remove();
    });
    newItem.querySelector(".card__like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like_active");
    });
    list.append(newItem);
})

initialCard();

form.addEventListener("submit", profileRename);
