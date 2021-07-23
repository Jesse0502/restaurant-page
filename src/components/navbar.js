import '../style.css'
import { menu as menu1, menuDiv } from '../menu/menu'
import { frontPageDiv } from "../frontPage/frontPage"
import { aboutUsDiv, aboutUs as aboutUS } from '../aboutus/aboutus'

let navbarDiv = document.createElement("div")
let logo = document.createElement("h1")
let items = document.createElement('ul')
let home = document.createElement('li')
let menu = document.createElement('li')
let aboutUs = document.createElement('li')

document.body.appendChild(navbarDiv)
navbarDiv.appendChild(logo)
navbarDiv.appendChild(items)
items.appendChild(home)
items.appendChild(menu)
items.appendChild(aboutUs)

export function navbar() {
    let scrollNav = true
    logo.className = "heading"
    navbarDiv.className = "navBarDiv"
    items.className = "navbar-list"
    home.className = "navbar-items"
    menu.className = "navbar-items"
    aboutUs.className = "navbar-items"

    logo.textContent = "The Bar.."
    home.textContent = "Home"
    menu.textContent = "Menu"
    aboutUs.textContent = "About us"
    navbarDiv.classList.add("sticky")

    home.addEventListener("click", () => {
        location.reload()
    }, { once: true })

    menu.addEventListener("click", () => {
        frontPageDiv.remove();
        aboutUsDiv.remove()
        menu1()
    }, { once: true })

    aboutUs.addEventListener("click", () => {
        menuDiv.remove();
        frontPageDiv.remove();
        aboutUS();
    }, { once: true })

    window.addEventListener('scroll', function() {
        if (scrollNav == true) {
            if (window.scrollY == 0) {
                logo.classList.remove("logo-scroll")
                logo.classList.add("heading")
            }
            if (window.scrollY !== 0) {
                logo.classList.add("logo-scroll")
            }
        }
        if (scrollNav == false) {
            logo.classList.add("logo-scroll")
        }
    });


    console.log("Navbar")
}