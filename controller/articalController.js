const articalDAO = require('../model/articalDAO');

module.exports = {
    getEssay: async (ctx, next) => {
        try {
            let reconmend = await articalDAO.getReconmendEssay();
            let Yang = await articalDAO.getYangEssay();
            let Diet = await articalDAO.getDietEssay();
            let Fit = await articalDAO.getFitEssay();
            let all = {
                reconmend:reconmend,
                Yang: Yang,
                Diet: Diet,
                Fit: Fit
            }
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
    getRelativeEssay: async (ctx,next) => {
        try{
            let all = await articalDAO.getRelativeEssay(ctx.params.articalId);
            ctx.body = {'code':200,"message":"ok",data:all};
        }catch(e){
            ctx.body = {'code':500,"message":"没有获取到相应文章 ！！" + e.message, data:[]}
        }
    },
    searchEssay: async (ctx,next) =>{
        try{
            let search1 = await articalDAO.searchEssay(ctx.params.keys);
            let search2 = await articalDAO.searchPost(ctx.params.keys);
            console.log(search2)
            let all = {
                search1:search1,
                search2:search2
            }
            ctx.body ={'code':200,"message":"ok",data:all};
        }catch(e){
            ctx.body = {'code':500,"message":"没有获取到相应文章 ！！" + e.message, data:[]}
        }
    },
    // 删除文章(CLL)
    deleteartical:async (ctx, next) => {
        let userDetails =  await articalDAO.deleteArtical(ctx.params.articalId);
        try{
            ctx.body = {"code":"200","message":"ok,删除成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },

    //营养美食文章
    getDietEssay: async (ctx, next) => {
        try {
            let Diet = await articalDAO.getDietEssay();
            ctx.body = {'code': 200, "message": "ok", data: Diet};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
    //健身课堂文章
    getFitEssay: async (ctx, next) => {
        try {
            let Fit = await articalDAO.getFitEssay();
            ctx.body = {'code': 200, "message": "ok", data: Fit};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
    //养生堂文章
    getYangEssay: async (ctx, next) => {
        try {
            let Yang = await articalDAO.getYangEssay();
            ctx.body = {'code': 200, "message": "ok", data: Yang};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
    //营养美食热门文章排行
    getDietRank: async (ctx, next) => {
        try {
            let DRank = await articalDAO.getDietRank();
            ctx.body = {'code': 200, "message": "ok", data: DRank};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
    //健身课堂热门文章排行
    getFitRank: async (ctx, next) => {
        try {
            let FRank = await articalDAO.getFitRank();
            ctx.body = {'code': 200, "message": "ok", data: FRank};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
    //养生堂热门文章排行
    getYangRank: async (ctx, next) => {
        try {
            let YRank = await articalDAO.getYangRank();
            ctx.body = {'code': 200, "message": "ok", data: YRank};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
}