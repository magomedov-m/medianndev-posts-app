import React from "react";
import InputButton from "./InputButton/InputButton";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
  onClear?: () => void;
}

const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = "Поиск по заголовку",
  className,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className={`mx-auto max-w-[800px] mt-6 flex gap-2 ${className ?? ""}`}
    >
      <label htmlFor="search" className="sr-only">
        Поиск постов
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3f1dbb] ml-1"
        aria-label="Поиск ответов по заголовку"
      />

      <InputButton text="Поиск" type="submit"/>
      <InputButton text="Очистить" type="button" onClick={onClear} />
    </form>
  );
};

export default SearchInput;
