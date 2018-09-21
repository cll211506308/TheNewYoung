const postDAO = require('../model/postDAO');

module.exports = {
    getPost: async (ctx, next) => {
        try {
            let reconmend = await postDAO.getReconmendPost();
            let Yang = await postDAO.getYangPost();
            let Diet = await postDAO.getDietPost();
            let Fit = await postDAO.getFitPost();
            let all = {
                reconmend: reconmend,
                Yang: Yang,
                Diet: Diet,
                Fit: Fit
            }
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应帖子！！" + e.message, data: []};
        }

    },
    getRelativePost: async (ctx, next) => {
        try {
            let all = await postDAO.getRelativePost(ctx.params.postid);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到相应帖子 ！！" + e.message, data: []}
        }
    },
    //获取帖子总数
    findPostCount: async (ctx, next) => {
        try {
            let all = await postDAO.findPostCount(ctx, next);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到帖子 ！！" + e.message, data: []}
        }
    },


    //查询所有帖子
    findPost: async (ctx, next) => {
        try {
            let all = await postDAO.findPost(ctx, next);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到帖子 ！！" + e.message, data: []}
        }
    },
    // 发表帖子
    insertPost: async (ctx, next) => {

    },
    //删除帖子
    eletePost:async (ctx, next) => {
        let userDetails =  await postDAO.eletePost(ctx.params.postlId);
        try{
            ctx.body = {"code":"200","message":"ok,删除成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },

    //浏览量
    updatePostPv: async (ctx, next) => {
        let updatePostPv =  await postDAO.updatePostPv(ctx.params.postlId);
        try{
            ctx.body = {"code":"200","message":"ok,成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },

    //查看关注人的帖子
    getLikeuserPost: async (ctx, next) => {
        try {
            let all = await postDAO.getLikeuserPost(ctx, next);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到帖子 ！！" + e.message, data: []}
        }

    }
}