const Koa = require('koa')
const app = new Koa()
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require('./src/routes/api.route.js');
const port = 8080
const read_directory = require('fs');
const prisma = require('./src/plugin/prisma.js')
const server = app.use(parser()).use(cors()).listen(port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`)
})
prisma
app.use(router.routes())
module.exports = server