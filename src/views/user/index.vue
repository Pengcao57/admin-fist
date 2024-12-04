<template>
    <div>
        <el-form :inline="true" class="search-form" :model="searchData">
            <el-form-item label="用户名称" >
                <el-input v-model="searchData.nickName" placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="role">
                <el-select v-model="searchData.role" size="large">
                    <el-option label="全部" :value="0" />
                    <el-option 
                        v-for="item in roleWithAuthList" 
                        :key="item.roleId" 
                        :label="item.roleName" 
                        :value="item.roleId"
                       />
                </el-select>  
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="userList" border style="width: 100%">
            <el-table-column prop="id" label="编号" width="180"> </el-table-column>
            <el-table-column prop="nickName" label="用户昵称" width="180"> </el-table-column>
            <el-table-column prop="role" label="用户角色" width="180">
                <template #default="scope">
                    <el-button
                    v-for="item in scope.row.role" :key="item.role" type="primary" size="small">
                     {{ item.roleName}}
                     </el-button>
                </template> 
                 </el-table-column>
                 <el-table-column prop="role" label="操作">
                    <template #default="scope">
                        <el-button type="primary" @click="handleEditUser(scope.row)" size="small">编辑</el-button>
                    </template>

                 </el-table-column>
        </el-table>
        <el-dialog v-model="editShow" title="编辑用户信息">
            <el-form :model="editUser">
                <el-form-item label="用户昵称" label-width="120px">
                    <el-input v-model="editUser.nickName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户角色" label-width="120px">
                    <el-select v-model="editUser.role" multiple placeholder="请选择角色" size="large">
                        <el-option 
                        v-for="item in roleWithAuthList" 
                        :key="item.roleId" 
                        :label="item.roleName" 
                        :value="item.roleId"
                       />
                    </el-select>
                        
                </el-form-item>
            </el-form>
            <template #footer>
            <span  class="dialog-footer">
                <el-button @click="editShow = false">取 消</el-button>
                <el-button type="primary" @click="ensureEditUser">确 定</el-button>
            </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, watch } from "vue";
import { useUserStore } from '@/store/user';
import { getUserList } from "@/api/user";
import { getRoleList } from "@/api/role";
import {IUser, IQueryUser, IRoleWithAuth, IEditUser} from "@/types/common";
const searchData = reactive<IQueryUser>({
    nickName: '',
    role: 0,
});

let userList= ref<IUser[]>([]);
let roleWithAuthList = ref<IRoleWithAuth[]>([]);
let editShow = ref(false);
let editUser = reactive<IEditUser>({
    id: 0,
    nickName: '',
    role: [],
});

const ensureEditUser = () => {
    editShow.value = false;
    let obj: IUser =userList.value.find((item) => item.id === editUser.id);
    obj.nickName = editUser.nickName;
    obj.role= [];
    // obj.role.splice(0,obj.role.length);
    roleWithAuthList.value.forEach((item) => {
        if (editUser.role.find(value => value === item.roleId)) {
             obj.role.push({ 
                role: item.roleId, 
                roleName: item.roleName
            });
        }
        });
};
const handleEditUser = (row: IUser) => {
    editShow.value = true;
    Object.assign(editUser, {
        ...row,
        role: row.role.map((item) => {
            return item.role;
        }),
    });
    // editUser.id = row.id;
    // editUser.nickName = row.nickName;
    // editUser.role = row.role.map((item) => {
    //     return item.role;
    // });
   
};
const onSearch = () => {
    let res: IUser[]=[];
    if (searchData.nickName || searchData.role){
        if (searchData.nickName){
            res = userList.value.filter((item) => {
                return item.nickName.indexOf(searchData.nickName) !==-1;
            });
        }
        if (searchData.role){
            res = searchData.nickName ? res : userList.value;
            res = res.filter((item) => {
                return item.role.find((value) => {
                     return   value.role === searchData.role;
                    });
            });
        }
        }else {
            res = userList.value;
        }
    userList.value = res; 
};
onMounted(() => {
    fetchUserList();
    fetchRoleList();
});
const fetchUserList = () => {
    getUserList()
    .then((res) => {
        userList.value = res.data;
    })
    .catch((err) => {});
};
const fetchRoleList = () => {
        getRoleList()
            .then((res) => {
                roleWithAuthList.value = res.data;
        })
        .catch((err) => {}); 
}
watch([()=> searchData.nickName , ()=> searchData.role], () => {
    if (searchData.nickName==='' || searchData.role === 0){
          fetchUserList();
    }
}
)
;
</script>
