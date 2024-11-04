import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Dashboard from "./pages/dashboard"
import Profil from "./pages/profil"
import Reglage from "./pages/reglage"
import Error from "./pages/error"
import Communaute from "./pages/communaute"

import Header from "./components/header"
import Sidebar from "./components/Sidebar"

import "./styles/app.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "profil",
        element: <Profil />
      },
      {
        path: "reglage",
        element: <Reglage />
      },
      {
        path: "communaute",
        element: <Communaute />
      }
    ]
  }
])

function Root() {
  return <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Outlet />
      </div>
    </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
 