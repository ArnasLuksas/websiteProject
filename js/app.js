const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav ul");
const main = document.querySelector("main");
const welcome = document.querySelector(".welcome");
const foot = document.querySelector("footer");
const button = document.querySelector("#addToCard");
const popup = document.querySelector('.popup');
const closeImg = document.querySelector('.close')

//show mobile navigation
burger.addEventListener("click", () => {
  showMe();
});
//disable footer
burger.addEventListener("click", () => {
  hideFoot();
});

main.addEventListener("click", () => {
  mobileNav.classList.remove("show-nav");
  burger.classList.remove("change");
});

const hideFoot = () => {
};

const showMe = () => {
  mobileNav.classList.toggle("show-nav");
  burger.classList.toggle("change");
};


button.addEventListener('click',()=>{
  popup.style.display = 'block'
  
})

popup.addEventListener('click',()=>{
  popup.style.display = 'none'

})

