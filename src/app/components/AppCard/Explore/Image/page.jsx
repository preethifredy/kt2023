import React from "react";
import { Col, NavLink } from "react-bootstrap";
import { string } from "prop-types";
import { Box } from "@mui/system";

const ExploreImage = ({ imageUrl, title }) => {
  return (
    <Col lg={6}>
      <Box mb={2}>
        <NavLink className="p-0 img-hover rounded">
          <img
            src={imageUrl}
            className="w-100 rounded -trans"
            alt=""
            title=""
          />
        </NavLink>
      </Box>
      <h6 className="ibm-flex-18 text-black text-bold">
        <NavLink className="p-0 text-black">{title}</NavLink>
      </h6>
    </Col>
  );
};

ExploreItem.propTypes = {
  imageUrl: string.isRequired,
  title: string.isRequired,
};

export default ExploreImage;
