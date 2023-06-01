import React from "react";

const BannerLayout = ({ children }) => {
  return (
    <section id="inner-banner" className="p-0 position-relative">
      { children }
    </section>
  );
};

export default BannerLayout;
