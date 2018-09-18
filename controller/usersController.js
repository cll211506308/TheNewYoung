const usersDAO = require('../model/usersDAO');
module.exports = {
    // 用户名
    getUserName: async (ctx, next) => {
        let userDetails =  await usersDAO.getUserName(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,用户名",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //头像
    getUserheadpic: async (ctx, next) => {
        let userDetails =  await usersDAO.getUserheadpic(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,头像",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //个性签名
    getUserautograph: async (ctx, next) => {
        let userDetails =  await usersDAO.getUserautograph(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,签名",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //获取收藏文章
    getUserCollections:async (ctx, next) => {
        let userDetails =  await usersDAO.getUserCollections(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,文章标题：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //显示用户发布过的文章
    getUserPublish:async (ctx, next) => {
        let userDetails =  await usersDAO. getUserPublish(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,文章标题：",data:userDetails};
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
    },
    //显示用户的体重
    getUserbodyclass:async (ctx, next) => {
        let userDetails =  await usersDAO. getUserbodyclass(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,体质，时间：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //从建议库提取给予用户的建议
    getUsersuggestions:async (ctx, next) => {
        let userDetails =  await usersDAO. getUsersuggestions(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,建议：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },

}