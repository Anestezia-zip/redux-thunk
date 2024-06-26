import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing/router'
import { Provider } from 'react-redux';
import store from './redux/storage.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!); // знак оклику означає, що цей елемент не буде null
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);

reportWebVitals();
