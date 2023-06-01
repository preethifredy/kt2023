import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  PinterestIcon
} from "./Icons/page";

const SocialIcons = () => {
  return (
    <ul className="p-0 m-0 text-end social-foot">
      <li className="list-inline-item">
        <a href="/">
          <FacebookIcon/>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="/">
          <TwitterIcon/>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="/">
          <InstagramIcon/>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="/">
          <YoutubeIcon/>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="/">
          <PinterestIcon/>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
