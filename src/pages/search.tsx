import ButtonGoMain from "@/components/ButtonGoMain";
import InputButton from "@/components/InputButton/InputButton";
import PostLists from "@/components/PostLists";
import SearchInput from "@/components/SearchInput";
import Skeleton from "@/components/Skeleton";
import { useSearchPosts } from "@/hooks/usePosts";
import React, { useState } from "react";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: posts, isLoading, isError, total } = useSearchPosts(searchTerm);

  const handleSearch = () => {
    setSearchTerm(query.trim());
  };

  const clearInput = () => {
    setQuery("");
    setSearchTerm("");
  }

  return (
    <main>
      <div className="mx-auto max-w-[1140px] p-6">
        <h1 className="text-3xl font-bold text-slate-800">Поиск постов</h1>
        {searchTerm && (
          <p className="mt-2 text-slate-600">
            Найдено: <strong>{total ?? 0}</strong>
          </p>
        )}

        <SearchInput
          value={query}
          onChange={setQuery}
          onSubmit={handleSearch}
          onClear={clearInput}
        />

        {/* Зачем тут скелетон если данные берутся из кэша? Пользователь может обновить страницу поиска */}
        {isLoading && <Skeleton />}

        {isError && (
          <div className="p-6 text-center">Ошибка при загрузке данных</div>
        )}

        {!isLoading && posts && posts.length === 0 && (
          <div className="p-6 text-center text-slate-600">
            Ничего не найдено по
            <span className="font-medium"> "{searchTerm}"</span>.
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
