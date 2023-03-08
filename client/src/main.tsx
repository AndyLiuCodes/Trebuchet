import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalServices from '@/components/GlobalServices/GlobalServices';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalServices>
      <App />
    </GlobalServices>
  </React.StrictMode>
);
