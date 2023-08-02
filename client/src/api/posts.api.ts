import axios from "axios";
import { Post } from "./types";

const postApi = axios.create({
  baseURL: "http://127.0.0.1:8000/posts/api/v1/posts/",
  //baseURL: "https://crud-django-react.onrender.com/posts/api/v1/posts/",
});

export const getAllPosts = () => {
  return postApi.get<Post[]>("/");
};

export const getPost = (id: number) => {
  return postApi.get<Post[]>(`/${id}/`);
};

export const createPost = (post: Post) => {
  return postApi.post("/", post);
};

export const deletePost = (id: number) => {
  return postApi.delete<Post>(`/${id}`);
};

export const updatePost = (id: number, post: Post) => {
  return postApi.put<Post>(`/${id}/`, post);
};
