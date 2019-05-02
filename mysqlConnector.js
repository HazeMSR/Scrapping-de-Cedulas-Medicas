const mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "sam",
  password: "123Sam456",

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
