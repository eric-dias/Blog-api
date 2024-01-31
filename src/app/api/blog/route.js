import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

//There's no need for a request if it'll fetch all posts
export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts)

  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts.");
  }
};
