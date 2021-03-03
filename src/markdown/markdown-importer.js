import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

class Markdown extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    fetch(this.props.source)
      .then((res) => res.text())
      .then((post) => this.setState((state) => ({ ...state, post })))
      .catch((err) => console.error(err));
  }

  render() {
    const { post } = this.state;
    return (
      <MarkdownContainer>
        <ReactMarkdown source={post} />
      </MarkdownContainer>
    );
  }
}

export default Markdown;

const MarkdownContainer = styled.div`
  max-width: 800px;
  margin: auto;

  & p {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  & h2 {
    margin-top: 10px;
    font-size: 30px;
  }

  & h3 {
    margin-top: 10px;
    font-size: 22px;
  }
`;
