import React from "react";

interface Props {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const InputButton: React.FC<Props> = ({ text, type = "submit", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-[#5031be] text-white rounded-lg hover:bg-[#3f1dbb] transition-colors cursor-pointer mr-1"
      aria-label="Искать"
    >
      {text}
    </button>
  );
};

export default InputButton;
