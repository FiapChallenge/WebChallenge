import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home/index.jsx';
import Error from './routes/Error/index.jsx';
import Integrantes from './routes/Integrantes/index.jsx';
import SolicitarGuincho from './routes/SolicitarGuincho/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/integrantes', element: <Integrantes /> },
      { path: '/solicitar-guincho', element: <SolicitarGuincho /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
