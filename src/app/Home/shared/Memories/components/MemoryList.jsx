import React, { Fragment }from 'react';
import classNames from "classnames";
import { Row, Col } from "react-bootstrap";

const ExternalLink = ({ className, linkTitle, children, ...rest }) => {
  return (
    <a className={className} {...rest}>
      {linkTitle}
      {children && children}
    </a>
  );
};

const MemoryListItem = ({
  heading, 
  description, 
  images: {
    desktop,
    alt
  }, 
  link : {
    button_title,
    button_text
  }, 
  isLast
}) => {
  const memoryWrapperClass = classNames({
    'post-slide item-widget memories-widget': true,
    'mb-5 mob-mb-2': !isLast
  });

  return (
    <div className="item">
      <Col xs={12} className={memoryWrapperClass}>
        <Row>
          <Col lg={4} md={6} sm={12} xs={12} className="mob-pb-5">
            <div className="desc px-5">
              <h3 className="head-title-sub flair-regular mb-3 text-black font-flair">
                {heading}
              </h3>
              <p className="ibm-light ibm-font-26 text-black">{description}</p>
              <ExternalLink
                className="text-black underline-0 read-more"
                title={button_title}
                linkTitle={button_text}
                href="/"
              >
                <i className="la la-long-arrow-right"/>
              </ExternalLink>
            </div>
          </Col>
          <Col lg={8} md={6} sm={12} xs={12}>
            <div className="img-block">
              <img src={desktop} alt={alt} className="w-100" />
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

const MemoryList = ({ memories }) => {
  return (
    <Fragment>
      {memories.map((memory, key) => (
        <MemoryListItem
          {...memory}
          key={key}
          isLast={key === memories.length - 1 ? true : false}
        />
      ))}
    </Fragment>
  )
};

export default MemoryList;
