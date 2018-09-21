const DAO = require('../model/DAO');

class DB{

    //发表评论
    addComment(id){
        return DAO('insert into comments(postId,userId,comContent,comTime) values (?,?,?,?) ',
            [id.pId,id.uId,id.content,id.cTime])
    }
    //删除评论
    deleteComment(id){
        return DAO('delete from comments where commentsId = ?',[id])
    }
    //查看帖子所有评论
    getComment(id){
        return DAO('select * from comments where postId = ?',[id])
    }
}

module.exports = new DB();