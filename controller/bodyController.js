const usersDAO = require('../model/bodyDAO');
// const bodyDAO =require('../model')
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
    //用户填写调查问卷（将用户身高，体重，测试分数，体质类型id存入body表，表单上传）
    insertbodydatas: async (ctx, next) => {
        let datas = {};
        console.log(ctx.query)
        datas.userId = ctx.query.userId;
        datas.userHeight = ctx.query.userHeight;
        datas.userWeight = ctx.query.userWeight;
        datas.putTime = new Date();
        datas.usertotal = ctx.query.usertotal;
        datas.bodyClass = ctx.query.bodyClass;
        try {
            let all = await usersDAO.insertbodydatas(datas);
            ctx.body = {"code": "200", "message": "ok", data: all};
        } catch (e) {
            ctx.body = {"code": "500", "message": "服务器错误" + e.message, data: []};
        }
    },
}
