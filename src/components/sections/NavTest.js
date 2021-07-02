import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function FooterSection() {
  return (
    <NavBarItems>
      <Link to="/">
        <StaticImage
          src="../../images/home/mimoji.png"
          alt="Richards mimoji"
          height={39}
          layout="fixed"
        />
      </Link>
      <NavMenu>
        <li>
          <Link to="/#about">
            {" "}
            <MenuLink>About</MenuLink>
          </Link>
        </li>
        <li>
          <Link to="/#projects">
            {" "}
            <MenuLink>Projects</MenuLink>
          </Link>
        </li>
        <li>
          <a href="mailto:richardwitherspoon3@gmail.com">
            <MenuLink>Contact</MenuLink>
          </a>
        </li>
      </NavMenu>
    </NavBarItems>
  );
}

const NavBarItems = styled.nav`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 50px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;

  @media (max-width: 768px) {
    width: 70vw;
    grid-gap: 30px;
  }
`;

const MenuLink = styled.p`
  &:hover {
    opacity: 0.5;
  }
`;
