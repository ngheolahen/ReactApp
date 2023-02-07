import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min.js';
import 'react-js-dropdavn/dist/index.css';
import App from './App';
import Login from './components/Login/Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/allReducers";
const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
reportWebVitals(); 