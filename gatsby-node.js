const path = require('path');
const { createFilePath } =  require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const jsonfile = require('jsonfile');
/*
read the en.json with gql, so it can be updated from the cms


*/

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);
    if (node.internal.type === 'MarkdownRemark') {
        
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
        leaders:allMarkdownRemark(filter: {frontmatter: {type: {eq: "leader"}}}){
        edges{
            node{
                fields{
                slug
              }
            }
          }
        }
        indexPages:allMarkdownRemark(filter: {frontmatter: {type: {eq: "site_page"}, title: {eq: "index"}}}) {
          edges {
            node {
              frontmatter {
                lang
                head
                caption
                bgImage {
                  publicURL
                }
                section1 {
                  card1 {
                    body
                    head
                  }
                  card2 {
                    body
                    head
                  }
                  card3 {
                    body
                    head
                  }
                }
                section2 {
                  linkText
                  side {
                    body
                    head
                  }
                  slantCard {
                    body
                    head
                    image {
                      publicURL
                    }
                  }
                }
                section3 {
                  linkText
                  image {
                    publicURL
                  }
                  side {
                    head
                    body
                  }
                }
                section4 {
                  head
                  caption
                  linkText
                  card1 {
                    member
                    title
                    image {
                      publicURL
                    }
                  }
                  card2 {
                    member
                    title
                    image {
                      publicURL
                    }
                  }
                  card3 {
                    member
                    title
                    image {
                      publicURL
                    }
                  }
                  card4 {
                    member
                    title
                    image {
                      publicURL
                    }
                  }
                }
              }
            }
          }
        }
        missionPages: allMarkdownRemark(filter: {frontmatter: {title: {eq: "mission"}}}) {
          edges {
            node {
              html
              frontmatter {
                lang
                head
                mission
                missionHead
                vision
                visionHead
                goals
                goalsHead
                bgImage{
                  publicURL
                }
              }
            }
          }
        }
        teamPages: allMarkdownRemark(filter: {frontmatter: {title: {eq: "team"}}}) {
          edges {
            node {
              frontmatter {
                lang
                head
                caption
                heroImage{
                  publicURL
                }
                memberCards {
                  memberCard1 {
                    image {
                      publicURL
                    }
                    member
                    role
                    bio
                  }
                  memberCard2 {
                    image {
                      publicURL
                    }
                    member
                    role
                    bio
                  }
                  memberCard3 {
                    image {
                      publicURL
                    }
                    member
                    role
                    bio
                  }
                  memberCard4 {
                    image {
                      publicURL
                    }
                    member
                    role
                    bio
                  }
                }
              }
            }
          }
        }
    }
    `)

    // docs for write/read to json at: https://www.npmjs.com/package/jsonfile
    const enJsonPath = 'src/intl/en.json';
    const arJsonPath = 'src/intl/ar.json'
    let intl_en = jsonfile.readFileSync(enJsonPath);
    let intl_ar = jsonfile.readFileSync(arJsonPath);
    const dumpToIntl = (key, data) => {
      const appendage = {}
      appendage[key] = data;
      if (data.lang === "ar")
        intl_ar =  Object.assign(intl_ar,appendage);
      else
        intl_en = Object.assign(intl_en, appendage);
    }
    result.data.indexPages.edges.forEach( ({ node }) => {
      dumpToIntl("index", node.frontmatter)
    });
    result.data.missionPages.edges.forEach( ({ node}) => {
      dumpToIntl("mission", node.frontmatter)
    });
    result.data.teamPages.edges.forEach( ({ node}) => {
      dumpToIntl("team", node.frontmatter)
    });
    jsonfile.writeFileSync(enJsonPath, intl_en, { spaces: 2, EOL: '\r\n' })
    jsonfile.writeFileSync(arJsonPath, intl_ar, { spaces: 2, EOL: '\r\n' })


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
        result.data.leaders.edges.forEach( ({ node }) => {
          (createPage({
              path:node.fields.slug,
              component: path.resolve(`./src/templates/leaders-template.js`),
              context: {
                  slug: node.fields.slug,
              },
          }));
      });
            
}