import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from './styles/styles';
import Dashboard from './utility/dashboard';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 979528ad081038deb2a17801868e0389ae017f3b`
      }
    });
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client } >
        <div className='App'
          style={ styles.app }>
          <header className='App-header'
            style={ styles.header }>
            <h1>Fetch GitHub Details</h1>
          </header>
          <Dashboard />
          <div style={ styles.space }></div>
        </div>
      </ApolloProvider>
    );
  }
}

export default Radium(App);
