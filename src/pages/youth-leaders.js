import React from 'react'
import { graphql } from 'gatsby'
import { Link, useIntl } from 'gatsby-plugin-intl'
import defaultPhoto from '../images/default-profile.png'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/homogenous/PreviewCompatibleImage'
import PageHeadText from '../components/homogenous/PageHeadText'

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "leader"}}}) {
    edges {
      node {
        excerpt
        fields{
          slug
        }
        frontmatter {
          leader
          bio
          image{
            publicURL
          }
        }
      }
    }
  }
}`

export default ({data}) => {
  const intl = useIntl();
  const cards = data.allMarkdownRemark.edges.map( ({ node} , i) => {
    const { excerpt, fields, } = node;
    const { leader, image, bio} = node.frontmatter
    const img = image && image.publicURL || defaultPhoto 
    const preBio = bio || excerpt
    let props = {image:img, leader, bio: preBio, linkTo:fields.slug }
    return (
        <YouthCard {...props} />
    )
  })
    return (
        <Layout bgGradientColor='youth'>
        <div className=" sm:mt-0 sm:pl-16 sm:pt-10 sm:mb-8 pt-32  " >
                <PageHeadText text={intl.formatMessage({id:"youthHeadText"})} />
            </div>
        <div className="flex flex-wrap w-screen justify-center sm:mx-auto" >
          {cards}
        </div>
          
        </Layout>
    )
}

const YouthCard = (props) => {
  const {image, leader, bio, linkTo } = props;
  const imageClass =" shadow-2xl  relative object-center object-cover overflow-hidden rounded-full w-56 h-56  mx-auto"
  const cardImage = image 
  return (
    <div className="w-full lg:w-6/12 mb-12 mt-16 px-4">
      <div className="sm:px-6">
            <PreviewCompatibleImage image={cardImage} imageStyle={imageClass} />
            <div className="-mt-24 rounded-lg sm:p-10 pt-20 p-2 bg-gray-100 shadow-2xl">
              <div className="pt-6 mt-10 text-center">
                <h5 className="text-2xl font-extrabold">
                    {leader}
                </h5>
                <p className="mt-6 leading-7 font-hairline text-lg text-gray-900 mx-2 text-left ">
                    {bio}
                </p>
                <div className="font-hairline hover:text-yellow-400 text-yellow-700 sm:text-lg text-sm py-10 text-center">
                  <Link to={linkTo}>
                    Read More About {leader.split(" ")[0]}
                  </Link>
                </div>
              </div>
          </div>
      </div>
  </div>
  )
}


