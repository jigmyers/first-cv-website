"use strict";

const navbar = document.querySelector(".navbar");
const btnBurger = document.querySelector("#btn-burger");
const btnImage = document.querySelector("#burger-img");

btnBurger.addEventListener("click", function () {
  if (navbar.classList.contains("displayCheck")) {
    navbar.classList.remove("displayCheck");
    btnImage.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png";
  } else {
    navbar.classList.add("displayCheck");
    btnImage.src =
      "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close";
  }
});
