import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import App from './App';

const routes = () => {
  return (
    <Router basename="/seller">
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default routes;