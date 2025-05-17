const dark = document.querySelector(".dark-bgc"),
    burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu"),
    cancel = document.querySelector(".cancel")
    nav = document.querySelector(".navigation")

burger.addEventListener("click", function() {
  menu.style.left = "10%";
  dark.style.display = "block"
})

if(window.scrollY > 0) {
    nav.classList.add("scrolled")
} else {
    nav.classList.remove("scrolled")
}

function cancelBurger() {
  menu.style.left = "-150%";
  dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)