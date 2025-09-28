import { GetServerSideProps } from "next";
import { getPostById } from "@/api/posts";
import { useFetchPostById } from "@/hooks/usePosts";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getServerSideProps } from "next/dist/build/templates/pages";

const GetServerSideProps = async (ctx: { params: { id: number } }) => {
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

export default getServerSideProps

// const PostPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const { data, isLoading, isError } = useFetchPostById(Number(id));

//   return (
//     <div className="mx-auto max-w-[800px] bg- rounded-2xl shadow-md p-6 flex flex-col gap-4">
//       <h1 className="text-2xl font-bold text-slate-800">{data.title}</h1>
//       <div className="flex gap-4 text-slate-700 text-sm">
//         <span>
//           <strong>ID:</strong> {data.id}
//         </span>
//         <span>
//           <strong>User ID:</strong> {data.userId}
//         </span>
//       </div>
//       <p className="text-slate-700 text-justify [hyphens:auto] leading-relaxed">
//         {data.body}
//       </p>
//     </div>
//   );
// };

// export default PostPage;
