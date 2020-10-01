import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user:userReducer,
 
})

const store=createStore(rootReducer,{
  user:'Volkan'
},
) 

console.log(store.getState())


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

