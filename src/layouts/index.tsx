import { Outlet, Link } from 'react-router-dom'
import AppMain from './components/AppMain'

export default function layout() {
  return (
    <div>
      <AppMain /> 
    </div>
  )
}

// <header className="p-4 bg-gray-100">
//   <Link to="/home" className="mr-4">首页</Link>
//   <Link to="/about">关于</Link>
// </header>
// <main className="p-4">
//   <Outlet /> {/* 渲染子页面 */}
// </main>