var DAO = require('../model/DAO');

class DB {
    //获取用户登录信息
    login(user){
        return DAO('select userid from users where userName = ? and userPwd = ?',[user.userName,user.userPwd])
    }
    //注册个人信息
    setUp(users){
        return DAO('insert into users (userName,userPwd,registerTime,headPic) values (?,?,?,?)',
            [users.userName,users.userPwd,users.registerTime,users.headPic])
    }
    //判断用户名是否存在
    judgeName(userName) {
        return DAO('select userId from users where userName = ?',[userName])
    }
    // 获取用户名
    getUserName(userid){
        return DAO("select * from users where userId  = ?",[userid])
    }
    // 获取用户关注的人
    getUserAtt(userid){
        return DAO("select attentionedUserId from attentions where userId  = ?",[userid])
    }
    // 获取头像
    getUserheadpic(userid){
        return DAO("select headPic from users where userId  = ?",[userid])
    }
    //获取用户个性签名
    getUserautograph(userid){
        return DAO("select autograph from users where userId  = ?",[userid])
    }
    //获取用户身份
    getUseridentity(userid){
        return DAO("select isExpert from users where userId  = ?",[userid])
    }
    /*   // 认证用户专家身份
        setIdentity(userid){
            return DAO('UPDATE users  SET  ;', [userid])
        }*/
    //修改个人信息（不改头像）
    updateusers(user){
        return DAO('UPDATE users  SET userName=?,autograph=?,userPwd=?,sex=? where userId = ?;', [user.userName,user.autograph,user.userPwd,user.sex,user.userId])
    }
    //修改个人信息（改头像）
    upTouxiang(users){
        return DAO('UPDATE users  SET headPic=?,userName=?,autograph=?,userPwd=?,sex=? where userId = ?;', [users.headPic,users.userName,users.autograph,users.userPwd,users.sex,users.userId])
    }
    //获取用户总数
    findUsersCount(){
        return DAO('select count(*) as count from users',[])
    }

}
module.exports = new  DB();