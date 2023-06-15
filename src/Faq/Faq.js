import React from 'react'
import Navbar from '../Landing/Navbar'
import Footer from '../Landing/Footer'
import Box from '../Features/Box'
import SideComp from '../Features/SideComp'
import Accordion from './Acordian'
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
  const session = [
    {
      newId: 'A',
      id: 'one',
      question: 'How do I purchase a Ghost Cards??',
      answer: 'Website to go live shortly!',
    },
    {
      newId: 'B',
      id: 'two',
      question: ' How much does it cost to mint a Ghost Cards?',
      answer: '3 SOL',
    },
    {
      newId: 'C',
      id: 'three',
      question: ' How many Ghost Cards will be minted?',
      answer: '9750 Ghosts will be available to mint ',
    },
    {
      newId: 'D',
      id: 'four',
      question: 'What will you do with 250 Ghosts?',
      answer:
        '50 will pre-sell for whitelist before the main placement, and 200 will be in the giveaway',
    },
    {
      newId: 'E',
      id: 'five',
      question: 'How many Ghost Cards can you buy at one time?',
      answer: 'You can buy anywhere from 1 to 10 Ghost per transaction.',
    },
    {
      newId: 'F',
      id: 'six',
      question: "Will I be able to see what Ghost Cards I'm minting?",
      answer:
        'No the minting is random, when you mint a Ghost Cards, it goes directly to your wallet, and the picture and traits of all Ghosts will be revealed upon mint',
    },
    {
      newId: 'G',
      id: 'seven',
      question: 'When will the drop start?',
      answer:
        "Public mint will be starting SOON, we'll be updating you on a set date as soon as we have it. But don't blink or you might just miss it...",
    },
  ]
  var questionArray = session.map((section) => {
    return (
      <Accordion
        question={section.question}
        answer={section.answer}
        id={section.id}
        newId={section.newId}
      />
    )
  })
  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-8">
              <div className="bg-white p-3 feature-sec">
                <h3 className=" text-center text-dark font-weight-bold text-decoration-underline">
                  Faq's
                </h3>
                {questionArray}
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
