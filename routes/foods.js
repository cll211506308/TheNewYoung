const router = require('koa-router')()
const articalController = require('../controller/articalController');
const collectionsController = require('../controller/collectionsController');
router.prefix('/foods');

//显示所有美食文章数据
router.get('/', async (ctx, next) => {
    await articalController.getDietEssay(ctx, next)
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
//美食文章排行榜
router.get('/foodsrank', async (ctx, next) => {
    await articalController.getDietRank(ctx, next)
})

module.exports = router;