import type { NextPage } from 'next';
import usePosts from './api/usePosts';

const Home: NextPage = () => {
  const { data: posts, isLoading } = usePosts(1);
  console.log("usePosts.posts", posts)
  console.log("usePosts.isLoading", isLoading)

  return (
    <div className="container mx-auto">
      <h1>NextJS Starter</h1>
    </div>
  );
};

export default Home;
