const btn = document.querySelector('#btnLogado')
const h1 = document.querySelector('#h1Logado')

if(localStorage.token == null){
  alert('Parece que você não está logado. Volte para a página principal')
  window.location.href = 'http://127.0.0.1:5500/index.html'
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'))
h1.innerHTML = 'Olá ' + userLogado.nome ;

function removeToken(){
  localStorage.removeItem('token')
  window.setTimeout(()=> window.location.href = 'http://127.0.0.1:5500/index.html', 1000)
  alert('Direcionando para a página principal.')
  localStorage.removeItem('userLogado')

}


btn.addEventListener('click', removeToken)