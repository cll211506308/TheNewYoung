var DAO = require('../model/DAO');
class DB {
    //根据体质类型去建议库提取相应建议
    getUsersuggestions(bodyclass){
        return DAO("select sugcontent from bigsuggestions where bodyclass = ? ",[bodyclass])
    }
    // 将提取的建议插入用户的建议表

    //显示建议
    showUsersuggestions(userid){
        return DAO("select sugcontent from bigsuggestions,suggestions where bigsuggestions.bigsuggestionsid = suggestions.bigsuggestionsid and suggestions.userid = 1 ",[userid])
    }
}
module.exports = new  DB();