import React from "react";
//import OwlCarousel from "react-owl-carousel";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
//import { Section, LinkButton } from "@components";
//import StoryItem from './components/StoryItem';

import { keralaStoriesItems } from '../data';

import './_keralaStory.scss'
import Section from "@/app/components/Section";
import LinkButton from "@/app/components/LinkButton";
import StoryItem from "./components/StoryItem";

const KeralaStory = () => {
  return ( 
      
    <Section
      id="block-kerala-story"
      className="kerala-story section-block position-relative pt-3"
      title={`My Kerala story`}
      description={`Find amazing travel stories and videos shared by our informal ambassadors across the globe.`}
      isFluid={true}
      readMoreLink="#"
      renderedIn={`container-out`}
    >
      <OwlCarousel
        className="owl-theme carousel-mirror"
        items={1}
        margin={0}
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
        {keralaStoriesItems.map((keralaStory, key) => (
          <StoryItem {...keralaStory} key={key} />
        ))}
      </OwlCarousel>
      <LinkButton isAbsolute={true} link={`#`} linkText={`explore`} />
    </Section>
  );
};

export default KeralaStory;
