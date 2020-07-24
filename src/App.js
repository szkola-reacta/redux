import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./styles.css";

import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import Users from "./users/containers/Users";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <CounterContainer />
          <Posts />
          <Users />
        </Provider>
      </div>
    );
  }
}
