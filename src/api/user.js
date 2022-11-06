import request from '@/utils/request'

// 注册接口
export const register = data => request.post('/user/register', data)

// 登录接口
export const login = data => request.post('/user/login', data)
