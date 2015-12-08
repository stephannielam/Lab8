var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT u.name AS name, j.compname AS Company_Name, u.description AS Description ' +
        'FROM UserJobView u JOIN jobs j ON j.name = u.name;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}
