const anchor = document.querySelector(".profile__edit");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close-btn");
const save = document.querySelector(".modal__save");
const like = document.querySelectorAll(".card__like");

function openEdit() {
    modal.classList.add("modal_active")
}

function closeEdit() {
    modal.classList.remove("modal_active");
}

function profileRename() {
    let newName = document.getElementById("name").value;
    let profileName = document.querySelector(".profile__name");
    let newJob = document.getElementById("job").value;
    let profileJob = document.querySelector(".profile__job");
    profileName.textContent = newName;
    profileJob.textContent = newJob;
    closeEdit();
}

anchor.addEventListener("click", openEdit);
closeBtn.addEventListener("click", closeEdit);
save.addEventListener("click", profileRename);
