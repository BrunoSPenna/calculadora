const display = document.getElementById('display')
let primeiroNumero = ""
let segundoNumero = ""


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

// const button1 = document.getElementById('btn_1')
// button1.addEventListener('click', clicouButton1)
    
// function clicouButton1() {
//     clickAtBtn("1")
// }

// const button2 = document.getElementById('btn_2')
// button2.addEventListener('click', clicouButton2)
    
// function clicouButton2() {
//     clickAtBtn("2")
// }
// const button3 = document.getElementById('btn_3')
// button3.addEventListener('click', clicouButton3)
    
// function clicouButton3() {
//     clickAtBtn("3")
// }
// const button4 = document.getElementById('btn_4')
// button4.addEventListener('click', clicouButton4)
    
// function clicouButton4() {
//     clickAtBtn("4")
// }
// const button5 = document.getElementById('btn_5')
// button5.addEventListener('click', clicouButton5)
    
// function clicouButton5() {
//     clickAtBtn("5")
// }
// const button6 = document.getElementById('btn_6')
// button6.addEventListener('click', clicouButton6)
    
// function clicouButton6() {
//     clickAtBtn("6")
// }



// const button7 = document.getElementById('btn_7')
// button7.addEventListener('click', clicouButton7)

// function clicouButton7() {
//     clickAtBtn("7")
// }

// const button8 = document.getElementById('btn_8')
// button8.addEventListener('click', clicouButton8)

// function clicouButton8() {
//     clickAtBtn("8")
// }

// const button9 = document.getElementById('btn_9')
// button9.addEventListener('click', clicouButton9)

// function clicouButton9() {
//     clickAtBtn("9")
// }

// const button0 = document.getElementById('btn_0')
// button0.addEventListener('click', clicouButton0)

// function clicouButton0() {
//     clickAtBtn("0")
// }



const buttonSoma = document.getElementById('btn_+')
buttonSoma.addEventListener('click', clicouButtonSoma)

function clicouButtonSoma() {
   primeiroNumero = display.value
   
   toogleBtnSomaStyle(true)
   
   display.value = ""
   display.placeholder = primeiroNumero
}

const buttonIgual = document.getElementById('btn_=')
buttonIgual.addEventListener('click', clicouButtonIgual)

function clicouButtonIgual() {
    segundoNumero = display.value
    let resultado = parseInt(primeiroNumero) + parseInt(segundoNumero)

    primeiroNumero = resultado
    display.value = ""
    display.placeholder = primeiroNumero

    segundoNumero = ""
}

const buttonClear = document.getElementById('btn_c')
buttonClear.addEventListener('click', clicouButtonClear)

function clicouButtonClear() {
    primeiroNumero = ""
    segundoNumero = ""
    display.value = ""
    display.placeholder = "0"

    toogleBtnSomaStyle(false)

}

function toogleBtnSomaStyle(selected) {

    buttonSoma.classList.remove(selected ? "btnNotSelected" : "btnSelected")
    buttonSoma.classList.add(selected ? "btnSelected" : "btnNotSelected")


    // if (selected) {
    //     buttonSoma.classList.remove("btnNotSelected")
    //     buttonSoma.classList.add("btnSelected")
    // } else {
    //     buttonSoma.classList.remove("btnSelected")
    //     buttonSoma.classList.add("btnNotSelected")
    // }

}
