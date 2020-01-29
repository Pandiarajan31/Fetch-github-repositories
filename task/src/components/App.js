import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React, { Component } from 'react';
import Radium from 'radium';
// import history from 'browserHistory';
import createBrowserHistory from 'history/createBrowserHistory';

import { styles } from './styles/styles';
import Dashboard from './utility/dashboard';
import { Router, Route, Switch,Redirect } from 'react-router-dom';
import Login from "./utility/Login"
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    });
  }
});
const browserHistory = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <ApolloProvider client={ client } >
                <Router history={browserHistory}>
                <Switch>

        <div className='App'
          style={ styles.app }>
          <header className='App-header'
            style={ styles.header }>
            <h1>Fetch GitHub Details</h1>
          </header>
          <Route exact path='/' component={props => <Login {...props} />} />
          <Route path='/dashboard' component={props => (localStorage.getItem("access_token") !== null || "") ? <Dashboard {...props} />:<Redirect to='/' />} />

          <div style={ styles.space }></div>
        </div>
        </Switch>

        </Router>

      </ApolloProvider>
    );
  }
}

export default Radium(App);
