const display = document.getElementById('display')
let primeiroNumero;
let segundoNumero;
let operacaoSelecionada;




setInitialState()
bindNumeros()
bindOperacoes()



function setInitialState() {
    operacaoSelecionada =""
    primeiroNumero = ""
    segundoNumero = ""
    display.value = ""
    display.placeholder = "0"
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
    


function bindOperacoes() {
    const operacoesContainer = document.getElementById('operacoes')  
    for(const btnOperacao of operacoesContainer.children) {
        btnOperacao.addEventListener('click', clickOperacaoBtnEvent)
    }
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