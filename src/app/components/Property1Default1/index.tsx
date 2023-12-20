import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import "./Property1Default1.css";

type Property1Default1Type = {
  dataValue?: string;
  onClick?: () => void; // Add onClick prop for handling click events
  dimensionCode?: string; 
imageurl?:string;



  propAlignSelf?: string; 
  propCursor?: string; 
  propWidth?: string; 
  propBackgroundColor?: string; 
  propWidth1?: string; 
  propAlignSelf1?: string; 
  propCursor1?: string; 
  propWidth2?: string; 
  propRight?: string; 
  propLeft1?: string; 
  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Property1Default1: FunctionComponent<Property1Default1Type> = memo(
  ({ dataValue,onClick, propPosition, propTop, propLeft,imageurl }) => {
    const property1Default1Style: CSSProperties = useMemo(() => {
      return {
        position: propPosition,
        top: propTop,
        left: propLeft,
      };
    }, [propPosition, propTop, propLeft]);

    return (
      <div className="property-1default1" style={property1Default1Style} onClick={onClick}>
        <div className="value-group">
          <b className="value4">{dataValue}</b>
          <img className="caret-down-icon1" alt="" src={imageurl}  />
        </div>
      </div>
    );
  }
);
Property1Default1.displayName = "Property1Default1";
export default Property1Default1;
