function logar(){
    //email senha
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    if(email == "pedro@gmail.com" && pwd == "admin"){
        alert('Sucesso');
        location.href = "/src/HTML/Perfil.html";
    }else{
        alert('Usuário ou senha incorretos');
    }
}