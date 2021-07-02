module.exports = {
  siteMetadata: {
    title: `Richard Witherspoon`,
    description: `Richard Witherspoon is an iOS developer who works full time for InterPro Solutions while also making his own apps in his free time.`,
    author: `@richardWitherspoon3`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "apps",
        path: "./src/apps/",
      },
      __key: "apps",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./src/markdown/",
      },
      __key: "markdown",
    },
  ],
};
