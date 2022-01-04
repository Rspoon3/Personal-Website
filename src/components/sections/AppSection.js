import React from "react";
import styled from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";

export default function App(props) {
  return (
    <div style={{ color: "black" }}>
      <RoundedGatsbyImage image={props.heroImage} />
      <Title>{props.app.title}</Title>
      <ShortDescription>{props.app.shortDescription}</ShortDescription>
    </div>
  );
}

const Title = styled.h3`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ShortDescription = styled.h5`
  color: back;
  opacity: 0.7;
`;

const RoundedGatsbyImage = styled(GatsbyImage)`
  border-radius: 10px;
`;
