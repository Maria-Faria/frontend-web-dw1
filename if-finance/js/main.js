//console.log('Arquivo JS externo');

//let cria uma variável (não permite recriar uma mesma variável no bloco)
//var cria uma variável (permite recriar uma mesma variável no bloco)
//const cria uma constante

//exemplo escopo de bloco
/*let nome = 'Maria';

if (true) {
    let nome = 'Pedro';
    console.log(nome);
}

console.log(nome);

//tipos de variáveis

let var2 = `${nome} Eduarda`; //String "Maria", 'Maria', `Maria`
var2 = 10; //Numbers
var2 = 34.5; //Float
var2 = true; //boolean
var2 = [12, 54, 34]; //array
var2 = {nome: "Maria", idade: 20}; //objeto

console.log(var2);

//estruturas condicionais
if(nome == "Maria") {


}else {

}

if(nome == "Maria") {


}else if(nome == "Pedro") {


}else if(nome == "Tiago") {


}else if(nome == "Camila") {


}else {


}

//estruturas de repetição

for(let i = 0; i < 10; i++) {

}

const valor1 = 10;
const valor2 = "10";

if(valor1 === valor2) {

}

//Condição ternária
const nomeCompleto = true;
const meuNome = nomeCompleto ? "Maria Eduarda" : "Maria"; //condicao ? T : F

/*function soma (valor1, valor2) {
    return valor1 + valor2;
}*/

/*const soma = (valor1, valor2) => {
    return valor1 + valor2;
}*/

/*const soma = function (valor1, valor2) {
    return valor1 + valor2;
}*/

/*const mostrar = 'idade';

const user = {
    nome: "Maria",
    idade: 20,
    email: "maria.eduarda@gmail.com",
    endereco: {
        rua: "Av. Bahia",
        numero: 222,
        bairro: "Indaiá"
    },
    soma: soma,
    consoles: ['PS5', 'Switch', {teste: 10, valor: 50}]
};

user.email = "mariaeduarda@gmail.com";
user.nomeDaMae = "Angela";

console.log(user['email']); //user.email
console.log(user.endereco.bairro);

console.log(user.soma(3, 4));
console.log(user.consoles[2].valor);
console.log(user[mostrar]);

console.error('Deu ruim')
console.log(user.nomeDaMae);
console.log(user);

/*const newUser = {
    ...user, 
    endereco: {
        rua: "Av. Bahia",
        numero: 20,
        bairro: "Indaiá"
    }
}*/

/*const newUser = {
    ...user.endereco, rua: "Av Mato Grosso"
}

console.log(newUser);*/

let cont = 0;
const allStocks = [
    {
        bolsa: "NASDAQ",
        codigo: "APPL",
        empresa: "Apple Inc",
        valor: 25080,
        variacao: 0.35,
        nAcoes: 40
    },

    {
        bolsa: "NASDAQ",
        codigo: "MSFT",
        empresa: "Microsoft Corp",
        valor: 50234,
        variacao: -1.5,
        nAcoes: 20
    },

    {
        bolsa: "NASDAQ",
        codigo: "META",
        empresa: "Meta Platforms Inc",
        valor: 43262,
        variacao: 2.3,
        nAcoes: 5
    },

    {
        bolsa: "NASDAQ",
        codigo: "GOOGL",
        empresa: "Alphabet Inc Class A",
        valor: 16615,
        variacao: -0.78,
        nAcoes: 5
    },

    {
        bolsa: "NASDAQ",
        codigo: "NVIDIA",
        empresa: "Meta Platforms Inc",
        valor: 43262,
        variacao: 2.3,
        nAcoes: 5
    }
];

console.log(allStocks);

function addCard(stock) {
    const listaCards = document.querySelector('#cards');
    listaCards.innerHTML = listaCards.innerHTML + `
        <div class="card-ticker">

            <header>
                <h2><span>${stock.bolsa}:</span> ${stock.codigo}</h2>
                <h1>${stock.empresa}</h1>
            </header>

            <main>
                <p>R$ ${realFormat((+stock.valor/100))}</p>

                <span ${stock.variacao < 0 ? 'style="background: #FF0000;"' : ''}>${stock.variacao < 0 ? '▼' : '▲'} ${stock.variacao}%</span>
                
                <span> R$ ${realFormat((+stock.valor / 100) * (stock.variacao / 100))}</span>
            </main>

            <footer>
                <div>
                    <p>${stock.nAcoes}</p>
                    <span>Ações</span>
                </div>

                <div>
                    <p>R$ ${realFormat(stock.nAcoes * (+stock.valor / 100))}</p>
                    <span>Posição</span>
                </div>
            </footer>

        </div>`
}

function addTable(stock, i) {
    const table = document.querySelector('#new-table');
    table.innerHTML = table.innerHTML + `
        <tr>
            <td>${stock.bolsa}</td>
            <td>${stock.codigo}</td>
            <td>${stock.empresa}</td>
            <td>${stock.valor}</td>
            <td>${stock.variacao}</td>
            <td>${stock.nAcoes}</td>
            <td>R$ ${realFormat(stock.nAcoes * (+stock.valor / 100))}</td>
        </tr>
    `
}

function realFormat(valor) {
    return valor.toFixed(2).toString().replace('.', ',');
}

function loadCards() {
    /*for(let i = 0; i < allStocks.length; i++) {
        addCard(allStocks[i]);
    }*/

    allStocks.map(stock => addCard(stock));

    //allStocks.forEach(stock => addCard(stock));

    //allStocks.map(addCard);

}

function loadTable() {
    let bolsas = [];
    allStocks.map((stock, i) => bolsas.push({'bolsa': stock.bolsa, 'index': i}))
    
    allStocks.map((stock, i) => addTable(stock, i));
}


