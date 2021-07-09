import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store, persistor} from './Store/store'
import {Provider} from 'react-redux'
import {persistGate} from 'redux-persist/es/integration/react';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <persistGate loading={null} persistor={persistor}>
  <App />
  </persistGate>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
