import service from '@/utils/request'
 
export const login = (data) => service.post('/login',data)
// export const userList = (data) => service.get('/user/list',{data})