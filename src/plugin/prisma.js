const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.$connect().then((v) => {

    }).catch((e) => {
        prisma.$disconnect()
    })
}

modeule.exports = main()