import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import Quote from './Quote';
import getDataFromApi from '../data/getDataApi';

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setQuote(data);
    });
  }, []);

  const printQuotes = () => {
    return <Quote quote={quote} getQuote={getQuote} />;
  };

  const getQuote = (ev) => {
    getDataFromApi().then((data) => {
      setQuote(data);
    });
  };

  return (
    <>
      <Switch />
      <Route exact path='/' component={Landing} />
      <Route exact path='/quote' render={printQuotes} />
      <Switch />
    </>
  );
}

export default App;
