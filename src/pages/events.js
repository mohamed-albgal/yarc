import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

import kids from '../assets/img/village_kids.jpg'
import squares from '../assets/img/oakland_dock.jpg'

export default  ({data}) => {
    const nodes = data.allMarkdownRemark.edges;
    const newestEvent = nodes[0].node.frontmatter;
    const events = nodes.slice(1);
    const BlogDisplay = ({title, date, description}) => {
        return (
            <div className="w-full sm:m-0 ">
            <div className="justify-start sm:mt-20 flex sm:flex-row flex-col hover:shadow-xl ">
                <div className="inline-block w-full"><LongImage imgSrc={kids}/> </div>
                <div className="border border-indigo-600 text-left mr-20">
                    <h2 className="sm:text-7xl text-5xl leading-none font-bold">{title}</h2>
                    <h6>{date}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        )
    }
    return(
        <Layout>
        <div className="sm:mt-0 sm:pt-10 mb-20 pt-56 " >
            <PageHeadText title="Upcoming Events" />
        </div>
        {events.map(({node})=>(
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

const LongImage = ({imgSrc}) => {
   return (
    <div className="sm:w-7/12 relative ">
        <div className=" left-0 ">
        <img
            alt="..."
            className="object-cover max-w-full rounded-lg shadow-lg "
            src={imgSrc}
        />

        </div>
    </div>
   )
}

const PageHeadText = (props) => {
    return (
        <div className=" transform container mx-auto flex flex-col flex-no-wrap">
            <div className="text-gray-900 font-extrabold tracking-wide text-8xl shadow-2xl">{props.title}
                <span className="block h-1 -mt-4 bg-blue-900 self-stretch"></span>
            </div>
        </div>
    )
}



export const query = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "event"}}}){
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


