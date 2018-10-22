const DAO = require('../model/DAO');

class DB{

    //发表评论
    addComment(com){
        return DAO('insert into comments(postId,userId,comContent,comTime) values (?,?,?,?)',[com.postId,com.userId,com.comContent,com.comTime])
    }
    //删除评论
    deleteComment(id){
        return DAO('delete from comments where commentsId = ?',[id])
    }
    //查看帖子所有评论
    getComment(id){
        return DAO('select * from comments,users where comments.userId = users.userId and postId = ?',[id])
    }
}

module.exports = new DB();