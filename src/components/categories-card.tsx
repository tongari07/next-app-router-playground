import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

const getCategories = async () => {
  return await prisma.category.findMany();
};

export const CategoriesCard = async () => {
  const categories = await getCategories();

  return (
    <Card>
      <CardHeader>
        <CardTitle>カテゴリー</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {categories.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/categories/${id}`} className="text-blue-600 hover:underline">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
