var DAO = require('../model/DAO');

class DB {
    // 获取用户名
    getUserName(userid){
         return DAO("select username from users where userid  = ?",[userid])
    }
    // 获取头像
    getUserheadpic(userid){
        return DAO("select headpic from users where userid  = ?",[userid])
    }

}
module.exports = new  DB();