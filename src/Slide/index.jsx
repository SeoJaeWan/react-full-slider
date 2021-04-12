import React, { useEffect, useState } from "react";
import { SlideContainer, SlideWrapper } from "../containers/Slider";

const Slide = ({ children, ...options }) => {
  return (
    <SlideContainer>
      <SlideWrapper>{children}</SlideWrapper>
    </SlideContainer>
  );
};

export default Slide;
