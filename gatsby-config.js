
module.exports = {
  siteMetadata: {
    title: "Yemeni American Resource Center",
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
