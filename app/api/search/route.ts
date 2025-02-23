import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const results = await prisma.data.findMany({
    where: {
      OR: [
        { title: { contains: query || "", mode: "insensitive" } },
        { description: { contains: query || "", mode: "insensitive" } },
      ],
    },
  });

  return NextResponse.json(results);
}
