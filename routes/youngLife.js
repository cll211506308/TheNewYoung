const router = require('koa-router')()
const usersController = require('../controller/postController');
router.prefix('/youngLife');
router.get('/post', async (ctx, next) => {
        await articalController.findUserCount(ctx, next)
    }
)

module.exports = router