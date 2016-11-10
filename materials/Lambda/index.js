var mysql = require('mysql');

exports.handler = function(event,context,callback){

    var connection = mysql.createConnection({
      host     : '<<< RDS Endpoint >>>',
      user     : '<<< RDS Username >>>',
      password : '<<< RDS Password >>>',
      database : '<<< RDS DB Name >>>'
    });

    connection.connect();
    
    connection.query('UPDATE data SET value = value + 1 WHERE name = "counter";');

    connection.query('SELECT value FROM data WHERE name = "counter";', function(err, rows, fields) {
      if (err) throw err;
      callback(null, rows[0]['value'] );

    });
    
    connection.end(function(err) {
      context.done();
    });

}


