module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Code Quality`,
    author: `CQ`,
    description: `My site description...`,
    social: [
      {
        name: `github`,
        url: `https://github.com/code-quality-metrics`,
      },
    ],
  },
  pathPrefix: "/website",
}
