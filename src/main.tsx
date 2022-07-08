import React from 'react';
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import App from './App'
import { TaskContextProvider } from './contexts/TasksContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TaskContextProvider>
        <Toaster position="top-center" />
        <App />
      </TaskContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
