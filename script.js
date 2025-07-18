//Abre menu lateral:
const menu = document.querySelector(".arrow")
const conteiner = document.querySelector(".conteiner")
const main = document.querySelector("main")

menu.onclick = e => {
    if (!conteiner.classList.contains('oculto')) {
        conteiner.classList.add('oculto')
        main.style.marginLeft = "63px"
        main.style.width = "calc(100vw - 107px)"
    } else {
        conteiner.classList.remove('oculto')
        main.style.marginLeft = "260px"
        main.style.width = "calc(100vw - 304px)"
    }
}

//Abre abas do menu:
const openDashboard = document.querySelector("#openDashboard")
const addItem = document.querySelector("#addItem")
const removeItem = document.querySelector("#removeItem")
const returnItem = document.querySelector("#returnItem")
const openHistory = document.querySelector("#openHistory")

//Conteúdo das abas:
const dashboard = document.querySelector("#dashboard")
const entrada = document.querySelector("#entrada")
const saida = document.querySelector("#saida")
const devolucao = document.querySelector("#devolucao")
const historico = document.querySelector("#history")
let positionAba = 1

//Disposição das abas:
openDashboard.onclick = e => {
    dashboard.style.display = "block"
    entrada.style.display = "none"
    saida.style.display = "none"
    devolucao.style.display = "none"
    historico.style.display = "none"
    positionAba = 1
}

addItem.onclick = e => {
    dashboard.style.display = "none"
    entrada.style.display = "block"
    saida.style.display = "none"
    devolucao.style.display = "none"
    historico.style.display = "none"
    positionAba = 2
}

removeItem.onclick = e => {
    dashboard.style.display = "none"
    entrada.style.display = "none"
    saida.style.display = "block"
    devolucao.style.display = "none"
    historico.style.display = "none"
    positionAba = 3
}

returnItem.onclick = e => {
    dashboard.style.display = "none"
    entrada.style.display = "none"
    saida.style.display = "none"
    devolucao.style.display = "block"
    historico.style.display = "none"
    positionAba = 4
}

openHistory.onclick = e => {
    dashboard.style.display = "none"
    entrada.style.display = "none"
    saida.style.display = "none"
    devolucao.style.display = "none"
    historico.style.display = "block"

    positionAba = 5
}

//Mostra em que aba está:


