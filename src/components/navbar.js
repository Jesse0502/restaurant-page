import '../style.css'
import { menu as menu1, menuDiv } from '../menu/menu'
import { frontPageDiv } from "../frontPage/frontPage"
import { aboutUsDiv, aboutUs as aboutUS } from '../aboutus/aboutus'

let navbarDiv = document.createElement("div")
let logo = document.createElement("h1")
let toggleMenuDiv = document.createElement("div")
let toggleMenu = document.createElement("button")
let items = document.createElement('ul')
let home = document.createElement('li')
let menu = document.createElement('li')
let aboutUs = document.createElement('li')

document.body.appendChild(navbarDiv)
navbarDiv.appendChild(logo)
navbarDiv.appendChild(toggleMenuDiv)
toggleMenuDiv.appendChild(toggleMenu)
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
    toggleMenu.className = "toggleMenu"

    toggleMenu.innerHTML = '<img src = "../assets/menu-dropdown.png"></img>  ' 
    toggleMenu.addEventListener("click", (e) => {
        e.preventDefault()
        let toggleItems = document.createElement("div")
        toggleMenuDiv.classList.toggle("toggleMenuDiv") 
        // toggleMenuDiv.appendChild(toggleItems)
        // toggleItems.classList.toggle("toggleItems")
        // toggleItems.textContent = "Items"
    })

    logo.addEventListener("click", () => {
        location.reload()
    })

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