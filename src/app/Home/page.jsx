import Essentials from "../components/Essentials/page"
import LinkButton from "../components/LinkButton"
import Section from "../components/Section"

import { Destination, Discover, Discoverapi, Events, HomeStorySlider, KeralaStory, Memories, PromotionVideo, SocialGallery, Story, WhatNew } from "./shared/page"
async function getPosts() {
  const data = await fetch(
    'http://202.88.244.195/keralatourism.org/mobileapi/web/ktapp2023/home',
    {
      cache: 'no-store'
        //  next:{
        //   revalidate:20,
        //  }
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
     return <HomeStorySlider data={section} key={section.heading} />   
  }
  else 
  if (layout === 6) {  
     return <Discover data={section} key={section.heading} />
  }
}

const page = async () => {

  const result = await getPosts();
 //console.log(result);
  return (
     <div> 
     {/* <HomeStorySlider />  */}
     {result && result.map(item => (
                 assignLayouts(item)
             ))}   
   </div> 
   );
}

// const page = () => {
//   return (
//     <div>
//       {/* <Discoverapi /> */}
//       <HomeStorySlider />
//       {/* <WhatNew />
//       <Essentials />
//       <Story />
//        <Memories /> */}
//       {/* <Discover /> */}
//       {/* <KeralaStory /> */}
//        {/* <Events />
//       <Destination />
//       <SocialGallery /> */}
//       <Section
//         id="block-video"
//         className="section-block"
//         isContainerRelative={true}
//         renderedIn={`container`}
//       >
//         <PromotionVideo />
//         <LinkButton
//             isAbsolute={true}
//             isCustom={true}
//             link={`#`}
//             linkText={`explore`}
//           />
//       </Section>
//     </div>
//   )
// }

export default page


