import React, { Component } from 'react'

const Accordion = (props) => {
  var count = 0

  function invertSign(id) {
    if (count == 0) {
      const div = document.getElementById(id)
      div.classList.remove('fa-plus')
      div.classList.add('fa-minus')
      count = 1
    } else {
      const div = document.getElementById(id)
      div.classList.remove('fa-minus')
      div.classList.add('fa-plus')
      count = 0
    }
  }

  return (
    <div>
      <div>
        <div id="accordion" className="pt-3 text-white">
          <div className="card faq borderRadius">
            <div className="card-header bg-faq" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-dark font-weight-bold collapsed"
                  data-toggle="collapse"
                  data-target={'#' + props.id}
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  onClick={() => invertSign(props.newId)}
                >
                  {props.question}
                </button>
                <i
                  class="fas fa-plus float-right mt-2 fontColor"
                  id={props.newId}
                ></i>
              </h5>
            </div>
            <div
              id={props.id}
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
              style={{}}
            >
              <div className="card-body bg-white text-dark borderRadius fontColor">
                {props.answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
