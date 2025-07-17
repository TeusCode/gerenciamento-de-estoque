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
const addItem = document.querySelector("#addItem")
const removeItem = document.querySelector("#removeItem")
const returnItem = document.querySelector("#returnItem")

//Conteúdo das abas:
const entrada = document.querySelector("#entrada")
const saida = document.querySelector("#saida")
const devolucao = document.querySelector("#devolucao")
let positionAba = 1

//Disposição das abas:
addItem.onclick = e => {
    entrada.style.display = "block"
    saida.style.display = "none"
    devolucao.style.display = "none"
    positionAba = 1
}

removeItem.onclick = e => {
    entrada.style.display = "none"
    saida.style.display = "block"
    devolucao.style.display = "none"
    positionAba = 2
}

returnItem.onclick = e => {
    entrada.style.display = "none"
    saida.style.display = "none"
    devolucao.style.display = "block"
    positionAba = 3
}

//Mostra em que aba está:


