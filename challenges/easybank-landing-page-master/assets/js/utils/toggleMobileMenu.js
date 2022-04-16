export default function toggleMobileMenu(){


const btnToggleMenu = document.querySelector(".btn-toggleMenu");
const btnToggleMenuIcon = btnToggleMenu.querySelector("img");
const navigationMenu = document.querySelector(".navigation");

const pathIconOpen = "./assets/images/icon-hamburger.svg";
const pathIconClose = "./assets/images/icon-close.svg";

btnToggleMenu.addEventListener("click", (e) => {
  console.log(btnToggleMenuIcon);

  if (btnToggleMenuIcon.getAttribute("src") !== pathIconClose) {
    btnToggleMenuIcon.src = pathIconClose;
  } else {
    btnToggleMenuIcon.src = pathIconOpen;
  }

  if (navigationMenu.classList.contains("show")) {
    navigationMenu.classList.remove("show");
    btnToggleMenuIcon.classList.remove("show");
    navigationMenu.classList.add("hide");
    return;
  }

  navigationMenu.classList.remove("hide");
  btnToggleMenuIcon.classList.add("show");
  navigationMenu.classList.add("show");
});
}