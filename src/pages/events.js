import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PageHeadText from '../components/homogenous/PageHeadText'
import kids from '../images/mothers_ws.jpg'


export default  ({data}) => {
    const nodes = data.allMarkdownRemark.edges;
    //const newestEvent = nodes[0].node.frontmatter;
    //const events = nodes.slice(1);
    const BlogDisplay = ({title, date, description}) => {
        return (
            <div className="w-full mx-auto sm:m-0 py-4 px-2 ">
            <div className="sm:mt-20 flex sm:flex-row flex-col hover:shadow-xl justify-center">
                <div className=" sm:w-1/2">
                    <div className="object-cover rounded-lg shadow-lg">
                        <img src={kids} alt="kids">

                        </img>
                    </div>
                </div>
                <div className="text-center w-full p-10 sm:w-1/2">
                    <h2 className="sm:text-7xl text-5xl leading-none font-bold">{title}</h2>
                    <h6>{date}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        )
    }
    return(
        <Layout bgGradientColor="yellowBlue-topBottom">
        <div className="sm:mt-0 sm:pt-10 mb-20 pt-56  " >
            <PageHeadText text="Upcoming Events" />
        </div>
        {nodes.map(({node})=>(
            <Link to={node.fields.slug}>
                <BlogDisplay title={node.frontmatter.title}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                />
            </Link>
            ))}
        </Layout>
    )
}



export const query = graphql`
{
    allMarkdownRemark(limit: 10
        sort: { order: DESC, fields: [frontmatter___date]}
        filter: {fileAbsolutePath: {regex: "/(events)/"}}) {
            edges {
                node{
                frontmatter{
                    title
                    description
                    date(formatString: "MMMM DD, YYYY")
                    type
                    img
                }
                fields {
                    slug
                }
            }
        }
    }
}
`


