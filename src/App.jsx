import { createBrowserRouter, defer, Outlet, RouterProvider } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Reglage from "./pages/Reglage"
import Error from "./pages/Error"
import Communaute from "./pages/Communaute"
import Profil from "./pages/Profil"

import Sidebar from "./components/sidebar"
import Header from "./components/header"

import "./styles/app.css"
import { getUserByUserId, getActivityByUserId, getAverageSessionsByUserId, getPerformanceByUserId } from "./services/getUserData"
import Authentification from "./pages/Authentification"
import { useState } from "react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Authentification />
      },
      {
        path: "",
        element: <>
          <Header />
          <Outlet />
        </>,
        children: [
          {
            path: "profil/:userId",
            element: <>
              <div className="main-content">
                <Sidebar />
                <Outlet />
              </div>
            </>,
            loader: async ({ params }) => {
              return params.userId === "null" ? window.location.href = window.location.origin : ""
            },
            children: [
              {
                path: "",
                element: <Profil />,
                loader: async ({ params }) => {
                  const userData = getUserByUserId(params.userId)
                  const activity = getActivityByUserId(params.userId)
                  const averageSessions = getAverageSessionsByUserId(params.userId)
                  const performance = getPerformanceByUserId(params.userId)

                  return defer({
                    userData, activity, averageSessions, performance
                  })
                }
              },
              {
                path: "yoga",
                element: <div>Yoga</div>
              },
              {
                path: "swim",
                element: <div>Swim</div>
              },
              {
                path: "bicycle",
                element: <div>Bicycle</div>
              },
              {
                path: "weight",
                element: <div>Weight</div>
              }
            ]
          },
          {
            path: "dashboard/:userId",
            element: <Dashboard />,
            loader: async ({ params }) => {
              return params.userId === "null" ? window.location.href = window.location.origin : ""
            },
          },
          {
            path: "reglage/:userId",
            element: <Reglage />,
            loader: async ({ params }) => {
              return params.userId === "null" ? window.location.href = window.location.origin : ""
            },
          },
          {
            path: "communaute/:userId",
            element: <Communaute />,
            loader: async ({ params }) => {
              return params.userId === "null" ? window.location.href = window.location.origin : ""
            },
          }
        ]
      }
    ]
  }
])

function Root() {
  const [userId, setUserId] = useState(null)


  return <Outlet context={[userId, setUserId]} />
}

function App() {
  return <RouterProvider router={router} />
}

export default App
 