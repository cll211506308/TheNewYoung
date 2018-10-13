const collectionsDAO = require('../model/collectionsDAO');

module.exports = {
    //添加收藏
    addCollection:async (ctx,next)=>{
        let userId = ctx.request.body.userId;
        let articalId = ctx.request.body.articalId;
        let colTime = new Date();
        let collections = {
            userId:userId,
            articalId:articalId,
            colTime:colTime
        }
        try {
            let addColl = await collectionsDAO.addCollection(collections);
            ctx.body = {"code":200,"message":"收藏成功",data:addColl}
        }catch (err) {
            ctx.body = {"code":500,"message":err.message,data:[]}
        }
    },
    //取消收藏
    delCollection:async (ctx,next)=>{
        try {
            let cancelCol = await collectionsDAO.delCollection(ctx.request.body.collectionsId);
            ctx.body = {"code":200,"message":"取消成功",data:[]}
        }catch (err) {
            ctx.body = {"code":500,"message":err.message,data:[]}
        }
    },
    //获取用户收藏的文章
    getUserCollections:async (ctx, next) => {
        let userDetails =  await collectionsDAO.getUserCollections(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,文章标题：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //显示用户发布过的文章
    getUserPublish:async (ctx, next) => {
        let userDetails =  await collectionsDAO.getUserPublish(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,文章标题：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    }
}