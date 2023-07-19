import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Inspiration from './pages/Inspiration';
import Navbar from './components/Navbar';
import CountdownPage from './CountdownPage'; // Import the CountdownPage component

// ... (Apollo Client configuration and other code)

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
            {/* Route for the countdown page */}
            <Route exact path='/countdown' component={CountdownPage} />
            {/* If no matching route is found, render this */}
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
