import LinkButton from '@/app/components/LinkButton';
import { EventCard } from '@/app/components/page';
import Section from '@/app/components/Section';
import React from 'react';
//import OwlCarousel from "react-owl-carousel";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
//import { Section, EventCard, LinkButton } from "@components";

import { events } from '../data';

const Events = () => {
  return (
    <Section
      id="block-events"
      className="section-block"
      title="Events"
      description={`Browse through the list of events to know more about what's happening in kerala now`}
      readMoreLink="#"
      isContainerRelative={true}
      renderedIn={`container`}
    >
      <OwlCarousel
        className="owl-theme carousel-mirror"
        items={3}
        margin={30}
        loop={false}
        nav={true}
        dots={true}
        autoplay={true}
        smartSpeed={1200}
        autoplayTimeout={10000}
        navText={[
          "<img src='/icons/arrow-sm-prev.svg' />",
          "<img src='/icons/arrow-sm-next.svg'/>",
        ]}
      >
        {events.map((event, key) => (
          <EventCard {...event} key={key} />
        ))}
      </OwlCarousel>
      <LinkButton
        isAbsolute={true}
        isCustom={true}
        link={`#`}
        linkText={`explore`}
      />
    </Section>
  );
};

export default Events;
