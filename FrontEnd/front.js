const openModal = document.querySelector(".Bt-Modif");

openModal.addEventListener("click" , function (e) {
    console.log("ok!!!!");
    e.preventDefault();
    const modal = document.querySelectorAll(".modal");
    modal.classList.remove("modal-wrapper");

});

// login

