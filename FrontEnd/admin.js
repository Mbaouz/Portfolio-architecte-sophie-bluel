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

const modal = document.getElementById('modalWrapper')

works.forEach(element => {

    modalWrapper.innerHTML += `
    <div>
    <i class="fa-solid fa-trash-can" style="color:white"></i>
    <img src="${element.imageUrl}" alt="${element.title}">
    </div>
    
    
    `

});

//boutton modifier//

const btModif = document.getElementById('Bt-Modif') 
btModif.addEventListener("click" , function(){

document.getElementById("modal").removeAttribute("style");


});




const xmark = document.getElementById('xmark')
xmark.addEventListener("click", function(){

  document.getElementById("modal").setAttribute("style" , "display:none")

});

const xmodal = document.getElementById('clickOver')
xmodal.addEventListener("click",function(){

document.getElementById("modal").setAttribute("style","display:none")


});

