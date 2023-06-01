
import React from "react";
import { isMobile } from "react-device-detect";
import { Row, Col } from "react-bootstrap";

const Place = ({ title, description, mobileImgUrl, imgUrl }) => {
  return (
    <div className="item">
      <Col xs={12} className="post-slide item-widget">
        <Row>
          <img
            className="d-block w-100"
            src={isMobile ? mobileImgUrl : imgUrl}
            alt=""
            title=""
          />
          <Col lg={6} xs={12} className="h-100">
            <div className="desc-default">
              <h3 className="text-black head-sub font-flair">{title}</h3>
              <p className="text-dark ibm-font-18 font-light">{description}</p>
              <a href="/" className="text-dark underline-0 read-more">
                more <i className="la la-long-arrow-right"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Place;
