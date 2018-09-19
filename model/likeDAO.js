const DAO = require('../model/DAO');

class DB{
    //点赞
    insertLike(id){
        return DAO('insert into userlike set likeid=?,userid=?,time=?',[id])
    }
    //取消点赞
    deleteLike(id){
        return DAO('delete from userlike where id = ${id}',[id])
    }
}

module.exports = new DB();