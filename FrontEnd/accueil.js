import { getWorks, getCategories } from "./api.js"

const works = await getWorks();
console.log(works);

const categories = await getCategories();
console.log(categories);

const filters = document.getElementById('filters');
const logged = localStorage.getItem('token')

if (logged) {
    const login = document.getElementById("login")
    login.innerText = "admin"
    login.href = "/admin.html"
}

// bouttons filtres
categories.forEach(element => {
    console.log(element)
    filters.innerHTML += `
        <div id="${element.name}">
            <button>${element.name}</button>
        </div>
    `
});

const gallery = document.getElementById('gallery');


works.forEach(element => {

    gallery.innerHTML += `
        <figure> 
        <img src="${element.imageUrl}" alt="${element.title}">
        <figcaption>${element.title}</figcaption>
        </figure>
        `

});


// filtre objets

const BtObjets = document.getElementById('Objets');
BtObjets.addEventListener("click", function () {


    let ObjetsFilter = works.filter(function (objet) {

        return (objet.categoryId == 1);



    });

    gallery.innerHTML = "";
    ObjetsFilter.forEach(element => {
        gallery.innerHTML += `
    <figure> 
    <img src="${element.imageUrl}" alt="${element.title}">
    <figcaption>${element.title}</figcaption>
    </figure>
    `


    })



});

// filtre appartements 

const BtAppart = document.getElementById('Appartements');
BtAppart.addEventListener("click", function () {


    let AppartFilter = works.filter(function (App) {

        return App.categoryId == 2;



    });

    gallery.innerHTML = "";
    AppartFilter.forEach(element => {
        gallery.innerHTML += `
    <figure> 
    <img src="${element.imageUrl}" alt="${element.title}">
    <figcaption>${element.title}</figcaption>
    </figure>
    `


    })

});

// filtre Hotels & restaurants 


const BtHotels = document.getElementById('Hotels & restaurants');
BtHotels.addEventListener("click", function () {


    let HotelsFilter = works.filter(function (Hotels) {

        return Hotels.categoryId == 3;



    });

    gallery.innerHTML = "";
    HotelsFilter.forEach(element => {
        gallery.innerHTML += `
    <figure> 
    <img src="${element.imageUrl}" alt="${element.title}">
    <figcaption>${element.title}</figcaption>
    </figure>
    `


    })



});


// boutton Tout

const BtTout = document.getElementById('Bt-tout')
BtTout.addEventListener("click", function () {
    gallery.innerHTML = "";
    works.forEach(element => {

        gallery.innerHTML += `
        <figure> 
        <img src="${element.imageUrl}" alt="${element.title}">
        <figcaption>${element.title}</figcaption>
        </figure>
        `

    });


});