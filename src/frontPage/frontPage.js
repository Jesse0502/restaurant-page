import "../style.css"
import { navbar } from '../components/navbar'
import footer from '../components/footer'
import reservation from '../components/reservation'

export let frontPageDiv = document.createElement("div")
let description = document.createElement("div")
let image = document.createElement("img")
let descriptionText = document.createElement("p")
let buffetHeading = document.createElement("div")
let buffetHeadingText = document.createElement("h1")
let buffetContent = document.createElement("div")
let buffetContentHeading = document.createElement("h3")
let sectionText1 = document.createElement("p")
let sectionimg1 = document.createElement("img")
let sectionText2 = document.createElement("p")
let sectionimg2 = document.createElement("img")
let section1 = document.createElement("div")
let section2 = document.createElement("div")

document.body.appendChild(frontPageDiv)
frontPageDiv.appendChild(description)
description.appendChild(descriptionText)
frontPageDiv.appendChild(image)
frontPageDiv.appendChild(buffetHeading)
buffetHeading.appendChild(buffetHeadingText)
frontPageDiv.appendChild(buffetContent)
buffetContent.appendChild(buffetContentHeading)
buffetContent.appendChild(section1)
section1.appendChild(sectionimg1)
section1.appendChild(sectionText1)
buffetContent.appendChild(section2)
section2.appendChild(sectionimg2)
section2.appendChild(sectionText2)


frontPageDiv.classList.add("frontDiv")
image.className = "banner"
description.className = "front-description"
descriptionText.className = "front-description-txt"
buffetHeading.className = "buffetBanner"
buffetContent.className = "buffetDiv"
buffetContentHeading.className = "buffetDivHeading"
section1.className = "Buffetsection1"
section2.className = "Buffetsection2"

sectionimg1.src = "../assets/work.jpg"
sectionimg1.className = "sectionimg1"
sectionText1.className = "sectionText1"

sectionimg2.src = "../assets/front-pic-2.jpg"
sectionimg2.className = "sectionimg2"
sectionText2.className = "sectionText2"

export function frontPage() {
    navbar()
    descriptionText.textContent = "The best restraunt in the north america!"
    image.src = "../assets/restarent.jpg"
    buffetHeading.textContent = "Buffet Now Available!!"
    buffetContentHeading.textContent = "Lorem ipsum!"
    sectionText1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nulla ultrices sociis vitae, scelerisque ut eget congue. A luctus rhoncus condimentum ipsum nec purus sapien proin. "
    sectionText2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nulla ultrices sociis vitae, scelerisque ut eget congue. A luctus rhoncus condimentum ipsum nec purus sapien proin. "

    console.log("front Page")
    reservation(frontPageDiv)
    footer(frontPageDiv)
}