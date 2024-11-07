import { createBrowserRouter, defer, Outlet, RouterProvider } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Reglage from "./pages/Reglage"
import Error from "./pages/Error"
import Communaute from "./pages/Communaute"
import Profil from "./pages/Profil"

import Sidebar from "./components/sidebar"
import Header from "./components/header"

import "./styles/app.css"
import { getUserByUserId, getActivityByUserId, getAverageSessionsByUserId, getPerformanceByUserId } from "./utils/getUserData"

const userId = 12

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "Profil",
            element: <>
            <div className="main-content">
              <Sidebar />
              <Outlet />
            </div>
            </>,
            children: [
              {
                path: "",
                element: <Profil />,
                loader: async () => {
                  const userData = getUserByUserId(userId)
                  const activities = getActivityByUserId(userId)
                  const averageSessions = getAverageSessionsByUserId(userId)
                  const performance = getPerformanceByUserId(userId)
                  return defer({
                    userData, activities, averageSessions, performance
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
            path: "reglage",
            element: <Reglage />
          },
          {
            path: "communaute",
            element: <Communaute />
          }
        ]
      }
    ]
  }
])

function Root() {
  return <>
      <Header />
      <Outlet />
    </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
 