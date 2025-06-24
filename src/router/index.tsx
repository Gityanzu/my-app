import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '@/layouts/index'
import Home from '@/pages/Home'
import About from '@/pages/About/index'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

// 创建 router 配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
