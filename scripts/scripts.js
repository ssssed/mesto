const anchor = document.querySelector(".profile__edit");
const modal = document.querySelector(".modal");
const modalAdd = document.querySelector(".modaladd");
const form = document.querySelector(".modal__inner");
const closeEditBtn = document.querySelector(".modal__close-btn");
const closeAddBtn = document.querySelector(".modaladd__close-btn");
const save = document.querySelector(".modal__save");
const like = document.querySelectorAll(".card__like");
const add = document.querySelector(".profile__add");
let newName = document.getElementById("name");
let profileName = document.querySelector(".profile__name");
let newJob = document.getElementById("job");
let profileJob = document.querySelector(".profile__job");


function open(popup) {
    if (popup.target.classList.value === "profile__edit") {
      modal.classList.add("modal_active");
      newName.value = profileName.textContent;
      newJob.value = profileJob.textContent;
    }
    
    if (popup.target.classList.value === "profile__add") {
        modalAdd.classList.add("modal_active");
    }
}

function close(popup) {
    if (popup.target.classList.value === "modal__close-btn") {
      modal.classList.remove("modal_active");
    }
    
    if (popup.target.classList.value === "modaladd__close-btn") {
        modalAdd.classList.remove("modal_active");
    }
}

function openImg(img) {
    
}


function profileRename(evt) {
    evt.preventDefault();
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
    closeEdit();
}

function likeClick(btn) {
    btn.classList.toggle("card__like_active");
}

like.forEach((btn) => {
    btn.addEventListener("click", function() {
        likeClick(btn);
    })
})

anchor.addEventListener("click", open);
add.addEventListener("click", open)
closeEditBtn.addEventListener("click", close);
closeAddBtn.addEventListener("click", close);
form.addEventListener("submit", profileRename);
