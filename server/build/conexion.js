var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'TBD2',
});

connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connection established');
});

connection.end((err) => {
  /*The connection is terminated gracefully
   Ensures all remaining queries are executed
   Then sends a quit packet to the MySQL server.
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'TBD2'
   */
});
