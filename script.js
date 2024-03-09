const header = document.querySelector(".header-container")
const navbar = document.querySelector(".nav-section")
const hamburber = document.querySelector(".hamburber")

hamburber.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
    header.classList.toggle("active")
})