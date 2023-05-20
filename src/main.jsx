import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import Loading from './Components/Loading/Loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div><Loading></Loading></div>}>
    <AuthProvider>
<RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>
    </Suspense>
  </React.StrictMode>,
)
