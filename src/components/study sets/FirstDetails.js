import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Card, Figure } from "react-bootstrap";
import { auto } from "@popperjs/core";
import iphone from "../../images/study sets/intro-phone-alt.jpg";

export default function StudySetsFirstDetails() {
  return (
    <div class="section bg-light py-5">
      <Container fluid="xxl" className="py-5 px-lg-4">
        <Row className="px-4 pb-4">
          <Col lg="8">
            <h2 class="text-indigo">Big Smarts</h2>
            <p class="subtitle">
              Big Mail is packed with advance features to make your inbox
              smarter and more organised, all without compromising on privacy.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg="7">
            <Card>
              <Card.Body>
                <h3 class="text-indigo">
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
                className="figure-ipad"
                style={{ backgroundImage: `url(${iphone})` }}
              ></Figure>
            </Card>
          </Col>

          <Col lg="5" className="d-flex">
            <Card className="bg-indigo">
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

          <Col lg="12" className="d-flex">
            <Card class="d-flex">
              <Card.Body>
                <h3 class="text-indigo">Let your emails make a Scene</h3>
                <p class="detail">
                  Rather than present every email in the same way, a Scene in
                  Big Mail optimises the layout specifically for it. It makes
                  newsletters inviting, purchases easy to find, and
                  conversations a breeze. With six Scenes – Conversations,
                  Newsletters, Purchases, Notifications, Events and Files – your
                  inbox has never been more organised.
                </p>
              </Card.Body>

              <Row className="gx-5 px-5">
                <Col sm="4">
                  <StaticImage
                    src="../../images/study sets/worldHistory.png"
                    class="figure-iphone"
                    alt="Screenshot of Conversations Scene"
                  />
                </Col>
                <Col sm="4">
                  <StaticImage
                    src="../../images/study sets/worldHistory.png"
                    class="figure-iphone"
                    alt="Screenshot of Conversations Scene"
                  />
                </Col>
                <Col sm="4">
                  <StaticImage
                    src="../../images/study sets/worldHistory.png"
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
                <h3 class="text-indigo">Reply now or Reply Later.</h3>
                <p class="detail">
                  Ever receive an email but can't reply to it right away? Big
                  Mail has a built in "Reply Later" workflow so you can pick it
                  up later on. It even syncs across all your devices.
                </p>
              </Card.Body>
              <StaticImage
                src="../../images/study sets/worldHistory.png"
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
                <h3 class="text-indigo">
                  Approve new senders with The Bouncer
                </h3>
                <p class="detail">
                  With Big Mail you decide who gets in your inbox. The first
                  time someone emails you they appear in The Bouncer, then you
                  decide if you want to receive their messages. You can change
                  your mind anytime.
                </p>
              </Card.Body>
              <Figure
                className="figure-ipad"
                style={{ backgroundImage: `url(${iphone})` }}
              ></Figure>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
