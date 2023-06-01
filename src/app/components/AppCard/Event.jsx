import React from "react";
import { string } from "prop-types";
//import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Link from "next/link";
import AppCard from "./Card";



const EventCard = ({
  title,
  venue,
  conductingDate,
  imgUrl,
  conductingMonth,
  district,
  titleFontClass = `font-flair text-white`,
  showMore = true,
  url,
}) => {
  return (
    
    <AppCard imgUrl={imgUrl} className={`position-relative m-0`} type="event">
      <figcaption className="fig-caption">
        <h2 className={titleFontClass}>{title}</h2>
        <p className="text-white ibm-font-18">{venue}</p>
        {showMore && (
          <Link
            href={!isEmpty(url) ? url : "/"}
            className="text-white underline-0 read-more"
          >
            more
            <i className="la la-long-arrow-right"></i>
          </Link>
        )}
      </figcaption>
      <div className="top-txt w-100">
        <div className="card-horizontal">
          <div className="digit-wrapper position-relative">
            <span>
              <b className="text-yellow ibm-font-40 ibm-semi-bold">
                {conductingDate}
              </b>
              <small className="text-white d-block ibm-font-18">
                {conductingMonth}
              </small>
            </span>
          </div>
          {district && (
            <div className="card-body p-4">
              <h4 className="mb-0 pt-2 card-title text-white">{district}</h4>
            </div>
          )}
        </div>
      </div>
    </AppCard>
  );
};

EventCard.propTypes = {
  title: string.isRequired,
  venue: string.isRequired,
  conductingDate: string.isRequired,
  imgUrl: string.isRequired,
  conductingMonth: string.isRequired,
  district: string,
};

export default EventCard;
