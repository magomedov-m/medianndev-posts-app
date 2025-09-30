import React from 'react';
import ButtonPagination from './ButtonPagination';

interface Props {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className='flex justify-center items-center gap-4 mt-6 mb-6'>
        <ButtonPagination func={onPrev} curPage={currentPage === 1} className={'px-4 py-2 bg-[#5031be] text-white rounded-lg disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-[#3f1dbb] transition-colors cursor-pointer'} text={'Назад'} />

        <span className='text-slate-700 font-medium'>
            {currentPage} / {totalPages}
        </span>

        <ButtonPagination func={onNext} curPage={currentPage === totalPages} className={'px-4 py-2 bg-[#5031be] text-white rounded-lg disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-[#3f1dbb] transition-colors cursor-pointer'} text={'Вперед'}  />
    </div>
  );
};

export default Pagination;