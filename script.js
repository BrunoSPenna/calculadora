const display = document.getElementById('display')
display.value = "0"
let primeiroNumero = ""
let segundoNumero = ""


const button3 = document.getElementById('btn_3')
button3.addEventListener('click', clicouButton3)

function clicouButton3() {
    let displayText = display.value
    if(displayText === "0" || primeiroNumero !== "") {
        display.value = "3"
    } else {
        display.value = displayText + "3"
    }
       
}

const button9 = document.getElementById('btn_9')
button9.addEventListener('click', clicouButton9)

function clicouButton9() {
    let displayText = display.value
    if(displayText === "0" || primeiroNumero !== "") {
        display.value = "9"
    } else {
        display.value = displayText + "9"
    }

}
const buttonSoma = document.getElementById('btn_+')
buttonSoma.addEventListener('click', clicouButtonSoma)

function clicouButtonSoma() {
   primeiroNumero = display.value
   buttonSoma.style.backgroundColor = "grey"
}

const buttonIgual = document.getElementById('btn_=')
buttonIgual.addEventListener('click', clicouButtonIgual)

function clicouButtonIgual() {
    segundoNumero = display.value
    let resultado = parseInt(primeiroNumero) + parseInt(segundoNumero)
    display.value = resultado   
}