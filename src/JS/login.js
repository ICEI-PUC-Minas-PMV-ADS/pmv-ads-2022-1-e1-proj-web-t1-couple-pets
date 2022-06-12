function armazenar(){

  var email = document.getElementById('email');
  var pwd = document.getElementById('pwd');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if(email.value.length == 0){
      alert('Por favor, insira um email');

  }else if(pwd.value.length == 0){
      alert('Por favor, insira uma senha');

  }else if(email.value.length == 0 && pwd.value.length == 0){
      alert('Por favor, insira um email e uma senha');

  }else if(pwd.value.length > 8){
      alert('Senha deverá ter no mínimo 8 caracteres');

  }else if(!pwd.value.match(numbers)){
      alert('A senha deve ter ao menos 1 número');

  }else if(!pwd.value.match(upperCaseLetters)){
      alert('A senha deve ter ao menos uma letra maiúscula');

  }else if(!pwd.value.match(lowerCaseLetters)){
      alert('A senha deve ter ao menos uma letra minúscula');

  }else{
      localStorage.setItem('email', email.value);
      localStorage.setItem('pwd', pwd.value);
      alert('Sua conta foi criada, por favor, realize o login');
  }
}

function entrar(){
  var emailArmazenado = localStorage.getItem('email');
  var senhaArmazenada = localStorage.getItem('pwd');

  var eMailUsuario = document.getElementById('Email');
  var usuarioPw = document.getElementById('senha');
  

  if(eMailUsuario.value == emailArmazenado && usuarioPw.value == senhaArmazenada){
      alert('Você entrou!');
      location.href = "/src/HTML/Perfil.html";
  }else{
      alert('Usuário ou senha não encontrados');
  }
}

function deslogar() {
    
    localStorage.removeItem('cidade');
    localStorage.removeItem('dtaNasc');
    localStorage.removeItem('endereco');
    localStorage.removeItem('gender');
    localStorage.removeItem('nome');
    localStorage.removeItem('tel');
    
    window.location.href = "PaginaInicial.html"
  }
