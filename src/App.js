import React, { Component } from "react";
import logo from "./logo.svg";
import MainRouter from "./routers/MainRouter";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import AppBarContainer from "./components/AppBarComponent";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "../src/redux";
import { applyMiddleware, createStore } from "redux";
import { InMemoryCache } from "apollo-cache-inmemory";
import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCH_WBixLSKCyG6NySLVZR6gpQ5Ftwapyc",
  authDomain: "enlazona-1553021909920.firebaseapp.com",
  databaseURL: "https://enlazona-1553021909920.firebaseio.com",
  projectId: "enlazona-1553021909920",
  storageBucket: "enlazona-1553021909920.appspot.com",
  messagingSenderId: "112608092075",
  appId: "1:112608092075:web:6d7a66a2c28143f0"
};

const client = new ApolloClient({
  uri: "http://www.enlazonadmin.gq/api/"
});

const store = createStore(rootReducer);

class App extends Component {
  componentDidMount = () => {
    firebase.initializeApp(firebaseConfig);
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <div style={{ paddingTop: 50 }}>
            <MainRouter />
          </div>
        </ReduxProvider>
      </ApolloProvider>
    );
  }
}

export default App;
