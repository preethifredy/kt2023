import React from "react";
import { Dropdown } from "react-bootstrap";

const Favourite = () => {
  return (
    <div className="favbx dropdown">
      <Dropdown>
        <Dropdown.Toggle className="favbtn border-0 bg-transparent text-warning py-0">
          <i className="las la-heart"></i>
          <small className="bg-yellow text-dark rounded-circle">&nbsp;</small>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Favourite;
