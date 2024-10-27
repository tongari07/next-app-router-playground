import { prisma } from "@/lib/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Prisma } from "@prisma/client";

const userProfile = Prisma.validator<Prisma.UserSelect>()({
  name: true,
  description: true,
});

const getUser = async () => {
  return await prisma.user.findUnique({
    where: {
      id: 1,
    },
    select: userProfile,
  });
};

export const ProfileCard = async () => {
  const user = await getUser();

  return (
    <Card>
      <CardHeader>
        <CardTitle>プロフィール</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="プロフィール画像" />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-lg font-semibold">{user?.name}</h2>
        <p className="text-sm text-muted-foreground">{user?.description}</p>
      </CardContent>
    </Card>
  );
};
