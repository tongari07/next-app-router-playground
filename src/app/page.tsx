import { CategoriesCard } from "@/components/categories-card";
import { Header } from "@/components/header";
import { NewPosts } from "@/components/new-posts";
import { ProfileCard } from "@/components/profile-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="grid grid-cols-1 gap-12 px-4 py-8 sm:px-6 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_250px] lg:px-8 xl:grid-cols-[1fr_300px]">
        <main className="space-y-6">
          <h1 className="text-3xl font-bold">最新の記事</h1>
          <NewPosts />
        </main>
        <aside className="space-y-6">
          <ProfileCard />
          <CategoriesCard />
        </aside>
      </div>
    </div>
  );
}
