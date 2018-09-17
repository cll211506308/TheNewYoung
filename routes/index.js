const router = require('koa-router')()
const ArticalController = require('../controller/ArticalController')

router.get('/', async (ctx, next) => {
        await ArticalController.getEssay(ctx,next)
    }
  )

router.get('/search', async (ctx, next) => {

    }
)

router.get('/recommend', async (ctx, next) => {

    }
)

router.get('/yangShengTang', async (ctx, next) => {

    }
)

router.get('/diet', async (ctx, next) => {

    }
)

router.get('/fitClass', async (ctx, next) => {

    }
)

router.get('/hotEssay', async (ctx, next) => {

    }
)


module.exports = router
