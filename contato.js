////Script de verificação de cadastro do contato

const form = document.getElementById('form')
const username = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
let contato = 0


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error'
}
  
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    return contato = contato + 1
}
  
function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/i.test(email);
}
  
  //Validações
function checkInputs() { 

    //Validação NOME
    username.addEventListener("blur", function() {
      //console.log("username")
    if(username.value === '') {
            // mostrar erro
            // add classe
            setErrorFor(username, 'Preencha esse campo')
        } else if(username.value.length < 5) { 
            setErrorFor(username, 'Pelo menos 5 caracteres')
        } else {
            // adicionar a classe de sucesso
            setSuccessFor(username)
        }
    })

    //Validação EMAIL
    email.addEventListener("blur", function() {
        //console.log("email")
        if(email.value === '') {
            // mostrar erro
            // add classe
            form.classList.add("error")
            setErrorFor(email, 'Preencha esse campo')

        } else if (!isEmail(email.value)) {
            form.classList.add("error")
            setErrorFor(email, 'Email inválido')

        } else {
            // adicionar a classe de sucesso
            setSuccessFor(email)
        }
    })

    //Validação TELEFONE
    telefone.addEventListener("blur", function() {
        //console.log("username")
        if(telefone.value === '') {
              // mostrar erro
              // add classe
              setErrorFor(telefone, 'Preencha esse campo')
        } else if (telefone.value != Number(telefone.value)) {
                setErrorFor(telefone, 'Digite apenas números')
        } else if(telefone.value.length < 10) { 
              setErrorFor(telefone, 'Pelo menos 10 caracteres')
        } else {
              // adicionar a classe de sucesso
              setSuccessFor(telefone)
        }
    })

      //Validação MENSAGEM
    mensagem.addEventListener("blur", function() {
        //console.log("username")
        if(mensagem.value === '') {
              // mostrar erro
              // add classe
            setErrorFor(mensagem, 'Preencha esse campo')
        } else if(mensagem.value.length < 12) { 
            setErrorFor(mensagem, 'Pelo menos 12 caracteres')
        } else {
              // adicionar a classe de sucesso
            setSuccessFor(mensagem)
        }
    })
}


function confere(){
    if (contato > 3){
      alert("Contato Enviado!")
    }else {
      alert("Preenchimento inválido...")
    }
    contato = 0
  }
  
  
  checkInputs()
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
    confere()
    })