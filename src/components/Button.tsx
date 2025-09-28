import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Button: React.FC<Props> = () => {
  return (
    <>
      <div className="mx-auto max-w-[800px] mt-4">
        <Link href="/">
          <button className="px-4 py-2 bg-sky-500 text-white rounded-lg ml-3 hover:bg-sky-600 transition-colors cursor-pointer">
            Вернуться на главную
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;