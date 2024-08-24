import React from 'react';
import { VideoWrap } from '../../styled/main';

const VideoSection = () => {
  return (
    <VideoWrap>
      <video className="bgvid" id="player" autoPlay muted loop>
        <source src="https://dfrkkcv2hg1jc.cloudfront.net/data/video/monami_brand_web_60.mp4" type="video/mp4" />
        <source src="https://dfrkkcv2hg1jc.cloudfront.net/data/video/monami_brand_web_60.ogv" type="video/ogv" />
      </video>
    </VideoWrap>
  );
};

export default VideoSection;