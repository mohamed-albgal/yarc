import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PageHeadText from '../components/homogenous/PageHeadText'
import kids from '../images/mothers_ws.jpg'
import SlantCard from '../components/homogenous/SlantCard';



const event1 = {
    
    fullName: "Poetry and Story-telling",
    // title: "Poetry and Story-telling",
    // body: "description of this person's history",
    cardBgColor: "bg-indigo-400"
}
const event2 = {
    
    fullName: "High School Math Course",
    // title: "Director",
    // body: "description of this person's history",
    cardBgColor: "bg-indigo-400"
}
const event3 = {
    
    fullName: "Arabic Classes",
    // title: "Director",
    // body: "description of this person's history",
    cardBgColor: "bg-indigo-400"
}
const event4 = {
    
    fullName: "Reading Club ",
    // title: "Director",
    // body: "description of this person's history",
    cardBgColor: "bg-indigo-400"
}
const event5 = {
    fullName: "English Course for College Students",
    // title: "English Course for College Students",
    // body: "description of this person's history",
    cardBgColor: "bg-indigo-400"
}


export default  ({data}) => {
    const {image1, image2, image3, image4, image5} = data;
    const nodes = data.allMarkdownRemark.edges;

    return(
        <Layout bgGradientColor="yellowBlue-topBottom">
        <div className="sm:mt-0 sm:pt-10 mb-20 pt-56  " >
            <PageHeadText text="Upcoming Events" />
        </div>
        <div className="flex flex-wrap mt-10 z-10 relative">
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full h-full">
                    <SlantCard body={event1.body} svgTextColor={"text-teal-400"}  head={event1.fullName} imgFluid={image1.childImageSharp.fluid} subHead={event1.title} bgColor={"bg-indigo-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={event2.body} svgTextColor={"text-indigo-400"}  head={event2.fullName} imgFluid={image2.childImageSharp.fluid} subHead={event2.title} bgColor={"bg-indigo-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={event3.body} svgTextColor={"text-indigo-400"}  head={event3.fullName} imgFluid={image3.childImageSharp.fluid} subHead={event3.title} bgColor={"bg-indigo-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={event4.body} svgTextColor={"text-indigo-400"}  head={event4.fullName} imgFluid={image4.childImageSharp.fluid} subHead={event4.title} bgColor={"bg-indigo-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={event5.body} svgTextColor={"text-indigo-400"}  head={event5.fullName} imgFluid={image5.childImageSharp.fluid} subHead={event5.title} bgColor={"bg-indigo-400"} />
                </div>
            </div>
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
                }
                fields {
                    slug
                }
            }
        }
    }
    image1: file(relativePath: {eq: "images/flyer1.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image2: file(relativePath: {eq: "images/flyer2.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image3: file(relativePath: {eq: "images/flyer3.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image4: file(relativePath: {eq: "images/book_flyer.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image5: file(relativePath: {eq: "images/hs_writing_ws.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`


