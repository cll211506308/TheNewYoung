const router = require('koa-router')()
const articalController = require('../controller/articalController');
const collectionsController = require('../controller/collectionsController');
const likeController = require('../controller/likeController');
router.prefix('/foods');

//显示所有文章数据
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
//点赞文章
router.get('/like/:articalId',async (ctx,next) => {
    await likeController.addLike(ctx,next)
})
//取消点赞
router.get('/cancelLike/:articalId',async (ctx,next) => {
    await likeController.cancelLike(ctx,next)
})

module.exports = router;