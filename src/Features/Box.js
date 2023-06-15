import React from 'react'

const Box = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <div className="text-dark ">
              <h4 className="grey-color">{props.head}</h4>
              <label className="text-primary">{props.para}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box
