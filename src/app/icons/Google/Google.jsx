/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Google = ({ className, onClick  }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <svg
      className={`google ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g className="g" filter="url(#filter0_d_134_407)">
        <circle className="circle" cx="28" cy="24" fill="white" r="24" />
      </g>
      <g className="g" clipPath="url(#clip0_134_407)">
        <path
          className="path"
          d="M45.1562 24.4078C45.1562 34.357 38.343 41.4375 28.2812 41.4375C18.6344 41.4375 10.8438 33.6469 10.8438 24C10.8438 14.3531 18.6344 6.5625 28.2812 6.5625C32.9781 6.5625 36.9297 8.28516 39.9742 11.1258L35.2281 15.6891C29.0195 9.69844 17.4742 14.1984 17.4742 24C17.4742 30.082 22.3328 35.0109 28.2812 35.0109C35.1859 35.0109 37.7734 30.0609 38.1812 27.4945H28.2812V21.4969H44.882C45.0438 22.3898 45.1562 23.2477 45.1562 24.4078Z"
          fill="black"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="56"
          id="filter0_d_134_407"
          width="56"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_134_407" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_134_407"
            mode="normal"
            result="shape"
          />
        </filter>
        <clipPath className="clip-path" id="clip0_134_407">
          <rect className="rect" fill="white" height="36" transform="translate(10 6)" width="36" />
        </clipPath>
      </defs>
    </svg>
  );
};
