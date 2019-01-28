/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const reactHelmet = require('react-helmet')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
   page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}



exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node : {
      fs : "empty"
    },
    externals: [reactHelmet]
  })
}

// exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
//   const config = getConfig()

//   const newConfig = {
//     ...config,
//     module: {
//       ...config.module,
//       rules: config.module.rules.map(processRule),
//     },
//   }
//   actions.replaceWebpackConfig(newConfig)
// }
