import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import ErrorPage from './pages/error-page';
import Menu from './pages/Menu';
import MonsterList from './pages/MonsterList';
import MonsterProvider from './components/context/MonsterProvider';
import MonsterEdit from './pages/MonsterEdit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/menu",
    element: <Menu/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/menu/list",
        element: <MonsterList/>,
       
      },
      {
        path: "/menu/edit",
        element: <MonsterEdit/>
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MonsterProvider>
      <RouterProvider router={router}/>
    </MonsterProvider>
  </React.StrictMode>,
)
