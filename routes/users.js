const router = require('koa-router')()
const usersController = require('../controller/usersController');
const bodyController = require('../controller/bodyController');
const suggestionController = require('../controller/suggestionController');
const articalController = require('../controller/articalController');
const collectionsController = require('../controller/collectionsController');
router.prefix('/users');
//登录
router.post('/login', async (ctx,next) => {
    await usersController.login(ctx,next);
});
//注册
router.post('/setUp', async (ctx,next) => {
    await usersController.setUp(ctx,next)
});
//判断用户存在
router.get('/judgeName/:userName',  async (ctx, next) => {
    await usersController.judgeName(ctx,next);
});
//显示用户的昵称
router.get('/username/:userId',  async (ctx, next) => {
    await usersController.getUserName(ctx,next);
});
//显示用户的头像
router.get('/headpic/:userId',  async (ctx, next) => {
    await usersController.getUserheadpic(ctx,next);
});
//显示用户的个性签名
router.get('/autograph/:userId', async (ctx, next) => {
    await usersController.getUserautograph(ctx,next);
});
//获取用户身份
router.get('/identity/:userId', async (ctx, next) => {
    await usersController.getUseridentity(ctx,next);
});
//修改个人信息（昵称，头像，个性签名）
router.post('/updateusers/:userId', async (ctx,next) => {
    await usersController.updateusers(ctx,next);
});
//删除发布过的文章
router.get('/deleteartical/:articalId', async (ctx,next) => {
    await articalController.deleteartical(ctx,next);
});
//获取用户体质数据变化
router.get('/weight/:userId', async (ctx, next) => {
    await bodyController.getUserWeight(ctx,next);
});
//显示用户体质
router.get('/bodyclass/:userId',  async (ctx, next) => {
    await bodyController.getUserbodyclass(ctx,next);
});
//根据体质类型去建议库提取相应建议
router.get('/suggestion/getsuggestions/:userId',  async (ctx, next) => {
    await suggestionController.getUsersuggestions(ctx,next);
});
//页面查询建议表的建议显示
router.get('/suggestion/showsuggestions/:userId',  async (ctx, next) => {
    await suggestionController.showUsersuggestions(ctx,next);
});
//显示收藏文章（查）
router.get('/collections/:userId', async (ctx, next) => {
    await collectionsController.getUserCollections(ctx,next);
});
//显示发布过的文章
router.get('/publish/:userId',  async (ctx, next) => {
    await collectionsController.getUserPublish(ctx,next);
});
//查看用户关注的人
router.get('/att/:userId',  async (ctx, next) => {
    await usersController.getUserAtt(ctx,next);
});
//查询所有用户数量
router.get('/count', async (ctx, next) => {
        await usersController.findUsersCount(ctx, next)
    }
),
//用户填写调查问卷（将用户身高，体重，体质类型存入body表，表单上传）
    router.post('/insertbodydatas',async (ctx, next) => {
        await bodyController.insertbodydatas(ctx,next);
    })
/*//用户填写专家身份认证信息（将用户的认证信息存入用户表，多文件上传）
router.post('/setidentity/:userId', async (ctx,next) => {
    await usersController.setIdentity(ctx,next)
});*/

//将提取的建议插入用户的建议表
//增加发布的文章(富文本编辑)
module.exports = router;
