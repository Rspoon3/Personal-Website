import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import appStoreButtonBlack from "../../images/misc/download-on-app-store-black.svg";
import "../../details.css";

import FirstDetailsSection from "../../components/study sets/FirstDetails";
import DetailsHeader from "../../components/study sets/DetailsHeader";

const MaxTextWidthDiv = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

export default function StudySetsIndex() {
  return (
    <Layout>
      <SEO title="Study Sets Details" />
      <DetailsHeader />

      <Container fluid>
        <MaxTextWidthDiv className="py-5">
          <h3>Study Sets</h3>
          <h1>Your Inbox, upgraded</h1>
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
    </Layout>
  );
}
