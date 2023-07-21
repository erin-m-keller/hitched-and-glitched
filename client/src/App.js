import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Inspiration from './pages/Inspiration';
import Navbar from './components/Navbar';
import Venue from './pages/Venue';

const cache = new InMemoryCache();
async function persistApolloCache() {
  await persistCache({
    cache,                            
    storage: window.localStorage,   
  });
}
persistApolloCache();
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('jwtToken');
    operation.setContext({
      headers: { authorization: token ? `Bearer ${token}` : '' }
    });
  },
  uri: '/graphql',
  cache
});
client.clearStore();

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/inspiration' component={Inspiration} />
              <Route exact path='/venue' component={Venue}/>
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
          </>
        </Router>
      </ApolloProvider>
  );
}

export default App;
