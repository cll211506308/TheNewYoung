const DAO = require('../model/DAO');
class DB {
    //关注
    attention(userid,attentioneduserid){
        return DAO(" INSERT INTO attentions ( userid,attentioneduserid ) VALUES ( userid = ?,attentioneduserid = ?)",[userid,attentioneduserid])
    }
    //取消关注
    delAttention(userid,attentioneduserid){
        return DAO("delete from attentions where userid = ? and attentioneduserid = ? ",[userid,attentioneduserid])
    }

}
module.exports = new  DB();