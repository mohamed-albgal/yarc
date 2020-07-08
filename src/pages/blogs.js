
import React from 'react'
import Layout from '../components/Layout'
import PageHeadText from '../components/homogenous/PageHeadText'
import { graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import defaultImage from '../images/yarc_logo_icon.svg'

export const query = graphql`
{
    allMarkdownRemark(limit: 10,
        sort: { order: DESC, fields: [frontmatter___date]}
        filter: {frontmatter: {type: {eq: "blog"}}}) {
          edges {
            node {
            excerpt
            timeToRead
            fields {
                slug
            }
            frontmatter {
              author
              title
              tags
              date(formatString: "MMMM DD, YYYY")
              blogImg {
                childImageSharp{
                  fluid(maxWidth: 800){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
    }
  }
  `;


export default ({data}) => {
    const nodes = data.allMarkdownRemark.edges;
    const allBlogs = nodes &&  nodes.map(({ node }, i) => {
        const blogImage = node.frontmatter.blogImg;
        return (    
            <Link key={i} to={node.fields.slug}>
                <BasicCard
                fluidImage={blogImage && blogImage.childImageSharp.fluid}
                excerpt={node.excerpt} 
                title={node.frontmatter.title} 
                date={node.frontmatter.date}
                medText={node.frontmatter.author}
                smallText={`${node.timeToRead} minutes`}
                />
            </Link>
        )}
    )

    return (
        <Layout bgGradientColor={"purple-bottom"}>
            <div className="sm:mt-0 sm:pt-10 mb-20 pt-32">
                <PageHeadText text={"Youth Voices"} />
            </div>
            <div className="mx-auto">
                <div className="sm:flex justify-center mx-4">
                    {allBlogs}
                </div>
            </div>
        </Layout>

    )
}

const BasicCard = ({title, excerpt, fluidImage=null, date, smallText, medText, height="h-64"}) => {
    const imageStyle = ` sm:max-w-full w-full ${height} rounded-t-lg object-cover object-top overflow-hidden" alt="staff image`
    return (
        <div className="lg:max-w-md  rounded-md bg-gray-300 overflow-hidden shadow-2xl sm:mx-4 my-8 ">
            <div className="">
                {fluidImage ? <Img fluid={fluidImage} alt="something" className={imageStyle} />
                : <img src={defaultImage} alt="blog bg Image" className={imageStyle} />
                }
            </div>
            <div className="px-6 py-4 w-full">
                <div className="font-hairline bold sm:text-5xl text-4xl mb-2 sm:hover:text-indigo-800 "> {title}
                </div>
                <p className="text-xs text-gray-500 leading-tight">{date}</p>
                <p className="text-gray-700 text-2xl">
                {excerpt}
                </p>
                <p className="text-gray-800 text-base tracking-wider">{medText}</p>
                <p className="text-gray-600 text-sm tracking-widest">{smallText}</p>
            </div>
        </div>
    )
}