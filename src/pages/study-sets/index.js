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

export default function StudySetsIndex({ data }) {
  const app = data.app.edges[0].node;

  return (
    <Layout>
      <SEO title="Study Sets Details" />

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
      <SecondDetailsSection />
      <ThirdDetailsSection />

      <MaxTextWidthDiv className="py-5 px-3">
        <h1 style={{ fontSize: "2.5em" }}>Try it for free</h1>
        <h5 className="py-3">
          Download the app and try it for free for with all features included.
        </h5>
        <a href={app.getAppLink}>
          <img
            src={appStoreButtonBlack}
            style={{
              width: "150px",
              paddingTop: "25px",
              paddingBottom: "25px",
            }}
            alt="Download on the App Store"
          ></img>
        </a>

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
          <div class="text-muted">
            <Link
              to="/"
              style={{ color: "#6c757d", textDecoration: "underline" }}
            >
              Terms of Service
            </Link>
            &nbsp; • &nbsp;
            <Link
              to="/"
              style={{ color: "#6c757d", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
            &nbsp; • &nbsp;
            <a
              style={{ color: "#6c757d", textDecoration: "underline" }}
              href="mailto:richardwitherspoon3@gmail.com"
            >
              Support
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
  query StudySets {
    app: allAppsJson(filter: { title: { eq: "Study Sets" } }, limit: 1) {
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
