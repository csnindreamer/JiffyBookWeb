import React, { FunctionComponent, memo, useMemo, CSSProperties, ChangeEvent,useState } from "react";
import "./CustomTextIputWithError.css";

type CustomTextIputWithErrorType = { 
    type?:string;
   errortext?:string;
  inputText?: string;
  inputValue?: string;
  propTop?: CSSProperties["top"];
  propPosition?: CSSProperties["position"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propColor?: CSSProperties["color"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFlex?: CSSProperties["flex"];
  propColor1?: CSSProperties["color"];
  onInputChange?: (value: string) => void;
};

const CustomTextIputWithError: FunctionComponent<CustomTextIputWithErrorType> = memo(
  ({type, 
    errortext,
    inputText,
    inputValue,
    propTop,
    propPosition,
    propLeft,
    propWidth,
    propWidth1,
    propJustifyContent,
    propColor,
    propFontWeight,
    propFlex,
    propColor1,
    onInputChange,
  }) => {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const property1ErrorStyle: CSSProperties = useMemo(() => {
      return {
        top: propTop,
        position: propPosition,
        left: propLeft,
        width: propWidth,
      };
    }, [propTop, propPosition, propLeft, propWidth]);

    const frameDivStyle: CSSProperties = useMemo(() => {
      return {
        width: propWidth1,
        justifyContent: propJustifyContent,
      };
    }, [propWidth1, propJustifyContent]);

    const inputStyle: CSSProperties = useMemo(() => {
      return {
        color: propColor,
        fontWeight: propFontWeight,
        flex: propFlex,
      };
    }, [propColor, propFontWeight, propFlex]);

    const noteStyle: CSSProperties = useMemo(() => {
      return {
        color: propColor1,
      };
    }, [propColor1]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onInputChange) {
        onInputChange(event.target.value);
      }
    };
    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
      };
    return (
      <div className="property-1error" style={property1ErrorStyle}>
        <div className="input-wrapper" style={frameDivStyle}>
          <input
            type={isPasswordVisible ? "text" : type} // Use "text" if password visibility is enabled
            className="input"
            style={{ ...inputStyle, outline: "none" }}
            value={inputValue}
            onChange={handleInputChange}
           
            placeholder= {inputText}
          />

{type === "password" && ( // Show the show/hide password button only for password input
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle-btn"
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          )}
        </div>
        <div className="note" style={noteStyle}>
           {errortext}
        </div>
      </div>
    );
  }
);

CustomTextIputWithError.displayName = 'CustomTextIputWithError';

export default CustomTextIputWithError;
