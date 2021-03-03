import React from "react";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import aboutMe from "../../markdown/about-me.md";
import description from "../../markdown/cinematic-description.md";
import Markdown from "../../markdown/markdown-importer";

export default function StudySetsPrivacy() {
  return (
    <Layout>
      <SEO title="Cinematic Details" />
      <Markdown source={description} />
      <Markdown source={aboutMe} />
    </Layout>
  );
}
