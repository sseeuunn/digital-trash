import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router basename={'/'}>
        <div>digital-trash</div>
        <Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
