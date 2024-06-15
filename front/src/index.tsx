import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/index';
import { composeWithDevTools } from '@redux-devtools/extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";
import { createStore } from 'redux';
import persistedReducer from './store/index'


// const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const store = createStore(persistedReducer, composeWithDevTools()); // 기존 store 내보내기
const persistor = persistStore(store);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>   
  </React.StrictMode>
);

