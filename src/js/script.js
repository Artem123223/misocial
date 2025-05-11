const dark = document.querySelector(".dark-bgc"),
      burger = document.querySelector(".burger"),
      menu = document.querySelector(".menu"),
      cancel = document.querySelector(".cancel")

burger.addEventListener("click", function() {
  menu.style.left = "0";
  dark.style.display = "block"
})
function cancelBurger() {
  menu.style.left = "-150%";
  dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)