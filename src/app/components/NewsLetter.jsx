'use client'
import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@mui/material/Button";

//import Input from "../FormFields/Input";
import Section from "./Section";
import Input from "./FormFields/Input";


const NewsLetter = () => {
  return (
    <Section
      id="block-newsletter"
      className="section-block-md"
      isWrap={true}
      title={`Subscribe to our newsletter`}
      description={`Sign up for Kerala Tourism's monthly newsletter to learn about our events, offers and more…`}
      renderedIn={`container`}
    >
      <Row className="px-0 newsletterForm">
        <Col xs={5}>
           
          <Input label="Name" type="text" fullWidth />
        </Col>
        <Col xs={5}>
          <Input label="Email" type="email" fullWidth />
        </Col>
        <Col xs={2} className="text-end">
          <Button
            variant="contained"
            className="text-capitalize mt-2 btn-submit btn btn-md py-2 px-4 font-16 bg-yellow text-dark rounded underline-0 -trans"
          >
            Subscribe
          </Button>
        </Col>
      </Row>
    </Section>
  );
};

export default NewsLetter;
