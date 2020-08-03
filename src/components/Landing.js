import React from 'react';
import '../stylesheets/landing.scss';

const Landing = (props) => {
  return (
    <>
      <main className='contain__landing'>
        <div className='gif__spiderCerdo'>
          <img
            src='https://media.giphy.com/media/zDvVndnadCjW8/giphy.gif'
            alt='spider-cerdo'
          ></img>
        </div>
        <div className='contain__landing__title'>
          <h1 className='title'>
            <span>The Simpsons</span>
            <span>Quotes</span>
          </h1>
          <button className='button-init'>Dame una cita</button>
        </div>
        <div className='gif__jesus'>
          <img
            src='https://media.giphy.com/media/k4q5SKM486TdK/giphy.gif'
            alt='gif jesus'
          ></img>
        </div>
      </main>
    </>
  );
};

export default Landing;
