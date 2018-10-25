var DAO = require('../model/DAO');

class DB {
    //获取用户的体重
    getUserWeight(userid){
        return DAO("select userweight,puttime from body where userid = ?",[userid])
    }
    //显示用户体质
    getUserbodyclass(userid){
        return DAO("select bodyclass,bodyclassContent from body where userid = ? order by putTime desc",[userid])
    }
    //用户填写调查问卷（将用户身高，体重，体质类型存入体质表）
    insertbodydatas(datas){
        return DAO('insert into body(userId,putTime,userHeight,userWeight,usertotal,bodyClass,bodyclassContent,BMI,suggestions) values(?,?,?,?,?,?,?,?,?)',
            [ datas.userId,datas.putTime,datas.userHeight,datas.userWeight,datas.usertotal,datas.bodyClass,datas.bodyclassContent,datas.BMI,datas.suggestions])
    }
}
module.exports = new  DB();