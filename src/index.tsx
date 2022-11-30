import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from './hooks/ApiProvider';
import { ApiService } from './services/api-service/implementations/ApiService';

const api = new ApiService();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider implementation={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
