/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Portfolio Site',
    description: 'Made with 💜 by Debiday',
    copyright: 'This website is made in 2021',
    contact: 'deborah.oyt@gmail.com'
  }
}