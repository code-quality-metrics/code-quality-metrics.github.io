module.exports = {
  pathPrefix: '', // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Code Quality',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Code Quality - CQ',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
