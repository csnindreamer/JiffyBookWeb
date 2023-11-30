/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  property1: "value" | "default" | "variant-5" | "error" | "on-click";
  className: any;
  text: string;
}

export const InputBlackBg = ({ property1, className, text = "Input" }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`input-black-BG ${className}`}>
      <div
        className="frame"
        onClick={() => {
          dispatch("click");
        }}
      >
        <div className={`input ${state.property1}`}>
          {["default", "error"].includes(state.property1) && <>{text}</>}

          {["on-click", "variant-5"].includes(state.property1) && <>|</>}

          {state.property1 === "value" && <>Value</>}
        </div>
      </div>
      <div className={`text-wrapper property-1-${state.property1}`}>Note</div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "on-click",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "click":
        return {
          property1: "value",
        };
    }
  }

  return state;
}

InputBlackBg.propTypes = {
  property1: PropTypes.oneOf(["value", "default", "variant-5", "error", "on-click"]),
  text: PropTypes.string,
};
