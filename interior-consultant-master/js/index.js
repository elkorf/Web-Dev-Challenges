var toggle = document.getElementById("toggle-btn");
var menu = document.getElementById("nav-links");
function myFunction() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    toggle.classList.remove("fa-times");
  } else {
    toggle.classList.add("fa-times");
    menu.style.display = "flex";
  }
}
