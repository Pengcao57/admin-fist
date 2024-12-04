// import {  get} from '@/http/request';

// export const getProjectList =async(data) => {
//     return get({}, '/projects', data);
// }
import service from '@/http/request';

export function getProjectList(data) {
    return service.request({
        url: '/projects',
        method: 'GET',
        data,
    });
}