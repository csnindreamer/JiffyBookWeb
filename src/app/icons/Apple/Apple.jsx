/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Apple = ({ className }) => {
  return (
    <svg
      className={`apple ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_134_431)">
        <circle className="circle" cx="28" cy="24" fill="white" r="24" />
      </g>
      <path
        className="path"
        d="M36.9086 24.893C36.8945 22.3125 38.0617 20.3648 40.4242 18.9305C39.1023 17.0391 37.1055 15.9984 34.4688 15.7945C31.9727 15.5977 29.2445 17.25 28.2461 17.25C27.1914 17.25 24.7727 15.8648 22.8742 15.8648C18.9508 15.9281 14.7812 18.9938 14.7812 25.2305C14.7812 27.0727 15.1187 28.9758 15.7937 30.9398C16.6938 33.5203 19.9422 39.8484 23.3313 39.743C25.1031 39.7008 26.3547 38.4844 28.6609 38.4844C30.8969 38.4844 32.057 39.743 34.0328 39.743C37.45 39.6938 40.3891 33.9422 41.2469 31.3547C36.6625 29.1961 36.9086 25.0266 36.9086 24.893ZM32.9289 13.3477C34.8484 11.0695 34.6727 8.99531 34.6164 8.25C32.9219 8.34844 30.9602 9.40313 29.8422 10.7039C28.6117 12.0961 27.8875 13.8188 28.0422 15.7594C29.8773 15.9 31.5508 14.9578 32.9289 13.3477Z"
        fill="black"
      />
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="56"
          id="filter0_d_134_431"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_134_431" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_134_431"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
