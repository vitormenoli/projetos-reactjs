import { useContext } from "react";
import { PostsContext } from "./PostsContextContext.js";

export function usePosts() {
  return useContext(PostsContext);
}
