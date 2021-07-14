import React from "react";
import ipad from "../../images/study sets/intro-pad.jpg";
import iphone from "../../images/study sets/intro-phone-alt.jpg";
import mac from "../../images/study sets/cardScreen.png";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: min(6vw, 75px);
`;

const DeviceDiv = styled.div`
  max-width: 100%;
  display: inline-block;
`;

const TitleDiv = styled.div`
  ${DeviceDiv};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, #622aff 0%, #dd04d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function StudySetsDetailsHeader() {
  return (
    <div class="device-grid-container">
      <div class="device-grid">
        <img
          src={ipad}
          alt="iPad"
          style={{
            marginTop: "130%",
            maxWidth: "200%",
            marginLeft: "-20%",
          }}
        />

        <div />
        <div />
        <div />

        <TitleDiv>
          <Title>Study Sets</Title>
        </TitleDiv>

        <img
          src={mac}
          style={{
            maxWidth: "250%",
            marginTop: "50%",
          }}
          alt="Macbook"
        />
        <img
          src={iphone}
          style={{
            maxWidth: "150%",
            marginTop: "-100%",
          }}
          alt="iPhone"
        />
        <div />
        <div />
      </div>
    </div>
  );
}
