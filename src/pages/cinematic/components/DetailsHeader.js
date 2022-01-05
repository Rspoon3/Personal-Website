import React from "react";
import ipadPotrait from "../../../images/cinematic/ipad/nowPlayingPotrait.png";
import iphone from "../../../images/cinematic/iphone/favorites.png";
import home from "../../../images/cinematic/ipad/home.png";
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

  color: #c10606;
`;

export default function CinematicDetailsHeader(props) {
  return (
    <div class="device-grid-container">
      <div class="device-grid">
        <img
          src={ipadPotrait}
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
          <Title>{props.title}</Title>
        </TitleDiv>

        <img
          src={home}
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
