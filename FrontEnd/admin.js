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

