import { GetServerSideProps } from "next";
import { getPostById } from "@/api/posts";
import { useFetchPostById } from "@/hooks/usePosts";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import PostListItem from "@/components/PostListItem";
import ButtonGoMain from "@/components/ButtonGoMain";

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

  {isLoading && <div className="p-6 text-center">Загрузка...</div>}
  {isError && <div className="p-6 text-center">Ошибка при загрузке поста</div>}

  return (
    <>
      <PostListItem post={data} />
      <ButtonGoMain path="/" text="Вернуться на главную" />
    </>
  );
};

export default PostPage;
