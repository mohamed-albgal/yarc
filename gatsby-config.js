
module.exports = {
  siteMetadata: {
    title: "Yemeni American Resource Center",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve:`gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-relative-images`,
        }]
      },

    },
    
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yemeni-American Resource Center`,
        short_name: `Y.A.R Center`,
        start_url: `/`,
        background_color: `#1e57b3`,
        theme_color: `#1e57b3`,
        display: `minimal-ui`,
        icon: `src/images/yarc_logo_icon.svg`, 
      }
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
