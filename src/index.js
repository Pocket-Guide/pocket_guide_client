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

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn()){
    replaceState({ nextPathname: nextState.location.pathname }, 'sign_up')
  }
}

const routes = (
  <Route name="app" path="/" component={ App }>
    <IndexRoute component={Top} onEnter={ requireAuth } />
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

