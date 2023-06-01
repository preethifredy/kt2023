'use client'
import React from "react";
import { Col } from 'react-bootstrap';
import Section from "../Section";
//import { Section } from "@components";

import PlanYourTrip from './PlanYourTrip/page';

const Essentials = () => {
  return (   
    <Section
      id="block-essentials"
      className="essentials section-block"
      title={`Essentials`}
      description={`Everything you need to consider for a trip to Kerala now.`}
      isFluid={false}
      isWrap={true}
      renderedIn={`container`}
    >
      <Col xs={12}>
        <PlanYourTrip/>
      </Col>
    </Section>
  );
};

export default Essentials;
