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