export function cards(body) {
    let cardsDiv = document.createElement("div")
    let cardsMain1 = document.createElement("div")
    let cardsText1 = document.createElement("h2")
    let cardsMain2 = document.createElement("div")
    let cardsText2 = document.createElement("h2")
    let cardsMain3 = document.createElement("div")
    let cardsText3 = document.createElement("h2")
    let cardsMain4 = document.createElement("div")
    let cardsText4 = document.createElement("h2")
    let cardsMain5 = document.createElement("div")
    let cardsText5 = document.createElement("h2")
    let cardsMain6 = document.createElement("div")
    let cardsText6 = document.createElement("h2")
    body.appendChild(cardsDiv)
    cardsDiv.appendChild(cardsMain1)
    cardsMain1.appendChild(cardsText1)

    cardsDiv.appendChild(cardsMain2)
    cardsMain2.appendChild(cardsText2)

    cardsDiv.appendChild(cardsMain3)
    cardsMain3.appendChild(cardsText3)

    cardsDiv.appendChild(cardsMain4)
    cardsMain4.appendChild(cardsText4)

    cardsDiv.appendChild(cardsMain5)
    cardsMain5.appendChild(cardsText5)

    cardsDiv.appendChild(cardsMain6)
    cardsMain6.appendChild(cardsText6)

    cardsDiv.className = "cardsDiv"

    cardsMain1.className = "cardsMain1"
    cardsText1.textContent = "Item 1"
    cardsText1.className = "cardsText"

    cardsMain2.className = "cardsMain2"
    cardsText2.textContent = "Item 2"
    cardsText2.className = "cardsText"

    cardsMain3.className = "cardsMain3"
    cardsText3.textContent = "Item 3"
    cardsText3.className = "cardsText"

    cardsMain4.className = "cardsMain4"
    cardsText4.textContent = "Item 4"
    cardsText4.className = "cardsText"

    cardsMain5.className = "cardsMain5"
    cardsText5.textContent = "Item 5"
    cardsText5.className = "cardsText"

    cardsMain6.className = "cardsMain6"
    cardsText6.textContent = "Item 6"
    cardsText6.className = "cardsText"

    console.log("cards")
}