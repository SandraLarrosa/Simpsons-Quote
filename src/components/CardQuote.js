import React from 'react';


const CardQuote = props => {
    console.log(props);
    const direction = props.direction === 'Left' ? 'left' : 'right';
    return (
        <>
            <article className={direction}>
                <h3>{props.name}</h3>
                <p>{props.quote}</p>
                <img src={props.img} alt={`Foto de ${props.name}`}></img>
            </article>
        </>
    );
};



export default CardQuote;