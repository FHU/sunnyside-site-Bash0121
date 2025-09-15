const hamburgerButton = document.getElementById("hamburgerButton")
const mobileMenu = document.getElementById("mobileMenu")

hamburgerButton.addEventListener("click", (event)=> {
    event.preventDefault(),
    console.log()

    mobileMenu.classList.toggle("hidden")
})

