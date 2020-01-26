import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import RepoList from './repoList';
import renderer from 'react-test-renderer'
import { ApolloProvider } from 'react-apollo';

// renders correctly when there is props

it('renders correctly when there is props', () => {
    const toggleState = "starred";
    const inputSearch = "test";
    const token = jest.fn(() => "208a70fda62f543564616b2aa57b8bcc9b40cf98");

    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',
        cache: new InMemoryCache(),
        request: operation => {
          operation.setContext({
            headers: {
              authorization: `Bearer ${token}`
            }
          });
        }
      });
    
    const tree = renderer.create(
        <ApolloProvider client={ client } >

    <RepoList toggleState={toggleState} inputSearch={inputSearch} changeToggle={()=>console.log("done")}  />
    </ApolloProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

