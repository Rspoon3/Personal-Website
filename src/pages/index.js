import * as React from "react";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import DescriptionSection from "../components/sections/DescriptionSection";
import AppSection from "../components/sections/AppSection";
import Layout from "../components/layout/layout";
import FooterSection from "../components/sections/FooterSection";
import staticData from "../staticData.json";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <DescriptionSection />
      {staticData.apps.map((app, index) => (
        <AppSection
          index={index}
          title={app.title}
          tagline={app.tagline}
          moreLink={app.moreLink}
          appLink={app.appLink}
          icon={app.icon}
          images={app.images}
          description={app.description}
        />
      ))}
      <FooterSection />
    </Layout>
  );
}
