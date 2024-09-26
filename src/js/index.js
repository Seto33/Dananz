// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css"
// new AirDatepicker('.element')




//Burger

const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
    nav.classList.toggle("nav_active");
    burger.classList.toggle("burger_active");
    navList.classList.toggle("nav__list_active")
navLinks.forEach(link => {
    link.classList.toggle("nav__link_active")
})
    if (burger.classList.contains("burger_active")) {
        // document.body.style.overflow = "hidden";
    }
});


navLinks?.forEach(link => {
    
    link.addEventListener("click", (event) => {

        nav.classList.remove("nav_active");
        burger.classList.remove("burger_active");
        // document.body.style.overflow = "";
    });

});

//Acordion

function accordion (elem) {

    const acordion = document.querySelector(`[data-acordion=${elem}]`);
    const btn = acordion.querySelectorAll(".theme__btn");
    const text = acordion.querySelectorAll(".theme__text");
    acordion.addEventListener("click", function (event){
       if (event.target.closest(".theme__btn")) {
        event.target.closest(".theme__btn").previousElementSibling.classList.toggle("theme__item-collect_active");
        
       };
    });
};
accordion ("product");