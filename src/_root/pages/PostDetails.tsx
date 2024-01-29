import { useGetPostByIdQuery } from "@/lib/react-query/queriesAndMutations";

const PostDetails = () => {
  const { data: post, isPending } = useGetPostByIdQuery(id);
  return <div>PostDetails</div>;
};

export default PostDetails;
