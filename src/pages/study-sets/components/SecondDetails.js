import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Card, Figure } from "react-bootstrap";
import { auto } from "@popperjs/core";
import ipadPhysics from "../../../images/study sets/ipad/framed/ipad-physics.png";

export default function StudySetsSecondDetails() {
  const textColor = {
    color: "#fe2c55",
  };

  const backGradient = {
    backgroundColor: "#622aff !important",
    background: "linear-gradient(45deg, #fe2c55, #eaa8a8)",
    color: "#fff",
  };

  return (
    <div class="section bg-light py-5">
      <Container fluid="xxl" className="px-lg-4">
        <Row className="px-4 pb-4">
          <Col lg="8">
            <h2 class="title" style={textColor}>
              Big Design
            </h2>
            <p class="subtitle">
              Big Mail is a top to bottom rethink of your inbox. Not only that,
              but it was designed to look right at home across all your devices
              thanks to its entirely native iOS and macOS design.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg="6" className="d-flex">
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
          <Col lg="6">
            <Card>
              <Card.Body>
                <h3 style={textColor}>
                  Your emails organised in the blink of an A.I.
                </h3>
                <p class="detail">
                  Big Mail can intelligently and automatically organise your
                  inbox into distinct categories (we call them Scenes). Whether
                  it's elevating important conversations, or filing away your
                  latest purchases, Big Mail has you covered.
                </p>
              </Card.Body>
              <Figure
                style={{
                  backgroundImage: `url(${ipadPhysics})`,
                  width: "170%",
                  minHeight: "300px",
                  height: "40vh",
                  backgroundPosition: "top left",
                  backgroundSize: "100%",
                  margin: "0",
                  marginLeft: "3%",
                  marginTop: -"2em",
                }}
              ></Figure>
            </Card>
          </Col>

          <Col lg="5" className="d-flex">
            <Card className="d-flex">
              <Card.Body>
                <h3 style={textColor}>Quick actions galor.</h3>
                <p class="detail">
                  Ever want to do something quickly and move on? Study sets is
                  all about that. Quickly edit, delete or share.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/study sets/iphone/framed/quick-actions.png"
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
            <Card>
              <Card.Body>
                <h3 style={textColor}>Listen to your Apple Music library</h3>
                <p class="detail">
                  Study Sets has access your Apple Music libarary. Without even
                  leaving the app you change change songs to get you in the
                  perfect study mood.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/study sets/ipad/framed/music.png"
                style={{ margin: "3%", width: "120%", marginBottom: "-7%" }}
                alt="Screenshot of Conversations Scene"
              />
            </Card>
          </Col>

          <Col lg="7" className="d-flex">
            <Card className="dark">
              <Card.Body>
                <h3 style={textColor}>Beautiful Design</h3>
                <p class="detail">
                  Study Sets has a beautiful and elegant modern design- in both
                  dark and light mode. You can even change the apps accent
                  color.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/study sets/iphone/framed/music-dark.png"
                class="figure-iphone figure-crop-b-50"
                alt="Screenshot of reply later"
                style={{
                  marginRight: auto,
                  marginLeft: auto,
                  marginTop: "-10%",
                }}
              />
            </Card>
          </Col>

          <Col lg="5" className="d-flex">
            <Card>
              <Card.Body>
                <h3 style={textColor}>Swipe Right</h3>
                <p class="detail">
                  Quickly blow through study cards by swiping right if you get
                  the answer and left if you didn't. Once you finish with the
                  current deck you'll get a report on how you did. I bet it was
                  fantastic.
                </p>
              </Card.Body>
              <StaticImage
                src="../../../images/study sets/iphone/framed/swipe-yay.png"
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
        </Row>
      </Container>
    </div>
  );
}
