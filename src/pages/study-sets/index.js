import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import aboutMe from "../../markdown/about-me.md";
import description from "../../markdown/study-sets-description.md";
import Markdown from "../../markdown/markdown-importer";
import styled from "styled-components";

export default function StudySetsPrivacy() {
  return (
    <Layout>
      <SEO title="Study Sets Details" />
      <Container>
        <ImageCell src={"../../images/study sets/cardScreen.png"} />
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
        </MarkdownContainer>
        <Markdown source={aboutMe} />
      </Container>
    </Layout>
  );
}

const ImageCell = styled.img`
  max-width: 50%;

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
  background-color: rgb(6, 24, 40);

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
