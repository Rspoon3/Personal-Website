import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import appStoreButtonBlack from "../../images/misc/download-on-app-store-black.svg";
import "../../details.css";
import FooterSection from "../../components/sections/FooterSection";
import FirstDetailsSection from "./components/FirstDetails";
import SecondDetailsSection from "./components/SecondDetails";
import ThirdDetailsSection from "./components/ThirdDetails";
import DetailsHeader from "./components/DetailsHeader";
import { Link, graphql } from "gatsby";

const MaxTextWidthDiv = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

export default function CinematicIndex({ data }) {
  const app = data.app.edges[0].node;

  return (
    <Layout>
      <SEO title="Cinematic" />

      <DetailsHeader title={app.title} />

      <Container fluid>
        <MaxTextWidthDiv className="py-5">
          <h3>{app.title}</h3>
          <h1 style={{ fontSize: "3em" }}>{app.tagline}</h1>
          <p>{app.shortDescription}</p>
          <a href={app.getAppLink}>
            <img
              src={appStoreButtonBlack}
              style={{ width: "150px", paddingTop: "25px" }}
              alt="Download on the App Store"
            ></img>
          </a>
        </MaxTextWidthDiv>
      </Container>

      <FirstDetailsSection />
      {/* <SecondDetailsSection /> */}
      <ThirdDetailsSection />

      <MaxTextWidthDiv className="py-5 px-3">
        <h1 style={{ fontSize: "2.5em" }}>Aquired in 2021</h1>
        <h5 className="py-3">
          2021 may have not been the best year, but it's the year I proudly sold
          Cinematic
        </h5>

        <div class="pt-5" style={{ fontSize: "15px" }}>
          <div class="text-muted">
            {app.title} is a product made by &nbsp;
            <Link
              to="/"
              style={{ color: "#6c757d", textDecoration: "underline" }}
            >
              Richard Witherspoon
            </Link>
          </div>

          <div class="text-muted">
            Mac, iPad, iPhone, macOS and iOS are trademarks of{" "}
            <a
              style={{ color: "#6c757d", textDecoration: "underline" }}
              href="https://apple.com"
            >
              Apple Inc.
            </a>
          </div>
        </div>
      </MaxTextWidthDiv>
      <FooterSection />
    </Layout>
  );
}

//export page query
export const query = graphql`
  query Cinematic {
    app: allAppsJson(filter: { title: { eq: "Cinematic" } }, limit: 1) {
      edges {
        node {
          title
          getAppLink
          tagline
          shortDescription
        }
      }
    }
  }
`;
