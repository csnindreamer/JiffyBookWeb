/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  text: string;
}

export const Keyword = ({ className, text = "Keyword 14BW" }: Props): JSX.Element => {
  return (
    <div className={`keyword ${className}`}>
      <div className="keyword-bw">{text}</div>
    </div>
  );
};

Keyword.propTypes = {
  text: PropTypes.string,
};
