const usersDAO = require('../model/bodyDAO');
module.exports = {
//显示用户的体重
    getUserWeight:async (ctx, next) => {
        let userDetails =  await usersDAO. getUserWeight(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,体重，时间：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //显示用户的体质类型
    getUserbodyclass:async (ctx, next) => {
        let userDetails =  await usersDAO. getUserbodyclass(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,体质，时间：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    }
}
