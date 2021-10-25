import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>这里是 Home
      <HashRouter>
        <Route path="/a">
          <Link to="/b">A</Link>
        </Route>
        <Route path="/b">
          <Link to="/a">B</Link>
        </Route>
        <Route path='/'>
          <br />
          <Link to="/a">to A</Link>
        </Route>
      </HashRouter>
    </div>
  )
};

export default Home;
