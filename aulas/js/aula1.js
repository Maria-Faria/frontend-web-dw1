const stock = 
    {
        bolsa: "NASDAQ",
        codigo: "APPL",
        empresa: "Apple Inc",
        valor: 25080,
        variacao: 0.35,
        nAcoes: 40
    }



console.log(stock);

/*const bolsa = stock.bolsa;
const codigo = stock.codigo;
const empresa = stock.empresa;

console.log(bolsa, codigo, empresa);*/

const {bolsa, codigo: ticker, empresa} = stock; //desestrutura e cria uma variável