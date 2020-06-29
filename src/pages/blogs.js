
import React from 'react'
import Layout from '../components/Layout'
import PageHeadText from '../components/homogenous/PageHeadText'
import { graphql, Link} from 'gatsby'
// import imgfeat from '../images/hangingLights.jpg'
import img2 from '../images/covid_19_thanks.jpg'
import Img from 'gatsby-image'

export const query = graphql`
{
    allMarkdownRemark(limit: 10,
        sort: { order: DESC, fields: [frontmatter___date]}
        filter: {fileAbsolutePath: {regex: "/(blog)/"}}) {
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
                    blogImg{
                        childImageSharp{
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                }
            }
        }
    }`;


export default ({data}) => {
    const nodes = data.allMarkdownRemark.edges;
    // const featureData = nodes[0].node;
    // const blogNodes = nodes.length > 0 ?  nodes.slice(1): [];

    const allBlogs = nodes.map(({ node }, i) => (
        <Link key={i} to={node.fields.slug}>
            <BasicCard
            fluidImage={ node.frontmatter.blogImg.childImageSharp.fluid}
            excerpt={node.excerpt} 
            title={node.frontmatter.title} 
            date={node.frontmatter.date}
            medText={node.frontmatter.author}
            smallText={`${node.timeToRead} minutes`}
            />
        </Link>
    ))

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
  const BigCard = ({title, excerpt, fluidImg, date, smallText, medText}) => {
    return (
        <div className="flex max-w-full flex-wrap shadow-xl m-4">
            <div className="order-first sm:w-2/3 w-full object-cover sm:rounded-l-lg sm:rounded-r-none rounded-lg rounded-b-none h-full overflow-hidden ">
                <Img fluid={fluidImg} alt="big"/>
            </div>
            <div className=" order-last sm:w-1/3 rounded-lg sm:rounded-t-lg rounded-t-none border-blue-100 w-full bg-gray-200">
                <div className=" sm:h-full flex-grow p-10 sm:hover:text-indigo-800 ">
                    <h1 className=" sm:text-6xl text-3xl text-gray-700">
                        {title}
                    </h1>
                    <p className="text-xs text-gray-500 leading-tight">{date}</p>
                    <p className="text-gray-700 sm:text-3xl text-lg max-h-full">
                    {excerpt}
                    </p>
                    <p className="text-gray-800 text-base tracking-wider">{medText}</p>
                    <p className="text-gray-600 text-sm tracking-widest">{smallText}</p>
                    
                </div>
            </div>
        </div>
    )
}

const BasicCard = ({title, excerpt, fluidImage, date, smallText, medText}) => {
    return (
        <div className="lg:max-w-md  rounded-md bg-gray-300 overflow-hidden shadow-2xl sm:mx-4 my-8 ">
            <div className="">
                <Img fluid={fluidImage} alt="something" />
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