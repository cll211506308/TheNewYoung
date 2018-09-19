const mysql = require("mysql");
const config = require("./dbConfig");
const pool = mysql.createPool(config.options);
function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    })
}
module.exports = query;