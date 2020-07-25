import React, { useState, useEffect} from 'react'
import { Link, useIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby'
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




export default  ({data, location}) => {
    const intl = useIntl();
    const all = intl.formatMessage({id:"programsCategories.all"});
    const  ed = intl.formatMessage({id:"programsCategories.education"});
    const eng = intl.formatMessage({id:"programsCategories.english"});
    const ar = intl.formatMessage({id:"programsCategories.arabic"});
    const comm = intl.formatMessage({id:"programsCategories.community"});
    const catsArray = {}
    catsArray[all] = [];
    catsArray[ed] = [];
    catsArray[eng] = [];
    catsArray[ar] = [];
    catsArray[comm] = [];
    const [nodeCategories, setNodeCategories] = useState(catsArray);
    const [selection, setSelection ] = useState(1);
    
    useEffect( () => {
        splitData(data.allMarkdownRemark.edges)
    }, [data.allMarkdownRemark.edges])
    useEffect( () => {
        let sel = location.state && location.state.selection;
        setSelection(sel || 1)
    }, [location.state])

    const splitData = (nodes) => {
        nodes.forEach( ( { node }) => {
            let cat = node.frontmatter.category.toLowerCase()
            catsArray[all].push(node);
            if (cat === 'education'){
                catsArray[ed].push(node)
            }else if (cat === 'arabic'){
                catsArray[ar].push(node)
            }else if (cat === 'english') {
                catsArray[eng].push(node);
            }else if (cat ==='community') {
                catsArray[comm].push(node)
            }
        });
        setNodeCategories(catsArray);
    }
    const makePrograms = (sel) => {
        const key = Object.keys(nodeCategories)[sel];
        console.log('making progs key is:', key);
        const nodes = nodeCategories[key];
        console.log('making progs', nodes);
        return (
            nodes.map( ( { frontmatter, fields }, i ) => {
            const tagList = frontmatter.tags && frontmatter.tags.split(" ");
            const progImage = frontmatter.programImage;
            return (
                <div key={i} className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full h-full">
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
        <div className=" sm:mt-0 sm:pl-16 sm:pt-10 mb-32 pt-32  " >
                <PageHeadText text={intl.formatMessage({id:"programsHeadText"})} />
            </div>
        <div className="text-center">
            
            <PageBar {...barProps} externalSelection={selection} />
        </div>
        <div className="flex flex-wrap mt-10 sm:px-12 z-10 relative">
            { makePrograms(selection) }       
        </div>
        </Layout>
    )
}

const barStyles = {
    divStyle: `w-1/5 text-center inline-block border-b border-gray-900 hover:border-yellow-100`,
    selectedDivStyle: `w-1/5 text-center inline-block border-b-2 border-yellow-500`,
    buttonStyle: `font-hairline sm:text-xl w-full text-xs text-black hover:text-yellow-100`,
    selectedButtonStyle: ` sm:text-xl w-full text-xs tracking-wider font-thin text-yellow-500`,

}


