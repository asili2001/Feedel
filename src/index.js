import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home.page';
import './assets/css/main.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import Recipes from './pages/Recipes.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<HomePage />}/>
      <Route exact path='/recipes/:recipeId' element = {<Recipes />}/>
      <Route exact path='/recipes/:action/:payload' element = {<Recipes />}/>
      <Route exact path='/*' element = {<h1>Not Found</h1>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
);