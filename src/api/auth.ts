// import {  get } from '@/http/request';

// export const getAuthList =async(data) => {
//     return get({}, '/getAuthList', data);
// };

import service from '@/http/request';
export function getAuthList(data) {
    return service.request({
        url: '/getAuthList',
        method: 'GET',
        data,
    });
}
