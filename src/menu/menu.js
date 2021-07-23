import { cards } from "./cards"
import reservation from "../components/reservation"
import footer from "../components/footer"

export let menuDiv = document.createElement("div")

export function menu() {
    document.body.appendChild(menuDiv)
    menuDiv.classList.add("menuDiv")
    console.log("menu")
    cards(menuDiv)
    reservation(menuDiv)
    footer(menuDiv)
}