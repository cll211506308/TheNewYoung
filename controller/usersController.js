const usersDAO = require('../model/usersDAO');
var crypto = require('crypto')
const formidable = require("formidable");
const path = require("path");
const fs = require('fs')


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
    //修改个人信息（不改头像）
    updateusers: async (ctx, next) => {
        let user ={};
        user.userName = ctx.request.body.userName;
        user.userPwd = ctx.request.body.userPwd;
        user.autograph = ctx.request.body.autograph;
        user.userId = ctx.request.body.userId;
        user.birthday =  ctx.request.body.birthday;
        user.sex = ctx.request.body.sex;
        console.log(ctx.request.body)
        try{
            let all = await usersDAO.updateusers(user);
            ctx.body = {"code":"200","message":"ok,修改成功",data:all};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },
    //修改个人信息（有头像）
    upTouxiang: async (ctx, next) => {

        var form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname,'../public/images')    //设置文件存放路径
        // form.multiples = true;  //设置上传多文件
        form.parse(ctx.req, function (err, fields, files) {
            console.log(files)
            //根据files.filename.name获取上传文件名，执行后续写入数据库的操作
            console.log(fields)
            //根据fileds.mydata获取上传表单元素的数据，执行写入数据库的操作
            if(err){
                ctx.body='上传失败'
            }

            if(err) throw err;
            var time = Math.ceil(Math.random()*1000);
            var oldpath = files.filename.path;
            var newpath = path.join(path.dirname(oldpath),time + files.filename.name);

            let users = {};
            users.userName = fields.userName;
            users.userPwd = fields.userPwd;
            users.autograph = fields.autograph;
            users.userId = fields.userId;
            users.birthday = fields.birthday;
            users.sex = fields.sex;
            users.headPic = newpath.slice(25);
            let all = usersDAO.upTouxiang(users);

            fs.rename(oldpath,newpath,(err)=>{
                if(err) throw err;
                // res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                // res.end('图片上传并改名成功！');

            })

        })
        ctx.body= 1


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
    //获取用户关注的人
    getUserAtt: async (ctx, next) => {
        try {
            let all = await usersDAO.getUserAtt(ctx.params.userId);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到用户 ！！" + e.message, data: []}
        }
    }
}