const btnEye = document.querySelector('.fa-eye')
const entrarBtn = document.querySelector('#entrar')

function entrar(){
let listUser = []
let usuario = document.querySelector('#usuario')
let usuarioLabel = usuario.nextElementSibling
let senha = document.querySelector('#senha')
let senhaLabel = senha.nextElementSibling
const msgSuccessEntrar = document.querySelector('.msgSuccessEntrar')
const msgErrorEntrar = document.querySelector('.msgErrorEntrar')


listUser = JSON.parse(localStorage.getItem('dadosUsuario'))

let userValid = {
  nome:'',
  user:'',
  senha:'',
} 

listUser.forEach((item)=>{
  if(usuario.value === item.usuario && senha.value === item.senhaUser)
   
  userValid = {
    nome:item.nome,
    user:item.usuario,
    senha:item.senhaUser,

  } 
})

if(userValid.user === usuario.value && userValid.senha === senha.value && usuario.value && senha.value){
  msgSuccessEntrar.style.display = 'block'

  msgErrorEntrar.style.display = 'none'
  let token = Math.random().toString(16).slice(2)
  localStorage.setItem('token', token)
  window.setTimeout(()=> window.location.href = 'http://127.0.0.1:5500/telaLogada.html', 1000)
  localStorage.setItem('userLogado', JSON.stringify(userValid))

}

else{
msgSuccessEntrar.style.display = 'none'
msgErrorEntrar.style.display = 'block'
usuario.style.borderColor = 'red'
usuarioLabel.style.color = 'red'
senha.style.borderColor = 'red'
senhaLabel.style.color = 'red'
usuario.focus()
}
}

entrarBtn.addEventListener('click', entrar)



function hidePassword(){
  const senhaInput = document.querySelector('#senha')
  if(senhaInput.getAttribute('type') == 'password'){
    senhaInput.setAttribute('type', 'text')
    senhaInput.setAttribute('aria-expanded', 'true')
    btnEye.style.opacity = '.5'
  }
  else{
    senhaInput.setAttribute('type', 'password')
    senhaInput.setAttribute('aria-expanded', 'false')
    btnEye.style.opacity = '1'

  }

}
btnEye.addEventListener('click', hidePassword)




