import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Card, Figure } from "react-bootstrap";
import { auto } from "@popperjs/core";
import searchJustice from "../../../images/cinematic/ipad/searchJustice.png";
import galGadotInsta from "../../../images/cinematic/ipad/galGadotInsta.png";

export default function CinematicFirstDetails() {
  const textColor = {
    color: "#C10606",
  };

  const backGradient = {
    backgroundColor: "#622aff !important",
    background: "linear-gradient(45deg, #C10606, #721D1D)",
    color: "#fff",
  };

  return (
    <div class="section bg-light py-5">
      <Container fluid="xxl" className="px-lg-4">
        <Row className="px-4 pb-4">
          <Col lg="8">
            <h2 class="title" style={textColor}>
              Test Organization
            </h2>
            <p class="subtitle">
              Study Sets is packed with features to make studying easier than
              every before and more organized than you can belive.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg="7">
            <Card>
              <Card.Body>
                <h3 style={textColor}>
                  Your cards organised in the blink of an eye
                </h3>
                <p class="detail">
                  Study Sets allows you to oganize you're material however works
                  best for you. Create unlimited sets, decks, and tags. Color
                  code everything so you can quickly get started at a glance.
                </p>
              </Card.Body>
              <Figure
                style={{
                  backgroundImage: `url(${searchJustice})`,
                  width: "103%",
                  minHeight: "300px",
                  height: "50vh",
                  backgroundPosition: "top left",
                  backgroundSize: "140%",
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: -"2em",
                }}
              ></Figure>
            </Card>
          </Col>

          <Col lg="5" className="d-flex">
            <Card style={backGradient}>
              <Card.Body className="d-flex flex-column">
                <h3> Organize anything by tags</h3>
                <div class="d-flex flex-grow-1 align-items-center">
                  <p class="detail lg p-4">
                    Study Sets allows you to create unlimited tags. Easily
                    organize sets, decks, or cards into multiple tags that way
                    you can find whatever you're looking for.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="12" className="d-flex">
            <Card class="d-flex">
              <Card.Body>
                <h3 style={textColor}>Study however you want</h3>
                <p class="detail">
                  Study however works best works for you. Swipe through card
                  promts flashcard style, match the term and definition, or
                  chose the correct definiton. When you're finished you'll get a
                  report on how you did and an offer to re-test.
                </p>
              </Card.Body>

              <Row className="g-10 px-5">
                <Col sm="4">
                  <StaticImage
                    src="../../../images/cinematic/iphone/search.png"
                    class="figure-iphone"
                    alt="Screenshot of Conversations Scene"
                  />
                </Col>
                <Col sm="4">
                  <StaticImage
                    src="../../../images/cinematic/iphone/avengers.png"
                    class="figure-iphone"
                    alt="Screenshot of Conversations Scene"
                  />
                </Col>
                <Col sm="4">
                  <StaticImage
                    src="../../../images/cinematic/iphone/avengersDetails.png"
                    class="figure-iphone"
                    alt="Screenshot of Conversations Scene"
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg="5" className="d-flex">
            <Card className="d-flex">
              <Card.Body>
                <h3 style={textColor}>Information at your fingertips</h3>
                <p class="detail">
                  Study Sets has all critical infomation immeditely avaliable.
                  Quickly jump into a study session, review which cards are in a
                  deck, add more decks, or even share what you've made.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/cinematic/iphone/RDJ.png"
                class="figure-iphone figure-crop-b-50"
                alt="Screenshot of reply later"
                style={{
                  marginRight: auto,
                  marginLeft: auto,
                  width: "80%",
                }}
              />
            </Card>
          </Col>

          <Col lg="7" className="d-flex">
            <Card>
              <Card.Body>
                <h3 style={textColor}>Quickly edit cards</h3>
                <p class="detail">
                  Any study card you create is easily editable. Change the term,
                  deffinition, add a picture, or assign another tag. You can
                  even pull in text from the camera. Now thats easy.
                </p>
              </Card.Body>
              <Figure
                style={{
                  backgroundImage: `url(${galGadotInsta})`,
                  width: "120%",
                  minHeight: "300px",
                  height: "50vh",
                  backgroundPosition: "top left",
                  backgroundSize: "100%",
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: -"2em",
                }}
              ></Figure>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
