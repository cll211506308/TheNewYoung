const usersDAO = require('../model/usersDAO');
module.exports = {
    //获取用户信息
    getUsers: async (ctx,next) => {
        let all = await usersDAO.getUsers(ctx,next);
        try{
            ctx.body = {"code":"200","message":"ok",data:all};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //注册个人信息
    setUp: async (ctx,next) => {
        let users = {};
        users.userName = ctx.request.body.userName;
        users.userPwd = ctx.request.body.userPwd;
        users.telephone = ctx.request.body.telephone;
        users.sex = ctx.request.body.sex;
        users.birthday = ctx.request.body.birthday;
        users.registerTime = new Date();
        console.log(users)
        try{
            let user = await usersDAO.setUp(users);
            ctx.body = {"code":"200","message":"ok",data:users};
        }catch (e){
            ctx.body = {"code":"500","message":"服务器错误"+e.message,data:[]};
        }
    },
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
    },
    //个性签名
    getUserautograph: async (ctx, next) => {
        let userDetails =  await usersDAO.getUserautograph(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,签名",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //获取用户身份
    getUseridentity: async (ctx, next) => {
        let userDetails =  await usersDAO. getUseridentity(ctx.params.userId);
        try{
            ctx.body = {"code":"200","message":"ok,身份",data:userDetails};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
   //修改个人信息（昵称，头像，个性签名）
    updateusers: async (ctx, next) => {
        let users ={};
        users.userName = ctx.request.body.userName;
        users.headpic =  ctx.request.body.headpic;
        users.autograph = ctx.request.body.autograph;
        try{
            await usersDAO.updateusers(users);
            ctx.body = {"code":"200","message":"ok,修改成功",data:users};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
 /*  // 认证用户专家身份
    setIdentity: async (ctx,next) => {
        let users = {};

        try{
            let user = await usersDAO.setIdentity(users);
            ctx.body = {"code":"200","message":"ok",data:users};
        }catch (e){
            ctx.body = {"code":"500","message":"服务器错误"+e.message,data:[]};
        }
    },*/

}