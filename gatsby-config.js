module.exports = {
  siteMetadata: {
    title: `Daria Tsvetkova \/\/ Front-End Developer`,
    description: `Daria Tsvetkova is a front-end developer, musician, and creative thinker in Toronto, Canada. Learn more about her experience, skills and projects.`,
    author: `@dariatsvetkova`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly'
          }
        },
      },
    },
  ],
}
