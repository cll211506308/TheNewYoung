const usersDAO = require('../model/attentionsDAO');
module.exports = {
//关注
    attention:async (ctx, next) => {
        let all =  await usersDAO. attention(ctx.params.userId,ctx.params.attentioneduserid);
        try{
            ctx.body = {"code":"200","message":"ok,关注成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //取消关注
    delAttention:async (ctx, next) => {
        let all =  await usersDAO. delAttention(ctx.params.userId,ctx.params.attentioneduserid);
        try{
            ctx.body = {"code":"200","message":"取消关注成功：",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    }
}
