"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

type PostDescriptionCard = {
  id: string;
  title: string;
  description?: string;
};

export const PostDescriptionCard = ({ id, title, description }: PostDescriptionCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="min-h-12">{description}</p>
        <Button asChild className="mt-4">
          <Link href={`/posts/${id}`}>続きを読む</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
