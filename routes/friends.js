const router = require('koa-router')();
const likeController = require('../controller/likeController');
const commentsController = require('../controller/commentsController');
router.prefix('/friends')
//点赞帖子
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
module.exports = router;