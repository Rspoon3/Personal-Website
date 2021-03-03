module.exports = {
  siteMetadata: {
    title: `Richard Witherspoon III`,
    description: `Richard Witherspoon III is an iOS developer who works full time for InterPro Solutions while also making his own apps in his free time.`,
    author: `@richardWitherspoon3`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
