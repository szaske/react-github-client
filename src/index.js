import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
//1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Creating the httpLink that will connect to our server on port 4000
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

// instantiating an Apollo client, by passing the link
// and the cache
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

ReactDOM.render(   
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider> 
    , document.getElementById('root')
);
registerServiceWorker();