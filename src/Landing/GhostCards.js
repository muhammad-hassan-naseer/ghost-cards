import React from 'react'

const GhostCards = () => {
  return (
    <div className="bg" id="roadmap" className="mb-5 mt-5">
      <div className="timeline mt-5 pb-5">
        <div className="contain left">
          <h3 className="text-right">1</h3>
          <div className="content">
            <h4>First Step</h4>
            <small>
              {' '}
              Project GCS NFT card game on solana, with a wide range of deck
              configurations, available on PC and Phone. GhostCards is a fantasy
              card world with 1 vs 1 battles play and earn!!!
            </small>
          </div>
        </div>
        <div className="contain right">
          <h3 className="text-right text-md-left">2</h3>
          <div className="content">
            <h4>Second Step</h4>
            <small> For each fight you will have a chance to get NFT!!!</small>
          </div>
        </div>
        <div className="contain left">
          <h3 className="text-right">3</h3>

          <div className="content">
            <h4>Third Step</h4>
            <small>Summons your deck or sell unnecessary ones!!!</small>
          </div>
        </div>
        <div className="contain right">
          <h3 className="text-right text-md-left">4</h3>

          <div className="content">
            <h4>Fourth Step</h4>
            <small>
              We will reinvest investments from NFT Sales back into the project
              and create a price fund for tournaments!!!
            </small>
          </div>
        </div>
        <div className="contain left">
          <h3 className="text-right text-md-right">5</h3>

          <div className="content">
            <h4>Fifth Step</h4>
            <small>If you like strategy games, don’t pass by.</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GhostCards
