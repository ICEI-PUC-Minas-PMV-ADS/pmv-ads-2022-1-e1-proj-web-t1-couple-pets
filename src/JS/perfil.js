document.querySelector('#imgInp').addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("imagem-recente", reader.result)
    });

    reader.readAsDataURL(this.files[0]);
})


document.addEventListener("DOMContentLoaded", () => {
    const dadoUrlImagemRecente = localStorage.getItem("imagem-recente");
    if (dadoUrlImagemRecente) {
        document.querySelector("#blah").setAttribute("src", dadoUrlImagemRecente);
    }
});


imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
        blah.src = URL.createObjectURL(file)
    }
}

function Salvar() {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("dtaNasc", document.getElementById("dtaNasc").value);
    //localStorage.setItem("gender", document.getElementsByName("gender", checked).value);
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