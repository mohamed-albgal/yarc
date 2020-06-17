
import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link} from 'gatsby'
import imgfeat from '../assets/stock/hangingLights.jpg'
import img2 from '../assets/stock/covid_19_thanks.jpg'

export default ({data}) => {
    const nodes = data.allMarkdownRemark.edges;
    const featureData = nodes[0].node;
    const blogNodes = nodes.slice(1);
    
    const allBlogs = blogNodes.map(({ node }) => (
        <Link to={node.fields.slug}>
            <BasicCard
            blogImg={img2}
            caption={node.frontmatter.caption} 
            title={node.frontmatter.title} 
            date={node.frontmatter.date}
            />
        </Link>
    ))

    return (
        <Layout bgGradientColor={"purple-bottom"}>
            <div className="mt-0 sm:pt-10 pt-56 mb-20">
                <BlogIntro title="Our Voice" />
            </div>
            <div className="container mx-auto ">
                <Link to={featureData.fields.slug}>
                    <BigCard blogImg={imgfeat}
                    title={featureData.frontmatter.title} 
                    caption={featureData.frontmatter.caption}
                    date={featureData.frontmatter.date}
                    />
                </Link>
                <div className=" sm:flex flex-wrap justify-start">
                    {allBlogs.length && allBlogs}
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
        <div className="w-11/12 sm:max-w-md rounded-md bg-gray-300 overflow-hidden shadow-2xl sm:mx-4 sm:my-8 my-8 mx-auto">
            <div className=" ">
                <img className="object-cover" src={blogImg} alt="something" />
            </div>
            <div className="px-6 py-4">
                <div className=" font-hairline bold sm:text-5xl mb-2 sm:hover:text-indigo-800 "> {title}
                </div>
                <p className="text-xs text-gray-500 leading-tight">{date}</p>
                <p className="text-gray-700 text-2xl">
                Notice that you’re able to query with the $slug value from your context as an argument, which ensures that you’re returning only the data that matches that specific page. As a result, you can provide the title and html from the matching markdownRemark record to your component. The context values are also available as the pageContext prop in the template component itself.
                </p>
                x
            </div>
        </div>
    )
}

const BlogIntro = (props) => {
    return (
        <div className=" transform container mx-auto flex flex-col flex-no-wrap">
            <div className="text-black font-extrabold tracking-wide sm:text-8xl text-6xl shadow-2xl">{props.title}
                <span className="block h-1 -mt-4 bg-yellow-600 self-stretch"></span>
            </div>
        </div>
    )
}