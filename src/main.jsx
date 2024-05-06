import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Nos traemos lenguajes para hacer el recorrido del modulo
import lenguajes from './datos/lenguajesPro.js'
//Importamos router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LenguajesVistas from './vistas/LenguajesVistasPro.jsx'



const router = [
  {
    path: "/",
    element: <App />,
  },
];

lenguajes.forEach((len) => {
  router.push({
    path: len.ntitulo,
    element: <LenguajesVistas len={len} />,
  });
});

const routes = createBrowserRouter(router)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
