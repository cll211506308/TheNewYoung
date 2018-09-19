var DAO = require('../model/DAO');

class DB {
    //获取用户的体重
    getUserWeight(userid){
        return DAO("select userweight,time from body where userid = ?",[userid])
    }
    //显示用户体质
    getUserbodyclass(userid){
        return DAO("select bodyclass,time from body where userid = ?",[userid])
    }
    //用户填写调查问卷（将用户身高，体重，体质类型存入体质表）

}
module.exports = new  DB();