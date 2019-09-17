import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

<Route path="/" exact component={Index} />
<Route path="/about/" component={About} />
<Route path="/users/" component={Users} />

const App = () => (
  <div>
    <Navigation />
  </div>
);

export default App;
