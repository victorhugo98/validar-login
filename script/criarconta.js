const btnEyeConfirm = document.querySelector('.verSenha')
const btnEye = document.querySelector('.fa-eye')

let inputNome = document.querySelector('#inputNome')
let LabelNome = document.querySelector('#labelNome')
let checkNome = false

let inputUsuario = document.querySelector('#inputUsuario')
let labelUsuario = document.querySelector('#labelUsuario')
let checkUsuario = false

let senhaCadastro = document.querySelector('#senhaCadastro')
let labelSenha = document.querySelector('#labelSenha')
let checkSenha = false

let inputConfirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let checkConfirmSenha = false


const cadastrarButton = document.querySelector('#cadastrarButton')


inputNome.addEventListener('keyup', ()=>{
  if(inputNome.value.length <= 2){
    inputNome.style.borderColor = 'red'
    LabelNome.style.color = 'red'
    LabelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres!"
    checkNome = false

  }
  else{
    inputNome.style.borderColor = 'green'
    LabelNome.style.color = 'green'

    LabelNome.innerHTML = "Nome"
    checkNome = true
  }
})


inputUsuario.addEventListener('keyup', ()=>{
  if(inputUsuario.value.length <= 2){
    inputUsuario.style.borderColor = 'red'
    labelUsuario.style.color = 'red'
    labelUsuario.innerHTML = "Usuário *Insira no mínimo 3 caracteres!"
    checkUsuario = false
  }
  else{
    inputUsuario.style.borderColor = 'green'
    labelUsuario.innerHTML = "Usuário"
    labelUsuario.style.color = 'green'

    checkUsuario = true
  }
})


senhaCadastro.addEventListener('keyup', ()=>{
  if(senhaCadastro.value.length <= 5){
    senhaCadastro.style.borderColor = 'red'
    labelSenha.innerHTML = "Senha *Insira no mínimo 6 caracteres!"
    labelSenha.style.color = 'red'
    checkSenha = false
  }
  else{
    senhaCadastro.style.borderColor = 'green'
    labelSenha.innerHTML = "Senha"
    labelSenha.style.color = 'green'

    checkSenha = true
  }
})


inputConfirmSenha.addEventListener('keyup', ()=>{
  if(inputConfirmSenha.value != senhaCadastro.value){
    inputConfirmSenha.style.borderColor = 'red'
    labelConfirmSenha.innerHTML = "Confirmar senha *As senhas não conferem!"
    labelConfirmSenha.style.color = 'red'
    checkConfirmSenha = false
  }
  else{
    inputConfirmSenha.style.borderColor = 'green'
    labelConfirmSenha.style.color = 'green'
    labelConfirmSenha.innerHTML = "Confirmar senha"

    checkConfirmSenha = true

  }
})


let listUser = []
function cadastrar(){
  const msgSuccess = document.querySelector('.msgSuccess')
  const msgError = document.querySelector('.msgError')
  if(checkConfirmSenha && checkNome && checkSenha && checkUsuario){

    if(localStorage.dadosUsuario){
      listUser = JSON.parse(localStorage.getItem('dadosUsuario'))
    }

    listUser.push(
      {
      nome: inputNome.value,
      usuario: inputUsuario.value,
      senhaUser: senhaCadastro.value,
    }
    )
  
    localStorage.dadosUsuario = JSON.stringify(listUser)


  msgSuccess.style.display = 'block'
  msgError.style.display = 'none'
  inputNome.value = ''
  inputConfirmSenha.value = ''
  inputUsuario.value = ''
  senhaCadastro.value = ''
  window.setTimeout(()=> window.location.href = 'http://127.0.0.1:5500/index.html', 1000)


}

  else{
  msgSuccess.style.display = 'none'
  msgError.style.display = 'block'

  }

}

cadastrarButton.addEventListener('click', cadastrar)

function hideCreatePassword(){
  const senhaCreatInput = document.querySelector('#senhaCadastro')
  if(senhaCreatInput.getAttribute('type') == 'password'){
    senhaCreatInput.setAttribute('type', 'text')
    senhaCreatInput.setAttribute('aria-expanded', 'true')
    btnEye.style.opacity = '.5'
  }
  else{
    senhaCreatInput.setAttribute('type', 'password')
    senhaCreatInput.setAttribute('aria-expanded', 'false')
    btnEye.style.opacity = '1'

  }

}
btnEye.addEventListener('click', hideCreatePassword)


function hidePasswordConfirm(){
  const senhaInputConfirm = document.querySelector('#confirmSenha')
  if(senhaInputConfirm.getAttribute('type') == 'password'){
    senhaInputConfirm.setAttribute('type', 'text')
    senhaInputConfirm.setAttribute('aria-expanded', 'true')
    btnEyeConfirm.style.opacity = '.5'
  }
  else{
    senhaInputConfirm.setAttribute('type', 'password')
    senhaInputConfirm.setAttribute('aria-expanded', 'false')
    btnEyeConfirm.style.opacity = '1'

  }

}

btnEyeConfirm.addEventListener('click', hidePasswordConfirm)
