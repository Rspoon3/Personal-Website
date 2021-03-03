import React from "react"
import styled from "styled-components"
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

export default function FooterSection() {
  return (
    <Container>
      <Text>Get In Touch</Text>
      <EmailWrapper>
        <Email href="mailto:richardwitherspoon3@gmail.com">
          richardwitherspoon3@gmail.com
        </Email>
      </EmailWrapper>
      <GridContainer>
        <a href="https://github.com/Rspoon3">
          <FaGithub color="white" size="50px" />
        </a>
        <a href="https://twitter.com/Rspoon3">
          <FaTwitterSquare color="white" size="50px" />
        </a>
        <a href="https://www.linkedin.com/in/richard-s-witherspoon-iii-76b37ba2/">
          <FaLinkedin color="white" size="50px" />
        </a>
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background: rgb(20, 22, 24);
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 100%;
  justify-content: space-between;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`

const Text = styled.h1`
  color: white;
  text-align: center;
`
const Email = styled.a`
  color: white;
  text-decoration: none;
`
const EmailWrapper = styled.h2`
  text-align: center;
  padding-bottom: 50px;
  text-decoration: none;
`
