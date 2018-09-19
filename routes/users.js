const router = require('koa-router')()
const usersController = require('../controller/usersController');
const bodyController = require('../controller/bodyController');
const suggestionController = require('../controller/suggestionController');
router.prefix('/users');

//获取用户信息
router.get('/', async (ctx,next) => {
    await usersController.getUsers(ctx,next);
})

//注册
router.post('/setUp', async (ctx,next) => {
    await usersController.setUp(ctx,next)
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
//修改个人信息（昵称，头像，个性签名）

//认证用户身份
router.get('/identity', async (ctx, next) => {

});

//显示收藏文章（查）
router.get('/collections/:userId', async (ctx, next) => {
    await usersController.getUserCollections(ctx,next);
});
//显示发布过的文章
router.get('/publish/:userId',  async (ctx, next) => {
        await usersController.getUserPublish(ctx,next);
    });
//增加发布过的文章

//删除发布过的文章

//用户填写调查问卷（将用户身高，体重，体质类型存入body表）

//获取用户体重变化
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
//将提取的建议插入用户的建议表

//页面查询建议表的建议显示
router.get('/suggestion/showsuggestions/:userId',  async (ctx, next) => {
    await suggestionController.showUsersuggestions(ctx,next);
});
module.exports = router;
