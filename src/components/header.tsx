import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full w-full items-center justify-between p-4">
        <div className="hidden flex-1 space-x-8 md:flex">
          <a href="#">
            <span className="hidden font-bold sm:inline-block">マイブログ</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="text-foreground/60 transition-colors hover:text-foreground/80" href="#">
              ホーム
            </a>
            <a className="text-foreground/60 transition-colors hover:text-foreground/80" href="#">
              記事
            </a>
            <a className="text-foreground/60 transition-colors hover:text-foreground/80" href="#">
              カテゴリー
            </a>
            <a className="text-foreground/60 transition-colors hover:text-foreground/80" href="#">
              お問い合わせ
            </a>
          </nav>
        </div>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">メニューを開く</span>
        </Button>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="検索..."
                  className="w-full bg-background pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
