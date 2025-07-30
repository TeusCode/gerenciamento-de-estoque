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

//Modifica a tabela:
const tabelaProdutos = document.querySelector('#produtosEstoque')
const dadosTabela = document.querySelector('#dadosTabela')

//Entrada:

function rgEntrada() {
    const resEn = document.querySelector('#responsavel-entrada').value
    const proEn = document.querySelector('#produto-entrada').value
    const codEn = document.querySelector('#codigo-entrada').value
    const carEn = document.querySelector('#cargo-entrada').value
    const qntEn = document.querySelector('#quantidade-entrada').value
    const dtEn = document.querySelector('#data-entrada').value
    const hrEn = document.querySelector('#hora-entrada').value
    const fEn = document.querySelector('#form-entrada')

    if (resEn === '' || proEn === '' || codEn === '' || carEn === '' || qntEn === '' || dtEn === '' || hrEn === '') {
        alert('Preencha todos os campos!')
        return
    } else {

        //Registra tabela
        const dado = document.querySelector('#dadosTabela')
        const dadoHistorico = document.querySelector('#historicoDados')

        alert('Entrada registrada com sucesso!')
        dado.innerHTML += `
        <tr>
            <td>${proEn}</td>
            <td>${codEn}</td>
            <td>${qntEn}</td>
            <td>${dtEn}</td>
        </tr>
    `
        dadoHistorico.innerHTML += `
<tr>
<td>${dtEn}</td>
<td>${hrEn}</td>
<td>${resEn}</td>
<td>${carEn}</td>
<td>${proEn}</td>
<td>${codEn}</td>
<td>${qntEn}</td>
<td>Entrada</td>
</tr>
        `

        fEn.reset()
    }


}


