import { getWorks , deleteWork , addWork } from "./api.js";

const gallery = document.getElementById('gallery');
const works = await getWorks();
    
  works.forEach(element => {

        gallery.innerHTML += `
        <figure> 
        <img src="${element.imageUrl}" alt="${element.title}">
        <figcaption>${element.title}</figcaption>
        </figure>
        `
    
});

const modal = document.getElementById('modal')

works.forEach(element => {

    modal.innerHTML += `
    <div>
    <i class="fa-solid fa-trash-can" id="trash" data-id="${element.id}" ></i>
    <img src="${element.imageUrl}" alt="${element.title} data-id="${element.id}">
    </div>
    
    
    `

});

//boutton modifier//

const btModif = document.getElementById('Bt-Modif') 
btModif.addEventListener("click" , function(){

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

//suprimer photo//

 document.querySelectorAll("#trash").forEach(element => { 
  
  element.addEventListener("click" , (event)=> {

    deleteWork(event.target.dataset.id);
    
    

    // Regenerer l'affichage des projets sur la page admin et sur sa modal
 
  });


});





// Pour le formulaire d'ajout, faire un new FormData avec les valeurs du formulaire
// https://developer.mozilla.org/fr/docs/Web/API/FormData/FormData


// Apercu image //
const inputImg = document.getElementById('input-file');
var uploadImg = "";

inputImg.addEventListener("change",function(){

const reader = new FileReader();
reader.addEventListener("load" , () => {

 uploadImg = reader.result;

 

  document.getElementById('displayImg').style.backgroundImage=`url (${uploadImg})`;
} );

reader.readAsDataURL(this.files[0]);

} );







// envoi du formulaire // 


const myForm = document.querySelector('form')
myForm.addEventListener("submit",async function(e){
e.preventDefault();
const formData = new FormData(myForm) ;


    const imgUrl = document.getElementById("input-file").getAttribute('src');
    const title = document.getElementById("title").value;
    const category = document.getElementById("category");
    const categoryValue = category.options[category.selectedIndex].value;

    formData.append('image', imgUrl);
    formData.append('title', title);
    formData.append('category', categoryValue);

const result = await addWork(formData);
console.log(result)

});

category.addEventListener("change",function(){

  const category = document.getElementById("category");
  const categoryValue = category.options[category.selectedIndex].value;
  

  console.log(category.options[this.selectedIndex].label);

})