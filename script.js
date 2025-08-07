//Tela de Registro:
function registrarUsuario() {
    const usuario = document.getElementById('usuario').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    
}







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
let estoque = [];

// Atualiza a tabela de estoque na tela
function atualizarTabelaEstoque() {
    const tabela = document.querySelector('#dadosTabela');
    tabela.innerHTML = '';

    estoque.forEach(item => {
        const linha = tabela.insertRow();
        linha.insertCell().textContent = item.produto;
        linha.insertCell().textContent = item.codigo;
        linha.insertCell().textContent = item.quantidade;
        linha.insertCell().textContent = item.data;
    });
}

// Preencher automático: nome ↔ código
function configurarAutoPreenchimento() {
    const inputNome = document.querySelector('#produto-entrada');
    const inputCodigo = document.querySelector('#codigo-entrada');

    inputNome.addEventListener('input', () => {
        const nome = inputNome.value.trim();
        const item = estoque.find(p => p.produto.toLowerCase() === nome.toLowerCase());
        if (item) inputCodigo.value = item.codigo;
    });

    inputCodigo.addEventListener('input', () => {
        const codigo = inputCodigo.value.trim();
        const item = estoque.find(p => p.codigo === codigo);
        if (item) inputNome.value = item.produto;
    });
}

configurarAutoPreenchimento();

function rgEntrada() {
    const resEn = document.querySelector('#responsavel-entrada').value;
    const proEn = document.querySelector('#produto-entrada').value.trim();
    const codEn = document.querySelector('#codigo-entrada').value.trim();
    const carEn = document.querySelector('#cargo-entrada').value;
    const qntEn = parseInt(document.querySelector('#quantidade-entrada').value);
    const dtEn = document.querySelector('#data-entrada').value;
    const hrEn = document.querySelector('#hora-entrada').value;
    const fEn = document.querySelector('#form-entrada');

    if (
        resEn === '' || proEn === '' || codEn === '' || carEn === '' ||
        isNaN(qntEn) || dtEn === '' || hrEn === ''
    ) {
        alert('Preencha todos os campos corretamente!');
        return;
    }

    // ⚠️ Verifica se nome já existe com código diferente
    const conflito = estoque.find(item => item.produto.toLowerCase() === proEn.toLowerCase() && item.codigo !== codEn);
    if (conflito) {
        alert(`Erro: o produto "${proEn}" já existe com o código "${conflito.codigo}".`);
        return;
    }

    const produtoExistente = estoque.find(item => item.codigo === codEn);

    if (produtoExistente) {
        produtoExistente.quantidade += qntEn;
        produtoExistente.data = dtEn;
    } else {
        estoque.push({
            produto: proEn,
            codigo: codEn,
            quantidade: qntEn,
            data: dtEn
        });
    }

    atualizarTabelaEstoque();

    // Registro no histórico
    const dadoHistorico = document.querySelector('#historicoDados');
    const linhaHistorico = dadoHistorico.insertRow();
    linhaHistorico.insertCell().textContent = dtEn;
    linhaHistorico.insertCell().textContent = hrEn;
    linhaHistorico.insertCell().textContent = resEn;
    linhaHistorico.insertCell().textContent = carEn;
    linhaHistorico.insertCell().textContent = proEn;
    linhaHistorico.insertCell().textContent = codEn;
    linhaHistorico.insertCell().textContent = qntEn;
    linhaHistorico.insertCell().textContent = 'Entrada';

    alert('Entrada registrada com sucesso!');
    fEn.reset();
}

// Registro de saída:
// Atualiza a tabela de estoque visual
function atualizarTabelaEstoque() {
    const tabela = document.querySelector('#dadosTabela');
    tabela.innerHTML = '';

    estoque.forEach(item => {
        const linha = tabela.insertRow();
        linha.insertCell().textContent = item.produto;
        linha.insertCell().textContent = item.codigo;
        linha.insertCell().textContent = item.quantidade;
        linha.insertCell().textContent = item.data;
    });
}

// Preenchimento automático: nome ↔ código (saída)
function configurarAutoPreenchimentoSaida() {
    const inputNome = document.querySelector('#produto-saida');
    const inputCodigo = document.querySelector('#codigo-saida');

    inputNome.addEventListener('input', () => {
        const nome = inputNome.value.trim();
        const item = estoque.find(p => p.produto.toLowerCase() === nome.toLowerCase());
        if (item) inputCodigo.value = item.codigo;
    });

    inputCodigo.addEventListener('input', () => {
        const codigo = inputCodigo.value.trim();
        const item = estoque.find(p => p.codigo === codigo);
        if (item) inputNome.value = item.produto;
    });
}

configurarAutoPreenchimentoSaida();

function rgSaida() {
    const resSa = document.querySelector('#responsavel-saida').value;
    const proSa = document.querySelector('#produto-saida').value.trim();
    const codSa = document.querySelector('#codigo-saida').value.trim();
    const carSa = document.querySelector('#cargo-saida').value;
    const qntSa = parseInt(document.querySelector('#quantidade-saida').value);
    const dtSa = document.querySelector('#data-saida').value;
    const hrSa = document.querySelector('#hora-saida').value;
    const fSa = document.querySelector('#form-saida');

    if (
        resSa === '' || proSa === '' || codSa === '' || carSa === '' ||
        isNaN(qntSa) || dtSa === '' || hrSa === ''
    ) {
        alert('Preencha todos os campos corretamente!');
        return;
    }

    const item = estoque.find(p => p.codigo === codSa);

    if (!item) {
        alert(`Erro: produto com código "${codSa}" não encontrado no estoque.`);
        return;
    }

    if (item.produto.toLowerCase() !== proSa.toLowerCase()) {
        alert(`Erro: nome e código não correspondem. O código "${codSa}" é do produto "${item.produto}".`);
        return;
    }

    if (item.quantidade < qntSa) {
        alert(`Erro: quantidade insuficiente em estoque. Disponível: ${item.quantidade}`);
        return;
    }

    item.quantidade -= qntSa;

    if (item.quantidade === 0) {
        estoque = estoque.filter(p => p.codigo !== codSa);
    }

    atualizarTabelaEstoque();

    const dadoHistorico = document.querySelector('#historicoDados');
    const linhaHistorico = dadoHistorico.insertRow();
    linhaHistorico.insertCell().textContent = dtSa;
    linhaHistorico.insertCell().textContent = hrSa;
    linhaHistorico.insertCell().textContent = resSa;
    linhaHistorico.insertCell().textContent = carSa;
    linhaHistorico.insertCell().textContent = proSa;
    linhaHistorico.insertCell().textContent = codSa;
    linhaHistorico.insertCell().textContent = qntSa;
    linhaHistorico.insertCell().textContent = 'Saída';

    alert('Saída registrada com sucesso!');
    fSa.reset();
}

function filtrarTabela() {
    const input = document.getElementById("campoPesquisa");
    const filtro = input.value.toLowerCase();
    const tabela = document.getElementById("produtosEstoque");
    const linhas = tabela.getElementsByTagName("tr");

    for (let i = 1; i < linhas.length; i++) {
        const linha = linhas[i];
        const colunas = linha.getElementsByTagName("td");

        if (colunas.length >= 2) {
            const nomeProduto = colunas[0].textContent.toLowerCase();
            const codigo = colunas[1].textContent.toLowerCase();

            const corresponde = nomeProduto.includes(filtro) || codigo.includes(filtro);

            // Mostra ou oculta a linha
            linha.style.display = corresponde ? "" : "none";

            // Remove destaque anterior
            linha.classList.remove("linha-destaque");

            // Adiciona destaque se bater
            if (corresponde && filtro !== "") {
                linha.classList.add("linha-destaque");
            }
        }
    }
}
