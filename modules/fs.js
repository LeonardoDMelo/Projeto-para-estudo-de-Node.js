const { error } = require("console");
const fs = require("fs");
const path = require("path");

//Criando pasta

fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

//Criar arquivo

fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node! ",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");

    //Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "hello World",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo modificado com sucesso!");
      }
    );

    //Ler aquivos

    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log(error);
        }

        console.log(data);
      }
    );
  }
);
