import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , compose} from 'redux';
import rootReducer from './reducers/index';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
