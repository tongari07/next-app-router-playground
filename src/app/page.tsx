import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Header } from "@/components/header";
import { NewPosts } from "@/components/new-posts";

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
          <Card>
            <CardHeader>
              <CardTitle>プロフィール</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="プロフィール画像" />
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-lg font-semibold">山田太郎</h2>
              <p className="text-sm text-muted-foreground">テクノロジーブロガー</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>カテゴリー</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    テクノロジー
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    プログラミング
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    AI・機械学習
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    ウェブ開発
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    モバイルアプリ
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
