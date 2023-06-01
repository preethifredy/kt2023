
import React from "react";
//import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import classNames from "classnames";
import LinkButton from "@/app/components/LinkButton";
import Link from "next/link";
import Image from "next/image";

const KeralaStoryWrapper = ({ children }) => {
  return (
    <div className="item">
      <Col xs={12} className="post-slide item-widget k-stories">
        <Row>{children}</Row>
      </Col>
    </div>
  );
};

const StoryPostImage = ({ desktopImg, mobileImg }) => {
  const storyImgClassName = classNames({
    "w-100": true,
    "d-block": isMobile,
  });

  return (
    <Col lg={6} md={12} sm={12} xs={12} className="px-0">
      <Image
      src={isMobile ? mobileImg : desktopImg}
      className={storyImgClassName}
      alt=""
      title=""
      width={100}
      height={100}
      />
      {/* <img
        src={isMobile ? mobileImg : desktopImg}
        className={storyImgClassName}
        alt=""
        title=""
      /> */}
    </Col>
  );
};

const StoryAuthor = ({ authorImgUrl, authorName, profileTitle }) => {
  return (
    <div className="profile-page bg-grey-light w-100">
      <div className="profile-header mb-0">
        <Card.Body>
          <Row>
            <Col lg={2} md={3} xs={12}>
              <div className="profile-image">
                <img src={authorImgUrl} alt="" title="" />
              </div>
            </Col>
            <Col lg={10} md={9} col={12}>
              <div className="blogger-text">
                <h4 className="ibm-font-22 ibm-regular text-black">
                  <strong>{authorName}</strong>
                </h4>
                <p className="ibm-font-18 ibm-light text-black mb-0">
                  {profileTitle}
                </p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </div>
    </div>
  );
};

const StoryDescription = ({ heading, description}) => {
  return (
    <div className="desc mob-position-absolute position-relative">
      <Row>
        <Col xs={12}>
          <Link
            href="/"
            className="text-decoration-none small-text text-uppercase text-yellow ibm-semi-bold"
          >
            {`Inspiring`}
          </Link>
          <h3 className="head-sub font-flair mb-3">
            <Link href="/" className="underline-0 text-dark">
              {heading}
            </Link>
          </h3>
          <p className="text-black ibm-font-18 ibm-light">{description}</p>
          <Row className="pt-4">
            <Col lg={6} md={12} sm={12} xs={12}>
              <LinkButton linkText="more" link="/" />
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className="text-end">
              <Button
                type="submit"
                className="border-0 bg-transparent py-0 text-black underline-0 read-more play-btn"
              >
                <i className="la la-play" />
                Play video
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const StoryItem = ({
  imgUrl,
  mobileImgUrl,
  authorImgUrl,
  authorName,
  profileTitle,
  ...rest
}) => {
  return (
    <KeralaStoryWrapper>
      <StoryPostImage desktopImg={imgUrl} mobileImg={mobileImgUrl} />
      <Col
        lg={6}
        md={12}
        sm={12}
        xs={12}
        className="bg-light position-relative px-0"
      >
        <StoryDescription {...rest} />
        <StoryAuthor
          authorImgUrl={authorImgUrl}
          authorName={authorName}
          profileTitle={profileTitle}
        />
      </Col>
    </KeralaStoryWrapper>
  );
};

export default StoryItem;
