import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <article>Home page!</article>
    },
    {
        path: "/log-in",
        element: <article>Log in page!</article>
    },
    {
        path: "/snap",
        element: <article>Snap a meal!</article>
    },
    {
        path: "/my-profile",
        element: <article>My profile!</article>
    },
    {
        path: "/meal-planner",
        element: <article>Meal planner!</article>
    }
    ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
