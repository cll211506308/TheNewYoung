const attentionsDAO = require('../model/attentionsDAO');
module.exports = {
    //查询是否已经关注
 getAtt:async (ctx, next) => {
     let all =  await attentionsDAO. getAtt(ctx.query.userId,ctx.query.attentioneduserid);
     try{
         ctx.body = {"code":"200","message":"ok,关注成功",data:all};
     }catch (e) {
         ctx.body = {"code":"500","message":"服务器错误",data:[]};
     }
 },
//关注
    attention:async (ctx, next) => {
        let all =  await attentionsDAO. attention(ctx.query.userId,ctx.query.attentioneduserid,new Date());
        try{
            ctx.body = {"code":"200","message":"ok,关注成功",data:all};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //取消关注
    delAttention:async (ctx, next) => {
     console.log(ctx.query.userId + ctx.query.attentioneduserid)
        let all =  await attentionsDAO. delAttention(ctx.query.userId,ctx.query.attentioneduserid);
        try{
            ctx.body = {"code":"200","message":"取消关注成功：",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    }
}
