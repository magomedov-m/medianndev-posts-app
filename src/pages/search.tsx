import ButtonGoMain from "@/components/ButtonGoMain";
import PostLists from "@/components/PostLists";
import SearchInput from "@/components/SearchInput";
import { useSearchPosts } from "@/hooks/usePosts";
import React, { useState } from "react";

interface Props {
  className?: string;
}

const SearchPage: React.FC<Props> = () => {
  const [query, setQuery] = useState("");
  const {
    data: posts,
    isLoading,
    isError,
    total,
    query: debounceQuery,
  } = useSearchPosts(query);
  return (
    <main>
      <div className="mx-auto max-w-[1140px] p-6">
        <h1 className="text-3xl font-bold text-slate-800">Поиск постов</h1>
        <p className="mt-2 text-slate-600">
          Найдено: <strong>{total ?? 0}</strong>
        </p>

        <SearchInput value={query} onChange={setQuery} onSubmit={() => {}} />

        {isLoading && <div className="p-6 text-center">Загрузка постов...</div>}
        {isError && (
          <div className="p-6 text-center">Ошибка при загрузке данных</div>
        )}

        {!isLoading && posts && posts.length === 0 && (
          <div className="p-6 text-center text-slate-600">
            Ничего не найдено по
            <span className="font-medium"> "{debounceQuery}"</span>.
            <div className="mt-4">
              <ButtonGoMain path="/" text="Вернуться на главную" />
            </div>
          </div>
        )}
        {!isLoading && posts && posts.length > 0 && (
          <div>
            <PostLists posts={posts} />
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchPage;
