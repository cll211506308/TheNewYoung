const articalDAO = require('../model/articalDAO');
const classesDAO = require('../model/classesDAO');

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
            };
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

    //浏览量
    updateArticalPv: async (ctx, next) => {
        let all = ctx.params.articalId;
        let abc =await articalDAO.updateArticalPv(all);
        try{
            ctx.body = {"code":"200","message":"ok,成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },

    //分类
    getClasses: async (ctx, next) => {
        try {
            let fit1 = await classesDAO.getSomeFit1();
            let fit2 = await classesDAO.getSomeFit2();
            let fit3 = await classesDAO.getSomeFit3();
            let fit4 = await classesDAO.getSomeFit4();
            let fit5 = await classesDAO.getSomeFit5();
            let foods1 = await classesDAO.getSomeFoods1();
            let foods2 = await classesDAO.getSomeFoods2();
            let foods3 = await classesDAO.getSomeFoods3();
            let foods4 = await classesDAO.getSomeFoods4();
            let foods5 = await classesDAO.getSomeFoods5();
            let young1 = await classesDAO.getSomeYoungLife1();
            let young2 = await classesDAO.getSomeYoungLife2();
            let young3 = await classesDAO.getSomeYoungLife3();
            let young4 = await classesDAO.getSomeYoungLife4();
            let young5 = await classesDAO.getSomeYoungLife5();
            let all = {
                fit1:fit1, fit2:fit2, fit3:fit3, fit4:fit4, fit5:fit5,
                foods1:foods1, foods2:foods2, foods3:foods3, foods4:foods4, foods5:foods5,
                young1:young1, young2:young2, young3:young3, young4:young4, young5:young5,
            };
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应文章！！" + e.message, data: []};
        }
    },
}