const router = require('koa-router')()
const articalController = require('../controller/articalController')
const postController = require('../controller/postController')
const collectionsController = require('../controller/collectionsController')

//显示首页上的文章数据
router.get('/', async (ctx, next) => {
        await articalController.getEssay(ctx, next)
    }
)
//解决报错404
router.get('/undefined', async (ctx, next) => {
    ctx.body = {'code':200};
    }
)
//显示搜索之后的文章数据
router.get('/search/:keys', async (ctx, next) => {
        await articalController.searchEssay(ctx, next)
    }
)
//显示点击相应链接获取的文章数据
router.get('/relativeEssay/:articalId', async (ctx, next) => {
        await articalController.getRelativeEssay(ctx, next)
    }
)
//显示热门帖子推荐信息
router.get('/hotPost', async (ctx, next) => {
        await postController.getPost(ctx, next)
    }
)
//显示点击相应热门帖子获取的数据
router.get('/hotPost/relativePost/:postid', async (ctx, next) => {
        await postController.getRelativePost(ctx, next)
    }
)
//收藏文章
router.get('/addCol', async (ctx,next) => {
    await collectionsController.addCollection(ctx,next);
})
//取消收藏
router.get('/delCol', async (ctx,next) => {
    await collectionsController.delCollection(ctx,next);
})
//浏览量
router.get('/upPv/:articalId', async (ctx, next) => {
        await articalController.updateArticalPv(ctx, next)
    }
)
//查询是否已经收藏文章
router.get('/getCol', async (ctx,next) => {
    await collectionsController.getCol(ctx,next)
})


module.exports = router
