import React, { useRef, useEffect } from "react";

const SliderNavItem = ({
  active,
  sliderIndex,
  destination,
  progress,
  _handleSliderNav,
}) => {
  const progressRef = useRef(null);

  const removeProgressStyle = () => {
    progressRef.current.removeAttribute("style");
  };

  const setProgressWidth = (progress = 0) => {
    progressRef.current.style.width = progress > 0 ? `${progress}%` : "0";
  };

  const setProgressBackground = () => {
    progressRef.current.style.backgroundColor = "#ffcb0d";
  };

  useEffect(() => {
    if (progress > 0 && active) {
      setProgressWidth(progress);
      setProgressBackground();
    } else {
      removeProgressStyle();
    }
  }, [progress, active]);

  return (
    <li
      className="position-relative text-white list-unstyled mx-2 lineList"
      onClick={() => {
        _handleSliderNav(sliderIndex);
      }}
    >
      <i className="topLine"></i>
      <span className={`d-block line-progress`} ref={progressRef}>
        
      </span>
      {destination}
    </li>
  );
};

export default SliderNavItem;
