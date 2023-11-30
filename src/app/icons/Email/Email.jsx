/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Email = ({ className , onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <svg
      className={`email ${className}`}
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g className="g" filter="url(#filter0_d_134_423)">
        <circle className="circle" cx="28" cy="24" fill="white" r="24" />
      </g>
      <g className="g" clipPath="url(#clip0_134_423)">
        <path
          className="path"
          d="M22.375 21.1876H33.625C34.2466 21.1876 34.75 20.6842 34.75 20.0626V18.9376C34.75 18.316 34.2466 17.8126 33.625 17.8126H22.375C21.7534 17.8126 21.25 18.316 21.25 18.9376V20.0626C21.25 20.6842 21.7534 21.1876 22.375 21.1876ZM21.25 26.8126C21.25 27.4342 21.7534 27.9376 22.375 27.9376H33.625C34.2466 27.9376 34.75 27.4342 34.75 26.8126V25.6876C34.75 25.066 34.2466 24.5626 33.625 24.5626H22.375C21.7534 24.5626 21.25 25.066 21.25 25.6876V26.8126ZM28 35.3296C26.8455 35.3296 25.6909 34.9738 24.7052 34.2615L10 23.6387V38.6251C10 40.4891 11.511 42.0001 13.375 42.0001H42.625C44.489 42.0001 46 40.4891 46 38.6251V23.6387L31.2948 34.2615C30.3091 34.9731 29.1545 35.3296 28 35.3296ZM44.707 17.4575C44.0847 16.9695 43.4948 16.5104 42.625 15.8537V12.7501C42.625 10.8861 41.114 9.3751 39.25 9.3751H33.7973C33.5835 9.22041 33.3845 9.07556 33.1616 8.91385C31.9797 8.05111 29.6313 5.97549 28 6.00009C26.3687 5.97549 24.021 8.05111 22.8384 8.91385C22.6155 9.07556 22.4165 9.22041 22.2027 9.3751H16.75C14.886 9.3751 13.375 10.8861 13.375 12.7501V15.8537C12.5052 16.5097 11.9153 16.9695 11.293 17.4575C10.8903 17.7732 10.5645 18.1763 10.3405 18.6364C10.1165 19.0965 10.0001 19.6015 10 20.1132V20.862L16.75 25.7382V12.7501H39.25V25.7382L46 20.862V20.1132C46 19.0768 45.5233 18.0974 44.707 17.4575Z"
          fill="black"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="56"
          id="filter0_d_134_423"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_134_423" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_134_423"
            mode="normal"
            result="shape"
          />
        </filter>
        <clipPath className="clip-path" id="clip0_134_423">
          <rect className="rect" fill="white" height="36" transform="translate(10 6)" width="36" />
        </clipPath>
      </defs>
    </svg>
  );
};
