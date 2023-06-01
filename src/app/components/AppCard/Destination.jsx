'use client'
import React from "react";
import { string } from "prop-types";
//import { Link } from "react-router-dom";
import Image from "next/image";
import LinkButton from "../LinkButton";
import Card from "./Card";
import Link from "next/link";
//import { Card, LinkButton } from "@components";

const FavIcon = () => {
  return (
    <span className="icon-fav -trans position-absolute">      
      <Link 
      onClick={(e) => {
        e.preventDefault();
      }}       
        className="d-inline-block text-yellow"
        href="#"
      >
        <Image 
         src="/discoverKerala/favourite_yellow.svg" 
         alt="" 
         title="" 
         width={100}
         height={100}
        />        
      </Link>
    </span>
  );
};

const CardBackground = ({ backgroundImg }) => {
  return (
    
    <span className="icon-map -trans position-absolute">
      
      <Image 
      src={backgroundImg}
         //src={`/${backgroundImg}`} 
         alt="" 
         title="" 
         width={160}
         height={292}
        />      
    </span>
  )
};

const DestinationCard = ({
  heading,
  description,
  district,
  images,
  link
 // imgMap,
}) => {
  return (
    <>
    
    <Card imgUrl={images.vertical}>
      <figcaption className="fig-caption">
        <h2 className="font-flair text-white">{heading}</h2>
        <p className="text-white ibm-font-18">{description}</p>
        <LinkButton buttonColor="white" link={link.href} linkText={link.text} />
      </figcaption>
      <FavIcon/>
      <CardBackground backgroundImg={images.hover}/>
      <h5 className="mb-0 btm-txt w-100 -trans position-absolute">
        <Link
          href="/"
          className="d-block link-btn underline-0 ibm-font-18 text-white"
        >
          {district}
        </Link>
      </h5>
    </Card>
    </>
  );
};

DestinationCard.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  district: string.isRequired,
  imgUrl: string.isRequired,
};

export default DestinationCard;
