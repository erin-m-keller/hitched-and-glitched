// Import the necessary dependencies and components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Inspiration from './pages/Inspiration';
import Navbar from './components/Navbar';
import Countdown from './pages/Countdown'; 


// Create a new in-memory cache for Apollo Client
const cache = new InMemoryCache();

// Configure the Apollo Client
const client = new ApolloClient({
  request: operation => {
    // Retrieve JWT token from localStorage
    const token = localStorage.getItem('jwtToken');
    // Set the "authorization" header for GraphQL requests
    operation.setContext({
      headers: { authorization: token ? `Bearer ${token}` : '' }
    });
  },
  uri: '/graphql', // URI for the GraphQL server
  cache // Use the created in-memory cache
});

// Clear the Apollo Client store
client.clearStore();

function App() {
  return (
    // Wrap the entire application with ApolloProvider to enable Apollo Client
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* Render the Navbar component for navigation */}
          <Navbar />
          {/* Define routes for the application using React Router */}
          <Switch>
            {/* Route for the Home page */}
            <Route exact path='/' component={Home} />
            {/* Route for the Dashboard page */}
            <Route exact path='/dashboard' component={Dashboard} />
            {/* Route for the Inspiration page */}
            <Route exact path='/inspiration' component={Inspiration} />
            {/* Route for countdown page*/}
            <Route exact path='/countdown' component={Countdown} />
            {/* If no matching route is found, render this */}
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
