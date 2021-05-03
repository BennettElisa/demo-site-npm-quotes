import React from "react"
import { getArrayOfQuotes } from "black-women-inspire"

function CarouselSlide() {
  let quotesArray = getArrayOfQuotes()

  return (
    <section className="color-section" id="carosel-section">
      <div
        id="testimonal-carousel"
        className="carousel slide"
        data-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2 className="quote-text slide">{quotesArray[5].quote}</h2>
            <h3 className="author-name-slide">{`-${quotesArray[5].author}`}</h3>
          </div>

          <div className="carousel-item">
            <h2 className="quote-text slide">{quotesArray[1].quote}</h2>
            <h3 className="author-name-slide">{`-${quotesArray[1].author}`}</h3>
          </div>

          <div className="carousel-item">
            <h2 className="quote-text slide">{quotesArray[2].quote}</h2>
            <h3 className="author-name-slide">{`-${quotesArray[2].author}`}</h3>
          </div>

          <div className="carousel-item">
            <h2 className="quote-text slide">{quotesArray[3].quote}</h2>
            <h3 className="author-name-slide">{`-${quotesArray[3].author}`}</h3>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#testimonal-carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#testimonal-carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  )
}

export default CarouselSlide
