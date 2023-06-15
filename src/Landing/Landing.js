import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import GhostCards from './GhostCards'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <div id="bg-img transparent-dark">
          <img
            src="https://ghostcardsofsolana.com/wp-content/uploads/2021/10/723.png"
            className="img-size"
          />
        </div>
        <div className=" mt-5 mb-5">
          <h1 className="text-center">GHOST CARDS OF SOLANA</h1>
          <p className="text-center">
            After the end of the 100 year war, there was no winner. Great
            warriros gathered on the battlefield to defeattheir enemy. In the
            moment of combat, a powerful spell shattered the battlefield and lit
            the ground with crimson light. When the light went out, only the
            wandering souls of the fallen were left on the field.
          </p>
          <p className="text-center">
            Now, after 10 centuries, all souls began to move towards theancient
            ruins, what made them leave the battlefield?
          </p>
        </div>
        <Carousel />
        <div className="bg-white p-4"></div>
        <div className="p-3">
          <div className="row mt-5">
            <div className="col-md-7">
              <h2 className="mt-0">GHOST CARDS</h2>
              <p>
                Project GCS NFT card game on solana, with a wide range of deck
                configurations, available on PC and Mobile. GhostCards is a
                fantasy card world with battles play and earn!!!
              </p>
              <p>For each fight you will have a chance to get NFT!!!</p>
              <p>Summons your deck or sell unnecessary ones!!!</p>
              <p>
                We will reinvest investments from NFT Sales back into the
                project and create a price fund for tournaments!!!
              </p>
              <p>If you like strategy games, don’t pass by.</p>
            </div>
            <div className="col-md-5">
              <div class="frame"></div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-white p-3"></div>
          <h2 className="text-center">GHOST CARDS</h2>
          <GhostCards />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Landing
