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
   operacaoSelecionada = "+"
   setBtnSomaStateToSelectedStyle(true)
   saveDisplayToPrimeiroNumero()
}

const buttonSubtracao = document.getElementById('btn_-')
buttonSubtracao.addEventListener('click', clicouButtonSubtracao)

function clicouButtonSubtracao( ) {
    operacaoSelecionada = "-"
    setBtnSubtracaoStateToSelectedStyle(true)
    saveDisplayToPrimeiroNumero()
    
}

const buttonMultiplicacao = document.getElementById('btn_x')
buttonMultiplicacao.addEventListener('click', clicouButtonMultiplicacao)

function clicouButtonMultiplicacao() {
    operacaoSelecionada = "x"
    setBtnMultiplicacaoStateToSelectedStyle(true)
    saveDisplayToPrimeiroNumero()
}

const buttonDivisao = document.getElementById('btn_/')
buttonDivisao.addEventListener('click', clicouButtonDivisao)

function clicouButtonDivisao() {
    operacaoSelecionada = "/"
    setBtnDivisaoStateToSelectedStyle(true)
    saveDisplayToPrimeiroNumero()
}

function saveDisplayToPrimeiroNumero() {
    primeiroNumero = display.value
    display.value = ""
    display.placeholder = primeiroNumero
}

const buttonIgual = document.getElementById('btn_=')
buttonIgual.addEventListener('click', clicouButtonIgual)

function clicouButtonIgual() {

    if(operacaoSelecionada === "") {
        window.alert("selecione um aoperação váida")
        return
    }

    segundoNumero = display.value

    if(operacaoSelecionada === "+"){
        let resultado = parseInt(primeiroNumero) + parseInt(segundoNumero)
        primeiroNumero = resultado
         
    }else if( operacaoSelecionada === "-") {
        let resultado = parseInt(primeiroNumero) - parseInt(segundoNumero)
        primeiroNumero = resultado
    }else if( operacaoSelecionada === "x") {
        let resultado = parseInt(primeiroNumero) * parseInt(segundoNumero)
        primeiroNumero = resultado
    } else if(operacaoSelecionada === "/") {
        const divisor = parseInt(segundoNumero)
        if (divisor !== 0) {
            let resultado = parseInt(primeiroNumero) / parseInt(segundoNumero)
            primeiroNumero = resultado
        } else {
            window.alert("Nao é possivel dividir por 0")
            clicouButtonClear()
            return
        }
        
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
    setBtnMultiplicacaoStateToSelectedStyle(false)
    setBtnDivisaoStateToSelectedStyle(false)


}

function setBtnSomaStateToSelectedStyle(selected) {
    setBtnStateTOSelected(buttonSoma, selected)
}
function setBtnSubtracaoStateToSelectedStyle(selected) {
    setBtnStateTOSelected(buttonSubtracao, selected)
}
function setBtnMultiplicacaoStateToSelectedStyle(selected) {
    setBtnStateTOSelected(buttonMultiplicacao, selected)
}
function setBtnDivisaoStateToSelectedStyle(selected) {
    setBtnStateTOSelected(buttonDivisao, selected)
}

function setBtnStateTOSelected(btn, selected) {
    btn.classList.remove(selected ? "btnNotSelected" : "btnSelected")
    btn.classList.add(selected ? "btnSelected" : "btnNotSelected")
}