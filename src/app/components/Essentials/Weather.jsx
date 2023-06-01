import React from "react";

import { Col } from "react-bootstrap";
import useScript from "@app/hooks/useScript";

const Weather = () => {
  useScript("https://weatherwidget.io/js/widget.min.js");

  return (
    <Col xs={12} className="h-100 bg-light">
      <div className="col-lg-12 h-100 weather-fixed">
        <div className="desc desc-top text-center position-relative">
          <h4 className="text-black font-28">Weather today</h4>
          <span className="d-block py-3">
            <a
              className="weatherwidget-io read-more-lg underline-0 text-black"
              href="https://forecast7.com/en/10d8576d27/kerala/"
              data-label_1="KERALA"
              data-label_2="WEATHER"
              data-mode="Current"
              data-theme="pure"
            >
              Kerala Weather
            </a>
          </span>
        </div>
        <div className="desc desc-btm text-center position-relative">
          <h4 className="text-black font-28">
            Tourist Information <br />
            Centres
          </h4>
          <span className="d-block py-3">
            <i className="icon-cloud icon">
              <img src="planYourTrip/Information_center.svg" alt="" title="" />
            </i>
          </span>
          <h5 className="mb-0">
            <a href="/" className="read-more-lg underline-0 text-black">
              Reach out and find more details to plan <br />
              your trip better{" "}
              <i className="icon">
                <img src="planYourTrip/right-long-arrow.svg" alt="" title="" />
              </i>
            </a>
          </h5>
        </div>
      </div>
    </Col>
  );
};

export default Weather;
