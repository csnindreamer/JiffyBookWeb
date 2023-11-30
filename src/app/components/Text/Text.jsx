/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CustomText = ({ className, text = "Text 14BW" }) => {
   
  return (
    <div className={`text ${className}`} >
      <div className="text-bw">{text}</div>
    </div>
  );
};

CustomText.propTypes = {
  text: PropTypes.string,
 
};
