import Essentials from "../components/Essentials/page"
import LinkButton from "../components/LinkButton"
import Section from "../components/Section"
import { Destination, Discover, Events, HomeStorySlider, KeralaStory, Memories, PromotionVideo, SocialGallery, Story, WhatNew } from "./shared/page"
async function getPosts() {
  const data = await fetch(
    'http://202.88.244.195/keralatourism.org/mobileapi/web/ktapp2023/home',
    {
      cache: 'no-store'
      //    next:{
      //     revalidate:20,
      //    }
    }
  );

  const result = await data.json();
  const ret = result.sections;
  // console.log(ret)
  return ret;

}

const assignLayouts = section => {
  let layout = section.layout; 
  if (layout === 1) {
    // return <HomeStorySlider data={section} key={section.heading} />
   return <HomeStorySlider />
  }
  else 
  if (layout === 2) {
    return <Discover data={section} key={section.heading} />
  }
}

const page = async () => {
  const result = await getPosts();
  return (
    <HomeStorySlider />
    // <div>

    //   {result && result.map(item => (
    //     assignLayouts(item)
    //   ))}

    // </div>
  );
}

export default page


