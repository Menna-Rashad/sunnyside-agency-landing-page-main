/*hover effect on social icons*/
const facebook = document.getElementById("facebook");
const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");
const pinterest = document.getElementById("pinterest");

facebook.addEventListener("mouseover", (e) => {
  facebook.firstElementChild.firstElementChild.src =
    "..//images/white social svg/icon-facebook.svg";
});
/* TODO: hover effect to change img src to white svg*/
/* TODO: menu displayed none at desktop view*/

/*menu button*/

const menu = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

menu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
