const commentsDAO = require('../model/commentsDAO');

module.exports = {
    //添加评论
    addComment: async (ctx,next) => {
        try{
            let pId = ctx.request.body.postId;
            let uId = 1;
            let content = ctx.request.body.comComment;
            let cTime = new Date().toLocaleString();
            let all = {
                pId:pId,
                uId:uId,
                content:content,
                cTime:cTime
            }
            await commentsDAO.addComment(all)
            ctx.body = {'code':200,"message":"ok",data: all}
        }catch (e){
            ctx.body ={'code':500,"message":"添加失败！！" + e.message,data:[]}
        }
    },

    //删除评论
    deleteComment: async (ctx,next) => {
        try{
            let all = ctx.params.commentsId;
            let abc = await commentsDAO.deleteComment(all)
            ctx.body = {'code':200,"message":"ok",data: abc}
        }catch (e){
            ctx.body ={'code':500,"message":"添加失败！！" + e.message,data:[]}
        }
    },

    //查看评论
    getComment: async (ctx,next) => {
        try{
            let all = ctx.params.postId;
            console.log(ctx.params)
            console.log(all)
            let abc =await commentsDAO.getComment(all);
            ctx.body = {'code':200,"message":"ok",data:abc }
        }catch (e){
            ctx.body ={'code':500,"message":"添加失败！！" + e.message,data:[]}
        }
    }
}