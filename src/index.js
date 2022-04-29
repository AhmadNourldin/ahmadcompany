import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Import the scss File from the src 
//It is the base css fill of all the components
import './css/style.scss';
//Provider give the components inside of it to use redux
import { Provider } from 'react-redux';
//Importing the Store from the store folder
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
//The base function that return into the root div in the index.html file
root.render(
  //Add The provider 
  <Provider store={store}>
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </Provider>
);
