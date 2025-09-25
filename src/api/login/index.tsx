import request from "@/utils/services/request";

// 用户相关接口
export const getUserProfile = () => request.get("/user/profile");

export const login = (data: { username: string; password: string }) =>
  request.post("/auth/login", data);

// export const login = async (credentials: { username: string; password: string }) => {
//   // 模拟API请求延迟
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   // 模拟成功响应
//   return { token: 'mocked-jwt-token' };
// };