import React from "react";
import { Row, Col } from "react-bootstrap";

const ExternalLink = ({ className, linkTitle, children, ...rest }) => {
  return (
    <a className={className} {...rest}>
      {linkTitle}
      {children && children}
    </a>
  );
};

const ItemImage = ({ src, alt }) => {
  return (
    <picture>
      <source srcSet={src} media="(max-width: 767px)" className="w-100" />
      <img className="d-block w-100" src={src} alt={alt} title="" />
    </picture>
  );
};

const ItemDescription = ({
  heading,
  description,
  link: { button_text, button_title, value },
}) => {
  return (
    <div className="desc-esntl">
      <span className="link-holder d-inline-block mb-1">
        <ExternalLink
          className="font-16 font-light text-decoration-none text-yellow text-uppercase"
          linkTitle="Latest Update"
          href="/"
        />
        <h3 className="text-white head-sub font-flair">{heading}</h3>
        <p className="text-white ibm-font-18 font-light">{description}</p>
        <ExternalLink
          linkTitle={button_text}
          title={button_title}
          href={value}
          className="text-yellow text-decoration-none read-more"
          target="_blank"
        >
          <i className="la la-long-arrow-right" />
        </ExternalLink>
      </span>
    </div>
  );
};

const WhatNewItem = ({ images: { alt, desktop }, ...rest }) => {
  return (
    <div className="item">
      <div className="post-slide item-widget col-12">
        <Row>
          <ItemImage src={desktop} alt={alt} />
          <Col lg={6} xs={12} className="col-overlay position-absolute h-100">
            <ItemDescription {...rest} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhatNewItem;
