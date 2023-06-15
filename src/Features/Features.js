import React from 'react'
import Navbar from '../Landing/Navbar'
import Footer from '../Landing/Footer'
import FeatureBox from './FeatureBox'
import Box from './Box'
import SideComp from './SideComp'
const Features = () => {
  const data = [
    {
      head: 'Recent Posts',
      para: 'Hello world!',
    },
    {
      head: 'Recent Comments',
      para: 'A WordPress Commenter on Hello world!',
    },
    {
      head: 'Archives',
      para: 'October 2021  ',
    },
    {
      head: 'Categories',
      para: 'Uncategorized',
    },
  ]
  var DataArray = data.map((section) => {
    return <Box head={section.head} para={section.para} />
  })
  const dataFeature = [
    {
      head: 'Limited edition hero',
      img: '/f1.jpeg',
    },
    {
      head: 'Unique design of cards',
      img: '/f2.jpeg',
    },
    {
      head: 'Voting system of project choice',
      img: '/f3.jpeg',
    },
  ]
  var dataFeatureArray = dataFeature.map((section) => {
    return <FeatureBox head={section.head} img={section.img} />
  })
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-8">
              <div className="bg-white feature-sec">
                <div className="grey-color p-2  m-auto height">
                  <h3 className=" text-center font-weight-bold text-decoration-underline">
                    Features
                  </h3>
                  <p className="text-justify mt-5 text-dark feature-para">
                    Not only does your purchase get you the coolest ghost card
                    in the NFT world, but it comes with an exclusive membership
                    to our community. Just look at the features that you'll
                    enjoy -
                  </p>
                  <div className="row mt-5">{dataFeatureArray}</div>
                </div>
              </div>
            </div>
            <SideComp />
          </div>
          {DataArray}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Features
