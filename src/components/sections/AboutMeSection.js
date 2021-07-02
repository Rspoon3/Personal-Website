import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export default function AboutMeSection() {
  const data = useStaticQuery(graphql`
    query AboutMe {
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "About Me" } } }
      ) {
        nodes {
          html
          frontmatter {
            name
            subtitle
            appstore
          }
        }
      }
    }
  `);

  const markdown = data.allMarkdownRemark.nodes[0];

  return (
    <Container>
      <TitleDiv>
        <StaticImage
          src="../../images/home/avatar.png"
          alt="A photo of Richard Witherspoon"
          height={200}
        />
        <h1>{markdown.frontmatter.name}</h1>
        <p>{markdown.frontmatter.subtitle}</p>
        <ButtonDiv>
          <Button href={markdown.frontmatter.appstore}>
            &nbsp;&nbsp;App Store
          </Button>
        </ButtonDiv>
        <StaticImage
          src="../../images/study sets/device_banner.png"
          alt="Macbook Pro running Xcode"
          height={390}
        />
      </TitleDiv>
      <Grid id="about">
        <div>
          <ImageContainer>
            <StaticImage
              src="../../images/home/about_me.png"
              alt="Pictures of Richard enjoying hobbies"
            />
          </ImageContainer>
        </div>
        <div>
          <MarkdownDiv>
            <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
          </MarkdownDiv>
        </div>
      </Grid>
    </Container>
  );
}

const ButtonDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 150px;
`;

const Button = styled.a`
  display: inline-block;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 60px;
  background-color: #f61d1d;
  color: #fff;
  font-weight: bold;
`;

const TitleDiv = styled.div`
  text-align: center;
  margin: auto;
  max-width: 800px;
  padding-bottom: 180px;

  p {
    font-size: 16px;
    opacity: 0.7;
  }
`;

const MarkdownDiv = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    margin: auto;

    h1 {
      text-align: center;
    }
    h2 {
      text-align: center;
    }
  }
`;

const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 100px;
  padding-bottom: 25px;
  background-color: #f5f5f7;
`;

const ImageContainer = styled.div`
  float: right;
`;

const Grid = styled.div`
  align-items: top;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 70px;
  padding-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
