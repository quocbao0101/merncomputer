import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reducer from './root-reducer';
import rootSaga from './root-sagas';
import { createStore, applyMiddleware } from 'redux';
import { SnackbarProvider, useSnackbar } from 'notistack'
import { SnackbarUtils } from './components/Snackbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
root.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={4}>
      <SnackbarUtils />
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>
);

reportWebVitals();
