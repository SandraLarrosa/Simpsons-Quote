import React from 'react';
import CardQuote from './CardQuote';

const Quote = (props) => {
  const quotes = props.quote.map((quote) => {
    return (
      <CardQuote
        key={quote.character}
        name={quote.character}
        img={quote.image}
        quote={quote.quote}
        direction={quote.characterDirection}
      />
    );
  });
    const getQuote = (ev) => {
        props.getQuote(ev)
    }
  return (
    <main>
      <h1>The Simpsons Quote</h1>
      <button onClick={getQuote}>Give me more</button>
      <section>{quotes}</section>
    </main>
  );
};

export default Quote;
