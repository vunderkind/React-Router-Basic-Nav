import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

<Route exact path="/" exact component={Home} />
<Route path="/about/" component={About} />
<Route path="/contact/" component={Contact} />

const App = () => (
  <div>
    <Navigation />
  </div>
);

export default App;
