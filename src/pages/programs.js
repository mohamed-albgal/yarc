import React, { useState, useEffect} from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PageHeadText from '../components/homogenous/PageHeadText'
import SlantCard from '../components/homogenous/SlantCard'
import { PageBar } from './events';

export const query = graphql`
{
    allMarkdownRemark(limit: 10
        sort: { order: DESC, fields: [frontmatter___startDate]}
        filter: {fileAbsolutePath: {regex: "/(programs)/"}}) {
            edges {
                node{
                frontmatter{
                    title
                    description
                    tags
                    category
                    startDate(formatString: "MMMM DD, YYYY")
                    endDate(formatString: "MMMM DD, YYYY")
                    type
                    programImage{
                        childImageSharp{
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                              }
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
}
`




export default  ({data}) => {
    const [nodeCategories, setNodeCategories] = useState({
        All: [],
        Education: [],
        Community: [],
        English: [],
        Arabic: [],
        
    })
    const [selection, setSelection ] = useState(0);
    useEffect( () => {
        const {ed, comm, eng, ar, all} = splitData(data.allMarkdownRemark.edges)
        setNodeCategories({All: all, Education: ed, Community: comm, English: eng, Arabic: ar,  });
    }, [data.allMarkdownRemark.edges])

    const splitData = (nodes) => {
        const ed = []
        const comm = []
        const eng = []
        const ar = []
        // const all = []
        nodes.forEach( ( { node }) => {
            let cat = node.frontmatter.category.toLowerCase()
            if (cat === 'education'){
                ed.push(node)
            }else if (cat === 'arabic'){
                ar.push(node)
            }else if (cat === 'english') {
                eng.push(node)
            }else {
                comm.push(node);
            }
        });
        const all = [ ...ed, ...comm, ...eng, ...ar]
        return {ed, comm, eng, ar, all}
    }
    const makePrograms = (selection) => {
        const key = Object.keys(nodeCategories)[selection];
        const nodes = nodeCategories[key];
        return (
            nodes.map( ( { frontmatter, fields }, i ) => {
            const tagList = frontmatter.tags.split(" ");
            const progImage = frontmatter.programImage;
            return (
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full h-full">
                    <Link to={fields.slug}>
                        <SlantCard body={frontmatter.description} 
                        svgTextColor={`text-orange-500`}  
                        head={frontmatter.title} 
                        tags={tagList}
                        imgFluid={progImage && progImage.childImageSharp.fluid} 
                        subHead={`${frontmatter.endDate ? frontmatter.startDate + " - " + frontmatter.endDate: frontmatter.startDate}`} 
                        bgColor={`bg-orange-500`} />
                    </Link>
                </div>
                )
            }
        )
    )}
    const onBarSelect = (i) => setSelection(i)
    const barProps = { ...barStyles, onBarSelect, barSelections:Object.keys(nodeCategories) }
        
    return(
        <Layout bgGradientColor="yellowBlue-topBottom">
        <div className="text-center">
            <div className=" inline-block sm:mt-0 sm:pt-10 mb-20 pt-32  " >
                <PageHeadText text="Y.A.R Center Programs" />
            </div>
            <PageBar {...barProps} />
        </div>
        <div className="flex flex-wrap mt-10 sm:px-12 z-10 relative">
            {makePrograms(selection)}        
        </div>
        </Layout>
    )
}

const barStyles = {
    divStyle: `w-1/5 text-center inline-block border-b border-green-600`,
    buttonStyle: `font-hairline sm:text-xl w-full text-xs text-green-600`,
    selectedDivStyle: `border-b-2 border-black`,
    selectedButtonStyle: `tracking-wider font-thin text-orange-400`,

}


