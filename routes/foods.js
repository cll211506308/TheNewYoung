const router = require('koa-router')()
const articalController = require('../controller/articalController');
const collectionsController = require('../controller/collectionsController');
router.prefix('/foods');

//美食文章数据，排行
router.get('/', async (ctx, next) => {
    await articalController.getEssay(ctx, next)
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
//美食文章分类
router.get('/foodsclass', async (ctx, next) => {
    await articalController.getClasses(ctx, next);
})

module.exports = router;