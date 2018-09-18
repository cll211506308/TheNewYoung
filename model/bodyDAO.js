var DAO = require('../model/DAO');

class DB{
    //显示用户的体重
    getUserWeight:async (ctx, next) => {
    let userDetails =  await usersDAO. getUserWeight(ctx.params.userId);
    try{
    ctx.body = {"code":"200","message":"ok,体重，时间：",data:userDetails};
}catch (e) {
    ctx.body = {"code":"500","message":"服务器错误",data:[]};
}
}}
module.exports = new  DB();