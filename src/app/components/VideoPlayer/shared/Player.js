import React from "react";

export const Player = React.forwardRef(({ url }, ref) => {
  return (
    <figure className={`m-0 video-item`}>
      <video autoPlay id="video" ref={ref} muted>
        <source type="video/mp4" src={url} />      
      </video>
    </figure>
  );
});

export const VideoControls = ({ children }) => {
  return (
    <ul
      className={`video-controls p-0 list-unstyled position-absolute m-0`}
    >
      {children}
    </ul>
  );
};

export const VideoControlItem = ({ children }) => {
  return (
    <li className="d-inline-flex">
      { children }
    </li>
  )
};

export const PlayerButton = ({ onClick, children }) => {
  return (
    <button
      className="btn-cntrl bg-transparent me-1"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const AudioIcon = ({ audioState }) => {
  return (
    <>
      {audioState ? (
        <i className="la la-volume-up" />
      ) : (
        <i className="la la-volume-mute" />
      )}
    </>
  );
};

export const VideoPlayIcon = ({ videoState }) => {
  return (
    <>
      {videoState ? (
        <i className="la la-pause" />
      ) : (
        <i className="la la-play" />
      )}
    </>
  );
};