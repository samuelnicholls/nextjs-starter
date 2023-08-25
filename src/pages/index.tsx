import type { NextPage } from 'next';
import usePosts from './api/usePosts';
import { Post } from '@/types';

const Home: NextPage = () => {
  const { data: posts, isLoading } = usePosts(1);
  // eslint-disable-next-line no-console
  console.log("usePosts.isLoading", isLoading)

  return (
    <div className="container mx-auto">
      <h1>NextJS Starter</h1>
      {posts?.map((post: Post, index: number) => (
        <div key={index}>
          <p>{post.userId}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
