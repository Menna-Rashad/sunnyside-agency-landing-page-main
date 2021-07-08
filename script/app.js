/* TODO: hover effect to change img src to white svg*/
/*menu button*/

const menu = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

menu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
