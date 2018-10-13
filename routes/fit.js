const router = require('koa-router')()
const articalController = require('../controller/articalController');
const collectionsController = require('../controller/collectionsController');
router.prefix('/fit');

//显示所有健身文章数据
router.get('/', async (ctx, next) => {
    await articalController.getFitEssay(ctx, next)
})
//显示点击相应链接获取的文章数据
router.get('/relativeEssay/:articalid', async (ctx, next) => {
    await articalController.getRelativeEssay(ctx, next)
})
//收藏文章
router.post('/addCol', async (ctx,next) => {
    await collectionsController.addCollection(ctx,next);
})
//取消收藏
router.post('/delCol', async (ctx,next) => {
    await collectionsController.delCollection(ctx,next);
})
//健身文章排行榜
router.get('/fitrank', async (ctx, next) => {
    await articalController.getFitRank(ctx, next)
})

module.exports = router;