import React from 'react';
import '../stylesheets/App.scss';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import Quote from './Quote';

function App() {
  return (
    <>
      <Switch />
        <Route exact path='/' component={Landing} />
        <Route exact path='/quote' component={Quote} />
      <Switch />
    </>
  );
}

export default App;
