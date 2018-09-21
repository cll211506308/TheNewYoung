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
    }


}