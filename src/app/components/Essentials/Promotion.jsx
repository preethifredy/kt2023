import React from "react";
import { Col } from "react-bootstrap";
import { string } from "prop-types";
import LinkButton from "../LinkButton";
const Promotion = ({ heading, description, promotionImage }) => {
  return (
    <Col lg={6}>
      <div className="img-block position-relative">
        <img src={promotionImage} alt="" title="" className="w-100" />
        <div className="desc">
          <h3 className="text-white head-sub font-flair">
            { heading }
          </h3>
          <p className="text-white ibm-font-18">
            { description }
          </p>
         
          <LinkButton
            buttonColor="white"
            link="/"
            linkText="more"
          />
        </div>
      </div>
    </Col>
  );
};

Promotion.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  promotionImage: string.isRequired
}

export default Promotion;

