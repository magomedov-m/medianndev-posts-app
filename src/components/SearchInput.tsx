import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<Props> = ({ value, onChange, onSubmit, placeholder='Поиск по заголовку', className }) => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
    }} className={`mx-auto max-w-[800px] mt-6 flex gap-2 ${className ?? ""}`}>
        <label htmlFor='search' className='sr-only'>Поиск постов</label>
        <input id='search' type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className='flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 ml-1'
        aria-label='Поиск ответов по заголовку' />
        <button type='submit' className='px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors cursor-pointer mr-1' aria-label='Искать'>Поиск</button>
    </form>
  );
};

export default SearchInput;