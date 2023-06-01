import React from 'react';
import VideoPlayer from '../VideoPlayer/page';
//import { VideoPlayer } from "@components";
import BannerLayout from './Layout';

const BannerVideoPlayer = ({ url }) => {
  return (
    <BannerLayout>
      
      <VideoPlayer
        url={url}
        single
        active
      />
    </BannerLayout>
  );
};

export default BannerVideoPlayer;
