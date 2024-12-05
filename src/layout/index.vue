<template>
    <div class="wrap-container">
    <router-view />
	<van-tabbar v-model="active" route>
        <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
        <van-tabbar-item replace to="/setting" icon="setting-o">设置</van-tabbar-item>
      </van-tabbar>
    </div>
</template>
<script lang="ts" setup>
// import {useRouter , useRoute} from 'vue-router';
// import { ArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue';
const active = ref<string>('home');

</script>

<style lang="less" scoped>

.wrap-container {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
</style>