import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    //find one post where slug == slug
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch post");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch user");
  }
};

//Model.find = find all itens of that model;
//Model.findById = find the item with searched id;