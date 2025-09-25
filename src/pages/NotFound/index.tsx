import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="mt-2 mb-4 text-gray-600">页面不存在</p>
      <Link to="/home" className="text-blue-600 underline">
        返回首页
      </Link>
    </div>
  )
}
