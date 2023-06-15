import React from 'react'

const FeatureBox = (props) => {
  return (
    <>
      <div className="col-lg-4 text-center">
        <div className="p-2 rounded feature-box">
          <small className="font-weight-bold">{props.head}</small>
          <img
            src={process.env.PUBLIC_URL + props.img}
            className="feature-size mt-3"
          />
        </div>
      </div>
    </>
  )
}

export default FeatureBox
