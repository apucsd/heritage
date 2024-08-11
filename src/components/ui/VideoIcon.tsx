import React from "react";

const VideoIcon = () => {
  return (
    <div className="relative w-20 cursor-pointer h-16 flex items-center justify-center bg-blue-600 rounded-full">
      <div className="absolute flex items-center justify-center w-full h-full">
        <span className="flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full shadow-2xl">
          <svg
            className="w-auto h-8 ml-1 text-white fill-current"
            viewBox="0 0 52 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
              fillRule="nonzero"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default VideoIcon;
