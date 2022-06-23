function armazenar() {
    const cadastro = JSON.parse(localStorage.getItem("cadastro")) || []

    var email = document.getElementById('email');
    var pwd = document.getElementById('pwd');
    var letrasMinusculas = /[a-z]/g;
    var letrasMaiusculas = /[A-Z]/g;
    var aoMenosUmNumero = /[0-9]/g;

    if (email.value.length == 0) {
        alert('Por favor, insira um email')
        return;
    }
    if(cadastro.some(item => email.value == item.email)) {
        alert('E-mail já cadastrado.')
        return;
    }

    if (pwd.value.length == 0) {
        alert('Por favor, insira uma senha');
        return;
    }
    if (email.value.length == 0 && pwd.value.length == 0) {
        alert('Por favor, insira um email e uma senha');
        return;
    }
    if (pwd.value.length > 8) {
        alert('Senha deverá ter no máximo 8 caracteres');
        return;
    }
    if (!pwd.value.match(aoMenosUmNumero)) {
        alert('A senha deve ter ao menos 1 número');
        return;
    }
    if (!pwd.value.match(letrasMaiusculas)) {
        alert('A senha deve ter ao menos uma letra maiúscula');
        return;
    }
    if (!pwd.value.match(letrasMinusculas)) {
        alert('A senha deve ter ao menos uma letra minúscula');
        return;
    }
    
        cadastro.push({
            email: email.value,
            pwd: pwd.value,
            id: Date.now()
        })
        localStorage.setItem('cadastro', JSON.stringify(cadastro));
        alert('Sua conta foi criada, por favor, realize o login');
    
}

function entrar() {
    const cadastrosArmazenado = JSON.parse(localStorage.getItem('cadastro'));
    var eMailUsuario = document.getElementById('Email');

    var usuarioPw = document.getElementById('senha');

    const usuarioEncontrado = cadastrosArmazenado.find(item => item.email == eMailUsuario.value)

    if (usuarioEncontrado && usuarioEncontrado.pwd == usuarioPw.value) {
        alert('Você entrou!');
        localStorage.setItem("usuarioLogado", usuarioEncontrado.id)
        "nome" in usuarioEncontrado
            ? location.href = "../HTML/editar-info.html"
            : location.href = "../HTML/Perfil.html";
    } else {
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
