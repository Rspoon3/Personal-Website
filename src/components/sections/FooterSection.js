import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import downloadFile from "../../resume.pdf";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function FooterSection() {
  return (
    <Container>
      <GridContainer>
        <a href="https://github.com/Rspoon3">
          <Icon icon={faGithub} />
        </a>
        <a href="https://twitter.com/Rspoon3">
          <Icon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/richard-s-witherspoon-iii-76b37ba2/">
          <Icon icon={faLinkedin} />
        </a>
        <a href="mailto:richardwitherspoon3@gmail.com">
          <Icon icon={faEnvelope} />
        </a>
        <a href={downloadFile}>
          <Icon icon={faFileAlt} />
        </a>
      </GridContainer>
      <Text>Copyright © Richard Witherspooon {getCurrentYear()}</Text>
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 30px;
`;

const Container = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  background: rgb(20, 22, 24);
`;
const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, auto);
  grid-gap: max(5vw, 40px);
  padding-bottom: 15px;
`;
const Text = styled.p`
  color: white;
  text-align: center;
  font-size: 12px;
  opacity: 0.7;
`;
