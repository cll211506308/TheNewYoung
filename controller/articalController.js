const ArticalDAO = require('../model/articalDAO');

module.exports = {
    getEssay: async (ctx, next) => {
        try {
            let reconmend = await ArticalDAO.getReconmendEssay();
            let Yang = await ArticalDAO.getYangEssay();
            let Diet = await ArticalDAO.getDietEssay();
            let Fit = await ArticalDAO.getFitEssay();
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
            let all = await ArticalDAO.getRelativeEssay(ctx.params.articalid);
            console.log(ctx.params.articalid);
            ctx.body = {'code':200,"message":"ok",data:all};
        }catch(e){
            ctx.body = {'code':500,"message":"没有获取到相应文章 ！！" + e.message, data:[]}
        }
    }


}