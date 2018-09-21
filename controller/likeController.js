const likeDAO = require('../model/likeDAO');

module.exports = {
    //点赞帖子
    addLike: async (ctx, next) => {
        try {
            let aId = ctx.params.articalId;
            let uId = 1;
            let likeTime = new Date();
            let all = {
                aId: aId,
                uId: uId,
                likeTime: likeTime
            }
            await likeDAO.addLike(all);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "点赞失败！！" + e.message, data: []};
        }
    },

    //取消点赞
    cancelLike: async (ctx, next) => {
        try {
            let aId = ctx.params.articalId;
            let uId = 2;
            let all = {
                aId : aId,
                uId : uId
            };
            console.log(aId)
            await likeDAO.cancelLike(all);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "取消失败！！" + e.message,data:[]}
        }
    }
}