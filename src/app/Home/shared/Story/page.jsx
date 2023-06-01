'use client'
import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
//import { fetchStoriesFromKerala } from "@app/api/page";
//import { Section, LinkButton } from "@components";

import './_story.scss';
import Section from "@/app/components/Section";
import LinkButton from "@/app/components/LinkButton";
import { fetchStoriesFromKerala } from "@/app/api/page";

const Story = () => {
  const [story, setStory] = useState({});

  useEffect(() => {
    const fetchKeralaStory = async () => {
      const response = await fetchStoriesFromKerala();
      const {
        data: { stories_for_kerala },
      } = response.data;
      setStory(stories_for_kerala);
    };
    fetchKeralaStory();
  }, []);

  const storyBackgroundStyle = StyleSheet.create({
    root: {
      background: `url(${story?.images?.desktop}) no-repeat`,
      padding: "250px 0",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },
  });

  return (
    
    <Section
      id="block-stories"
      className="section-block mob-pt-0 position-relative pb-0"
      title={`Stories from Kerala`}
      description={`Get inspired for a trip to God's Own Country now.`}
      isFluid={true}
      renderedIn={`container`}
    >
      <div className={css(storyBackgroundStyle.root)}>
        <div className="post-slide item-widget">
          <div className="desc">
            <div className="px-5 mob-px-3 text-center custom-wrap">
              <h3 className="text-white font-flair border-bottom pb-3 mb-3">
                {story.heading}
              </h3>
              <p className="text-white ibm-font-18 font-light">
                {story.description}
              </p>
              <LinkButton
                buttonColor="white"
                linkText="more"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Story;
