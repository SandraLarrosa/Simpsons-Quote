import React from 'react';
import '../stylesheets/cardQuote.scss';

const CardQuote = (props) => {
  console.log(props);
  const direction = props.direction === 'Left' ? 'left' : 'right';
  return (
    <>
      <article className={`card__quote ${direction}`}>
        <div className="card__content">
          <h3 className='card__content__name'>{props.name}</h3>
          <p className='card__content__quote'>{`"${props.quote}"`}</p>
        </div>
        <img
          className='card__img'
          src={props.img}
          alt={`Foto de ${props.name}`}
        ></img>
      </article>
    </>
  );
};

export default CardQuote;
