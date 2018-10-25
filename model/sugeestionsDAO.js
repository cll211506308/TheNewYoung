var DAO = require('../model/DAO');
class DB {
    //根据体质类型去建议库提取相应建议
    getUsersuggestions(bodyclass){
        return DAO("select sugcontent from bigsuggestions where bodyclass = ? ",[bodyclass])
    }
    //显示建议
    showUsersuggestions(userid){
        return DAO("select suggestions from body where userid = ? order by putTime desc",[userid])
    }
}
module.exports = new  DB();