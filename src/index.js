import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query'
import AppState from './context/AppState';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <AppState>
            <QueryClientProvider client={queryClient}>
              <CssBaseline />
              <RouterProvider router={router} />
            </QueryClientProvider>
          </AppState>
        </ThemeProvider>
      </React.StrictMode>
  );