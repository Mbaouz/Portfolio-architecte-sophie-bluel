import { getWorks } from "./api.js";

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
    <i class="fa-solid fa-trash-can" id="trash" style="color:white"></i>
    <img src="${element.imageUrl}" alt="${element.title}">
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
  
  element.addEventListener("click" , ()=> {

   console.log("ok!!")
 
  });

});




