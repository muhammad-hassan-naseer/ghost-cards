import React from 'react'

const SideComp = () => {
  return (
    <>
      <div className="col-md-4 mt-5 mt-md-0">
        <p className="grey-color">Small</p>

        <form className="form-inline my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-primary btn-search my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  )
}

export default SideComp
