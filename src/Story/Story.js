import React from 'react'
import Navbar from '../Landing/Navbar'
import Footer from '../Landing/Footer'
import Box from '../Features/Box'
import SideComp from '../Features/SideComp'
import RoadMap from '../Landing/GhostCards'
const Story = () => {
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
              <div className="bg-white feature-sec p-3">
                <h3 className=" text-center text-dark font-weight-bold text-decoration-underline">
                  Story
                </h3>
                <p className="text-dark feature-para mt-5">
                  After the end of the 100 year war, there was no winner. Great
                  warriors gathered on the battlefield to defeat their enemy. In
                  the moment of combat, a powerful spell shattered the
                  battlefield and lit the ground with crimson light. When the
                  light went out, only the wandering souls of the fallen were
                  left on the field. After 10 centuries, all souls began to move
                  towards the ancient ruins, what made them leave the
                  battlefield?
                </p>
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

export default Story
