import React, { Component } from 'react';
import logo from './logo.svg';
import MainRouter from './routers/MainRouter';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import AppBarContainer from './components/AppBarComponent';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider as ReduxProvider } from 'react-redux';
import rootReducer from '../src/redux';
import { applyMiddleware, createStore } from 'redux';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://0.0.0.0:5000/api',
});

const store = createStore(rootReducer);

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <div style={{paddingTop: 50}}>
            <MainRouter />
          </div>
        </ReduxProvider>
      </ApolloProvider>
    );
  }
}

export default App;
