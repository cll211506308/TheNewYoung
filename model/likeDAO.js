const DAO = require('../model/DAO');

class DB{
    //帖子点赞
    addLike(id){
        return DAO('insert into userlike values (?,?,?)',[id.aId,id.uId,id.likeTime])
    }
    //取消帖子点赞
    cancelLike(id){
        return DAO('delete from userlike where likeId = ? and userId = ?',[id.aId,id.uId])
    }
}

module.exports = new DB();