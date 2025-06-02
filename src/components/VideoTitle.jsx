import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black to-transparent w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-3/4 truncate">{overview}</p>
      <div className="">
        <button className="text-black bg-white p-4 px-12 text-xl rounded-lg cursor-pointer hover:bg-gray-300">
          ▶ Play
        </button>
        <button className="mx-2 text-black bg-gray-500 p-4 px-12 text-xl rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
