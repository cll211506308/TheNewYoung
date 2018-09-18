const router = require('koa-router')()
const articalController = require('../controller/articalController')
const postController = require('../controller/postController')

router.get('/', async (ctx, next) => {
        await articalController.getEssay(ctx,next)
    }
  )

router.get('/search', async (ctx, next) => {

    }
)

router.get('/relativeEssay/:articalid', async (ctx, next) => {
        await articalController.getRelativeEssay(ctx,next)
    }
)

router.get('/hotPost', async (ctx, next) => {
        await postController.getPost(ctx,next)
    }
)

router.get('/relativePost/:postid', async (ctx, next) => {
        await postController.getRelativePost(ctx,next)
    }
)


module.exports = router
