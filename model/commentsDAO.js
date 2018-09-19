const DAO = require('../model/DAO');

class DB{





    //发表评论
    insertComment(id){
        return DAO('insert into comments set commentsid=?,postid=?,userid=?,comcontent=?,time=?',[id])
    }
    //删除评论
    deleteComment(id){
        return DAO('delete from comments where id = ${id}',[id])
    }
    //查看帖子所有评论
    findComment(id){
        return DAO('select * from comments where id = ${id}',[id])
    }
}

module.exports = new DB();