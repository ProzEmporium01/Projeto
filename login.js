// Bloco Geral dos Formularios
const form = document.querySelector("form")
const resposta1 = document.querySelector("h6")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let senha = form.senha.value
    let user = form.usuario.value   
    console.log(user)
    if (user != "monica" && user != "tulio" && user != "alvaro" && user !="wander") {
        resposta1.innerText = "ERRO: Senha ou Usuário Incorretos"
    } else {
        console.log(senha)
        if (senha == "123456"){
            resposta1.innerText = ""
            alert(`Bem-vindo, ${user}`)
        } else {
            resposta1.innerText = "ERRO: Senha ou Usuário Incorretos"
        }
    }
})