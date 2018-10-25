const collectionsDAO = require('../model/collectionsDAO');

module.exports = {
    //查询是否已经收藏
    getCol:async (ctx, next) => {
        let all =  await collectionsDAO. getCol(ctx.query.userId,ctx.query.articalId);
        try{
            ctx.body = {"code":"200","message":"ok,关注成功",data:all};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //添加收藏
    addCollection:async (ctx,next)=>{
        let userId = ctx.query.userId;
        let articalId = ctx.query.articalId;
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
        let all =  await collectionsDAO. delCollection(ctx.query.userId,ctx.query.articalId);
        try{
            ctx.body = {"code":"200","message":"取消关注成功：",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
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