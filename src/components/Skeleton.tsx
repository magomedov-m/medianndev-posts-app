import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="mt-8 mb-8 mx-auto max-w-[1140px] flex flex-wrap justify-center gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-72 h-60 bg-slate-200 rounded-2xl animate-pulse"
        />
      ))}
    </div>
  );
};

export default Skeleton;
