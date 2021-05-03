# Demo Website for npm package

This is a demo website to showcase how my npm package "black-women-inspire" can be used to display the quotes included in the package. Demo website was built using create react app. #InspireDemo

![npm](https://img.shields.io/npm/v/black-women-inspire?style=for-the-badge)
Download the package here ![package](https://www.npmjs.com/package/black-women-inspire)

# 65 Inspiring Quotes from Black Women

> A collection of 65 inspiring quotes from Black women. Quotes range from civil-rights icons to writers, singers, poets, politicians, lawyers and influencers. All of these quotes will inspire you and help you seize each day with confidence, courage and self-love.

# Install using npm

```
npm install black-women-inspire
```

# Usage

```
const blackWomenInspire = require('black-women-inspire')

blackWomenInspire.getQuote();
// =>  "Success is liking yourself, liking what you do, and liking how you do it." -  Maya Angelou

blackWomenInspire.getQuote()
// => "Am I good enough? Yes I am." - Michelle Obama

blackWomenInspire.getArrayOfQuotes()
// => [
        {
            quote: 'Success is liking yourself, liking what you do, and liking how you do it.',
            author: 'Maya Angelou'
        },
        {
            quote: 'You will be wounded many times in your life. You’ll make mistakes. Some people will call them failures but I have learned that failure is really God’s way of saying, “Excuse me, you’re moving in the wrong direction.” It’s just an experience, just an experience.',
            author: 'Oprah Winfrey'
        } .... ]

```

# API

- `.getQuote()`

  Type: `Function`

  Random quote with author name.

- `.getArrayOfQuotes()`

  Type: `Function`

  Returns an array with all the quotes. Each quote is an object with two properties - quote and author.

# License

MIT © Elisa Bennett
