
function cadastro() {

    // é melhor armazenar em localStorage e melhorar mais a logica
   
    var EmailCadastro = document.getElementById("myEmail").value;
    var myPassword = document.getElementById("myPassword").value;

    if(EmailCadastro == "pedro@gmail.com" && myPassword == "admin"){
        location.href = "/src/HTML/Cadastro de Pets.html";

    }else if (EmailCadastro == "laura@gmail.com" && myPassword == "laura"){

        location.href = "/src/HTML/Cadastro de Pets.html";
    }else{
        alert('insira um email e senha para cadastro');

    }
        
}
