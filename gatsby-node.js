const path = require(`path`)

// Define the Navigation node type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type ProjectsJson implements Node @dontInfer {
      id: ID!
      challenges: String!
      descr: String!
      embed: String
      lessons: String!
      urls: Urls
      number: String!
      role: String!
      slug: String!
      stack: String
      tags: [String]!
      title: String!
      why: String!
    }
    type Urls implements Node @dontInfer {
      code: String!
      live: String
    }
  `)
  }


/**
* Projects
*/

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Generate pages for each project.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query all project data
  const queryResult = await graphql(`
    {
      allProjectsJson(
        sort: { order: ASC, fields: number }
      ) {
        edges {
          node {
            slug
            number
            title
            descr
            role
            tags
            urls {
              code
              live
            }
            embed
            why
            stack
            challenges
            lessons
          }
        }
      }
    }
  `)
  if (queryResult.errors) {
    reporter.panic("Error loading projects", queryResult.errors)
    return
  }

  // Generate single project pages
  const projects = queryResult.data.allProjectsJson.edges
  
  projects.forEach(project => {
    createPage({
      path: project.node.slug,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        project: project.node,
        slug: project.node.slug.slice(1),
      },
    })
  })
}
