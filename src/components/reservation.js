import '../style.css'


export default function reservation(body) {

    let reservationDiv = document.createElement("div")
    let reservationLogoDiv = document.createElement("div")
    let reservationHeading = document.createElement("h1")
    let reservationForm = document.createElement("form")
    let label1 = document.createElement("label")
    let input1 = document.createElement("input")
    let label2 = document.createElement("label")
    let input2 = document.createElement("input")
    let label3 = document.createElement("label")
    let input3 = document.createElement("input")
    let label4 = document.createElement("label")
    let input4 = document.createElement("input")
    let submit = document.createElement("button")

    body.appendChild(reservationDiv)
    reservationDiv.appendChild(reservationLogoDiv)
    reservationLogoDiv.appendChild(reservationHeading)

    reservationDiv.appendChild(reservationForm)
    reservationForm.appendChild(label1)
    reservationForm.appendChild(input1)
    reservationForm.appendChild(label2)
    reservationForm.appendChild(input2)
    reservationForm.appendChild(label3)
    reservationForm.appendChild(input3)
    reservationForm.appendChild(label4)
    reservationForm.appendChild(input4)
    reservationForm.appendChild(submit)

    reservationLogoDiv.className = "reservationLogoDiv"
    reservationHeading.className = "reservationHeading"
    reservationForm.className = "reservationFormDiv"
    label1.className = "labels"
    label2.className = "labels"
    label3.className = "labels"
    label4.className = "labels" 
    input1.className = "inputs"
    input2.className = "inputs"
    input3.className = "inputs"
    input4.className = "inputs"

    submit.className = "reservation-submit"
    submit.addEventListener("click", (e) => {
        e.preventDefault()
    })


    label1.textContent = "Name"
    label2.textContent = "Contact No."
    label3.textContent = "Appointment date"
    label4.textContent = "No. of people"
    submit.textContent = "Submit"


    reservationHeading.textContent = "Book a reservation"
    console.log("reservation")
}