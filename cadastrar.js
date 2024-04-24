document.querySelector("#botao-cadastrar").addEventListener("click", (e) => {
    e.preventDefault()

    const form = document.querySelector("form")


    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        score: form.score.value,
        raca: form.raca.value,
        classe: form.classe.value,
        habilidade: form.habilidade.value,
        status: 0
    }

    if (validar(tarefa)){
        console.log(tarefa)
        let tarefas = JSON.parse( localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "/"


}
})

function validar(tarefa) {

    let valid = true

    limparErros()

    if (tarefa.titulo === "") {
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-error").innerText = "Tem que ter um nome !"
        valid = false
    }

    if (tarefa.descricao === "") {
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-error").innerText = "É a descrição, escreve sobre ele !"
        valid = false
    }

    if (tarefa.raca === "") {

        document.querySelector("#raca").classList.add("is-error")
        document.querySelector("#raca-error").innerText = "Escolha a raça de seu personagem !"
        valid = false
    }

    if (tarefa.classe === "") {

        document.querySelector("#classe").classList.add("is-error")
        document.querySelector("#classe-error").innerText = "Escolha a classe de seu personagem !"
        valid = false
    }

    if (tarefa.habilidade === "") {

        document.querySelector("#habilidade").classList.add("is-error")
        document.querySelector("#habilidade-error").innerText = "Escolha, ao menos, uam habilidade de seu personagem !"
        valid = false
    }

    if (tarefa.score <= 0) {

        document.querySelector("#score").classList.add("is-error")
        document.querySelector("#score-error").innerText = "Score deve ser maior que zero!"
        valid = false
    }

    return valid

}


function limparErros() {

    document
        .querySelectorAll("nes-input.ir-error, .nes-textarea.is-error")
        .forEach(campo => campo.classList.remove("is-error"))


    document
        .querySelectorAll("span.is-error")
        .forEach(span => span.innerText = "")
}
