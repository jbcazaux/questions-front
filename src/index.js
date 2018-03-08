import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Hello from './hello';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: 'http://localhost:4000/graphql'})
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Hello name="jbc"/>
    </ApolloProvider>,
    document.getElementById('root'));
