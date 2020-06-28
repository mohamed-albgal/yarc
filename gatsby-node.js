const path = require('path');
const { createFilePath } =  require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

/*
onCreateNode:
    tells Gatsby: 'everytime you create a node, check of type md remark,
        create a new path (unsure of how name of slug is chosen here (!)
        create a new field containing the newly created path+slug
*/

exports.onCreateNode = ({ node, getNode, actions }) => {
    fmImagesToRelative(node);
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        const slug = createFilePath({ 
            node,
            getNode, 
            basePath:`pages/` ,
            trailingSlash:true
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
        blog:allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}){
          edges{
            node{
                fields{
                slug
              }
            }
          }
        }
        events:allMarkdownRemark(filter: {frontmatter: {type: {eq: "event"}}}){
          edges{
            node{
                fields{
                slug
              }
            }
          }
        }
        programs:allMarkdownRemark(filter: {frontmatter: {type: {eq: "program"}}}){
          edges{
            node{
                fields{
                slug
              }
            }
          }
        }
        
    }
    `)
    result.data.blog.edges.forEach(  ({ node }) => {
            (createPage({
                path: node.fields.slug ,
                component: path.resolve(`./src/templates/blog-template.js`),
                context: {
                    //data passed here is available as a graphql query
                    slug: node.fields.slug,
                },
            }))
        });

        result.data.events.edges.forEach( ({node }) => {
        
            (createPage({
                path:node.fields.slug,
                component:path.resolve(`./src/templates/events-template.js`),
                context: {
                    slug: node.fields.slug,
                },
            }))
        });

        result.data.programs.edges.forEach( ({ node }) => {
            (createPage({
                path:node.fields.slug,
                component: path.resolve(`./src/templates/programs-template.js`),
                context: {
                    slug: node.fields.slug,
                },
            }));
        });
            
}