/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const SubmitBlackBg1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`submit-black-bg-1 ${className}`}
      fill="none"
      height="44"
      viewBox="0 0 308 44"
      width="308"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_134_457)">
        <rect className="rect" fill="#E75600" height="36" rx="18" width="300" x="4" />
      </g>
      <path
        className="path"
        d="M150.198 26.6465L142.353 18.8016C141.882 18.3303 141.882 17.5662 142.353 17.0948L144.06 15.388C144.532 14.9166 145.296 14.9166 145.767 15.388L151.052 20.6726L162.371 9.35348C162.842 8.88217 163.606 8.88217 164.078 9.35348L165.785 11.0603C166.256 11.5316 166.256 12.2958 165.785 12.7671L151.905 26.6465C151.434 27.1178 150.67 27.1178 150.198 26.6465Z"
        fill="white"
      />
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="44"
          id="filter0_d_134_457"
          width="308"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_134_457" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_134_457"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
