import React from "react";
import styled from "styled-components";

const App = (props) => (
  <Container>
    <GridContainer>
      <div>
        <ImageGridContainer count={props.images.length} index={props.index}>
          {props.images.map((image) => (
            <ImageCell src={image} />
          ))}
        </ImageGridContainer>
      </div>
      <TextContainer index={props.index}>
        <IconWrapper>
          <Icon src={props.icon} />
          <TitleWrapper>
            <Title>{props.title}</Title>
            <Tagline>{props.tagline}</Tagline>
          </TitleWrapper>
        </IconWrapper>
        <Description>{props.description}</Description>
        <ButtonWrapper>
          <a href={props.appLink}>
            {props.index === 5 && (
              <StoreButton src="../images/misc/see-on-github.png" />
            )}
            {props.index !== 5 && (
              <StoreButton
                src={
                  props.index % 2 === 0
                    ? "../images/misc/download-on-app-store-white.svg"
                    : "../images/misc/download-on-app-store-black.svg"
                }
              />
            )}
          </a>
          <a href={props.moreLink}>
            <LearnMore index={props.index}>Learn More</LearnMore>
          </a>
        </ButtonWrapper>
      </TextContainer>
    </GridContainer>
  </Container>
);

export default App;

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;

  &:nth-child(odd) {
    background: rgb(20, 22, 24);
  }
`;

const ImageCell = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageGridContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  ${(props) => props.count % 2 !== 0 && ImageCell}:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: -1;
  }

  @media (min-width: 768px) {
    grid-area: ${(props) => (props.index % 2 === 0 ? "leading" : "trailing")};
  }
`;

const GridContainer = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 7.5%;
  padding-left: 20px;
  padding-right: 20px;
  /* background: green; */

  justify-items: top;
  align-items: top;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;

    padding-left: 0px;
    padding-right: 0px;
  }

  @media (min-width: 768px) {
    grid-template-areas: "leading trailing";
  }
`;

const Description = styled.body`
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.h1`
  margin: auto;
  line-height: 1.25;
  vertical-align: top;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Tagline = styled.h2`
  margin: auto;
  opacity: 0.9;
`;

const TextContainer = styled.div`
  color: ${(props) => (props.index % 2 ? "black" : "white")};
  /* background: dodgerblue; */

  @media (min-width: 768px) {
    grid-area: ${(props) => (props.index % 2 === 0 ? "trailing" : "leading")};
  }
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin: auto;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  grid-column-gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TitleWrapper = styled.div`
  /* background: dodgerblue; */
`;

const LearnMore = styled.body`
  height: 44px;
  width: 144px;
  border-radius: 8px;
  line-height: 44px;
  text-align: center;
  font-weight: 500;

  color: ${(props) => (props.index % 2 ? "white" : "black")};
  background: ${(props) => (props.index % 2 ? "rgb(20, 22, 24)" : "white")};
`;

const StoreButton = styled.img`
  height: 44px;
  width: 144px;
  margin-right: 20px;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
