import React from "react"
import { splitString } from "./leftView"

function RightView() {
  let quotesAndAuthor = splitString()

  return (
    <div className="row" id="viewRight">
      <div className="col-lg-6 text-quote"></div>
      <div className="col-lg-6 text-quote">
        <h1 className="lead" id="lead-right">
          {quotesAndAuthor.quote}
        </h1>
        <h2>{`-${quotesAndAuthor.author}`}</h2>
      </div>
    </div>
  )
}
export default RightView
