function logar() {
    //email senha
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    if (email == "pedro@gmail.com" && password == "admin") {
        location.href = "/src/HTML/Perfil.html";
    } else if (email == "laura@gmail.com" && password == "laura") {
        location.href = "/src/HTML/Perfil.html";
    } else {
        alert('Usuário ou senha incorretos');
    }
}

