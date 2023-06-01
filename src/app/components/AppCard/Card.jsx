'use client'
import React from "react";
import propTypes from "prop-types";
import { Col } from "react-bootstrap";
import Image from "next/image";

const CardWrapper = ({ type, children }) => {
  if (type === 'event') {
    return <Col xs={12}>{ children}</Col>
  } else {
    return <Col lg={4} md={12} sm={12} xs={12}>{ children }</Col>
  }
}
const imageStyle = {
  width: '100%',
  height: 'auto',
};

const AppCard = ({ imgUrl, className = "", type, children }) => {
  let figureCustomClass;
  if (className !== "")
    figureCustomClass = `${className} fig-overlay`;
  else
    figureCustomClass = `fig-overlay`

  return (
   
    <CardWrapper type={type}>
      <div className={type === 'event' ? 'item' : 'grid'}>
        <figure className={figureCustomClass} >
          <Image 
          className="img-zoom w-100"
           // src={`/${imgUrl}`}  
            src={imgUrl} 
           // src="/discoverKerala/discover1.jpg"
            alt="" 
            title=""                       
           width={550}
           height={859}
           style={imageStyle}
            />
          {/* <img
            className="img-zoom w-100"
            src={imgUrl} 
            alt="" 
            title=""
          /> */}
          { children }
        </figure>
      </div>
    </CardWrapper>
   

  );
};

AppCard.propTypes = {
  imgUrl: propTypes.string.isRequired
};

export default AppCard;
