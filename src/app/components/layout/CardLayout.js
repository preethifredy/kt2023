import React from "react";
import { Col, Row } from "react-bootstrap";
//import { ExploreCard, ExploreItem, LinkButton } from "@components";
import { Box } from "@mui/system";
import ExploreCard from "../ExploreCard";
import ExploreItem from "../ExploreItem";
import LinkButton from "../LinkButton";


const CardLayout = ({
  heading,
  exploreCardData: { title, imageUrl, description, subExploreItems },
  linkTo = null,
}) => {
  return (
    <Col lg={6}>
      <h3 className="head-title-child-sub mb-3 text-black font-flair">
        {heading}
      </h3>
      <ExploreCard
        imageUrl={imageUrl}
        title={title}
        description={description}
      />
      {subExploreItems?.length > 0 && (
        <Row>
          {subExploreItems.map(({ imageUrl, title }, key) => (
            <ExploreItem imageUrl={imageUrl} title={title} key={key} />
          ))}
        </Row>
      )}

      {linkTo && (
        <Box mt={2} display="flex" justifyContent={`center`}>
          <LinkButton link={linkTo} linkText="explore" />
        </Box>
      )}
    </Col>
  );
};

export default CardLayout;
