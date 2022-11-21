import React from "react";
import HeroLeft from "./HeroLeft";
import HeroAside from "./HeroAside";

const HeroSection = () => {
  return (
    <div className="flex justify-between">
      <HeroLeft />
      <HeroAside />
    </div>
  );
};

export default HeroSection;
