
import React from 'react'
import Layout from '../components/Layout'
import {useStaticQuery, graphql} from 'gatsby'
import imgfeat from '../assets/img/hangingLights.jpg'
import img0 from '../assets/img/graffiti_create.jpg'
import img1 from '../assets/img/giftIsYou_mural.jpg'
import img2 from '../assets/img/covid_19_thanks.jpg'

const cp = "test test test test test test test test test test test test test test test";
export default () => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(limit: 4, filter: {frontmatter: {type: {eq: "blog"}}}){
        edges{
            node{
            frontmatter{
                caption
                title
                date
                img
            }
            }
        }
        }
    }`);

    
    const nodes = data.allMarkdownRemark.edges;
    
    const featureData = nodes[0].node;
    const blogNodes = nodes.slice(1);
    
    

    return (
        <Layout>
            <div className="container mx-auto sm:mt-56 bg-gray-200">
                <BigCard blogImg={imgfeat}
                title={featureData.frontmatter.title} 
                caption={featureData.frontmatter.caption}
                date={featureData.frontmatter.date}
                />
                <div className=" sm:flex flex-wrap justify-start">
                    {blogNodes.map(({node, i}) => (<BasicCard 
                        blogImg={img1}
                        caption={node.frontmatter.caption} 
                        title={node.frontmatter.title} 
                        date={node.frontmatter.date}
                        />
                    ))}
                </div>
            </div>
        </Layout>

    )
}

const BigCard = ({title, caption, blogImg, date}) => {
    return (
        <div className="flex max-w-full flex-wrap shadow-xl m-4">
            <div className="order-first sm:w-2/3 object-cover sm:rounded-l-lg sm:rounded-r-none rounded-lg h-full overflow-hidden ">
                <img src={blogImg} alt="big image"></img>
            </div>
            <div className=" order-last sm:w-1/3 rounded-lg border-blue-100 w-full  bg-gray-200">
                <div className=" sm:h-full flex-grow p-10 ">
                    <h1 className=" sm:text-6xl text-3xl text-gray-700">
                        {title}
                    </h1>
                    <p className="text-gray-700 text-sm max-h-full">
                        {caption}
                    </p>
                    <p className="text-xs text-gray-500 leading-tight">{date}</p>
                </div>
            </div>
        </div>
    )
}

const BasicCard = ({title, caption, blogImg, date}) => {
    return (
        <div className="w-11/12 sm:max-w-md rounded-md bg-gray-300 overflow-hidden shadow-2xl sm:mx-4 sm:my-8 my-8 mx-auto">
            <div className=" ">
                <img className="object-cover" src={blogImg} alt="some image" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> {title}
                </div>
                <p className="text-gray-700 text-base">
                    {caption}
                </p>
                <p className="text-xs text-gray-500 leading-tight">{date}</p>
            </div>
        </div>
    )
}