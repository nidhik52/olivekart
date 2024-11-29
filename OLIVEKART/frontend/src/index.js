import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";


import productReducer, { productsFetch } from "./features/productSlice";
import cartReducer, { getTotals } from "./features/cartSlice";
import { productsApi } from './features/productsApi';


const store = configureStore({
  reducer:{
    products: productReducer,
    cart: cartReducer, 
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);






















//The code below is from Charles' tutorial
//ReactDOM. render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
  //document.getElementById('root')
//);



