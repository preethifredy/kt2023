import React from "react";
import { NavbarBrand } from "react-bootstrap"; 
import Image from "next/image";


import logoImg from "./logo.png";

const Page = () => {
  return (
    <NavbarBrand  href="/" className="logo mx-0 py-0">
      <h1 className="p-0 mb-0">
        <Image
         className="img-fluid" 
         src={logoImg} 
         alt="Kerala-Tourism"
         title="Kerala-Tourism"
         width={50} 
         height={50}
        />
        
      </h1>
    </NavbarBrand>
  );
};

export default Page;
