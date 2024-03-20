const productLink = document.querySelector(".dropdown-product");
const companyLink = document.querySelector(".dropdown-company");
const connectLink = document.querySelector(".dropdown-connect");

const connectMenu = document.querySelector(".connect");
const productMenu = document.querySelector(".product");
const companyMenu = document.querySelector(".company");

const hamburger = document.querySelector(".icon");
const img = document.querySelector(".image");
const mobileMenu= document.querySelector(".mobile-menu");

const mobileProductLink = document.querySelector(".mobile-dropdown-product");
const mobileCompanyLink = document.querySelector(".mobile-dropdown-company");
const mobileConnectLink = document.querySelector(".mobile-dropdown-connect");

const mobileConnectMenu = document.querySelector(".mobile-connect");
const mobileProductMenu = document.querySelector(".mobile-product");
const mobileCompanyMenu = document.querySelector(".mobile-company");


productLink.addEventListener("click",function(e){
    productMenu.classList.toggle("show");  
    connectMenu.classList.remove("show");
    companyMenu.classList.remove("show");
});

companyLink.addEventListener("click",function(e){
    companyMenu.classList.toggle("show");
    productMenu.classList.remove("show");
    connectMenu.classList.remove("show");
});

connectLink.addEventListener("click",function(e){
    connectMenu.classList.toggle("show");
    productMenu.classList.remove("show");
    companyMenu.classList.remove("show");

});


hamburger.addEventListener("click", function(){
    mobileMenu.classList.toggle("open");
    img.src ="images/icon-close.svg";
    if (!(mobileMenu.classList.contains("open"))){
        img.src = "images/icon-hamburger.svg";
        mobileConnectMenu.classList.remove("view");
        mobileCompanyMenu.classList.remove("view");
        mobileProductMenu.classList.remove("view");
    }
});

mobileProductLink.addEventListener("click",function(e){
    mobileProductMenu.classList.toggle("view");  
    mobileConnectMenu.classList.remove("view");
    mobileCompanyMenu.classList.remove("view");
});

mobileCompanyLink.addEventListener("click",function(e){
    mobileCompanyMenu.classList.toggle("view");
    mobileProductMenu.classList.remove("view");
    mobileConnectMenu.classList.remove("view");
});

mobileConnectLink.addEventListener("click",function(e){
    mobileConnectMenu.classList.toggle("view");
    mobileProductMenu.classList.remove("view");
    mobileCompanyMenu.classList.remove("view");

});


// document.body.addEventListener("click",function(e){
//     if(e.target.className !== "dropdown-product")
//         productMenu.classList.remove("show");
//     else if(e.target.className !== "dropdown-connect")
//         connectMenu.classList.remove("show");
//     else if(e.target.className !== "dropdown-company")
//         companyMenu.classList.remove("show");
//     else console.log(e);
// });
