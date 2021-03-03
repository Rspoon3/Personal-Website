import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import privacy from "../../markdown/math-flash-privacy.md";
import Markdown from "../../markdown/markdown-importer";

export default function StudySetsPrivacy() {
  return (
    <Layout>
      <SEO title="Math Flash Privacy & Terms" />
      <Markdown source={privacy} />
    </Layout>
  );
}
