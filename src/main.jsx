import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Welcome from './pages/Welcome'


const item = "usuario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome /> //Here your FormComponent
  },
  {
    path: "/"+item,
    element: <p>Here your Tabla component !</p>
  },
  {
    path: "/"+item+"/:id",
    element: <p>Here your FormComponent !</p>
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
