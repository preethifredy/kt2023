import React from 'react';

const CopyRight = () => {
  return (
    <React.Fragment>
      <span className="d-block mb-1">
        <a href="/" className="text-decoration-none text-white">
          Legal | Imprint
        </a>
      </span>
      <p className="mb-0 text-white ibm-font-18">
        All rights reserved © Kerala Tourism { new Date().getFullYear() } | Developed & Maintained by{" "}
        <a href="/" className="text-white text-decoration-none">
          Invis Multimedia
        </a>
      </p>
    </React.Fragment>
  );
};

export default CopyRight;


