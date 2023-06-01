'use client'
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const MegaMenuItem = ({ title, viewMore = false }) => {
  return (
    <Card className="border-0 shadow-sm drop-card">
      <a href="#" className="d-block">
        {!viewMore ? (
          <Card.Img variant="top" src="/assets/images/listing1.jpg" />
        ) : (
          <Card.Body>
            <span>View More</span>
          </Card.Body>
        )}
      </a>
      {!viewMore && (
        <Card.Footer className="bg-white text-center py-3">
          <a href="#" className="d-block text-decoration-none">
            <strong className="text-muted">{title}</strong>
          </a>
        </Card.Footer>
      )}
    </Card>
  );
};

const Megamenu = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleoutSideClick);
    return () => document.removeEventListener("click", handleoutSideClick);
  }, []);

  const handleoutSideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      toggleMenu(null);
    }
  };
  return (
    <>
    <div className="w-100 bg-light py-5 mega-menu" ref={menuRef}>
      <Container>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Col lg={3} key={item} className="mb-4">
              <MegaMenuItem title={title} />
            </Col>
          ))}
          <Col lg={3} className="mb-4">
            <MegaMenuItem title="View More" viewMore/>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Megamenu
