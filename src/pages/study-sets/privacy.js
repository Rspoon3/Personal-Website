import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
// import privacy from "../../markdown/privacy.md";
// import Markdown from "../../markdown/markdown-importer";
// import styled from "styled-components";

import ReactMarkdown from "react-markdown";

export default function StudySetsPrivacy() {
  return (
    <Layout>
      <SEO title="Privacy" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page e</p>
      {/* <Markdown source={privacy} /> */}
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
    </Layout>
  );
}
