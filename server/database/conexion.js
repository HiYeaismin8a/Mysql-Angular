const mysql = require("mysql");


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'TBD2',
});

const getConnection = () => {
  console.log('Connection will be established');
  return connection;
};

module.exports = {
  getConnection
};
