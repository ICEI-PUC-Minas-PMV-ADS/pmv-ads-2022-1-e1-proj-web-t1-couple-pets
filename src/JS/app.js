var db_contatos_inicial = {
    "data": [
        {
            "nome": "lorrayne oliveira",
            "email": "Sincere@april.biz",
            "nomeDoPet": "Lucky",
            "cidade": "Belo Horizonte",
            "raça": "Golden Retriever",
            "telefone": "(31) 99865-5487",
        },
        {
            "nome": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "nomeDoPet": "Simba",
            "cidade": "Betim",
            "raça": "Bulldog",
            "telefone": "(31) 95732-1535",
        },
        {
            "nome": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "nomeDoPet": "Mike",
            "cidade": "Rio de Janeiro",
            "raça": "Foxhound",
            "telefone": "(21) 96815-3245",
        },
        {
            "nome": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "nomeDoPet": "Amora",
            "cidade": "Betim",
            "raça": "Husky",
            "telefone": "(31) 99658-1555",
        },
        {
            "nome": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "nomeDoPet": "Cacau",
            "cidade": "São Paulo",
            "raça": "Pinscher",
            "telefone": "(11) 92187-3245",
        },
        {
            "nome": "Mrs. Dennis Schulist",
            "email": "Karley_Dach@jasper.info",
            "nomeDoPet": "Scooby",
            "cidade": "Rio de Janeiro",
            "raça": "Vira-Lata",
            "telefone": "(21) 94924-5626",
        },
        {
            "nome": "Kurtis Weissnat",
            "email": "Telly.Hoeger@billy.biz",
            "nomeDoPet": "Boris",
            "cidade": "Belo Horizonte",
            "raça": "Yorkshire Terrier",
            "telefone": "(31) 91928-7532",
        },
        {
            "nome": "Nicholas Runolfsdottir V",
            "email": "Sherwood@rosamond.me",
            "nomeDoPet": "Maya",
            "cidade": "Betim",
            "raça": "Chihuahua",
            "telefone": "(31) 91568-0357",
        },
        {
            "nome": "Laura",
            "email": "Laura@gmail.com",
            "nomeDoPet": "Lolla",
            "cidade": "Belo Horizonte",
            "raça": "Chow Chow",
            "telefone": "(31) 99242-1452",
        },
        {
            "nome": "Clementina DuBuque",
            "email": "Rey.Padberg@karina.biz",
            "nomeDoPet": "Zeus",
            "cidade": "São Paulo",
            "raça": "Akita Inu",
            "telefone": "(11) 92635-3356",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};


function Carregar() {
    const cadastrosArmazenado = JSON.parse(localStorage.getItem('cadastro'));
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    const dadosUsuarioLogado = cadastrosArmazenado.find(item => item.id == usuarioLogado)
    if(dadosUsuarioLogado.nome == undefined){
        document.querySelector('p[name="nomeUser"]').innerHTML = "Bem-vindo(a): " + " | " || "";
    }else {
        document.querySelector('p[name="nomeUser"]').innerHTML = "Bem-vindo(a): " + dadosUsuarioLogado.nome + " | " || "";
    }
    //document.querySelector('p[name="nomeUser"]').innerHTML = "Bem-vindo(a): " + dadosUsuarioLogado.nome + " | " || "";
    document.getElementById("nome").value = dadosUsuarioLogado.nome || "";
    document.getElementById("dtaNasc").value = dadosUsuarioLogado.dtaNasc || "&nbsp"
    const radio = document.getElementById(dadosUsuarioLogado.gender)
    radio.checked = true;
    document.getElementById("endereco").value = dadosUsuarioLogado.endereco || "&nbsp"
    document.getElementById("tel").value = dadosUsuarioLogado.tel || "&nbsp"
    document.getElementById("cidade").value = dadosUsuarioLogado.cidade || "&nbsp"
}

function Salvar() {

    let cadastrosArmazenado = JSON.parse(localStorage.getItem('cadastro'));
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    const novosDados = {
        nome: document.getElementById("nome").value,
        dtaNasc: document.getElementById("dtaNasc").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        endereco: document.getElementById("endereco").value,
        tel: document.getElementById("tel").value,
        cidade: document.getElementById("cidade").value
    }
    cadastrosArmazenado.forEach(item => {

        if (item.id == usuarioLogado) {
            Object.assign(item, novosDados)
        }
    });

    console.log(cadastrosArmazenado[0])
    localStorage.setItem('cadastro', JSON.stringify(cadastrosArmazenado));
}


function salvarPet() {
    let cadastrosArmazenado = JSON.parse(localStorage.getItem('cadastro'));
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    const novosDados = {
        nomePet: document.getElementById("nomePet").value,
        racas: document.getElementById("racas").value,
        dtaNascPet: document.getElementById("dtaNascPet").value,
        genderPet: document.querySelector('input[name="genderPet"]:checked').value,
        localVive: document.getElementById("localVive").value,
        vacinas: document.getElementById("vacinas").value,
        porte: document.querySelector('input[name="porte"]:checked').value,
        comportamento: document.getElementById("comportamento").value
    }
    cadastrosArmazenado.forEach(item => {

        if (item.id == usuarioLogado) {
            Object.assign(item, novosDados)
        }
    });


    localStorage.setItem('cadastro', JSON.stringify(cadastrosArmazenado));


}

function meuPet() {
    const cadastrosArmazenado = JSON.parse(localStorage.getItem('cadastro'));
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    const dadosUsuarioLogado = cadastrosArmazenado.find(item => item.id == usuarioLogado)
    console.log(dadosUsuarioLogado)
    document.getElementById("nomePet").value = dadosUsuarioLogado.nomePet || ""
    const radio = document.getElementById(dadosUsuarioLogado.genderPet)
    radio.checked = true;
    const radioPorte = document.getElementById(dadosUsuarioLogado.porte)
    radioPorte.checked = true;
    document.getElementById("racas").value = dadosUsuarioLogado.racas || "&nbsp"
    document.getElementById("dtaNascPet").value = dadosUsuarioLogado.dtaNascPet || "&nbsp"            
    document.getElementById("localVive").value = dadosUsuarioLogado.localVive || "&nbsp"
    document.getElementById("vacinas").value = dadosUsuarioLogado.vacinas || "&nbsp"            
    document.getElementById("comportamento").value = dadosUsuarioLogado.comportamento || "&nbsp"
} 

function mascaraFone(event) {
    var valor = document.getElementById("tel").attributes[0].ownerElement['value'];
    var retorno = valor.replace(/\D/g, "");
    retorno = retorno.replace(/^0/, "");
    if (retorno.length > 10) {
        retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length > 5) {
        if (retorno.length == 6 && event.code == "Backspace") {
            // necessário pois senão o "-" fica sempre voltando ao dar backspace
            return;
        }
        retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length > 2) {
        retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        if (retorno.length != 0) {
            retorno = retorno.replace(/^(\d*)/, "($1");
        }
    }
    document.getElementById("tel").attributes[0].ownerElement['value'] = retorno;
}