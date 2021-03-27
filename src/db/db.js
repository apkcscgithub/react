const mysql = require("mysql");
const cofg = require("../confg/confg");
const db = mysql.createConnection(cofg.conne);
module.exports = db;