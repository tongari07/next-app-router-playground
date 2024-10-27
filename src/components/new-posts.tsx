import { prisma } from "@/lib/prisma";
import { PostDescriptionCard } from "./post-description-card";
import { Prisma } from "@prisma/client";

const getPosts = async () => {
  const postDescription = Prisma.validator<Prisma.PostSelect>()({
    id: true,
    title: true,
    description: true,
  });

  return await prisma.post.findMany({ select: postDescription });
};

export const NewPosts = async () => {
  const posts = await getPosts();

  return (
    <>
      {posts.map(({ id, title, description }) => (
        <PostDescriptionCard
          key={id}
          id={String(id)}
          title={title}
          description={description ?? undefined}
        />
      ))}
    </>
  );
};
