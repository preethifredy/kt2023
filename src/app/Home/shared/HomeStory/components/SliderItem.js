import VideoPlayer from "@/app/components/VideoPlayer/page";
import React from "react";
import { SliderDescription } from "./page";
//import { VideoPlayer } from "@components";

const SliderItem = ({
  video,
  active,
  activeSliderIndex,
  _handleUpdateProgress,
  _handleSliderNav,
  ...rest
}) => {

  const _updateProgress = (progress) => {
    _handleUpdateProgress(progress, activeSliderIndex);
  };

  return (
    <>
   
    <div className={`col-12`}>
      <div className="slider-item position-relative">
        <VideoPlayer
          url={video}
          active={active}
          isProgressShow={true}
          setProgress={_updateProgress}
          handlePlayEnd={_handleSliderNav}
        />
        <SliderDescription {...rest} />
      </div>
    </div>
    </>
  );
};

export default SliderItem;
