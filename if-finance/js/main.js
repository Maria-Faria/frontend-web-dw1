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

function addCard() {
    const listaCards = document.querySelector('#cards');
    listaCards.innerHTML = listaCards.innerHTML + `
    <div class="card-ticker">

                    <header>
                        <h2><span>NASDAQ:</span> AAPL</h2>
                        <h1>Apple Inc</h1>
                    </header>

                    <main>
                        <p>R$ 250,80</p>
                        <span>▲ 0,35%</span><span> R$0,60</span>
                    </main>

                    <footer>
                        <div>
                            <p>40</p>
                            <span>Ações</span>
                        </div>

                        <div>
                            <p>R$ 34853,45</p>
                            <span>Posição</span>
                        </div>
                    </footer>

                </div>`
}