import Link from "next/link";
import React from "react";

interface Props {
  path: string;
  text: string;
}

const Button: React.FC<Props> = ({ path, text }) => {
  return (
    <>
      <div className="mx-auto max-w-[800px] mt-4">
        <Link href={path}>
          <button className="px-4 py-2 bg-[#5031be] text-white rounded-lg hover:bg-[#3f1dbb] transition-colors cursor-pointer">
            {text}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;
