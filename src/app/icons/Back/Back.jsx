/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Back = ({ className }) => {
  return (
    <svg
      className={`back ${className}`}
      fill="none"
      height="44"
      viewBox="0 0 44 44"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_134_444)">
        <circle className="circle" cx="22" cy="18" fill="white" r="18" />
      </g>
      <g className="g" clipPath="url(#clip0_134_444)">
        <path
          className="path"
          d="M22 32.5312C13.9727 32.5312 7.46875 26.0273 7.46875 18C7.46875 9.97266 13.9727 3.46875 22 3.46875C30.0273 3.46875 36.5312 9.97266 36.5312 18C36.5312 26.0273 30.0273 32.5312 22 32.5312ZM28.7969 15.4219H22V11.2676C22 10.6406 21.2383 10.3242 20.7988 10.7695L14.1016 17.502C13.8262 17.7773 13.8262 18.2168 14.1016 18.4922L20.7988 25.2246C21.2441 25.6699 22 25.3535 22 24.7266V20.5781H28.7969C29.1836 20.5781 29.5 20.2617 29.5 19.875V16.125C29.5 15.7383 29.1836 15.4219 28.7969 15.4219Z"
          fill="#E75600"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="44"
          id="filter0_d_134_444"
          width="44"
          x="0"
          y="0"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="2" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_134_444" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_134_444"
            mode="normal"
            result="shape"
          />
        </filter>
        <clipPath className="clip-path" id="clip0_134_444">
          <rect className="rect" fill="white" height="30" transform="translate(7 3)" width="30" />
        </clipPath>
      </defs>
    </svg>
  );
};
