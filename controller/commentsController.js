const postDAO = require('../model/commentsDAO');
module.exports = {
    //发表评论
    insertComment: async (ctx, next) => {

    },
    //删除评论
    deleteComment:async (ctx, next) => {
        let userDetails =  await commentsDAO.deleteComment(ctx.params.commentsId);
        try{
            ctx.body = {"code":"200","message":"ok,删除成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //查看帖子所有评论
    findComment: async (ctx, next) => {
        try {
            let all = await postDAO.findComment(ctx, next);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到帖子 ！！" + e.message, data: []}
        }
    }
}