import React from "react";
import { Box } from "@mui/system";
import { Row, Col, NavLink } from "react-bootstrap";

const PhotoGallery = ({ photoGallery }) => {
  return (
    <Box mt={10}>
      <Row>
        <div className="head-desc pb-3 mb-3 mob-mb-2">
          <h3 className="head-title text-black font-flair font-flair-regular text-center">
            Photos
          </h3>
        </div>
        {photoGallery.map((photo, key) => (
          <Col lg={6} key={key} className={`mb-3`}>
            <Box mb={2} className={`position-relative`}>
              <NavLink className="p-0 img-hover rounded">
                <img
                  src={photo.imageUrl}
                  alt=""
                  className="w-100 rounded -trans"
                />
              </NavLink>
              <h5 className="gallery-card-title mb-0 p-3 ibm-font-22 text-bold position-absolute">
                <NavLink className="p-0 text-white hover-theme">
                  {photo.title}
                </NavLink>
              </h5>
            </Box>
          </Col>
        ))}
      </Row>
    </Box>
  );
};

export default PhotoGallery;
