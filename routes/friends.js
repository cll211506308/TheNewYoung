const router = require('koa-router')()
const postController = require('../controller/postController')
const commentsController = require('../controller/commentsController')
const likeController = require('../controller/likeController')
const attentionsController = require('../controller/attentionsController')
router.prefix('/friends')
//显示所有帖子
router.get('/', async (ctx, next) => {
        await postController.findPost(ctx, next)
    }
)
//浏览量
router.get('/uppv/:postid', async (ctx, next) => {
        await postController.updatePostPv(ctx, next)
    }
)
//查询所有帖子数量
router.get('/count', async (ctx, next) => {
        await postController.findPostCount(ctx, next)
    }
)
//查询关注人的帖子
router.get('/likeUser/:userId', async (ctx, next) => {
        await postController.getLikeuserPost(ctx, next)
    }
)
//点赞
router.get('/like/:articalId',async (ctx,next) => {
    await likeController.addLike(ctx,next)
})
//取消点赞
router.get('/cancelLike/:articalId',async (ctx,next) => {
    await likeController.cancelLike(ctx,next)
})
//添加评论
router.post('/addComment', async (ctx,next) => {
    await commentsController.addComment(ctx,next)
})
//删除评论
router.get('/deleteComment/:commentsId', async (ctx,next) => {
    await commentsController.deleteComment(ctx,next)
})
//查看所有评论
router.get('/getCom/:postId', async (ctx,next) => {
    await commentsController.getComment(ctx,next)
})
//关注
router.get('/attention/:userid,attentioneduserid', async (ctx,next) => {
    await attentionsController.attention(ctx,next)
})
//取消关注
router.get('/delattention/:userid,attentioneduserid', async (ctx,next) => {
    await attentionsController.delAttention(ctx,next)
})



module.exports = router;