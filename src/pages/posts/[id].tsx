import { GetServerSideProps } from "next";
import { getPostById } from "@/api/posts";
import { useFetchPostById } from "@/hooks/usePosts";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import PostListItem from "@/components/PostListItem";
import Button from "@/components/ButtonGoMain";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = Number(ctx.params?.id);
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

const PostPage: React.FC = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  const { data, isLoading, isError } = useFetchPostById(id);

  if (isLoading) return <div className="p-6 text-center">Загрузка...</div>;
  if (isError)
    return <div className="p-6 text-center">Ошибка при загрузке поста</div>;

  return (
    <>
      <PostListItem post={data} />
      <Button />
    </>
  );
};

export default PostPage;
