var DAO = require('../model/DAO');

class DB {
    //获取用户信息
    getUsers(){
        return DAO('select * from users',[])
    }
    //注册个人信息
    setUp(users){
        return DAO('insert into users (username,userPwd,telephone,sex,birthday,registerTime) values (?,?,?,?,?,?)',
            [users.userName,users.userPwd,users.telephone,users.sex,users.birthday,users.registerTime])
    }
    // 获取用户名
    getUserName(userid){
         return DAO("select username from users where userId  = ?",[userid])
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
    //修改个人信息（昵称，头像，个性签名）
    updateusers(userid){
        return DAO('UPDATE users  SET userName=?,headPic=?,autograph=? where userId = ?;', [userid])
    }
}
module.exports = new  DB();