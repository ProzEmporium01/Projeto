//Script de verificação de cadastro
const form = document.getElementById('form')
const username = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senha_conf = document.getElementById('senha_conf')

//addEventListener = permite que você configure funções a serem chamadas quando um evento específico acontece, como, por exemplo, quando um usuário clica em um botão.
//preventDefault = evitar as ações padrão que normalmente ocorrem quando certos eventos são acionados, a principal razão do uso do preventDefault é impedir que os eventos sejam propagados pelos elementos do DOM, evitando que eles sejam manipulados por outros elementos. Ao utilizar essa função, é possível evitar que ações indesejadas sejam executadas, como redirecionamentos de página ou abertura de links.
//querySelector = faz uma busca em todo o documento por aquilo que foi especificado, diferente do getElementById que procura somente id, portanto, não sendo necessário usar o "#" para especificar que é um id, no querySelector deve sim informar.


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/i.test(email);
}


function checkInputs() { 
  //Validação USERNAME
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
  //Vvalidação PASSWORD I
  senha.addEventListener("blur", function() {
    //console.log("password")
    if(senha.value === '') {
      // mostrar erro
      // add classe
      setErrorFor(senha, 'Preencha esse campo')

    } else if(senha.value.length < 6) { 
      setErrorFor(senha, 'Senha deve ter no mínimo 6 caracteres')
    } else {

      // adicionar a classe de sucesso
      setSuccessFor(senha)
    }
    return senha
  })
  //Validação PASSWORD II
  senha_conf.addEventListener("blur", function() {
    //console.log(password)
    if(senha_conf.value === '') {
      // mostrar erro
      // add classe
      setErrorFor(senha_conf, 'Preencha esse campo')

    } else if(senha.value !== senha_conf.value) { 
      setErrorFor(senha_conf, 'Senhas não estão iguais')

    } else {
      // adicionar a classe de sucesso
      setSuccessFor(senha_conf)
    }
  })
}


checkInputs()
form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
  alert(`Cadastro enviado`)
})

