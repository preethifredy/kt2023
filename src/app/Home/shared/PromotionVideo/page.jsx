import Link from 'next/link';

import './_promotionVideo.scss';

const PromotionVideo = () => {
  return (
    <div className="item">
      <div className="post-slide item-widget video-widget col-12">
        <div className="row">
          <img src="/video/video-bg.jpg" alt="" />
          <div className="play-btn posCenter">
            <Link href="/" className="btn-stroke">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="120px"
                height="120px"
                viewBox="0 0 213.7 213.7"
                enableBackground="new 0 0 213.7 213.7"
              >
                <polygon
                  className="triangle"
                  id="XMLID_18_"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="73.5,62.5 148.5,105.8 73.5,149.1 "
                />
                <circle
                  className="strokecircle"
                  id="XMLID_17_"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  cx="106.8"
                  cy="106.8"
                  r="103.3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionVideo;
