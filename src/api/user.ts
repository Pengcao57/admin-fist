// import { post ,get} from '@/http/request';
import service from '@/http/request';
// 导入类型
// import { LoginRequest, LoginResponse, reLoginRequest } from '@/api/user/types';



export type LoginRequest = {
    username: string;
    password: string;
}
export type reLoginRequest = {
    accessToken: string;
  };
  
  // 登录后返回的响应信息
  export type LoginResponse = {
    username: string;
    roles: string[];
    accessToken: string;
  };
//定义的接口
  // export const userLogin = async (data?: LoginRequest) => {
  //   return post<LoginResponse>({}, '/login', data);
  // };
  
  // export const refreshUserInfo = async (data?: reLoginRequest) => {
  //   return post<LoginResponse>({}, '/getUserInfo', data);
  // };

  // export const getUserList = async (data) => {
  //   return get({}, '/getUserList',data);
  // };


  export function userLogin(data: LoginRequest) {
    return service.request({
        url: '/login',
        method: 'POST',
        data,
    });
}

export function getUserList(data) {
  return service.request({
      url: '/getUserList',
      method: 'GET',
      data,
  });
}
 