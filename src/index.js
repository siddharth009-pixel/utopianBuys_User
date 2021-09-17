import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import Auth0ProviderWithHistory from '../src/auth/auth0-provider-with-history';
import { BrowserRouter as Router } from 'react-router-dom'

window.store = store;

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//     <Auth0ProviderWithHistory>
//       <App />
//     </Auth0ProviderWithHistory>
//     </Router>
//   </Provider>
//   ,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
