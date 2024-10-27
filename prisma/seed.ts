import { PrismaClient } from "@prisma/client";
import { posts, user } from "./data";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.upsert({
    where: { email: "sample@example.com" },
    update: {},
    create: {
      ...user,
      posts: {
        create: posts,
      },
    },
  });

  console.log(result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
