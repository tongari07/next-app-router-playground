import { PrismaClient } from "@prisma/client";
import { categories, posts, user } from "./data";

const prisma = new PrismaClient();

const upsertUser = async () => {
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
};

const createCategories = async () => {
  const result = await prisma.category.createMany({
    data: categories,
  });

  console.log(result);
};

async function main() {
  upsertUser();
  createCategories();
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
