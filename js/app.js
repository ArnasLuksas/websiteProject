const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav ul");
const main = document.querySelector("main");
const welcome = document.querySelector(".welcome");
const foot = document.querySelector("footer");

burger.addEventListener("click", () => {
  showMe();
});


burger.addEventListener("click", () => {
  hideFoot();
});


const hideFoot = () => {
foot.classList.toggle('hide-foot');
};


const showMe = () => {
  mobileNav.classList.toggle("show-nav");

  burger.classList.toggle("change");
};

main.addEventListener("click", () => {
  mobileNav.classList.remove("show-nav");
  burger.classList.remove("change");
});
