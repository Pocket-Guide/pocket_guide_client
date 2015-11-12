import React from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './containers/App';
import Top from './containers/Top'
import AuthenticationPage from './containers/AuthenticationPage'
import rootReducer from './reducers';
import { Router, Route, RouteHandler, IndexRoute } from 'react-router';

const store = configureStore()
const history = createBrowserHistory();

const routes = (
  <Route name="app" path="/" component={ App }>
    <IndexRoute component={Top} />
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

