import { getWorks , deleteWork , addWork } from "./api.js";

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal')
const works = await getWorks();

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
btModif.addEventListener("click" , function(){

document.getElementById("modalWrapper").removeAttribute("style");


});

const iconM = document.getElementById('icon-modif')
iconM.addEventListener("click" , function(){

  document.getElementById("modalWrapper").removeAttribute("style");
});



//bouton fermer modal//
const xmark = document.getElementById('xmark')
xmark.addEventListener("click", function(){

  document.getElementById("modalWrapper").setAttribute("style" , "display:none")

});

// click out modal //

const xmodal = document.getElementById('clickOver')
xmodal.addEventListener("click",function(){

document.getElementById("modalWrapper").setAttribute("style","display:none")


});

//boutton ajouter //

const btAjout = document.getElementById('btAjout')
btAjout.addEventListener("click",function(){

document.getElementById("modal2").removeAttribute("style")
document.getElementById("modalWrapper").setAttribute("style","display:none")



});

//fermer modal2 //

const xmark2 = document.getElementById('xmark2')
xmark2.addEventListener("click", function(){

  document.getElementById("modal2").setAttribute("style","display:none")


});

const xmodal2 = document.getElementById('clickOver2')
xmodal2.addEventListener("click",function(){

document.getElementById("modal2").setAttribute("style","display:none")


});

// fleche retour //

const arrow =document.getElementById('arrow')
arrow.addEventListener("click",function(){

  document.getElementById("modal2").setAttribute("style","display:none")
  document.getElementById("modalWrapper").removeAttribute("style")


});



// Apercu image //


const inputImg = document.getElementById('input-file');


inputImg.addEventListener("change", function (event) {
  let imageUrl = URL.createObjectURL(event.target.files[0])
  console.log(imageUrl)
  let preview = document.getElementById('preview');
  preview.classList.remove('hidden')
  preview.querySelector('img').src = imageUrl;

  
});





// envoi du formulaire // 


const myForm = document.querySelector('form')
let file = document.getElementById("input-file")

let title = document.getElementById("title");

let category = document.getElementById("category")
myForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  
  if (checkForm()) {
    const formData = new FormData(myForm);
    await addWork(formData);
    
    await updateGallery()

    file.value = ''
    title.value = ''
    category.value = ''
    document.getElementById('valider').style.backgroundColor= ` #CBD6DC `

    let preview = document.getElementById('preview');
    preview.classList.add('hidden')
    
  };

  
});

function checkForm() {
  console.log(file.value);
  console.log(title.value);
  console.log(category.value);
  
  if (file.value != '' && title.value != '' && category.value != '') {
    console.log("ok")
    

    document.getElementById('valider').style.backgroundColor= `  #1D6154 `
    // Passer le bouton en vert ici
    return true;

    
  }
  
  document.getElementById('valider').style.backgroundColor= ` #CBD6DC `
  
  return false
}




file.addEventListener("change", checkForm)
title.addEventListener("change", checkForm)
category.addEventListener("change", checkForm)