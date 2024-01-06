module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Daria Tsvetkova \/\/ Software Engineer`,
    description: `Daria Tsvetkova is a software engineer and musician based in Toronto, Canada. Learn more about her experience, skills and projects.`,
    url: "https://dariatsvetkova.ca",
    author: "Daria Tsvetkova",
    ogImage: "https://dariatsvetkova.ca/daria-tsvetkova-og.png",
    navigation: [
      {
        name: "Home",
        link: "/",
        subnav: [],
      },
      {
        name: "Projects",
        link: "/#projects",
        subnav: [
          {
            name: "FormBuster",
            link: "/formbuster",
          },
          {
            name: "React Firebase Starter",
            link: "/starter",
          },
          {
            name: "Paintr",
            link: "/paintr",
          },
        ]
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daria Tsvetkova`,
        short_name: `Daria`,
        start_url: `/`,
        background_color: `#FBFAF9`,
        theme_color: `#F5DFCF`,
        display: `standalone`,
        icon: `src/data/images/favicon.svg`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
