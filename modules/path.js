const path = require("path");

//Nome do arquivo atual

console.log(path.basename(__filename));

//Diretorio atual
console.log(path.dirname(__filename));

//Extensão do arquivo

console.log(path.extname(__filename));

//cria objeto path

console.log(path.parse(__filename));

//Juntar caminhos

console.log(path.join(__dirname, "teste", "teste.html"));
