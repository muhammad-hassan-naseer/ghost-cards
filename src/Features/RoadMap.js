import React from 'react'
import Navbar from '../Landing/Navbar'
import Footer from '../Landing/Footer'
import Box from './Box'
import SideComp from './SideComp'
import RoadMap from '../Landing/GhostCards'
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

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-8">
              <div className="bg-white feature-sec">
                <h3 className=" text-center text-dark font-weight-bold pt-2 text-decoration-underline">
                  Road Map
                </h3>
                <RoadMap />
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
