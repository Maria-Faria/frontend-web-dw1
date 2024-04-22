console.log('Arquivo JS externo');

//let cria uma variável (não permite recriar uma mesma variável no bloco)
//var cria uma variável (permite recriar uma mesma variável no bloco)
//const cria uma constante

//exemplo escopo de bloco
let nome = 'Maria';

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