import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Card } from "react-bootstrap";
import { auto } from "@popperjs/core";

export default function StudySetsThirdDetails() {
  const textColor = {
    color: "#35c759",
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
              Bold Moves
            </h2>
            <p class="subtitle">
              Big Mail is a top to bottom rethink of your inbox. Not only that,
              but it was designed to look right at home across all your devices
              thanks to its entirely native iOS and macOS design.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg="12" className="d-flex">
            <Card class="d-flex">
              <Card.Body>
                <h3 style={textColor}>Let your emails make a Scene</h3>
                <p class="detail">
                  Rather than present every email in the same way, a Scene in
                  Big Mail optimises the layout specifically for it. It makes
                  newsletters inviting, purchases easy to find, and
                  conversations a breeze. With six Scenes – Conversations,
                  Newsletters, Purchases, Notifications, Events and Files – your
                  inbox has never been more organised.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/study sets/device-banner.png"
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
                <h3 style={textColor}>Reply now or Reply Later.</h3>
                <p class="detail">
                  Ever receive an email but can't reply to it right away? Big
                  Mail has a built in "Reply Later" workflow so you can pick it
                  up later on. It even syncs across all your devices.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/study sets/iphone/framed/swipe-finished.png"
                class="figure-iphone figure-crop-b-50"
                alt="Screenshot of reply later"
                style={{
                  marginRight: auto,
                  marginLeft: auto,
                  marginTop: "-20%",
                }}
              />
            </Card>
          </Col>

          <Col lg="7" className="d-flex">
            <Card style={backGradient}>
              <Card.Body className="d-flex flex-column">
                <h3>On device categorisation</h3>
                <div class="d-flex flex-grow-1 align-items-center">
                  <p class="detail lg p-4">
                    Big Mail categorises your mail on device, meaning your
                    emails are never shared with us or anyone else. Now that's
                    smart.
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
