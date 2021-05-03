import React from "react"

function Header() {
  return (
    <section className="color-section" id="title">
      <div className="container-fluid background ">
        {/* <!-- Nav Bar --> */}

        <nav className="navbar navbar-expand-lg navbar-dark">
          <a
            className="navbar-brand text-dark"
            href="https://www.npmjs.com/package/black-women-inspire"
          >
            {" "}
            #INSPIRE
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#viewLeft">
                  ViewLeft
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#viewRight">
                  ViewRight
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#carosel-section">
                  Carousel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#cta">
                  CallToAction
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#footer">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Title --> */}

        <div className="row" id="row-header">
          <div className="col-lg-6">
            <img
              className="main-img"
              src="/images/main-imageResized.png"
              width="600px"
              height="550px"
              alt="women flexing muscle"
            />
          </div>
          <div className="col-lg-6 text-title">
            <h1 className="big-heading">
              QUOTES BY BLACK WOMEN TO <span>INSPIRE</span>.
            </h1>
            <a
              href="https://www.npmjs.com/package/black-women-inspire"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-dark btn-lg download-button"
              >
                📦 Download
              </button>
            </a>
            <a
              href="https://github.com/BennettElisa/black-women-inspire#readme"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn btn-light btn-lg download-button"
                type="button"
              >
                {" "}
                📜 GitHub Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
