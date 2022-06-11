function enviar(){

var userArray = [
  {
    email: 'joao@gmail.com',
    pwd: 'admin'
  }, {
    email: 'laura@gmail.com',
    pwd: 'admin'
  }

];


if(JSON.parse(localStorage.getItem('passandoArray')) != null){
	for(i=0;i<JSON.parse(localStorage.getItem('passandoArray')).length;i++){
	 	userArray.push(JSON.parse(localStorage.getItem('passandoArray'))[i]);
	};
};

console.log(userArray);

document.getElementById('enter').onclick = function (){authentica()};

function authentica(){

	var email = document.getElementById("email").value;
	var pwd = document.getElementById("pwd").value;
  
	if(userArray.length>0){
		for(i=0; i<userArray.length; i++){
			if((email == userArray[i].email) && (pwd == userArray[i].pwd)){
				alert("Você entrou!!");
        location.href = "/src/HTML/Cadastro de Pet.html";
				document.getElementById('email').value = "";
				document.getElementById('pwd').value = "";
				break;
			}
			if(i==userArray.length-1 || userArray.length==0){
					troubleshoot(email, pwd);
			}
		}
	}else{
		alert("Nenhuma conta encontrada. Clique no link Criar conta para registrar um novo nome de usuário");
		document.getElementById('email').value = "";
		document.getElementById('pwd').value = "";
	}

};

function troubleshoot(email, pwd){
		for(j=0; j<userArray.length; j++){
			if(email == userArray[j].email){
				alert("Senha Errada");
				document.getElementById('pwd').value = "";
				break;
			};
			if(j==userArray.length-1 || userArray.length==0){
				alert("Nenhuma conta encontrada. Clique no link faça já seu cadastro para registrar um novo nome de usuário com senha");
				document.getElementById('email').value = "";
				document.getElementById('pwd').value = "";
			};
		};
  };
};
