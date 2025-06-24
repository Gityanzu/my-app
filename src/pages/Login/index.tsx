import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/api/login'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await login({ username, password })
      localStorage.setItem('token', res.token) // 假设后端返回 { token: 'xxx' }
      navigate('/home')
    } catch (err) {
      alert('登录失败，请检查账号密码')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">登录</h2>
      <input
        className="border p-2 mb-2 w-64"
        placeholder="用户名"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-64"
        placeholder="密码"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleLogin}
      >
        登录
      </button>
    </div>
  )
}
