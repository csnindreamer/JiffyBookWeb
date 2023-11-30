import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import "./Property1Default.css";

type Property1DefaultType = {
  dimensionCode?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propPosition?: CSSProperties["position"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propCursor?: CSSProperties["cursor"];
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propCursor1?: CSSProperties["cursor"];
  propWidth2?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propLeft1?: CSSProperties["left"];

  /** Action props */
  onSubmitBlackBGClick?: () => void;
  onRectangle1Click?: () => void;
};

const Property1Default: FunctionComponent<Property1DefaultType> = memo(
  ({
    dimensionCode,
    propTop,
    propLeft,
    propPosition,
    propAlignSelf,
    propCursor,
    propWidth,
    propBackgroundColor,
    propWidth1,
    propAlignSelf1,
    propCursor1,
    propWidth2,
    propRight,
    propLeft1,
    onSubmitBlackBGClick,
    onRectangle1Click,
  }) => {
    const property1DefaultStyle: CSSProperties = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
        position: propPosition,
        alignSelf: propAlignSelf,
        cursor: propCursor,
        width: propWidth,
      };
    }, [propTop, propLeft, propPosition, propAlignSelf, propCursor, propWidth]);

    const rectangleDivStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
        width: propWidth1,
        alignSelf: propAlignSelf1,
        cursor: propCursor1,
      };
    }, [propBackgroundColor, propWidth1, propAlignSelf1, propCursor1]);

    const vectorIconStyle: CSSProperties = useMemo(() => {
      return {
        width: propWidth2,
        right: propRight,
        left: propLeft1,
      };
    }, [propWidth2, propRight, propLeft1]);

    return (
      <div
        className="property-1default"
        style={property1DefaultStyle}
        onClick={onSubmitBlackBGClick}
      >
        <div
          className="property-1default-child"
          style={rectangleDivStyle}
          onClick={onRectangle1Click}
        />
        <img
          className="vector-icon"
          alt=""
          src={dimensionCode}
          style={vectorIconStyle}
        />
      </div>
    );
  }
);

Property1Default.displayName = 'Property1Default';
export default Property1Default;
