var mysql = require('mysql')
var dbconfig = require('../model/dbconfig')

function DAO(sql,sqlparams,callback) {
    var connection = mysql.createConnection(dbconfig.options)
    connection.connect(function (err) {
        if(err){
            console.log('数据库连接失败！' + err.message)
            callback(null)
            return;
        }
        connection.query(sql,sqlparams,function(e,data){
            if(e){
                console.log('数据库操作失败！' + e.message)
                callback(null)
                return;
            }
            callback(data)
            connection.end()
        })

    })
}
module.exports.DB = DAO;