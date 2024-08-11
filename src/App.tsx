import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";
import Snap from "./pages/snap/Snap.tsx";

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
        element: <Snap />
    },
],
{ basename: "/NutriPix" }
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
