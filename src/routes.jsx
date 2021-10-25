import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import App from './App';
import { isInIcestark, getBasename } from '@ice/stark-app';

const routes = () => {
  return (
    // Added by [icestark]: 匹配正确的路由
    <Router basename={ isInIcestark() ? getBasename() : '/'}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default routes;