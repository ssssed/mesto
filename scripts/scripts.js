const anchor = document.querySelector(".profile__edit");
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal__inner");
const closeBtn = document.querySelector(".modal__close-btn");
const save = document.querySelector(".modal__save");
const like = document.querySelectorAll(".card__like");
let newName = document.getElementById("name");
let profileName = document.querySelector(".profile__name");
let newJob = document.getElementById("job");
let profileJob = document.querySelector(".profile__job");


function openEdit() {
    modal.classList.add("modal_active");
    newName.value = profileName.textContent;
    newJob.value = profileJob.textContent;
}

function closeEdit() {
    modal.classList.remove("modal_active");
}

function profileRename(evt) {
    evt.preventDefault();
    profileName.textContent = newName.value;
    profileJob.textContent = newJob.value;
    closeEdit();
}

anchor.addEventListener("click", openEdit);
closeBtn.addEventListener("click", closeEdit);
form.addEventListener("submit", profileRename);
