const usersDAO = require('../model/usersDAO');
var crypto = require('crypto')

module.exports = {
    //登录
    login: async (ctx,next) => {
        let user = {};
        user.userName = ctx.request.body.userName;
        user.userPwd = ctx.request.body.userPwd;
        // let pwd = ctx.request.body.userPwd;
        // const hash = crypto.createHash('md5');
        // hash.update(pwd);
        // let pwdMd5 = hash.digest('hex');
        // user.userPwd = pwdMd5;
        let all = await usersDAO.login(user);
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
        users.registerTime = new Date();
        console.log(users)
        try{
            let user = await usersDAO.setUp(users);
            ctx.body = {"code":"200","message":"ok",data:users};
        }catch (e){
            ctx.body = {"code":"500","message":"服务器错误"+e.message,data:[]};
        }
    },
    //判断用户名存在不
    judgeName: async (ctx, next) => {
        let all =  await usersDAO.judgeName(ctx.params.userName);
        try{
            ctx.body = {"code":"200","message":"ok,用户名",data:all};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
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
    //获取用户总数
    findUsersCount: async (ctx, next) => {
        try {
            let all = await usersDAO.findUsersCount(ctx, next);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到用户 ！！" + e.message, data: []}
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