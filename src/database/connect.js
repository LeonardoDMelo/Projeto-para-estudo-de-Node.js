const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.g1lpbof.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar a um banco de Dados:",
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;
