//const { Person } = require("./persons");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

//require("./modules/fs");
//require("./modules/http");
require("./modules/express");

//const person = new Person("Leonardo");
