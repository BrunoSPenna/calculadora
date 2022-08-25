const display = document.getElementById('display')
const buttonIgual = document.getElementById('btn_=')
const buttonClear = document.getElementById('btn_c')

let primeiroNumero;
let operacaoSelecionada;

function setInitialState() {
    operacaoSelecionada =""
    primeiroNumero = ""
    display.value = ""
    display.placeholder = "0"
}

function bindElements() {
    bindHelperButtons()
    bindNumeros()
    bindOperacoes()
}

function bindHelperButtons() {
    buttonIgual.addEventListener('click', clicouButtonIgual)
    buttonClear.addEventListener('click', clicouButtonClear)
}


function bindOperacoes() {
    const operacoesContainer = document.getElementById('operacoes')  
    for(const btnOperacao of operacoesContainer.children) {
        btnOperacao.addEventListener('click', clickOperacaoBtnEvent)
    }
}

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
    

function clickOperacaoBtnEvent(event) {
    operacaoSelecionada = event.target.innerText
    setBtnStateTOSelected(event.target, true)
    saveDisplayToPrimeiroNumero()
}


function saveDisplayToPrimeiroNumero() {
    primeiroNumero = display.value
    display.value = ""
    display.placeholder = primeiroNumero
}

// Assume que num2 nao vai ser igual a 0
// quando op for do tipo divisao
// Fluxo ja tratado na funcao que chama 
// assume os 4 tipos de operacao basicas +, -, /, *
function calculateResult(num1, num2, op) {

    if(op === "+"){
        return num1 + num2 
    }else if( op === "-") {
        return num1 - num2 
    }else if( op === "x") {
        return num1 * num2
    } else {
        return num1 / num2
    }

}

function clicouButtonIgual() {

    if(operacaoSelecionada === "") {
        window.alert("selecione um aoperação váida")
        return
    }


    const num1 = parseInt(primeiroNumero)
    const num2 = parseInt(display.value)

    if (num2 === 0) {
        window.alert("Nao é possivel dividir por 0")
        clicouButtonClear()
        return
    }

    runOperation(num1, num2, operacaoSelecionada)
}

function runOperation(num1, num2, op) {
    const resultado = calculateResult(num1, num2, op)
    primeiroNumero = resultado
    display.value = ""
    display.placeholder = primeiroNumero
}


function clicouButtonClear() {
    setInitialState()
    resetBtnsOperacoesState()
}

function resetBtnsOperacoesState() {
    const operacoesContainer = document.getElementById('operacoes')  
    for(const btnOperacao of operacoesContainer.children) {
        setBtnStateTOSelected(btnOperacao, false)
    }
}


function setBtnStateTOSelected(btn, selected) {
    btn.classList.remove(selected ? "btnNotSelected" : "btnSelected")
    btn.classList.add(selected ? "btnSelected" : "btnNotSelected")
}


window.onload = () => {
    setInitialState()
    bindElements()
}