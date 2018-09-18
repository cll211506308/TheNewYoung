const router = require('koa-router')()
const usersController = require('../controller/usersController');
router.prefix('/users');
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
//认证用户身份
router.get('/identity', async (ctx, next) => {

});
//收藏功能（查）
router.get('/collections/:userId', async (ctx, next) => {
    await usersController.getUserCollections(ctx,next);
});
//收藏功能（增）
// router.get('/addcollections/:userId', async (ctx, next) => {
//     await usersController.AddCollections(ctx,next);
// });

//显示发布过的文章（增，删，查）
router.get('/publish/:userId',  async (ctx, next) => {
        await usersController.getUserPublish(ctx,next);
    });
//获取用户体重变化
router.get('/weight', async (ctx, next) => {

});
//显示用户体质
router.get('/bodyclass',  async (ctx, next) => {

});
//给予用户的建议
router.get('/suggestion',  async (ctx, next) => {

});

module.exports = router
