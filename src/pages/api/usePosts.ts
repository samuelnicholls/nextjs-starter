

import useSWR from "swr";
import { Post } from "@/types";

const usePosts = (userId: number) => {
  return useSWR<Array<Post>>(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
};

export default usePosts;
