function armazenar(){
    const cadastro =JSON.parse(localStorage.getItem("cadastro"))||[]

  var email = document.getElementById('email');
  var pwd = document.getElementById('pwd');
  var letrasMinusculas = /[a-z]/g;
  var letrasMaiusculas = /[A-Z]/g;
  var aoMenosUmNumero = /[0-9]/g;

  if(email.value.length == 0){
      alert('Por favor, insira um email');

  }else if(pwd.value.length == 0){
      alert('Por favor, insira uma senha');

  }else if(email.value.length == 0 && pwd.value.length == 0){
      alert('Por favor, insira um email e uma senha');

  }else if(pwd.value.length > 8){
      alert('Senha deverá ter no máximo 8 caracteres');

  }else if(!pwd.value.match(aoMenosUmNumero)){
      alert('A senha deve ter ao menos 1 número');

  }else if(!pwd.value.match(letrasMaiusculas)){
      alert('A senha deve ter ao menos uma letra maiúscula');

  }else if(!pwd.value.match(letrasMinusculas)){
      alert('A senha deve ter ao menos uma letra minúscula');

  }else{
      cadastro.push({
        email: email.value,
        pwd: pwd.value,
        id: Date.now()
      })
      localStorage.setItem('cadastro',JSON.stringify(cadastro));
      alert('Sua conta foi criada, por favor, realize o login');
  }
}

function entrar(){
  const cadastrosArmazenado =JSON.parse(localStorage.getItem('cadastro'));
  var eMailUsuario = document.getElementById('Email');
  console.log(eMailUsuario.value)
  var usuarioPw = document.getElementById('senha');
  console.log(usuarioPw.value)
  const usuarioEncontrado = cadastrosArmazenado.find(item=>item.email==eMailUsuario.value)

  if(usuarioEncontrado&&usuarioEncontrado.pwd==usuarioPw.value){
      alert('Você entrou!');
      localStorage.setItem("usuarioLogado",usuarioEncontrado.id)
      location.href = "../HTML/Perfil.html";
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
    localStorage.removeItem('imagem-recente');
    
    window.location.href = "PaginaInicial.html"
  }
