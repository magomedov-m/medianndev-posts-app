import React from 'react';

interface Props {
  func: () => void;
  curPage: boolean;
  className: string;
  text: string;
}

const ButtonPagination: React.FC<Props> = ({ func, curPage, className, text }) => {
  return (
    <button onClick={func} disabled={curPage} className={className}>{text}</button>
  );
};

export default ButtonPagination;