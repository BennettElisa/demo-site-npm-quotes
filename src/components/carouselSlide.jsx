import React from "react"
import { getQuote } from "black-women-inspire"


function splitQuoteAuthor(){

  let quote = getQuote()
  let quoteInfo = quote.split('-')
  return {
    quote: quoteInfo[0],
    author: quoteInfo[1]
  }
}



function CarouselSlide(){

  let quoteAndAuthor = splitQuoteAuthor()
  console.log("quote", quoteAndAuthor.quote)
  console.log("author", quoteAndAuthor.author)

    return (


        <section className="color-section" id="carosel-section">

        <div id="testimonal-carousel" className="carousel slide" data-ride="false">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <h2 className="quote-text slide">{quoteAndAuthor.quote}</h2>
              <h3>{`-${quoteAndAuthor.author}`}</h3>
            </div>

              <div className="carousel-item">
              {splitQuoteAuthor()}
              <h2 className="quote-text slide">{quoteAndAuthor.quote}</h2>
              <h3>{`-${quoteAndAuthor.author}`}</h3>
             </div>

             <div className="carousel-item">
             {splitQuoteAuthor()}
             <h2 className="quote-text slide">{quoteAndAuthor.quote}</h2>
              <h3>{`-${quoteAndAuthor.author}`}</h3>
             </div>

             <div className="carousel-item">
             {splitQuoteAuthor()}
             <h2 className="quote-text slide">{quoteAndAuthor.quote}</h2>
              <h3>{`-${quoteAndAuthor.author}`}</h3>
             </div>



          </div>
          <a className="carousel-control-prev" href="#testimonal-carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonal-carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </section>
    )

}

export default CarouselSlide;