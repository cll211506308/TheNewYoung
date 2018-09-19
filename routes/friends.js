const router = require('koa-router')()
const postController = require('../controller/postController')
const commentsController = require('../controller/commentsController')
router.prefix('/post')
//显示所有帖子
router.get('/', async (ctx, next) => {
        await postController.findPost(ctx, next)
    }
)
//查询所有帖子数量
router.get('/count', async (ctx, next) => {
        await postController.findPostCount(ctx, next)
    }
)
//查询帖子的评论
router.get('/comments', async (ctx, next) => {
        await commentsController.findComment(ctx, next)
    }
)
//查询关注人的帖子
router.get('/like', async (ctx, next) => {
        await postController.getLikeuserPost(ctx, next)
    }
)


module.exports = router;