'use client'
import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite/no-important";

import BannerLayout from "./Layout";

const bannerStyleSheet = StyleSheet.create({
  text_block: {
    top: "50%",
    position: "absolute",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
  },
});

const ImageBanner = ({ bannerImage, bannerHeading }) => {
  return (
    <BannerLayout>
      <div className="img-block">
        <img src={bannerImage} alt="" title="" className="w-100" />
        <div className={`${css(bannerStyleSheet.text_block)} text_block w-100`}>
          <Container>
            <h2 className="text-white font-flair banner_text">
              {bannerHeading}
            </h2>
          </Container>
        </div>
      </div>
    </BannerLayout>
  );
};

ImageBanner.propTypes =  {
  bannerImage: PropTypes.string.isRequired,
  bannerHeading: PropTypes.string.isRequired
};

export default ImageBanner;
