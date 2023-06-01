
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CopyRight from "./CopyRight";
import MenuList from "./MenuList";
import SocialIcons from "./SocialIcons/page";

const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Col className="text-center border-bottom border-grey mb-4">
          <MenuList/>
        </Col>
        <Row>
          <Col lg={7} md={7} sm={12} className="mb-pt-0 mob-text-center">
            <CopyRight/>
          </Col>
          <Col lg={5} md={5} sm={12} className="mb-pt-0 mob-text-center">
            <SocialIcons/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
