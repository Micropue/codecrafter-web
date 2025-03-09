<template>
    <div>
        <Header></Header>
        <Loader></Loader>
        <el-container>
            <Router-view></Router-view>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import Header from './components/header.vue'
import { onMounted } from 'vue'
import Loader from './components/loader.vue'
import { cookie } from './api/setcookie'
//初始化缓存主题配置
onMounted(()=>{
    const theme = cookie.get('theme')
    if(theme) theme == 'dark' ? document.getElementsByTagName('html')[0].classList.add('dark') : undefined
})
</script>
<style scoped lang="scss">
div {
    width: 100%;
    height: 100%;

    .el-container {
        width: 100%;
        height: 100%;
        padding:10px;
        box-sizing: border-box;
    }
}
</style>