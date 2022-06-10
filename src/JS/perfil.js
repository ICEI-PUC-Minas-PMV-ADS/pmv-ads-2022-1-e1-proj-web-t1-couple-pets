function Salvar() {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("dtaNasc", document.getElementById("dtaNasc").value);
    localStorage.setItem("gender", document.getElementsByName("gender").value);
    localStorage.setItem("endereco", document.getElementById("endereco").value);
    localStorage.setItem("tel", document.getElementById("tel").value);
    localStorage.setItem("cidade", document.getElementById("cidade").value);
}

function Carregar() {
    document.getElementById("nome").value = localStorage.getItem("nome");
    document.getElementById("dtaNasc").value = localStorage.getItem("dtaNasc");
    document.getElementsByName("gender").value = localStorage.getItem("gender");
    document.getElementById("endereco").value = localStorage.getItem("endereco");
    document.getElementById("tel").value = localStorage.getItem("tel");
    document.getElementById("cidade").value = localStorage.getItem("cidade");
}


 
  