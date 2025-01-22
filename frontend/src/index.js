// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './styles/index.css';

// Wrap the App component with BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
