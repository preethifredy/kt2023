'use client'
import React, { useState } from "react";
import update from "immutability-helper";
import { Transition } from "react-transition-group";

// import { fetchHomeStories } from "@api";
import { SliderItem, SliderNavItem } from "./components/page";
//import { homeSliderStories } from "../data";

import './_homeStory.scss';

//  Transition config
const transitionDuration = 1.5;
const SliderTransitionSettings = Object.freeze({
  defaultStyle: {
    transition: `opacity ${transitionDuration}s ease-in-out`,
    opacity: 0,
  },
  transitionStyles: {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5 },
    exited: { opacity: 0 },
  },
});

const page = (props) => {
  const {data}=props;
  const homeSliderStories=data.items;
  // Destructuring transition config
  const { defaultStyle, transitionStyles } = SliderTransitionSettings;

  const [homeStories, setHomeStories] = useState(homeSliderStories);
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  // Api Call for Banner Stories
  // useEffect(() => {
  //   const getHomeStories = async () => {
  //     const response = await fetchHomeStories();
  //     const {
  //       data: { banner_story },
  //     } = response.data;
  //     setHomeStories(banner_story);
  //   };
  //   getHomeStories();
  // }, []);

  // Handling Slider Navigation / Navigation click
  const _handleSliderNav = (index = null) => {
    if (typeof index === "number") {
      setActiveSliderIndex(index);
    } else {
      if (activeSliderIndex === homeStories.length - 1) {
        setActiveSliderIndex(0);
      } else {
        setActiveSliderIndex(activeSliderIndex + 1);
      }
    }
  };

  // Handling Update Video Progress for active slide
  const _handleUpdateProgress = (progress, index) => {
    setHomeStories(
      update(homeStories, {
        [index]: {
          $apply: (item) => {
            return {
              ...item,
              progress: progress,
            };
          },
        },
      })
    );
  };

  // Check the slider is active / not
  const isSliderActive = (activeIndex, sliderIndex) => {
    return activeIndex === sliderIndex;
  }
    

  return (
    <section id="spotlight" className="p-0 position-relative">
      <div className="homeslider video-block">
        {homeStories.map(({...rest }, key) => (
          <Transition 
            in={isSliderActive(activeSliderIndex, key)} 
            timeout={transitionDuration} 
            key={key}
          >
            {(state) => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                  width: isSliderActive(activeSliderIndex, key) ? "100%" : 0,
                  height: isSliderActive(activeSliderIndex, key) ? "100%" : 0,
                }}
                aria-hidden={isSliderActive(activeSliderIndex, key) ? false : true}
              >
                <SliderItem
                  active={isSliderActive(activeSliderIndex, key)}
                  activeSliderIndex={activeSliderIndex}
                  _handleUpdateProgress={_handleUpdateProgress}
                  _handleSliderNav={_handleSliderNav}
                  {...rest}
                />
              </div>
            )}
          </Transition>
        ))}
        <div className="slide-nav-wrap" style={{ backgroundColor: 'black'}}>
          <ul className="d-flex m-0 p-0">
            {homeStories.map(({ heading, progress }, key) => (
              <SliderNavItem
                key={key}
                active={isSliderActive(activeSliderIndex, key)}
                sliderIndex={key}
                destination={heading}
                progress={progress}
                _handleSliderNav={_handleSliderNav}
              />
            ))}
          </ul>
        </div>
        {/* <IntroOptions /> */}
      </div>
    </section>
  );
};

export default page;
