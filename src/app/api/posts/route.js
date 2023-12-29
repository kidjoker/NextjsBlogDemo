import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const POST_PER_PAGE = parseInt(process.env.POST_PER_PAGE);

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
