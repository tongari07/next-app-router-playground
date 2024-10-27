import { PostDescriptionCard } from "./post-description-card";

const posts = [
  {
    id: "1",
    title: "人工知能の未来：2024年の展望",
    description:
      "人工知能（AI）技術は急速に進化し続けており、2024年にはさらなる革新が期待されています。本記事では、AIの最新トレンドや、ビジネス、医療、教育分野での応用について詳しく解説します。",
  },
  {
    id: "2",
    title: "持続可能な都市開発：グリーンテクノロジーの役割",
    description:
      "気候変動対策が急務となる中、持続可能な都市開発におけるグリーンテクノロジーの重要性が高まっています。本記事では、スマートシティプロジェクトや再生可能エネルギーの活用事例を紹介します。",
  },
];

export const NewPosts = () => {
  return (
    <>
      {posts.map((post) => (
        <PostDescriptionCard key={post.id} {...post} />
      ))}
    </>
  );
};
