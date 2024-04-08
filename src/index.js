import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);


root.render(
  <Provider store = {store}>
    <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
          <ToastContainer/>
        </PersistGate>
    </React.StrictMode>
</Provider>
);

