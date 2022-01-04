import React from "react";
import styled from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";

export default function App(props) {
  return (
    <div style={{ color: "black" }}>
      <GatsbyImage
        image={props.heroImage}
        imgStyle={{ borderRadius: "20px" }}
      />
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
