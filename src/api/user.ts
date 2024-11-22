import { post ,get} from '@/http/request';
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
  export const userLogin = async (data?: LoginRequest) => {
    return post<LoginResponse>({}, '/login', data);
  };
  
  export const refreshUserInfo = async (data?: reLoginRequest) => {
    return post<LoginResponse>({}, '/getUserInfo', data);
  };