import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import privacy from "../../markdown/privacy.md";
import Markdown from "../../markdown/markdown-importer";

export default function StudySetsPrivacy() {
  return (
    <Layout>
      <SEO title="Study Sets Privacy & Terms" />
      <Markdown source={privacy} />
    </Layout>
  );
}
