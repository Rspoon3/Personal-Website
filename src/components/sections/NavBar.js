import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

export default function FooterSection() {
  return (
    <Container>
      <GridContainer>
        <div>
          <StaticImage
            src="../../images/home/mimoji.png"
            alt="Pictures of Ricky"
            height={40}
            layout="fixed"
          />
          <Text>Richard Witherspoon</Text>
        </div>
        <a href="https://github.com/Rspoon3">
          <p>About</p>
        </a>
        <a href="https://twitter.com/Rspoon3">
          <p>Apps</p>
        </a>
        <a href="https://www.linkedin.com/in/richard-s-witherspoon-iii-76b37ba2/">
          <p>Contact</p>
        </a>
      </GridContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f5f5f7;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto; */
  justify-content: space-between;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
`;

const Text = styled.h1`
  text-align: center;
`;
