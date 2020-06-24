
import React from 'react'
import Layout from '../components/Layout'
import PageHeadText from '../components/homogenous/PageHeadText'
import { graphql, Link} from 'gatsby'
import imgfeat from '../images/hangingLights.jpg'
import img2 from '../images/covid_19_thanks.jpg'
// import tw from 'twin.macro'
// import styled from '@emotion/styled'
const BigCard = ({title, caption, blogImg, date}) => {
    return (
        <div className="flex max-w-full flex-wrap shadow-xl m-4">
            <div className="order-first sm:w-2/3 object-cover sm:rounded-l-lg sm:rounded-r-none rounded-lg h-full overflow-hidden ">
                <img src={blogImg} alt="big"></img>
            </div>
            <div className=" order-last sm:w-1/3 rounded-lg border-blue-100 w-full -ml-2 bg-gray-200">
                <div className=" sm:h-full flex-grow p-10 sm:hover:text-indigo-800 ">
                    <h1 className=" sm:text-6xl text-3xl text-gray-700">
                        {title}
                    </h1>
                    <p className="text-xs text-gray-500 leading-tight">{date}</p>
                    <p className="text-gray-700 sm:text-3xl text-lg max-h-full">
                    {caption}
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

const BasicCard = ({title, caption, blogImg, date}) => {
    return (
        <div className="lg:max-w-md  rounded-md bg-gray-300 overflow-hidden shadow-2xl sm:mx-4 my-8 ">
            <div className=" ">
                <img className="object-cover" src={blogImg} alt="something" />
            </div>
            <div className="px-6 py-4">
                <div className=" font-hairline bold sm:text-5xl mb-2 sm:hover:text-indigo-800 "> {title}
                </div>
                <p className="text-xs text-gray-500 leading-tight">{date}</p>
                <p className="text-gray-700 text-2xl">
                Notice that you’re able to query with the $slug value from your context as an argument, which ensures that you’re returning only the data that matches
                </p>
            </div>
        </div>
    )
}


export default ({data}) => {
    const nodes = data.allMarkdownRemark.edges;
    const featureData = nodes[0].node;
    const blogNodes = nodes.slice(1);
    
    // const allBlogs = blogNodes.map(({ node }) => (
    //     <Link to={node.fields.slug}>
    //         <BasicCard
    //         blogImg={img2}
    //         caption={node.frontmatter.caption} 
    //         title={node.frontmatter.title} 
    //         date={node.frontmatter.date}
    //         />
    //     </Link>
    // ))

    return (
        <Layout bgGradientColor={"purple-bottom"}>
            <div className="sm:mt-0 sm:pt-10 mb-20 pt-56">
                <PageHeadText text={"Youth Voices"} />
            </div>
            <div className="mx-auto">
                <div className="">
                    <Link to={featureData.fields.slug}>
                        <BigCard blogImg={imgfeat}
                        title={featureData.frontmatter.title} 
                        caption={featureData.frontmatter.caption}
                        date={featureData.frontmatter.date}
                        />
                    </Link>
                </div>
                <div className="sm:flex justify-center mx-4">
                    {/*allBlogs.length && allBlogs*/}
                    <Link to={'/'}>
                        <BasicCard
                        blogImg={img2}
                        caption={'Blog speaks about blah blah blah'} 
                        title={'Blog About Stuff'} 
                        date={"06-03-2020"}
                        />
                    </Link>
                    <Link to={'/'}>
                        <BasicCard
                        blogImg={img2}
                        caption={'Blog speaks about blah blah blah'} 
                        title={'Blog About Stuff'} 
                        date={"06-03-2020"}
                        />
                    </Link>
                    <Link to={'/'}>
                        <BasicCard
                        blogImg={img2}
                        caption={'Blog speaks about blah blah blah'} 
                        title={'Blog About Stuff'} 
                        date={"06-03-2020"}
                        />
                    </Link>
                    
                </div>
            </div>
        </Layout>

    )
}

export const query = graphql`
{
    allMarkdownRemark(limit: 10,
        sort: { order: DESC, fields: [frontmatter___date]}
        filter: {fileAbsolutePath: {regex: "/(blog)/"}}) {
      edges {
        node {
          frontmatter {
            caption
            title
            date(formatString: "MMMM DD, YYYY")
            img
          }
          fields {
            slug
          }
        }
      }
    }
  }`;