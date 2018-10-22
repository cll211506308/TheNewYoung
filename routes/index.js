const router = require('koa-router')()
const articalController = require('../controller/articalController')
const postController = require('../controller/postController')

//显示首页上的文章数据
router.get('/', async (ctx, next) => {
        await articalController.getEssay(ctx, next)
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


module.exports = router
