var db_contatos_inicial = {
    "data": [
        {
            "nome": "lorrayne oliveira",
            "email": "Sincere@april.biz",
            "nomeDoPet": "Lucky",
            "cidade": "Belo Horizonte",
            "raça": "Golden Retriever",
            "telefone": "1-770-736-8031",
        },
        {
            "nome": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "nomeDoPet": "Simba",
            "cidade": "Betim",
            "raça": "Bulldog",
            "telefone": "010-692-6593",
        },
        {
            "nome": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "nomeDoPet": "Mike",
            "cidade": "Rio de Janeiro",
            "raça": "Foxhound",
            "telefone": "1-463-123-4447",
        },
        {
            "nome": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "nomeDoPet": "Amora",
            "cidade": "Betim",
            "raça": "Husky",
            "telefone": "493-170-9623 x156",
        },
        {
            "nome": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "nomeDoPet": "Cacau",
            "cidade": "São Paulo",
            "raça": "Pinscher",
            "telefone": "(254)954-1289",
        },
        {
            "nome": "Mrs. Dennis Schulist",
            "email": "Karley_Dach@jasper.info",
            "nomeDoPet": "Scooby",
            "cidade": "Rio de Janeiro",
            "raça": "Vira-Lata",
            "telefone": "1-477-935-8478",
        },
        {
            "nome": "Kurtis Weissnat",
            "email": "Telly.Hoeger@billy.biz",
            "nomeDoPet": "Boris",
            "cidade": "Belo Horizonte",
            "raça": "Yorkshire Terrier",
            "telefone": "210.067.6132",
        },
        {
            "nome": "Nicholas Runolfsdottir V",
            "email": "Sherwood@rosamond.me",
            "nomeDoPet": "Maya",
            "cidade": "Betim",
            "raça": "Chihuahua",
            "telefone": "586.493.6943",
        },
        {
            "nome": "Laura",
            "email": "Laura@gmail.com",
            "nomeDoPet": "Lolla",
            "cidade": "Belo Horizonte",
            "raça": "Chow Chow",
            "telefone": "(775)976-6794",
        },
        {
            "nome": "Clementina DuBuque",
            "email": "Rey.Padberg@karina.biz",
            "nomeDoPet": "Zeus",
            "cidade": "São Paulo",
            "raça": "Akita Inu",
            "telefone": "024-648-3804",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};