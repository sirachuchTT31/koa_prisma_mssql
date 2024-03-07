const { PrismaClient } = require("@prisma/client")
const prismaClient = new PrismaClient()

const create = (async (req, res) => {
    await prismaClient.user.create({
        data: {
            userId: '01',
            firstName: 'John',
            lastname: 'Smith',
            userName: 'JohnSmith',
            passWord: '1234'
        }
    }).then((value) => {
        res.json({
            status: true,
            status_code: 200,
            result: value,
            message: 'User created successfully',
        })
    }).catch((e) => {
        throw new e
    })
})

module.exports = {
    create
}