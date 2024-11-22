import { MockMethod } from 'vite-plugin-mock';

export default [
    {
        url:'/mock/api/login',
        method: 'post',
        //可以获取请求体
        Response:( {body})  => {
            if (body.username !== body.password) {
            return {
                code: 1,
                message: '用户名或者密码错误',
                data: {
                    username: '',
                    roles: [],
                    accessToken: '',
                }
            };
            
        }
        if (body.username ==='admin'){
            return {
                code: 0,
                message:'登录成功',
                data: {
                    username: 'admin',
                    roles: ['admin'],
                    accessToken: 'admin',
                }
            }
        } else {
            return {
                code: 1,
                message: 'Token失败',
                data: {
                    username: "",
                    roles: [],
                    accessToken: "",
                }
            };
        }

     }
    }
] as MockMethod[];