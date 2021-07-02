import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query HeroImages {
      headerBanner: file(relativePath: { eq: "home/headerBanner.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar: file(relativePath: { eq: "home/avatar.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <HeaderContainer>
        {/* <StaticImage
          src="../../images/home/headerBanner.jpeg"
          alt="Steve Jobs Theatre"
          height={400}
          objectFit="fill"
        /> */}

        <HeaderImage
          fluid={data.headerBanner.childImageSharp.fluid}
          alt="Steve Jobs Theatre"
        />
        <Title>Richard Witherspoon III</Title>
      </HeaderContainer>

      <AvatarImage
        fluid={data.avatar.childImageSharp.fluid}
        alt="Richard Witherspoon"
      />
    </Container>
  );
}

const HeaderImage = styled(Img)`
  width: 100%;
  height: 700px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Container = styled.div`
  height: 775px;

  @media (max-width: 768px) {
    height: 475px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: white;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const AvatarImage = styled(Img)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid gray;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: -75px;
`;
