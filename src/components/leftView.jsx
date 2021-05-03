import React from "react"
import { getQuote } from "black-women-inspire"


function LeftView(){

    return (

<section className="color-selection" id="yellowLeftV">

    <div className="row" id="viewLeft">
      <div className="col-lg-6 text-quote">
        <h1 className="lead" id="lead-left">{getQuote()}</h1>
      </div>
      <div className="col-lg-6 text-quote"></div>
    </div>

</section>

    )
}
export default LeftView;