/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Windows = ({ className }) => {
  return (
    <svg
      className={`windows ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_134_411)">
        <circle className="circle" cx="28" cy="24" fill="white" r="24" />
      </g>
      <path
        className="path"
        d="M12.25 12.5883L25.1594 10.8094V23.2828H12.25V12.5883ZM12.25 35.4117L25.1594 37.1906V24.8719H12.25V35.4117ZM26.5797 37.3805L43.75 39.75V24.8719H26.5797V37.3805ZM26.5797 10.6195V23.2828H43.75V8.25L26.5797 10.6195Z"
        fill="black"
      />
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="56"
          id="filter0_d_134_411"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_134_411" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_134_411"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
