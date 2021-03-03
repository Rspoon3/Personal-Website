import React from "react"
import styled from "styled-components"

export default function HeroSection() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderImage src="/images/home/headerBanner.jpeg" alt="header" />
        <Title>Richard Witherspoon III</Title>
      </HeaderContainer>
      <AvatarImage src="/images/home/avatar.jpg" alt="Richard Witherspoon" />
    </Container>
  )
}

const HeaderImage = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 400px;
  }
`

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
`

const Container = styled.div`
  height: 775px;

  @media (max-width: 768px) {
    height: 475px;
  }
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: white;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`
const AvatarImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid gray;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: -75px;
`
