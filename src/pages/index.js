import * as React from "react";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import AboutMeSection from "../components/sections/AboutMeSection";
import AppSection from "../components/sections/AppSection";
import Layout from "../components/layout/layout";
import FooterSection from "../components/sections/FooterSection";
import NavBar from "../components/sections/NavBar";
import NavTest from "../components/sections/NavTest";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";

export default function IndexPage({ data }) {
  const projects = data.apps.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid>
        <NavTest />
        <AboutMeSection />
        <BlankDiv />
        <ProjectSectionTitle id="projects">
          <h1>Projects</h1>
          <ProjectSubtitle>
            Below you can find the most notable apps that I have worked on.
            These include my companies applications, contracting projects, as
            well as my own personal apps. Most of them can still be found on the
            app store today.
          </ProjectSubtitle>
        </ProjectSectionTitle>
        <ImageGridContainer>
          {projects.map(({ node: project }) => (
            <CustomLink to={project.slug}>
              <AppSection
                app={project}
                heroImage={getImage(project.heroImage)}
              />
            </CustomLink>
          ))}
        </ImageGridContainer>
      </Container>
      <FooterSection />
    </Layout>
  );
}

//export page query
export const query = graphql`
  query Apps {
    apps: allAppsJson(sort: { order: ASC, fields: order }) {
      edges {
        node {
          title
          shortDescription
          slug
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

const BlankDiv = styled.div`
  height: 40px;
`;

const CustomLink = styled(Link)`
  color: black;
`;

const ImageGridContainer = styled.div`
  align-items: top;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: min(5vw, 70px);

  padding-bottom: 125px;
  margin: auto;
  max-width: 1700px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 70px;
  }
`;

const ProjectSectionTitle = styled.div`
  text-align: center;
  padding-top: 10px;
`;

const ProjectSubtitle = styled.h5`
  color: back;
  opacity: 0.7;
  max-width: 800px;
  margin: auto;
  margin-bottom: 75px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
