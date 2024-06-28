import React, { useState } from "react";
import nodejsLogo from "../assets/nodejs-logo.png";
import reactjsLogo from "../assets/reactjs-logo.png";
import tailwindLogo from "../assets/tailwind-logo.png";

const Card = () => {
  const [image, setImage] = useState(nodejsLogo);
  const [heading, setHeading] = useState("Node JS");
  const [text, setText] = useState(
    "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts"
  );

  const handleNodeComponent = () => {
    setImage(nodejsLogo);
    setHeading("Node JS");
    setText(
      "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts."
    );
  };
  const handleReactComponent = () => {
    setImage(reactjsLogo);
    setHeading("React JS");
    setText(
      "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."
    );
  };
  const handleTailwindComponent = () => {
    setImage(tailwindLogo);
    setHeading("Tailwind CSS");
    setText(
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12">
        <img src={image} alt={heading} className="w-full h-64 object-cover" />
        <div className="p-6 bg-green-100">
          <h2 className="text-2xl font-bold mb-2 text-green-800">{heading}</h2>
          <p className="text-gray-700 text-base mb-4">{text}</p>
          <div className="flex justify-around">
            <button
              onClick={handleNodeComponent}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
            >
              Node
            </button>
            <button
              onClick={handleReactComponent}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              React
            </button>
            <button
              onClick={handleTailwindComponent}
              className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-700"
            >
              Tailwind
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;