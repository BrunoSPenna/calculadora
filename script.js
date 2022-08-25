const display = document.getElementById('display')
let primeiroNumero = ""
let segundoNumero = ""
let operacaoSelecionada = ""


function bindNumeros() {
    const numbersContainer = document.getElementById('numeros')  
    for(const btn of numbersContainer.children) {
        btn.addEventListener('click', clickNumberBtnEvent)
    }
}

function clickNumberBtnEvent(event) {
    const btnText = event.target.innerText
    clickAtBtn(btnText)
}

function clickAtBtn(number) {
    let displayText = display.value
    display.value = displayText + number
}
    

bindNumeros()

const buttonSoma = document.getElementById('btn_+')
buttonSoma.addEventListener('click', clicouButtonSoma)

function clicouButtonSoma() {
   primeiroNumero = display.value
   operacaoSelecionada = "+"
   setBtnSomaStateToSelectedStyle(true)
   
   display.value = ""
   display.placeholder = primeiroNumero
}

const buttonSubtracao = document.getElementById('btn_-')
buttonSubtracao.addEventListener('click', clicouButtonSubtracao)

function clicouButtonSubtracao( ) {
    primeiroNumero = display.value
    operacaoSelecionada = "-"
    setBtnSubtracaoStateToSelectedStyle(true)
    display.value = ""
    display.placeholder = primeiroNumero
    
}

const buttonMultiplicacao = document.getElementById('btn_x')
buttonMultiplicacao.addEventListener('click', clicouButtonMultiplicacao)

function clicouButtonMultiplicacao() {
    window.alert("multiplicaçao")
}

const buttonDivisao = document.getElementById('btn_/')
buttonDivisao.addEventListener('click', clicouButtonDivisao)

function clicouButtonDivisao() {
    window.alert("divisão")

}


const buttonIgual = document.getElementById('btn_=')
buttonIgual.addEventListener('click', clicouButtonIgual)

function clicouButtonIgual() {
    segundoNumero = display.value
    if(operacaoSelecionada === "+"){
        let resultado = parseInt(primeiroNumero) + parseInt(segundoNumero)
        primeiroNumero = resultado
         
    }else if( operacaoSelecionada === "-") {
        let resultado = parseInt(primeiroNumero) - parseInt(segundoNumero)
        primeiroNumero = resultado
    }
    

    
    display.value = ""
    display.placeholder = primeiroNumero
    segundoNumero = ""
}

const buttonClear = document.getElementById('btn_c')
buttonClear.addEventListener('click', clicouButtonClear)

function clicouButtonClear() {
    operacaoSelecionada =""
    primeiroNumero = ""
    segundoNumero = ""
    display.value = ""
    display.placeholder = "0"

    setBtnSomaStateToSelectedStyle(false)
    setBtnSubtracaoStateToSelectedStyle(false)

}

function setBtnSomaStateToSelectedStyle(selected) {
    buttonSoma.classList.remove(selected ? "btnNotSelected" : "btnSelected")
    buttonSoma.classList.add(selected ? "btnSelected" : "btnNotSelected")
}
function setBtnSubtracaoStateToSelectedStyle(selected) {
    buttonSubtracao.classList.remove(selected ? "btnNotSelected" : "btnSelected")
    buttonSubtracao.classList.add(selected ? "btnSelected" : "btnNotSelected")
}