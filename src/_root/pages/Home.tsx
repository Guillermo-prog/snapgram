import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPostsQuery } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

function Home() {
  const {
    data: posts,
    isPending: isPostsLoading,
    isError: isErrorPosts,
  } = useGetRecentPostsQuery();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostsLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
