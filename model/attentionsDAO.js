const DAO = require('../model/DAO');
class DB {
    //查询是否已关注
    getAtt(userid,attentioneduserid){
        return DAO("select * from attentions where userId = ? and attentionedUserId = ? ",[userid,attentioneduserid])
    }
    //关注
    attention(userid,attentioneduserid,atttime){
        return DAO(" insert into attentions (userId,attentionedUserId,attTime) values ( ?,?,?)",[userid,attentioneduserid,atttime])
    }
    //取消关注
    delAttention(userid,attentioneduserid){
        return DAO("delete from attentions where userId = ? and attentionedUserId = ? ",[userid,attentioneduserid])
    }

}
module.exports = new  DB();