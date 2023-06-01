'use client'
import React, { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";

import WhereToStay from './WhereToStay';
import TourOperator from './TourOperator';
import Itinerary from './Itinerary';
import Weather from '../Weather';

const tabItems = [
  {
    title: 'Where To Stay',
    identifier: 'where-to-stay'
  },
  {
    title: 'Find a tour operator',
    identifier: 'tour-operator'
  },
  {
    title: 'Plan your itinerary',
    identifier: 'plan-your-itinerary'
  }
];

const PlanYourTrip = () => {
  const [key, setKey] = useState("where-to-stay");
  
  return (
    <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav variant="pills" as="ul" className="mb-5 border-bottom">
        {tabItems.map(({ title, identifier}, key) => (
          <Nav.Item as="li" key={key}>
            <Nav.Link
              eventKey={identifier}
              as="button"
              className="text-uppercase font-22 text-black text-bold"
            >
              { title }
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Row>
        <Col xs={8}>
          <Tab.Content>
            <Tab.Pane eventKey="where-to-stay">
              <WhereToStay/>
            </Tab.Pane>
            <Tab.Pane eventKey="tour-operator">
              <TourOperator/>
            </Tab.Pane>
            <Tab.Pane eventKey="plan-your-itinerary">
              <Itinerary/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col xs={4}>
          <Weather />
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default PlanYourTrip;
