import React from "react"
import { getQuote } from "black-women-inspire"

function RightView() {
  return (
    <div className="row" id="viewRight">
      <div className="col-lg-6 text-quote"></div>
      <div className="col-lg-6 text-quote">
        <h1 className="lead" id="lead-right">
          {getQuote()}
        </h1>
      </div>
    </div>
  )
}
export default RightView
