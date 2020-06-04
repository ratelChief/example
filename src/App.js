import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main, List, NoMatch } from 'pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

function App() {
  return (
    <main className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/list">
            <List />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
