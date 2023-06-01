'use client'
import { Box } from "@mui/system";
import { Container, Row } from "react-bootstrap";
// import { 
//   ImageBanner,
//   VideoBanner, 
//   Essentials, 
//   PhotoGallery, 
// } from "@components";
//import CardLayout from "@pages/layout/CardLayout";
import {
  destination,
  placesOfInterest,
  ecotourism,
  photoGallery,
} from "./shared/data";
import { ImageBanner } from "../components/page";
import { VideoBanner } from "../components/page";
import Essentials from "../components/Essentials/page";
import PhotoGallery from "../components/PhotoGallery";
import CardLayout from "../components/layout/CardLayout";

const page = () => {
  return (
    // <React.Fragment>
     <>
      <ImageBanner
        bannerImage={`whereToGo/detailBannerBg.jpg`}
        bannerHeading={`Where to go`}
      />
      {/* <VideoBanner url='/homeStories/backWater.mp4'/> */}
      <Container>
        <div className="head-desc pb-0 mb-5 mob-mb-2 mt-5 pt-5">
          <h3 className="head-title text-black font-flair font-flair-regular">
            Kerala has an endless list of tourist destinations that will
            interest any traveller.Renowned for its scenenic and natural
            beauty....
          </h3>
        </div>
        <section className={`px-5 mob-px-0`}>
          {/* Destinations And places of interests */}
          <Box mt={10}>
            <Row>
              <CardLayout
                heading="Destinations"
                exploreCardData={destination}
                linkTo="/destination"
              />
              <CardLayout
                heading="Places of interest"
                exploreCardData={placesOfInterest}
                linkTo="/destination"
              />
            </Row>
          </Box>

          {/* Picnic spots And Responsible Tourism */}
          <Box mt={10}>
            <Row className="mt-5">
              <CardLayout
                heading="Picnic Spots"
                exploreCardData={destination}
                linkTo="/"
              />
              <CardLayout
                heading="Responsible Tourism"
                exploreCardData={placesOfInterest}
                linkTo="/"
              />
            </Row>
          </Box>

          {/* Ecotourism  */}
          <Box mt={10}>
            <Row>
              <CardLayout
                heading="Ecotourism"
                exploreCardData={ecotourism}
                linkTo="/"
              />
            </Row>
          </Box>
          {/* Photo Gallery */}
          <PhotoGallery photoGallery={photoGallery} />
        </section>
      </Container>

      {/* Essentials section  */}
      <Essentials />
      </>
    // </React.Fragment>
  )
}

export default page
