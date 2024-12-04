import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url:'/mock/api/getRoleList',
        method:'get',
        //可以获取请求体
        response:()  => {
            return {
                code: 0,
                data:[
                    {
                        roleName: '管理员',
                        roleId: 1,
                        authority: [1, 2, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16]
                    },
                    {
                        roleName: '普通用户',
                        roleId: 2,
                        authority: [1, 3, 4, 6, 7, 8, 9, 11, 12, 13]
                    }
                ],
                message:'success',
            };

        }
    }
] as MockMethod[];