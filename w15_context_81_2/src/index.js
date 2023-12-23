import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_81 from './App_81';
import { BlogContextProvider_81 } from './BlogContext_81';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_81>
      <App_81 />
    </BlogContextProvider_81>
  </React.StrictMode>
);
