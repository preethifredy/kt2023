'use client'
import LinkButton from '@/app/components/LinkButton';
import { DestinationCard } from '@/app/components/page';
import Section from '@/app/components/Section';
import React from 'react';

import { Row } from "react-bootstrap";

//import { destinationItems } from '../data';

const Discover = (props) => {
  const {data}=props;
  const items=data.items;
  return (
  
    <Section
      id="block-discover"
      className="section-block position-relative bg-white"
      title={data.heading}
      description={data.description}
      isFluid={false}
      isContainerRelative={true}
      renderedIn={`container`}
    >
      <Row className="box-shadow mx-0">
     
        {items.map((destination, key) => (         
          <DestinationCard {...destination} key={key} />
        ))}
      </Row>
      <LinkButton
        isAbsolute={true}
        isCustom={true}
        link={data.link.href}
        linkText={data.link.text}
      />
    </Section>
  );
};

export default Discover;
