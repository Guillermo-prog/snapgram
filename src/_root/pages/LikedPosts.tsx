import GridPostsList from "@/components/shared/GridPostsList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUserQuery } from "@/lib/react-query/queriesAndMutations";
const LikedPosts = () => {
  const { data: user } = useGetCurrentUserQuery();
  if (!user) return <Loader />;

  {
    user.liked.length === 0 && <p className="text-light-4">No liked posts</p>;
  }

  return <GridPostsList posts={user.liked} showStats={false} />;
};

export default LikedPosts;
