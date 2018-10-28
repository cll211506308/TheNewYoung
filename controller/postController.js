const postDAO = require('../model/postDAO');
const usersDAO = require('../model/usersDAO');
const formidable = require("formidable");
const path = require("path");
const fs = require('fs')

module.exports = {
    getPost: async (ctx, next) => {
        try {
            let reconmend = await postDAO.getReconmendPost();
            let Yang = await postDAO.getYangPost();
            let Diet = await postDAO.getDietPost();
            let Fit = await postDAO.getFitPost();
            let all = {
                reconmend: reconmend,
                Yang: Yang,
                Diet: Diet,
                Fit: Fit
            }
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有查到相应帖子！！" + e.message, data: []};
        }

    },
    getRelativePost: async (ctx, next) => {
        try {
            let all = await postDAO.getRelativePost(ctx.params.postid);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到相应帖子 ！！" + e.message, data: []}
        }
    },
    //获取帖子总数
    findPostCount: async (ctx, next) => {
        try {
            let all = await postDAO.findPostCount(ctx, next);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到帖子 ！！" + e.message, data: []}
        }
    },


    //查询所有帖子
    findPost: async (ctx, next) => {
        try {
            let all = await postDAO.findPost(ctx, next);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到帖子 ！！" + e.message, data: []}
        }
    },
    //查询单个帖子
    findPostId: async (ctx, next) => {
        try {
            let all = await postDAO.findPostId(ctx.query.postid);
            ctx.body = {'code': 200, "message": "ok", data: all};
        } catch (e) {
            ctx.body = {'code': 500, "message": "没有获取到帖子 ！！" + e.message, data: []}
        }
    },
    // 发表帖子
    insertPost: async (ctx, next) => {
        let posts = {};
        console.log(ctx.query)
        posts.userId = ctx.query.userId;
        posts.title = ctx.query.title;
        posts.postLabel = ctx.query.postLabel;
        posts.postTime = new Date();
        posts.pageViews = 1;
        posts.postContent = ctx.query.postContent;
        try{
            let all = await postDAO.insertPost(posts);
            ctx.body = {"code":"200","message":"ok",data:all};
        }catch (e){
            ctx.body = {"code":"500","message":"服务器错误"+e.message,data:[]};
        }
    },
    //删除帖子
    deletePost:async (ctx, next) => {
        let all =  await postDAO.deletePost(ctx.params.postId);
        try{
            ctx.body = {"code":"200","message":"ok,删除成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },

    //浏览量
    updatePostPv: async (ctx, next) => {
        let all = ctx.params.postId;
        let abc =await postDAO.updatePostPv(all);
        try{
            ctx.body = {"code":"200","message":"ok,成功",data:[]};
        }catch (e) {
            ctx.body = {"code":"500","message":"服务器错误",data:[]};
        }
    },

    //查看关注人的帖子
    getLikeuserPost: async (ctx, next) => {
        let userId = ctx.params.userId;
        try{
            let all = await postDAO.getLikeuserPost(userId);
            ctx.body = {"code":"200","message":"ok",data:all };
        } catch (e) {
            ctx.body = {"code": "500", "message": "没有获取到帖子 ！"+ e.message, data: []}
        }
    },

    //上传头像
    upTouxiang: async (ctx, next) => {

        var form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname,'../public/images')    //设置文件存放路径
        // form.multiples = true;  //设置上传多文件
         form.parse(ctx.req, function (err, fields, files) {
            console.log(files)
            //根据files.filename.name获取上传文件名，执行后续写入数据库的操作
            // console.log(fields)
            //根据fileds.mydata获取上传表单元素的数据，执行写入数据库的操作
            if(err){
                ctx.body='上传失败'
            }

            if(err) throw err;
            var time = Math.ceil(Math.random()*1000);
            var oldpath = files.filename.path;
            var newpath = path.join(path.dirname(oldpath),time + files.filename.name);
             console.log(newpath.slice(25))
             console.log(fields.userName)

             let users = {};
             users.userName = fields.userName;
             users.userPwd = fields.userPwd;
             users.registerTime = new Date();
             users.headPic = newpath.slice(25);
             let all = usersDAO.setUp(users);

            fs.rename(oldpath,newpath,(err)=>{
                if(err) throw err;
                // res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                // res.end('图片上传并改名成功！');

            })

        })
        ctx.body= 1


    }
}