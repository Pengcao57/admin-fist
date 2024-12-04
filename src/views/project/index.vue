<template>
    <div class="wrap-content">
        <el-form :inline="true" :model="searchData" class="search-form">
            <el-form-item label="项目名称">
                <el-input v-model="searchData.title" placeholder="请输入项目名称"></el-input>
            </el-form-item>
            <el-form-item label="项目详情">
                <el-input v-model="searchData.introduce" placeholder="请输入项目详情"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch()">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table  :data="dataList" border style="width: 100%">
            <el-table-column prop="id"  label="编号" width="180"></el-table-column>
            <el-table-column prop="title" label="名称" width="180"></el-table-column>
            <el-table-column prop="introduce" label="详情" ></el-table-column>
        </el-table>
        <el-pagination 
        background 
        layout="prev, pager, next, sizes" 
        :total="searchData.dataCount" 
        :page-sizes = "[5,10,15,20]"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" >

        </el-pagination>
    </div>
</template>
<script lang="ts" setup>
import {ref, onMounted, reactive,computed, watch} from 'vue';
import { getProjectList } from '@/api/project';

interface IProject {
    id: number;
    userId: number;
    title: string;
    introduce: string;
}

let projectList= ref<IProject[]>([]);
let searchData =  reactive( {
    introduce:'',
    title:'',
    currentPage : 1,
    dataCount: 0,
    pageSize: 10,
})

onMounted (() => {
    fetchData();
});

const fetchData = ()=> {
    getProjectList().then( (res) => {
        projectList.value =res.data;
        searchData.dataCount= res.data.length;
     });

};
let dataList = computed( () =>{
    return projectList.value.slice (
        (searchData.currentPage-1) * searchData.pageSize,
        searchData.currentPage * searchData.pageSize
    )
});

const handleCurrentChange =( page: number) => {
    searchData.currentPage =page;
};
const handleSizeChange =(pageSize:number) => {
    searchData.pageSize =pageSize;
};
const onSearch= ()=> {
    let res : IProject[] = [];
    if (searchData.title || searchData.introduce) {
        if (searchData.title) {
            res = projectList.value.filter((item) => {
                return item.title.indexOf(searchData.title) > -1;
            });
        }
        if (searchData.introduce){
            res = projectList.value.filter((item) => {
                return item.introduce.indexOf(searchData.introduce)>-1;
            });
        }
    } else {
        res = projectList.value ;

    }
    projectList.value =res;
    searchData.currentPage =1;
    searchData.dataCount = projectList.value.length;
};
watch(
    [ 
      () => searchData.title,
      () => {
            searchData.introduce;
        }
    ],
    () => {
        fetchData(); 
    }
);
</script>

<style lang="less" scoped></style>