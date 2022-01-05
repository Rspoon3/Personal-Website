import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Card } from "react-bootstrap";
import { auto } from "@popperjs/core";

export default function CinematicThirdDetails() {
  const textColor = {
    color: "#5498f5",
  };

  const backGradient = {
    backgroundColor: "#622aff !important",
    background: "linear-gradient(45deg, #35c759, #1e91fc)",
    color: "#fff",
  };

  return (
    <div class="section bg-light py-5">
      <Container fluid="xxl" className="px-lg-4">
        <Row className="px-4 pb-4">
          <Col lg="8">
            <h2 class="title" style={textColor}>
              Cross Platform
            </h2>
            <p class="subtitle">
              Study Sets works on all of your devices automatically. No
              subscription, no one time charge, no dontations. It just works.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg="12" className="d-flex">
            <Card class="d-flex">
              <Card.Body>
                <h3 style={textColor}>Create here, study there.</h3>
                <p class="detail">
                  Create your study material on one device and study on another.
                  With both iPhone and iPad support you can pick up right where
                  you left off on whichever device suits you.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/cinematic/device_banner.png"
                class="figure-iphone"
                alt="Screenshot of Conversations Scene"
                style={{
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "2.5%",
                }}
              />
            </Card>
          </Col>

          <Col lg="5" className="d-flex">
            <Card className="d-flex">
              <Card.Body>
                <h3 style={textColor}>Just Incredible.</h3>
                <p class="detail">
                  When it's time to pick out a movie to watch with the family,
                  Cinematic is all you need. Quickly become the hero by having
                  access to the details of all the best movies. Your evening
                  will never be in danger again.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/cinematic/iphone/theIncredibles.png"
                class="figure-iphone figure-crop-b-50"
                alt="Screenshot of reply later"
                style={{
                  marginRight: "40px",
                  marginLeft: "40px",
                  marginTop: "0%",
                }}
              />
            </Card>
          </Col>

          <Col lg="7" className="d-flex">
            <Card style={backGradient}>
              <Card.Body className="d-flex flex-column">
                <h3>The perfect study buddy</h3>
                <div class="d-flex flex-grow-1 align-items-center">
                  <p class="detail lg p-4">
                    Study Sets is the perfect study buddy. It knows all the
                    answer, prompts you to do better, and will even play your
                    favorite tunes. Can your friends do all of that? Didn't
                    think so.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
