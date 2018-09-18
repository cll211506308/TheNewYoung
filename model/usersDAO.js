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

   //获取用户发布过的文章
    getUserPublish(userid){
        return DAO("select title from artical where userid = ?",[userid])
    }
    //获取用户的体重
    getUserWeight(userid){
        return DAO("select userweight,time from body where userid = ?",[userid])
    }
    //显示用户体质
    getUserbodyclass(userid){
        return DAO("select bodyclass,time from body where userid = ?",[userid])
    }
    //1.用户填写调查问卷（将用户身高，体重，体质类型存入体质表）
    //2.根据体质类型去建议库提取相应建议
    getUsersuggestions(bodyclass){
        return DAO("select sugcontent from bigsuggestions where bodyclass = ? ",[bodyclass])
    }
    //3.将提取的建议插入用户的建议表
    //4.页面查询建议表的建议显示
}
module.exports = new  DB();