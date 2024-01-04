import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.tsx';

interface IRoute {
  path: string,
  element: React.ReactElement,
};

const routes: IRoute[] = [
  {
    path: "/",
    element: <h1>Home</h1>
  },
  {
    path: "/about",
    element: <h1>About</h1>
  },
  {
    path: "/blog",
    element: <h1>blog</h1>
  },
  {
    path: "/contact",
    element: <h1>contact</h1>
  },
];


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />
      <Routes>
        {
          routes.map((route) => (<Route {...route} />))
        }
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
