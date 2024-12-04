<template>
    <div class="wrap-about">
        <tag :text="text" :theme="theme"></tag>
        <tag :text="text" :theme="theme"></tag>

    </div>
</template>
<script setup lang="ts">
// import tag from './tag.vue';
import {ref} from 'vue';
const text = ref('大伟');
const theme = ref('black');
</script>
<style lang="less" scoped>
@import  '@/styles/variable.less';
.wrap-about {

    background: var(--dawei-color-dark-black);
}
</style>

