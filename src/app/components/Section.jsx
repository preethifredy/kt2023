'use client'
import React from "react";
import PropTypes from "prop-types";
import { Container, Col } from "react-bootstrap";
import classNames from "classnames";

const Section = ({
    id,
    className = "",
    title,
    description,
    isFluid = false,
    isWrap = false,
    isContainerRelative = false,
    renderedIn,
    innerHead = false,
    children,
  }) => {
    let containerClass = classNames({
        "px-0": isFluid,
        "px-5": isWrap,
        "position-relative": isContainerRelative,
      });
    
      let headingWrapperClass = classNames({
        "head-desc": true,
        "text-center": true,
        "position-relative": true,
        "pb-3": innerHead,
      });
    
      let headingClass = classNames({
        "mb-3": true,
        "text-black": true,
        "font-flair": true,
        "head-title": !innerHead,
        "head-title-child-sub": innerHead,
      });

  return (
    <>
    <section id={id} className={className}>
      <Container fluid={isFluid} className={containerClass}>
        {(title || description) && (
          <Col lg={12}>
            <div className={headingWrapperClass}>
              {title && <h3 className={headingClass}>{title}</h3>}
              {description && <p className="mb-0">{description}</p>}
            </div>
          </Col>
        )}
        {renderedIn === "container" && children}
      </Container>
      {renderedIn === "container-out" && children}
    </section>
    </>
  )
}

export default Section
