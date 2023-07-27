module.exports = { createDatabase, createTable,createTable2 };
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "mysql"
});


function createDatabase(databaseName) {
  const sqlQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
  connection.query(sqlQuery, function (err){
    if (err) throw err;
    console.log(`Database created successfully`);
  });
}

function createTable(daatabasename) {
  const sqlQuery = `
    CREATE TABLE ${databasename}.employees (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255),
      department VARCHAR(100),
      salary DECIMAL(10, 2)
    )
  `;
  connection.query(sqlQuery, function(err) {
    if (err) throw err;
    console.log(`Table created successfully`);
  });
}
function createTable2(daatabasename) {
    const sqlQuery = `
      CREATE TABLE employees (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255),
        department VARCHAR(100),
        salary DECIMAL(10, 2)
      )
    `;
    connection2.query(sqlQuery, function(err) {
      if (err) throw err;
      console.log(`Table created successfully`);
    });
  }
function connectio2(db){
  const connection2 = mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "mysql",
    database:`${db}`
});
}