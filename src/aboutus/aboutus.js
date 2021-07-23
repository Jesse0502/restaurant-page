import footer from "../components/footer"
import { navbar } from "../components/navbar"

export let aboutUsDiv = document.createElement("div")
let subText = document.createElement("h2")
let avatar = document.createElement("img")
let description = document.createElement("p")

export function aboutUs() {
    document.body.appendChild(aboutUsDiv)
    aboutUsDiv.appendChild(avatar)
    aboutUsDiv.appendChild(subText)
    aboutUsDiv.appendChild(description)

    subText.className = "subText"
    avatar.className = "aboutUsAvatar"
    description.className = "aboutUsDescription"

    subText.textContent = "Lorem ipsum!"
    avatar.src = "../assets/manager.jpg"
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor integer id sapien, placerat leo tempor tristique posuere interdum. Lacinia etiam nulla et accumsan, vel ut gravida vulputate imperdiet. Enim, pulvinar id sociis tempor nunc ultricies feugiat dignissim venenatis. Varius eleifend leo auctor quam molestie tortor gravida pharetra. Nullam nullam ac urna sodales semper id sagittis lectus. Nullam faucibus eget quis ultricies ornare. Malesuada pretium sagittis amet, sit posuere."

    console.log("about us")
    footer(aboutUsDiv)
}