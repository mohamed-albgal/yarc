

var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  siteMetadata: {
    title: "Yemeni American Resource Center",
  },
  plugins: [
    netlifyCmsPaths,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 900,
            },
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
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
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
