const anchor = document.querySelector(".profile__edit");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close-btn");
const save = document.querySelector(".modal__save");
const like = document.querySelectorAll(".card__like");

function openEdit() {
    modal.classList.add("modal_active")
    document.body.classList.add("hidden");
}

function closeEdit() {
    modal.classList.remove("modal_active");
    document.body.classList.remove("hidden");
}

function profileRename() {
    let profileName = document.querySelector(".profile__name");
    let profileJob = document.querySelector(".profile__job")
    let newName = document.querySelector(".modal__name").value;
    let newJob = document.querySelector(".modal__job").value;
    profileName.textContent = newName;
    profileJob.textContent = newJob;
    closeEdit();
}

anchor.addEventListener("click", openEdit);
closeBtn.addEventListener("click", closeEdit);
save.addEventListener("click", profileRename);
