import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query'
import AppState from './context/AppState';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <AppState>
          <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AppState>
      </React.StrictMode>
  );