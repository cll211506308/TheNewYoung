const postDAO = require('../model/postDAO');

module.exports = {
    getPost: async (ctx, next) => {
        try {
            let reconmend = await postDAO.getReconmendPost();
            let Yang = await postDAO.getYangPost();
            let Diet = await postDAO.getDietPost();
            let Fit = await postDAO.getFitPost();
            let all = {
                reconmend:reconmend,
                Yang: Yang,
                Diet: Diet,
                Fit: Fit
            }
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应帖子！！" + e.message, data: []};
        }

    },
    getRelativePost: async (ctx,next) => {
        try{
            let all = await postDAO.getRelativePost(ctx.params.postid);
            ctx.body = {'code':200,"message":"ok",data:all};
        }catch(e){
            ctx.body = {'code':500,"message":"没有获取到相应帖子 ！！" + e.message, data:[]}
        }
    }
}