// pode ser:
// um número qualquer       45
// um ano qualquer          1995
// um mês qualquer          06/30   mês/dia

// 3 inputs - um para número/aleatório     um para ano      um para data




const body = document.getElementById("body")
// Crie os elementos
const title = document.createElement("h1")
const subTitle = document.createElement("h2")
const form = document.createElement("form")
const formAno = document.createElement("form")
const formData = document.createElement("form")
const input = document.createElement("input")
const button = document.createElement("button")
const inputAno = document.createElement("input")
const buttonAno = document.createElement("button")
const inputData = document.createElement("input")
const buttonData = document.createElement("button")

const h3 = document.createElement("h3")
const h3Dois = document.createElement("h3")
const h3Tres = document.createElement("h3")

// Adicione conteúdo aos elementos
title.innerHTML = "Fatos Curiosos"
subTitle.innerHTML = "Digite qualquer número e descubra curiosidades ligadas a ele."
input.placeholder = "Digite um número qualquer"
button.innerText = "Buscar"
inputAno.placeholder = "Digite um ano qualquer"
buttonAno.innerText = "Buscar"
inputData.placeholder = "Digite uma data qualquer"
buttonData.innerText = "Buscar"

h3.innerText = "Digite um número no campo abaixo"
h3Dois.innerText = "Digite um ano no campo abaixo"
h3Tres.innerText = "Digite uma data no campo abaixo (mês/dia) com 4 dígitos"

// Adicione atributos aos elementos
title.classList.add("h1-title")
subTitle.classList.add("h1-subTitle")
button.classList.add("button1")
form.classList.add("form")
formAno.classList.add("form")
formData.classList.add("form")
h3.classList.add("h3")
h3Dois.classList.add("h3")
h3Tres.classList.add("h3")

// Adicione os elementos criados ao documento HTML
body.appendChild(title)
body.appendChild(subTitle)
body.appendChild(form)
body.appendChild(formAno)
body.appendChild(formData)
form.appendChild(h3)
form.appendChild(input)
form.appendChild(button)
formAno.appendChild(h3Dois)
formAno.appendChild(inputAno)
formAno.appendChild(buttonAno)
formData.appendChild(h3Tres)
formData.appendChild(inputData)
formData.appendChild(buttonData)


// Crie um campo para o resultado
const p = document.createElement("p")

const parag = document.createElement("p")
async function fetchNumber(evt){
    evt.preventDefault()
    const input = form[0]
    const inputValue = input.value
    const response = await fetch(`http://numbersapi.com/${inputValue}/trivia?json`)
     const data = response.json()  
    .then((res) => res)
    .then((data) => {
        // console.log(data)
        p.innerText = `${data.text}`
        form.appendChild(p)
    })
}
form.addEventListener("submit", fetchNumber)


p.classList.add("result")
async function fetchYear(evt){
    evt.preventDefault()
    const input = formAno[0]
    const inputValue = input.value
    const response = await fetch(`http://numbersapi.com/${inputValue}/year?json`)
    const data = response.json()
    .then((res) => res)
    .then((data) => {
        p.innerText = `${data.text}`
        formAno.appendChild(p)
    })
}
formAno.addEventListener("submit", fetchYear)



async function fetchDate(evt){
    evt.preventDefault()
    const input = formData[0]
    const inputValue = input.value
    const response = await fetch(`http://numbersapi.com/${inputValue}/date?json`)
    const data = response.json()
    .then((res) => res)
    .then((data) => {
        p.innerText = `${data.text}`
        formData.appendChild(p)
    })
}

formData.addEventListener("submit", fetchDate)



