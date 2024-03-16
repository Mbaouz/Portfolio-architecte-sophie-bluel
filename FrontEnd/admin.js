import { getWorks, deleteWork, addWork } from "./api.js";

const gallery = document.getElementById('gallery');
const modal = document.querySelector('.grid')
const logout = document.getElementById('logout')
const logged = localStorage.getItem('token')

if (!logged) {
  window.location.assign("accueil.html");
}
logout.addEventListener("click", () => {
  localStorage.removeItem("token")
  window.location.assign("accueil.html");
})

async function updateGallery() {

  gallery.innerHTML = ''
  modal.innerHTML = ''
  const works = await getWorks();

  works.forEach(element => {

    gallery.innerHTML += `
    <figure> 
      <img src="${element.imageUrl}" alt="${element.title}">
      <figcaption>${element.title}</figcaption>
    </figure>
  `

    modal.innerHTML += `
    <div>
      <i class="fa-solid fa-trash-can trash" data-id="${element.id}" ></i>
      <img src="${element.imageUrl}" alt="${element.title} data-id="${element.id}">
    </div>
  `

    //suprimer photo//
    document.querySelectorAll(".trash").forEach(element => {

      element.addEventListener("click", async (event) => {

        await deleteWork(event.target.dataset.id);
        // Regenerer l'affichage des projets sur la page admin et sur sa modal
        await updateGallery()
      });
    });
  });
}

await updateGallery()

//boutton modifier//

const btModif = document.getElementById('Bt-Modif')
btModif.addEventListener("click", function () {

  document.getElementById("modalWrapper").removeAttribute("style");


});

const iconM = document.getElementById('icon-modif')
iconM.addEventListener("click", function () {

  document.getElementById("modalWrapper").removeAttribute("style");
});



//bouton fermer modal//
const xmark = document.getElementById('xmark')
xmark.addEventListener("click", function () {

  document.getElementById("modalWrapper").setAttribute("style", "display:none")

});

// click out modal //

const xmodal = document.getElementById('clickOver')
xmodal.addEventListener("click", function () {

  document.getElementById("modalWrapper").setAttribute("style", "display:none")


});

//boutton ajouter //

const btAjout = document.getElementById('btAjout')
btAjout.addEventListener("click", function () {

  document.getElementById("modal2").removeAttribute("style")
  document.getElementById("modalWrapper").setAttribute("style", "display:none")



});

//fermer modal2 //

const xmark2 = document.getElementById('xmark2')
xmark2.addEventListener("click", function () {

  document.getElementById("modal2").setAttribute("style", "display:none")


});

const xmodal2 = document.getElementById('clickOver2')
xmodal2.addEventListener("click", function () {

  document.getElementById("modal2").setAttribute("style", "display:none")


});

// fleche retour //

const arrow = document.getElementById('arrow')
arrow.addEventListener("click", function () {

  document.getElementById("modal2").setAttribute("style", "display:none")
  document.getElementById("modalWrapper").removeAttribute("style")


});



// Apercu image //


const inputImg = document.getElementById('input-file');


inputImg.addEventListener("change", function (event) {
  let imageUrl = URL.createObjectURL(event.target.files[0])
  let preview = document.getElementById('preview');
  preview.classList.remove('hidden')
  preview.querySelector('img').src = imageUrl;
});





//  formulaire d'envoi // 


const myForm = document.querySelector('form')
let file = document.getElementById("input-file")

let title = document.getElementById("title");

let category = document.getElementById("category")

// Verification taille fichier input // 
file.addEventListener('change ', () =>
  checkSize(file)
);
function checkSize(file) {
  const fileValue = file.files[0]
  const limit = 4000;
  const size = fileValue.size / 1024;
  if (size > limit ) {
    file.value = ''
    checkForm()
    return false
  }

  return true
};
// verification format fichier
function checkExtensions(file) {
  const fileValue = file.files[0]
  if (!['image/jpeg', 'image/png'].includes(fileValue.type)) {
    file.value=''
    checkForm()
    return false
  }

  return true
}

// Envoi formulaire 

myForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  if (!checkForm()) {
    alert("Merci de remplir tous les champs!")
    
    return
  }


  if (!checkExtensions(file)){
    alert("Format du fichier inccorect!")
    resetPreview()
    return
  }

  
  if (!checkSize(file)) {
    alert("Taille de l'image est limité à 4 Mo maximum ! ")
   
    resetPreview();
    
    return 
     
    
  }

  

  const formData = new FormData(myForm);
  await addWork(formData);

  await updateGallery()

  file.value = ''
  title.value = ''
  category.value = ''
  document.getElementById('valider').style.backgroundColor = ` #CBD6DC `

  resetPreview()
});

function resetPreview() {
  let preview = document.getElementById('preview');
  
  preview.classList.add('hidden') 
   

}


// Verification formulaire
function checkForm() {


  if (file.value != '' && title.value != '' && category.value != '' ) {
    document.getElementById('valider').style.backgroundColor = `  #1D6154 `

    return true;
  }

  document.getElementById('valider').style.backgroundColor = ` #CBD6DC `
  return false
}




file.addEventListener("change", checkForm)
title.addEventListener("change", checkForm)
category.addEventListener("change", checkForm)