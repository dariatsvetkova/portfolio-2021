const path = require(`path`)

/** 
 * Type definitions
 */ 

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type ProjectsJson implements Node @dontInfer {
      id: ID!
      challenges: String
      descr: String!
      embed: String
      lessons: String
      next: String
      number: String!
      previous: String
      role: String
      team: [Team]
      slug: String
      stack: String
      tags: [String]!
      title: String!
      urls: Urls
      why: String
    }
    type Urls implements Node @dontInfer {
      code: String!
      live: String
    }
    type Team implements Node @dontInfer {
      name: String!
      link: String!
    }
    type Reco implements Node @dontInfer {
      id: ID!
      from: Person!
      text: String!
    }
    type Person implements Node @dontInfer {
      name: String!
      relation: String!
      company: String!
    }
  `)
}


/**
* Project pages
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
            team {
              name
              link
            }
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
            previous
            next
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
    if (project.node.slug) {
      createPage({
        path: project.node.slug,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          project: project.node,
          slug: project.node.slug.slice(1),
        },
      })
    }
  })
}
