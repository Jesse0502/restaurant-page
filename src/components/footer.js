export default function footer(body) {
    let footerDiv = document.createElement("div")
    let footerText = document.createElement("h1")

    body.appendChild(footerDiv)
    footerDiv.appendChild(footerText)

    footerDiv.className = "footerDiv"
    footerText.className = "footerText"
    footerText.textContent = "IMAGINE FOOTER"
    console.log("Footer log")
}