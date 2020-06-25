import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieList from "./components/movielist/MovieList"
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {Login} from  "./components/Login/Login";
import {reducer} from "./components/movielist/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <MovieList style={{alignContent:"center"}} /></Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
