const { PrismaClient } = require("@prisma/client")
const prismaClient = new PrismaClient()

const create = (async (ctx) => {
    try {
        const req = ctx.request.body
        const responDB = await prismaClient.user.create({
            data: {
                userId: req?.userId,
                firstName: req?.firstName,
                lastname: req?.lastname,
                userName: req?.userName,
                passWord: req?.passWord
            }
        })
        if (responDB) {
            ctx.body = {
                status: true,
                status_code: 200,
                message: ''
            }
        }
        else {
            ctx.body = {
                status: false,
                status_code: 500,
                message: ''
            }
        }
    }
    catch (e) {
    }
})

module.exports = {
    create
}