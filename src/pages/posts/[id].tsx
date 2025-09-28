import { getPostById } from "@/api/posts";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const getServerSideProps = async (ctx: { params: { id: number } }) => {
  const { id } = ctx.params;

  const queryClient = new QueryClient();

  await queryClient.fetchQuery({
    queryKey: ["post", id], 
    queryFn: () => getPostById(id),
  });

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Post ID: {id}</div>;
}

export default PostPage;