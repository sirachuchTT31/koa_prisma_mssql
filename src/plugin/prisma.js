const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.$connect().then((v) => {
        console.log("connect db success !")
    }).catch((e) => {
        prisma.$disconnect()
    })
}

module.exports = main()