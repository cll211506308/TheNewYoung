var DAO = require('../model/DAO');

class DB {
    //获取用户信息
    getUsers(){
        return DAO('select * from users',[])
    }
    //注册个人信息
    setUp(users){
        return DAO('insert into users (username,userpassword,telephone,sex,birthday,registertime) values (?,?,?,?,?,?)',
            [users.userName,users.userPwd,users.telephone,users.sex,users.birthday,users.registerTime])
    }

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
   //获取用户发布过的文章
    getUserPublish(userid){
        return DAO("select title from artical where userid = ?",[userid])
    }

}
module.exports = new  DB();