const Router = require("koa-router");
const router = new Router()
const { create } = require('../controllers/api.controller.js')

router.post('/send', async (context) => {
    // console.log(next)
    console.log(await context.response)
    create
});

module.exports = router