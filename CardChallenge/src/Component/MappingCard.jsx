import React, { useState } from "react";
import Data from "./Data";

export default function MappingCard() {
  const [currIndx, setCurrIndx] = useState(0);

  const { image, heading, text } = Data[currIndx];

  const handleComponent = (index) => {
    setCurrIndx(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12">
        <img src={image} alt={heading} className="w-full h-64 object-cover" />
        <div className="p-6 bg-green-100">
          <h2 className="text-2xl font-bold mb-2 text-green-800">{heading}</h2>
          <p className="text-gray-700 text-base mb-4">{text}</p>
          <div className="flex justify-around">
            {Data.map((item, index) => {
              <button
              key={index}
                onClick={() => handleComponent(index)}
                className={`bg-${
                  index === currIndx ? "green" : "blue"
                }-500 text-white font-bold py-2 px-4 rounded hover:bg-${
                  index === currIndx ? "green" : "blue"
                }-700`}
              >
                {item.heading}
              </button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
