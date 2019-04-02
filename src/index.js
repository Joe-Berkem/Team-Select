import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/reset.css';
import 'normalize.css';
import './styles/css/main.css';
import App from './screens/app/App';
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import initial from "./data/initial";
import reducers from "./data/reducers";
import persistState from "redux-localstorage";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initial,
    composeEnhancers(persistState())
);

ReactDOM.render(
    <Provider store={ store }>
       
        <App />
        
    </Provider>,
    document.getElementById("root")
);