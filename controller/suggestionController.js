const usersDAO = require('../model/sugeestionsDAO');
module.exports = {
    //从建议库提取给予用户的建议
    getUsersuggestions:async (ctx, next) => {
        let userDetails =  await usersDAO. getUsersuggestions(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,建议：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //显示建议
    showUsersuggestions:async (ctx, next) => {
        let userDetails =  await usersDAO.showUsersuggestions(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,建议内容：",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
}
