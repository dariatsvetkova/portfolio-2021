module.exports = {
  siteMetadata: {
    title: `Daria Tsvetkova \/\/ Front-End Developer`,
    description: `Daria Tsvetkova is a front-end developer and musician based in Toronto, Canada. Learn more about her experience, skills and projects.`,
    url: "https://dariatsvetkova.ca",
    author: `Daria Tsvetkova`,
    twitterUsername: "@daria_tsss",
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
            name: "Paintr",
            link: "/paintr",
          },
          {
            name: "Game of Fifteen",
            link: "/game-of-15",
          },
          {
            name: "Clap Card",
            link: "/clap-card",
          },
          {
            name: "Tap Tempo",
            link: "/tap-tempo",
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
        theme_color: `#EFAE80`,
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
