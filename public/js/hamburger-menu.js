//Ham burger js
//author : Jessica Iwu

let btnToShowMenu = document.getElementById("menuBar");
let theSideNav = document.getElementById("sideNav");
let theMain = document.getElementById("main");
let scrollH = theMain.scrollHeight;
let scrollW = theMain.scrollWidth;
let floatBtn = document.getElementById("float-button");

let showNav = e => {
  e.preventDefault();
  theSideNav.classList.add("style-to-add-nav");
};

let hideNav = e => {
  theSideNav.classList.add("style-to-remove-nav");
  theSideNav.classList.remove("style-to-add-nav");
};

btnToShowMenu.addEventListener("click", showNav, false);
theMain.addEventListener("click", hideNav, false);

// scrollTo
// let set_dimensions = ev => {
//   if (scrollW <= 768) {
//     floatBtn.style.top = (scrollH - 20) + "px";
//   } else if (scrollW > 768) {
//     floatBtn.style.top = 90 + "vh";
//  }
// };
// set_dimensions();
