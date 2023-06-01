import React from "react";
import { Row } from "react-bootstrap";
import Promotion from "../Promotion";

import Form from "./Form/page";


const Itinerary = () => {
  return (
    <Row>
      <Form />
      
      <Promotion
        heading={`Ten off-beat wedding locations in Kerala`}
        description={`If you are looking forward to a luxury wedding, than you have a myriad places to choose from.`}
        promotionImage={`/planYourTrip/tabbg3.jpg`}
      />
    </Row>
  );
};

export default Itinerary;
