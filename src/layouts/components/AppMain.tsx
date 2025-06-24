import { Outlet, Link } from 'react-router-dom'

export default function AppMain() {
  return (
    <div>
      <main className="p-4">
        <Outlet /> {/* 渲染子页面 */}
      </main>
    </div>
  )
}
