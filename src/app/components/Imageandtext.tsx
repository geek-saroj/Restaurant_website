// ImageWithText.tsx

import React from 'react';

interface ImageWithTextProps {
  imageSrc: string;
  textContent: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageSrc, textContent }) => {
  return (
    <div className="flex flex-col lg:flex-row">
     
      <div className="w-1/2">
        <img src={imageSrc} alt="Image" className="w-full" />
        <div className="flex justify-between mt-2">
          <button className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-1/2 px-4">
        <p className="text-lg font-semibold">{textContent}</p>
      </div>
    </div>
   
  );
};

export default ImageWithText;
