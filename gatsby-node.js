const path = require('path');
const { createFilePath } =  require(`gatsby-source-filesystem`)

/*
onCreateNode:
    tells Gatsby: 'everytime you create a node, do {code}'
*/

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        const slug = createFilePath({ 
            node,
            getNode, 
            // i added the /blogs to only get blogs to show up
            basePath:`pages/blogs` ,
            // ***note the default is true, this makes the slug be /about instead of /about/, change if sub-pages (?)
            trailingSlash:false
        });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
} 

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const result = await graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    fileAbsolutePath
                    fields {
                        slug
                    }
                }
            }
        }
    }`)
    result.data.allMarkdownRemark.edges.forEach(  ({ node }) => {
        console.log(node);
        node.fileAbsolutePath.split(path.sep).includes('blog') &&
        (createPage({
            path: node.fields.slug ,
            component: path.resolve(`./src/templates/blog-template.js`),
            context: {
                //data passed here is available as a graphql query
                slug: node.fields.slug,
            },
        }))
    })
}