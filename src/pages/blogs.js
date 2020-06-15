
import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link} from 'gatsby'
import imgfeat from '../assets/img/hangingLights.jpg'
import img0 from '../assets/img/graffiti_create.jpg'
import img1 from '../assets/img/youth_sunset.jpg'
import img2 from '../assets/img/covid_19_thanks.jpg'

export default ({data}) => {
    const nodes = data.allMarkdownRemark.edges;
    const featureData = nodes[0].node;
    const blogNodes = nodes.slice(1);
    
    // const allBlogs = blogNodes.map(({node, i}) => (
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
        <Layout>
            <div className="mt-0 sm:pt-10 pt-56 mb-20">
                <BlogIntro title="Our Voices" />
            </div>
            <div className="container mx-auto bg-gray-200">
                <Link to={featureData.fields.slug}>
                    <BigCard blogImg={imgfeat}
                    title={featureData.frontmatter.title} 
                    caption={featureData.frontmatter.caption}
                    date={featureData.frontmatter.date}
                    />
                </Link>
                <div className=" sm:flex flex-wrap justify-start">
                    {/**allBlogs.length && allBlogs*/}
                    <Link to={nodes[1].node.fields.slug}>
                        <BasicCard 
                        blogImg={img0}
                        caption={nodes[1].node.frontmatter.caption} 
                        title={nodes[1].node.frontmatter.title} 
                        date={nodes[1].node.frontmatter.date}
                        />
                    </Link>
                    <Link to={nodes[2].node.fields.slug}>
                        <BasicCard 
                        blogImg={img1}
                        caption={nodes[2].node.frontmatter.caption} 
                        title={nodes[2].node.frontmatter.title} 
                        date={nodes[2].node.frontmatter.date}
                        />
                    </Link>
                    <Link to={nodes[3].node.fields.slug}>
                        <BasicCard 
                        blogImg={img2}
                        caption={nodes[3].node.frontmatter.caption} 
                        title={nodes[3].node.frontmatter.title} 
                        date={nodes[3].node.frontmatter.date}
                        />
                    </Link>
                </div>
            </div>
        </Layout>

    )
}

export const query = graphql`
{
    allMarkdownRemark(limit: 4, filter: {frontmatter: {type: {eq: "blog"}}}) {
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
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
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
                    <p className="text-gray-700 sm:text-3xl text-lg max-h-full">
                    Notice that you’re able to query with the $slug value from your context as an argument, which ensures that you’re returning only the data that matches that specific page. As a result, you can provide the title and html from the matching markdownRemark record to your component. The context values are also available as the pageContext prop in the template component itself.
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
                <div className=" font-hairline bold sm:text-5xl mb-2"> {title}
                </div>
                <p className="text-gray-700 text-2xl">
                Notice that you’re able to query with the $slug value from your context as an argument, which ensures that you’re returning only the data that matches that specific page. As a result, you can provide the title and html from the matching markdownRemark record to your component. The context values are also available as the pageContext prop in the template component itself.
                </p>
                <p className="text-xs text-gray-500 leading-tight">{date}</p>
            </div>
        </div>
    )
}

const BlogIntro = (props) => {
    return (
        <div className=" transform container mx-auto flex flex-col flex-no-wrap">
            <div className="text-gray-900 font-extrabold tracking-wide text-8xl shadow-2xl">{props.title}
                <span className="block h-1 -mt-4 bg-blue-900 self-stretch"></span>
            </div>
        </div>
    )
}