import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const questionnaire = await prisma.questionnaire.create({
    data: {
      title: "USR1",
      description: "ユーザー満足度調査2022/06/03",
      answers: {
        create: [
          {}, {}, {}
        ]
      }
    }
  })
  console.log(questionnaire);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })