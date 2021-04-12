import styled from "styled-components";

const SlideContainer = styled.div`
  display: ${({ display }) => display || `flex`};
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height};
  position: relative;
`;

const SlideWrapper = styled.div`
  display: ${({ display }) => display || `flex`};
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height};

  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  display: ${({ display }) => display || `flex`};
  width: ${({ slidesPerView }) => `calc(100% / ${slidesPerView})` || `100%`};
  height: ${({ slidesPerColumn }) => `calc(100% / ${slidesPerColumn})`};

  margin: ${({ spaceBetween }) => `0 ${spaceBetween}px`};
`;

export { SlideContainer, SlideWrapper, Slider };
