import LinkButton from '@app/components/LinkButton';
import React from 'react';
//import { LinkButton } from "@/app/components";

const SliderDescription = ({ heading, description }) => {
  return (
    <div className="desc">
      <div className="descwrap position-relative">
        <h3 className="ibm-font-medium mb-2 text-light">{heading}</h3>
        <p className="ibm-font-light text-light mb-2">{description}</p>
        <LinkButton 
          buttonColor="light" 
          linkText="more" 
          link="/"
        />
       
      </div>
    </div>
  );
};

export default SliderDescription;