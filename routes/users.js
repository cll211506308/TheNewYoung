const router = require('koa-router')()
const usersController = require('../controller/userscontroller');
router.prefix('/users');
//显示用户的昵称
router.get('/username/:userId',  async (ctx, next) => {
    await usersController.getUserName(ctx,next);
});
//显示用户的头像
router.get('/headpic/:userId',  async (ctx, next) => {
    await usersController.getUserheadpic(ctx,next);
})
//显示用户的个性签名
router.get('/autograph', async (ctx, next) => {

})
//认证用户身份
router.get('/identity', async (ctx, next) => {

})
//生成用户体质
router.get('/body',  async (ctx, next) => {

})
//显示用户收藏的文章
router.get('/collections', async (ctx, next) => {

})
//显示发布过的文章
router.get('/publish',  async (ctx, next) => {

})
//折线图反应用户的体重变化
router.get('/weight', async (ctx, next) => {

})
//显示用户体质
router.get('/bodyclass',  async (ctx, next) => {

})
//给予用户的建议
router.get('/suggestion',  async (ctx, next) => {

})

module.exports = router
