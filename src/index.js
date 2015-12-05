import React from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './containers/App';
import Top from './containers/Top'
import AuthenticationPage from './containers/AuthenticationPage'
import rootReducer from './reducers';
import { Router, Route, RouteHandler, IndexRoute } from 'react-router';
import auth from './auth'

const store = configureStore()
const history = createBrowserHistory();

const routes = (
  <Route component={ App }>
    <Route path="/" component={Top} />
    <Route path="/sign_in" component={ AuthenticationPage } />
    <Route path="/sign_up" component={ AuthenticationPage } />
  </Route>
);

React.render(
  <Provider store={store}>
  {() =>
     <Router history={ history }>{ routes }</Router>
  }
  </Provider>,
  document.getElementById('root')
);

