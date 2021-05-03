import React from "react"

function Features() {
  return (
    //   <!-- Features -->

    <div className="features">
      <section className="white-section" id="features">
        <div className="row">
          <div className="col-lg-4">
            <i className="icon fas fa-plus"></i>
            <h3>Easy to use.</h3>
            <p className="phrases">
              Selection of 65 insipirational quotes from black women.
            </p>
          </div>
          <div className="col-lg-4">
            <i className="icon fas fa-quote-right"></i>
            <h3>Unique Quotes</h3>
            <p className="phrases">
              Generate different quotes each time webpage reloads or function is
              invoked.
            </p>
          </div>
          <div className="col-lg-4">
            <i className="icon far fa-arrow-alt-circle-down"></i>
            <h3>Npm Package</h3>
            <p className="phrases">
              An npm package with easy API to generate quotes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
