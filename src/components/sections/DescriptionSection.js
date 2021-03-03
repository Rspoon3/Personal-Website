import React from "react"
import styled from "styled-components"

export default function DescriptionSection() {
  return (
    <Container>
      <Text>
        Hi, my name is Ricky Witherspoon and I'm a full time iOS developer at{" "}
        <a href="https://interprosoft.com/">InterPro Solutions</a> outside of
        Boston. During my free time I like to work with clients and create my
        own iOS applications. You can see more of my work on my website. So far
        I've been doing this for two years and I absolutely love it.
      </Text>
      <Text>
        When I'm not writing code, you can find me hiking, riding my motorcyle,
        or reading. Feel free to reach out so we can chat or if your around the
        Boston area lets try to meet up. The people in this community are the
        best and I'm thrilled to be apart of it.
      </Text>
    </Container>
  )
}

const Text = styled.body`
  max-width: 500px;
  margin: auto;
  padding-top: 25px;
`

const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 50px;
`
