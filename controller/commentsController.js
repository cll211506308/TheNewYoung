const commentsDAO = require('../model/commentsDAO');

module.exports = {
    //添加评论
    addComment: async (ctx,next) => {
        console.log(new Date().toLocaleString())
        try{
            let com = {};
            com.comTime = new Date();
            com.postId = ctx.query.postid;
            com.userId = ctx.query.userid;
            com.comContent = ctx.query.comcontent;
            await commentsDAO.addComment(com)
            ctx.body = {'code':200,"message":"ok",data: []}
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
            let abc =await commentsDAO.getComment(all);
            ctx.body = {'code':200,"message":"ok",data:abc }
        }catch (e){
            ctx.body ={'code':500,"message":"添加失败！！" + e.message,data:[]}
        }
    }
}