'use client'
import React, { useState } from "react";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
//import OwlCarousel from "react-owl-carousel";
//import { Section } from "@components";

import WhatNewItem from './components/WhatNewItem';
import { whatsNewItems } from '../data';

import './_whatNew.scss';
import Section from "@/app/components/Section";

const WhatNew = () => {
  const [whatsNew, setWhatNew] = useState(whatsNewItems);
  return (
    
    <Section
      id="block-essential"
      className="what-new section-block"
      title="What's new"
      description={`Here's a quick glance on what's trending in God's Own Country now.`}
      isFluid={false}
      renderedIn={`container`}
    >
      {whatsNew.length > 0 && (
        <OwlCarousel
          className="owl-theme"
          items={1}
          margin={0}
          loop={false}
          nav={true}
          dots={true}
          autoplay={true}
          smartSpeed={1200}
          autoplayTimeout={10000}
          navText={[
            "<img src='/icons/arrow-prev.svg'/>",
            "<img src='/icons/arrow-next.svg'/>",
          ]}
        >
          {whatsNew.map((whatNew, key) => (
            <WhatNewItem {...whatNew} key={key} />
          ))}
        </OwlCarousel>
      )}
    </Section>
  );
};

export default WhatNew;
