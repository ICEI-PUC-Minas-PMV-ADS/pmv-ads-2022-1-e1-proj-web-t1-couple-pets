function logar() {

    //Desafio: Armazenar em localStorage já que não vamos utilizar BD
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    if (email == "pedro@gmail.com" && password == "admin") {
        location.href = "/src/HTML/Perfil.html";
    } else if (email == "laura@gmail.com" && password == "laura") {
        location.href = "/src/HTML/Perfil.html";
    } else {
        alert('Usuário inexistente ou senha incorretos');
    
    }
}
