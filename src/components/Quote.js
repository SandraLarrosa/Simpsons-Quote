import React from 'react';
import CardQuote from './CardQuote';
import { Link } from 'react-router-dom';
import '../stylesheets/quote.scss';

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
    props.getQuote(ev);
  };
  return (
    <main className='contain__quote'>
      <div className='contain__title'>
        <Link to='/'>
          <h1 className='contain__title__title'>The Simpsons Quote</h1>
        </Link>
        <button onClick={getQuote} className='contain__title__button'>
          Give me more
        </button>
      </div>
      <section className='contain__cards'>{quotes}</section>
    </main>
  );
};

export default Quote;
