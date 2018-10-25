const usersDAO = require('../model/bodyDAO');

module.exports = {
//显示用户的体重
    getUserWeight:async (ctx, next) => {
        let userDetails =  await usersDAO. getUserWeight(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,体重，时间：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //显示用户的体质类型
    getUserbodyclass:async (ctx, next) => {
        let userDetails =  await usersDAO. getUserbodyclass(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,体质，时间：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //用户填写调查问卷（将用户身高，体重，测试分数，体质类型,BMI,建议，id存入body表）
    insertbodydatas: async (ctx, next) => {
        try {
            let datas = {};
            datas.userId = ctx.request.body.userId;
            datas.userHeight = ctx.request.body.userHeight;
            datas.userWeight = ctx.request.body.userWeight;
            datas.putTime = new Date();
            datas.usertotal = ctx.request.body.usertotal;
            datas.bodyClass = ctx.request.body.bodyClass;
            datas.bodyclassContent = ctx.request.body.bodyclassContent;
            datas.BMI = ctx.request.body.BMI;
            datas.suggestions = ctx.request.body.suggestions;
            console.log(ctx.request.body);
            let all = await usersDAO.insertbodydatas(datas);
            ctx.body = {"code": "200", "message": "ok", data: datas};
        } catch (e) {
            ctx.body = {"code": "500", "message": "服务器错误" + e.message, data: []};
        }
    },
}
