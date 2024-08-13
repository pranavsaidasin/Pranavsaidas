import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import PropTypes from "prop-types";

export const ImageSlider = ({ images }) => {
  const { filtered, normal } = images;
  return (
    <div className="w-full">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={`/images${normal}`} alt="Image one" />
        }
        itemTwo={
          <ReactCompareSliderImage src={`/images${filtered}`} alt="Image two" />
        }
        className="md:h-[29.778rem] 2xl:h-full"
        style={{
          width: "100%",
          borderRadius: "1.563rem",
          touchAction: "pan-y",
        }}
        position={7}
        onlyHandleDraggable={true}
      />
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.object,
};
