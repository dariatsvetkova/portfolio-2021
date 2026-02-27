/**
 * Type definitions
 */

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
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

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
