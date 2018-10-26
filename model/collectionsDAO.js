const DAO = require('../model/DAO');

class DB{
    //查询是否已收藏
    getCol(userId,articalId){
        return DAO("select * from collections where userId = ? and articalId = ? ",[userId,articalId])
    }
    //添加收藏
    addCollection(keys){
        return DAO("insert into collections(userId,articalId,colTime) values (?,?,?)",
            [keys.userId,keys.articalId,keys.colTime])
    }
    //取消收藏
    delCollection(userId,articalId){
        return DAO("delete from collections where userId = ? and articalId = ?",[userId,articalId])
    }
    //获取用户收藏的文章
    getUserCollections(userid){
        return DAO("select title,date_format(colTime,\"%Y-%m-%d  %H:%i:%s\") as colTime,artical.articalId from collections,artical where collections.articalId = artical.articalId and collections.userId = ?",[userid])
    }
    //获取用户发布过的文章
    getUserPublish(userid){
        return DAO("select title,articalLabel from artical where userId = ?",[userid])
    }
}

module.exports = new DB();