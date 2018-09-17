const usersDAO = require('../model/UsersDAO');
module.exports = {
    // 用户名
    getUserName: async (ctx, next) => {
        let userDetails =  await usersDAO.getUserName(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,用户名",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //头像
    getUserheadpic: async (ctx, next) => {
        let userDetails =  await usersDAO.getUserheadpic(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,头像",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    }

}