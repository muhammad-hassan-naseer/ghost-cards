import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light container">
        <div className="navbar-collapse collapse margin " id="navbarCollapse">
          <div className="navbar-nav"></div>
        </div>
      </nav>
      <div className="border-nav">
        <nav class="navbar navbar-expand-lg container">
          <Link to="/" className="navbar-brand">
            <img
              src="https://ghostcardsofsolana.com/wp-content/uploads/2021/10/cropped-logo3-180x70.png"
              className="world-eggs-club-logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active ml-0 ml-md-4">
                <Link
                  class="nav-link text-white  title navItemSize"
                  to="/story"
                >
                  STORY <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item ml-0 ml-md-4">
                <Link
                  class="nav-link text-white  title navItemSize"
                  to="/features"
                >
                  FEATURE
                </Link>
              </li>
              <li class="nav-item ml-0 ml-md-4">
                <Link
                  class="nav-link text-white  title navItemSize"
                  to="/road-map"
                >
                  ROADMAP
                </Link>
              </li>
              <li class="nav-item ml-0 ml-md-4">
                <Link class="nav-link text-white  title navItemSize" to="/faq">
                  FAQ
                </Link>
              </li>
              <li class="nav-item ml-0 ml-md-4">
                <button type="button" className="btn btn-customize px-4 py-2">
                  MINT
                </button>
              </li>
              <li class="nav-item ml-0 ml-md-4 my-auto">
                <a href="https://twitter.com/GCS_NFT">
                  {' '}
                  <i class="fab fa-twitter text-warning"></i>
                </a>
              </li>
              <li class="nav-item ml-0 ml-md-4 my-auto">
                <a href="https://discord.gg/v9VuEq9xfz">
                  {' '}
                  <i class="fab fa-discord text-warning"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
