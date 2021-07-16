import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import appStoreButtonBlack from "../../images/misc/download-on-app-store-black.svg";
import "../../details.css";
import FooterSection from "../../components/sections/FooterSection";
import NavTest from "../../components/sections/NavTest";
import FirstDetailsSection from "./components/FirstDetails";
import SecondDetailsSection from "./components/SecondDetails";
import ThirdDetailsSection from "./components/ThirdDetails";
import DetailsHeader from "./components/DetailsHeader";
import { Link } from "gatsby";

const MaxTextWidthDiv = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

export default function StudySetsIndex() {
  return (
    <Layout>
      <SEO title="Study Sets Details" />
      <NavTest />

      <DetailsHeader />

      <Container fluid>
        <MaxTextWidthDiv className="py-5">
          <h3>Study Sets</h3>
          <h1 style={{ fontSize: "3em" }}>Your Inbox, upgraded</h1>
          <p>
            Big Mail brings a fresh new look to your inbox, as well as an
            entirely new way of working with it. From advanced A.I
            categorisation, to its carefully crafted design, the result is less
            time organising your inbox, and more time enjoying it. And best of
            all it works with your existing email address. Say hello to Big
            Mail.
          </p>
          <img
            src={appStoreButtonBlack}
            style={{ width: "150px", paddingTop: "25px" }}
            alt="Download on the App Store"
          ></img>
        </MaxTextWidthDiv>
      </Container>

      <FirstDetailsSection />
      <SecondDetailsSection />
      <ThirdDetailsSection />

      <MaxTextWidthDiv className="py-5">
        <h1 style={{ fontSize: "2.5em" }}>Try it for free</h1>
        <h5 className="py-3">
          Big Mail works with most modern mail providers. Download the app and
          try it for free for 7 days.
        </h5>
        <img
          src={appStoreButtonBlack}
          style={{ width: "150px", paddingTop: "25px", paddingBottom: "25px" }}
          alt="Download on the App Store"
        ></img>

        <div class="pt-5" style={{ fontSize: "15px" }}>
          <div class="text-muted">
            Study Sets is a product made by &nbsp;
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
