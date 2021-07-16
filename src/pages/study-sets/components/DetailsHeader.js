import React from "react";
import allSets from "../../../images/study sets/ipad/framed/all-sets.png";
import iphone from "../../../images/study sets/iphone/framed/tags.png";
import cardScreen from "../../../images/study sets/ipad/framed/ipad-card-screen.png";
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

  color: #64b6f9;
`;

export default function StudySetsDetailsHeader() {
  return (
    <div class="device-grid-container">
      <div class="device-grid">
        <img
          src={allSets}
          alt="iPad all sets view"
          style={{
            marginTop: "100%",
            maxWidth: "180%",
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
          src={cardScreen}
          style={{
            maxWidth: "250%",
            marginTop: "40%",
            marginLeft: "10%",
          }}
          alt="Macbook"
        />
        <img
          src={iphone}
          style={{
            maxWidth: "150%",
            marginTop: "-110%",
          }}
          alt="iPhone"
        />
        <div />
        <div />
      </div>
    </div>
  );
}
