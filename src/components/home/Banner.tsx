/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div>
      <header className="relative flex items-center text-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 backdrop-blur-[2px] p-5 text-2xl text-white">
          <h1 className="text-3xl max-w-[20ch] mx-auto md:text-6xl ">
            Your Portal to India's Exquisite Real Estate
          </h1>
          <p className="my-3 text-sm">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <Button>Find Property</Button>
        </div>
        <div className="absolute z-10 w-full h-full">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source
              src="https://video-previews.elements.envatousercontent.com/d819cb6d-b9aa-4d07-acf7-c4d02674cc7f/watermarked_preview/watermarked_preview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 mix-blend-overlay"></div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
