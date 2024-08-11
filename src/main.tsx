import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SnapMeal from './pages/snap/snap-meal.tsx';
import UserProfile from "./pages/social/user-profile.tsx";
import MealPlanner from "./pages/meal-planner/meal-planner.tsx";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/snap",
        element: <SnapMeal />
    },
    {
        path: "/my-profile",
        element: <UserProfile />
    },
    {
        path: "/meal-planner",
        element: <MealPlanner />
    }
    ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
