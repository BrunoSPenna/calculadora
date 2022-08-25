const display = document.getElementById('display')
let primeiroNumero = ""
let segundoNumero = ""
let operacaoSelecionada = ""


const button1 = document.getElementById('btn_1')
button1.addEventListener('click', clicouButton1)
    
function clicouButton1() {
    clickAtBtn("1")
}

const button2 = document.getElementById('btn_2')
button2.addEventListener('click', clicouButton2)
    
function clicouButton2() {
    clickAtBtn("2")
}
const button3 = document.getElementById('btn_3')
button3.addEventListener('click', clicouButton3)
    
function clicouButton3() {
    clickAtBtn("3")
}
const button4 = document.getElementById('btn_4')
button4.addEventListener('click', clicouButton4)
    
function clicouButton4() {
    clickAtBtn("4")
}
const button5 = document.getElementById('btn_5')
button5.addEventListener('click', clicouButton5)
    
function clicouButton5() {
    clickAtBtn("5")
}
const button6 = document.getElementById('btn_6')
button6.addEventListener('click', clicouButton6)
    
function clicouButton6() {
    clickAtBtn("6")
}



const button7 = document.getElementById('btn_7')
button7.addEventListener('click', clicouButton7)

function clicouButton7() {
    clickAtBtn("7")
}

const button8 = document.getElementById('btn_8')
button8.addEventListener('click', clicouButton8)

function clicouButton8() {
    clickAtBtn("8")
}

const button9 = document.getElementById('btn_9')
button9.addEventListener('click', clicouButton9)

function clicouButton9() {
    clickAtBtn("9")
}

const button0 = document.getElementById('btn_0')
button0.addEventListener('click', clicouButton0)

function clicouButton0() {
    clickAtBtn("0")
}

function clickAtBtn(number) {
    let displayText = display.value
    display.value = displayText + number
}
    

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
    primeiroNumero = display.value
    operacaoSelecionada = "x"
    setBtnMultiplicacaoStateToSelectedStyle(true)
    display.value = ""
    display.placeholder = primeiroNumero
}

const buttonDivisao = document.getElementById('btn_/')
buttonDivisao.addEventListener('click', clicouButtonDivisao)

function clicouButtonDivisao() {
    primeiroNumero = display.value
    operacaoSelecionada = "/"
    setBtnDivisaoStateToSelectedStyle(true)
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
    if (selected) {
        buttonSoma.classList.remove("btnNotSelected")
        buttonSoma.classList.add("btnSelected")
    } else {
        buttonSoma.classList.remove("btnSelected")
        buttonSoma.classList.add("btnNotSelected")
    }
}
function setBtnSubtracaoStateToSelectedStyle(selected) {
    if (selected) {
        buttonSubtracao.classList.remove("btnNotSelected")
        buttonSubtracao.classList.add("btnSelected")
    } else {
        buttonSubtracao.classList.remove("btnSelected")
        buttonSubtracao.classList.add("btnNotSelected")
    }
}
function setBtnMultiplicacaoStateToSelectedStyle(selected) {
    if (selected) {
        buttonMultiplicacao.classList.remove("btnNotSelected")
        buttonMultiplicacao.classList.add("btnSelected")
    } else {
        buttonMultiplicacao.classList.remove("btnSelected")
        buttonMultiplicacao.classList.add("btnNotSelected")
    }
}
function setBtnDivisaoStateToSelectedStyle(selected) {
    if (selected) {
        buttonDivisao.classList.remove("btnNotSelected")
        buttonDivisao.classList.add("btnSelected")
    } else {
        buttonDivisao.classList.remove("btnSelected")
        buttonDivisao.classList.add("btnNotSelected")
    }
}