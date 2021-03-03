import React, { Component } from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

class Markdown extends Component {
  state = {
    post: null,
  }

  componentDidMount() {
    fetch(this.props.source)
      .then(res => res.text())
      .then(post => this.setState(state => ({ ...state, post })))
      .catch(err => console.error(err))
  }

  render() {
    const { post } = this.state
    return (
      <MarkdownContainer>
        <ReactMarkdown source={post} />
      </MarkdownContainer>
    )
  }
}

export default Markdown

const MarkdownContainer = styled.div`
  grid-area: p;
  color: white;
  line-height: normal;
  max-width: 800px;
  margin: auto;

  & h1 {
    margin-top: 40px;
    margin-bottom: 30px;
    color: #3587f7;
  }

  & p {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  & ul {
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 30px;
  }
`
