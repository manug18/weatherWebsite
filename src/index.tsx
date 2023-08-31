import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RoutesWrapper } from './router/RouteWrapper';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './styles/Theme';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import pkgInfo from '../package.json';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 300000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
