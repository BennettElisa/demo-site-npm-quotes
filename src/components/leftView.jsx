import React from "react"
import { getQuote } from "black-women-inspire"

function splitString() {
  let quotesObj = getQuote()
  quotesObj = quotesObj.split("-")

  return {
    quote: quotesObj[0],
    author: quotesObj[1]
  }
}

function LeftView() {
  let quotesAndAuthor = splitString()
  console.log(quotesAndAuthor)
  return (
    <section className="color-selection" id="yellowLeftV">
      <div className="row" id="viewLeft">
        <div className="col-lg-6 text-quote">
          <h1 className="lead" id="lead-left">
            {quotesAndAuthor.quote}
          </h1>
          <h2>{`-${quotesAndAuthor.author}`}</h2>
        </div>
        <div className="col-lg-6 text-quote"></div>
      </div>
    </section>
  )
}
export default LeftView
