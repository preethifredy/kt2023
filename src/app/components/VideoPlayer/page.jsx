'use client'
import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import {
  Player,
  VideoControls,
  VideoControlItem,
  PlayerButton,
  AudioIcon,
  VideoPlayIcon
} from './shared/Player';


const VideoPlayer = ({ 
  url, 
  active,
  isProgressShow = false,
  setProgress,
  handlePlayEnd,
  single = false
}) => {
  const videoElem = useRef();
  const [videoPlayState, setVideoPlayState] = useState(true);
  const [audioState, setAudioState] = useState(false);

  useEffect(() => {
    if (active) {
      if (isProgressShow) {
        videoElem.current.addEventListener("timeupdate", _handleGetProgess);
      }

      if (typeof(handlePlayEnd) === 'function')
        videoElem.current.addEventListener('ended', handlePlayEnd)

      if (single)
        videoElem.current.loop = true

      videoElem.current.currentTime = 0;
      videoElem.current.play();
    } else {
      videoElem.current.pause();
      if (!videoPlayState) 
        setVideoPlayState(!videoPlayState)
      if (!audioState)
        setAudioState(!audioState)
    }
  }, [active, isProgressShow, single])

  const _handleGetProgess = () => {
    const videoDuration = videoElem.current?.duration;
    const videoPlayCurrentTime = videoElem.current?.currentTime;
    if (
      typeof videoDuration !== "undefined" &&
      typeof videoPlayCurrentTime !== "undefined"
    ) {
      const progress = Math.floor((videoPlayCurrentTime / videoDuration) * 100);
      setProgress(progress);
    }
  };

  const _handlePlay = () => {
    if (videoElem.current.paused || videoElem.current.ended) {
      videoElem.current.play();
      setVideoPlayState(true);
    } else {
      videoElem.current.pause();
      setVideoPlayState(false);
    }
  };

  const _handleAudio = () => {
    videoElem.current.muted = !videoElem.current.muted;
    setAudioState(!videoElem.current.muted);
  };

  return (
    <div className="banner-slider-wrap">
      <Player ref={videoElem} url={url} />
      <VideoControls>
        <VideoControlItem>
          <PlayerButton onClick={_handlePlay}>
            <VideoPlayIcon videoState={videoPlayState}/>
          </PlayerButton>
          <PlayerButton onClick={_handleAudio}>
            <AudioIcon audioState={audioState}/>
          </PlayerButton>
        </VideoControlItem>
      </VideoControls>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  isProgressShow: PropTypes.bool,
  setProgress: PropTypes.func,
  handlePlayEnd: PropTypes.func
};

export default VideoPlayer;

