import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import aboutMe from "../../markdown/about-me.md";
import description from "../../markdown/study-sets-description.md";
import Markdown from "../../markdown/markdown-importer";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function StudySetsIndex() {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(
        filter: {
          relativeDirectory: { eq: "study sets" }
          name: { nin: ["AppIcon_512", "cardScreen", "swipe", "worldHistory"] }
        }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      device_banner: file(
        relativePath: { eq: "study sets/device_banner.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Study Sets Details" />
      <Container>
        <h1>Study Sets</h1>
        <Test>
          <div>
            <h4>Your emails organised in the blink of an A.I.</h4>

            <p>
              Big Mail can intelligently and automatically organise your inbox
              into distinct categories (we call them Scenes). Whether it's
              elevating important conversations, or filing away your latest
              purchases, Big Mail has you covered.
            </p>
          </div>
          <StaticImage
            src="../../images/study sets/cardScreen.png"
            alt="Pictures of Ricky"
            height={400}
          />
        </Test>
        {/* <HeaderImageContainer>
          <Img fluid={data.device_banner.childImageSharp.fluid} />
        </HeaderImageContainer>
        <Markdown source={description} />
        <MarkdownContainer>
          <h1>Press Kit</h1>
          <p>
            Download full Press Kit with screenshots, promo art, and hi-res icon{" "}
            <a href="https://drive.google.com/drive/folders/19FpImRTF5RaMTG5q6kIX2rtF2CIj_5H6?usp=sharing">
              here
            </a>
            .
          </p>

          {data.images.nodes.map((image) => (
            <Img fluid={image.childImageSharp.fluid} />
          ))}
        </MarkdownContainer>
        <Markdown source={aboutMe} /> */}
      </Container>
    </Layout>
  );
}

const Test = styled.div`
  background-color: white;
  max-width: 500px;
  margin: auto;
  padding-top: 10px;
  /* padding-bottom: 40px; */
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 20px;
`;

const HeaderImageContainer = styled.div`
  max-width: 600px;

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const MarkdownContainer = styled.div`
  max-width: 800px;
  margin: auto;

  & p {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  & h2 {
    margin-top: 10px;
    font-size: 30px;
  }

  & h3 {
    margin-top: 10px;
    font-size: 22px;
  }
`;

const Container = styled.div`
  /* background-color: rgb(6, 24, 40); */

  background-color: lightgray;
  height: 900px;

  & h1 {
    color: dodgerblue;
  }

  & p {
    color: white;
  }

  & ul {
    color: white;
  }
`;
