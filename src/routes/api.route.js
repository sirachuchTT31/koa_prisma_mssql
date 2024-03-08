const Router = require("koa-router");
const router = new Router()
const { create } = require('../controllers/api.controller.js')

// router.post('/send', async (ctx) => {
//     ctx.body = create(ctx.request.body)
// });
router.post('/send',create);

module.exports = router