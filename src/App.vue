<template>
    <div>
        <Header></Header>
        <el-container>
            <Router-view></Router-view>
        </el-container>
    </div>
</template>
<script setup>
import Header from './components/header.vue'
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