import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

export const GET = async (req) => {
  const POST_PER_PAGE = parseInt(process.env.POST_PER_PAGE);

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: cat ? { catSlug: cat } : undefined
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};

//create a post
export const POST = async (req) => {
  const session = await getAuthSession();
  
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Unauthorized" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
