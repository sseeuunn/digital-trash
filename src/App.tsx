import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Video from './pages/Video';

function App() {
  return (
    <div>
      <Router basename={'/'}>
        <Switch>
          <Route path="/video" component={Video} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
