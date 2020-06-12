
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yemeni-American Resource Center`,
        short_name: `Y.A.R Center`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/yarc_logo_icon.svg` 

      }
    },
  ],
}
