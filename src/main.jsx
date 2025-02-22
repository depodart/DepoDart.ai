import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import { BrowserRouter } from "react-router-dom"; // Import Link and Routes

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
