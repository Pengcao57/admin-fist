export interface IRole
{
    role: number;
    roleName: string;
}
export interface IUser
{
    id: number;
    nickName: string;
    role: IRole[];
}
export interface IRoleWithAuth {
    roleId: number;
    roleName: string;
    auth: []; 
}
export interface IQueryUser {
    nickName: string;
    role: number;
}
export interface IEditUser {
    id: number;
    nickName: string;
    role: number[];
}