var DAO = require('../model/DAO');

class DB {
    // 获取用户名
    getUserName(userid){
         return DAO("select username from users where userid  = ?",[userid])
    }
    // 获取头像
    getUserheadpic(userid){
        return DAO("select headpic from users where userid  = ?",[userid])
    }
    //获取用户个性签名
    getUserautograph(userid){
        return DAO("select autograph from users where userid  = ?",[userid])
    }
    //获取用户收藏的全部文章
    getUserCollections(userid){
        return DAO("select title,time from collections,artical where collections.articalid = artical.articalid and collections.userid = ?",[userid])
    }
/*    //增加收藏文章
    AddCollections(){
        return DAO("insert into collections( articalid ,time) values (?,?)",[userid])
    }*/

   //获取用户发布过的文章
    getUserPublish(userid){
        return DAO("select title form artical where userid = ?",[userid])
    }
}
module.exports = new  DB();