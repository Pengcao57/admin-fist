// import { get } from '@/http/request';

// // 角色列表接口
// export const getRoleList = async (data) => {
//     return get({}, '/getRoleList',data);
// };

import service from '@/http/request';
export function getRoleList(data) {
    return service.request({
        url: '/getRoleList',
        method: 'GET',
        data,
    });
}