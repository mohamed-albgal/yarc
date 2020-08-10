import React from 'react'
import Layout from '../components/Layout'
import PageHeadText from '../components/homogenous/PageHeadText'
import { graphql} from 'gatsby'
import { Link, useIntl} from 'gatsby-plugin-intl'
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
    const intl = useIntl();
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
        <Layout navWithHero bgGradientColor={"purple-bottom"}>
            <div className=" sm:mt-0 sm:pl-16 sm:pt-10 mb-32 pt-32  " >
                <div className={` inset-0 sm:mt-40`}>
                    <PageHeadText text={intl.formatMessage({id:"blogHeadText"})} />
                </div>    
            
            </div>
            <div className="lg:mx-20 mx-auto pb-10">
                <div className="sm:flex align-middle flex-wrap lg:justify-start justify-center mx-4">
                    {allBlogs}
                </div>
            </div>
        </Layout>

    )
}

const BasicCard = ({title, excerpt, fluidImage=null, date, smallText, medText, height="h-64"}) => {
    const imageStyle = ` sm:max-w-full w-full ${height} rounded-t-lg object-cover object-top overflow-hidden" alt="staff image`
    return (
        <div className="sm:hover:bg-white font-hairline max-w-sm sm:hover:text-blue-700  rounded-md bg-gray-200 overflow-hidden shadow-2xl sm:mx-6 sm:mt-8 my-20 ">
            <div className="">
                {fluidImage ? <Img fluid={fluidImage} alt="something" className={imageStyle} />
                : <img src={defaultImage} alt="blog bg Image" className={imageStyle} />
                }
            </div>
            <div className="px-6 py-4 w-full sm:hover:font-medium">
                <div className=" sm:text-3xl min-w-full text-4xl mb-2 "> {title}
                </div>
                <p className="text-xs text-gray-500 leading-tight">{date}</p>
                <p className="text-gray-700 text-md">
                {excerpt}
                </p>
                <p className="text-gray-800 text-base tracking-wider">{medText}</p>
                <p className="text-gray-600 text-sm tracking-widest">{smallText}</p>
            </div>
        </div>
    )
}